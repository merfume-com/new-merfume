"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Star, Eye, Check, Zap } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { motion } from "framer-motion";

interface ProductCardProps {
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
  onToggleFavorite?: (id: number) => void;
  isFavorite?: boolean;
  className?: string;
  style?: React.CSSProperties;
  stock?: number;
  variant?: "grid" | "list";
}

const api = axios.create({
  baseURL: "https://merfume-backend-production-5068.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default function ProductCard({
  productId,
  productName,
  brand,
  productPrice,
  originalPrice,
  productImageUrl,
  productBackImageUrl,
  rating,
  reviewCount,
  productDescription,
  notes,
  onToggleFavorite,
  isFavorite = false,
  className,
  style,
  stock = 10,
  variant = "grid",
}: ProductCardProps) {
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showBackImage, setShowBackImage] = useState(false);

  const getCartToken = () => {
    if (typeof window === "undefined") return "";
    
    let token = localStorage.getItem("cartToken");
    if (!token) {
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("cartToken", token);
    }
    return token;
  };

  const handleProductClick = () => {
    navigate(`/product/${productId}`);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.(productId);
  };

  const handleEyeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (productBackImageUrl) {
      setShowBackImage(!showBackImage);
    }
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAdding || added || stock === 0) return;

    setIsAdding(true);
    try {
      const cartToken = getCartToken();

      const response = await api.post("/api/cart/add", {
        productId,
        quantity: 1,
      }, {
        headers: {
          "Cart-Token": cartToken,
        },
      });

      const addedItem = {
        productId,
        productName,
        brand,
        productPrice,
        quantity: 1,
        productImageUrl,
      };

      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      
      const index = existingCart.findIndex((item: any) => item.productId === productId);
      if (index > -1) {
        existingCart[index].quantity += 1;
      } else {
        existingCart.push(addedItem);
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));

      setAdded(true);
      toast.success("Added to cart successfully!", {
        duration: 2000,
        position: "top-right",
      });

      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Failed to add to cart");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setIsAdding(false);
    }
  };

  const discount = originalPrice 
    ? Math.round(((originalPrice - productPrice) / originalPrice) * 100)
    : 0;

  // Grid View
  if (variant === "grid") {
    return (
      <motion.div
        onClick={handleProductClick}
        className={`cursor-pointer group relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowBackImage(false);
        }}
      >
        <Card className="h-full border border-border/40 hover:border-gold/30 bg-gradient-to-b from-background to-background/95 overflow-hidden transition-all duration-300 rounded-xl hover:shadow-lg">
          {/* Image Section */}
          <div className="relative aspect-square overflow-hidden">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <img
                src={showBackImage && productBackImageUrl ? productBackImageUrl : productImageUrl}
                alt={productName}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Discount Badge */}
            {originalPrice && discount > 0 && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                -{discount}%
              </div>
            )}

            {/* Stock Badge */}
            {stock < 5 && stock > 0 && (
              <div className="absolute top-10 left-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                Low Stock
              </div>
            )}
            {stock === 0 && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                Out of Stock
              </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button
                onClick={handleToggleFavorite}
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 z-10"
              >
                <Heart
                  className={`h-4 w-4 transition-all ${
                    isFavorite
                      ? "text-red-500 fill-current animate-pulse"
                      : "text-gray-600 group-hover:text-red-500"
                  }`}
                />
              </button>
              
              {productBackImageUrl && (
                <button
                  onClick={handleEyeClick}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 z-10"
                >
                  <Eye className={`h-4 w-4 ${showBackImage ? "text-gold" : "text-gray-600"}`} />
                </button>
              )}
            </div>

            {/* Quick Add Overlay */}
            {isHovered && stock > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/30 flex items-center justify-center z-20"
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black text-sm font-medium rounded-lg px-4 shadow-lg"
                  onClick={handleAddToCart}
                  disabled={isAdding || added}
                >
                  {isAdding ? (
                    <>
                      <div className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin mr-1.5"></div>
                      Adding...
                    </>
                  ) : added ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1.5" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                      Quick Add
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </div>

          {/* Content Section */}
          <CardContent className="p-4 flex flex-col h-[240px]">
            {/* Brand and Rating */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
                {brand}
              </span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(rating)
                          ? "text-gold fill-current"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold ml-1">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({reviewCount})</span>
              </div>
            </div>

            {/* Product Name */}
            <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 h-12 hover:text-gold transition-colors">
              {productName}
            </h3>

            {/* Description */}
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {productDescription}
            </p>

            {/* Notes */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                {notes.slice(0, 2).map((note, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground px-2 py-1 rounded-full font-medium"
                  >
                    {note}
                  </span>
                ))}
                {notes.length > 2 && (
                  <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                    +{notes.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="mt-auto pt-3 border-t border-border/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl font-bold text-gold">₹{productPrice.toLocaleString()}</span>
                    {originalPrice && (
                      <>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{originalPrice.toLocaleString()}
                        </span>
                        {discount > 0 && (
                          <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full font-bold">
                            Save {discount}%
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Free shipping over ₹5000
                  </p>
                </div>

                <Button
                  size="sm"
                  className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg px-4 py-2 w-full sm:w-auto min-w-[110px] z-10"
                  onClick={handleAddToCart}
                  disabled={isAdding || added || stock === 0}
                >
                  {isAdding ? (
                    <div className="flex items-center gap-1.5 justify-center">
                      <div className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs">Adding</span>
                    </div>
                  ) : added ? (
                    <div className="flex items-center gap-1.5 justify-center">
                      <Check className="h-3.5 w-3.5" />
                      <span className="text-xs">Added</span>
                    </div>
                  ) : stock === 0 ? (
                    "Out of Stock"
                  ) : (
                    <div className="flex items-center gap-1.5 justify-center">
                      <ShoppingCart className="h-3.5 w-3.5" />
                      <span className="text-xs">Add to Cart</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  // List View - Mobile Optimized
  return (
    <motion.div
      onClick={handleProductClick}
      className={`cursor-pointer group ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border border-border/40 hover:border-gold/30 bg-gradient-to-r from-background to-background/95 overflow-hidden transition-all duration-300 rounded-xl hover:shadow-lg">
        {/* Mobile Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-48 lg:w-56 relative h-48 md:h-auto md:min-h-[200px]">
            <div className="relative h-full w-full">
              <img
                src={showBackImage && productBackImageUrl ? productBackImageUrl : productImageUrl}
                alt={productName}
                className="w-full h-full object-cover"
              />
              
              {/* Discount Badge */}
              {originalPrice && discount > 0 && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                  -{discount}%
                </div>
              )}

              {/* Action Buttons - Mobile */}
              <div className="absolute top-3 right-3 flex gap-2 z-10">
                <button
                  onClick={handleToggleFavorite}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isFavorite
                        ? "text-red-500 fill-current animate-pulse"
                        : "text-gray-600 hover:text-red-500"
                    }`}
                  />
                </button>
                
                {productBackImageUrl && (
                  <button
                    onClick={handleEyeClick}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200 shadow-sm hover:scale-110"
                  >
                    <Eye className={`h-4 w-4 ${showBackImage ? "text-gold" : "text-gray-600"}`} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <CardContent className="flex-1 p-4 md:p-6">
            <div className="h-full flex flex-col">
              {/* Mobile: Compact Header */}
              <div className="md:hidden mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
                    {brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(rating)
                              ? "text-gold fill-current"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold ml-1">{rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              {/* Desktop: Full Header */}
              <div className="hidden md:block mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(rating)
                              ? "text-gold fill-current"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold ml-1">{rating.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground">({reviewCount})</span>
                  </div>
                </div>
              </div>

              {/* Product Name */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 line-clamp-2 hover:text-gold transition-colors">
                {productName}
              </h3>

              {/* Description - Hidden on mobile, shown on desktop */}
              <p className="hidden md:block text-sm text-muted-foreground mb-3 line-clamp-2">
                {productDescription}
              </p>

              {/* Notes */}
              <div className="mb-3 md:mb-4">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {notes.slice(0, 3).map((note, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground px-2 md:px-3 py-1 md:py-1.5 rounded-full font-medium"
                    >
                      {note}
                    </span>
                  ))}
                  {notes.length > 3 && (
                    <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                      +{notes.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile Bottom Section */}
              <div className="md:hidden mt-auto">
                <div className="space-y-3">
                  {/* Price Section */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gold">₹{productPrice.toLocaleString()}</span>
                    {originalPrice && (
                      <>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{originalPrice.toLocaleString()}
                        </span>
                        {discount > 0 && (
                          <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full font-bold">
                            Save {discount}%
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  {/* Stock Info */}
                  {stock < 5 && stock > 0 && (
                    <div className="inline-block bg-yellow-500/20 text-yellow-600 text-xs font-medium px-2 py-1 rounded-full">
                      Only {stock} left
                    </div>
                  )}
                  {stock === 0 && (
                    <div className="inline-block bg-red-500/20 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
                      Out of Stock
                    </div>
                  )}

                  {/* CTA Button - Mobile */}
                  <Button
                    className="w-full bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg py-3 z-10"
                    onClick={handleAddToCart}
                    disabled={isAdding || added || stock === 0}
                  >
                    {isAdding ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Adding...</span>
                      </div>
                    ) : added ? (
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-4 w-4" />
                        <span>Added</span>
                      </div>
                    ) : stock === 0 ? (
                      "Out of Stock"
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </div>
                    )}
                  </Button>
                </div>
              </div>

              {/* Desktop Bottom Section */}
              <div className="hidden md:block mt-auto pt-4 border-t border-border/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl md:text-3xl font-bold text-gold">
                        ₹{productPrice.toLocaleString()}
                      </span>
                      {originalPrice && (
                        <>
                          <span className="text-lg text-muted-foreground line-through">
                            ₹{originalPrice.toLocaleString()}
                          </span>
                          {discount > 0 && (
                            <span className="text-sm bg-green-500/20 text-green-600 px-3 py-1 rounded-full font-bold">
                              Save {discount}%
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-green-500" />
                      <p className="text-sm text-muted-foreground">
                        Free shipping on orders over ₹5000
                      </p>
                    </div>

                    {/* Stock Info */}
                    {stock < 5 && stock > 0 && (
                      <div className="inline-block bg-yellow-500/20 text-yellow-600 text-xs font-medium px-3 py-1 rounded-full">
                        Only {stock} left in stock
                      </div>
                    )}
                    {stock === 0 && (
                      <div className="inline-block bg-red-500/20 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-black font-semibold rounded-lg px-6 py-3 min-w-[140px] z-10"
                      onClick={handleAddToCart}
                      disabled={isAdding || added || stock === 0}
                    >
                      {isAdding ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>Adding...</span>
                        </div>
                      ) : added ? (
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5" />
                          <span>Added to Cart</span>
                        </div>
                      ) : stock === 0 ? (
                        "Out of Stock"
                      ) : (
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="h-5 w-5" />
                          <span>Add to Cart</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}
