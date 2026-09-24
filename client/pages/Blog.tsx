import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Calendar,
  Clock,
  Search,
  ArrowRight,
  Tag,
  Sparkles,
  Heart,
  Crown,
  Star,
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Layering Perfumes: Create Your Signature Scent",
    excerpt:
      "Learn how to combine multiple fragrances to create a unique, personalized scent that's exclusively yours.",
    content: `
      <p>Perfume layering is an art form that allows you to create a truly unique fragrance that reflects your personality. By combining two or more scents, you can craft a signature aroma that no one else possesses.</p>

      <h2>The Basics of Layering</h2>
      <p>Start with a base fragrance — typically something woody, musky, or amber-based. This provides the foundation for your layered scent. Then, add a complementary top note fragrance, such as a citrus, floral, or fresh scent.</p>

      <h2>Golden Rules of Layering</h2>
      <ul>
        <li>Always apply the heaviest fragrance first</li>
        <li>Use lighter scents on top</li>
        <li>Test on skin, not paper</li>
        <li>Start with small quantities</li>
        <li>Give each layer time to settle</li>
      </ul>

      <h2>Popular Combinations</h2>
      <p>Try pairing oud with rose, vanilla with amber, or citrus with musk. These classic combinations create a balanced, sophisticated fragrance profile.</p>

      <h2>Conclusion</h2>
      <p>Layering is about experimentation and personal expression. Don't be afraid to try new combinations — you might discover your perfect signature scent.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&auto=format&fit=crop",
    category: "Guides",
    author: "Merfume Team",
    date: "2024-03-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Oud: The Liquid Gold of Middle Eastern Perfumery",
    excerpt:
      "Discover the rich history and luxurious appeal of oud, the most precious ingredient in perfumery.",
    content: `
      <p>Oud, also known as agarwood, has been treasured for centuries in Middle Eastern culture. Its deep, complex aroma is often described as woody, smoky, and slightly sweet.</p>

      <h2>The Origins of Oud</h2>
      <p>Oud is derived from the resinous heartwood of Aquilaria trees, primarily found in Southeast Asia. When the tree becomes infected with a specific type of mold, it produces a dark, fragrant resin as a defense mechanism.</p>

      <h2>Why Oud Is So Precious</h2>
      <p>It takes decades for a tree to produce high-quality oud, making it one of the most expensive raw materials in the world. A single kilogram of premium oud oil can cost upwards of $100,000.</p>

      <h2>Oud in Modern Perfumery</h2>
      <p>Today, oud is used in a wide range of luxury fragrances, from traditional attars to modern designer perfumes. It blends beautifully with rose, saffron, and amber.</p>

      <h2>Conclusion</h2>
      <p>Oud represents the pinnacle of luxury in perfumery. Its timeless appeal continues to captivate fragrance enthusiasts across the globe.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&auto=format&fit=crop",
    category: "Ingredients",
    author: "Merfume Team",
    date: "2024-03-10",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 3,
    title: "How to Make Your Perfume Last Longer: 10 Expert Tips",
    excerpt:
      "Maximize the longevity of your favorite fragrance with these professional techniques.",
    content: `
      <p>Making your perfume last longer requires understanding how fragrance interacts with your skin and environment. Here are 10 expert tips to help you get the most out of your favorite scent.</p>

      <h2>1. Moisturize First</h2>
      <p>Apply fragrance to moisturized skin. Dry skin absorbs fragrance quickly and loses it faster.</p>

      <h2>2. Target Pulse Points</h2>
      <p>Apply to pulse points — wrists, neck, behind ears, and inside elbows. These areas emit heat that diffuses the fragrance throughout the day.</p>

      <h2>3. Don't Rub</h2>
      <p>Never rub your wrists together after applying perfume. This breaks down the fragrance molecules and reduces longevity.</p>

      <h2>4. Layer Your Scents</h2>
      <p>Use matching body lotion, shower gel, and perfume to intensify and extend the scent.</p>

      <h2>5. Apply to Hair</h2>
      <p>Hair holds fragrance beautifully. Spray lightly onto your hairbrush or directly on your hair from a distance.</p>

      <h2>6. Store Properly</h2>
      <p>Keep perfume away from direct sunlight and heat. A cool, dark place preserves the fragrance best.</p>

      <h2>7. Use Petroleum Jelly</h2>
      <p>Apply a thin layer of petroleum jelly to pulse points before spraying. It helps the fragrance cling to your skin longer.</p>

      <h2>8. Spray on Clothing</h2>
      <p>Lightly spray on your clothing, especially on scarves and jackets, for a long-lasting trail.</p>

      <h2>9. Choose Eau de Parfum or Parfum</h2>
      <p>These concentrations last much longer than Eau de Toilette or cologne.</p>

      <h2>10. Reapply Strategically</h2>
      <p>Carry a travel-sized version and reapply at key moments — after lunch or before evening events.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1200&auto=format&fit=crop",
    category: "Tips",
    author: "Merfume Team",
    date: "2024-03-05",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "The Meaning Behind Merfume: A Journey Through Arabic Heritage",
    excerpt:
      "Explore the linguistic beauty and cultural significance behind our brand name.",
    content: `
      <p>The word <strong>Merfume</strong> carries deep meaning rooted in Arabic tradition. It means "perfume" — and its story is as fragrant as the scents we craft.</p>

      <h2>A Linguistic Journey</h2>
      <p>The Arabic language does not have the sound of "P". That's why Arabic speakers use the sound of "M" instead. So "perfume" becomes "merfume" — a beautiful adaptation that reflects the language's unique character.</p>

      <h2>More Than a Name</h2>
      <p>For us, Merfume is more than just a brand. It represents closeness, familiarity, affection, warmth, belonging, kinship, friendship, love, nearness, and inseparability.</p>

      <h2>Our Promise</h2>
      <p>Every bottle we create carries this promise — that you're not just buying perfume. You're experiencing a connection.</p>

      <h2>Heritage Meets Modernity</h2>
      <p>We honor the rich tradition of Middle Eastern perfumery while creating modern masterpieces that bridge cultures and generations.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&auto=format&fit=crop",
    category: "Brand Story",
    author: "Merfume Team",
    date: "2024-02-28",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Spring Fragrance Guide: Fresh Scents for the New Season",
    excerpt:
      "Welcome spring with our curated selection of light, floral, and refreshing fragrances.",
    content: `
      <p>Spring is the perfect time to refresh your fragrance wardrobe. As the weather warms up and flowers bloom, it's time to swap heavy winter scents for lighter, fresher options.</p>

      <h2>Top Spring Fragrance Families</h2>
      <ul>
        <li><strong>Floral:</strong> Rose, jasmine, peony, and lily of the valley</li>
        <li><strong>Citrus:</strong> Bergamot, lemon, neroli, and grapefruit</li>
        <li><strong>Green:</strong> Fresh cut grass, vetiver, and green tea</li>
        <li><strong>Aquatic:</strong> Sea salt, marine notes, and water lily</li>
      </ul>

      <h2>Our Spring Picks</h2>
      <p>Explore our collection of spring-appropriate fragrances that capture the essence of renewal and growth.</p>

      <h2>How to Transition</h2>
      <p>Don't abandon your winter favorites entirely. Layer them with lighter scents to create a smooth seasonal transition.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1595425964072-7c6e8b4b02b4?w=1200&auto=format&fit=crop",
    category: "Seasonal",
    author: "Merfume Team",
    date: "2024-02-20",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Attar vs. Alcohol-Based Perfumes: Which Is Right for You?",
    excerpt:
      "Understand the differences between traditional attars and modern alcohol-based fragrances.",
    content: `
      <p>The choice between attar and alcohol-based perfume depends on various factors — your skin type, personal preference, and the occasion.</p>

      <h2>What Is Attar?</h2>
      <p>Attar (also spelled ittar) is a traditional oil-based perfume, typically made from natural botanical sources. It's alcohol-free and known for its intense, long-lasting scent.</p>

      <h2>What Are Alcohol-Based Perfumes?</h2>
      <p>Modern perfumes use alcohol as a carrier to disperse fragrance oils. They're lighter, project further, and evaporate faster than attars.</p>

      <h2>Key Differences</h2>
      <ul>
        <li><strong>Longevity:</strong> Attars last longer on the skin</li>
        <li><strong>Projection:</strong> Alcohol-based perfumes project further</li>
        <li><strong>Skin Sensitivity:</strong> Attars are gentler, good for sensitive skin</li>
        <li><strong>Cultural Preference:</strong> Attars are preferred in Middle Eastern traditions</li>
      </ul>

      <h2>Which Should You Choose?</h2>
      <p>If you prefer a subtle, long-lasting scent that stays close to the skin, choose attar. If you want a lighter, fresher fragrance with more projection, go for an alcohol-based perfume.</p>

      <h2>Best of Both Worlds</h2>
      <p>Many fragrance enthusiasts keep both in their collection and choose based on the season, occasion, and mood.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1615368144595-8b8b0f7e6e88?w=1200&auto=format&fit=crop",
    category: "Guides",
    author: "Merfume Team",
    date: "2024-02-15",
    readTime: "8 min read",
  },
];

