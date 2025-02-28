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
      products: {
        Row: {
          id: string
          name: string
          price: string
          unit_price: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          price: string
          unit_price?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: string
          unit_price?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      product_images: {
        Row: {
          product_id: string
          image_url: string
          created_at: string
          updated_at: string
        }
        Insert: {
          product_id: string
          image_url: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          product_id?: string
          image_url?: string
          created_at?: string
          updated_at?: string
        }
      }
      price_components: {
        Row: {
          product_id: string
          prefix: string | null
          integer: string
          decimal: string
          unit: string
          created_at: string
          updated_at: string
        }
        Insert: {
          product_id: string
          prefix?: string | null
          integer: string
          decimal: string
          unit: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          product_id?: string
          prefix?: string | null
          integer?: string
          decimal?: string
          unit?: string
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      product_categories: {
        Row: {
          product_id: string
          category_id: string
          created_at: string
        }
        Insert: {
          product_id: string
          category_id: string
          created_at?: string
        }
        Update: {
          product_id?: string
          category_id?: string
          created_at?: string
        }
      }
      nutritional_info: {
        Row: {
          product_id: string
          serving_size: string | null
          calories_per_serving: number | null
          protein_g: number | null
          fat_g: number | null
          carbs_g: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          product_id: string
          serving_size?: string | null
          calories_per_serving?: number | null
          protein_g?: number | null
          fat_g?: number | null
          carbs_g?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          product_id?: string
          serving_size?: string | null
          calories_per_serving?: number | null
          protein_g?: number | null
          fat_g?: number | null
          carbs_g?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      product_tags: {
        Row: {
          product_id: string
          tag: string
          created_at: string
        }
        Insert: {
          product_id: string
          tag: string
          created_at?: string
        }
        Update: {
          product_id?: string
          tag?: string
          created_at?: string
        }
      }
    }
  }
}