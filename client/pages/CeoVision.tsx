import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Globe,
  Award,
  Users,
  Crown,
  Sparkles,
  Target,
  TrendingUp,
  Lightbulb,
  Star,
} from "lucide-react";

export default function CeoVision() {
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
              CEO
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence, innovation, and the future of luxury
              perfumery in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Message from Our CEO
            </h2>
          </div>

          <div className="bg-gradient-to-r from-gold/5 via-accent/10 to-gold/5 rounded-2xl p-8 md:p-12 border border-gold/20">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl font-medium text-foreground">
                "At Merfume, we believe that fragrance is more than just a
                scent. it's an emotional journey, a memory, and a connection that
                transcends boundaries."
              </p>
              <p>
                When we embarked on this journey, our vision was simple yet
                profound: to create fragrances that embody the essence of love,
                tradition, and innovation. The word 'Merfume' itself represents
                our deep connection to Arabic heritage and the rich history of
                perfumery that has captivated hearts for centuries.
              </p>
              <p>
                Our commitment extends beyond creating exceptional fragrances.
                We are dedicated to preserving the artisanal traditions while
                embracing modern innovation to serve our customers better. Every
                bottle that leaves our laboratory carries with it a year of
                meticulous development, countless hours of craftsmanship, and an
                unwavering commitment to quality.
              </p>
              <div className="bg-card rounded-lg p-6 border border-gold/20 mt-8">
                <p className="text-gold font-medium text-lg italic">
                  "We don't just sell perfumes; we share emotions, create
                  memories, and foster connections that last a lifetime."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Vision Pillars
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The fundamental principles that guide our company's direction and
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maintaining the highest standards in every aspect of our
                  fragrance creation and customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Blending traditional perfumery techniques with modern
                  technology and sustainable practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Heritage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Honoring the rich traditions of Middle Eastern perfumery while
                  serving a global audience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Connection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building meaningful relationships with our customers through
                  authentic, personal experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-20 bg-gradient-to-r from-gold/5 via-accent/10 to-gold/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Future Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The ambitious objectives that will shape Merfume's tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-gold/20 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Global Expansion
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Expanding our reach to serve fragrance enthusiasts worldwide
                while maintaining our commitment to quality and personalized
                service. We envision Merfume as a global ambassador of authentic
                Middle Eastern perfumery.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-gold/20 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Sustainable Luxury
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Leading the industry in sustainable practices without
                compromising on luxury. Our goal is to achieve carbon neutrality
                while sourcing ingredients ethically and supporting local
                communities.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-gold/20 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Customer Experience
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Revolutionizing the online fragrance shopping experience through
                innovative technology, personalized recommendations, and
                exceptional customer service that makes every interaction
                memorable.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-gold/20 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                  <Crown className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Artisan Development
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Investing in the next generation of perfumers and artisans,
                preserving traditional techniques while fostering innovation in
                fragrance creation and sustainable production methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Commitment
          </h2>
          <div className="bg-gradient-to-r from-accent/20 via-gold/5 to-accent/20 rounded-2xl p-8 md:p-12 border border-gold/20">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl font-medium text-foreground">
                "We commit to creating fragrances that are not just products,
                but experiences that touch the soul."
              </p>
              <p>
                Every decision we make is guided by our core values of
                authenticity, quality, and emotional connection. We believe that
                in a world of mass production, there is still a place for
                handcrafted excellence and personal touch.
              </p>
              <p>
                Our promise to you is simple: every Merfume fragrance will carry
                the essence of our heritage, the innovation of our vision, and
                the love of our craft. This is not just our business model—it's
                our legacy.
              </p>
              <div className="flex justify-center items-center space-x-2 mt-8">
                <Heart className="w-6 h-6 text-gold" />
                <span className="text-gold font-medium">
                  Crafted with Love, Delivered with Care
                </span>
                <Heart className="w-6 h-6 text-gold" />
              </div>
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
