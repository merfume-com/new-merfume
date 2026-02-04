// import { useState } from "react";
// import Navigation from "@/components/Navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//   MessageSquare,
//   Globe,
//   Star,
// } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     inquiryType: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSelectChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, inquiryType: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Prepare the inquiry data
//     const inquiryData = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone || "Not provided",
//       inquiryType: formData.inquiryType || "General",
//       subject: formData.subject,
//       message: formData.message,
//       timestamp: new Date().toISOString(),
//       whatsappNumber: "9170671585758",
//     };

//     try {
//       // Send to backend API that will handle WhatsApp message
//       const response = await fetch("/api/send-inquiry", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inquiryData),
//       });

//       if (response.ok) {
//         // Success - message sent automatically
//         alert(
//           "Thank you for your inquiry! Your message has been sent successfully. We'll get back to you soon.",
//         );

//         // Reset form
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//           inquiryType: "",
//         });
//       } else {
//         throw new Error("Failed to send message");
//       }
//     } catch (error) {
//       // Fallback: If API fails, use direct WhatsApp method without popup
//       console.error("API failed, using fallback method:", error);

//       // Format the message for WhatsApp
//       const whatsappMessage =
//         `🌟 *NEW INQUIRY FROM MERFUME WEBSITE* 🌟\n\n` +
//         `👤 *Name:* ${formData.name}\n` +
//         `📧 *Email:* ${formData.email}\n` +
//         `📱 *Phone:* ${formData.phone || "Not provided"}\n` +
//         `📝 *Inquiry Type:* ${formData.inquiryType || "General"}\n` +
//         `📋 *Subject:* ${formData.subject}\n\n` +
//         `💬 *Message:*\n${formData.message}\n\n` +
//         `🕒 *Submitted:* ${new Date().toLocaleString()}\n\n` +
//         `✨ This inquiry was submitted through the Merfume website contact form.`;

//       // Create WhatsApp URL and open in background
//       const whatsappURL = `https://wa.me/917489635061?text=${encodeURIComponent(whatsappMessage)}`;

//       // Create hidden iframe to send message without showing UI
//       const iframe = document.createElement("iframe");
//       iframe.style.display = "none";
//       iframe.src = whatsappURL;
//       document.body.appendChild(iframe);

//       // Remove iframe after a short delay
//       setTimeout(() => {
//         document.body.removeChild(iframe);
//       }, 3000);

//       alert(
//         "Thank you for your inquiry! Your message has been sent successfully.",
//       );

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//         inquiryType: "",
//       });
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//           <div className="text-center">
//             <div className="flex justify-center mb-8">
//               <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-2xl">
//                 <MessageSquare className="w-12 h-12 text-luxury-black" />
//               </div>
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
//               Contact
//               <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
//                 Merfume
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//               Get in touch with our team for personalized fragrance
//               consultations, orders, or any questions about our luxury
//               collection.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information Cards */}
//       <section className="py-20 bg-card">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                   <MapPin className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Visit Our Store
//                 </h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <p className="font-medium">Merfume Flagship Store</p>
//                   <p>123 Luxury Lane</p>
//                   <p>Gold District, Dubai</p>
//                   <p>United Arab Emirates</p>
//                   <p className="text-gold font-medium">Postal Code: 12345</p>
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="mt-4 border-gold text-gold hover:bg-gold hover:text-luxury-black"
//                   onClick={() =>
//                     window.open(
//                       "https://maps.google.com?q=25.2048,55.2708",
//                       "_blank",
//                     )
//                   }
//                 >
//                   Get Directions
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                   <Phone className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Call Us
//                 </h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <div>
//                     <p className="font-medium">Customer Service</p>
//                     <a
//                       href="tel:+971501234567"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       +971 50 123 4567
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-medium">Sales Team</p>
//                     <a
//                       href="tel:+971507654321"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       +971 50 765 4321
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-medium">WhatsApp</p>
//                     <a
//                       href="https://wa.me/971501234567"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       +971 50 123 4567
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                   <Mail className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Email Us
//                 </h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <div>
//                     <p className="font-medium">General Inquiries</p>
//                     <a
//                       href="mailto:info@merfume.com"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       info@merfume.com
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-medium">Customer Support</p>
//                     <a
//                       href="mailto:support@merfume.com"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       support@merfume.com
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-medium">Partnerships</p>
//                     <a
//                       href="mailto:partners@merfume.com"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       partners@merfume.com
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                   <Clock className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Store Hours
//                 </h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <div className="flex justify-between">
//                     <span>Monday - Friday</span>
//                     <span className="text-gold">9:00 - 21:00</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Saturday</span>
//                     <span className="text-gold">10:00 - 22:00</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday</span>
//                     <span className="text-gold">12:00 - 20:00</span>
//                   </div>
//                   <p className="text-sm mt-4 italic">
//                     Extended hours during holidays
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Main Content: Form and Map */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div>
//               <div className="mb-8">
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                   Send Us a Message
//                 </h2>
//                 <p className="text-lg text-muted-foreground">
//                   Have questions about our fragrances or need personalized
//                   recommendations? We're here to help you find your perfect
//                   scent.
//                 </p>
//               </div>

