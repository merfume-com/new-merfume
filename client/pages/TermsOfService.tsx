import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Globe, Lock, AlertTriangle, FileText, ShoppingBag, Scale, Building, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
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
                <Scale className="w-12 h-12 text-luxury-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Terms of
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Last updated: {lastUpdatedDate}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These Terms of Service govern your use of the Merfume website and related services.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Important Notice</h3>
                <p className="text-muted-foreground">
                  By accessing or using our Website (<a href="https://merfume.in" className="text-gold hover:text-gold-dark font-medium">https://merfume.in</a>), 
                  you agree to be bound by these Terms of Service. If you do not agree, please do not use the Website.
                </p>
              </div>
            </div>
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
                    Terms Sections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <a
                      href="#website-use"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Globe className="w-4 h-4 mr-3 text-gold" />
                      <span>Website Use</span>
                    </a>
                    <a
                      href="#intellectual-property"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Shield className="w-4 h-4 mr-3 text-gold" />
                      <span>Intellectual Property</span>
                    </a>
                    <a
                      href="#account-security"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Lock className="w-4 h-4 mr-3 text-gold" />
                      <span>Account Security</span>
                    </a>
                    <a
                      href="#restrictions"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <AlertTriangle className="w-4 h-4 mr-3 text-gold" />
                      <span>Restrictions</span>
                    </a>
                    <a
                      href="#orders-payments"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <ShoppingBag className="w-4 h-4 mr-3 text-gold" />
                      <span>Orders & Payments</span>
                    </a>
                    <a
                      href="#liability"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Scale className="w-4 h-4 mr-3 text-gold" />
                      <span>Liability</span>
                    </a>
                    <a
                      href="#governing-law"
                      className="flex items-center p-3 rounded-lg hover:bg-gold/10 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Building className="w-4 h-4 mr-3 text-gold" />
                      <span>Governing Law</span>
                    </a>
                  </nav>

                  {/* Download Button */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      className="w-full border-gold text-gold hover:bg-gold hover:text-luxury-black"
                      onClick={() => {
                        // Function to generate and download PDF
                        const content = document.querySelector('.terms-content')?.innerHTML;
                        console.log('Download Terms PDF (Implement PDF generation logic)');
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Terms (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content - Terms Details */}
            <div className="lg:col-span-2 space-y-8 terms-content">
              {/* Website Use */}
              <Card id="website-use" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Globe className="w-5 h-5 text-gold mr-2" />
                    Website Use
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        You confirm you are legally capable of entering a binding agreement in India.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        Use the Website for lawful purposes only.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card id="intellectual-property" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="w-5 h-5 text-gold mr-2" />
                    Intellectual Property
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        All website content—including trademarks, logos, designs, text, and images—is owned by Merfume.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        Viewing and personal use are permitted; any commercial use is prohibited.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Security */}
              <Card id="account-security" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Lock className="w-5 h-5 text-gold mr-2" />
                    Account Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        User IDs, passwords, and account details are confidential.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        You are responsible for all activity on your account.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        Notify Merfume immediately of any unauthorized use.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Restrictions */}
              <Card id="restrictions" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <AlertTriangle className="w-5 h-5 text-gold mr-2" />
                    Restrictions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground mb-3">Do not:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start p-4 bg-red-50/50 border border-red-100 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-muted-foreground">
                          Copy, sell, or commercialize any website content
                        </p>
                      </div>
                      <div className="flex items-start p-4 bg-red-50/50 border border-red-100 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-muted-foreground">
                          Disrupt or damage the Website or its systems
                        </p>
                      </div>
                      <div className="flex items-start p-4 bg-red-50/50 border border-red-100 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-muted-foreground">
                          Use automated tools to extract data
                        </p>
                      </div>
                      <div className="flex items-start p-4 bg-red-50/50 border border-red-100 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-muted-foreground">
                          Engage in unlawful, misleading, or abusive activities
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Orders & Payments */}
              <Card id="orders-payments" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <ShoppingBag className="w-5 h-5 text-gold mr-2" />
                    Orders & Payments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        Orders are subject to availability and acceptance.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        Prices are in INR and may change without notice.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        Merfume may cancel orders due to stock unavailability, pricing errors, or suspected misuse.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                      </div>
                      <p className="text-muted-foreground">
                        COD availability is subject to verification.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card id="liability" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Scale className="w-5 h-5 text-gold mr-2" />
                    Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-lg border border-amber-100">
                    <div className="flex items-start">
                      <Scale className="w-8 h-8 text-amber-500 flex-shrink-0 mr-4" />
                      <div>
                        <p className="text-muted-foreground text-lg">
                          Merfume is not liable for indirect, incidental, or consequential damages arising from your use of the Website or purchased products.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Indemnification */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="w-5 h-5 text-gold mr-2" />
                    Indemnification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <Shield className="w-8 h-8 text-blue-500 flex-shrink-0 mr-4" />
                      <div>
                        <p className="text-muted-foreground text-lg">
                          You agree to indemnify Merfume from any claims, losses, or liabilities arising from your misuse of the Website or breach of these Terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Modifications */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <FileText className="w-5 h-5 text-gold mr-2" />
                    Modifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start p-4 bg-accent/5 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">
                      Merfume may update these Terms at any time. Continued use indicates acceptance of revised Terms.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card id="governing-law" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Building className="w-5 h-5 text-gold mr-2" />
                    Governing Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-br from-purple-50/50 to-violet-50/50 rounded-lg border border-purple-100">
                    <div className="flex items-start">
                      <Building className="w-8 h-8 text-purple-500 flex-shrink-0 mr-4" />
                      <div>
                        <p className="text-muted-foreground text-lg mb-2">
                          These Terms are governed by the laws of India. All disputes are subject to the jurisdiction of Indian courts.
                        </p>
                        <div className="flex items-center mt-4 text-sm text-purple-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          <span>Jurisdiction: Indian Courts</span>
                        </div>
                        <div className="flex items-center mt-2 text-sm text-purple-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          <span>Applicable Law: Laws of India</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Final Notice */}
              <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 p-8 rounded-xl border border-gold/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Shield className="w-8 h-8 text-gold" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Agreement to Terms</h3>
                      <p className="text-muted-foreground">
                        By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                      </p>
                    </div>
                  </div>
                  {/* <div className="text-center">
                    <p className="text-sm text-muted-foreground">© Merfume. All rights reserved.</p>
                    <p className="text-xs text-muted-foreground mt-1">Last updated: {lastUpdatedDate}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Related Policies
            </h2>
            <p className="text-lg text-muted-foreground">
              For complete information, please review our other important policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how we collect, use, and protect your personal information
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
                  <ShoppingBag className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Shipping Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Information about order processing, delivery timelines, and charges
                </p>
                <a
                  href="/shipping-policy"
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
                <h3 className="font-semibold text-foreground mb-2">Returns Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Details about our return and exchange policies
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
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Refund Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Information about eligible refunds and our refund process
                </p>
                <a
                  href="/refund-policy"
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
              <h3 className="text-gold font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Terms of Service
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
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/contact"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Store Locator
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
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
            <p className="text-cream/60 text-sm mt-2">
              Terms of Service last updated: {lastUpdatedDate}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
