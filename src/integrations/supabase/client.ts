import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY,
);

// A harmless fallback keeps the frontend bootable when local environment
// variables have not been configured. Feature calls should check
// isSupabaseConfigured and show a setup error instead of crashing at import time.
const clientUrl = SUPABASE_URL || "https://repoxray.invalid";
const clientKey = SUPABASE_PUBLISHABLE_KEY || "repoxray-local-placeholder-key";

export const supabase = createClient<Database>(clientUrl, clientKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