//               <Card className="border-gold/20 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center text-foreground">
//                     <Send className="w-5 h-5 text-gold mr-2" />
//                     Inquiry Form
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label
//                           htmlFor="name"
//                           className="block text-sm font-medium text-foreground mb-2"
//                         >
//                           Full Name *
//                         </label>
//                         <Input
//                           id="name"
//                           name="name"
//                           type="text"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           placeholder="Enter your full name"
//                           required
//                           className="border-border focus:border-gold"
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="email"
//                           className="block text-sm font-medium text-foreground mb-2"
//                         >
//                           Email Address *
//                         </label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Enter your email"
//                           required
//                           className="border-border focus:border-gold"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label
//                           htmlFor="phone"
//                           className="block text-sm font-medium text-foreground mb-2"
//                         >
//                           Phone Number
//                         </label>
//                         <Input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           placeholder="+971 50 123 4567"
//                           className="border-border focus:border-gold"
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="inquiryType"
//                           className="block text-sm font-medium text-foreground mb-2"
//                         >
//                           Inquiry Type
//                         </label>
//                         <Select
//                           value={formData.inquiryType}
//                           onValueChange={handleSelectChange}
//                         >
//                           <SelectTrigger className="border-border focus:border-gold">
//                             <SelectValue placeholder="Select inquiry type" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="product">
//                               Product Information
//                             </SelectItem>
//                             <SelectItem value="consultation">
//                               Fragrance Consultation
//                             </SelectItem>
//                             <SelectItem value="order">Order Support</SelectItem>
//                             <SelectItem value="partnership">
//                               Business Partnership
//                             </SelectItem>
//                             <SelectItem value="feedback">
//                               Feedback & Reviews
//                             </SelectItem>
//                             <SelectItem value="other">Other</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="subject"
//                         className="block text-sm font-medium text-foreground mb-2"
//                       >
//                         Subject *
//                       </label>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         type="text"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                         placeholder="Brief subject of your inquiry"
//                         required
//                         className="border-border focus:border-gold"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="message"
//                         className="block text-sm font-medium text-foreground mb-2"
//                       >
//                         Message *
//                       </label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         placeholder="Tell us more about your inquiry..."
//                         rows={5}
//                         required
//                         className="border-border focus:border-gold resize-none"
//                       />
//                     </div>

//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gold hover:bg-gold-dark text-luxury-black font-semibold py-3"
//                     >
//                       {isSubmitting ? (
//                         <div className="flex items-center">
//                           <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-luxury-black mr-2"></div>
//                           Sending...
//                         </div>
//                       ) : (
//                         <div className="flex items-center justify-center">
//                           <Send className="w-4 h-4 mr-2" />
//                           Send Message
//                         </div>
//                       )}
//                     </Button>

//                     <p className="text-sm text-muted-foreground text-center">
//                       We typically respond within 24 hours during business days.
//                     </p>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Map and Additional Info */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                   Find Our Store
//                 </h2>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   Visit our flagship store in Dubai to experience our complete
//                   fragrance collection and receive personalized consultations
//                   from our expert perfumers.
//                 </p>
//               </div>

