import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Package, 
  UserCircle, 
  DollarSign, 
  Calendar, 
  Truck, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Download,
  Eye,
  Home,
  ChevronRight,
  Loader2,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  FileText,
  ExternalLink
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation"
import axios from "axios";
import { Link } from "react-router-dom";

export default function OrderTrackingPage() {
  const [trackingOrderNumber, setTrackingOrderNumber] = useState("");
  const [trackedOrder, setTrackedOrder] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeStatusTab, setActiveStatusTab] = useState("details");

  // Base URL for API - yahaan aapka actual base URL daalein
  const API_BASE_URL = "https://6a3dfa7e05c5.ngrok-free.app";

  // Function to track order by order number
  const trackOrderByNumber = async () => {
    if (!trackingOrderNumber.trim()) {
      setError("Please enter an order number");
      return;
    }

    setIsLoading(true);
    setError("");
    setTrackedOrder(null);

    try {
      // API endpoint sahi karna hai
      const response = await axios.get(
        `${API_BASE_URL}/api/customer/track-orders/${trackingOrderNumber.trim()}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
            'Accept': 'application/json'
          }
        }
      );
      
      console.log("Track Order API Response:", response.data);
      
      // Response directly set karna hai
      setTrackedOrder(response.data);
      setError("");
    } catch (err: any) {
      console.error("Error tracking order:", err);
      if (err.response?.status === 404) {
        setError("Order not found. Please check your order number and try again.");
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Failed to track order. Please try again later.");
      }
      setTrackedOrder(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Get status badge color
  const getStatusBadge = (status: string) => {
    if (!status) return "bg-gray-50 text-gray-700 border-gray-200";
    
    switch(status.toUpperCase()) {
      case "PENDING":
      case "PROCESSING":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "COMPLETED":
      case "DELIVERED":
        return "bg-green-50 text-green-700 border-green-200";
      case "CANCELLED":
      case "FAILED":
        return "bg-red-50 text-red-700 border-red-200";
      case "SHIPPED":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    if (!status) return <Package className="w-4 h-4" />;
    
    switch(status.toUpperCase()) {
      case "PENDING":
      case "PROCESSING":
        return <Clock className="w-4 h-4" />;
      case "COMPLETED":
      case "DELIVERED":
        return <CheckCircle className="w-4 h-4" />;
      case "CANCELLED":
      case "FAILED":
        return <XCircle className="w-4 h-4" />;
      case "SHIPPED":
        return <Truck className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  // Get progress percentage based on status
  const getOrderProgress = (status: string) => {
    if (!status) return 0;
    
    switch(status.toUpperCase()) {
      case "PENDING":
        return 25;
      case "PROCESSING":
        return 50;
      case "SHIPPED":
        return 75;
      case "DELIVERED":
      case "COMPLETED":
        return 100;
      case "CANCELLED":
        return 0;
      default:
        return 0;
    }
  };

  // Order status timeline
  const getStatusSteps = (currentStatus: string) => {
    if (!currentStatus) currentStatus = "";
    
    const steps = [
      { key: "PENDING", label: "Order Placed", icon: "📝" },
      { key: "PROCESSING", label: "Processing", icon: "⚙️" },
      { key: "SHIPPED", label: "Shipped", icon: "🚚" },
      { key: "DELIVERED", label: "Delivered", icon: "✅" },
      { key: "COMPLETED", label: "Completed", icon: "🏁" },
    ];
    
    const currentStatusIndex = steps.findIndex(step => step.key === currentStatus.toUpperCase());
    
    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentStatusIndex,
      current: index === currentStatusIndex,
    }));
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Format currency for display
  const formatCurrency = (amount: number) => {
    if (!amount && amount !== 0) return "₹0.00";
    return `₹${amount.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Breadcrumb */}
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your order number below to get real-time updates on your order status, 
            shipping information, and delivery estimates.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Truck className="w-6 h-6 text-blue-600" />
                Order Tracking
              </CardTitle>
              <CardDescription>
                Enter your order number to track your order status
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Enter order number (e.g., ORD-1769862961995-v9ygfvve2)"
                      value={trackingOrderNumber}
                      onChange={(e) => setTrackingOrderNumber(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && trackOrderByNumber()}
                      className="pl-10 h-12 text-base border-2 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <Button 
                    onClick={trackOrderByNumber}
                    disabled={isLoading || !trackingOrderNumber.trim()}
                    className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Tracking...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Track Order
                      </>
                    )}
                  </Button>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                    <div className="font-medium flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Unable to track order
                    </div>
                    <div className="text-sm mt-1">{error}</div>
                  </div>
                )}

                {/* Tips */}
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-medium text-gray-700 mb-2">📌 Where to find your order number?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Check your order confirmation email</li>
                    <li>• Look in your account's order history</li>
                    <li>• Find it on your invoice/receipt</li>
                    <li>• Contact customer support if you've lost it</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        {trackedOrder && (
          <div className="space-y-8">
            {/* Order Status Overview */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-6 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Order Found! 🎉</h3>
                      <p className="text-gray-600">
                        Your order is <span className="font-semibold">{trackedOrder.status || "Pending"}</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1 pl-12">
                    <p className="text-sm text-gray-700">
                      Order #: <span className="font-mono font-semibold">{trackedOrder.orderNumber}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Placed on {formatDate(trackedOrder.orderDate)}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-white text-gray-800 border hover:bg-gray-50">
                    <Download className="w-4 h-4 mr-2" />
                    Download Invoice
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Truck className="w-4 h-4 mr-2" />
                    Track Shipment
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-8">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Order Status</span>
                  <span>{trackedOrder.status || "Pending"}</span>
                </div>
                <Progress value={getOrderProgress(trackedOrder.status)} className="h-3" />
                
                {/* Status Steps */}
                <div className="flex justify-between mt-6">
                  {getStatusSteps(trackedOrder.status).map((step, index) => (
                    <div key={step.key} className="flex flex-col items-center relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        step.completed 
                          ? 'bg-green-100 text-green-700 border-2 border-green-300' 
                          : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                      }`}>
                        <span className="text-lg">{step.icon}</span>
                      </div>
                      <span className={`text-xs font-medium ${step.completed ? 'text-green-700' : 'text-gray-500'}`}>
                        {step.label}
                      </span>
                      {step.current && (
                        <div className="absolute -bottom-6 text-xs font-semibold text-blue-600">
                          Current
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Details Tabs */}
            <Tabs defaultValue="details" value={activeStatusTab} onValueChange={setActiveStatusTab}>
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="details" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Order Details
                </TabsTrigger>
                <TabsTrigger value="items" className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Items ({trackedOrder.items?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="shipping" className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  Shipping Info
                </TabsTrigger>
                <TabsTrigger value="payment" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Payment
                </TabsTrigger>
              </TabsList>

              {/* Order Details Tab */}
              <TabsContent value="details" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Order Value</CardDescription>
                      <CardTitle className="text-2xl">
                        {formatCurrency(trackedOrder.total)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-green-600">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span className="text-sm">Total amount</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Items</CardDescription>
                      <CardTitle className="text-2xl">
                        {trackedOrder.items?.length || 0}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-blue-600">
                        <Package className="w-4 h-4 mr-1" />
                        <span className="text-sm">Products in order</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Order Date</CardDescription>
                      <CardTitle className="text-lg">
                        {formatDate(trackedOrder.orderDate)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-purple-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">Date of purchase</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Current Status</CardDescription>
                      <div className="mt-1">
                        <Badge className={`${getStatusBadge(trackedOrder.status)} px-3 py-1 text-sm`}>
                          {getStatusIcon(trackedOrder.status)}
                          {trackedOrder.status || "PENDING"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-500">
                        Order ID: {trackedOrder.orderId || "N/A"}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Items Tab */}
              <TabsContent value="items" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Items</CardTitle>
                    <CardDescription>
                      Products included in your order
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {trackedOrder.items?.length > 0 ? (
                      <div className="space-y-4">
                        {trackedOrder.items.map((item: any, index: number) => (
                          <div 
                            key={index} 
                            className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors gap-4"
                          >
                            <div className="flex items-center space-x-4 flex-1">
                              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                                {item.productImageUrl ? (
                                  <img 
                                    src={`${API_BASE_URL}${item.productImageUrl}`} 
                                    alt={item.productName}
                                    className="w-full h-full object-cover rounded-lg"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'%3E%3C/path%3E%3Cpolyline points='3.27 6.96 12 12.01 20.73 6.96'%3E%3C/polyline%3E%3Cline x1='12' y1='22.08' x2='12' y2='12'%3E%3C/line%3E%3C/svg%3E";
                                    }}
                                  />
                                ) : (
                                  <Package className="w-10 h-10 text-gray-400" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold">
                                  {item.productName || `Product ${item.productId}`}
                                </div>
                                <div className="text-sm text-gray-500">
                                  Brand: {item.brand || "N/A"}
                                </div>
                                <div className="text-sm text-gray-500">
                                  Product ID: {item.productId}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                              <div className="text-center">
                                <div className="text-sm text-gray-500">Quantity</div>
                                <div className="font-medium text-lg">{item.quantity || 1}</div>
                              </div>
                              
                              <div className="text-center">
                                <div className="text-sm text-gray-500">Price</div>
                                <div className="font-semibold">
                                  {formatCurrency(item.priceAtPurchase || 0)}
                                </div>
                              </div>
                              
                              <div className="text-center">
                                <div className="text-sm text-gray-500">Total</div>
                                <div className="font-bold text-lg">
                                  {formatCurrency((item.priceAtPurchase || 0) * (item.quantity || 1))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {/* Order Summary */}
                        <div className="pt-6 border-t mt-6">
                          <div className="max-w-md ml-auto space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Subtotal:</span>
                              <span className="font-medium">
                                {formatCurrency(trackedOrder.total)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Shipping:</span>
                              <span className="font-medium text-green-600">FREE</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Tax:</span>
                              <span className="font-medium">₹0.00</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total Amount:</span>
                              <span className="text-blue-600">
                                {formatCurrency(trackedOrder.total)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Package className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                        <p>No items found in this order</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Shipping Info Tab */}
              <TabsContent value="shipping" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <UserCircle className="w-5 h-5" />
                        Customer Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <UserCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Full Name</div>
                          <div className="font-medium">
                            {trackedOrder.userDetails?.name || "N/A"}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Phone Number</div>
                          <div className="font-medium">
                            {trackedOrder.userDetails?.phone || "N/A"}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-500">Email Address</div>
                          <div className="font-medium">
                            {trackedOrder.userDetails?.email || "N/A"}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Shipping Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500">Address</div>
                        <div className="font-medium">
                          {trackedOrder.userDetails?.address || "N/A"}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">City</div>
                          <div className="font-medium">
                            {trackedOrder.userDetails?.city || "N/A"}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Pincode</div>
                          <div className="font-medium">
                            {trackedOrder.userDetails?.pincode || "N/A"}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">State</div>
                          <div className="font-medium">
                            {trackedOrder.userDetails?.state || "N/A"}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Country</div>
                          <div className="font-medium">
                            {trackedOrder.userDetails?.country || "India"}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Shipping Updates */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Updates</CardTitle>
                    <CardDescription>
                      Real-time tracking information for your order
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trackedOrder.status === "DELIVERED" || trackedOrder.status === "COMPLETED" ? (
                        <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="p-2 bg-white rounded-full">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Order Delivered</div>
                            <div className="text-sm text-gray-600">
                              Your order has been successfully delivered
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {formatDate(trackedOrder.orderDate)}
                            </div>
                          </div>
                        </div>
                      ) : trackedOrder.status === "SHIPPED" ? (
                        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <div className="p-2 bg-white rounded-full">
                            <Truck className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Order Shipped</div>
                            <div className="text-sm text-gray-600">
                              Your order has been shipped and is on its way
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Expected delivery in 3-5 business days
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="p-2 bg-white rounded-full">
                              <Package className="w-5 h-5 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">Order Confirmed</div>
                              <div className="text-sm text-gray-600">
                                Your order has been confirmed and is being prepared for dispatch
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {formatDate(trackedOrder.orderDate)} • At order time
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                            <div className="p-2 bg-white rounded-full">
                              <Clock className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">Processing Order</div>
                              <div className="text-sm text-gray-600">
                                We're preparing your order for shipping
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                Usually ships within 24 hours
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payment Tab */}
              <TabsContent value="payment" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                    <CardDescription>
                      Details about your payment transaction
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {trackedOrder.payment ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <div className="text-sm text-gray-500">Transaction ID</div>
                              <div className="font-medium font-mono text-sm">
                                {trackedOrder.payment.transactionId || "N/A"}
                              </div>
                            </div>
                            
                            <div>
                              <div className="text-sm text-gray-500">Payment Method</div>
                              <div className="font-medium flex items-center gap-2">
                                <CreditCard className="w-5 h-5" />
                                {trackedOrder.payment.method || "N/A"}
                              </div>
                            </div>
                            
                            <div>
                              <div className="text-sm text-gray-500">Payment Status</div>
                              <Badge className={`${getStatusBadge(trackedOrder.payment.status)} mt-1 px-3 py-1 text-sm`}>
                                {trackedOrder.payment.status || "PENDING"}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="text-sm text-gray-500">Paid Amount</div>
                              <div className="font-bold text-2xl text-green-600">
                                {formatCurrency(trackedOrder.payment.amount || trackedOrder.total)}
                              </div>
                            </div>
                            
                            <div>
                              <div className="text-sm text-gray-500">Payment Time</div>
                              <div className="font-medium">
                                {trackedOrder.payment.paymentTime 
                                  ? formatDate(trackedOrder.payment.paymentTime)
                                  : "N/A"
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-700 mb-2">Payment Summary</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-gray-500">Order Total</div>
                              <div className="font-medium">{formatCurrency(trackedOrder.total)}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Payment Method</div>
                              <div className="font-medium">{trackedOrder.payment.method}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Transaction Status</div>
                              <Badge className={`${getStatusBadge(trackedOrder.payment.status)} mt-1`}>
                                {trackedOrder.payment.status}
                              </Badge>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Date & Time</div>
                              <div className="font-medium">
                                {formatDate(trackedOrder.orderDate)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <CreditCard className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                        <p>No payment information available for this order</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Need Help Section */}
        {!trackedOrder && !isLoading && (
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <CardTitle className="text-2xl">Need Help Tracking Your Order?</CardTitle>
                <CardDescription>
                  Can't find your order number or having issues tracking?
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-sm text-gray-600">1800-XXX-XXXX</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-sm text-gray-600">support@merfume.com</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-1">Live Chat</h4>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

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
                        <a
                          href="/help"
                          className="text-cream/80 hover:text-gold transition-colors"
                        >
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="/shipping-policy"
                          className="text-cream/80 hover:text-gold transition-colors"
                        >
                          Shipping Policies
                        </a>
                      </li>
                      <li>
                        <a
                          href="/return-policy"
                          className="text-cream/80 hover:text-gold transition-colors"
                        >
                          Returns
                        </a>
                      </li>
                      <li>
                        <a
                          href="/how-to-manage-fragrance"
                          className="text-cream/80 hover:text-gold transition-colors"
                        >
                          Fragrance care tips
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-cream/20 mt-12 pt-8 text-center">
                  {/* Special offer message removed from footer */}
                  {/*
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <IslamicCrescentIcon className="h-6 w-6 text-gold" />
                    <p className="text-cream/80 font-medium">Celebrating Eid Milad-un-Nabi with Special Offers</p>
                  </div>
                  */}
                  <p className="text-cream/60">
                    © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
                  </p>
                </div>
              </div>
            </footer>
    </div>
  );
}
