import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Star,
  Search,
  BookOpen,
  FileText,
  CheckCircle,
  Clock,
  Archive,
  LogOut,
  Loader2,
} from "lucide-react";
import { supabase, Post } from "@/lib/supabase";
import { useAdminAuth } from "@/hooks/useAdminAuth";

type StatusFilter = "all" | "draft" | "published" | "archived";

export default function AdminBlogDashboard() {
  const { loading: authLoading, isAdmin } = useAdminAuth();
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select(
        `*,
        category:categories(id, name, slug),
        author:profiles(id, full_name, email)
        `
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) fetchPosts();
  }, [isAdmin]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    setActionLoading(id);
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      alert("Error deleting post: " + error.message);
    } else {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
    setActionLoading(null);
  };

  const handleToggleStatus = async (
    id: string,
    currentStatus: Post["status"]
  ) => {
    setActionLoading(id);
    const newStatus = currentStatus === "published" ? "draft" : "published";
    const updates: any = { status: newStatus };
    if (newStatus === "published") updates.published_at = new Date().toISOString();

    const { error } = await supabase
      .from("posts")
      .update(updates)
      .eq("id", id);

    if (error) {
      alert("Error updating status: " + error.message);
    } else {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === id
            ? { ...p, status: newStatus, published_at: updates.published_at || p.published_at }
            : p
        )
      );
    }
    setActionLoading(null);
  };

  const handleToggleFeatured = async (id: string, isFeatured: boolean) => {
    setActionLoading(id);
    const { error } = await supabase
      .from("posts")
      .update({ is_featured: !isFeatured })
      .eq("id", id);

    if (error) {
      alert("Error: " + error.message);
    } else {
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, is_featured: !isFeatured } : p))
      );
    }
    setActionLoading(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const filteredPosts = posts.filter((post) => {
    const matchesStatus =
      statusFilter === "all" || post.status === statusFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: posts.length,
    published: posts.filter((p) => p.status === "published").length,
    drafts: posts.filter((p) => p.status === "draft").length,
    archived: posts.filter((p) => p.status === "archived").length,
  };

  if (authLoading || !isAdmin) {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-8 h-8 text-gold" />
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Blog Management
                </h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Create, edit, and manage all your blog articles
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-gold/30 text-gold hover:bg-gold hover:text-luxury-black"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
              <Link to="/admin/blog/new">
                <Button className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold">
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-border/50">
              <CardContent className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {stats.total}
                  </p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {stats.published}
                  </p>
                  <p className="text-xs text-muted-foreground">Published</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {stats.drafts}
                  </p>
                  <p className="text-xs text-muted-foreground">Drafts</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-500/10 rounded-full flex items-center justify-center">
                  <Archive className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {stats.archived}
                  </p>
                  <p className="text-xs text-muted-foreground">Archived</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(["all", "published", "draft", "archived"] as StatusFilter[]).map(
                (status) => (
                  <Button
                    key={status}
                    size="sm"
                    variant={statusFilter === status ? "default" : "outline"}
                    onClick={() => setStatusFilter(status)}
                    className={
                      statusFilter === status
                        ? "bg-gold hover:bg-gold-dark text-luxury-black font-semibold capitalize"
                        : "border-gold/30 capitalize hover:border-gold hover:text-gold"
                    }
                  >
                    {status}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Posts List */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-gold mx-auto" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-lg border border-border/50">
              <BookOpen className="w-16 h-16 text-gold/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No posts found
              </h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery || statusFilter !== "all"
                  ? "Try changing filters or search query."
                  : "Start by creating your first blog post!"}
              </p>
              <Link to="/admin/blog/new">
                <Button className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Post
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-border/50 hover:border-gold/50 transition-colors"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                      {/* Cover Image */}
                      <div className="w-full md:w-32 h-24 flex-shrink-0 rounded-md overflow-hidden bg-accent/20">
                        {post.cover_image_url ? (
                          <img
                            src={post.cover_image_url}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-gold/30" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold text-foreground line-clamp-1">
                            {post.title}
                          </h3>
                          {post.is_featured && (
                            <Star className="w-4 h-4 text-gold fill-current" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {post.excerpt || "No excerpt"}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                          <span
                            className={`px-2 py-0.5 rounded-full font-medium ${
                              post.status === "published"
                                ? "bg-green-500/10 text-green-600"
                                : post.status === "draft"
                                ? "bg-orange-500/10 text-orange-500"
                                : "bg-gray-500/10 text-gray-500"
                            }`}
                          >
                            {post.status}
                          </span>
                          {post.category && (
                            <span className="text-gold">
                              {post.category.name}
                            </span>
                          )}
                          <span>
                            {new Date(post.created_at).toLocaleDateString()}
                          </span>
                          <span>{post.views_count} views</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            handleToggleFeatured(post.id, post.is_featured)
                          }
                          disabled={actionLoading === post.id}
                          title="Toggle featured"
                          className="text-gold hover:text-gold hover:bg-gold/10"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              post.is_featured ? "fill-current" : ""
                            }`}
                          />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            handleToggleStatus(post.id, post.status)
                          }
                          disabled={actionLoading === post.id}
                          title={
                            post.status === "published"
                              ? "Unpublish"
                              : "Publish"
                          }
                          className="hover:text-gold"
                        >
                          {post.status === "published" ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                        <Link to={`/admin/blog/edit/${post.id}`}>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="hover:text-gold"
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(post.id)}
                          disabled={actionLoading === post.id}
                          className="hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