//               {/* Google Map Embed */}
//               <Card className="border-gold/20 shadow-lg overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="relative h-96 bg-accent/20">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7618!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       className="absolute inset-0"
//                     ></iframe>
//                     <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-gold/20">
//                       <div className="flex items-center space-x-2">
//                         <MapPin className="w-4 h-4 text-gold" />
//                         <span className="text-sm font-medium text-foreground">
//                           Merfume Flagship Store
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Additional Contact Options */}
//               <Card className="border-gold/20 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center text-foreground">
//                     <Globe className="w-5 h-5 text-gold mr-2" />
//                     Connect With Us
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <Button
//                       variant="outline"
//                       className="border-gold text-gold hover:bg-gold hover:text-luxury-black"
//                       onClick={() =>
//                         window.open("https://wa.me/971501234567", "_blank")
//                       }
//                     >
//                       WhatsApp
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="border-gold text-gold hover:bg-gold hover:text-luxury-black"
//                       onClick={() =>
//                         window.open("https://instagram.com/merfume", "_blank")
//                       }
//                     >
//                       Instagram
//                     </Button>
//                   </div>
//                   <div className="bg-accent/20 rounded-lg p-4 border border-gold/20">
//                     <div className="flex items-center mb-2">
//                       <Star className="w-4 h-4 text-gold mr-2" />
//                       <span className="font-medium text-foreground">
//                         Customer Satisfaction
//                       </span>
//                     </div>
//                     <p className="text-sm text-muted-foreground">
//                       Join thousands of satisfied customers who have found their
//                       signature scent with Merfume. Our team is dedicated to
//                       providing exceptional service and helping you discover the
//                       perfect fragrance for every occasion.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-card">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Quick answers to common questions about our products and services
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card className="border-border/50">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-foreground mb-2">
//                   How long does shipping take?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We offer same-day delivery in Dubai and 2-3 business days
//                   across the UAE. International shipping takes 5-7 business
//                   days.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-foreground mb-2">
//                   Do you offer fragrance consultations?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Yes! Book a complimentary consultation with our expert
//                   perfumers to find your perfect scent based on your
//                   preferences.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-foreground mb-2">
//                   What is your return policy?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We offer a 30-day return policy for unopened products and a
//                   satisfaction guarantee for our fragrance consultations.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-foreground mb-2">
//                   Are your perfumes authentic?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Absolutely! All our fragrances are 100% authentic and sourced
//                   directly from authorized distributors and our own laboratory.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-luxury-black text-cream py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <img
//                 src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
//                 alt="Merfume"
//                 className="h-20 w-auto mb-4 brightness-110"
//               />
//               <p className="text-cream/80 max-w-md leading-relaxed">
//                 Get in touch with our team for any questions about our luxury
//                 fragrances and exceptional customer service.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/about"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Store
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/ceo-vision"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     CEO Vision
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Support</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Shipping Info
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Returns
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <p className="text-cream/60">
//               © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// import { useState } from "react";
// import Navigation from "@/components/Navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//   MessageSquare,
//   Globe,
//   Star,
// } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     inquiryType: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSelectChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, inquiryType: value }));
//   };

//   const API_BASE_URL = "https://merfume-backend-1.onrender.com";//${API_BASE_URL}

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Prepare the inquiry data matching the backend DTO
//     const inquiryData = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone || "Not provided",
//       inquiryType: formData.inquiryType || "General",
//       subject: formData.subject,
//       message: formData.message,
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       // Send to backend API
//       const response = await fetch(`${API_BASE_URL}/api/inquiries/submit`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inquiryData),
//       });

//       if (response.ok) {
//         // Success - message sent
//        toast({
//         title: "Success",
//         description: "Your Inquiry Send Successfully",
//       });

