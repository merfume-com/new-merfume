// // // src/pages/admin/AdminDashboard.tsx
// // import { useEffect, useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { 
// //   Table, 
// //   TableBody, 
// //   TableCaption, 
// //   TableCell, 
// //   TableHead, 
// //   TableHeader, 
// //   TableRow 
// // } from "@/components/ui/table";
// // import { Download, Trash2, Eye } from "lucide-react";
// // import { useNavigate } from "react-router-dom";

// // interface OrderItem {
// //   id: string;
// //   name: string;
// //   brand: string;
// //   price: number;
// //   quantity: number;
// //   image: string;
// // }

// // interface Order {
// //   id: string;
// //   date: string;
// //   items: OrderItem[];
// //   total: number;
// //   paymentId: string;
// // }

// // export default function AdminDashboard() {
// //   const [orders, setOrders] = useState<Order[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Check authentication
// //     const isAuthenticated = localStorage.getItem("adminAuth");
// //     if (!isAuthenticated) {
// //       navigate("/admin/login");
// //       return;
// //     }

// //     fetchOrdersFromLocalStorage();
// //   }, [navigate]);

// //   const fetchOrdersFromLocalStorage = () => {
// //     try {
// //       const allOrders: Order[] = [];
      
// //       // Loop through all localStorage items
// //       for (let i = 0; i < localStorage.length; i++) {
// //         const key = localStorage.key(i);
        
// //         // Check if key matches our order pattern
// //         if (key && (key.startsWith("order_") || key === "currentOrder")) {
// //           const orderData = localStorage.getItem(key);
// //           if (orderData) {
// //             const order = JSON.parse(orderData);
// //             allOrders.push(order);
// //           }
// //         }
// //       }
      
// //       setOrders(allOrders);
// //     } catch (error) {
// //       console.error("Error loading orders:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const deleteOrder = (orderId: string) => {
// //     if (window.confirm("क्या आप वाकई इस ऑर्डर को डिलीट करना चाहते हैं?")) {
// //       localStorage.removeItem(`order_${orderId}`);
// //       setOrders(orders.filter(order => order.id !== orderId));
// //     }
// //   };

// //   const exportToExcel = () => {
// //     // CSV content generation
// //     const headers = ["Order ID", "Date", "Payment ID", "Total", "Items Count"];
// //     const csvRows = orders.map(order => [
// //       order.id,
// //       new Date(order.date).toLocaleString(),
// //       order.paymentId || "N/A",
// //       `$${order.total.toFixed(2)}`,
// //       order.items.reduce((sum, item) => sum + item.quantity, 0)
// //     ]);

// //     const csvContent = [
// //       headers.join(","),
// //       ...csvRows.map(row => row.join(","))
// //     ].join("\n");

// //     // Download CSV file
// //     const blob = new Blob([csvContent], { type: "text/csv" });
// //     const url = URL.createObjectURL(blob);
// //     const link = document.createElement("a");
// //     link.href = url;
// //     link.download = `merfume-orders-${new Date().toISOString().split('T')[0]}.csv`;
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   const viewOrderDetails = (orderId: string) => {
// //     navigate(`/admin/orders/${orderId}`);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-background p-4 md:p-8">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
// //           <h1 className="text-2xl md:text-3xl font-bold text-foreground">
// //             ऑर्डर मैनेजमेंट
// //           </h1>
// //           <div className="flex gap-2">
// //             <Button 
// //               onClick={fetchOrdersFromLocalStorage}
// //               variant="outline"
// //               className="bg-accent hover:bg-accent/80"
// //             >
// //               Refresh Data
// //             </Button>
// //             <Button 
// //               onClick={exportToExcel} 
// //               className="bg-gold hover:bg-gold-dark text-luxury-black"
// //             >
// //               <Download className="h-4 w-4 mr-2" />
// //               एक्सपोर्ट करें
// //             </Button>
// //           </div>
// //         </div>

// //         {orders.length === 0 ? (
// //           <div className="text-center py-16 border rounded-lg">
// //             <p className="text-lg text-muted-foreground">कोई ऑर्डर नहीं मिला</p>
// //           </div>
// //         ) : (
// //           <div className="border rounded-lg overflow-hidden shadow-sm">
// //             <Table>
// //               <TableHeader className="bg-accent">
// //                 <TableRow>
// //                   <TableHead className="w-[100px]">ऑर्डर ID</TableHead>
// //                   <TableHead>तारीख</TableHead>
// //                   <TableHead>भुगतान ID</TableHead>
// //                   <TableHead>कुल राशि</TableHead>
// //                   <TableHead>आइटम्स</TableHead>
// //                   <TableHead className="text-right">एक्शन</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {orders.map((order) => (
// //                   <TableRow key={order.id}>
// //                     <TableCell className="font-medium">{order.id}</TableCell>
// //                     <TableCell>
// //                       {new Date(order.date).toLocaleDateString("hi-IN")}
// //                     </TableCell>
// //                     <TableCell>
// //                       {order.paymentId || "N/A"}
// //                     </TableCell>
// //                     <TableCell>₹{order.total.toFixed(2)}</TableCell>
// //                     <TableCell>
// //                       {order.items.reduce((sum, item) => sum + item.quantity, 0)} आइटम्स
// //                     </TableCell>
// //                     <TableCell className="text-right">
// //                       <div className="flex justify-end gap-2">
// //                         <Button
// //                           variant="ghost"
// //                           size="icon"
// //                           onClick={() => viewOrderDetails(order.id)}
// //                           className="text-blue-500 hover:text-blue-700"
// //                         >
// //                           <Eye className="h-4 w-4" />
// //                         </Button>
// //                         <Button
// //                           variant="ghost"
// //                           size="icon"
// //                           onClick={() => deleteOrder(order.id)}
// //                           className="text-red-500 hover:text-red-700"
// //                         >
// //                           <Trash2 className="h-4 w-4" />
// //                         </Button>
// //                       </div>
// //                     </TableCell>
// //                   </TableRow>
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Download, Trash2, Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// interface OrderItem {
//   id: string;
//   name: string;
//   brand: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// interface Order {
//   id: string;
//   date: string;
//   items: OrderItem[];
//   total: number;
//   paymentId: string;
// }

// export default function AdminDashboard() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // ✅ Fetch orders from backend
//   const fetchOrdersFromBackend = async () => {
//     try {
//       const response = await fetch("http://localhost:8081/api/orders"); // Adjust port if needed
//       if (!response.ok) {
//         throw new Error("Failed to fetch orders");
//       }

//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error("Error loading orders:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ On mount
//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem("adminAuth");
//     if (!isAuthenticated) {
//       navigate("/admin/login");
//       return;
//     }

//     fetchOrdersFromBackend();
//   }, [navigate]);

//   const deleteOrder = async (orderId: string) => {
//     const confirm = window.confirm("क्या आप वाकई इस ऑर्डर को डिलीट करना चाहते हैं?");
//     if (!confirm) return;

//     try {
//       await fetch(`http://localhost:8081/api/orders/${orderId}`, {
//         method: "DELETE",
//       });
//       setOrders(orders.filter((order) => order.id !== orderId));
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   };

//   const exportToExcel = () => {
//     const headers = ["Order ID", "Date", "Payment ID", "Total", "Items Count"];
//     const csvRows = orders.map((order) => [
//       order.id,
//       new Date(order.date).toLocaleString(),
//       order.paymentId || "N/A",
//       `₹${order.total.toFixed(2)}`,
//       order.items.reduce((sum, item) => sum + item.quantity, 0),
//     ]);

//     const csvContent = [
//       headers.join(","),
//       ...csvRows.map((row) => row.join(",")),
//     ].join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `merfume-orders-${new Date().toISOString().split("T")[0]}.csv`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const viewOrderDetails = (orderId: string) => {
//     navigate(`/admin/orders/${orderId}`);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//           <h1 className="text-2xl md:text-3xl font-bold text-foreground">ऑर्डर मैनेजमेंट</h1>
//           <div className="flex gap-2">
//             <Button
//               onClick={fetchOrdersFromBackend}
//               variant="outline"
//               className="bg-accent hover:bg-accent/80"
//             >
//               Refresh Data
//             </Button>
//             <Button
//               onClick={exportToExcel}
//               className="bg-gold hover:bg-gold-dark text-luxury-black"
//             >
//               <Download className="h-4 w-4 mr-2" />
//               एक्सपोर्ट करें
//             </Button>
//           </div>
//         </div>

//         {orders.length === 0 ? (
//           <div className="text-center py-16 border rounded-lg">
//             <p className="text-lg text-muted-foreground">कोई ऑर्डर नहीं मिला</p>
//           </div>
//         ) : (
//           <div className="border rounded-lg overflow-hidden shadow-sm">
//             <Table>
//               <TableHeader className="bg-accent">
//                 <TableRow>
//                   <TableHead className="w-[100px]">ऑर्डर ID</TableHead>
//                   <TableHead>तारीख</TableHead>
//                   <TableHead>भुगतान ID</TableHead>
//                   <TableHead>कुल राशि</TableHead>
//                   <TableHead>आइटम्स</TableHead>
//                   <TableHead className="text-right">एक्शन</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {orders.map((order) => (
//                   <TableRow key={order.id}>
//                     <TableCell className="font-medium">{order.id}</TableCell>
//                     <TableCell>{new Date(order.date).toLocaleDateString("hi-IN")}</TableCell>
//                     <TableCell>{order.paymentId || "N/A"}</TableCell>
//                     <TableCell>₹{order.total.toFixed(2)}</TableCell>
//                     <TableCell>
//                       {order.items.reduce((sum, item) => sum + item.quantity, 0)} आइटम्स
//                     </TableCell>
//                     <TableCell className="text-right">
//                       <div className="flex justify-end gap-2">
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => viewOrderDetails(order.id)}
//                           className="text-blue-500 hover:text-blue-700"
//                         >
//                           <Eye className="h-4 w-4" />
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => deleteOrder(order.id)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow
// } from "@/components/ui/table";
// import { Download } from "lucide-react";

// export default function AdminDashboard() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrdersFromBackend = () => {
//   fetch("https://tds-solutions-backend.onrender.com/api/retrieve-orders", {
//     method: "GET", // ✅ Specify GET method
//     headers: {
//       "Accept": "application/json",         // ✅ Expecting JSON
//       "Content-Type": "application/json",   // ✅ Sending as JSON (even if no body, it's safe)
//     },
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log("✅ Orders fetched successfully", data);
//       setOrders(data);
//     })
//     .catch((err) => {
//       console.error("❌ Fetch error:", err);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// };

//   useEffect(() => {
//     fetchOrdersFromBackend();
//     const interval = setInterval(fetchOrdersFromBackend, 10000); // refresh every 10s
//     return () => clearInterval(interval);
//   }, []);

//   const exportToCSV = () => {
//     const headers = [
//       "Order ID",
//       "Date",
//       "Payment ID",
//       "Total",
//       "Item Count",
//       "Item Details"
//     ];

//     const csv = [
//       headers.join(","),
//       ...orders.map((order) => {
//         const items = order.items
//           ?.map(
//             (item: any) =>
//               `${item.name} (${item.brand}) - ₹${item.price} x${item.quantity}`
//           )
//           .join(" | ");
//         return [
//           order.id,
//           new Date(order.date).toLocaleString(),
//           order.paymentId,
//           order.total,
//           order.items?.length || 0,
//           `"${items}"`
//         ].join(",");
//       })
//     ].join("\n");

//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "orders.csv";
//     link.click();
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">🧾 Admin Orders</h1>
//         <Button onClick={exportToCSV}>
//           <Download className="h-4 w-4 mr-2" /> Export
//         </Button>
//       </div>

//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Order ID</TableHead>
//               <TableHead>Date</TableHead>
//               <TableHead>Payment ID</TableHead>
//               <TableHead>Total</TableHead>
//               <TableHead>Items</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {orders.map((order) => (
//               <TableRow key={order.id}>
//                 <TableCell>{order.id}</TableCell>
//                 <TableCell>{new Date(order.date).toLocaleString()}</TableCell>
//                 <TableCell>{order.paymentId}</TableCell>
//                 <TableCell>₹{order.total}</TableCell>
//                 <TableCell>
//                   {order.items?.map((item: any) => (
//                     <div key={item.id} className="mb-2">
//                       <div className="font-semibold">{item.name}</div>
//                       <div className="text-sm text-gray-500">
//                         Brand: {item.brand}
//                       </div>
//                       <div className="text-sm text-gray-500">
//                         ₹{item.price} x {item.quantity}
//                       </div>
//                     </div>
//                   ))}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </div>
//   );
// }


//old and correct without Integration code
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Download } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";

// export default function AdminDashboard() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedOrder, setSelectedOrder] = useState<any>(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const fetchOrdersFromBackend = () => {
//     fetch("https://tds-solutions-backend.onrender.com/api/retrieve-orders", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log("✅ Orders fetched successfully", data);
//         if (Array.isArray(data.orders)) {
//           setOrders(data.orders);
//         } else {
//           console.error("Invalid response format: orders is not an array");
//           setOrders([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchOrdersFromBackend();
//     const interval = setInterval(fetchOrdersFromBackend, 10000);
//     return () => clearInterval(interval);
//   }, []);

//     // 🔍 Filter logic
//   const filteredOrders = orders.filter((order) => {
//     const q = searchQuery.toLowerCase();
//     return (
//       order.orderId.toLowerCase().includes(q) ||
//       order.paymentId?.toLowerCase().includes(q) ||
//       order.customerDetails?.name?.toLowerCase().includes(q) ||
//       order.customerDetails?.phone?.includes(q)
//     );
//   });

//   const exportToCSV = () => {
//     const headers = [
//       "Order ID",
//       "Date",
//       "Payment ID",
//       "Total",
//       "Customer Name",
//       "Customer Phone",
//       "Item Count",
//       "Item Details",
//     ];

//     const csv = [
//       headers.join(","),
//       ...orders.map((order) => {
//         const items = order.items
//           ?.map(
//             (item: any) =>
//               `${item.name} (${item.brand}) - ₹${item.price} x${item.quantity}`
//           )
//           .join(" | ");
//         return [
//           order.orderId,
//           new Date(order.orderDate).toLocaleString(),
//           order.paymentId,
//           order.totalAmount,
//           order.customerDetails?.name || "",
//           order.customerDetails?.phone || "",
//           order.items?.length || 0,
//           `"${items}"`,
//         ].join(",");
//       }),
//     ].join("\n");

//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `orders_${new Date().toISOString()}.csv`;
//     link.click();
//   };

//   const openOrderDetails = (order: any) => {
//     setSelectedOrder(order);
//     setDialogOpen(true);
//   };

//   if (loading) return <div className="p-8">Loading orders...</div>;

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">🧾 Admin Orders</h1>
//          <Input
//             placeholder="Search orders..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="md:w-72"
//           />
//           <Button onClick={exportToCSV}>
//             <Download className="h-4 w-4 mr-2" /> Export CSV
//           </Button>
//       </div>

//       {filteredOrders.length === 0 ?(
//         <p>No orders found.</p>
//       ) : (
//         <>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Order ID</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Customer</TableHead>
//                 <TableHead>Total</TableHead>
//                 <TableHead>Items</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {orders.map((order) => (
//                 <TableRow
//                   key={order.orderId}
//                   onClick={() => openOrderDetails(order)}
//                   className="cursor-pointer hover:bg-gray-50"
//                 >
//                   <TableCell className="font-medium">{order.orderId}</TableCell>
//                   <TableCell>
//                     {new Date(order.orderDate).toLocaleString()}
//                   </TableCell>
//                   <TableCell>
//                     {order.customerDetails?.name || "N/A"}
//                     <div className="text-sm text-gray-500">
//                       {order.customerDetails?.phone || ""}
//                     </div>
//                   </TableCell>
//                   <TableCell>₹{order.totalAmount.toFixed(2)}</TableCell>
//                   <TableCell>{order.items?.length} item(s)</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//             <DialogContent className="max-w-2xl">
//               <DialogHeader>
//                 <DialogTitle>Order Details</DialogTitle>
//               </DialogHeader>

//               {selectedOrder && (
//                 <div className="space-y-6">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <h3 className="font-semibold">Order Information</h3>
//                       <div className="space-y-1 mt-2 text-sm">
//                         <p><span className="text-muted-foreground">Order ID:</span> {selectedOrder.orderId}</p>
//                         <p><span className="text-muted-foreground">Date:</span> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
//                         <p><span className="text-muted-foreground">Payment ID:</span> {selectedOrder.paymentId}</p>
//                         <p><span className="text-muted-foreground">Status:</span> {selectedOrder.status || "Confirmed"}</p>
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold">Customer Details</h3>
//                       <div className="space-y-1 mt-2 text-sm">
//                         <p><span className="text-muted-foreground">Name:</span> {selectedOrder.customerDetails?.name || "N/A"}</p>
//                         <p><span className="text-muted-foreground">Email:</span> {selectedOrder.customerDetails?.email || "N/A"}</p>
//                         <p><span className="text-muted-foreground">Phone:</span> {selectedOrder.customerDetails?.phone || "N/A"}</p>
//                         <p><span className="text-muted-foreground">Address:</span> {selectedOrder.customerDetails?.address || "N/A"}</p>
//                         <p><span className="text-muted-foreground">Pincode:</span> {selectedOrder.customerDetails?.pincode || "N/A"}</p>
//                         <p><span className="text-muted-foreground">City:</span> {selectedOrder.customerDetails?.city || "N/A"}</p>
//                         <p><span className="text-muted-foreground">State:</span> {selectedOrder.customerDetails?.state || "N/A"}</p>
//                         <p><span className="text-muted-foreground">Country:</span> {selectedOrder.customerDetails?.country || "N/A"}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="font-semibold mb-3">Items ({selectedOrder.items?.length || 0})</h3>
//                     <div className="border rounded-lg">
//                       <Table>
//                         <TableHeader>
//                           <TableRow>
//                             <TableHead>Product</TableHead>
//                             <TableHead>Brand</TableHead>
//                             <TableHead>Price</TableHead>
//                             <TableHead>Qty</TableHead>
//                             <TableHead className="text-right">Total</TableHead>
//                           </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                           {selectedOrder.items?.map((item: any) => (
//                             <TableRow key={item.id}>
//                               <TableCell className="font-medium">
//                                 <div className="flex items-center gap-3">
//                                   {item.image && (
//                                     <img
//                                       src={item.image}
//                                       alt={item.name}
//                                       className="w-10 h-10 object-cover rounded"
//                                     />
//                                   )}
//                                   {item.name}
//                                 </div>
//                               </TableCell>
//                               <TableCell>{item.brand}</TableCell>
//                               <TableCell>₹{item.price.toFixed(2)}</TableCell>
//                               <TableCell>{item.quantity}</TableCell>
//                               <TableCell className="text-right">
//                                 ₹{(item.price * item.quantity).toFixed(2)}
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </div>
//                   </div>

//                   <div className="flex justify-end">
//                     <div className="w-64 space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-muted-foreground">Subtotal:</span>
//                         <span>₹{selectedOrder.totalAmount.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-muted-foreground">Shipping:</span>
//                         <span>FREE</span>
//                       </div>
//                       <div className="flex justify-between font-bold border-t pt-2">
//                         <span>Total:</span>
//                         <span>₹{selectedOrder.totalAmount.toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </DialogContent>
//           </Dialog>
//         </>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Download, Plus } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";

