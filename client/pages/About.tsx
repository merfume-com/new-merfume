import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Clock,
  Leaf,
  Award,
  Globe,
  Users,
  Sparkles,
  Flame,
  ShoppingBag,
  Star,
  Crown,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-2xl">
                <Crown className="w-12 h-12 text-luxury-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              About
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Merfume
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind our name, our passion, and our
              commitment to crafting exceptional fragrances for online perfume
              lovers.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-gold">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-gold">
                <ShoppingBag className="w-5 h-5" />
                <span className="text-sm font-medium">Online Store</span>
              </div>
              <div className="flex items-center space-x-2 text-gold">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Made with Love</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merfume Meaning Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Globe className="w-8 h-8 text-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              The Meaning of
              <span className="text-gold"> Merfume</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <div className="bg-background rounded-xl p-8 border border-gold/20 shadow-sm">
                <p className="mb-4">
                  <strong className="text-foreground text-xl">Merfume</strong>{" "}
                  means perfume. Merfume is an Arabic word.
                </p>
                <p className="mb-4">
                  Why is perfume called merfume in Arabic? Because the Arabic
                  language does not have the sound of "P", that's why they use
                  the sound of "M".
                </p>
                <p className="text-gold font-medium text-lg">
                  This linguistic beauty reflects our deep connection to the
                  rich heritage of perfumery that originated in the Middle East.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-20 bg-gradient-to-r from-gold/5 via-accent/10 to-gold/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-gold/20">
            <div className="text-center">
              <Heart className="w-16 h-16 text-gold mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Welcome to the World of Merfume
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl text-gold font-medium mb-8">
                  Thank you for purchasing our affection & love.
                </p>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p className="text-xl">This is not just another perfume.</p>
                  <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-lg p-6 border-l-4 border-gold">
                    <p className="text-foreground font-medium text-lg">
                      Rather, this is a closeness, familiarity, affection,
                      warmth, belonging, kinship, friendship, love, nearness,
                      and inseparability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Some Information On Your Perfume
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our meticulous process and unwavering commitment to
              excellence in online perfume retail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  1 Year Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We take as long as 1 year to develop each perfume, and we do
                  not compromise on its aesthetic nor quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  100% Vegan
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All our perfumes, candles, and other creations are vegan,
                  ensuring ethical luxury for our online customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Hand Crafted
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your perfume has been compounded by hand by a trained lab
                  technician that follows strict protocols.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-accent/20 via-gold/5 to-accent/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Uncompromising Quality
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your creation is a mix of ingredients that needs to be
                  equilibrated with its host. Slight olfactory evolution may
                  occur over time.
                </p>
                <p>
                  Deposits and coloration may appear, especially with sweeter
                  olfactive themes. They do not alter olfactory rendering and
                  remain safe to use.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-gold/20">
                <p className="text-gold font-medium text-lg mb-2">
                  Premium Ingredients Promise
                </p>
                <p className="text-muted-foreground">
                  These deposits are due to the high quality of the raw
                  ingredients used in the composition of the perfume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Care Instructions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proper care ensures your perfume maintains its quality and
              longevity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gold/5 to-accent/10 rounded-lg p-8 border border-gold/20 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">
                  Long-term Storage
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We advise you to store your scent in the refrigerator if you
                will not use it for a long time. This preserves the molecular
                structure of the fragrance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/5 to-accent/10 rounded-lg p-8 border border-gold/20 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                  <Flame className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">
                  Daily Care
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                For frequent users, keep it away from light and heat to preserve
                the fragrance's integrity and extend its lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Merfume Online Store?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the finest in online perfume shopping
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="w-10 h-10 text-luxury-black" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Premium Oud & Attars
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Authentic Middle Eastern fragrances and traditional attars
                sourced from the finest materials
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-luxury-black" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Crafted with Love
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Each fragrance represents closeness, warmth, and the emotional
                connection we share with our customers
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ShoppingBag className="w-10 h-10 text-luxury-black" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Convenient Online Shopping
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Browse our complete collection from home with detailed
                descriptions and secure checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-luxury-black to-luxury-black/90 text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Crown className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              The principles that guide our online perfume business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-luxury-black/50 rounded-xl p-8 border border-gold/20">
              <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Love & Affection</h3>
              <p className="text-cream/80 leading-relaxed">
                Every bottle is created with genuine care and affection, making
                each fragrance a personal connection of love, nearness, and
                inseparability.
              </p>
            </div>
            <div className="bg-luxury-black/50 rounded-xl p-8 border border-gold/20">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-cream/80 leading-relaxed">
                We never compromise on quality, ensuring each creation meets our
                highest standards of aesthetic and olfactory excellence.
              </p>
            </div>
            <div className="bg-luxury-black/50 rounded-xl p-8 border border-gold/20">
              <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Heritage</h3>
              <p className="text-cream/80 leading-relaxed">
                Honoring the rich tradition of Middle Eastern perfumery while
                creating modern masterpieces that bridge cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
                alt="Merfume"
                className="h-20 w-auto mb-4 brightness-110"
              />
              <p className="text-cream/80 max-w-md">
                Discover the world of luxury fragrances with Merfume. Each scent
                tells a story, each bottle holds a memory.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
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
                    to="/ceo-vision"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    CEO Vision
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
              <h3 className="text-gold font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
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
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
