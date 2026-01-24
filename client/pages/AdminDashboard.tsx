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


import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  productName: string;
  brand: string;
  productPrice: number;
  originalPrice?: number;
  productDescription: string;
  notes: string[];
  productCategory: string;
}

interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  priceAtPurchase: number;
}

interface Payment {
  paymentId: string;
  status: string;
  amount: number;
  method: string;
  transactionId: string;
}

interface UserDetails {
  userId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Order {
  orderId: string | number;
  orderNumber: string;
  orderDate: string;
  status: string;
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
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState({
    orders: true,
    inquiries: true,
    products: true
  });
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    productName: "",
    brand: "",
    productPrice: 0,
    originalPrice: 0,
    productDescription: "",
    notes: [],
    productCategory: ""
  });
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [notesInput, setNotesInput] = useState("");
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const { toast } = useToast();

  // Fetch orders from backend
  const fetchOrdersFromBackend = () => {
    setLoading(prev => ({...prev, orders: true}));
    fetch("https://5170dd6c9895.ngrok-free.app/api/orders/admin/all-orders", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const processedOrders = data.map(order => ({
            ...order,
            orderId: String(order.orderId),
            userDetails: {
              ...order.userDetails,
              phone: String(order.userDetails?.phone || '')
            }
          }));
          setOrders(processedOrders);
        } else {
          console.error("Invalid response format: expected array");
          setOrders([]);
        }
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        toast({
          title: "Warning",
          description: "Network error please refresh the page.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(prev => ({...prev, orders: false}));
      });
  };

  // Fetch inquiries from backend
  const fetchInquiriesFromBackend = () => {
    setLoading(prev => ({...prev, inquiries: true}));
    fetch("https://5170dd6c9895.ngrok-free.app/api/inquiries/all", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const processedInquiries = data.map(inquiry => ({
            ...inquiry,
            inquiryId: String(inquiry.inquiryId),
            phone: String(inquiry.phone || ''),
            timestamp: new Date(inquiry.timestamp).toLocaleString()
          }));
          setInquiries(processedInquiries);
        } else {
          console.error("Invalid response format: expected array");
          setInquiries([]);
        }
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        toast({
          title: "Warning",
          description: "Network error please refresh the page.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(prev => ({...prev, inquiries: false}));
      });
  };

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
        originalPrice: newProduct.originalPrice ? Number(newProduct.originalPrice) : undefined
      }));
      formData.append("frontImage", frontImage);
      formData.append("backImage", backImage);

      const response = await fetch("https://5170dd6c9895.ngrok-free.app/api/products/add", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error("Network error please refresh the page.");
      }

      const data = await response.json();
      toast({
        title: "Success",
        description: data.message || "Product added successfully",
      });
      
      resetForm();
      setAddProductDialogOpen(false);
    } catch (error) {
      console.error("Error adding product:", error);
      toast({
        title: "Warning",
        description: "Network error please refresh the page.",
        variant: "destructive",
      });
    } finally {
      setIsAddingProduct(false);
    }
  };

  const resetForm = () => {
    setNewProduct({
      productName: "",
      brand: "",
      productPrice: 0,
      originalPrice: 0,
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
    if (activeTab === "orders") {
      fetchOrdersFromBackend();
      const interval = setInterval(fetchOrdersFromBackend, 10000);
      return () => clearInterval(interval);
    } else if (activeTab === "inquiries") {
      fetchInquiriesFromBackend();
      const interval = setInterval(fetchInquiriesFromBackend, 10000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const filteredOrders = orders.filter((order) => {
    const q = searchQuery.toLowerCase();
    return (
      String(order.orderId).toLowerCase().includes(q) ||
      (order.payment?.paymentId && String(order.payment.paymentId).toLowerCase().includes(q)) ||
      (order.userDetails?.name && order.userDetails.name.toLowerCase().includes(q)) ||
      (order.userDetails?.phone && String(order.userDetails.phone).toLowerCase().includes(q))
    );
  });

  const filteredInquiries = inquiries.filter((inquiry) => {
    const q = searchQuery.toLowerCase();
    return (
      String(inquiry.inquiryId).toLowerCase().includes(q) ||
      inquiry.name.toLowerCase().includes(q) ||
      inquiry.email.toLowerCase().includes(q) ||
      inquiry.phone.toLowerCase().includes(q) ||
      inquiry.subject.toLowerCase().includes(q)
    );
  });

  const exportToCSV = (type: "orders" | "inquiries") => {
  let headers: string[] = [];
  let data: (string | number)[][] = [];

  if (type === "orders") {
    headers = [
      "Order ID",
      "Order Number",
      "Date",
      "Status",
      "Total",
      "Customer Name",
      "Customer Email",
      "Customer Phone",
      "Payment Method",
      "Payment Status",
      "Item Count",
      "Item Details",
    ];

    data = orders.map((order) => {
      const items = order.items
        .map(
          (item) =>
            `${item.productName} - ₹${item.priceAtPurchase} x${item.quantity}`
        )
        .join(" | ");
      return [
        order.orderId,
        order.orderNumber,
        new Date(order.orderDate).toLocaleString(),
        order.status,
        order.total,
        order.userDetails.name,
        order.userDetails.email,
        order.userDetails.phone,
        order.payment?.method || "N/A",
        order.payment?.status || "N/A",
        order.items.length,
        `"${items}"`,
      ];
    });
  } else {
    headers = [
      "Inquiry ID",
      "Name",
      "Email",
      "Phone",
      "Type",
      "Subject",
      "Message",
      "Timestamp"
    ];

    data = inquiries.map((inquiry) => [
      inquiry.inquiryId,
      inquiry.name,
      inquiry.email,
      inquiry.phone,
      inquiry.inquiryType,
      inquiry.subject,
      `"${inquiry.message}"`,
      inquiry.timestamp
    ]);
  }

  // Convert all values to strings before joining
  const csvData = data.map(row => row.map(value => String(value)));
  
  const csv = [
    headers.join(","),
    ...csvData.map(row => row.join(",")),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${type}_${new Date().toISOString()}.csv`;
  link.click();
};

  const openOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setDialogOpen(true);
  };

  const openInquiryDetails = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setInquiryDialogOpen(true);
  };

  const deleteInquiry = async (inquiryId: string | number) => {
    try {
      const response = await fetch(`https://5170dd6c9895.ngrok-free.app/api/inquiries/${inquiryId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      toast({
        title: "Success",
        description: data.message || "Inquiry deleted successfully",
      });
      
      fetchInquiriesFromBackend();
      setInquiryDialogOpen(false);
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      toast({
        title: "Warning",
        description: "Network error please refresh the page.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🧾 Admin Dashboard</h1>
        <div className="flex gap-2">
          <Input
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:w-72"
          />
          {activeTab === "orders" && (
            <Button onClick={() => exportToCSV("orders")}>
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </Button>
          )}
          {activeTab === "inquiries" && (
            <Button onClick={() => exportToCSV("inquiries")}>
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </Button>
          )}
          {activeTab === "products" && (
            <Dialog open={addProductDialogOpen} onOpenChange={setAddProductDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" /> Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddProduct}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div className="space-y-4">
                      <div>
                        <Label>Description*</Label>
                        <Textarea
                          value={newProduct.productDescription}
                          onChange={(e) => setNewProduct({...newProduct, productDescription: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label>Notes (Add one at a time)</Label>
                        <div className="flex gap-2">
                          <Input
                            value={notesInput}
                            onChange={(e) => setNotesInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addNote()}
                          />
                          <Button type="button" onClick={addNote}>Add</Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {newProduct.notes.map((note, index) => (
                            <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded">
                              {note}
                              <button 
                                type="button"
                                onClick={() => removeNote(index)}
                                className="ml-2 text-red-500"
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
                  <div className="flex justify-end gap-2 mt-4">
                    <Button 
                      type="button"
                      variant="outline" 
                      onClick={() => setAddProductDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isAddingProduct}>
                      {isAddingProduct ? "Adding..." : "Add Product"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          {loading.orders ? (
            <div className="p-8">Loading orders...</div>
          ) : filteredOrders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Order Number</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Items</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow
                      key={order.orderId}
                      onClick={() => openOrderDetails(order)}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <TableCell className="font-medium">{order.orderId}</TableCell>
                      <TableCell>{order.orderNumber}</TableCell>
                      <TableCell>
                        {new Date(order.orderDate).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {order.userDetails.name}
                        <div className="text-sm text-gray-500">
                          {order.userDetails.phone}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                          order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell>₹{order.total.toFixed(2)}</TableCell>
                      <TableCell>{order.items.length} item(s)</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Order Details - {selectedOrder?.orderNumber}</DialogTitle>
                  </DialogHeader>

                  {selectedOrder && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold mb-2">Customer Information</h3>
                          <div className="space-y-1">
                            <p><span className="font-medium">Name:</span> {selectedOrder.userDetails.name}</p>
                            <p><span className="font-medium">Email:</span> {selectedOrder.userDetails.email}</p>
                            <p><span className="font-medium">Phone:</span> {selectedOrder.userDetails.phone}</p>
                            <p><span className="font-medium">Address:</span> {selectedOrder.userDetails.address}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">Order Information</h3>
                          <div className="space-y-1">
                            <p><span className="font-medium">Order ID:</span> {selectedOrder.orderId}</p>
                            <p><span className="font-medium">Order Number:</span> {selectedOrder.orderNumber}</p>
                            <p><span className="font-medium">Date:</span> {new Date(selectedOrder.orderDate).toLocaleString()}</p>
                            <p><span className="font-medium">Status:</span> 
                              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                selectedOrder.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                                selectedOrder.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                selectedOrder.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {selectedOrder.status}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {selectedOrder.payment && (
                        <div>
                          <h3 className="font-semibold mb-2">Payment Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p><span className="font-medium">Payment ID:</span> {selectedOrder.payment.paymentId}</p>
                              <p><span className="font-medium">Status:</span> {selectedOrder.payment.status}</p>
                            </div>
                            <div>
                              <p><span className="font-medium">Amount:</span> ₹{selectedOrder.payment.amount.toFixed(2)}</p>
                              <p><span className="font-medium">Method:</span> {selectedOrder.payment.method}</p>
                              {selectedOrder.payment.transactionId && (
                                <p><span className="font-medium">Transaction ID:</span> {selectedOrder.payment.transactionId}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      <div>
                        <h3 className="font-semibold mb-2">Order Items</h3>
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
                                  <div className="text-sm text-gray-500">ID: {item.productId}</div>
                                </TableCell>
                                <TableCell>₹{item.priceAtPurchase.toFixed(2)}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell className="text-right">
                                  ₹{(item.priceAtPurchase * item.quantity).toFixed(2)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      <div className="flex justify-end">
                        <div className="text-right space-y-2">
                          <p className="text-lg">
                            <span className="font-medium">Order Total:</span> ₹{selectedOrder.total.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </>
          )}
        </TabsContent>

        <TabsContent value="inquiries">
          {loading.inquiries ? (
            <div className="p-8">Loading inquiries...</div>
          ) : filteredInquiries.length === 0 ? (
            <p>No inquiries found.</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Inquiry ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInquiries.map((inquiry) => (
                    <TableRow
                      key={inquiry.inquiryId}
                      onClick={() => openInquiryDetails(inquiry)}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <TableCell className="font-medium">{inquiry.inquiryId}</TableCell>
                      <TableCell>{inquiry.name}</TableCell>
                      <TableCell>{inquiry.email}</TableCell>
                      <TableCell>{inquiry.phone}</TableCell>
                      <TableCell>{inquiry.inquiryType}</TableCell>
                      <TableCell>{inquiry.subject}</TableCell>
                      <TableCell>{inquiry.timestamp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Dialog open={inquiryDialogOpen} onOpenChange={setInquiryDialogOpen}>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Inquiry Details - {selectedInquiry?.inquiryId}</DialogTitle>
                  </DialogHeader>

                  {selectedInquiry && (
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
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Message</h3>
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="whitespace-pre-line">{selectedInquiry.message}</p>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="destructive"
                          onClick={() => deleteInquiry(selectedInquiry.inquiryId)}
                        >
                          Delete Inquiry
                        </Button>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </>
          )}
        </TabsContent>

        <TabsContent value="products">
          {loading.products ? (
            <div className="p-8">Loading products...</div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">Product management coming soon</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
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
