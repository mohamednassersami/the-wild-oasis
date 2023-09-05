import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vutxehljdkbfutgbtwyf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dHhlaGxqZGtiZnV0Z2J0d3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MzI5ODEsImV4cCI6MjAwOTQwODk4MX0.EjIsiNL9GS6uBhZUHvW1zTj9v9VEM-o-_cAVe_OcPRs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
