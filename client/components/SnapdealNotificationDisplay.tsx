// src/components/notifications/SnapdealNotificationDisplay.tsx
import React, { useEffect, useState } from 'react';
import { SnapdealNotificationData } from '@/services/firebaseService';
import '@/SnapdealNotificationDisplay.css';

interface SnapdealNotificationDisplayProps {
  notification: SnapdealNotificationData;
  onClose: () => void;
  onViewProduct: (productId: string) => void;
}

const SnapdealNotificationDisplay: React.FC<SnapdealNotificationDisplayProps> = ({
  notification,
  onClose,
  onViewProduct
}) => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    // Auto hide after 8 seconds
    const totalTime = 8000;
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, totalTime);

    // Update progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - (100 / (totalTime / 100));
        return newProgress <= 0 ? 0 : newProgress;
      });
    }, 100);

    // Update timer every second if showTimer is enabled
    if (notification.showTimer) {
      const timerInterval = setInterval(() => {
        setTimeRemaining(formatTimeRemaining());
      }, 1000);
      
      return () => {
        clearTimeout(hideTimer);
        clearInterval(progressInterval);
        clearInterval(timerInterval);
      };
    }

    return () => {
      clearTimeout(hideTimer);
      clearInterval(progressInterval);
    };
  }, []);

  const formatTimeRemaining = () => {
    // Simple timer logic for display
    const remainingSeconds = Math.floor(progress / (100 / 80)); // 80 seconds max
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleViewProduct = () => {
    onViewProduct(notification.productId);
    setIsVisible(false);
    onClose();
  };

  const handleShopNow = () => {
    onViewProduct(notification.productId);
    setIsVisible(false);
    onClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="snapdeal-notification-display" style={{ 
      borderLeftColor: notification.notificationColor || '#FF6B35' 
    }}>
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      
      <div className="notification-header">
        <div className="brand-section">
          {notification.brandLogoUrl && (
            <img 
              src={notification.brandLogoUrl} 
              alt={notification.brandName}
              className="brand-logo"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/merfume-logo.png';
              }}
            />
          )}
          <div className="brand-info">
            <span className="brand-name">{notification.brandName}</span>
            <span className="notification-time">Just now</span>
          </div>
        </div>
        <button className="close-btn" onClick={handleClose} aria-label="Close">
          ✕
        </button>
      </div>

      <div className="notification-content">
        <div className="product-info">
          <h3 className="product-name">{notification.productName}</h3>
          
          <div className="price-section">
            <span className="current-price">{notification.price}</span>
            {notification.originalPrice && notification.discountPercent && (
              <>
                <span className="original-price">{notification.originalPrice}</span>
                <span className="discount-badge">{notification.discountPercent}</span>
              </>
            )}
          </div>
          
          {notification.discountAmount && notification.discountAmount !== '₹0' && (
            <div className="save-text">
              Save {notification.discountAmount}
            </div>
          )}
          
          {notification.showRating && notification.rating && (
            <div className="rating-section">
              <div className="stars">
                {renderStars(parseFloat(notification.rating))}
              </div>
              <span className="rating-value">{notification.rating}</span>
              {notification.category && (
                <span className="category-tag">• {notification.category}</span>
              )}
            </div>
          )}
          
          {notification.showCategoryTag && notification.category && !notification.showRating && (
            <div className="category-section">
              <span className="category-icon">🏷️</span>
              <span className="category-name">{notification.category}</span>
            </div>
          )}
        </div>
        
        {notification.imageUrl && (
          <div className="product-image">
            <img 
              src={notification.imageUrl} 
              alt={notification.productName}
              className="image-preview"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/product-placeholder.png';
              }}
            />
          </div>
        )}
      </div>

      <div className="notification-footer">
        {notification.showTimer && timeRemaining && (
          <div className="timer-section">
            <span className="timer-icon">⏰</span>
            <span className="timer-text">{notification.timerText || 'Hurry! Offer ends soon'}</span>
            <span className="timer-value">{timeRemaining}</span>
          </div>
        )}
        
        <div className="action-buttons">
          <button className="view-btn" onClick={handleViewProduct}>
            View Product
          </button>
          <button className="shop-now-btn" onClick={handleShopNow}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="star full">★</span>);
  }
  
  if (hasHalfStar) {
    stars.push(<span key="half" className="star half">⯨</span>);
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
  }
  
  return stars;
};

export default SnapdealNotificationDisplay;
