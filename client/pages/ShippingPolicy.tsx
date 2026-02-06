import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, Package, Shield, Truck, AlertCircle, MapPin, FileText } from "lucide-react";

export default function ShippingPolicy() {
  const lastUpdatedDate = "2024-01-01"; // Update this date as needed

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
                <Truck className="w-12 h-12 text-luxury-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Shipping
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Last updated: {lastUpdatedDate}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Merfume, we ensure every order is handled with care and delivered as efficiently as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Quick Links */}
            <div className="lg:col-span-1">
              <Card className="border-gold/20 shadow-lg sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <FileText className="w-5 h-5 text-gold mr-2" />
                    Policy Sections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <a
                      href="#order-processing"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Clock className="w-4 h-4 mr-3 text-gold" />
                      <span>Order Processing</span>
                    </a>
                    <a
                      href="#delivery-timeline"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <CalendarDays className="w-4 h-4 mr-3 text-gold" />
                      <span>Delivery Timeline</span>
                    </a>
                    <a
                      href="#shipping-charges"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Package className="w-4 h-4 mr-3 text-gold" />
                      <span>Shipping Charges</span>
                    </a>
                    <a
                      href="#address-responsibility"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <MapPin className="w-4 h-4 mr-3 text-gold" />
                      <span>Address Responsibility</span>
                    </a>
                    <a
                      href="#order-tracking"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Truck className="w-4 h-4 mr-3 text-gold" />
                      <span>Order Tracking</span>
                    </a>
                    <a
                      href="#delivery-attempts"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <AlertCircle className="w-4 h-4 mr-3 text-gold" />
                      <span>Delivery Attempts</span>
                    </a>
                    <a
                      href="#packaging-safety"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Shield className="w-4 h-4 mr-3 text-gold" />
                      <span>Packaging & Safety</span>
                    </a>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content - Shipping Policy Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Order Processing */}
              <Card id="order-processing" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Clock className="w-5 h-5 text-gold mr-2" />
                    Order Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground">
                        Orders are processed within <span className="font-semibold text-foreground">12–24 business hours</span> after confirmation.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground">
                        Orders placed after <span className="font-semibold text-foreground">5:00 PM IST</span>, on <span className="font-semibold text-foreground">Sundays</span>, or <span className="font-semibold text-foreground">public holidays</span> are processed the next business day.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Delivery Timeline */}
              <Card id="delivery-timeline" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <CalendarDays className="w-5 h-5 text-gold mr-2" />
                    Delivery Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground">
                        Standard delivery across India takes <span className="font-semibold text-foreground">5–7 working days</span>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground">
                        Delivery timelines are estimates and may vary due to location, courier delays, weather, or other external factors. We are not responsible for this, but in this condition we are with you.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Shipping Charges */}
              <Card id="shipping-charges" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Package className="w-5 h-5 text-gold mr-2" />
                    Shipping Charges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/20">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Package className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Free Shipping</h3>
                      <p className="text-muted-foreground">Across all India orders</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address Responsibility */}
              <Card id="address-responsibility" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <MapPin className="w-5 h-5 text-gold mr-2" />
                    Address Responsibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-muted-foreground mb-4">
                      Customers are responsible for providing accurate and complete delivery details. We are not liable for delays, losses, or failed deliveries caused by incorrect or incomplete addresses.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                      <div className="flex">
                        <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                        <div>
                          <p className="text-sm text-red-700">
                            <span className="font-semibold">Important:</span> In this condition you are responsible for the extra courier charges. We are not responsible for this, but in this condition we are with you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Tracking */}
              <Card id="order-tracking" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Truck className="w-5 h-5 text-gold mr-2" />
                    Order Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mr-4">
                      <Truck className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Once dispatched, tracking details will be shared via SMS or email. Delivery status can be monitored using the provided tracking link.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Attempts */}
              <Card id="delivery-attempts" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <AlertCircle className="w-5 h-5 text-gold mr-2" />
                    Delivery Attempts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Courier partners may attempt delivery multiple times. If delivery fails due to customer unavailability or incorrect information, additional re-shipping charges may apply.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
                      <div>
                        <p className="text-sm text-yellow-700">
                          <span className="font-semibold">Note:</span> Please ensure someone is available at the delivery address during business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Packaging & Safety */}
              <Card id="packaging-safety" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="w-5 h-5 text-gold mr-2" />
                    Packaging & Safety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      All products are securely packed to prevent leakage or damage during transit.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <div className="flex">
                        <Shield className="w-5 h-5 text-blue-400 mr-2" />
                        <div>
                          <p className="text-sm text-blue-700">
                            <span className="font-semibold">Important Safety Tip:</span> Customers are advised to record an unboxing video at the time of delivery for any future support requests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delays & Force Majeure */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <AlertCircle className="w-5 h-5 text-gold mr-2" />
                    Delays & Force Majeure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Merfume shall not be held responsible for delays caused by events beyond reasonable control, including natural disasters, strikes, government restrictions, or logistics disruptions. But in this condition we are with you.
                  </p>
                </CardContent>
              </Card>

              {/* Important Note */}
              <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 p-8 rounded-xl border border-gold/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <AlertCircle className="w-8 h-8 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Important Information</h3>
                    <p className="text-muted-foreground">
                      For any issues with delivery, damaged products, or incorrect items, please refer to our Returns & Refunds Policy section for detailed information on eligibility and resolution process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Policies Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Policies
            </h2>
            <p className="text-lg text-muted-foreground">
              For complete information, please review our other policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Returns Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our non-returnable policy for perfumes and eligible cases
                </p>
                <a
                  href="/returns-policy"
                  className="text-gold hover:text-gold-dark text-sm font-medium"
                >
                  Read Policy →
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Understand how we collect, use, and protect your personal information
                </p>
                <a
                  href="/privacy-policy"
                  className="text-gold hover:text-gold-dark text-sm font-medium"
                >
                  Read Policy →
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Refund Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Details about eligible refunds and our refund process
                </p>
                <a
                  href="/return-policy"
                  className="text-gold hover:text-gold-dark text-sm font-medium"
                >
                  Read Policy →
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Terms of Service</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Terms governing your use of our website and services
                </p>
                <a
                  href="/terms-of-service"
                  className="text-gold hover:text-gold-dark text-sm font-medium"
                >
                  Read Policy →
                </a>
              </CardContent>
            </Card>
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
              <p className="text-cream/80 max-w-md leading-relaxed">
                Luxury fragrances crafted with care. Experience the essence of elegance with Merfume.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Store
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/shipping-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/returns-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
            <p className="text-cream/60 text-sm mt-2">
              Last updated: {lastUpdatedDate}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
