import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase env vars. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ✅ Admin user ID (env se aata hai)
export const ADMIN_USER_ID =
  import.meta.env.VITE_ADMIN_USER_ID ||
  "00000000-0000-0000-0000-000000000001";

// ✅ Types
export interface Post {
  id: string;
  author_id: string;
  category_id: string | null;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  status: "draft" | "published" | "archived";
  is_featured: boolean;
  views_count: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  category?: { id: string; name: string; slug: string } | null;
  author?: { id: string; full_name: string | null; email: string } | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}
