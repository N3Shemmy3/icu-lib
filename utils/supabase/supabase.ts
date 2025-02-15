import { createClient } from "@supabase/supabase-js";
import { useRuntimeConfig } from "#imports"; // Make sure this import is present!

export const useSupabase = () => {
  const runtimeConfig = useRuntimeConfig(); // Call INSIDE the function!
  const supabaseUrl = runtimeConfig.public.supabaseUrl;
  const supabaseKey = runtimeConfig.public.supabaseKey;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Missing Supabase configuration. Check your .env file or runtime config."
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  return supabase;
};
