export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      restaurants: {
        Row: {
          id: string
          name: string
          address: string
          phone: string
          email: string
          settings: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          address: string
          phone: string
          email: string
          settings?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          address?: string
          phone?: string
          email?: string
          settings?: Json
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          name: string
          role: 'OWNER' | 'MANAGER' | 'KITCHEN_STAFF' | 'WAITSTAFF'
          restaurant_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          role?: 'OWNER' | 'MANAGER' | 'KITCHEN_STAFF' | 'WAITSTAFF'
          restaurant_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: 'OWNER' | 'MANAGER' | 'KITCHEN_STAFF' | 'WAITSTAFF'
          restaurant_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string
          restaurant_id: string
          sort_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          restaurant_id: string
          sort_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          restaurant_id?: string
          sort_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      menu_items: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          category_id: string
          restaurant_id: string
          image_url: string | null
          is_available: boolean
          preparation_time: number
          ingredients: Json
          allergens: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          category_id: string
          restaurant_id: string
          image_url?: string | null
          is_available?: boolean
          preparation_time?: number
          ingredients?: Json
          allergens?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          category_id?: string
          restaurant_id?: string
          image_url?: string | null
          is_available?: boolean
          preparation_time?: number
          ingredients?: Json
          allergens?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      inventory_items: {
        Row: {
          id: string
          name: string
          description: string
          unit: string
          current_stock: number
          minimum_stock: number
          max_stock: number
          cost: number
          supplier_id: string | null
          restaurant_id: string
          expiry_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          unit: string
          current_stock: number
          minimum_stock: number
          max_stock: number
          cost: number
          supplier_id?: string | null
          restaurant_id: string
          expiry_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          unit?: string
          current_stock?: number
          minimum_stock?: number
          max_stock?: number
          cost?: number
          supplier_id?: string | null
          restaurant_id?: string
          expiry_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      stock_transactions: {
        Row: {
          id: string
          inventory_item_id: string
          type: 'IN' | 'OUT' | 'ADJUSTMENT' | 'WASTE'
          quantity: number
          reason: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          inventory_item_id: string
          type: 'IN' | 'OUT' | 'ADJUSTMENT' | 'WASTE'
          quantity: number
          reason: string
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          inventory_item_id?: string
          type?: 'IN' | 'OUT' | 'ADJUSTMENT' | 'WASTE'
          quantity?: number
          reason?: string
          user_id?: string
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          order_number: string
          customer_name: string
          customer_phone: string
          customer_email: string | null
          type: 'DINE_IN' | 'TAKEAWAY' | 'DELIVERY' | 'WEB_ORDER' | 'WHATSAPP'
          status: 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED'
          table_number: string | null
          delivery_address: string | null
          subtotal: number
          tax: number
          total: number
          payment_status: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED'
          payment_method: string
          special_instructions: string | null
          restaurant_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          order_number: string
          customer_name: string
          customer_phone: string
          customer_email?: string | null
          type: 'DINE_IN' | 'TAKEAWAY' | 'DELIVERY' | 'WEB_ORDER' | 'WHATSAPP'
          status?: 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED'
          table_number?: string | null
          delivery_address?: string | null
          subtotal: number
          tax: number
          total: number
          payment_status?: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED'
          payment_method: string
          special_instructions?: string | null
          restaurant_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          order_number?: string
          customer_name?: string
          customer_phone?: string
          customer_email?: string | null
          type?: 'DINE_IN' | 'TAKEAWAY' | 'DELIVERY' | 'WEB_ORDER' | 'WHATSAPP'
          status?: 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED'
          table_number?: string | null
          delivery_address?: string | null
          subtotal?: number
          tax?: number
          total?: number
          payment_status?: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED'
          payment_method?: string
          special_instructions?: string | null
          restaurant_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          menu_item_id: string
          quantity: number
          price: number
          customizations: Json
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          menu_item_id: string
          quantity: number
          price: number
          customizations?: Json
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          menu_item_id?: string
          quantity?: number
          price?: number
          customizations?: Json
          notes?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'OWNER' | 'MANAGER' | 'KITCHEN_STAFF' | 'WAITSTAFF'
      order_type: 'DINE_IN' | 'TAKEAWAY' | 'DELIVERY' | 'WEB_ORDER' | 'WHATSAPP'
      order_status: 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED'
      payment_status: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED'
      transaction_type: 'IN' | 'OUT' | 'ADJUSTMENT' | 'WASTE'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
