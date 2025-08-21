'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { authService, type AuthUser, type AuthState } from '@/lib/auth'

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signUp: (email: string, password: string, name: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<{ error: Error | null }>
  resetPassword: (email: string) => Promise<{ error: Error | null }>
  updatePassword: (password: string) => Promise<{ error: Error | null }>
  // Role-based access control
  hasRole: (roles: string[]) => boolean
  isOwner: () => boolean
  isManager: () => boolean
  canManageInventory: () => boolean
  canManageOrders: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    // Get initial user
    authService.getCurrentUser().then((user) => {
      setState({
        user,
        loading: false,
        error: null,
      })
    })

    // Listen for auth changes
    const { data: { subscription } } = authService.onAuthStateChange((user) => {
      setState(prev => ({
        ...prev,
        user,
        loading: false,
      }))
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    const { error } = await authService.signIn(email, password)
    
    if (error) {
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error.message 
      }))
      return { error }
    }

    return { error: null }
  }

  const signUp = async (email: string, password: string, name: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    const { error } = await authService.signUp(email, password, name)
    
    if (error) {
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error.message 
      }))
      return { error }
    }

    return { error: null }
  }

  const signOut = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    const { error } = await authService.signOut()
    
    setState(prev => ({ 
      ...prev, 
      user: null, 
      loading: false,
      error: error?.message || null
    }))

    return { error }
  }

  const resetPassword = async (email: string) => {
    setState(prev => ({ ...prev, error: null }))
    return await authService.resetPassword(email)
  }

  const updatePassword = async (password: string) => {
    setState(prev => ({ ...prev, error: null }))
    return await authService.updatePassword(password)
  }

  // Role-based access control methods
  const hasRole = (roles: string[]) => authService.hasRole(state.user, roles)
  const isOwner = () => authService.isOwner(state.user)
  const isManager = () => authService.isManager(state.user)
  const canManageInventory = () => authService.canManageInventory(state.user)
  const canManageOrders = () => authService.canManageOrders(state.user)

  const value: AuthContextType = {
    ...state,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    hasRole,
    isOwner,
    isManager,
    canManageInventory,
    canManageOrders,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
