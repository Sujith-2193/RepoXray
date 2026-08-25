import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.trim();
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

function isUsableSupabaseUrl(value?: string) {
  if (!value || value.includes('your-project.supabase.co')) return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

function isUsableSupabaseKey(value?: string) {
  return Boolean(
    value &&
    value !== 'your-supabase-anon-or-publishable-key' &&
    value !== 'placeholder-key',
  );
}

/**
 * The UI must remain usable even before Supabase credentials are configured.
 * A placeholder client prevents a missing local .env file from crashing React
 * during module initialization; network features are blocked with a clear
 * configuration message until real credentials are supplied.
 */
export const isSupabaseConfigured =
  isUsableSupabaseUrl(SUPABASE_URL) && isUsableSupabaseKey(SUPABASE_PUBLISHABLE_KEY);

const clientUrl = isSupabaseConfigured
  ? SUPABASE_URL!
  : 'https://placeholder.supabase.co';
const clientKey = isSupabaseConfigured
  ? SUPABASE_PUBLISHABLE_KEY!
  : 'placeholder-key';

export const supabase = createClient<Database>(clientUrl, clientKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const supabaseConfigMessage =
  'Supabase is not configured. Add valid VITE_SUPABASE_URL and ' +
  'VITE_SUPABASE_PUBLISHABLE_KEY values to your .env file, then restart Vite. ' +
  'The Supabase project must also have the RepoXray Edge Functions deployed.';