//         // Reset form
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//           inquiryType: "",
//         });
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to send message");
//       }
//     } catch (error) {
//       console.error("Error submitting inquiry:", error);
//       let errorMessage = "Network error please refresh the page.";
//       if (error instanceof Error) {
//         errorMessage = error.message;
//       }
//       alert(errorMessage);
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//           <div className="text-center">
//             <div className="flex justify-center mb-8">
//               <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-2xl">
//                 <MessageSquare className="w-12 h-12 text-luxury-black" />
//               </div>
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
//               Contact
//               <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
//                 Merfume
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//               Get in touch with our team for personalized fragrance
//               consultations, orders, or any questions about our luxury
//               collection.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information Cards */}
//       <section className="py-20 bg-card">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                   <MapPin className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Visit Our Store
//                 </h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <p className="font-medium">Merfume Flagship Store</p>
//                   <p>123 Luxury Lane</p>
//                   <p>Gold District, Dubai</p>
//                   <p>United Arab Emirates</p>
//                   <p className="text-gold font-medium">Postal Code: 12345</p>
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="mt-4 border-gold text-gold hover:bg-gold hover:text-luxury-black"
//                   onClick={() =>
//                     window.open(
//                       "https://maps.google.com?q=25.2048,55.2708",
//                       "_blank",
//                     )
//                   }
//                 >
//                   Get Directions
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                   <Phone className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Call Us
//                 </h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <div>
//                     <p className="font-medium">Customer Service</p>
//                     <a
//                       href="tel:+917489635061"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       +91 7489635061
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-medium">Sales Team</p>
//                     <a
//                       href="tel:+917489635061"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       +91 7489635061
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-medium">WhatsApp</p>
//                     <a
//                       href="https://wa.me/917489635061"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       +91 7489635061
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                   <Mail className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Email Us
//                 </h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <div>
//                     <p className="font-medium">General Inquiries</p>
//                     <a
//                       href="mailto:info@merfume.com"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       info@merfume.com
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-medium">Customer Support</p>
//                     <a
//                       href="mailto:support@merfume.com"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       support@merfume.com
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-medium">Partnerships</p>
//                     <a
//                       href="mailto:partners@merfume.com"
//                       className="text-gold hover:text-gold-dark transition-colors"
//                     >
//                       partners@merfume.com
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
//               <CardContent className="p-8 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
//                   <Clock className="w-8 h-8 text-gold" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground mb-4">
//                   Store Hours
//                 </h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <div className="flex justify-between">
//                     <span>Monday - Friday</span>
//                     <span className="text-gold">9:00 - 21:00</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Saturday</span>
//                     <span className="text-gold">10:00 - 22:00</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday</span>
//                     <span className="text-gold">12:00 - 20:00</span>
//                   </div>
//                   <p className="text-sm mt-4 italic">
//                     Extended hours during holidays
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Main Content: Form and Map */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div>
//               <div className="mb-8">
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                   Send Us a Message
//                 </h2>
//                 <p className="text-lg text-muted-foreground">
//                   Have questions about our fragrances or need personalized
//                   recommendations? We're here to help you find your perfect
//                   scent.
//                 </p>
//               </div>

//               <Card className="border-gold/20 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center text-foreground">
//                     <Send className="w-5 h-5 text-gold mr-2" />
//                     Inquiry Form
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label
//                           htmlFor="name"
//                           className="block text-sm font-medium text-foreground mb-2"
//                         >
//                           Full Name *
//                         </label>
//                         <Input
//                           id="name"
//                           name="name"
//                           type="text"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           placeholder="Enter your full name"
//                           required
//                           className="border-border focus:border-gold"
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="email"
//                           className="block text-sm font-medium text-foreground mb-2"
//                         >
//                           Email Address *
//                         </label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Enter your email"
//                           required
//                           className="border-border focus:border-gold"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label
//                           htmlFor="phone"
//                           className="block text-sm font-medium text-foreground mb-2"
//                         >
//                           Phone Number
//                         </label>
//                         <Input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           placeholder="+971 50 123 4567"
//                           className="border-border focus:border-gold"
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="inquiryType"
//                           className="block text-sm font-medium text-foreground mb-2"
//                         >
//                           Inquiry Type
//                         </label>
//                         <Select
//                           value={formData.inquiryType}
//                           onValueChange={handleSelectChange}
//                         >
//                           <SelectTrigger className="border-border focus:border-gold">
//                             <SelectValue placeholder="Select inquiry type" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="product">
//                               Product Information
//                             </SelectItem>
//                             <SelectItem value="consultation">
//                               Fragrance Consultation
//                             </SelectItem>
//                             <SelectItem value="order">Order Support</SelectItem>
//                             <SelectItem value="partnership">
//                               Business Partnership
//                             </SelectItem>
//                             <SelectItem value="feedback">
//                               Feedback & Reviews
//                             </SelectItem>
//                             <SelectItem value="other">Other</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="subject"
//                         className="block text-sm font-medium text-foreground mb-2"
//                       >
//                         Subject *
//                       </label>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         type="text"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                         placeholder="Brief subject of your inquiry"
//                         required
//                         className="border-border focus:border-gold"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="message"
//                         className="block text-sm font-medium text-foreground mb-2"
//                       >
//                         Message *
//                       </label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         placeholder="Tell us more about your inquiry..."
//                         rows={5}
//                         required
//                         className="border-border focus:border-gold resize-none"
//                       />
//                     </div>

//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gold hover:bg-gold-dark text-luxury-black font-semibold py-3"
//                     >
//                       {isSubmitting ? (
//                         <div className="flex items-center">
//                           <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-luxury-black mr-2"></div>
//                           Sending...
//                         </div>
//                       ) : (
//                         <div className="flex items-center justify-center">
//                           <Send className="w-4 h-4 mr-2" />
//                           Send Message
//                         </div>
//                       )}
//                     </Button>

