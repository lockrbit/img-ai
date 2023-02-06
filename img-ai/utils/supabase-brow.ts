// Supabase Client
import { createBrowserSupabaseClient, createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './database.types'

export const createClient = () => createBrowserSupabaseClient<Database>()