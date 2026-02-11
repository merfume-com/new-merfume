import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Mail, Phone, MapPin, DollarSign, ShoppingBag, Cookie, Globe, FileText, Download, AlertCircle, CheckCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const lastUpdatedDate = "2024-01-01"; // Update this date as needed

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-2xl">
                <Shield className="w-12 h-12 text-luxury-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Privacy
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent pb-2 md:pb-3">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Last updated: {lastUpdatedDate}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Merfume, your privacy matters. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary Banner */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Lock className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
              <div>
                <p className="text-blue-700 font-medium">
                  We do <span className="font-bold">not</span> sell, rent, or trade your personal data.
                </p>
                <p className="text-sm text-blue-600 mt-1">
                  Your privacy is our priority.
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-blue-300 text-blue-600 hover:bg-blue-50"
              onClick={() => document.getElementById('information-collected')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Data Practices
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Key Principles */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="w-5 h-5 text-gold mr-2" />
                    Our Promise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">No Data Selling</p>
                      <p className="text-xs text-muted-foreground">We never sell your personal data</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                    <Lock className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">SSL Encryption</p>
                      <p className="text-xs text-muted-foreground">Industry-standard security</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                    <Eye className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Your Control</p>
                      <p className="text-xs text-muted-foreground">Access, correct, or delete your data</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Cookie className="w-5 h-5 text-gold mr-2" />
                    Cookie Settings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our website uses cookies to enhance your browsing experience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Essential Cookies</span>
                      <span className="text-green-600 font-medium">Always On</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Analytics</span>
                      <span className="text-amber-600 font-medium">Optional</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Marketing</span>
                      <span className="text-amber-600 font-medium">Optional</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-gold text-gold hover:bg-gold hover:text-luxury-black"
                    onClick={() => alert('Open cookie settings modal here')}
                  >
                    Manage Cookies
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Mail className="w-5 h-5 text-gold mr-2" />
                    Contact Privacy Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      For privacy-related inquiries or to exercise your rights:
                    </p>
                    <Button
                      className="w-full bg-gold hover:bg-gold-dark text-luxury-black font-semibold"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Contact Us
                    </Button>
                    <div className="text-xs text-muted-foreground text-center">
                      Response within 48 hours
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Download className="w-5 h-5 text-gold mr-2" />
                    Download Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-luxury-black"
                    onClick={() => {
                      // Implement PDF download functionality
                      console.log('Download Privacy Policy PDF');
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Version
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content - Privacy Policy Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Information We Collect */}
              <Card id="information-collected" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <User className="w-5 h-5 text-gold mr-2" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      When you visit or purchase from our website, we may collect:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                          <User className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Name</h4>
                        <p className="text-xs text-muted-foreground text-center">Personal identification</p>
                      </div>
                      
                      <div className="flex flex-col items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Email Address</h4>
                        <p className="text-xs text-muted-foreground text-center">Contact information</p>
                      </div>
                      
                      <div className="flex flex-col items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Phone Number</h4>
                        <p className="text-xs text-muted-foreground text-center">Contact information</p>
                      </div>
                      
                      <div className="flex flex-col items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                          <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Address Details</h4>
                        <p className="text-xs text-muted-foreground text-center">Billing & shipping</p>
                      </div>
                      
                      <div className="flex flex-col items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                          <ShoppingBag className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Order Details</h4>
                        <p className="text-xs text-muted-foreground text-center">Purchase information</p>
                      </div>
                      
                      <div className="flex flex-col items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                          <Eye className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Usage Data</h4>
                        <p className="text-xs text-muted-foreground text-center">Device & browsing</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 border border-blue-200 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Important:</span> Providing personal information is voluntary, but required for order fulfillment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Your Information */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Eye className="w-5 h-5 text-gold mr-2" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <ShoppingBag className="w-3 h-3 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Process and Deliver Orders</p>
                          <p className="text-sm text-muted-foreground">Fulfillment and shipping</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Mail className="w-3 h-3 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Communicate Updates</p>
                          <p className="text-sm text-muted-foreground">Order status and support</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <User className="w-3 h-3 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Manage Your Account</p>
                          <p className="text-sm text-muted-foreground">Account maintenance</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Eye className="w-3 h-3 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Improve Products & Website</p>
                          <p className="text-sm text-muted-foreground">Enhance user experience</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-amber-50/80 to-yellow-50/80 border border-amber-200 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Consent Required:</span> Promotional communications are sent only with your explicit consent. You can opt-out anytime.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Lock className="w-5 h-5 text-gold mr-2" />
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/3 mb-6 md:mb-0">
                        <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto">
                          <Lock className="w-12 h-12 text-emerald-600" />
                        </div>
                      </div>
                      <div className="md:w-2/3 md:pl-8">
                        <h3 className="text-xl font-bold text-foreground mb-4">Industry‑Standard Security</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">SSL encryption for all data transmissions</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">Secure payment processing</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">Regular security audits and updates</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">Access controls and authentication</span>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded">
                          <p className="text-sm text-amber-700">
                            <span className="font-medium">Important:</span> While we take reasonable precautions, no online transmission is completely secure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sharing of Information */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="w-5 h-5 text-gold mr-2" />
                    Sharing of Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-4">
                        <Shield className="w-8 h-8 text-red-500 mr-2" />
                        <h3 className="text-xl font-bold text-foreground">We Do NOT Sell Your Data</h3>
                      </div>
                      <p className="text-red-700 font-medium">
                        We do <span className="font-bold">not</span> sell, rent, or trade your personal data.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Information may be shared only:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <ShoppingBag className="w-6 h-6 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-1">Service Providers</h4>
                          <p className="text-xs text-muted-foreground">For order fulfillment and payments</p>
                        </div>
                        
                        <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FileText className="w-6 h-6 text-purple-600" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-1">Legal Compliance</h4>
                          <p className="text-xs text-muted-foreground">To comply with regulatory requirements</p>
                        </div>
                        
                        <div className="text-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
                          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Shield className="w-6 h-6 text-amber-600" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-1">Fraud Prevention</h4>
                          <p className="text-xs text-muted-foreground">To prevent fraud or misuse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Cookie className="w-5 h-5 text-gold mr-2" />
                    Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto">
                        <Cookie className="w-12 h-12 text-amber-600" />
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <p className="text-muted-foreground mb-4">
                        Our website may use cookies to enhance browsing experience and site performance.
                      </p>
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                          <p className="text-sm text-amber-700">
                            You may disable cookies through your browser settings. Note that some features may not function properly without cookies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Eye className="w-5 h-5 text-gold mr-2" />
                    Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      You may request to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Eye className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Access Data</h4>
                        <p className="text-xs text-muted-foreground">Access your personal data</p>
                      </div>
                      
                      <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <FileText className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Correct Information</h4>
                        <p className="text-xs text-muted-foreground">Correct inaccurate information</p>
                      </div>
                      
                      <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Shield className="w-6 h-6 text-red-600" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">Request Deletion</h4>
                        <p className="text-xs text-muted-foreground">Delete your data (subject to legal obligations)</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 border border-blue-200 rounded-lg">
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">How to Exercise Your Rights</h4>
                          <p className="text-sm text-muted-foreground">
                            Requests can be made by contacting our support team. We will respond within 30 days as required by law.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Other Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gold/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="w-5 h-5 text-gold mr-2" />
                      <h3 className="font-semibold text-foreground">Third‑Party Links</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our website may contain links to third‑party sites. We are not responsible for their privacy practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <FileText className="w-5 h-5 text-gold mr-2" />
                      <h3 className="font-semibold text-foreground">Policy Updates</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This Privacy Policy may be updated periodically. Continued use of the website indicates acceptance of any changes.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Governing Law */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Globe className="w-5 h-5 text-gold mr-2" />
                    Governing Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Applicable Law</h3>
                    <p className="text-muted-foreground">
                      This Policy is governed by the laws of India.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Final Notice */}
              <div className="text-center p-8 bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-xl border border-gold/30">
                <div className="mb-4">
                  <Shield className="w-12 h-12 text-gold mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Your Privacy Matters</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    At Merfume, we are committed to protecting your personal information and being transparent about our data practices.
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  © Merfume. All rights reserved. • Last updated: {lastUpdatedDate}
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
              Review our other policies for complete information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Terms of Service</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Terms governing your use of our website
                </p>
                <a
                  href="/terms-of-service"
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
                  Information about delivery timelines and charges
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
                  <DollarSign className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Refund Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Details about eligible refunds and process
                </p>
                <a
                  href="/refund-policy"
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
                <h3 className="font-semibold text-foreground mb-2">Returns Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our return and exchange policies
                </p>
                <a
                  href="/returns-policy"
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
                Your privacy is our priority. We are committed to protecting your personal information.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Privacy & Legal</h3>
              <ul className="space-y-2">
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
                <li>
                  <a
                    href="/cookie-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/data-request"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Data Request Form
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
                    href="/shipping-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="/returns-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Returns & Exchanges
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
              Privacy Policy last updated: {lastUpdatedDate}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