// interface Product {
//   productName: string;
//   brand: string;
//   productPrice: number;
//   originalPrice?: number;
//   productDescription: string;
//   notes: string[];
//   productCategory: string;
// }

// interface OrderItem {
//   productId: string;
//   productName: string;
//   quantity: number;
//   priceAtPurchase: number;
// }

// interface Payment {
//   paymentId: string;
//   status: string;
//   amount: number;
//   method: string;
//   transactionId: string;
// }

// interface UserDetails {
//   userId: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// interface Order {
//   orderId: string | number;
//   orderNumber: string;
//   orderDate: string;
//   status: string;
//   total: number;
//   userDetails: UserDetails;
//   payment?: Payment;
//   items: OrderItem[];
// }

// export default function AdminDashboard() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
//   const [newProduct, setNewProduct] = useState<Product>({
//     productName: "",
//     brand: "",
//     productPrice: 0,
//     originalPrice: 0,
//     productDescription: "",
//     notes: [],
//     productCategory: ""
//   });
//   const [frontImage, setFrontImage] = useState<File | null>(null);
//   const [backImage, setBackImage] = useState<File | null>(null);
//   const [notesInput, setNotesInput] = useState("");
//   const [isAddingProduct, setIsAddingProduct] = useState(false);
//   const { toast } = useToast();

