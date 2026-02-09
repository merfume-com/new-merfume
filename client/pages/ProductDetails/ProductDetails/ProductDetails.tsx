"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Star, Truck, Shield, RefreshCw, ArrowLeft, ShoppingCart, Check, Zap } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Product {
  productId: number;
  productName: string;
  brand: string;
  productPrice: number;
  originalPrice?: number;
  productImageUrl: string;
  productBackImageUrl?: string;
  rating: number;
  reviewCount: number;
  productDescription: string;
  notes: string[];
  productCategory: string;
  stock: number;
}

const api = axios.create({
  baseURL: "https://merfume-backend-production-5068.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
  }
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      toast.error("Product not found");
    } else if (error.response?.status >= 500) {
      toast.error("Server error. Please try again later.");
    } else if (!error.response) {
      toast.error("Network error. Please check your connection.");
    }
    return Promise.reject(error);
  }
);

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImage, setActiveImage] = useState<"front" | "back">("front");
  const [quantity, setQuantity] = useState(1);

  // Load favorites from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
      setIsFavorite(favorites.includes(Number(id)));
    }
  }, [id]);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleToggleFavorite = () => {
    if (typeof window === "undefined") return;

    const favorites = JSON.parse(localStorage.getItem("merfume_favorites") || "[]");
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((favId: number) => favId !== Number(id));
      toast.success("Removed from favorites");
    } else {
      newFavorites = [...favorites, Number(id)];
      toast.success("Added to favorites");
    }

    localStorage.setItem("merfume_favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const getCartToken = () => {
    if (typeof window === "undefined") return "";
    
    let token = localStorage.getItem("cartToken");
    if (!token) {
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("cartToken", token);
    }
    return token;
  };

  const handleAddToCart = async () => {
    if (!product || isAddingToCart || addedToCart || product.stock === 0) return;

    setIsAddingToCart(true);
    try {
      const cartToken = getCartToken();

      const response = await api.post("/api/cart/add", {
        productId: product.productId,
        quantity: quantity,
      }, {
        headers: {
          "Cart-Token": cartToken,
        },
      });

      // Update local cart storage
      const addedItem = {
        productId: product.productId,
        productName: product.productName,
        brand: product.brand,
        productPrice: product.productPrice,
        quantity: quantity,
        productImageUrl: product.productImageUrl,
      };

      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const index = existingCart.findIndex((item: any) => item.productId === product.productId);
      
      if (index > -1) {
        existingCart[index].quantity += quantity;
      } else {
        existingCart.push(addedItem);
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));

      setAddedToCart(true);
      toast.success("Added to cart successfully!");

      setTimeout(() => setAddedToCart(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Failed to add to cart");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsAddingToCart(false);
    }
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            {/* Back button skeleton */}
            <div className="mb-6">
              <div className="h-10 w-24 bg-muted rounded-lg"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image skeleton */}
              <div className="lg:w-1/2">
                <div className="aspect-square bg-muted rounded-2xl"></div>
              </div>

              {/* Content skeleton */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="h-6 w-32 bg-muted rounded-full mb-2"></div>
                  <div className="h-10 w-3/4 bg-muted rounded mb-4"></div>
                  <div className="h-6 w-48 bg-muted/50 rounded mb-2"></div>
                  <div className="h-6 w-24 bg-muted/50 rounded"></div>
                </div>

                <div className="h-2 bg-muted/30 rounded"></div>

                <div>
                  <div className="h-5 w-40 bg-muted/50 rounded mb-3"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-8 w-20 bg-muted/30 rounded-full"></div>
                    ))}
                  </div>
                </div>

                <div className="h-2 bg-muted/30 rounded"></div>

                <div className="space-y-4">
                  <div className="h-8 w-48 bg-muted/50 rounded"></div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-muted/30 rounded-lg"></div>
                    <div className="h-12 w-48 bg-muted/50 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center"
          >
            <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 rounded-3xl mb-6">
              <Shield className="h-16 w-16 text-red-400 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Product Not Found
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              {error || "The product you're looking for doesn't exist."}
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="px-6 py-3"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
              <Button
                onClick={() => navigate("/store")}
                className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black px-6 py-3"
              >
                Browse Store
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.productPrice) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Navigation />

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-accent/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Store
        </Button>

        {/* Product Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Images Section */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              <div className="aspect-square bg-gradient-to-br from-background to-background/80 border-2 border-border/30 rounded-2xl overflow-hidden">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={activeImage === "front" ? product.productImageUrl : product.productBackImageUrl || product.productImageUrl}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Toggle and Discount */}
              <div className="flex items-center justify-between mt-4">
                {product.productBackImageUrl && (
                  <div className="flex gap-2">
                    <Button
                      variant={activeImage === "front" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveImage("front")}
                      className={activeImage === "front" 
                        ? "bg-gradient-to-r from-gold to-gold/90 text-black" 
                        : ""
                      }
                    >
                      Front View
                    </Button>
                    <Button
                      variant={activeImage === "back" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveImage("back")}
                      className={activeImage === "back" 
                        ? "bg-gradient-to-r from-gold to-gold/90 text-black" 
                        : ""
                      }
                    >
                      Back View
                    </Button>
                  </div>
                )}

                {discount > 0 && (
                  <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white text-lg px-4 py-2">
                    -{discount}% OFF
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Brand and Rating */}
              <div className="flex items-center justify-between">
                <Badge className="bg-gradient-to-r from-gold/20 to-gold/10 text-gold border border-gold/30 px-4 py-2 text-base">
                  {product.brand}
                </Badge>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-gold fill-current"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{product.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {product.productName}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.productDescription}
              </p>

              <Separator className="bg-border/30" />

              {/* Notes */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Fragrance Notes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground px-4 py-2 text-sm"
                    >
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="bg-border/30" />

              {/* Price Section */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl md:text-5xl font-bold text-gold">
                    ₹{product.productPrice.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-2xl text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      {discount > 0 && (
                        <Badge className="bg-green-500/20 text-green-600 text-base px-3 py-1.5">
                          Save {discount}%
                        </Badge>
                      )}
                    </>
                  )}
                </div>

                {/* Stock Status */}
                {product.stock > 0 ? (
                  product.stock < 10 ? (
                    <div className="flex items-center gap-2 text-yellow-600">
                      <Zap className="h-4 w-4" />
                      <span className="font-medium">Only {product.stock} left in stock</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="h-4 w-4" />
                      <span className="font-medium">In Stock</span>
                    </div>
                  )
                ) : (
                  <Badge variant="destructive" className="text-base px-3 py-1.5">
                    Out of Stock
                  </Badge>
                )}
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-6 pt-4">
                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium">Quantity:</span>
                  <div className="flex items-center border border-border/30 rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="h-12 w-12 rounded-r-none hover:bg-accent/50"
                    >
                      −
                    </Button>
                    <div className="h-12 w-16 flex items-center justify-center text-lg font-semibold border-x border-border/30">
                      {quantity}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={!product || quantity >= product.stock}
                      className="h-12 w-12 rounded-l-none hover:bg-accent/50"
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black text-lg font-semibold py-6 rounded-xl"
                    onClick={handleAddToCart}
                    disabled={isAddingToCart || addedToCart || product.stock === 0}
                  >
                    {isAddingToCart ? (
                      <>
                        <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                        Adding...
                      </>
                    ) : addedToCart ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Added to Cart
                      </>
                    ) : product.stock === 0 ? (
                      "Out of Stock"
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart • ₹{(product.productPrice * quantity).toLocaleString()}
                      </>
                    )}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-2 border-border/30 hover:border-red-300 hover:bg-red-50/10 hover:text-red-500 text-lg font-semibold py-6 rounded-xl"
                    onClick={handleToggleFavorite}
                  >
                    <Heart
                      className={`h-5 w-5 mr-2 ${
                        isFavorite ? "text-red-500 fill-current animate-pulse" : ""
                      }`}
                    />
                    {isFavorite ? "Remove Favorite" : "Add to Favorite"}
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
                  <Truck className="h-6 w-6 text-gold" />
                  <div>
                    <h4 className="font-medium text-foreground">Free Shipping</h4>
                    <p className="text-sm text-muted-foreground">Over ₹5000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
                  <Shield className="h-6 w-6 text-gold" />
                  <div>
                    <h4 className="font-medium text-foreground">Authentic</h4>
                    <p className="text-sm text-muted-foreground">100% Guaranteed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-background to-background/50 border border-border/20">
                  <RefreshCw className="h-6 w-6 text-gold" />
                  <div>
                    <h4 className="font-medium text-foreground">Easy Returns</h4>
                    <p className="text-sm text-muted-foreground">30 Days Policy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <h3 className="text-2xl font-bold text-foreground mb-6">Product Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Brand</h4>
                <p className="text-muted-foreground">{product.brand}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Category</h4>
                <Badge variant="outline" className="capitalize">
                  {product.productCategory.replace("-", " ")}
                </Badge>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Customer Reviews</h4>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-gold fill-current"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{product.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Product ID</h4>
                <p className="text-muted-foreground font-mono">{product.productId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-luxury-black to-black text-cream py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
                alt="Merfume"
                className="h-24 w-auto mb-6 brightness-110"
              />
              <p className="text-cream/80 max-w-xl leading-relaxed text-lg">
                Discover luxury fragrances that tell your story. Each scent in our collection 
                is carefully curated to evoke emotions and create lasting memories.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-semibold text-lg mb-6">Shop</h3>
              <ul className="space-y-3">
                {["All Fragrances", "New Arrivals", "Best Sellers", "Limited Edition", "Gift Sets"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-cream/80 hover:text-gold transition-colors text-lg">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-semibold text-lg mb-6">Help</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/contact" className="text-cream/80 hover:text-gold transition-colors text-lg">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-cream/80 hover:text-gold transition-colors text-lg">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/shipping-policy" className="text-cream/80 hover:text-gold transition-colors text-lg">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-cream/80 hover:text-gold transition-colors text-lg">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60 text-lg">
              © 2024 Merfume. All rights reserved. Crafted with passion in India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
