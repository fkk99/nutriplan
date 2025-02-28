import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

const supabaseUrl = 'https://vizbgpbhgrobqelbrqhv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpemJncGJoZ3JvYnFlbGJycWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2OTQwMDgsImV4cCI6MjA1NjI3MDAwOH0.kJLBZGS188xaR1ZHmlJTWciKQelBpF_IjxkGsssh0Lc'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)