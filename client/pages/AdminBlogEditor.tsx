import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Save,
  Loader2,
  Image as ImageIcon,
  Star,
} from "lucide-react";
import { supabase, Category, ADMIN_USER_ID } from "@/lib/supabase";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function AdminBlogEditor() {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [saving, setSaving] = useState(false);
  const [loadingPost, setLoadingPost] = useState(isEdit);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image_url: "",
    category_id: "",
    status: "draft" as "draft" | "published" | "archived",
    is_featured: false,
  });

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from("categories")
        .select("*")
        .order("name");
      setCategories(data || []);
    };
    fetchCategories();
  }, []);

  // Fetch post if editing
  useEffect(() => {
    if (!isEdit) return;
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        alert("Error loading post: " + error.message);
        navigate("/admin/blog");
        return;
      }

      setForm({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt || "",
        content: data.content,
        cover_image_url: data.cover_image_url || "",
        category_id: data.category_id || "",
        status: data.status,
        is_featured: data.is_featured,
      });
      setLoadingPost(false);
    };
    fetchPost();
  }, [id, isEdit, navigate]);

  // Auto-generate slug
  useEffect(() => {
    if (!isEdit && form.title && !form.slug) {
      setForm((prev) => ({ ...prev, slug: slugify(prev.title) }));
    }
  }, [form.title, isEdit, form.slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.slug || !form.content) {
      alert("Title, slug, and content are required.");
      return;
    }

    if (!isEdit && !ADMIN_USER_ID) {
      alert(
        "ADMIN_USER_ID is not set. Add VITE_ADMIN_USER_ID to your .env file."
      );
      return;
    }

    setSaving(true);

    const payload: any = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt || null,
      content: form.content,
      cover_image_url: form.cover_image_url || null,
      category_id: form.category_id || null,
      status: form.status,
      is_featured: form.is_featured,
    };

    if (form.status === "published") {
      payload.published_at = new Date().toISOString();
    }

    let error;

    if (isEdit) {
      const res = await supabase.from("posts").update(payload).eq("id", id);
      error = res.error;
    } else {
      const res = await supabase.from("posts").insert({
        ...payload,
        author_id: ADMIN_USER_ID,
      });
      error = res.error;
    }

    setSaving(false);

    if (error) {
      alert("Error saving post: " + error.message);
    } else {
      navigate("/admin/blog");
    }
  };

  const update = (field: string, value: any) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (loadingPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-background to-accent/20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/admin/blog")}
            className="text-gold hover:text-gold hover:bg-gold/10 mb-3 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog Dashboard
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {isEdit ? "Edit Post" : "Create New Post"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {isEdit
              ? "Update your blog article"
              : "Write and publish a new blog article"}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => update("title", e.target.value)}
                    placeholder="Enter post title"
                    className="w-full px-4 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => update("slug", e.target.value)}
                    placeholder="post-url-slug"
                    className="w-full px-4 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none font-mono text-sm"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    URL: /blog/{form.slug || "your-slug"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Excerpt
                  </label>
                  <textarea
                    value={form.excerpt}
                    onChange={(e) => update("excerpt", e.target.value)}
                    placeholder="Short description (shown on blog listing)"
                    rows={3}
                    className="w-full px-4 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cover Image URL
                  </label>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="url"
                        value={form.cover_image_url}
                        onChange={(e) =>
                          update("cover_image_url", e.target.value)
                        }
                        placeholder="https://..."
                        className="w-full pl-10 pr-4 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none"
                      />
                    </div>
                    {form.cover_image_url && (
                      <div className="w-20 h-10 rounded overflow-hidden bg-accent/20">
                        <img
                          src={form.cover_image_url}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Content * (HTML supported)
                  </label>
                  <textarea
                    value={form.content}
                    onChange={(e) => update("content", e.target.value)}
                    placeholder="<p>Write your article here...</p>"
                    rows={16}
                    className="w-full px-4 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none font-mono text-sm resize-y"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    HTML tags supported: &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;,
                    &lt;strong&gt;, etc.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Category
                  </label>
                  <select
                    value={form.category_id}
                    onChange={(e) => update("category_id", e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none"
                  >
                    <option value="">No category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) => update("status", e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-5">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Featured
                  </label>
                  <button
                    type="button"
                    onClick={() => update("is_featured", !form.is_featured)}
                    className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md border transition-colors ${
                      form.is_featured
                        ? "bg-gold/10 border-gold text-gold"
                        : "border-gold/30 text-muted-foreground hover:border-gold"
                    }`}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        form.is_featured ? "fill-current" : ""
                      }`}
                    />
                    {form.is_featured ? "Featured" : "Not Featured"}
                  </button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/blog")}
                className="border-gold/30 text-foreground hover:border-gold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    {isEdit ? "Update Post" : "Create Post"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
