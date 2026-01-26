import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertCircle, CheckCircle, XCircle, Clock, Package, DollarSign, FileVideo, Mail, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RefundPolicy() {
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
                <DollarSign className="w-12 h-12 text-luxury-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Refund
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Last updated: {lastUpdatedDate}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Merfume, we value transparency and clarity regarding refunds. Our policies are designed for premium products, ensuring hygiene, safety, and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice Banner */}
      <section className="py-8 bg-gradient-to-r from-red-50 to-orange-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-red-700 font-medium">
                Due to the nature of perfumes, all sales are final. Please read this policy carefully.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
              onClick={() => document.getElementById('non-refundable')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Non-Refundable Items
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Quick Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Clock className="w-5 h-5 text-gold mr-2" />
                    Quick Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Non-Refundable Items</p>
                      <p className="text-xs text-muted-foreground">All sales are final</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-amber-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-foreground">24-Hour Window</p>
                      <p className="text-xs text-muted-foreground">Report issues within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Eligible Cases</p>
                      <p className="text-xs text-muted-foreground">Damaged, defective, or incorrect items</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <FileVideo className="w-5 h-5 text-gold mr-2" />
                    Required for Claims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">Clear unboxing video</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">Original packaging</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">Invoice copy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">Report within 24 hours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Mail className="w-5 h-5 text-gold mr-2" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      For refund inquiries, contact our support team.
                    </p>
                    <Button
                      className="w-full bg-gold hover:bg-gold-dark text-luxury-black font-semibold"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Contact Support
                    </Button>
                    <div className="text-xs text-muted-foreground text-center">
                      Response within 24-48 hours
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content - Refund Policy Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Non-Refundable Items */}
              <Card id="non-refundable" className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                    Non-Refundable Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                      <div className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mr-3 mt-0.5" />
                        <p className="text-red-700">
                          Due to the nature of perfumes, <span className="font-bold">all sales are final</span>.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start p-4 bg-red-50/50 border border-red-100 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Delivered in Good Condition</p>
                          <p className="text-sm text-muted-foreground">
                            Refunds are not available for products delivered in good condition.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-4 bg-red-50/50 border border-red-100 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1">Personal Preference</p>
                          <p className="text-sm text-muted-foreground">
                            Fragrance dissatisfaction or opened bottles are not eligible.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-red-50/80 to-pink-50/80 border border-red-200 rounded-lg">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Hygiene & Safety Policy</h4>
                          <p className="text-sm text-muted-foreground">
                            This policy is in place due to hygiene, safety, and authenticity considerations associated with perfumes and attars.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eligible Refunds */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Eligible Refunds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="mb-6">
                      <p className="text-muted-foreground mb-4">
                        Refunds may be considered <span className="font-bold text-foreground">only</span> if the product is:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Package className="w-6 h-6 text-green-600" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-1">Damaged or Leaking</h4>
                          <p className="text-xs text-muted-foreground">Upon delivery</p>
                        </div>
                        
                        <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <AlertCircle className="w-6 h-6 text-green-600" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-1">Defective</h4>
                          <p className="text-xs text-muted-foreground">Non-functional items</p>
                        </div>
                        
                        <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Package className="w-6 h-6 text-green-600" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-1">Incorrect Item</h4>
                          <p className="text-xs text-muted-foreground">Wrong product sent</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Eligibility Requirements:</h4>
                      <div className="space-y-4">
                        <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground mb-1">Report within 24 hours</p>
                            <p className="text-sm text-muted-foreground">
                              You must notify us within 24 hours of delivery
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <FileVideo className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground mb-1">Unboxing Video Required</p>
                            <p className="text-sm text-muted-foreground">
                              Submit a clear, continuous unboxing video from sealed package to product reveal
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <Package className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground mb-1">Original Packaging & Invoice</p>
                            <p className="text-sm text-muted-foreground">
                              Retain original packaging and invoice for verification
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 border border-blue-200 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Important Note</h4>
                          <p className="text-sm text-muted-foreground">
                            Requests without an unboxing video will not be entertained. The unboxing video must be clear, continuous, and show the product from sealed package to reveal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Refund Process */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <DollarSign className="w-5 h-5 text-gold mr-2" />
                    Refund Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Resolution Method</h4>
                        <p className="text-muted-foreground">
                          Upon verification, Merfume may, at its discretion:
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                              <DollarSign className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">Issue a Refund</p>
                              <p className="text-xs text-muted-foreground">To original payment method</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center p-3 bg-amber-50 border border-amber-200 rounded-lg">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                              <Package className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">Replace the Product</p>
                              <p className="text-xs text-muted-foreground">Subject to availability</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Processing Timeline</h4>
                        <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg">
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                              <span className="text-sm text-muted-foreground">Refunds are processed promptly after verification</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                              <span className="text-sm text-muted-foreground">Time to reflect in your account depends on the payment provider</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                              <span className="text-sm text-muted-foreground">Typically 5-10 business days for bank transfers</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-purple-50/80 to-pink-50/80 border border-purple-200 rounded-lg">
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Processing Time</h4>
                          <p className="text-sm text-muted-foreground">
                            The resolution method will depend on product availability and verification outcome. 
                            We aim to complete verification within 3-5 business days of receiving all required documents.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Final Decision */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="w-5 h-5 text-gold mr-2" />
                    Final Decision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Binding Decision</h3>
                      <p className="text-muted-foreground mb-6">
                        All refund decisions made by Merfume are final and binding.
                      </p>
                      <div className="max-w-md mx-auto p-4 bg-white border border-gray-300 rounded-lg">
                        <p className="text-sm text-gray-600">
                          This policy is designed to ensure hygiene, safety, and authenticity standards are maintained for all our premium fragrance products.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Reminders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-amber-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                      <h3 className="font-semibold text-foreground">Non-Eligible Cases</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>Products damaged after delivery</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>Used, opened, or altered products</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>Fragrance dissatisfaction or personal preference</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>Orders placed during sales or promotions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                      <h3 className="font-semibold text-foreground">For Successful Claims</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>Always record unboxing videos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>Check products immediately upon delivery</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>Report issues within 24 hours</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span>Keep original packaging until verification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Footer Notice */}
              <div className="text-center p-8 bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-xl border border-gold/30">
                <div className="mb-4">
                  <Shield className="w-12 h-12 text-gold mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Premium Quality Assurance</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    At Merfume, every fragrance is crafted and packaged with the highest standards of hygiene and care. 
                    Our refund policy reflects our commitment to product safety, authenticity, and customer satisfaction.
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
                  <Package className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Returns Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our non-returnable policy and eligible cases
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
                  <Package className="w-6 h-6 text-gold" />
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
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  How we collect, use, and protect your information
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
                  <Shield className="w-6 h-6 text-gold" />
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
                Premium fragrances crafted with care. Experience luxury with every scent from Merfume.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Customer Support</h3>
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
            <div>
              <h3 className="text-gold font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/refund-policy"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Refund Policy
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
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60">
              © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
            </p>
            <p className="text-cream/60 text-sm mt-2">
              Refund Policy last updated: {lastUpdatedDate}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