//   const fetchOrdersFromBackend = () => {
//     fetch("https://be2954fd148c.ngrok-free.app/api/orders/admin/all-orders", {
//       method: "GET",
//       headers: {
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': '69420' // यह ngrok के ब्राउज़र वार्निंग को स्किप करेगा
//   }
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           const processedOrders = data.map(order => ({
//             ...order,
//             orderId: String(order.orderId),
//             userDetails: {
//               ...order.userDetails,
//               phone: String(order.userDetails?.phone || '')
//             }
//           }));
//           setOrders(processedOrders);
//         } else {
//           console.error("Invalid response format: expected array");
//           setOrders([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//         toast({
//           title: "Error",
//           description: "Failed to fetch orders",
//           variant: "destructive",
//         });
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleAddProduct = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsAddingProduct(true);

//     try {
//       // Validate required fields
//       if (!newProduct.productName.trim()) {
//         throw new Error("Product name is required");
//       }
//       if (!newProduct.brand.trim()) {
//         throw new Error("Brand is required");
//       }
//       if (newProduct.productPrice <= 0) {
//         throw new Error("Price must be greater than 0");
//       }
//       if (!frontImage || !backImage) {
//         throw new Error("Please upload both front and back images");
//       }

//       const formData = new FormData();
//       formData.append("product", JSON.stringify({
//         ...newProduct,
//         productPrice: Number(newProduct.productPrice),
//         originalPrice: newProduct.originalPrice ? Number(newProduct.originalPrice) : undefined
//       }));
//       formData.append("frontImage", frontImage);
//       formData.append("backImage", backImage);

//       const response = await fetch("https://be2954fd148c.ngrok-free.app/api/products/add", {
      
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to add product");
//       }

//       const data = await response.json();
//       toast({
//         title: "Success",
//         description: data.message || "Product added successfully",
//       });
      
//       resetForm();
//       setAddProductDialogOpen(false);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to add product",
//         variant: "destructive",
//       });
//     } finally {
//       setIsAddingProduct(false);
//     }
//   };

//   const resetForm = () => {
//     setNewProduct({
//       productName: "",
//       brand: "",
//       productPrice: 0,
//       originalPrice: 0,
//       productDescription: "",
//       notes: [],
//       productCategory: ""
//     });
//     setFrontImage(null);
//     setBackImage(null);
//     setNotesInput("");
//   };

//   const addNote = () => {
//     if (notesInput.trim()) {
//       setNewProduct({
//         ...newProduct,
//         notes: [...newProduct.notes, notesInput.trim()]
//       });
//       setNotesInput("");
//     }
//   };

//   const removeNote = (index: number) => {
//     setNewProduct({
//       ...newProduct,
//       notes: newProduct.notes.filter((_, i) => i !== index)
//     });
//   };

//   useEffect(() => {
//     fetchOrdersFromBackend();
//     const interval = setInterval(fetchOrdersFromBackend, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const filteredOrders = orders.filter((order) => {
//     const q = searchQuery.toLowerCase();
//     return (
//       String(order.orderId).toLowerCase().includes(q) ||
//       (order.payment?.paymentId && String(order.payment.paymentId).toLowerCase().includes(q)) ||
//       (order.userDetails?.name && order.userDetails.name.toLowerCase().includes(q)) ||
//       (order.userDetails?.phone && String(order.userDetails.phone).toLowerCase().includes(q))
//     );
//   });

//   const exportToCSV = () => {
//     const headers = [
//       "Order ID",
//       "Order Number",
//       "Date",
//       "Status",
//       "Total",
//       "Customer Name",
//       "Customer Email",
//       "Customer Phone",
//       "Payment Method",
//       "Payment Status",
//       "Item Count",
//       "Item Details",
//     ];

//     const csv = [
//       headers.join(","),
//       ...orders.map((order) => {
//         const items = order.items
//           .map(
//             (item) =>
//               `${item.productName} - ₹${item.priceAtPurchase} x${item.quantity}`
//           )
//           .join(" | ");
//         return [
//           order.orderId,
//           order.orderNumber,
//           new Date(order.orderDate).toLocaleString(),
//           order.status,
//           order.total,
//           order.userDetails.name,
//           order.userDetails.email,
//           order.userDetails.phone,
//           order.payment?.method || "N/A",
//           order.payment?.status || "N/A",
//           order.items.length,
//           `"${items}"`,
//         ].join(",");
//       }),
//     ].join("\n");

//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `orders_${new Date().toISOString()}.csv`;
//     link.click();
//   };

//   const openOrderDetails = (order: Order) => {
//     setSelectedOrder(order);
//     setDialogOpen(true);
//   };

//   if (loading) return <div className="p-8">Loading orders...</div>;

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">🧾 Admin Dashboard</h1>
//         <div className="flex gap-2">
//           <Input
//             placeholder="Search orders..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="md:w-72"
//           />
//           <Button onClick={exportToCSV}>
//             <Download className="h-4 w-4 mr-2" /> Export CSV
//           </Button>
//           <Dialog open={addProductDialogOpen} onOpenChange={setAddProductDialogOpen}>
//             <DialogTrigger asChild>
//               <Button>
//                 <Plus className="h-4 w-4 mr-2" /> Add Product
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-w-2xl">
//               <DialogHeader>
//                 <DialogTitle>Add New Product</DialogTitle>
//               </DialogHeader>
//               <form onSubmit={handleAddProduct}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-4">
//                     <div>
//                       <Label>Product Name*</Label>
//                       <Input
//                         value={newProduct.productName}
//                         onChange={(e) => setNewProduct({...newProduct, productName: e.target.value})}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Label>Brand*</Label>
//                       <Input
//                         value={newProduct.brand}
//                         onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Label>Current Price*</Label>
//                       <Input
//                         type="number"
//                         value={newProduct.productPrice}
//                         onChange={(e) => setNewProduct({...newProduct, productPrice: Number(e.target.value)})}
//                         min="0.01"
//                         step="0.01"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Label>Original Price (optional)</Label>
//                       <Input
//                         type="number"
//                         value={newProduct.originalPrice || ""}
//                         onChange={(e) => setNewProduct({...newProduct, originalPrice: Number(e.target.value) || undefined})}
//                         min="0.01"
//                         step="0.01"
//                       />
//                     </div>
//                     <div>
//                       <Label>Category*</Label>
//                       <Input
//                         value={newProduct.productCategory}
//                         onChange={(e) => setNewProduct({...newProduct, productCategory: e.target.value})}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <Label>Description*</Label>
//                       <Textarea
//                         value={newProduct.productDescription}
//                         onChange={(e) => setNewProduct({...newProduct, productDescription: e.target.value})}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Label>Notes (Add one at a time)</Label>
//                       <div className="flex gap-2">
//                         <Input
//                           value={notesInput}
//                           onChange={(e) => setNotesInput(e.target.value)}
//                           onKeyDown={(e) => e.key === 'Enter' && addNote()}
//                         />
//                         <Button type="button" onClick={addNote}>Add</Button>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {newProduct.notes.map((note, index) => (
//                           <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded">
//                             {note}
//                             <button 
//                               type="button"
//                               onClick={() => removeNote(index)}
//                               className="ml-2 text-red-500"
//                             >
//                               ×
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div>
//                       <Label>Front Image*</Label>
//                       <Input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Label>Back Image*</Label>
//                       <Input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setBackImage(e.target.files?.[0] || null)}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-end gap-2 mt-4">
//                   <Button 
//                     type="button"
//                     variant="outline" 
//                     onClick={() => setAddProductDialogOpen(false)}
//                   >
//                     Cancel
//                   </Button>
//                   <Button type="submit" disabled={isAddingProduct}>
//                     {isAddingProduct ? "Adding..." : "Add Product"}
//                   </Button>
//                 </div>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       {filteredOrders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Order ID</TableHead>
//                 <TableHead>Order Number</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Customer</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Total</TableHead>
//                 <TableHead>Items</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredOrders.map((order) => (
//                 <TableRow
//                   key={order.orderId}
//                   onClick={() => openOrderDetails(order)}
//                   className="cursor-pointer hover:bg-gray-50"
//                 >
//                   <TableCell className="font-medium">{order.orderId}</TableCell>
//                   <TableCell>{order.orderNumber}</TableCell>
//                   <TableCell>
//                     {new Date(order.orderDate).toLocaleString()}
//                   </TableCell>
//                   <TableCell>
//                     {order.userDetails.name}
//                     <div className="text-sm text-gray-500">
//                       {order.userDetails.phone}
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
//                       order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
//                       order.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
//                       'bg-gray-100 text-gray-800'
//                     }`}>
//                       {order.status}
//                     </span>
//                   </TableCell>
//                   <TableCell>₹{order.total.toFixed(2)}</TableCell>
//                   <TableCell>{order.items.length} item(s)</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//             <DialogContent className="max-w-2xl">
//               <DialogHeader>
//                 <DialogTitle>Order Details - {selectedOrder?.orderNumber}</DialogTitle>
//               </DialogHeader>

//               {selectedOrder && (
//                 <div className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <h3 className="font-semibold mb-2">Customer Information</h3>
//                       <div className="space-y-1">
//                         <p><span className="font-medium">Name:</span> {selectedOrder.userDetails.name}</p>
//                         <p><span className="font-medium">Email:</span> {selectedOrder.userDetails.email}</p>
//                         <p><span className="font-medium">Phone:</span> {selectedOrder.userDetails.phone}</p>
//                         <p><span className="font-medium">Address:</span> {selectedOrder.userDetails.address}</p>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h3 className="font-semibold mb-2">Order Information</h3>
//                       <div className="space-y-1">
//                         <p><span className="font-medium">Order ID:</span> {selectedOrder.orderId}</p>
//                         <p><span className="font-medium">Order Number:</span> {selectedOrder.orderNumber}</p>
//                         <p><span className="font-medium">Date:</span> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
//                         <p><span className="font-medium">Status:</span> 
//                           <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
//                             selectedOrder.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
//                             selectedOrder.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
//                             selectedOrder.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
//                             'bg-gray-100 text-gray-800'
//                           }`}>
//                             {selectedOrder.status}
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {selectedOrder.payment && (
//                     <div>
//                       <h3 className="font-semibold mb-2">Payment Information</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <p><span className="font-medium">Payment ID:</span> {selectedOrder.payment.paymentId}</p>
//                           <p><span className="font-medium">Status:</span> {selectedOrder.payment.status}</p>
//                         </div>
//                         <div>
//                           <p><span className="font-medium">Amount:</span> ₹{selectedOrder.payment.amount.toFixed(2)}</p>
//                           <p><span className="font-medium">Method:</span> {selectedOrder.payment.method}</p>
//                           {selectedOrder.payment.transactionId && (
//                             <p><span className="font-medium">Transaction ID:</span> {selectedOrder.payment.transactionId}</p>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <div>
//                     <h3 className="font-semibold mb-2">Order Items</h3>
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead>Product</TableHead>
//                           <TableHead>Price</TableHead>
//                           <TableHead>Quantity</TableHead>
//                           <TableHead className="text-right">Total</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {selectedOrder.items.map((item, index) => (
//                           <TableRow key={index}>
//                             <TableCell>
//                               <div className="font-medium">{item.productName}</div>
//                               <div className="text-sm text-gray-500">ID: {item.productId}</div>
//                             </TableCell>
//                             <TableCell>₹{item.priceAtPurchase.toFixed(2)}</TableCell>
//                             <TableCell>{item.quantity}</TableCell>
//                             <TableCell className="text-right">
//                               ₹{(item.priceAtPurchase * item.quantity).toFixed(2)}
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </div>

//                   <div className="flex justify-end">
//                     <div className="text-right space-y-2">
//                       <p className="text-lg">
//                         <span className="font-medium">Order Total:</span> ₹{selectedOrder.total.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </DialogContent>
//           </Dialog>
//         </>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Download, Plus } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// interface Product {
//   productName: string;
//   brand: string;
//   productPrice: number;
//   originalPrice?: number;
//   productDescription: string;
//   notes: string[];
//   productCategory: string;
// }

// interface OrderItem {
//   productId: string;
//   productName: string;
//   quantity: number;
//   priceAtPurchase: number;
// }

// interface Payment {
//   paymentId: string;
//   status: string;
//   amount: number;
//   method: string;
//   transactionId: string;
// }

// interface UserDetails {
//   userId: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// interface Order {
//   orderId: string | number;
//   orderNumber: string;
//   orderDate: string;
//   status: string;
//   total: number;
//   userDetails: UserDetails;
//   payment?: Payment;
//   items: OrderItem[];
// }

// interface Inquiry {
//   inquiryId: string | number;
//   name: string;
//   email: string;
//   phone: string;
//   inquiryType: string;
//   subject: string;
//   message: string;
//   timestamp: string;
// }

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("orders");
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [inquiries, setInquiries] = useState<Inquiry[]>([]);
//   const [loading, setLoading] = useState({
//     orders: true,
//     inquiries: true,
//     products: true
//   });
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
//   const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
//   const [newProduct, setNewProduct] = useState<Product>({
//     productName: "",
//     brand: "",
//     productPrice: 0,
//     originalPrice: 0,
//     productDescription: "",
//     notes: [],
//     productCategory: ""
//   });
//   const [frontImage, setFrontImage] = useState<File | null>(null);
//   const [backImage, setBackImage] = useState<File | null>(null);
//   const [notesInput, setNotesInput] = useState("");
//   const [isAddingProduct, setIsAddingProduct] = useState(false);
//   const { toast } = useToast();

//   // Fetch orders from backend
//   const fetchOrdersFromBackend = () => {
//     setLoading(prev => ({...prev, orders: true}));
//     fetch("https://5170dd6c9895.ngrok-free.app/api/orders/admin/all-orders", {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'ngrok-skip-browser-warning': '69420'
//       }
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           const processedOrders = data.map(order => ({
//             ...order,
//             orderId: String(order.orderId),
//             userDetails: {
//               ...order.userDetails,
//               phone: String(order.userDetails?.phone || '')
//             }
//           }));
//           setOrders(processedOrders);
//         } else {
//           console.error("Invalid response format: expected array");
//           setOrders([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//         toast({
//           title: "Warning",
//           description: "Network error please refresh the page.",
//           variant: "destructive",
//         });
//       })
//       .finally(() => {
//         setLoading(prev => ({...prev, orders: false}));
//       });
//   };

//   // Fetch inquiries from backend
//   const fetchInquiriesFromBackend = () => {
//     setLoading(prev => ({...prev, inquiries: true}));
//     fetch("https://5170dd6c9895.ngrok-free.app/api/inquiries/all", {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'ngrok-skip-browser-warning': '69420'
//       }
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           const processedInquiries = data.map(inquiry => ({
//             ...inquiry,
//             inquiryId: String(inquiry.inquiryId),
//             phone: String(inquiry.phone || ''),
//             timestamp: new Date(inquiry.timestamp).toLocaleString()
//           }));
//           setInquiries(processedInquiries);
//         } else {
//           console.error("Invalid response format: expected array");
//           setInquiries([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//         toast({
//           title: "Warning",
//           description: "Network error please refresh the page.",
//           variant: "destructive",
//         });
//       })
//       .finally(() => {
//         setLoading(prev => ({...prev, inquiries: false}));
//       });
//   };

//   const handleAddProduct = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsAddingProduct(true);

//     try {
//       // Validate required fields
//       if (!newProduct.productName.trim()) {
//         throw new Error("Product name is required");
//       }
//       if (!newProduct.brand.trim()) {
//         throw new Error("Brand is required");
//       }
//       if (newProduct.productPrice <= 0) {
//         throw new Error("Price must be greater than 0");
//       }
//       if (!frontImage || !backImage) {
//         throw new Error("Please upload both front and back images");
//       }

//       const formData = new FormData();
//       formData.append("product", JSON.stringify({
//         ...newProduct,
//         productPrice: Number(newProduct.productPrice),
//         originalPrice: newProduct.originalPrice ? Number(newProduct.originalPrice) : undefined
//       }));
//       formData.append("frontImage", frontImage);
//       formData.append("backImage", backImage);

//       const response = await fetch("https://5170dd6c9895.ngrok-free.app/api/products/add", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error("Network error please refresh the page.");
//       }

//       const data = await response.json();
//       toast({
//         title: "Success",
//         description: data.message || "Product added successfully",
//       });
      
//       resetForm();
//       setAddProductDialogOpen(false);
//     } catch (error) {
//       console.error("Error adding product:", error);
//       toast({
//         title: "Warning",
//         description: "Network error please refresh the page.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsAddingProduct(false);
//     }
//   };

//   const resetForm = () => {
//     setNewProduct({
//       productName: "",
//       brand: "",
//       productPrice: 0,
//       originalPrice: 0,
//       productDescription: "",
//       notes: [],
//       productCategory: ""
//     });
//     setFrontImage(null);
//     setBackImage(null);
//     setNotesInput("");
//   };

//   const addNote = () => {
//     if (notesInput.trim()) {
//       setNewProduct({
//         ...newProduct,
//         notes: [...newProduct.notes, notesInput.trim()]
//       });
//       setNotesInput("");
//     }
//   };

//   const removeNote = (index: number) => {
//     setNewProduct({
//       ...newProduct,
//       notes: newProduct.notes.filter((_, i) => i !== index)
//     });
//   };

//   useEffect(() => {
//     if (activeTab === "orders") {
//       fetchOrdersFromBackend();
//       const interval = setInterval(fetchOrdersFromBackend, 10000);
//       return () => clearInterval(interval);
//     } else if (activeTab === "inquiries") {
//       fetchInquiriesFromBackend();
//       const interval = setInterval(fetchInquiriesFromBackend, 10000);
//       return () => clearInterval(interval);
//     }
//   }, [activeTab]);

//   const filteredOrders = orders.filter((order) => {
//     const q = searchQuery.toLowerCase();
//     return (
//       String(order.orderId).toLowerCase().includes(q) ||
//       (order.payment?.paymentId && String(order.payment.paymentId).toLowerCase().includes(q)) ||
//       (order.userDetails?.name && order.userDetails.name.toLowerCase().includes(q)) ||
//       (order.userDetails?.phone && String(order.userDetails.phone).toLowerCase().includes(q))
//     );
//   });

//   const filteredInquiries = inquiries.filter((inquiry) => {
//     const q = searchQuery.toLowerCase();
//     return (
//       String(inquiry.inquiryId).toLowerCase().includes(q) ||
//       inquiry.name.toLowerCase().includes(q) ||
//       inquiry.email.toLowerCase().includes(q) ||
//       inquiry.phone.toLowerCase().includes(q) ||
//       inquiry.subject.toLowerCase().includes(q)
//     );
//   });

//   const exportToCSV = (type: "orders" | "inquiries") => {
//   let headers: string[] = [];
//   let data: (string | number)[][] = [];

//   if (type === "orders") {
//     headers = [
//       "Order ID",
//       "Order Number",
//       "Date",
//       "Status",
//       "Total",
//       "Customer Name",
//       "Customer Email",
//       "Customer Phone",
//       "Payment Method",
//       "Payment Status",
//       "Item Count",
//       "Item Details",
//     ];

//     data = orders.map((order) => {
//       const items = order.items
//         .map(
//           (item) =>
//             `${item.productName} - ₹${item.priceAtPurchase} x${item.quantity}`
//         )
//         .join(" | ");
//       return [
//         order.orderId,
//         order.orderNumber,
//         new Date(order.orderDate).toLocaleString(),
//         order.status,
//         order.total,
//         order.userDetails.name,
//         order.userDetails.email,
//         order.userDetails.phone,
//         order.payment?.method || "N/A",
//         order.payment?.status || "N/A",
//         order.items.length,
//         `"${items}"`,
//       ];
//     });
//   } else {
//     headers = [
//       "Inquiry ID",
//       "Name",
//       "Email",
//       "Phone",
//       "Type",
//       "Subject",
//       "Message",
//       "Timestamp"
//     ];

//     data = inquiries.map((inquiry) => [
//       inquiry.inquiryId,
//       inquiry.name,
//       inquiry.email,
//       inquiry.phone,
//       inquiry.inquiryType,
//       inquiry.subject,
//       `"${inquiry.message}"`,
//       inquiry.timestamp
//     ]);
//   }

//   // Convert all values to strings before joining
//   const csvData = data.map(row => row.map(value => String(value)));
  
//   const csv = [
//     headers.join(","),
//     ...csvData.map(row => row.join(",")),
//   ].join("\n");

//   const blob = new Blob([csv], { type: "text/csv" });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = `${type}_${new Date().toISOString()}.csv`;
//   link.click();
// };

//   const openOrderDetails = (order: Order) => {
//     setSelectedOrder(order);
//     setDialogOpen(true);
//   };

//   const openInquiryDetails = (inquiry: Inquiry) => {
//     setSelectedInquiry(inquiry);
//     setInquiryDialogOpen(true);
//   };

//   const deleteInquiry = async (inquiryId: string | number) => {
//     try {
//       const response = await fetch(`https://5170dd6c9895.ngrok-free.app/api/inquiries/${inquiryId}`, {
//         method: "DELETE",
//         headers: {
//           'Content-Type': 'application/json',
//           'ngrok-skip-browser-warning': '69420'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       toast({
//         title: "Success",
//         description: data.message || "Inquiry deleted successfully",
//       });
      
//       fetchInquiriesFromBackend();
//       setInquiryDialogOpen(false);
//     } catch (error) {
//       console.error("Error deleting inquiry:", error);
//       toast({
//         title: "Warning",
//         description: "Network error please refresh the page.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">🧾 Admin Dashboard</h1>
//         <div className="flex gap-2">
//           <Input
//             placeholder={`Search ${activeTab}...`}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="md:w-72"
//           />
//           {activeTab === "orders" && (
//             <Button onClick={() => exportToCSV("orders")}>
//               <Download className="h-4 w-4 mr-2" /> Export CSV
//             </Button>
//           )}
//           {activeTab === "inquiries" && (
//             <Button onClick={() => exportToCSV("inquiries")}>
//               <Download className="h-4 w-4 mr-2" /> Export CSV
//             </Button>
//           )}
//           {activeTab === "products" && (
//             <Dialog open={addProductDialogOpen} onOpenChange={setAddProductDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button>
//                   <Plus className="h-4 w-4 mr-2" /> Add Product
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-2xl">
//                 <DialogHeader>
//                   <DialogTitle>Add New Product</DialogTitle>
//                 </DialogHeader>
//                 <form onSubmit={handleAddProduct}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-4">
//                       <div>
//                         <Label>Product Name*</Label>
//                         <Input
//                           value={newProduct.productName}
//                           onChange={(e) => setNewProduct({...newProduct, productName: e.target.value})}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Brand*</Label>
//                         <Input
//                           value={newProduct.brand}
//                           onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Current Price*</Label>
//                         <Input
//                           type="number"
//                           value={newProduct.productPrice}
//                           onChange={(e) => setNewProduct({...newProduct, productPrice: Number(e.target.value)})}
//                           min="0.01"
//                           step="0.01"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Original Price (optional)</Label>
//                         <Input
//                           type="number"
//                           value={newProduct.originalPrice || ""}
//                           onChange={(e) => setNewProduct({...newProduct, originalPrice: Number(e.target.value) || undefined})}
//                           min="0.01"
//                           step="0.01"
//                         />
//                       </div>
//                       <div>
//                         <Label>Category*</Label>
//                         <Input
//                           value={newProduct.productCategory}
//                           onChange={(e) => setNewProduct({...newProduct, productCategory: e.target.value})}
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       <div>
//                         <Label>Description*</Label>
//                         <Textarea
//                           value={newProduct.productDescription}
//                           onChange={(e) => setNewProduct({...newProduct, productDescription: e.target.value})}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Notes (Add one at a time)</Label>
//                         <div className="flex gap-2">
//                           <Input
//                             value={notesInput}
//                             onChange={(e) => setNotesInput(e.target.value)}
//                             onKeyDown={(e) => e.key === 'Enter' && addNote()}
//                           />
//                           <Button type="button" onClick={addNote}>Add</Button>
//                         </div>
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           {newProduct.notes.map((note, index) => (
//                             <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded">
//                               {note}
//                               <button 
//                                 type="button"
//                                 onClick={() => removeNote(index)}
//                                 className="ml-2 text-red-500"
//                               >
//                                 ×
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       <div>
//                         <Label>Front Image*</Label>
//                         <Input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Back Image*</Label>
//                         <Input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => setBackImage(e.target.files?.[0] || null)}
//                           required
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex justify-end gap-2 mt-4">
//                     <Button 
//                       type="button"
//                       variant="outline" 
//                       onClick={() => setAddProductDialogOpen(false)}
//                     >
//                       Cancel
//                     </Button>
//                     <Button type="submit" disabled={isAddingProduct}>
//                       {isAddingProduct ? "Adding..." : "Add Product"}
//                     </Button>
//                   </div>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           )}
//         </div>
//       </div>

//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="orders">Orders</TabsTrigger>
//           <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
//           <TabsTrigger value="products">Products</TabsTrigger>
//         </TabsList>

//         <TabsContent value="orders">
//           {loading.orders ? (
//             <div className="p-8">Loading orders...</div>
//           ) : filteredOrders.length === 0 ? (
//             <p>No orders found.</p>
//           ) : (
//             <>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Order ID</TableHead>
//                     <TableHead>Order Number</TableHead>
//                     <TableHead>Date</TableHead>
//                     <TableHead>Customer</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Total</TableHead>
//                     <TableHead>Items</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredOrders.map((order) => (
//                     <TableRow
//                       key={order.orderId}
//                       onClick={() => openOrderDetails(order)}
//                       className="cursor-pointer hover:bg-gray-50"
//                     >
//                       <TableCell className="font-medium">{order.orderId}</TableCell>
//                       <TableCell>{order.orderNumber}</TableCell>
//                       <TableCell>
//                         {new Date(order.orderDate).toLocaleString()}
//                       </TableCell>
//                       <TableCell>
//                         {order.userDetails.name}
//                         <div className="text-sm text-gray-500">
//                           {order.userDetails.phone}
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
//                           order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
//                           order.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
//                           'bg-gray-100 text-gray-800'
//                         }`}>
//                           {order.status}
//                         </span>
//                       </TableCell>
//                       <TableCell>₹{order.total.toFixed(2)}</TableCell>
//                       <TableCell>{order.items.length} item(s)</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>

//               <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//                 <DialogContent className="max-w-2xl">
//                   <DialogHeader>
//                     <DialogTitle>Order Details - {selectedOrder?.orderNumber}</DialogTitle>
//                   </DialogHeader>

//                   {selectedOrder && (
//                     <div className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <h3 className="font-semibold mb-2">Customer Information</h3>
//                           <div className="space-y-1">
//                             <p><span className="font-medium">Name:</span> {selectedOrder.userDetails.name}</p>
//                             <p><span className="font-medium">Email:</span> {selectedOrder.userDetails.email}</p>
//                             <p><span className="font-medium">Phone:</span> {selectedOrder.userDetails.phone}</p>
//                             <p><span className="font-medium">Address:</span> {selectedOrder.userDetails.address}</p>
//                           </div>
//                         </div>
                        
//                         <div>
//                           <h3 className="font-semibold mb-2">Order Information</h3>
//                           <div className="space-y-1">
//                             <p><span className="font-medium">Order ID:</span> {selectedOrder.orderId}</p>
//                             <p><span className="font-medium">Order Number:</span> {selectedOrder.orderNumber}</p>
//                             <p><span className="font-medium">Date:</span> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
//                             <p><span className="font-medium">Status:</span> 
//                               <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
//                                 selectedOrder.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
//                                 selectedOrder.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
//                                 selectedOrder.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
//                                 'bg-gray-100 text-gray-800'
//                               }`}>
//                                 {selectedOrder.status}
//                               </span>
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {selectedOrder.payment && (
//                         <div>
//                           <h3 className="font-semibold mb-2">Payment Information</h3>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                               <p><span className="font-medium">Payment ID:</span> {selectedOrder.payment.paymentId}</p>
//                               <p><span className="font-medium">Status:</span> {selectedOrder.payment.status}</p>
//                             </div>
//                             <div>
//                               <p><span className="font-medium">Amount:</span> ₹{selectedOrder.payment.amount.toFixed(2)}</p>
//                               <p><span className="font-medium">Method:</span> {selectedOrder.payment.method}</p>
//                               {selectedOrder.payment.transactionId && (
//                                 <p><span className="font-medium">Transaction ID:</span> {selectedOrder.payment.transactionId}</p>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       <div>
//                         <h3 className="font-semibold mb-2">Order Items</h3>
//                         <Table>
//                           <TableHeader>
//                             <TableRow>
//                               <TableHead>Product</TableHead>
//                               <TableHead>Price</TableHead>
//                               <TableHead>Quantity</TableHead>
//                               <TableHead className="text-right">Total</TableHead>
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             {selectedOrder.items.map((item, index) => (
//                               <TableRow key={index}>
//                                 <TableCell>
//                                   <div className="font-medium">{item.productName}</div>
//                                   <div className="text-sm text-gray-500">ID: {item.productId}</div>
//                                 </TableCell>
//                                 <TableCell>₹{item.priceAtPurchase.toFixed(2)}</TableCell>
//                                 <TableCell>{item.quantity}</TableCell>
//                                 <TableCell className="text-right">
//                                   ₹{(item.priceAtPurchase * item.quantity).toFixed(2)}
//                                 </TableCell>
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       </div>

//                       <div className="flex justify-end">
//                         <div className="text-right space-y-2">
//                           <p className="text-lg">
//                             <span className="font-medium">Order Total:</span> ₹{selectedOrder.total.toFixed(2)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </DialogContent>
//               </Dialog>
//             </>
//           )}
//         </TabsContent>

//         <TabsContent value="inquiries">
//           {loading.inquiries ? (
//             <div className="p-8">Loading inquiries...</div>
//           ) : filteredInquiries.length === 0 ? (
//             <p>No inquiries found.</p>
//           ) : (
//             <>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Inquiry ID</TableHead>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Email</TableHead>
//                     <TableHead>Phone</TableHead>
//                     <TableHead>Type</TableHead>
//                     <TableHead>Subject</TableHead>
//                     <TableHead>Date</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredInquiries.map((inquiry) => (
//                     <TableRow
//                       key={inquiry.inquiryId}
//                       onClick={() => openInquiryDetails(inquiry)}
//                       className="cursor-pointer hover:bg-gray-50"
//                     >
//                       <TableCell className="font-medium">{inquiry.inquiryId}</TableCell>
//                       <TableCell>{inquiry.name}</TableCell>
//                       <TableCell>{inquiry.email}</TableCell>
//                       <TableCell>{inquiry.phone}</TableCell>
//                       <TableCell>{inquiry.inquiryType}</TableCell>
//                       <TableCell>{inquiry.subject}</TableCell>
//                       <TableCell>{inquiry.timestamp}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>

//               <Dialog open={inquiryDialogOpen} onOpenChange={setInquiryDialogOpen}>
//                 <DialogContent className="max-w-2xl">
//                   <DialogHeader>
//                     <DialogTitle>Inquiry Details - {selectedInquiry?.inquiryId}</DialogTitle>
//                   </DialogHeader>

//                   {selectedInquiry && (
//                     <div className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <h3 className="font-semibold mb-2">Contact Information</h3>
//                           <div className="space-y-1">
//                             <p><span className="font-medium">Name:</span> {selectedInquiry.name}</p>
//                             <p><span className="font-medium">Email:</span> {selectedInquiry.email}</p>
//                             <p><span className="font-medium">Phone:</span> {selectedInquiry.phone}</p>
//                           </div>
//                         </div>
                        
//                         <div>
//                           <h3 className="font-semibold mb-2">Inquiry Details</h3>
//                           <div className="space-y-1">
//                             <p><span className="font-medium">Type:</span> {selectedInquiry.inquiryType}</p>
//                             <p><span className="font-medium">Subject:</span> {selectedInquiry.subject}</p>
//                             <p><span className="font-medium">Date:</span> {selectedInquiry.timestamp}</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div>
//                         <h3 className="font-semibold mb-2">Message</h3>
//                         <div className="bg-gray-50 p-4 rounded">
//                           <p className="whitespace-pre-line">{selectedInquiry.message}</p>
//                         </div>
//                       </div>

//                       <div className="flex justify-end gap-2">
//                         <Button 
//                           variant="destructive"
//                           onClick={() => deleteInquiry(selectedInquiry.inquiryId)}
//                         >
//                           Delete Inquiry
//                         </Button>
//                       </div>
//                     </div>
//                   )}
//                 </DialogContent>
//               </Dialog>
//             </>
//           )}
//         </TabsContent>

//         <TabsContent value="products">
//           {loading.products ? (
//             <div className="p-8">Loading products...</div>
//           ) : (
//             <div className="flex items-center justify-center h-64">
//               <p className="text-gray-500">Product management coming soon</p>
//             </div>
//           )}
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }


// import { useEffect, useState, useCallback, useRef } from "react";
// import axios, { AxiosError, CancelTokenSource } from "axios";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Download, Plus, Search, RefreshCw, Trash2, Eye, Edit, Filter } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";

// interface Product {
//   productId?: number;
//   productName: string;
//   brand: string;
//   productPrice: number;
//   originalPrice?: number;
//   productDescription: string;
//   productImageUrl?: string;
//   productBackImageUrl?: string;
//   notes: string[];
//   productCategory: string;
//   rating?: number;
//   reviewCount?: number;
// }

// interface OrderItem {
//   productId: string;
//   productName: string;
//   quantity: number;
//   priceAtPurchase: number;
// }

// interface Payment {
//   paymentId: string;
//   status: string;
//   amount: number;
//   method: string;
//   transactionId?: string;
// }

// interface UserDetails {
//   userId: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// interface Order {
//   orderId: string | number;
//   orderNumber: string;
//   orderDate: string;
//   status: "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
//   total: number;
//   userDetails: UserDetails;
//   payment?: Payment;
//   items: OrderItem[];
// }

// interface Inquiry {
//   inquiryId: string | number;
//   name: string;
//   email: string;
//   phone: string;
//   inquiryType: string;
//   subject: string;
//   message: string;
//   timestamp: string;
//   status?: "NEW" | "READ" | "RESPONDED" | "ARCHIVED";
// }

// // Create axios instance with configuration
// const api = axios.create({
//   baseURL: "https://6a3dfa7e05c5.ngrok-free.app",
//   // timeout: 30000, // 30 seconds timeout
//   headers: {
//     "Content-Type": "application/json",
//     "ngrok-skip-browser-warning": "69420",
//     "Accept": "application/json",
//   },
// });

// // Add request interceptor
// api.interceptors.request.use(
//   (config) => {
//     console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
//     // Add timestamp to prevent caching for GET requests
//     if (config.method?.toLowerCase() === "get" && config.url) {
//       const timestamp = `_t=${Date.now()}`;
//       config.url += config.url.includes("?") ? `&${timestamp}` : `?${timestamp}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error("Request interceptor error:", error);
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor with retry logic
// api.interceptors.response.use(
//   (response) => {
//     console.log(`Response received: ${response.status}`, response.config.url);
//     return response;
//   },
//   async (error: AxiosError) => {
//     const originalRequest = error.config as any;
    
//     // Retry on network errors (no response) and not already retried
//     if (!error.response && !originalRequest?._retry) {
//       originalRequest._retry = true;
//       console.log("Retrying request due to network error...");
      
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Clear timestamp for retry
//       if (originalRequest.url) {
//         originalRequest.url = originalRequest.url.split("?")[0];
//       }
      
//       return api(originalRequest);
//     }
    
//     // Enhanced error logging
//     if (error.response) {
//       console.error("API Error Details:", {
//         status: error.response.status,
//         statusText: error.response.statusText,
//         url: error.config?.url,
//         method: error.config?.method,
//         data: error.response.data,
//       });
//     } else if (error.request) {
//       console.error("Network Error - No response received:", error.message);
//     } else {
//       console.error("Request Setup Error:", error.message);
//     }
    
//     return Promise.reject(error);
//   }
// );

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("orders");
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [inquiries, setInquiries] = useState<Inquiry[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState({
//     orders: false,
//     inquiries: false,
//     products: false
//   });
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
//   const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
//   const [productDialogOpen, setProductDialogOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
//   const [newProduct, setNewProduct] = useState<Product>({
//     productName: "",
//     brand: "",
//     productPrice: 0,
//     originalPrice: undefined,
//     productDescription: "",
//     notes: [],
//     productCategory: ""
//   });
//   const [frontImage, setFrontImage] = useState<File | null>(null);
//   const [backImage, setBackImage] = useState<File | null>(null);
//   const [notesInput, setNotesInput] = useState("");
//   const [isAddingProduct, setIsAddingProduct] = useState(false);
//   const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [stats, setStats] = useState({
//     totalOrders: 0,
//     totalRevenue: 0,
//     pendingOrders: 0,
//     newInquiries: 0
//   });
  
//   const { toast } = useToast();
//   const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

//   // Get status badge color
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "DELIVERED":
//       case "RESPONDED":
//         return "bg-green-100 text-green-800 hover:bg-green-100";
//       case "PENDING":
//       case "NEW":
//         return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
//       case "PROCESSING":
//         return "bg-blue-100 text-blue-800 hover:bg-blue-100";
//       case "SHIPPED":
//         return "bg-purple-100 text-purple-800 hover:bg-purple-100";
//       case "CANCELLED":
//       case "ARCHIVED":
//         return "bg-red-100 text-red-800 hover:bg-red-100";
//       default:
//         return "bg-gray-100 text-gray-800 hover:bg-gray-100";
//     }
//   };

//   // Fetch orders with axios
//   const fetchOrdersFromBackend = useCallback(async () => {
//     if (cancelTokenSourceRef.current) {
//       cancelTokenSourceRef.current.cancel("Operation cancelled due to new request");
//     }
    
//     const source = axios.CancelToken.source();
//     cancelTokenSourceRef.current = source;
    
//     setLoading(prev => ({ ...prev, orders: true }));
    
//     try {
//       console.log("Fetching orders...");
//       const response = await api.get("/api/orders/admin/all-orders", {
//         cancelToken: source.token,
//       });
      
//       console.log("Orders response:", response.data);
      
//       if (Array.isArray(response.data)) {
//         const processedOrders = response.data.map((order: any) => ({
//           ...order,
//           orderId: String(order.orderId),
//           userDetails: {
//             ...order.userDetails,
//             phone: String(order.userDetails?.phone || '')
//           }
//         }));
//         setOrders(processedOrders);
        
//         // Update stats
//         setStats(prev => ({
//           ...prev,
//           totalOrders: processedOrders.length,
//           totalRevenue: processedOrders.reduce((sum: number, order: Order) => sum + order.total, 0),
//           pendingOrders: processedOrders.filter((order: Order) => 
//             order.status === "PENDING" || order.status === "PROCESSING"
//           ).length
//         }));
//       } else {
//         console.error("Invalid response format: expected array");
//         setOrders([]);
//         toast({
//           title: "Warning",
//           description: "Received invalid data format from server.",
//           variant: "destructive",
//         });
//       }
//     } catch (error: any) {
//       if (axios.isCancel(error)) {
//         console.log("Order fetch cancelled:", error.message);
//         return;
//       }
      
//       console.error("❌ Fetch orders error:", error);
      
//       let errorMessage = "Failed to load orders. ";
//       if (error.code === "ECONNABORTED") {
//         errorMessage += "Request timeout. Please check your connection.";
//       } else if (error.message?.includes("Network Error")) {
//         errorMessage += "Network error. Please check your internet connection.";
//       } else if (error.response?.status === 401) {
//         errorMessage = "Unauthorized access. Please log in again.";
//       } else if (error.response?.status === 404) {
//         errorMessage = "Orders API endpoint not found.";
//       } else if (error.response?.status >= 500) {
//         errorMessage = "Server error. Please try again later.";
//       }
      
//       toast({
//         title: "Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(prev => ({ ...prev, orders: false }));
//       cancelTokenSourceRef.current = null;
//     }
//   }, [toast]);

//   // Fetch inquiries with axios
//   const fetchInquiriesFromBackend = useCallback(async () => {
//     setLoading(prev => ({ ...prev, inquiries: true }));
    
//     try {
//       console.log("Fetching inquiries...");
//       const response = await api.get("/api/inquiries/all");
      
//       console.log("Inquiries response:", response.data);
      
//       if (Array.isArray(response.data)) {
//         const processedInquiries = response.data.map((inquiry: any) => ({
//           ...inquiry,
//           inquiryId: String(inquiry.inquiryId),
//           phone: String(inquiry.phone || ''),
//           timestamp: new Date(inquiry.timestamp).toLocaleString(),
//           status: inquiry.status || "NEW"
//         }));
//         setInquiries(processedInquiries);
        
//         // Update stats
//         setStats(prev => ({
//           ...prev,
//           newInquiries: processedInquiries.filter((inq: Inquiry) => inq.status === "NEW").length
//         }));
//       } else {
//         console.error("Invalid response format: expected array");
//         setInquiries([]);
//         toast({
//           title: "Warning",
//           description: "Received invalid data format from server.",
//           variant: "destructive",
//         });
//       }
//     } catch (error: any) {
//       console.error("❌ Fetch inquiries error:", error);
      
//       let errorMessage = "Failed to load inquiries. ";
//       if (error.code === "ECONNABORTED") {
//         errorMessage += "Request timeout.";
//       } else if (error.message?.includes("Network Error")) {
//         errorMessage += "Network error.";
//       } else if (error.response?.status === 404) {
//         errorMessage = "Inquiries API endpoint not found.";
//       }
      
//       toast({
//         title: "Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(prev => ({ ...prev, inquiries: false }));
//     }
//   }, [toast]);

//   // Fetch products with axios
//   const fetchProductsFromBackend = useCallback(async () => {
//     setLoading(prev => ({ ...prev, products: true }));
    
//     try {
//       console.log("Fetching products...");
//       const response = await api.get("/api/products/all");
      
//       console.log("Products response:", response.data);
      
//       if (Array.isArray(response.data)) {
//         setProducts(response.data);
//       } else {
//         console.error("Invalid response format: expected array");
//         setProducts([]);
//         toast({
//           title: "Warning",
//           description: "Received invalid data format from server.",
//           variant: "destructive",
//         });
//       }
//     } catch (error: any) {
//       console.error("❌ Fetch products error:", error);
      
//       let errorMessage = "Failed to load products. ";
//       if (error.code === "ECONNABORTED") {
//         errorMessage += "Request timeout.";
//       } else if (error.message?.includes("Network Error")) {
//         errorMessage += "Network error.";
//       } else if (error.response?.status === 404) {
//         errorMessage = "Products API endpoint not found.";
//       }
      
//       toast({
//         title: "Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(prev => ({ ...prev, products: false }));
//     }
//   }, [toast]);

//   const handleAddProduct = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsAddingProduct(true);

//     try {
//       // Validate required fields
//       if (!newProduct.productName.trim()) {
//         throw new Error("Product name is required");
//       }
//       if (!newProduct.brand.trim()) {
//         throw new Error("Brand is required");
//       }
//       if (newProduct.productPrice <= 0) {
//         throw new Error("Price must be greater than 0");
//       }
//       if (!frontImage || !backImage) {
//         throw new Error("Please upload both front and back images");
//       }

//       const formData = new FormData();
//       formData.append("product", JSON.stringify({
//         ...newProduct,
//         productPrice: Number(newProduct.productPrice),
//         originalPrice: newProduct.originalPrice ? Number(newProduct.originalPrice) : undefined,
//         notes: newProduct.notes
//       }));
//       formData.append("frontImage", frontImage);
//       formData.append("backImage", backImage);

//       console.log("Adding product:", newProduct);
      
//       const response = await api.post("/api/products/add", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       toast({
//         title: "Success",
//         description: response.data.message || "Product added successfully",
//       });
      
//       resetProductForm();
//       setAddProductDialogOpen(false);
//       fetchProductsFromBackend(); // Refresh product list
      
//     } catch (error: any) {
//       console.error("Error adding product:", error);
      
//       let errorMessage = "Failed to add product. ";
//       if (error.code === "ECONNABORTED") {
//         errorMessage += "Request timeout.";
//       } else if (error.message?.includes("Network Error")) {
//         errorMessage += "Network error.";
//       } else if (error.response?.data?.message) {
//         errorMessage = error.response.data.message;
//       } else if (error.message) {
//         errorMessage = error.message;
//       }
      
//       toast({
//         title: "Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setIsAddingProduct(false);
//     }
//   };

//   const handleUpdateProduct = async (productId: number) => {
//     if (!selectedProduct) return;
    
//     setIsUpdatingProduct(true);
    
//     try {
//       const formData = new FormData();
//       formData.append("product", JSON.stringify({
//         ...selectedProduct,
//         productId,
//         productPrice: Number(selectedProduct.productPrice),
//         originalPrice: selectedProduct.originalPrice ? Number(selectedProduct.originalPrice) : undefined,
//       }));
      
//       if (frontImage) formData.append("frontImage", frontImage);
//       if (backImage) formData.append("backImage", backImage);
      
//       const response = await api.put(`/api/products/update/${productId}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
      
//       toast({
//         title: "Success",
//         description: response.data.message || "Product updated successfully",
//       });
      
//       setProductDialogOpen(false);
//       fetchProductsFromBackend();
      
//     } catch (error: any) {
//       console.error("Error updating product:", error);
      
//       let errorMessage = "Failed to update product. ";
//       if (error.response?.data?.message) {
//         errorMessage = error.response.data.message;
//       }
      
//       toast({
//         title: "Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     } finally {
//       setIsUpdatingProduct(false);
//     }
//   };

//   const deleteProduct = async (productId: number) => {
//     if (!confirm("Are you sure you want to delete this product?")) return;
    
//     try {
//       const response = await api.delete(`/api/products/delete/${productId}`);
      
//       toast({
//         title: "Success",
//         description: response.data.message || "Product deleted successfully",
//       });
      
//       fetchProductsFromBackend();
      
//     } catch (error: any) {
//       console.error("Error deleting product:", error);
      
//       let errorMessage = "Failed to delete product. ";
//       if (error.response?.data?.message) {
//         errorMessage = error.response.data.message;
//       }
      
//       toast({
//         title: "Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     }
//   };

//   const resetProductForm = () => {
//     setNewProduct({
//       productName: "",
//       brand: "",
//       productPrice: 0,
//       originalPrice: undefined,
//       productDescription: "",
//       notes: [],
//       productCategory: ""
//     });
//     setFrontImage(null);
//     setBackImage(null);
//     setNotesInput("");
//   };

//   const addNote = () => {
//     if (notesInput.trim()) {
//       setNewProduct({
//         ...newProduct,
//         notes: [...newProduct.notes, notesInput.trim()]
//       });
//       setNotesInput("");
//     }
//   };

//   const removeNote = (index: number) => {
//     setNewProduct({
//       ...newProduct,
//       notes: newProduct.notes.filter((_, i) => i !== index)
//     });
//   };

//   useEffect(() => {
//     // Initial data fetch
//     fetchOrdersFromBackend();
//     fetchInquiriesFromBackend();
//     fetchProductsFromBackend();
    
//     // Set up polling based on active tab
//     const interval = setInterval(() => {
//       if (activeTab === "orders") {
//         fetchOrdersFromBackend();
//       } else if (activeTab === "inquiries") {
//         fetchInquiriesFromBackend();
//       } else if (activeTab === "products") {
//         fetchProductsFromBackend();
//       }
//     }, 30000); // Poll every 30 seconds
  
//     return () => {
//       clearInterval(interval);
//       if (cancelTokenSourceRef.current) {
//         cancelTokenSourceRef.current.cancel("Component unmounting");
//       }
//     };
//   }, [activeTab, fetchOrdersFromBackend, fetchInquiriesFromBackend, fetchProductsFromBackend]);

//   const filteredOrders = orders.filter((order) => {
//     const matchesSearch = (
//       String(order.orderId).toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (order.orderNumber?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
//       (order.userDetails?.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
//       (order.userDetails?.phone?.toLowerCase().includes(searchQuery.toLowerCase()) || false)
//     );
    
//     const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
//     return matchesSearch && matchesStatus;
//   });

//   const filteredInquiries = inquiries.filter((inquiry) => {
//     const matchesSearch = (
//       String(inquiry.inquiryId).toLowerCase().includes(searchQuery.toLowerCase()) ||
//       inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       inquiry.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       inquiry.subject.toLowerCase().includes(searchQuery.toLowerCase())
//     );
    
//     const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;
    
//     return matchesSearch && matchesStatus;
//   });

//   const filteredProducts = products.filter((product) => {
//     return (
//       product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.productCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       product.notes.some(note => note.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//   });

//   const exportToCSV = async (type: "orders" | "inquiries" | "products") => {
//     try {
//       let headers: string[] = [];
//       let data: (string | number)[][] = [];

//       if (type === "orders") {
//         headers = [
//           "Order ID",
//           "Order Number",
//           "Date",
//           "Customer Name",
//           "Customer Email",
//           "Customer Phone",
//           "Status",
//           "Total Amount",
//           "Payment Method",
//           "Payment Status",
//           "Payment ID",
//           "Items Count"
//         ];

//         data = orders.map((order) => [
//           order.orderId,
//           order.orderNumber,
//           new Date(order.orderDate).toISOString(),
//           order.userDetails.name,
//           order.userDetails.email,
//           order.userDetails.phone,
//           order.status,
//           order.total,
//           order.payment?.method || "N/A",
//           order.payment?.status || "N/A",
//           order.payment?.paymentId || "N/A",
//           order.items.length
//         ]);
//       } else if (type === "inquiries") {
//         headers = [
//           "Inquiry ID",
//           "Name",
//           "Email",
//           "Phone",
//           "Type",
//           "Subject",
//           "Message",
//           "Status",
//           "Timestamp"
//         ];

//         data = inquiries.map((inquiry) => [
//           inquiry.inquiryId,
//           inquiry.name,
//           inquiry.email,
//           inquiry.phone,
//           inquiry.inquiryType,
//           inquiry.subject,
//           `"${inquiry.message.replace(/"/g, '""')}"`,
//           inquiry.status || "NEW",
//           inquiry.timestamp
//         ]);
//       } else {
//         headers = [
//           "Product ID",
//           "Product Name",
//           "Brand",
//           "Category",
//           "Price",
//           "Original Price",
//           "Rating",
//           "Review Count",
//           "Notes"
//         ];

//         data = products.map((product) => [
//           product.productId || "N/A",
//           product.productName,
//           product.brand,
//           product.productCategory,
//           product.productPrice,
//           product.originalPrice || "N/A",
//           product.rating || 0,
//           product.reviewCount || 0,
//           `"${product.notes.join(", ")}"`
//         ]);
//       }

//       const csvData = data.map(row => row.map(value => String(value)));
//       const csv = [
//         headers.join(","),
//         ...csvData.map(row => row.join(",")),
//       ].join("\n");

//       const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${type}_export_${new Date().toISOString().split('T')[0]}.csv`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);

//       toast({
//         title: "Success",
//         description: `${type.charAt(0).toUpperCase() + type.slice(1)} exported successfully`,
//       });
//     } catch (error) {
//       console.error("Export error:", error);
//       toast({
//         title: "Error",
//         description: "Failed to export data",
//         variant: "destructive",
//       });
//     }
//   };

//   const openOrderDetails = (order: Order) => {
//     setSelectedOrder(order);
//     setDialogOpen(true);
//   };

//   const openInquiryDetails = (inquiry: Inquiry) => {
//     setSelectedInquiry(inquiry);
//     setInquiryDialogOpen(true);
//   };

//   const openProductDetails = (product: Product) => {
//     setSelectedProduct(product);
//     setProductDialogOpen(true);
//     setFrontImage(null);
//     setBackImage(null);
//   };

//   const deleteInquiry = async (inquiryId: string | number) => {
//     if (!confirm("Are you sure you want to delete this inquiry?")) return;
    
//     try {
//       const response = await api.delete(`/api/inquiries/${inquiryId}`);
      
//       toast({
//         title: "Success",
//         description: response.data.message || "Inquiry deleted successfully",
//       });
      
//       fetchInquiriesFromBackend();
//       setInquiryDialogOpen(false);
      
//     } catch (error: any) {
//       console.error("Error deleting inquiry:", error);
      
//       let errorMessage = "Failed to delete inquiry. ";
//       if (error.response?.data?.message) {
//         errorMessage = error.response.data.message;
//       }
      
//       toast({
//         title: "Error",
//         description: errorMessage,
//         variant: "destructive",
//       });
//     }
//   };

//   const updateOrderStatus = async (orderId: string | number, newStatus: Order["status"]) => {
//     try {
//       const response = await api.patch(`/api/orders/${orderId}/status`, {
//         status: newStatus,
//       });
      
//       toast({
//         title: "Success",
//         description: `Order status updated to ${newStatus}`,
//       });
      
//       fetchOrdersFromBackend();
//       setDialogOpen(false);
      
//     } catch (error: any) {
//       console.error("Error updating order status:", error);
//       toast({
//         title: "Error",
//         description: "Failed to update order status",
//         variant: "destructive",
//       });
//     }
//   };

//   const updateInquiryStatus = async (inquiryId: string | number, newStatus: Inquiry["status"]) => {
//     try {
//       const response = await api.patch(`/api/inquiries/${inquiryId}/status`, {
//         status: newStatus,
//       });
      
//       toast({
//         title: "Success",
//         description: `Inquiry status updated to ${newStatus}`,
//       });
      
//       fetchInquiriesFromBackend();
//       setInquiryDialogOpen(false);
      
//     } catch (error: any) {
//       console.error("Error updating inquiry status:", error);
//       toast({
//         title: "Error",
//         description: "Failed to update inquiry status",
//         variant: "destructive",
//       });
//     }
//   };

//   const refreshData = () => {
//     if (activeTab === "orders") {
//       fetchOrdersFromBackend();
//     } else if (activeTab === "inquiries") {
//       fetchInquiriesFromBackend();
//     } else if (activeTab === "products") {
//       fetchProductsFromBackend();
//     }
    
//     toast({
//       title: "Refreshing",
//       description: "Fetching latest data...",
//     });
//   };

//   return (
//     <div className="p-6 space-y-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//           <p className="text-muted-foreground">Manage orders, inquiries, and products</p>
//         </div>
        
//         <div className="flex items-center gap-2">
//           <Button variant="outline" onClick={refreshData} size="sm">
//             <RefreshCw className="h-4 w-4 mr-2" />
//             Refresh
//           </Button>
          
//           {activeTab === "orders" && (
//             <Button onClick={() => exportToCSV("orders")} size="sm">
//               <Download className="h-4 w-4 mr-2" />
//               Export CSV
//             </Button>
//           )}
          
//           {activeTab === "inquiries" && (
//             <Button onClick={() => exportToCSV("inquiries")} size="sm">
//               <Download className="h-4 w-4 mr-2" />
//               Export CSV
//             </Button>
//           )}
          
//           {activeTab === "products" && (
//             <Button onClick={() => exportToCSV("products")} size="sm">
//               <Download className="h-4 w-4 mr-2" />
//               Export CSV
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{stats.totalOrders}</div>
//             <p className="text-xs text-muted-foreground">All time orders</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">₹{stats.totalRevenue.toFixed(2)}</div>
//             <p className="text-xs text-muted-foreground">Gross revenue</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{stats.pendingOrders}</div>
//             <p className="text-xs text-muted-foreground">Awaiting processing</p>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">New Inquiries</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{stats.newInquiries}</div>
//             <p className="text-xs text-muted-foreground">Unread messages</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Search and Filters */}
//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder={`Search ${activeTab}...`}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="pl-10"
//           />
//         </div>
        
//         <div className="flex gap-2">
//           <Select value={statusFilter} onValueChange={setStatusFilter}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Filter by status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Status</SelectItem>
//               {activeTab === "orders" && (
//                 <>
//                   <SelectItem value="PENDING">Pending</SelectItem>
//                   <SelectItem value="PROCESSING">Processing</SelectItem>
//                   <SelectItem value="SHIPPED">Shipped</SelectItem>
//                   <SelectItem value="DELIVERED">Delivered</SelectItem>
//                   <SelectItem value="CANCELLED">Cancelled</SelectItem>
//                 </>
//               )}
//               {activeTab === "inquiries" && (
//                 <>
//                   <SelectItem value="NEW">New</SelectItem>
//                   <SelectItem value="READ">Read</SelectItem>
//                   <SelectItem value="RESPONDED">Responded</SelectItem>
//                   <SelectItem value="ARCHIVED">Archived</SelectItem>
//                 </>
//               )}
//             </SelectContent>
//           </Select>
          
//           <Button variant="outline" size="icon" title="Clear filters" onClick={() => setStatusFilter("all")}>
//             <Filter className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="orders">Orders ({orders.length})</TabsTrigger>
//           <TabsTrigger value="inquiries">Inquiries ({inquiries.length})</TabsTrigger>
//           <TabsTrigger value="products">Products ({products.length})</TabsTrigger>
//         </TabsList>

//         {/* Orders Tab */}
//         <TabsContent value="orders">
//           {loading.orders ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
//               <span className="ml-3">Loading orders...</span>
//             </div>
//           ) : filteredOrders.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground">No orders found</p>
//               <Button variant="outline" onClick={fetchOrdersFromBackend} className="mt-4">
//                 Try Again
//               </Button>
//             </div>
//           ) : (
//             <div className="border rounded-lg">
//               <ScrollArea className="h-[600px]">
//                 <Table>
//                   <TableHeader className="sticky top-0 bg-background">
//                     <TableRow>
//                       <TableHead>Order ID</TableHead>
//                       <TableHead>Customer</TableHead>
//                       <TableHead>Date</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Total</TableHead>
//                       <TableHead>Payment</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {filteredOrders.map((order) => (
//                       <TableRow key={order.orderId}>
//                         <TableCell className="font-mono text-sm">
//                           {order.orderNumber || order.orderId}
//                         </TableCell>
//                         <TableCell>
//                           <div>
//                             <p className="font-medium">{order.userDetails.name}</p>
//                             <p className="text-xs text-muted-foreground">{order.userDetails.email}</p>
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           {new Date(order.orderDate).toLocaleDateString()}
//                         </TableCell>
//                         <TableCell>
//                           <Badge className={getStatusColor(order.status)}>
//                             {order.status}
//                           </Badge>
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           ₹{order.total.toFixed(2)}
//                         </TableCell>
//                         <TableCell>
//                           <Badge variant="outline">
//                             {order.payment?.method || "N/A"}
//                           </Badge>
//                         </TableCell>
//                         <TableCell>
//                           <div className="flex gap-2">
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => openOrderDetails(order)}
//                             >
//                               <Eye className="h-4 w-4" />
//                             </Button>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => updateOrderStatus(order.orderId, "PROCESSING")}
//                               disabled={order.status === "PROCESSING"}
//                             >
//                               Process
//                             </Button>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </ScrollArea>
//             </div>
//           )}
//         </TabsContent>

//         {/* Inquiries Tab */}
//         <TabsContent value="inquiries">
//           {loading.inquiries ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
//               <span className="ml-3">Loading inquiries...</span>
//             </div>
//           ) : filteredInquiries.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground">No inquiries found</p>
//               <Button variant="outline" onClick={fetchInquiriesFromBackend} className="mt-4">
//                 Try Again
//               </Button>
//             </div>
//           ) : (
//             <div className="border rounded-lg">
//               <ScrollArea className="h-[600px]">
//                 <Table>
//                   <TableHeader className="sticky top-0 bg-background">
//                     <TableRow>
//                       <TableHead>ID</TableHead>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Email</TableHead>
//                       <TableHead>Type</TableHead>
//                       <TableHead>Subject</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Date</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {filteredInquiries.map((inquiry) => (
//                       <TableRow key={inquiry.inquiryId}>
//                         <TableCell className="font-mono text-sm">
//                           {String(inquiry.inquiryId).substring(0, 8)}
//                         </TableCell>
//                         <TableCell>{inquiry.name}</TableCell>
//                         <TableCell>{inquiry.email}</TableCell>
//                         <TableCell>{inquiry.inquiryType}</TableCell>
//                         <TableCell className="max-w-[200px] truncate">
//                           {inquiry.subject}
//                         </TableCell>
//                         <TableCell>
//                           <Badge className={getStatusColor(inquiry.status || "NEW")}>
//                             {inquiry.status || "NEW"}
//                           </Badge>
//                         </TableCell>
//                         <TableCell>
//                           {new Date(inquiry.timestamp).toLocaleDateString()}
//                         </TableCell>
//                         <TableCell>
//                           <div className="flex gap-2">
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => openInquiryDetails(inquiry)}
//                             >
//                               <Eye className="h-4 w-4" />
//                             </Button>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => updateInquiryStatus(inquiry.inquiryId, "READ")}
//                               disabled={inquiry.status === "READ"}
//                             >
//                               Mark Read
//                             </Button>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </ScrollArea>
//             </div>
//           )}
//         </TabsContent>

//         {/* Products Tab */}
//         <TabsContent value="products">
//           <div className="flex justify-end mb-4">
//             <Dialog open={addProductDialogOpen} onOpenChange={setAddProductDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button>
//                   <Plus className="h-4 w-4 mr-2" /> Add Product
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <DialogHeader>
//                   <DialogTitle>Add New Product</DialogTitle>
//                 </DialogHeader>
//                 <form onSubmit={handleAddProduct}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {/* Left Column */}
//                     <div className="space-y-4">
//                       <div>
//                         <Label>Product Name*</Label>
//                         <Input
//                           value={newProduct.productName}
//                           onChange={(e) => setNewProduct({...newProduct, productName: e.target.value})}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Brand*</Label>
//                         <Input
//                           value={newProduct.brand}
//                           onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Current Price*</Label>
//                         <Input
//                           type="number"
//                           value={newProduct.productPrice}
//                           onChange={(e) => setNewProduct({...newProduct, productPrice: Number(e.target.value)})}
//                           min="0.01"
//                           step="0.01"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Original Price (optional)</Label>
//                         <Input
//                           type="number"
//                           value={newProduct.originalPrice || ""}
//                           onChange={(e) => setNewProduct({...newProduct, originalPrice: Number(e.target.value) || undefined})}
//                           min="0.01"
//                           step="0.01"
//                         />
//                       </div>
//                       <div>
//                         <Label>Category*</Label>
//                         <Input
//                           value={newProduct.productCategory}
//                           onChange={(e) => setNewProduct({...newProduct, productCategory: e.target.value})}
//                           required
//                         />
//                       </div>
//                     </div>
                    
//                     {/* Right Column */}
//                     <div className="space-y-4">
//                       <div>
//                         <Label>Description*</Label>
//                         <Textarea
//                           value={newProduct.productDescription}
//                           onChange={(e) => setNewProduct({...newProduct, productDescription: e.target.value})}
//                           required
//                           rows={4}
//                         />
//                       </div>
//                       <div>
//                         <Label>Notes (Add one at a time)</Label>
//                         <div className="flex gap-2">
//                           <Input
//                             value={notesInput}
//                             onChange={(e) => setNotesInput(e.target.value)}
//                             onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addNote())}
//                             placeholder="Add a note and press Enter"
//                           />
//                           <Button type="button" onClick={addNote}>Add</Button>
//                         </div>
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           {newProduct.notes.map((note, index) => (
//                             <div key={index} className="flex items-center bg-secondary px-2 py-1 rounded">
//                               <span className="text-sm">{note}</span>
//                               <button 
//                                 type="button"
//                                 onClick={() => removeNote(index)}
//                                 className="ml-2 text-red-500 hover:text-red-700"
//                               >
//                                 ×
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       <div>
//                         <Label>Front Image*</Label>
//                         <Input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label>Back Image*</Label>
//                         <Input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => setBackImage(e.target.files?.[0] || null)}
//                           required
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <DialogFooter className="mt-6">
//                     <Button 
//                       type="button"
//                       variant="outline" 
//                       onClick={() => {
//                         setAddProductDialogOpen(false);
//                         resetProductForm();
//                       }}
//                     >
//                       Cancel
//                     </Button>
//                     <Button type="submit" disabled={isAddingProduct}>
//                       {isAddingProduct ? "Adding..." : "Add Product"}
//                     </Button>
//                   </DialogFooter>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>

//           {loading.products ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
//               <span className="ml-3">Loading products...</span>
//             </div>
//           ) : filteredProducts.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground">No products found</p>
//               <Button variant="outline" onClick={fetchProductsFromBackend} className="mt-4">
//                 Try Again
//               </Button>
//             </div>
//           ) : (
//             <div className="border rounded-lg">
//               <ScrollArea className="h-[600px]">
//                 <Table>
//                   <TableHeader className="sticky top-0 bg-background">
//                     <TableRow>
//                       <TableHead>Product</TableHead>
//                       <TableHead>Brand</TableHead>
//                       <TableHead>Category</TableHead>
//                       <TableHead>Price</TableHead>
//                       <TableHead>Rating</TableHead>
//                       <TableHead>Notes</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {filteredProducts.map((product) => (
//                       <TableRow key={product.productId}>
//                         <TableCell>
//                           <div className="flex items-center gap-3">
//                             {product.productImageUrl && (
//                               <img
//                                 src={product.productImageUrl}
//                                 alt={product.productName}
//                                 className="w-10 h-10 object-cover rounded"
//                               />
//                             )}
//                             <div>
//                               <p className="font-medium">{product.productName}</p>
//                               <p className="text-xs text-muted-foreground">ID: {product.productId}</p>
//                             </div>
//                           </div>
//                         </TableCell>
//                         <TableCell>{product.brand}</TableCell>
//                         <TableCell>
//                           <Badge variant="outline">{product.productCategory}</Badge>
//                         </TableCell>
//                         <TableCell>
//                           <div>
//                             <p className="font-medium">₹{product.productPrice.toFixed(2)}</p>
//                             {product.originalPrice && (
//                               <p className="text-xs text-muted-foreground line-through">
//                                 ₹{product.originalPrice.toFixed(2)}
//                               </p>
//                             )}
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           <div className="flex items-center gap-1">
//                             <span className="font-medium">{product.rating?.toFixed(1) || "0.0"}</span>
//                             <span className="text-xs text-muted-foreground">
//                               ({product.reviewCount || 0})
//                             </span>
//                           </div>
//                         </TableCell>
//                         <TableCell className="max-w-[200px]">
//                           <div className="flex flex-wrap gap-1">
//                             {product.notes.slice(0, 2).map((note, index) => (
//                               <span key={index} className="text-xs bg-secondary px-2 py-1 rounded">
//                                 {note}
//                               </span>
//                             ))}
//                             {product.notes.length > 2 && (
//                               <span className="text-xs text-muted-foreground">
//                                 +{product.notes.length - 2} more
//                               </span>
//                             )}
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           <div className="flex gap-2">
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => openProductDetails(product)}
//                             >
//                               <Eye className="h-4 w-4" />
//                             </Button>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => openProductDetails(product)}
//                             >
//                               <Edit className="h-4 w-4" />
//                             </Button>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => product.productId && deleteProduct(product.productId)}
//                             >
//                               <Trash2 className="h-4 w-4" />
//                             </Button>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </ScrollArea>
//             </div>
//           )}
//         </TabsContent>
//       </Tabs>

//       {/* Order Details Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>Order Details - {selectedOrder?.orderNumber}</DialogTitle>
//           </DialogHeader>
//           {selectedOrder && (
//             <div className="space-y-6">
//               {/* Order Summary */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-lg">Customer Information</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-2">
//                     <p><span className="font-medium">Name:</span> {selectedOrder.userDetails.name}</p>
//                     <p><span className="font-medium">Email:</span> {selectedOrder.userDetails.email}</p>
//                     <p><span className="font-medium">Phone:</span> {selectedOrder.userDetails.phone}</p>
//                     <p><span className="font-medium">Address:</span> {selectedOrder.userDetails.address}</p>
//                   </CardContent>
//                 </Card>
                
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-lg">Order Information</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-2">
//                     <p><span className="font-medium">Order ID:</span> {selectedOrder.orderId}</p>
//                     <p><span className="font-medium">Order Number:</span> {selectedOrder.orderNumber}</p>
//                     <p><span className="font-medium">Date:</span> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
//                     <p className="flex items-center gap-2">
//                       <span className="font-medium">Status:</span>
//                       <Badge className={getStatusColor(selectedOrder.status)}>
//                         {selectedOrder.status}
//                       </Badge>
//                     </p>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Payment Information */}
//               {selectedOrder.payment && (
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-lg">Payment Information</CardTitle>
//                   </CardHeader>
//                   <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <p><span className="font-medium">Payment ID:</span> {selectedOrder.payment.paymentId}</p>
//                       <p><span className="font-medium">Status:</span> {selectedOrder.payment.status}</p>
//                     </div>
//                     <div className="space-y-2">
//                       <p><span className="font-medium">Amount:</span> ₹{selectedOrder.payment.amount.toFixed(2)}</p>
//                       <p><span className="font-medium">Method:</span> {selectedOrder.payment.method}</p>
//                       {selectedOrder.payment.transactionId && (
//                         <p><span className="font-medium">Transaction ID:</span> {selectedOrder.payment.transactionId}</p>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               )}

//               {/* Order Items */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg">Order Items</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Product</TableHead>
//                         <TableHead>Price</TableHead>
//                         <TableHead>Quantity</TableHead>
//                         <TableHead className="text-right">Total</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {selectedOrder.items.map((item, index) => (
//                         <TableRow key={index}>
//                           <TableCell>
//                             <div className="font-medium">{item.productName}</div>
//                             <div className="text-sm text-muted-foreground">ID: {item.productId}</div>
//                           </TableCell>
//                           <TableCell>₹{item.priceAtPurchase.toFixed(2)}</TableCell>
//                           <TableCell>{item.quantity}</TableCell>
//                           <TableCell className="text-right font-medium">
//                             ₹{(item.priceAtPurchase * item.quantity).toFixed(2)}
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                   <div className="flex justify-end mt-4">
//                     <div className="text-right space-y-1">
//                       <p className="text-lg font-bold">
//                         Order Total: ₹{selectedOrder.total.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Status Actions */}
//               <div className="flex justify-end gap-2">
//                 {selectedOrder.status !== "PROCESSING" && (
//                   <Button
//                     variant="outline"
//                     onClick={() => updateOrderStatus(selectedOrder.orderId, "PROCESSING")}
//                   >
//                     Mark as Processing
//                   </Button>
//                 )}
//                 {selectedOrder.status !== "SHIPPED" && (
//                   <Button
//                     variant="outline"
//                     onClick={() => updateOrderStatus(selectedOrder.orderId, "SHIPPED")}
//                   >
//                     Mark as Shipped
//                   </Button>
//                 )}
//                 {selectedOrder.status !== "DELIVERED" && (
//                   <Button
//                     onClick={() => updateOrderStatus(selectedOrder.orderId, "DELIVERED")}
//                   >
//                     Mark as Delivered
//                   </Button>
//                 )}
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       {/* Inquiry Details Dialog */}
//       <Dialog open={inquiryDialogOpen} onOpenChange={setInquiryDialogOpen}>
//         <DialogContent className="max-w-2xl">
//           <DialogHeader>
//             <DialogTitle>Inquiry Details</DialogTitle>
//           </DialogHeader>
//           {selectedInquiry && (
//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="font-semibold mb-2">Contact Information</h3>
//                   <div className="space-y-1">
//                     <p><span className="font-medium">Name:</span> {selectedInquiry.name}</p>
//                     <p><span className="font-medium">Email:</span> {selectedInquiry.email}</p>
//                     <p><span className="font-medium">Phone:</span> {selectedInquiry.phone}</p>
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="font-semibold mb-2">Inquiry Details</h3>
//                   <div className="space-y-1">
//                     <p><span className="font-medium">Type:</span> {selectedInquiry.inquiryType}</p>
//                     <p><span className="font-medium">Subject:</span> {selectedInquiry.subject}</p>
//                     <p><span className="font-medium">Date:</span> {selectedInquiry.timestamp}</p>
//                     <p className="flex items-center gap-2">
//                       <span className="font-medium">Status:</span>
//                       <Badge className={getStatusColor(selectedInquiry.status || "NEW")}>
//                         {selectedInquiry.status || "NEW"}
//                       </Badge>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="font-semibold mb-2">Message</h3>
//                 <div className="bg-muted p-4 rounded-lg">
//                   <p className="whitespace-pre-line">{selectedInquiry.message}</p>
//                 </div>
//               </div>

//               <div className="flex justify-between gap-2">
//                 <Button 
//                   variant="destructive"
//                   onClick={() => deleteInquiry(selectedInquiry.inquiryId)}
//                 >
//                   <Trash2 className="h-4 w-4 mr-2" />
//                   Delete Inquiry
//                 </Button>
                
//                 <div className="flex gap-2">
//                   <Button
//                     variant="outline"
//                     onClick={() => updateInquiryStatus(selectedInquiry.inquiryId, "READ")}
//                     disabled={selectedInquiry.status === "READ"}
//                   >
//                     Mark as Read
//                   </Button>
//                   <Button
//                     onClick={() => updateInquiryStatus(selectedInquiry.inquiryId, "RESPONDED")}
//                     disabled={selectedInquiry.status === "RESPONDED"}
//                   >
//                     Mark as Responded
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       {/* Product Details Dialog */}
//       <Dialog open={productDialogOpen} onOpenChange={setProductDialogOpen}>
//         <DialogContent className="max-w-4xl">
//           <DialogHeader>
//             <DialogTitle>Product Details</DialogTitle>
//           </DialogHeader>
//           {selectedProduct && (
//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="font-semibold mb-4">Product Information</h3>
//                   <div className="space-y-3">
//                     <div>
//                       <Label>Product Name</Label>
//                       <Input
//                         value={selectedProduct.productName}
//                         onChange={(e) => setSelectedProduct({...selectedProduct, productName: e.target.value})}
//                       />
//                     </div>
//                     <div>
//                       <Label>Brand</Label>
//                       <Input
//                         value={selectedProduct.brand}
//                         onChange={(e) => setSelectedProduct({...selectedProduct, brand: e.target.value})}
//                       />
//                     </div>
//                     <div>
//                       <Label>Price</Label>
//                       <Input
//                         type="number"
//                         value={selectedProduct.productPrice}
//                         onChange={(e) => setSelectedProduct({...selectedProduct, productPrice: Number(e.target.value)})}
//                       />
//                     </div>
//                     <div>
//                       <Label>Category</Label>
//                       <Input
//                         value={selectedProduct.productCategory}
//                         onChange={(e) => setSelectedProduct({...selectedProduct, productCategory: e.target.value})}
//                       />
//                     </div>
//                   </div>
//                 </div>
                
//                 <div>
//                   <h3 className="font-semibold mb-4">Images</h3>
//                   <div className="space-y-4">
//                     <div>
//                       <Label>Update Front Image</Label>
//                       <Input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
//                       />
//                       {selectedProduct.productImageUrl && (
//                         <img
//                           src={selectedProduct.productImageUrl}
//                           alt="Front"
//                           className="mt-2 w-32 h-32 object-cover rounded"
//                         />
//                       )}
//                     </div>
//                     <div>
//                       <Label>Update Back Image</Label>
//                       <Input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setBackImage(e.target.files?.[0] || null)}
//                       />
//                       {selectedProduct.productBackImageUrl && (
//                         <img
//                           src={selectedProduct.productBackImageUrl}
//                           alt="Back"
//                           className="mt-2 w-32 h-32 object-cover rounded"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <Label>Description</Label>
//                 <Textarea
//                   value={selectedProduct.productDescription}
//                   onChange={(e) => setSelectedProduct({...selectedProduct, productDescription: e.target.value})}
//                   rows={4}
//                 />
//               </div>

//               <div>
//                 <Label>Notes</Label>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {selectedProduct.notes.map((note, index) => (
//                     <span key={index} className="bg-secondary px-3 py-1 rounded-full text-sm">
//                       {note}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex justify-end gap-2">
//                 <Button
//                   variant="outline"
//                   onClick={() => setProductDialogOpen(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   onClick={() => selectedProduct.productId && handleUpdateProduct(selectedProduct.productId)}
//                   disabled={isUpdatingProduct}
//                 >
//                   {isUpdatingProduct ? "Updating..." : "Update Product"}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


import { useEffect, useState, useCallback, useRef } from "react";
import axios, { AxiosError, CancelTokenSource } from "axios";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Plus, Search, RefreshCw, Trash2, Eye, Edit, Filter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Product {
  productId?: number;
  productName: string;
  brand: string;
  productPrice: number;
  originalPrice?: number;
  productDescription: string;
  productImageUrl?: string;
  productBackImageUrl?: string;
  notes: string[];
  productCategory: string;
  rating?: number;
  reviewCount?: number;
}

interface OrderItem {
  productId: string | number;
  productName: string;
  quantity: number;
  priceAtPurchase: number | null;
}

interface Payment {
  paymentId: string | number;
  status: string;
  amount: number;
  method: string;
  transactionId?: string;
}

interface UserDetails {
  userId?: string;
  name?: string;
  userName?: string;
  email: string;
  phone: string;
  address: string;
}

interface Order {
  orderId: string | number;
  orderNumber: string;
  orderDate: string;
  status: "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  total: number;
  userDetails: UserDetails;
  payment?: Payment;
  items: OrderItem[];
}

interface Inquiry {
  inquiryId: string | number;
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  message: string;
  timestamp: string;
  status?: "NEW" | "READ" | "RESPONDED" | "ARCHIVED";
}

// Create axios instance with configuration
const api = axios.create({
  baseURL: "https://6a3dfa7e05c5.ngrok-free.app",
  // timeout: 30000, // 30 seconds timeout
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    "Accept": "application/json",
  },
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    // Add timestamp to prevent caching for GET requests
    if (config.method?.toLowerCase() === "get" && config.url) {
      const timestamp = `_t=${Date.now()}`;
      config.url += config.url.includes("?") ? `&${timestamp}` : `?${timestamp}`;
    }
    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor with retry logic
api.interceptors.response.use(
  (response) => {
    console.log(`Response received: ${response.status}`, response.config.url);
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any;
    
    // Retry on network errors (no response) and not already retried
    if (!error.response && !originalRequest?._retry) {
      originalRequest._retry = true;
      console.log("Retrying request due to network error...");
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear timestamp for retry
      if (originalRequest.url) {
        originalRequest.url = originalRequest.url.split("?")[0];
      }
      
      return api(originalRequest);
    }
    
    // Enhanced error logging
    if (error.response) {
      console.error("API Error Details:", {
        status: error.response.status,
        statusText: error.response.statusText,
        url: error.config?.url,
        method: error.config?.method,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error("Network Error - No response received:", error.message);
    } else {
      console.error("Request Setup Error:", error.message);
    }
    
    return Promise.reject(error);
  }
);

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState({
    orders: false,
    inquiries: false,
    products: false
  });
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
  const [productDialogOpen, setProductDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    productName: "",
    brand: "",
    productPrice: 0,
    originalPrice: undefined,
    productDescription: "",
    notes: [],
    productCategory: ""
  });
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [notesInput, setNotesInput] = useState("");
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    newInquiries: 0
  });
  
  const { toast } = useToast();
  const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "DELIVERED":
      case "RESPONDED":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "PENDING":
      case "NEW":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "PROCESSING":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "SHIPPED":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "CANCELLED":
      case "ARCHIVED":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Fetch orders with axios
  const fetchOrdersFromBackend = useCallback(async () => {
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel("Operation cancelled due to new request");
    }
    
    const source = axios.CancelToken.source();
    cancelTokenSourceRef.current = source;
    
    setLoading(prev => ({ ...prev, orders: true }));
    
    try {
      console.log("Fetching orders...");
      const response = await api.get("/api/orders/admin/all-orders", {
        cancelToken: source.token,
      });
      
      console.log("Orders response:", response.data);
      
      if (Array.isArray(response.data)) {
        const processedOrders = response.data.map((order: any) => {
          // Check if userDetails exists and has correct structure
          const userDetails = order.userDetails || {};
          const userName = userDetails.userName || userDetails.name || "N/A";
          
          return {
            ...order,
            orderId: String(order.orderId),
            orderNumber: order.orderNumber || `ORDER-${order.orderId}`,
            orderDate: order.orderDate || new Date().toISOString(),
            total: order.total || 0,
            userDetails: {
              userId: userDetails.userId || "N/A",
              name: userName,
              userName: userName,
              email: userDetails.email || "N/A",
              phone: String(userDetails.phone || ''),
              address: userDetails.address || 'Address not provided'
            },
            items: Array.isArray(order.items) ? order.items.map((item: any) => ({
              ...item,
              productId: String(item.productId || "N/A"),
              priceAtPurchase: item.priceAtPurchase !== null && item.priceAtPurchase !== undefined 
                ? Number(item.priceAtPurchase) 
                : 0
            })) : [],
            payment: order.payment ? {
              paymentId: String(order.payment.paymentId || "N/A"),
              status: order.payment.status || "N/A",
              amount: order.payment.amount || 0,
              method: order.payment.method || "N/A",
              transactionId: order.payment.transactionId
            } : undefined
          };
        });
        
        setOrders(processedOrders);
        
        // Update stats
        setStats(prev => ({
          ...prev,
          totalOrders: processedOrders.length,
          totalRevenue: processedOrders.reduce((sum: number, order: Order) => sum + (order.total || 0), 0),
          pendingOrders: processedOrders.filter((order: Order) => 
            order.status === "PENDING" || order.status === "PROCESSING"
          ).length
        }));
      } else {
        console.error("Invalid response format: expected array");
        setOrders([]);
        toast({
          title: "Warning",
          description: "Received invalid data format from server.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      if (axios.isCancel(error)) {
        console.log("Order fetch cancelled:", error.message);
        return;
      }
      
      console.error("❌ Fetch orders error:", error);
      
      let errorMessage = "Failed to load orders. ";
      if (error.code === "ECONNABORTED") {
        errorMessage += "Request timeout. Please check your connection.";
      } else if (error.message?.includes("Network Error")) {
        errorMessage += "Network error. Please check your internet connection.";
      } else if (error.response?.status === 401) {
        errorMessage = "Unauthorized access. Please log in again.";
      } else if (error.response?.status === 404) {
        errorMessage = "Orders API endpoint not found.";
      } else if (error.response?.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(prev => ({ ...prev, orders: false }));
      cancelTokenSourceRef.current = null;
    }
  }, [toast]);

  // Fetch inquiries with axios
  const fetchInquiriesFromBackend = useCallback(async () => {
    setLoading(prev => ({ ...prev, inquiries: true }));
    
    try {
      console.log("Fetching inquiries...");
      const response = await api.get("/api/inquiries/all");
      
      console.log("Inquiries response:", response.data);
      
      if (Array.isArray(response.data)) {
        const processedInquiries = response.data.map((inquiry: any) => ({
          ...inquiry,
          inquiryId: String(inquiry.inquiryId),
          phone: String(inquiry.phone || ''),
          timestamp: new Date(inquiry.timestamp).toLocaleString(),
          status: inquiry.status || "NEW"
        }));
        setInquiries(processedInquiries);
        
        // Update stats
        setStats(prev => ({
          ...prev,
          newInquiries: processedInquiries.filter((inq: Inquiry) => inq.status === "NEW").length
        }));
      } else {
        console.error("Invalid response format: expected array");
        setInquiries([]);
        toast({
          title: "Warning",
          description: "Received invalid data format from server.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("❌ Fetch inquiries error:", error);
      
      let errorMessage = "Failed to load inquiries. ";
      if (error.code === "ECONNABORTED") {
        errorMessage += "Request timeout.";
      } else if (error.message?.includes("Network Error")) {
        errorMessage += "Network error.";
      } else if (error.response?.status === 404) {
        errorMessage = "Inquiries API endpoint not found.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(prev => ({ ...prev, inquiries: false }));
    }
  }, [toast]);

  // Fetch products with axios
  const fetchProductsFromBackend = useCallback(async () => {
    setLoading(prev => ({ ...prev, products: true }));
    
    try {
      console.log("Fetching products...");
      const response = await api.get("/api/products/all");
      
      console.log("Products response:", response.data);
      
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error("Invalid response format: expected array");
        setProducts([]);
        toast({
          title: "Warning",
          description: "Received invalid data format from server.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("❌ Fetch products error:", error);
      
      let errorMessage = "Failed to load products. ";
      if (error.code === "ECONNABORTED") {
        errorMessage += "Request timeout.";
      } else if (error.message?.includes("Network Error")) {
        errorMessage += "Network error.";
      } else if (error.response?.status === 404) {
        errorMessage = "Products API endpoint not found.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(prev => ({ ...prev, products: false }));
    }
  }, [toast]);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddingProduct(true);

    try {
      // Validate required fields
      if (!newProduct.productName.trim()) {
        throw new Error("Product name is required");
      }
      if (!newProduct.brand.trim()) {
        throw new Error("Brand is required");
      }
      if (newProduct.productPrice <= 0) {
        throw new Error("Price must be greater than 0");
      }
      if (!frontImage || !backImage) {
        throw new Error("Please upload both front and back images");
      }

      const formData = new FormData();
      formData.append("product", JSON.stringify({
        ...newProduct,
        productPrice: Number(newProduct.productPrice),
        originalPrice: newProduct.originalPrice ? Number(newProduct.originalPrice) : undefined,
        notes: newProduct.notes
      }));
      formData.append("frontImage", frontImage);
      formData.append("backImage", backImage);

      console.log("Adding product:", newProduct);
      
      const response = await api.post("/api/products/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast({
        title: "Success",
        description: response.data.message || "Product added successfully",
      });
      
      resetProductForm();
      setAddProductDialogOpen(false);
      fetchProductsFromBackend(); // Refresh product list
      
    } catch (error: any) {
      console.error("Error adding product:", error);
      
      let errorMessage = "Failed to add product. ";
      if (error.code === "ECONNABORTED") {
        errorMessage += "Request timeout.";
      } else if (error.message?.includes("Network Error")) {
        errorMessage += "Network error.";
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsAddingProduct(false);
    }
  };

  const handleUpdateProduct = async (productId: number) => {
    if (!selectedProduct) return;
    
    setIsUpdatingProduct(true);
    
    try {
      const formData = new FormData();
      formData.append("product", JSON.stringify({
        ...selectedProduct,
        productId,
        productPrice: Number(selectedProduct.productPrice),
        originalPrice: selectedProduct.originalPrice ? Number(selectedProduct.originalPrice) : undefined,
      }));
      
      if (frontImage) formData.append("frontImage", frontImage);
      if (backImage) formData.append("backImage", backImage);
      
      const response = await api.put(`/api/products/update/${productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      toast({
        title: "Success",
        description: response.data.message || "Product updated successfully",
      });
      
      setProductDialogOpen(false);
      fetchProductsFromBackend();
      
    } catch (error: any) {
      console.error("Error updating product:", error);
      
      let errorMessage = "Failed to update product. ";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsUpdatingProduct(false);
    }
  };

  const deleteProduct = async (productId: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    
    try {
      const response = await api.delete(`/api/products/delete/${productId}`);
      
      toast({
        title: "Success",
        description: response.data.message || "Product deleted successfully",
      });
      
      fetchProductsFromBackend();
      
    } catch (error: any) {
      console.error("Error deleting product:", error);
      
      let errorMessage = "Failed to delete product. ";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const resetProductForm = () => {
    setNewProduct({
      productName: "",
      brand: "",
      productPrice: 0,
      originalPrice: undefined,
      productDescription: "",
      notes: [],
      productCategory: ""
    });
    setFrontImage(null);
    setBackImage(null);
    setNotesInput("");
  };

  const addNote = () => {
    if (notesInput.trim()) {
      setNewProduct({
        ...newProduct,
        notes: [...newProduct.notes, notesInput.trim()]
      });
      setNotesInput("");
    }
  };

  const removeNote = (index: number) => {
    setNewProduct({
      ...newProduct,
      notes: newProduct.notes.filter((_, i) => i !== index)
    });
  };

  useEffect(() => {
    // Initial data fetch
    fetchOrdersFromBackend();
    fetchInquiriesFromBackend();
    fetchProductsFromBackend();
    
    // Set up polling based on active tab
    const interval = setInterval(() => {
      if (activeTab === "orders") {
        fetchOrdersFromBackend();
      } else if (activeTab === "inquiries") {
        fetchInquiriesFromBackend();
      } else if (activeTab === "products") {
        fetchProductsFromBackend();
      }
    }, 30000); // Poll every 30 seconds
  
    return () => {
      clearInterval(interval);
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel("Component unmounting");
      }
    };
  }, [activeTab, fetchOrdersFromBackend, fetchInquiriesFromBackend, fetchProductsFromBackend]);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = (
      String(order.orderId).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (order.orderNumber?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
      (order.userDetails?.name?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
      (order.userDetails?.userName?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
      (order.userDetails?.email?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
      (order.userDetails?.phone?.toLowerCase().includes(searchQuery.toLowerCase()) || false)
    );
    
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch = (
      String(inquiry.inquiryId).toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const filteredProducts = products.filter((product) => {
    return (
      product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.productCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.notes.some(note => note.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const exportToCSV = async (type: "orders" | "inquiries" | "products") => {
    try {
      let headers: string[] = [];
      let data: (string | number)[][] = [];

      if (type === "orders") {
        headers = [
          "Order ID",
          "Order Number",
          "Date",
          "Customer Name",
          "Customer Email",
          "Customer Phone",
          "Status",
          "Total Amount",
          "Payment Method",
          "Payment Status",
          "Payment ID",
          "Items Count"
        ];

        data = orders.map((order) => [
          order.orderId,
          order.orderNumber,
          new Date(order.orderDate).toISOString(),
          order.userDetails.name || order.userDetails.userName || "N/A",
          order.userDetails.email,
          order.userDetails.phone,
          order.status,
          order.total,
          order.payment?.method || "N/A",
          order.payment?.status || "N/A",
          order.payment?.paymentId || "N/A",
          order.items.length
        ]);
      } else if (type === "inquiries") {
        headers = [
          "Inquiry ID",
          "Name",
          "Email",
          "Phone",
          "Type",
          "Subject",
          "Message",
          "Status",
          "Timestamp"
        ];

        data = inquiries.map((inquiry) => [
          inquiry.inquiryId,
          inquiry.name,
          inquiry.email,
          inquiry.phone,
          inquiry.inquiryType,
          inquiry.subject,
          `"${inquiry.message.replace(/"/g, '""')}"`,
          inquiry.status || "NEW",
          inquiry.timestamp
        ]);
      } else {
        headers = [
          "Product ID",
          "Product Name",
          "Brand",
          "Category",
          "Price",
          "Original Price",
          "Rating",
          "Review Count",
          "Notes"
        ];

        data = products.map((product) => [
          product.productId || "N/A",
          product.productName,
          product.brand,
          product.productCategory,
          product.productPrice,
          product.originalPrice || "N/A",
          product.rating || 0,
          product.reviewCount || 0,
          `"${product.notes.join(", ")}"`
        ]);
      }

      const csvData = data.map(row => row.map(value => String(value)));
      const csv = [
        headers.join(","),
        ...csvData.map(row => row.join(",")),
      ].join("\n");

      const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${type}_export_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} exported successfully`,
      });
    } catch (error) {
      console.error("Export error:", error);
      toast({
        title: "Error",
        description: "Failed to export data",
        variant: "destructive",
      });
    }
  };

  const openOrderDetails = (order: Order) => {
    console.log("Opening order details:", order);
    setSelectedOrder(order);
    setOrderDialogOpen(true);
  };

  const openInquiryDetails = (inquiry: Inquiry) => {
    console.log("Opening inquiry details:", inquiry);
    setSelectedInquiry(inquiry);
    setInquiryDialogOpen(true);
  };

  const openProductDetails = (product: Product) => {
    console.log("Opening product details:", product);
    setSelectedProduct(product);
    setProductDialogOpen(true);
    setFrontImage(null);
    setBackImage(null);
  };

  const deleteInquiry = async (inquiryId: string | number) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;
    
    try {
      const response = await api.delete(`/api/inquiries/${inquiryId}`);
      
      toast({
        title: "Success",
        description: response.data.message || "Inquiry deleted successfully",
      });
      
      fetchInquiriesFromBackend();
      setInquiryDialogOpen(false);
      
    } catch (error: any) {
      console.error("Error deleting inquiry:", error);
      
      let errorMessage = "Failed to delete inquiry. ";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const updateOrderStatus = async (orderId: string | number, newStatus: Order["status"]) => {
    try {
      const response = await api.patch(`/api/orders/${orderId}/status`, {
        status: newStatus,
      });
      
      toast({
        title: "Success",
        description: `Order status updated to ${newStatus}`,
      });
      
      fetchOrdersFromBackend();
      setOrderDialogOpen(false);
      
    } catch (error: any) {
      console.error("Error updating order status:", error);
      toast({
        title: "Error",
        description: "Failed to update order status",
        variant: "destructive",
      });
    }
  };

  const updateInquiryStatus = async (inquiryId: string | number, newStatus: Inquiry["status"]) => {
    try {
      const response = await api.patch(`/api/inquiries/${inquiryId}/status`, {
        status: newStatus,
      });
      
      toast({
        title: "Success",
        description: `Inquiry status updated to ${newStatus}`,
      });
      
      fetchInquiriesFromBackend();
      setInquiryDialogOpen(false);
      
    } catch (error: any) {
      console.error("Error updating inquiry status:", error);
      toast({
        title: "Error",
        description: "Failed to update inquiry status",
        variant: "destructive",
      });
    }
  };

  const refreshData = () => {
    if (activeTab === "orders") {
      fetchOrdersFromBackend();
    } else if (activeTab === "inquiries") {
      fetchInquiriesFromBackend();
    } else if (activeTab === "products") {
      fetchProductsFromBackend();
    }
    
    toast({
      title: "Refreshing",
      description: "Fetching latest data...",
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage orders, inquiries, and products</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={refreshData} size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          
          {activeTab === "orders" && (
            <Button onClick={() => exportToCSV("orders")} size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          )}
          
          {activeTab === "inquiries" && (
            <Button onClick={() => exportToCSV("inquiries")} size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          )}
          
          {activeTab === "products" && (
            <Button onClick={() => exportToCSV("products")} size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
            <p className="text-xs text-muted-foreground">All time orders</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{stats.totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Gross revenue</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingOrders}</div>
            <p className="text-xs text-muted-foreground">Awaiting processing</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newInquiries}</div>
            <p className="text-xs text-muted-foreground">Unread messages</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              {activeTab === "orders" && (
                <>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="PROCESSING">Processing</SelectItem>
                  <SelectItem value="SHIPPED">Shipped</SelectItem>
                  <SelectItem value="DELIVERED">Delivered</SelectItem>
                  <SelectItem value="CANCELLED">Cancelled</SelectItem>
                </>
              )}
              {activeTab === "inquiries" && (
                <>
                  <SelectItem value="NEW">New</SelectItem>
                  <SelectItem value="READ">Read</SelectItem>
                  <SelectItem value="RESPONDED">Responded</SelectItem>
                  <SelectItem value="ARCHIVED">Archived</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon" title="Clear filters" onClick={() => setStatusFilter("all")}>
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="orders">Orders ({orders.length})</TabsTrigger>
          <TabsTrigger value="inquiries">Inquiries ({inquiries.length})</TabsTrigger>
          <TabsTrigger value="products">Products ({products.length})</TabsTrigger>
        </TabsList>

        {/* Orders Tab */}
        <TabsContent value="orders">
          {loading.orders ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-3">Loading orders...</span>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No orders found</p>
              <Button variant="outline" onClick={fetchOrdersFromBackend} className="mt-4">
                Try Again
              </Button>
            </div>
          ) : (
            <div className="border rounded-lg">
              <ScrollArea className="h-[600px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.orderId} className="hover:bg-gray-50 cursor-pointer" onClick={() => openOrderDetails(order)}>
                        <TableCell className="font-mono text-sm">
                          {order.orderNumber || order.orderId}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{order.userDetails.name || order.userDetails.userName || "N/A"}</p>
                            <p className="text-xs text-muted-foreground">{order.userDetails.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {new Date(order.orderDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">
                          ₹{order.total.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {order.payment?.method || "N/A"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateOrderStatus(order.orderId, "PROCESSING");
                              }}
                              disabled={order.status === "PROCESSING"}
                            >
                              Process
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
          )}
        </TabsContent>

        {/* Inquiries Tab */}
        <TabsContent value="inquiries">
          {loading.inquiries ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-3">Loading inquiries...</span>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No inquiries found</p>
              <Button variant="outline" onClick={fetchInquiriesFromBackend} className="mt-4">
                Try Again
              </Button>
            </div>
          ) : (
            <div className="border rounded-lg">
              <ScrollArea className="h-[600px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInquiries.map((inquiry) => (
                      <TableRow key={inquiry.inquiryId} className="hover:bg-gray-50 cursor-pointer" onClick={() => openInquiryDetails(inquiry)}>
                        <TableCell className="font-mono text-sm">
                          {String(inquiry.inquiryId).substring(0, 8)}
                        </TableCell>
                        <TableCell>{inquiry.name}</TableCell>
                        <TableCell>{inquiry.email}</TableCell>
                        <TableCell>{inquiry.inquiryType}</TableCell>
                        <TableCell className="max-w-[200px] truncate">
                          {inquiry.subject}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(inquiry.status || "NEW")}>
                            {inquiry.status || "NEW"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(inquiry.timestamp).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateInquiryStatus(inquiry.inquiryId, "READ");
                              }}
                              disabled={inquiry.status === "READ"}
                            >
                              Mark Read
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
          )}
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products">
          <div className="flex justify-end mb-4">
            <Dialog open={addProductDialogOpen} onOpenChange={setAddProductDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" /> Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddProduct}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div>
                        <Label>Product Name*</Label>
                        <Input
                          value={newProduct.productName}
                          onChange={(e) => setNewProduct({...newProduct, productName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label>Brand*</Label>
                        <Input
                          value={newProduct.brand}
                          onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label>Current Price*</Label>
                        <Input
                          type="number"
                          value={newProduct.productPrice}
                          onChange={(e) => setNewProduct({...newProduct, productPrice: Number(e.target.value)})}
                          min="0.01"
                          step="0.01"
                          required
                        />
                      </div>
                      <div>
                        <Label>Original Price (optional)</Label>
                        <Input
                          type="number"
                          value={newProduct.originalPrice || ""}
                          onChange={(e) => setNewProduct({...newProduct, originalPrice: Number(e.target.value) || undefined})}
                          min="0.01"
                          step="0.01"
                        />
                      </div>
                      <div>
                        <Label>Category*</Label>
                        <Input
                          value={newProduct.productCategory}
                          onChange={(e) => setNewProduct({...newProduct, productCategory: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-4">
                      <div>
                        <Label>Description*</Label>
                        <Textarea
                          value={newProduct.productDescription}
                          onChange={(e) => setNewProduct({...newProduct, productDescription: e.target.value})}
                          required
                          rows={4}
                        />
                      </div>
                      <div>
                        <Label>Notes (Add one at a time)</Label>
                        <div className="flex gap-2">
                          <Input
                            value={notesInput}
                            onChange={(e) => setNotesInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addNote())}
                            placeholder="Add a note and press Enter"
                          />
                          <Button type="button" onClick={addNote}>Add</Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {newProduct.notes.map((note, index) => (
                            <div key={index} className="flex items-center bg-secondary px-2 py-1 rounded">
                              <span className="text-sm">{note}</span>
                              <button 
                                type="button"
                                onClick={() => removeNote(index)}
                                className="ml-2 text-red-500 hover:text-red-700"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label>Front Image*</Label>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                      <div>
                        <Label>Back Image*</Label>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setBackImage(e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="mt-6">
                    <Button 
                      type="button"
                      variant="outline" 
                      onClick={() => {
                        setAddProductDialogOpen(false);
                        resetProductForm();
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isAddingProduct}>
                      {isAddingProduct ? "Adding..." : "Add Product"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {loading.products ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-3">Loading products...</span>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found</p>
              <Button variant="outline" onClick={fetchProductsFromBackend} className="mt-4">
                Try Again
              </Button>
            </div>
          ) : (
            <div className="border rounded-lg">
              <ScrollArea className="h-[600px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Brand</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <TableRow key={product.productId} className="hover:bg-gray-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {product.productImageUrl && (
                              <img
                                src={product.productImageUrl}
                                alt={product.productName}
                                className="w-10 h-10 object-cover rounded"
                              />
                            )}
                            <div>
                              <p className="font-medium">{product.productName}</p>
                              <p className="text-xs text-muted-foreground">ID: {product.productId}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{product.brand}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{product.productCategory}</Badge>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">₹{product.productPrice.toFixed(2)}</p>
                            {product.originalPrice && (
                              <p className="text-xs text-muted-foreground line-through">
                                ₹{product.originalPrice.toFixed(2)}
                              </p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <span className="font-medium">{product.rating?.toFixed(1) || "0.0"}</span>
                            <span className="text-xs text-muted-foreground">
                              ({product.reviewCount || 0})
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[200px]">
                          <div className="flex flex-wrap gap-1">
                            {product.notes.slice(0, 2).map((note, index) => (
                              <span key={index} className="text-xs bg-secondary px-2 py-1 rounded">
                                {note}
                              </span>
                            ))}
                            {product.notes.length > 2 && (
                              <span className="text-xs text-muted-foreground">
                                +{product.notes.length - 2} more
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openProductDetails(product)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => product.productId && deleteProduct(product.productId)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Order Details Dialog */}
      <Dialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.orderNumber || selectedOrder?.orderId}</DialogTitle>
          </DialogHeader>
          {selectedOrder ? (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Customer Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><span className="font-medium">Name:</span> {selectedOrder.userDetails.name || selectedOrder.userDetails.userName || "N/A"}</p>
                    <p><span className="font-medium">Email:</span> {selectedOrder.userDetails.email || "N/A"}</p>
                    <p><span className="font-medium">Phone:</span> {selectedOrder.userDetails.phone || "N/A"}</p>
                    <p><span className="font-medium">Address:</span> {selectedOrder.userDetails.address || "Address not provided"}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Order Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><span className="font-medium">Order ID:</span> {selectedOrder.orderId}</p>
                    <p><span className="font-medium">Order Number:</span> {selectedOrder.orderNumber}</p>
                    <p><span className="font-medium">Date:</span> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Status:</span>
                      <Badge className={getStatusColor(selectedOrder.status)}>
                        {selectedOrder.status}
                      </Badge>
                    </p>
                    <p><span className="font-medium">Total:</span> ₹{selectedOrder.total.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Information */}
              {selectedOrder.payment && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p><span className="font-medium">Payment ID:</span> {selectedOrder.payment.paymentId}</p>
                      <p><span className="font-medium">Status:</span> {selectedOrder.payment.status}</p>
                    </div>
                    <div className="space-y-2">
                      <p><span className="font-medium">Amount:</span> ₹{selectedOrder.payment.amount.toFixed(2)}</p>
                      <p><span className="font-medium">Method:</span> {selectedOrder.payment.method}</p>
                      {selectedOrder.payment.transactionId && (
                        <p><span className="font-medium">Transaction ID:</span> {selectedOrder.payment.transactionId}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Order Items ({selectedOrder.items.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedOrder.items.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedOrder.items.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="font-medium">{item.productName}</div>
                              <div className="text-sm text-muted-foreground">ID: {item.productId}</div>
                            </TableCell>
                            <TableCell>
                              {item.priceAtPurchase !== null && item.priceAtPurchase !== undefined 
                                ? `₹${item.priceAtPurchase.toFixed(2)}`
                                : "N/A"
                              }
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell className="text-right font-medium">
                              {item.priceAtPurchase !== null && item.priceAtPurchase !== undefined 
                                ? `₹${(item.priceAtPurchase * item.quantity).toFixed(2)}`
                                : "N/A"
                              }
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">No items found in this order</p>
                  )}
                  <div className="flex justify-end mt-4">
                    <div className="text-right space-y-1">
                      <p className="text-lg font-bold">
                        Order Total: ₹{selectedOrder.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Status Actions */}
              <div className="flex justify-end gap-2">
                {selectedOrder.status !== "PROCESSING" && (
                  <Button
                    variant="outline"
                    onClick={() => updateOrderStatus(selectedOrder.orderId, "PROCESSING")}
                  >
                    Mark as Processing
                  </Button>
                )}
                {selectedOrder.status !== "SHIPPED" && (
                  <Button
                    variant="outline"
                    onClick={() => updateOrderStatus(selectedOrder.orderId, "SHIPPED")}
                  >
                    Mark as Shipped
                  </Button>
                )}
                {selectedOrder.status !== "DELIVERED" && (
                  <Button
                    onClick={() => updateOrderStatus(selectedOrder.orderId, "DELIVERED")}
                  >
                    Mark as Delivered
                  </Button>
                )}
                {selectedOrder.status !== "CANCELLED" && (
                  <Button
                    variant="destructive"
                    onClick={() => updateOrderStatus(selectedOrder.orderId, "CANCELLED")}
                  >
                    Cancel Order
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading order details...</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Inquiry Details Dialog */}
      <Dialog open={inquiryDialogOpen} onOpenChange={setInquiryDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Inquiry Details</DialogTitle>
          </DialogHeader>
          {selectedInquiry ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <div className="space-y-1">
                    <p><span className="font-medium">Name:</span> {selectedInquiry.name}</p>
                    <p><span className="font-medium">Email:</span> {selectedInquiry.email}</p>
                    <p><span className="font-medium">Phone:</span> {selectedInquiry.phone}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Inquiry Details</h3>
                  <div className="space-y-1">
                    <p><span className="font-medium">Type:</span> {selectedInquiry.inquiryType}</p>
                    <p><span className="font-medium">Subject:</span> {selectedInquiry.subject}</p>
                    <p><span className="font-medium">Date:</span> {selectedInquiry.timestamp}</p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Status:</span>
                      <Badge className={getStatusColor(selectedInquiry.status || "NEW")}>
                        {selectedInquiry.status || "NEW"}
                      </Badge>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Message</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="whitespace-pre-line">{selectedInquiry.message}</p>
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <Button 
                  variant="destructive"
                  onClick={() => deleteInquiry(selectedInquiry.inquiryId)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Inquiry
                </Button>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => updateInquiryStatus(selectedInquiry.inquiryId, "READ")}
                    disabled={selectedInquiry.status === "READ"}
                  >
                    Mark as Read
                  </Button>
                  <Button
                    onClick={() => updateInquiryStatus(selectedInquiry.inquiryId, "RESPONDED")}
                    disabled={selectedInquiry.status === "RESPONDED"}
                  >
                    Mark as Responded
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading inquiry details...</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Product Details Dialog */}
      <Dialog open={productDialogOpen} onOpenChange={setProductDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
          </DialogHeader>
          {selectedProduct ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Product Information</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Product Name</Label>
                      <Input
                        value={selectedProduct.productName}
                        onChange={(e) => setSelectedProduct({...selectedProduct, productName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>Brand</Label>
                      <Input
                        value={selectedProduct.brand}
                        onChange={(e) => setSelectedProduct({...selectedProduct, brand: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>Price</Label>
                      <Input
                        type="number"
                        value={selectedProduct.productPrice}
                        onChange={(e) => setSelectedProduct({...selectedProduct, productPrice: Number(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label>Category</Label>
                      <Input
                        value={selectedProduct.productCategory}
                        onChange={(e) => setSelectedProduct({...selectedProduct, productCategory: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Images</h3>
                  <div className="space-y-4">
                    <div>
                      <Label>Update Front Image</Label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
                      />
                      {selectedProduct.productImageUrl && (
                        <img
                          src={selectedProduct.productImageUrl}
                          alt="Front"
                          className="mt-2 w-32 h-32 object-cover rounded"
                        />
                      )}
                    </div>
                    <div>
                      <Label>Update Back Image</Label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setBackImage(e.target.files?.[0] || null)}
                      />
                      {selectedProduct.productBackImageUrl && (
                        <img
                          src={selectedProduct.productBackImageUrl}
                          alt="Back"
                          className="mt-2 w-32 h-32 object-cover rounded"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  value={selectedProduct.productDescription}
                  onChange={(e) => setSelectedProduct({...selectedProduct, productDescription: e.target.value})}
                  rows={4}
                />
              </div>

              <div>
                <Label>Notes</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProduct.notes.map((note, index) => (
                    <span key={index} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setProductDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => selectedProduct.productId && handleUpdateProduct(selectedProduct.productId)}
                  disabled={isUpdatingProduct}
                >
                  {isUpdatingProduct ? "Updating..." : "Update Product"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading product details...</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}



// with Inquiry and product and order
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Download, Plus } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// interface Product {
//   productName: string;
//   brand: string;
//   productPrice: number;
//   originalPrice?: number;
//   productDescription: string;
//   notes: string[];
//   productCategory: string;
//   frontImageUrl?: string;
//   backImageUrl?: string;
// }

// interface OrderItem {
//   productId: string;
//   productName: string;
//   quantity: number;
//   priceAtPurchase: number;
// }

// interface Payment {
//   paymentId: string;
//   status: string;
//   amount: number;
//   method: string;
//   transactionId: string;
// }

// interface UserDetails {
//   userId: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// interface Order {
//   orderId: string | number;
//   orderNumber: string;
//   orderDate: string;
//   status: string;
//   total: number;
//   userDetails: UserDetails;
//   payment?: Payment;
//   items: OrderItem[];
// }

// interface Inquiry {
//   inquiryId: string | number;
//   name: string;
//   email: string;
//   phone: string;
//   inquiryType: string;
//   subject: string;
//   message: string;
//   timestamp: string;
// }

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("orders");
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [inquiries, setInquiries] = useState<Inquiry[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState({
//     orders: true,
//     inquiries: true,
//     products: true
//   });
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
//   const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
//   const [newProduct, setNewProduct] = useState<Product>({
//     productName: "",
//     brand: "",
//     productPrice: 0,
//     originalPrice: 0,
//     productDescription: "",
//     notes: [],
//     productCategory: ""
//   });
//   const [frontImage, setFrontImage] = useState<File | null>(null);
//   const [backImage, setBackImage] = useState<File | null>(null);
//   const [notesInput, setNotesInput] = useState("");
//   const [isAddingProduct, setIsAddingProduct] = useState(false);
//   const { toast } = useToast();

//   const API_BASE_URL = "https://6d26ae5752e4.ngrok-free.app";//${API_BASE_URL}
  
//   // Fetch orders from backend
//   const fetchOrdersFromBackend = () => {
//     setLoading(prev => ({...prev, orders: true}));
//     fetch(`${API_BASE_URL}/api/orders/admin/all-orders`, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'ngrok-skip-browser-warning': '69420'
//       }
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           const processedOrders = data.map(order => ({
//             ...order,
//             orderId: String(order.orderId),
//             userDetails: {
//               ...order.userDetails,
//               phone: String(order.userDetails?.phone || '')
//             }
//           }));
//           setOrders(processedOrders);
//         } else {
//           console.error("Invalid response format: expected array");
//           setOrders([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//         toast({
//           title: "Error",
//           description: "Failed to fetch orders",
//           variant: "destructive",
//         });
//       })
//       // .finally(() => {
//       //   setLoading(prev => ({...prev, orders: false}));
//       // });
//   };

//   // Fetch inquiries from backend
//   const fetchInquiriesFromBackend = () => {
//     setLoading(prev => ({...prev, inquiries: true}));
//     fetch(`${API_BASE_URL}/api/inquiries/all`, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'ngrok-skip-browser-warning': '69420'
//       }
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           const processedInquiries = data.map(inquiry => ({
//             ...inquiry,
//             inquiryId: String(inquiry.inquiryId),
//             phone: String(inquiry.phone || ''),
//             timestamp: new Date(inquiry.timestamp).toLocaleString()
//           }));
//           setInquiries(processedInquiries);
//         } else {
//           console.error("Invalid response format: expected array");
//           setInquiries([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//         toast({
//           title: "Error",
//           description: "Failed to fetch inquiries",
//           variant: "destructive",
//         });
//       })
//       // .finally(() => {
//       //   setLoading(prev => ({...prev, inquiries: false}));
//       // });
//   };

//   // Fetch products from backend
//   const fetchProductsFromBackend = () => {
//     setLoading(prev => ({...prev, products: true}));
//     fetch(`${API_BASE_URL}/api/products/all`, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'ngrok-skip-browser-warning': '69420'
//       }
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error("Invalid response format: expected array");
//           setProducts([]);
//         }
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//         toast({
//           title: "Error",
//           description: "Failed to fetch products",
//           variant: "destructive",
//         });
//       })
//       // .finally(() => {
//       //   setLoading(prev => ({...prev, products: false}));
//       // });
//   };

//   const handleAddProduct = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsAddingProduct(true);

//     try {
//       // Validate required fields
//       if (!newProduct.productName.trim()) {
//         throw new Error("Product name is required");
//       }
//       if (!newProduct.brand.trim()) {
//         throw new Error("Brand is required");
//       }
//       if (newProduct.productPrice <= 0) {
//         throw new Error("Price must be greater than 0");
//       }
//       if (!frontImage || !backImage) {
//         throw new Error("Please upload both front and back images");
//       }

//       const formData = new FormData();
//       formData.append("product", JSON.stringify({
//         ...newProduct,
//         productPrice: Number(newProduct.productPrice),
//         originalPrice: newProduct.originalPrice ? Number(newProduct.originalPrice) : undefined
//       }));
//       formData.append("frontImage", frontImage);
//       formData.append("backImage", backImage);

//       const response = await fetch(`${API_BASE_URL}/api/products/add`, {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to add product");
//       }

//       const data = await response.json();
//       toast({
//         title: "Success",
//         description: data.message || "Product added successfully",
//       });
      
//       resetForm();
//       setAddProductDialogOpen(false);
//       fetchProductsFromBackend(); // Refresh products list
//     } catch (error) {
//       console.error("Error adding product:", error);
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to add product",
//         variant: "destructive",
//       });
//     } finally {
//       setIsAddingProduct(false);
//     }
//   };

//   const resetForm = () => {
//     setNewProduct({
//       productName: "",
//       brand: "",
//       productPrice: 0,
//       originalPrice: 0,
//       productDescription: "",
//       notes: [],
//       productCategory: ""
//     });
//     setFrontImage(null);
//     setBackImage(null);
//     setNotesInput("");
//   };

//   const addNote = () => {
//     if (notesInput.trim()) {
//       setNewProduct({
//         ...newProduct,
//         notes: [...newProduct.notes, notesInput.trim()]
//       });
//       setNotesInput("");
//     }
//   };

//   const removeNote = (index: number) => {
//     setNewProduct({
//       ...newProduct,
//       notes: newProduct.notes.filter((_, i) => i !== index)
//     });
//   };

//   useEffect(() => {
//     if (activeTab === "orders") {
//       fetchOrdersFromBackend();
//       const interval = setInterval(fetchOrdersFromBackend, 10000);
//       return () => clearInterval(interval);
//     } else if (activeTab === "inquiries") {
//       fetchInquiriesFromBackend();
//       const interval = setInterval(fetchInquiriesFromBackend, 10000);
//       return () => clearInterval(interval);
//     } else if (activeTab === "products") {
//       fetchProductsFromBackend();
//       const interval = setInterval(fetchProductsFromBackend, 10000);
//       return () => clearInterval(interval);
//     }
//   }, [activeTab]);

//   const filteredOrders = orders.filter((order) => {
//     const q = searchQuery.toLowerCase();
//     return (
//       String(order.orderId).toLowerCase().includes(q) ||
//       (order.payment?.paymentId && String(order.payment.paymentId).toLowerCase().includes(q)) ||
//       (order.userDetails?.name && order.userDetails.name.toLowerCase().includes(q)) ||
//       (order.userDetails?.phone && String(order.userDetails.phone).toLowerCase().includes(q))
//     );
//   });

//   const filteredInquiries = inquiries.filter((inquiry) => {
//     const q = searchQuery.toLowerCase();
//     return (
//       String(inquiry.inquiryId).toLowerCase().includes(q) ||
//       inquiry.name.toLowerCase().includes(q) ||
//       inquiry.email.toLowerCase().includes(q) ||
//       inquiry.phone.toLowerCase().includes(q) ||
//       inquiry.subject.toLowerCase().includes(q)
//     );
//   });

//   const filteredProducts = products.filter((product) => {
//     const q = searchQuery.toLowerCase();
//     return (
//       product.productName.toLowerCase().includes(q) ||
//       product.brand.toLowerCase().includes(q) ||
//       product.productCategory.toLowerCase().includes(q)
//     );
//   });

//   const exportToCSV = (type: "orders" | "inquiries" | "products") => {
//     let headers: string[] = [];
//     let data: (string | number)[][] = [];

//     if (type === "orders") {
//       headers = [
//         "Order ID",
//         "Order Number",
//         "Date",
//         "Status",
//         "Total",
//         "Customer Name",
//         "Customer Email",
//         "Customer Phone",
//         "Payment Method",
//         "Payment Status",
//         "Item Count",
//         "Item Details",
//       ];

//       data = orders.map((order) => {
//         const items = order.items
//           .map(
//             (item) =>
//               `${item.productName} - ₹${item.priceAtPurchase} x${item.quantity}`
//           )
//           .join(" | ");
//         return [
//           order.orderId,
//           order.orderNumber,
//           new Date(order.orderDate).toLocaleString(),
//           order.status,
//           order.total,
//           order.userDetails.name,
//           order.userDetails.email,
//           order.userDetails.phone,
//           order.payment?.method || "N/A",
//           order.payment?.status || "N/A",
//           order.items.length,
//           `"${items}"`,
//         ];
//       });
//     } else if (type === "inquiries") {
//       headers = [
//         "Inquiry ID",
//         "Name",
//         "Email",
//         "Phone",
//         "Type",
//         "Subject",
//         "Message",
//         "Timestamp"
//       ];

//       data = inquiries.map((inquiry) => [
//         inquiry.inquiryId,
//         inquiry.name,
//         inquiry.email,
//         inquiry.phone,
//         inquiry.inquiryType,
//         inquiry.subject,
//         `"${inquiry.message}"`,
//         inquiry.timestamp
//       ]);
//     } else if (type === "products") {
//       headers = [
//         "Product Name",
//         "Brand",
//         "Category",
//         "Price",
//         "Original Price",
//         "Description",
//         "Notes"
//       ];

//       data = products.map((product) => [
//         product.productName,
//         product.brand,
//         product.productCategory,
//         product.productPrice,
//         product.originalPrice || "N/A",
//         `"${product.productDescription}"`,
//         `"${product.notes.join(", ")}"`
//       ]);
//     }

//     // Convert all values to strings before joining
//     const csvData = data.map(row => row.map(value => String(value)));
    
//     const csv = [
//       headers.join(","),
//       ...csvData.map(row => row.join(",")),
//     ].join("\n");

//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${type}_${new Date().toISOString()}.csv`;
//     link.click();
//   };

//   const openOrderDetails = (order: Order) => {
//     setSelectedOrder(order);
//     setDialogOpen(true);
//   };

//   const openInquiryDetails = (inquiry: Inquiry) => {
//     setSelectedInquiry(inquiry);
//     setInquiryDialogOpen(true);
//   };

//   const deleteInquiry = async (inquiryId: string | number) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/inquiries/${inquiryId}`, {
//         method: "DELETE",
//         headers: {
//           'Content-Type': 'application/json',
//           'ngrok-skip-browser-warning': '69420'
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       toast({
//         title: "Success",
//         description: data.message || "Inquiry deleted successfully",
//       });
      
//       fetchInquiriesFromBackend();
//       setInquiryDialogOpen(false);
//     } catch (error) {
//       console.error("Error deleting inquiry:", error);
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to delete inquiry",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">🧾 Admin Dashboard</h1>
//         <div className="flex gap-2">
//           <Input
//             placeholder={`Search ${activeTab}...`}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="md:w-72"
//           />
//           {activeTab === "orders" && (
//             <Button onClick={() => exportToCSV("orders")}>
//               <Download className="h-4 w-4 mr-2" /> Export CSV
//             </Button>
//           )}
//           {activeTab === "inquiries" && (
//             <Button onClick={() => exportToCSV("inquiries")}>
//               <Download className="h-4 w-4 mr-2" /> Export CSV
//             </Button>
//           )}
//           {activeTab === "products" && (
//             <>
//               <Button onClick={() => exportToCSV("products")}>
//                 <Download className="h-4 w-4 mr-2" /> Export CSV
//               </Button>
//               <Dialog open={addProductDialogOpen} onOpenChange={setAddProductDialogOpen}>
//                 <DialogTrigger asChild>
//                   <Button>
//                     <Plus className="h-4 w-4 mr-2" /> Add Product
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="max-w-2xl">
//                   <DialogHeader>
//                     <DialogTitle>Add New Product</DialogTitle>
//                   </DialogHeader>
//                   <form onSubmit={handleAddProduct}>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-4">
//                         <div>
//                           <Label>Product Name*</Label>
//                           <Input
//                             value={newProduct.productName}
//                             onChange={(e) => setNewProduct({...newProduct, productName: e.target.value})}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <Label>Brand*</Label>
//                           <Input
//                             value={newProduct.brand}
//                             onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <Label>Current Price*</Label>
//                           <Input
//                             type="number"
//                             value={newProduct.productPrice}
//                             onChange={(e) => setNewProduct({...newProduct, productPrice: Number(e.target.value)})}
//                             min="0.01"
//                             step="0.01"
//                             required
//                           />
//                         </div>
//                         <div>
//                           <Label>Original Price (optional)</Label>
//                           <Input
//                             type="number"
//                             value={newProduct.originalPrice || ""}
//                             onChange={(e) => setNewProduct({...newProduct, originalPrice: Number(e.target.value) || undefined})}
//                             min="0.01"
//                             step="0.01"
//                           />
//                         </div>
//                         <div>
//                           <Label>Category*</Label>
//                           <Input
//                             value={newProduct.productCategory}
//                             onChange={(e) => setNewProduct({...newProduct, productCategory: e.target.value})}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="space-y-4">
//                         <div>
//                           <Label>Description*</Label>
//                           <Textarea
//                             value={newProduct.productDescription}
//                             onChange={(e) => setNewProduct({...newProduct, productDescription: e.target.value})}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <Label>Notes (Add one at a time)</Label>
//                           <div className="flex gap-2">
//                             <Input
//                               value={notesInput}
//                               onChange={(e) => setNotesInput(e.target.value)}
//                               onKeyDown={(e) => e.key === 'Enter' && addNote()}
//                             />
//                             <Button type="button" onClick={addNote}>Add</Button>
//                           </div>
//                           <div className="flex flex-wrap gap-2 mt-2">
//                             {newProduct.notes.map((note, index) => (
//                               <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded">
//                                 {note}
//                                 <button 
//                                   type="button"
//                                   onClick={() => removeNote(index)}
//                                   className="ml-2 text-red-500"
//                                 >
//                                   ×
//                                 </button>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div>
//                           <Label>Front Image*</Label>
//                           <Input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <Label>Back Image*</Label>
//                           <Input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => setBackImage(e.target.files?.[0] || null)}
//                             required
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex justify-end gap-2 mt-4">
//                       <Button 
//                         type="button"
//                         variant="outline" 
//                         onClick={() => setAddProductDialogOpen(false)}
//                       >
//                         Cancel
//                       </Button>
//                       <Button type="submit" disabled={isAddingProduct}>
//                         {isAddingProduct ? "Adding..." : "Add Product"}
//                       </Button>
//                     </div>
//                   </form>
//                 </DialogContent>
//               </Dialog>
//             </>
//           )}
//         </div>
//       </div>

//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="orders">Orders</TabsTrigger>
//           <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
//           <TabsTrigger value="products">Products</TabsTrigger>
//         </TabsList>

//         <TabsContent value="orders">
//           {loading.orders ? (
//             <div className="p-8">Loading orders...</div>
//           ) : filteredOrders.length === 0 ? (
//             <p>No orders found.</p>
//           ) : (
//             <>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Order ID</TableHead>
//                     <TableHead>Order Number</TableHead>
//                     <TableHead>Date</TableHead>
//                     <TableHead>Customer</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Total</TableHead>
//                     <TableHead>Items</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredOrders.map((order) => (
//                     <TableRow
//                       key={order.orderId}
//                       onClick={() => openOrderDetails(order)}
//                       className="cursor-pointer hover:bg-gray-50"
//                     >
//                       <TableCell className="font-medium">{order.orderId}</TableCell>
//                       <TableCell>{order.orderNumber}</TableCell>
//                       <TableCell>
//                         {new Date(order.orderDate).toLocaleString()}
//                       </TableCell>
//                       <TableCell>
//                         {order.userDetails.name}
//                         <div className="text-sm text-gray-500">
//                           {order.userDetails.phone}
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
//                           order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
//                           order.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
//                           'bg-gray-100 text-gray-800'
//                         }`}>
//                           {order.status}
//                         </span>
//                       </TableCell>
//                       <TableCell>₹{order.total.toFixed(2)}</TableCell>
//                       <TableCell>{order.items.length} item(s)</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>

//               <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//                 <DialogContent className="max-w-2xl">
//                   <DialogHeader>
//                     <DialogTitle>Order Details - {selectedOrder?.orderNumber}</DialogTitle>
//                   </DialogHeader>

//                   {selectedOrder && (
//                     <div className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <h3 className="font-semibold mb-2">Customer Information</h3>
//                           <div className="space-y-1">
//                             <p><span className="font-medium">Name:</span> {selectedOrder.userDetails.name}</p>
//                             <p><span className="font-medium">Email:</span> {selectedOrder.userDetails.email}</p>
//                             <p><span className="font-medium">Phone:</span> {selectedOrder.userDetails.phone}</p>
//                             <p><span className="font-medium">Address:</span> {selectedOrder.userDetails.address}</p>
//                           </div>
//                         </div>
                        
//                         <div>
//                           <h3 className="font-semibold mb-2">Order Information</h3>
//                           <div className="space-y-1">
//                             <p><span className="font-medium">Order ID:</span> {selectedOrder.orderId}</p>
//                             <p><span className="font-medium">Order Number:</span> {selectedOrder.orderNumber}</p>
//                             <p><span className="font-medium">Date:</span> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
//                             <p><span className="font-medium">Status:</span> 
//                               <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
//                                 selectedOrder.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
//                                 selectedOrder.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
//                                 selectedOrder.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
//                                 'bg-gray-100 text-gray-800'
//                               }`}>
//                                 {selectedOrder.status}
//                               </span>
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {selectedOrder.payment && (
//                         <div>
//                           <h3 className="font-semibold mb-2">Payment Information</h3>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                               <p><span className="font-medium">Payment ID:</span> {selectedOrder.payment.paymentId}</p>
//                               <p><span className="font-medium">Status:</span> {selectedOrder.payment.status}</p>
//                             </div>
//                             <div>
//                               <p><span className="font-medium">Amount:</span> ₹{selectedOrder.payment.amount.toFixed(2)}</p>
//                               <p><span className="font-medium">Method:</span> {selectedOrder.payment.method}</p>
//                               {selectedOrder.payment.transactionId && (
//                                 <p><span className="font-medium">Transaction ID:</span> {selectedOrder.payment.transactionId}</p>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       <div>
//                         <h3 className="font-semibold mb-2">Order Items</h3>
//                         <Table>
//                           <TableHeader>
//                             <TableRow>
//                               <TableHead>Product</TableHead>
//                               <TableHead>Price</TableHead>
//                               <TableHead>Quantity</TableHead>
//                               <TableHead className="text-right">Total</TableHead>
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             {selectedOrder.items.map((item, index) => (
//                               <TableRow key={index}>
//                                 <TableCell>
//                                   <div className="font-medium">{item.productName}</div>
//                                   <div className="text-sm text-gray-500">ID: {item.productId}</div>
//                                 </TableCell>
//                                 <TableCell>₹{item.priceAtPurchase.toFixed(2)}</TableCell>
//                                 <TableCell>{item.quantity}</TableCell>
//                                 <TableCell className="text-right">
//                                   ₹{(item.priceAtPurchase * item.quantity).toFixed(2)}
//                                 </TableCell>
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       </div>

//                       <div className="flex justify-end">
//                         <div className="text-right space-y-2">
//                           <p className="text-lg">
//                             <span className="font-medium">Order Total:</span> ₹{selectedOrder.total.toFixed(2)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </DialogContent>
//               </Dialog>
//             </>
//           )}
//         </TabsContent>

//         <TabsContent value="inquiries">
//           {loading.inquiries ? (
//             <div className="p-8">Loading inquiries...</div>
//           ) : filteredInquiries.length === 0 ? (
//             <p>No inquiries found.</p>
//           ) : (
//             <>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Inquiry ID</TableHead>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Email</TableHead>
//                     <TableHead>Phone</TableHead>
//                     <TableHead>Type</TableHead>
//                     <TableHead>Subject</TableHead>
//                     <TableHead>Date</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredInquiries.map((inquiry) => (
//                     <TableRow
//                       key={inquiry.inquiryId}
//                       onClick={() => openInquiryDetails(inquiry)}
//                       className="cursor-pointer hover:bg-gray-50"
//                     >
//                       <TableCell className="font-medium">{inquiry.inquiryId}</TableCell>
//                       <TableCell>{inquiry.name}</TableCell>
//                       <TableCell>{inquiry.email}</TableCell>
//                       <TableCell>{inquiry.phone}</TableCell>
//                       <TableCell>{inquiry.inquiryType}</TableCell>
//                       <TableCell>{inquiry.subject}</TableCell>
//                       <TableCell>{inquiry.timestamp}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>

//               <Dialog open={inquiryDialogOpen} onOpenChange={setInquiryDialogOpen}>
//                 <DialogContent className="max-w-2xl">
//                   <DialogHeader>
//                     <DialogTitle>Inquiry Details - {selectedInquiry?.inquiryId}</DialogTitle>
//                   </DialogHeader>

//                   {selectedInquiry && (
//                     <div className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <h3 className="font-semibold mb-2">Contact Information</h3>
//                           <div className="space-y-1">
//                             <p><span className="font-medium">Name:</span> {selectedInquiry.name}</p>
//                             <p><span className="font-medium">Email:</span> {selectedInquiry.email}</p>
//                             <p><span className="font-medium">Phone:</span> {selectedInquiry.phone}</p>
//                           </div>
//                         </div>
                        
//                         <div>
//                           <h3 className="font-semibold mb-2">Inquiry Details</h3>
//                           <div className="space-y-1">
//                             <p><span className="font-medium">Type:</span> {selectedInquiry.inquiryType}</p>
//                             <p><span className="font-medium">Subject:</span> {selectedInquiry.subject}</p>
//                             <p><span className="font-medium">Date:</span> {selectedInquiry.timestamp}</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div>
//                         <h3 className="font-semibold mb-2">Message</h3>
//                         <div className="bg-gray-50 p-4 rounded">
//                           <p className="whitespace-pre-line">{selectedInquiry.message}</p>
//                         </div>
//                       </div>

//                       <div className="flex justify-end gap-2">
//                         <Button 
//                           variant="destructive"
//                           onClick={() => deleteInquiry(selectedInquiry.inquiryId)}
//                         >
//                           Delete Inquiry
//                         </Button>
//                       </div>
//                     </div>
//                   )}
//                 </DialogContent>
//               </Dialog>
//             </>
//           )}
//         </TabsContent>

//         <TabsContent value="products">
//           {loading.products ? (
//             <div className="p-8">Loading products...</div>
//           ) : filteredProducts.length === 0 ? (
//             <p>No products found.</p>
//           ) : (
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Product Name</TableHead>
//                   <TableHead>Brand</TableHead>
//                   <TableHead>Category</TableHead>
//                   <TableHead>Price</TableHead>
//                   <TableHead>Original Price</TableHead>
//                   <TableHead>Notes</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredProducts.map((product, index) => (
//                   <TableRow key={index}>
//                     <TableCell className="font-medium">{product.productName}</TableCell>
//                     <TableCell>{product.brand}</TableCell>
//                     <TableCell>{product.productCategory}</TableCell>
//                     <TableCell>₹{product.productPrice.toFixed(2)}</TableCell>
//                     <TableCell>{product.originalPrice ? `₹${product.originalPrice.toFixed(2)}` : 'N/A'}</TableCell>
//                     <TableCell>{product.notes.join(", ")}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }
