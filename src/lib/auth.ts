import { createBrowserSupabaseClient } from './supabase'
import type { User } from '@supabase/supabase-js'

export interface AuthUser extends User {
  user_metadata: {
    name?: string
    role?: 'OWNER' | 'MANAGER' | 'KITCHEN_STAFF' | 'WAITSTAFF'
    restaurant_id?: string
  }
}

export interface AuthState {
  user: AuthUser | null
  loading: boolean
  error: string | null
}

export class AuthService {
  private supabase = createBrowserSupabaseClient()

  async signUp(email: string, password: string, name: string) {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role: 'OWNER', // Default role for new signups
          }
        }
      })

      if (error) throw error

      // Create user profile in our users table
      if (data.user) {
        const { error: profileError } = await this.supabase
          .from('users')
          .insert({
            id: data.user.id,
            email: data.user.email!,
            name,
            role: 'OWNER',
          })

        if (profileError) {
          console.error('Error creating user profile:', profileError)
        }
      }

      return { data, error: null }
    } catch (error) {
      return { data: null, error: error as Error }
    }
  }

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error as Error }
    }
  }

  async signOut() {
    try {
      const { error } = await this.supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error as Error }
    }
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const { data: { user }, error } = await this.supabase.auth.getUser()
      if (error || !user) return null

      // Get additional user data from our users table
      const { data: userData, error: userError } = await this.supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()

      if (userError) {
        console.error('Error fetching user data:', userError)
        return user as AuthUser
      }

      return {
        ...user,
        user_metadata: {
          ...user.user_metadata,
          name: userData.name,
          role: userData.role,
          restaurant_id: userData.restaurant_id,
        }
      } as AuthUser
    } catch (error) {
      console.error('Error getting current user:', error)
      return null
    }
  }

  onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return this.supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const user = await this.getCurrentUser()
        callback(user)
      } else {
        callback(null)
      }
    })
  }

  async resetPassword(email: string) {
    try {
      const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error as Error }
    }
  }

  async updatePassword(password: string) {
    try {
      const { error } = await this.supabase.auth.updateUser({
        password,
      })
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error as Error }
    }
  }

  // Role-based access control helpers
  hasRole(user: AuthUser | null, roles: string[]): boolean {
    if (!user?.user_metadata?.role) return false
    return roles.includes(user.user_metadata.role)
  }

  isOwner(user: AuthUser | null): boolean {
    return this.hasRole(user, ['OWNER'])
  }

  isManager(user: AuthUser | null): boolean {
    return this.hasRole(user, ['OWNER', 'MANAGER'])
  }

  canManageInventory(user: AuthUser | null): boolean {
    return this.hasRole(user, ['OWNER', 'MANAGER', 'KITCHEN_STAFF'])
  }

  canManageOrders(user: AuthUser | null): boolean {
    return this.hasRole(user, ['OWNER', 'MANAGER', 'KITCHEN_STAFF', 'WAITSTAFF'])
  }
}

export const authService = new AuthService()