const categories = [
  "All",
  "Guides",
  "Ingredients",
  "Tips",
  "Brand Story",
  "Seasonal",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-2xl">
                <BookOpen className="w-10 h-10 text-luxury-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Merfume
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Journal
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the world of luxury fragrances, discover expert tips, and
              dive deep into the art of perfumery with our curated articles.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 text-gold">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Expert Insights</span>
              </div>
              <div className="flex items-center space-x-2 text-gold">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Crafted with Love</span>
              </div>
              <div className="flex items-center space-x-2 text-gold">
                <Crown className="w-5 h-5" />
                <span className="text-sm font-medium">Premium Content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-10 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gold hover:bg-gold-dark text-luxury-black font-semibold"
                      : "border-gold/30 text-foreground hover:border-gold hover:text-gold"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-gold fill-current" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Featured Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group block"
                >
                  <Card className="overflow-hidden border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-luxury-black text-xs font-semibold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3 text-gold" />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all">
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

      {/* All Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gold/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(0, visiblePosts).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-luxury-black/80 backdrop-blur-sm text-gold text-xs font-semibold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center text-gold text-sm font-medium">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {visiblePosts < filteredPosts.length && (
                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    onClick={() => setVisiblePosts((prev) => prev + 3)}
                    className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold px-8"
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-accent/20 to-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-gold/20 text-center">
            <Sparkles className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay in the Fragrance Loop
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive fragrance tips, new
              product launches, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-gold/30 bg-background text-foreground focus:border-gold focus:outline-none"
              />
              <Button className="bg-gold hover:bg-gold-dark text-luxury-black font-semibold whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black text-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
                alt="Merfume"
                className="h-16 w-auto mb-3 brightness-110"
              />
              <p className="text-cream/80 text-sm max-w-md">
                Discover the world of luxury fragrances with Merfume. Each scent
                tells a story, each bottle holds a memory.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-3 text-sm">
                Quick Links
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-3 text-sm">Support</h3>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link
                    to="/track-order"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Shipping Policies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-to-manage-fragrance"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Fragrance care tips
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-8 pt-6 text-center">
            <p className="text-cream/60 text-xs">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
