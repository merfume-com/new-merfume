import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  User,
  Share2,
  BookOpen,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { supabase, Post } from "@/lib/supabase";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setNotFound(false);

      const { data, error } = await supabase
        .from("posts")
        .select(
          `*,
          category:categories(id, name, slug),
          author:profiles(id, full_name, email)
          `
        )
        .eq("id", id)
        .eq("status", "published")
        .single();

      if (error || !data) {
        console.error("Error fetching post:", error);
        setNotFound(true);
        setLoading(false);
        return;
      }

      setPost(data);

      // Increment views_count (fire and forget)
      supabase
        .from("posts")
        .update({ views_count: (data.views_count || 0) + 1 })
        .eq("id", data.id)
        .then();

      // Fetch related posts (same category)
      if (data.category_id) {
        const { data: related } = await supabase
          .from("posts")
          .select(
            `*,
            category:categories(id, name, slug)
            `
          )
          .eq("status", "published")
          .eq("category_id", data.category_id)
          .neq("id", data.id)
          .limit(3);

        setRelatedPosts(related || []);
      }

      setLoading(false);
    };

    if (id) fetchPost();
  }, [id]);

  const getReadTime = (content: string) => {
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-32">
          <Loader2 className="w-10 h-10 animate-spin text-gold" />
        </div>
      </div>
    );
  }

  // Not found
  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <BookOpen className="w-16 h-16 text-gold/30 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog">
            <Button className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {post.cover_image_url ? (
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gold/30 via-accent/40 to-luxury-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="text-gold hover:text-gold hover:bg-gold/10 mb-4 -ml-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            <div className="flex items-center gap-3 mb-4 text-xs text-cream/80 flex-wrap">
              {post.category && (
                <span className="bg-gold text-luxury-black font-semibold px-3 py-1 rounded-full">
                  {post.category.name}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(
                  post.published_at || post.created_at
                ).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {getReadTime(post.content)}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                {post.views_count} views
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author Info */}
          <div className="flex items-center justify-between border-b border-border pb-6 mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-luxury-black" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {post.author?.full_name || "Merfume Team"}
                </p>
                <p className="text-xs text-muted-foreground">
                  Fragrance Expert
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt || "",
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="border-gold/30 text-gold hover:bg-gold hover:text-luxury-black"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Content */}
          <article
            className="prose prose-lg max-w-none 
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-muted-foreground prose-li:mb-2
              prose-strong:text-gold
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.category && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-4 h-4 text-gold" />
                <span className="text-sm text-muted-foreground">Tags:</span>
                <span className="bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full">
                  {post.category.name}
                </span>
                <span className="bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full">
                  Perfume
                </span>
                <span className="bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full">
                  Fragrance
                </span>
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-10">
            <Link to="/blog">
              <Button
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold hover:text-luxury-black"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group block"
                >
                  <Card className="overflow-hidden border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="relative h-48 overflow-hidden">
                      {relatedPost.cover_image_url ? (
                        <img
                          src={relatedPost.cover_image_url}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-accent/20">
                          <BookOpen className="w-10 h-10 text-gold/30" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      {relatedPost.category && (
                        <span className="text-xs text-gold font-semibold">
                          {relatedPost.category.name}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <span className="inline-flex items-center text-gold text-sm font-medium">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-luxury-black text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-cream/20 pt-6 text-center">
            <p className="text-cream/60 text-xs">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