//                     <p className="text-sm text-muted-foreground text-center">
//                       We typically respond within 24 hours during business days.
//                     </p>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Map and Additional Info */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                   Find Our Store
//                 </h2>
//                 <p className="text-lg text-muted-foreground mb-6">
//                   Visit our flagship store in Dubai to experience our complete
//                   fragrance collection and receive personalized consultations
//                   from our expert perfumers.
//                 </p>
//               </div>

//               {/* Google Map Embed */}
//               <Card className="border-gold/20 shadow-lg overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="relative h-96 bg-accent/20">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7618!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       className="absolute inset-0"
//                     ></iframe>
//                     <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-gold/20">
//                       <div className="flex items-center space-x-2">
//                         <MapPin className="w-4 h-4 text-gold" />
//                         <span className="text-sm font-medium text-foreground">
//                           Merfume Flagship Store
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Additional Contact Options */}
//               <Card className="border-gold/20 shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center text-foreground">
//                     <Globe className="w-5 h-5 text-gold mr-2" />
//                     Connect With Us
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <Button
//                       variant="outline"
//                       className="border-gold text-gold hover:bg-gold hover:text-luxury-black"
//                       onClick={() =>
//                         window.open("https://wa.me/971501234567", "_blank")
//                       }
//                     >
//                       WhatsApp
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="border-gold text-gold hover:bg-gold hover:text-luxury-black"
//                       onClick={() =>
//                         window.open("https://instagram.com/merfume", "_blank")
//                       }
//                     >
//                       Instagram
//                     </Button>
//                   </div>
//                   <div className="bg-accent/20 rounded-lg p-4 border border-gold/20">
//                     <div className="flex items-center mb-2">
//                       <Star className="w-4 h-4 text-gold mr-2" />
//                       <span className="font-medium text-foreground">
//                         Customer Satisfaction
//                       </span>
//                     </div>
//                     <p className="text-sm text-muted-foreground">
//                       Join thousands of satisfied customers who have found their
//                       signature scent with Merfume. Our team is dedicated to
//                       providing exceptional service and helping you discover the
//                       perfect fragrance for every occasion.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-card">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Quick answers to common questions about our products and services
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card className="border-border/50">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-foreground mb-2">
//                   How long does shipping take?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We offer same-day delivery in Dubai and 2-3 business days
//                   across the UAE. International shipping takes 5-7 business
//                   days.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-foreground mb-2">
//                   Do you offer fragrance consultations?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Yes! Book a complimentary consultation with our expert
//                   perfumers to find your perfect scent based on your
//                   preferences.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-foreground mb-2">
//                   What is your return policy?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   We offer a 30-day return policy for unopened products and a
//                   satisfaction guarantee for our fragrance consultations.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-border/50">
//               <CardContent className="p-6">
//                 <h3 className="font-semibold text-foreground mb-2">
//                   Are your perfumes authentic?
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Absolutely! All our fragrances are 100% authentic and sourced
//                   directly from authorized distributors and our own laboratory.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-luxury-black text-cream py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <img
//                 src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
//                 alt="Merfume"
//                 className="h-20 w-auto mb-4 brightness-110"
//               />
//               <p className="text-cream/80 max-w-md leading-relaxed">
//                 Get in touch with our team for any questions about our luxury
//                 fragrances and exceptional customer service.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/about"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/store"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Store
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/ceo-vision"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     CEO Vision
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-gold font-semibold mb-4">Support</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Shipping Info
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Returns
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-cream/80 hover:text-gold transition-colors"
//                   >
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-cream/20 mt-12 pt-8 text-center">
//             <p className="text-cream/60">
//               © 2024 Merfume. All rights reserved. Crafted with luxury in mind.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Star,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  // const API_BASE_URL = "https://e46b4bafada4.ngrok-free.app";//${API_BASE_URL}
  const API_BASE_URL = "https://merfume-backend-production-5068.up.railway.app";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the inquiry data matching the backend DTO
    const inquiryData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      inquiryType: formData.inquiryType || "General",
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toISOString(),
    };

    try {
      // Send to backend API
      const response = await fetch(`${API_BASE_URL}/api/inquiries/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiryData),
      });

      if (response.ok) {
        // Success - message sent
       toast({
        title: "Success",
        description: "Your Inquiry Send Successfully",
      });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      let errorMessage = "Network error please refresh the page.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      alert(errorMessage);
    }

    setIsSubmitting(false);
  };

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
                <MessageSquare className="w-12 h-12 text-luxury-black" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Contact
              <span className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">
                Merfume
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for personalized fragrance
              consultations, orders, or any questions about our luxury
              collection.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Visit Our Store
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium">Merfume Flagship Store</p>
                  <p>123 Luxury Lane</p>
                  <p>Gold District, Dubai</p>
                  <p>United Arab Emirates</p>
                  <p className="text-gold font-medium">Postal Code: 12345</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-gold text-gold hover:bg-gold hover:text-luxury-black"
                  onClick={() =>
                    window.open(
                      "https://maps.google.com?q=25.2048,55.2708",
                      "_blank",
                    )
                  }
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Call Us
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>
                    <p className="font-medium">Customer Service</p>
                    <a
                      href="tel:+917489635061"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      +91 7489635061
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Sales Team</p>
                    <a
                      href="tel:+917489635061"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      +91 7489635061
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/917489635061"
                      className="text-gold hover:text-gold-dark transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 7489635061
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Email Us
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <a
                      href="mailto:info@merfume.com"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      info@merfume.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Customer Support</p>
                    <a
                      href="mailto:support@merfume.com"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      support@merfume.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Partnerships</p>
                    <a
                      href="mailto:partners@merfume.com"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      partners@merfume.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Store Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-gold">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-gold">10:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gold">12:00 - 20:00</span>
                  </div>
                  <p className="text-sm mt-4 italic">
                    Extended hours during holidays
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content: Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have questions about our fragrances or need personalized
                  recommendations? We're here to help you find your perfect
                  scent.
                </p>
              </div>

              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Send className="w-5 h-5 text-gold mr-2" />
                    Inquiry Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="border-border focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 50 123 4567"
                          className="border-border focus:border-gold"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Inquiry Type
                        </label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger className="border-border focus:border-gold">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="product">
                              Product Information
                            </SelectItem>
                            <SelectItem value="consultation">
                              Fragrance Consultation
                            </SelectItem>
                            <SelectItem value="order">Order Support</SelectItem>
                            <SelectItem value="partnership">
                              Business Partnership
                            </SelectItem>
                            <SelectItem value="feedback">
                              Feedback & Reviews
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your inquiry"
                        required
                        className="border-border focus:border-gold"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                        className="border-border focus:border-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-dark text-luxury-black font-semibold py-3"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-luxury-black mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Find Our Store
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Visit our flagship store in Dubai to experience our complete
                  fragrance collection and receive personalized consultations
                  from our expert perfumers.
                </p>
              </div>

              {/* Google Map Embed */}
              <Card className="border-gold/20 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-96 bg-accent/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7618!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-gold/20">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span className="text-sm font-medium text-foreground">
                          Merfume Flagship Store
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Contact Options */}
              <Card className="border-gold/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Globe className="w-5 h-5 text-gold mr-2" />
                    Connect With Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-luxury-black"
                      onClick={() =>
                        window.open("https://wa.me/971501234567", "_blank")
                      }
                    >
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-luxury-black"
                      onClick={() =>
                        window.open("https://instagram.com/merfume", "_blank")
                      }
                    >
                      Instagram
                    </Button>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-4 border border-gold/20">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-gold mr-2" />
                      <span className="font-medium text-foreground">
                        Customer Satisfaction
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join thousands of satisfied customers who have found their
                      signature scent with Merfume. Our team is dedicated to
                      providing exceptional service and helping you discover the
                      perfect fragrance for every occasion.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  How long does shipping take?
                </h3>
                <p className="text-muted-foreground">
                  We offer same-day delivery in Dubai and 2-3 business days
                  across the UAE. International shipping takes 5-7 business
                  days.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Do you offer fragrance consultations?
                </h3>
                <p className="text-muted-foreground">
                  Yes! Book a complimentary consultation with our expert
                  perfumers to find your perfect scent based on your
                  preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  What is your return policy?
                </h3>
                <p className="text-muted-foreground">
                  We offer a 30-day return policy for unopened products and a
                  satisfaction guarantee for our fragrance consultations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Are your perfumes authentic?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! All our fragrances are 100% authentic and sourced
                  directly from authorized distributors and our own laboratory.
                </p>
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
                Get in touch with our team for any questions about our luxury
                fragrances and exceptional customer service.
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
                    href="/ceo-vision"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    CEO Vision
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    Contact Us
                  </a>
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
