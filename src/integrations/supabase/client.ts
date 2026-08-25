import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.trim();
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

/**
 * The UI must remain usable even before Supabase credentials are configured.
 * A placeholder client prevents a missing local .env file from crashing React
 * during module initialization; network features will still fail gracefully
 * until real credentials are supplied.
 */
export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY,
);

const clientUrl = SUPABASE_URL || 'https://placeholder.supabase.co';
const clientKey = SUPABASE_PUBLISHABLE_KEY || 'placeholder-key';

export const supabase = createClient<Database>(clientUrl, clientKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const supabaseConfigMessage =
  'Supabase is not configured. Add VITE_SUPABASE_URL and ' +
  'VITE_SUPABASE_PUBLISHABLE_KEY to your .env file, then restart Vite.';
