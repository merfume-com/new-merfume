import { useEffect } from "react";
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
} from "lucide-react";
import { blogPosts } from "./Blog";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // If post not found
  if (!post) {
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

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
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
              <span className="bg-gold text-luxury-black font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
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
                <p className="font-semibold text-foreground">{post.author}</p>
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
                    text: post.excerpt,
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
              prose-strong:text-gold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-4 h-4 text-gold" />
              <span className="text-sm text-muted-foreground">Tags:</span>
              <span className="bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full">
                Perfume
              </span>
              <span className="bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full">
                Fragrance
              </span>
            </div>
          </div>

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
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <span className="text-xs text-gold font-semibold">
                        {relatedPost.category}
                      </span>
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
