import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hylacnyupknrxzjovlct.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5bGFjbnl1cGtucnh6am92bGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4ODYyMDIsImV4cCI6MjAzNzQ2MjIwMn0.Ug967JMaI_olHvYGarudACyfmn0ZpYNmxV4SGNmv1gQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
