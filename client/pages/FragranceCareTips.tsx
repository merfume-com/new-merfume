import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Droplets, 
  Heart, 
  Sparkles, 
  Sun, 
  Clock,
  Wind,
  Flower,
  Citrus,
  Cloud,
  Zap,
  Target,
  Flame,
  Leaf,
  Gem,
  Award,
  ChevronRight,
  Check,
  ShoppingBag,
  Users,
  Package,
  Bookmark,
  ThumbsUp,
  Thermometer,
  ShieldCheck,
  BookOpen,
  Calendar,
  MessageCircle,
  X,
  Bell,
  User,
  Ear,
  Hand,
  Armchair,
  Footprints,
  CircleUser,
  Circle,
  Activity,
  Move,
  MoveHorizontal,
  PersonStanding,
  ChevronDown
} from "lucide-react";
import useFCMNotifications from "@/hooks/useFCMNotifications";

// Simple icon components
const Layers = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const TreePine = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export default function FragranceCareTips() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showTips, setShowTips] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");
  const [showCRT, setShowCRT] = useState(true);
  const [decodedText, setDecodedText] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 50, y: 50 });
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  // FCM Notifications
  const { isInitialized, isSupported, initializeFCM } = useFCMNotifications();
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const decodedRef = useRef<HTMLHeadingElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Refs for scroll animation sections
  const storageRef = useRef<HTMLDivElement>(null);
  const pulsePointsRef = useRef<HTMLDivElement>(null);
  const techniquesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const longevityRef = useRef<HTMLDivElement>(null);
  const seasonalRef = useRef<HTMLDivElement>(null);
  const careTipsRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);
  const moodRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Custom cursor effect
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Advanced Intersection Observer with multiple thresholds
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.2, 0.5, 0.8, 1],
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target;
        const ratio = entry.intersectionRatio;
        
        // Add different classes based on intersection ratio
        if (ratio > 0.8) {
          target.classList.add('section-fully-visible');
          target.classList.remove('section-partially-visible');
        } else if (ratio > 0.2) {
          target.classList.add('section-partially-visible');
          target.classList.remove('section-fully-visible');
        }
        
        if (entry.isIntersecting) {
          target.classList.add('scroll-visible');
          
          // Add parallax effect to background
          const bg = target.querySelector('.parallax-bg');
          if (bg) {
            bg.classList.add('parallax-active');
          }
          
          // Set active section for navigation
          const sectionId = target.getAttribute('data-section');
          if (sectionId) setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = [
      { ref: storageRef, id: 'storage' },
      { ref: pulsePointsRef, id: 'pulse-points' },
      { ref: techniquesRef, id: 'techniques' },
      { ref: timelineRef, id: 'timeline' },
      { ref: longevityRef, id: 'longevity' },
      { ref: seasonalRef, id: 'seasonal' },
      { ref: careTipsRef, id: 'care-tips' },
      { ref: ingredientsRef, id: 'ingredients' },
      { ref: moodRef, id: 'mood' },
      { ref: statsRef, id: 'stats' },
      { ref: ctaRef, id: 'cta' }
    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', id);
        ref.current.classList.add('scroll-hidden', 'section-transition');
        observer.observe(ref.current);
      }
    });

    // Observe individual cards
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach(card => {
      card.classList.add('card-hidden');
      observer.observe(card);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  // Show notification prompt after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSupported && !isInitialized) {
        setShowNotificationPrompt(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isSupported, isInitialized]);

  const handleEnableNotifications = async () => {
    await initializeFCM();
    setShowNotificationPrompt(false);
  };

  // Pulse points data with enhanced content
  const pulsePoints = [
  { 
    id: "neck", 
    label: "Neck", 
    description: "Body heat enhances diffusion", 
    icon: <User className="h-5 w-5" />,
    tip: "Spray lightly on both sides of the neck. The warmth helps project the scent throughout the day.",
    bestFor: "Daytime wear, professional settings"
  },
  { 
    id: "ears", 
    label: "Behind Ears", 
    description: "Warm area for scent projection", 
    icon: <Ear className="h-5 w-5" />,
    tip: "Apply behind each earlobe. This area stays warm and creates a beautiful scent bubble.",
    bestFor: "Dates, evening events"
  },
  { 
    id: "wrists", 
    label: "Inner Wrists", 
    description: "Creates subtle scent trail", 
    icon: <Hand className="h-5 w-5" />,
    tip: "Spray and let dry naturally. Never rub wrists together as it crushes the fragrance molecules.",
    bestFor: "All occasions, easy reapplication"
  },
  { 
    id: "elbows", 
    label: "Inner Elbows", 
    description: "Protected from friction", 
    icon: <Armchair className="h-5 w-5" />,
    tip: "The inner elbow area is protected from washing and friction, making scent last longer.",
    bestFor: "Long events, weddings"
  },
  { 
    id: "knees", 
    label: "Behind Knees", 
    description: "Creates rising scent cloud", 
    icon: <PersonStanding className="h-5 w-5" />,
    tip: "Heat rises, so applying behind knees creates an ascending scent trail as you move.",
    bestFor: "Summer, outdoor events"
  },
  { 
    id: "chest", 
    label: "Chest", 
    description: "Close to heart for intimacy", 
    icon: <Heart className="h-5 w-5" />,
    tip: "Apply to bare chest before dressing. Body heat releases the scent throughout the day.",
    bestFor: "Intimate occasions, winter"
  },
  { 
    id: "ankles", 
    label: "Ankles", 
    description: "Subtle scent discovery", 
    icon: <Footprints className="h-5 w-5" />,
    tip: "A surprising spot that creates an intriguing scent trail as you walk.",
    bestFor: "Summer dresses, skirts"
  }
];

  // Storage tips
  const storageTips = [
    {
      title: "Temperature Control",
      desc: "Store between 15-20°C (59-68°F). Avoid temperature fluctuations.",
      icon: <Thermometer className="h-5 w-5" />
    },
    {
      title: "Light Protection",
      desc: "Keep away from direct sunlight and strong artificial light.",
      icon: <Sun className="h-5 w-5" />
    },
    {
      title: "Humidity Management",
      desc: "Avoid bathrooms. Use a dedicated drawer or cabinet.",
      icon: <Droplets className="h-5 w-5" />
    },
    {
      title: "Original Packaging",
      desc: "Keep in original boxes to protect from light and temperature changes.",
      icon: <Package className="h-5 w-5" />
    }
  ];

  // Application techniques
  const applicationTechniques = [
    {
      title: "The Classic Spray",
      desc: "Hold bottle 6-8 inches away and spray directly on pulse points.",
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "The Mist Walk-Through",
      desc: "Spray in front of you and walk through the mist for even distribution.",
      icon: <Wind className="h-5 w-5" />
    },
    {
      title: "Layering Method",
      desc: "Use matching body lotion before perfume for longer lasting scent.",
      icon: <Layers className="h-5 w-5" />
    },
    {
      title: "Hair Mist",
      desc: "Spray on hairbrush, not directly on hair, to avoid alcohol damage.",
      icon: <Sparkles className="h-5 w-5" />
    }
  ];

  // Fragrance longevity tips
  const longevityTips = [
    "Moisturize skin before application",
    "Apply to pulse points where blood flows close to skin",
    "Don't rub wrists together - it breaks down molecules",
    "Layer with matching scented products",
    "Store properly to prevent degradation",
    "Reapply strategically throughout the day"
  ];

  // Seasonal recommendations
  const seasonalRecs = [
    {
      season: "Spring",
      scents: ["Floral", "Green", "Light Citrus"],
      tips: "Fresh, blooming notes complement the season"
    },
    {
      season: "Summer",
      scents: ["Citrus", "Aquatic", "Light Fruity"],
      tips: "Light, refreshing scents that won't overwhelm in heat"
    },
    {
      season: "Fall",
      scents: ["Woody", "Spicy", "Amber"],
      tips: "Warm, comforting notes as weather cools"
    },
    {
      season: "Winter",
      scents: ["Oriental", "Gourmand", "Leather"],
      tips: "Rich, intense fragrances that last in cold weather"
    }
  ];

  // Timeline phases with enhanced content
  const timelinePhases = [
    { 
      time: "0-15 MINUTES", 
      title: "TOP NOTES", 
      desc: "The initial impression - bright and volatile molecules that evaporate quickly", 
      notes: ["Citrus", "Bergamot", "Green Notes", "Light Fruits"],
      experience: "First spray experience - fresh and immediate",
      duration: "15-30 minutes"
    },
    { 
      time: "15-120 MINUTES", 
      title: "HEART NOTES", 
      desc: "The core character - the true essence of the fragrance emerges", 
      notes: ["Jasmine", "Rose", "Spices", "Lavender"],
      experience: "The fragrance's personality reveals itself",
      duration: "2-4 hours"
    },
    { 
      time: "2-8 HOURS", 
      title: "BASE NOTES", 
      desc: "The foundation - rich, deep molecules that create lasting impression", 
      notes: ["Sandalwood", "Musk", "Vanilla", "Amber"],
      experience: "The memory-making phase - intimate and close to skin",
      duration: "4-12 hours"
    }
  ];

  // Care tips with enhanced content
  const careTips = [
    {
      title: "Storage Mastery",
      icon: <Package className="h-6 w-6" />,
      tips: ["Keep in cool, dark place (15-20°C)", "Avoid bathroom humidity", "Store upright in original box", "Keep away from windows"]
    },
    {
      title: "Seasonal Selection",
      icon: <Thermometer className="h-6 w-6" />,
      tips: ["Light scents for summer heat", "Warm spicy notes for winter", "Fresh florals for spring", "Woody scents for autumn"]
    },
    {
      title: "Longevity Boosters",
      icon: <Clock className="h-6 w-6" />,
      tips: ["Apply to moisturized skin", "Layer with matching lotion", "Reapply at pulse points", "Use unscented moisturizer base"]
    },
    {
      title: "Scent Layering",
      icon: <Layers className="h-6 w-6" />,
      tips: ["Start with lightest scent first", "Use complementary notes", "Test combinations on paper", "Build intensity gradually"]
    },
    {
      title: "Travel Safety",
      icon: <ShieldCheck className="h-6 w-6" />,
      tips: ["Use travel atomizers (under 100ml)", "Keep in original box", "Never in checked baggage", "Protect from pressure changes"]
    },
    {
      title: "Collection Management",
      icon: <Bookmark className="h-6 w-6" />,
      tips: ["Rotate fragrances seasonally", "Keep inventory with notes", "Note purchase dates", "Use within 3-5 years"]
    }
  ];

  // Ingredients with enhanced info
  const ingredients = [
    { name: "Sandalwood", icon: <TreePine className="h-6 w-6" />, desc: "Earthy, creamy, warm", type: "Woody Base", longevity: "Very Long (6-8 hrs)" },
    { name: "Jasmine", icon: <Flower className="h-6 w-6" />, desc: "Rich, floral, romantic", type: "Floral Heart", longevity: "Medium (3-5 hrs)" },
    { name: "Bergamot", icon: <Citrus className="h-6 w-6" />, desc: "Bright, citrus, fresh", type: "Citrus Top", longevity: "Short (1-2 hrs)" },
    { name: "Vanilla", icon: <Gem className="h-6 w-6" />, desc: "Sweet, comforting, warm", type: "Gourmand Base", longevity: "Very Long (6-8 hrs)" },
    { name: "Patchouli", icon: <Leaf className="h-6 w-6" />, desc: "Earthy, exotic, deep", type: "Woody Base", longevity: "Long (5-7 hrs)" },
    { name: "Amber", icon: <Sparkles className="h-6 w-6" />, desc: "Warm, resinous, sweet", type: "Amber Base", longevity: "Very Long (6-8 hrs)" },
    { name: "Musk", icon: <Droplets className="h-6 w-6" />, desc: "Animalic, sensual, clean", type: "Musky Base", longevity: "Long (5-7 hrs)" },
    { name: "Oud", icon: <Flame className="h-6 w-6" />, desc: "Woody, complex, rich", type: "Woody Base", longevity: "Very Long (8-10 hrs)" }
  ];

  // Mood options with enhanced content
  const moodOptions = [
    { 
      mood: "CONFIDENCE", 
      icon: <Zap className="h-6 w-6" />, 
      desc: "For important meetings",
      notes: ["Leather", "Woody", "Amber"],
      strength: "Medium-Strong",
      occasions: ["Business meetings", "Presentations", "Interviews"]
    },
    { 
      mood: "ROMANCE", 
      icon: <Heart className="h-6 w-6" />, 
      desc: "Evening special occasions",
      notes: ["Rose", "Vanilla", "Musk"],
      strength: "Medium",
      occasions: ["Date nights", "Anniversaries", "Weddings"]
    },
    { 
      mood: "RELAXATION", 
      icon: <Cloud className="h-6 w-6" />, 
      desc: "Weekend wind down",
      notes: ["Lavender", "Chamomile", "Sandalwood"],
      strength: "Light-Medium",
      occasions: ["Yoga", "Spa days", "Evening at home"]
    },
    { 
      mood: "ENERGY", 
      icon: <Flame className="h-6 w-6" />, 
      desc: "Morning motivation",
      notes: ["Citrus", "Ginger", "Mint"],
      strength: "Strong",
      occasions: ["Gym", "Morning routines", "Active days"]
    }
  ];

  // Typewriter effect
  useEffect(() => {
    const text = "Discover professional techniques to enhance, preserve, and master your fragrance collection.";
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // CRT boot effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCRT(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Decoded effect for title
  useEffect(() => {
    const originalText = "& MASTERY GUIDE";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let iterations = 0;
    let currentText = originalText;

    if (decodedRef.current) {
      const interval = setInterval(() => {
        if (iterations < 10) {
          currentText = originalText
            .split("")
            .map((char, index) => {
              if (index < iterations) return originalText[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
          setDecodedText(currentText);
          iterations++;
        } else {
          setDecodedText(originalText);
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  // Glitch effect on hover
  const handleGlitchHover = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 500);
  };

  // Magnetic pull effect
  const handleMagneticMove = (e: React.MouseEvent, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / 10;
    const deltaY = (y - centerY) / 10;
    
    element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMagneticLeave = (element: HTMLElement) => {
    element.style.transform = 'translate(0, 0)';
  };

  // Spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlightPosition({ x, y });
    }
  };

  const handlePulsePointClick = (point: any) => {
    setShowTips(point.label);
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(selectedMood === mood ? null : mood);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={mainContainerRef} className="min-h-screen bg-background overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className={`custom-cursor fixed w-8 h-8 pointer-events-none z-50 transition-transform duration-100 ${cursorVariant === 'hover' ? 'scale-150' : 'scale-100'}`}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease'
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-gold/50 bg-gold/5 backdrop-blur-sm"></div>
      </div>

      <Navigation />

      {/* Progress Bar with gradient */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div className="relative w-full h-full bg-gold/10">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-gold/50"></div>
          </div>
        </div>
      </div>

      {/* Floating Progress Indicator */}
      <div className="fixed bottom-8 left-8 z-40 hidden lg:block">
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(212, 175, 55, 0.1)"
              strokeWidth="4"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8941f" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-gold">{Math.round(scrollProgress)}%</span>
          </div>
        </div>
      </div>

      {/* Quick Navigation Dots with labels */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[
            { id: 'storage', label: 'Storage' },
            { id: 'pulse-points', label: 'Pulse Points' },
            { id: 'techniques', label: 'Techniques' },
            { id: 'timeline', label: 'Timeline' },
            { id: 'longevity', label: 'Longevity' },
            { id: 'seasonal', label: 'Seasonal' },
            { id: 'care-tips', label: 'Care Tips' },
            { id: 'ingredients', label: 'Ingredients' },
            { id: 'mood', label: 'Mood' },
            { id: 'stats', label: 'Stats' },
            { id: 'cta', label: 'CTA' }
          ].map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  activeSection === item.id 
                    ? 'bg-gold scale-150 shadow-lg shadow-gold/50' 
                    : 'bg-gold/30 hover:bg-gold/50'
                }`}
              />
              <span className={`absolute right-full mr-3 px-2 py-1 bg-gold text-luxury-black text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                activeSection === item.id ? 'opacity-100' : ''
              }`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-40 p-3 bg-gold text-luxury-black rounded-full shadow-lg transition-all duration-500 hover:scale-110 ${
          scrollProgress > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronDown className="h-5 w-5 transform rotate-180" />
      </button>

      {/* Notification Prompt */}
      {showNotificationPrompt && (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Bell className="h-6 w-6 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Enable Notifications
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  Get notified about new fragrance care tips, exclusive guides, and expert advice.
                </p>
                <div className="flex gap-2 mt-3">
                  <Button
                    size="sm"
                    onClick={handleEnableNotifications}
                    className="bg-gold hover:bg-gold-dark text-luxury-black text-xs"
                  >
                    Enable
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowNotificationPrompt(false)}
                    className="text-xs"
                  >
                    Later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification Status Indicator */}
      {isInitialized && isSupported && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-full shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold">Notifications Active</span>
          </div>
        </div>
      )}

      {/* CRT Boot Effect */}
      {showCRT && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center crt-boot">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-4 crt-text">MERFUME</div>
            <div className="text-green-500 crt-scanline">Initializing fragrance database...</div>
            <div className="text-green-500 crt-scanline">Loading expert tips...</div>
            <div className="text-green-500 crt-scanline">System ready.</div>
          </div>
        </div>
      )}

      {/* Hero Section with Spotlight and Typewriter */}
      <section 
        id="hero"
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-accent/20 min-h-screen flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        style={{
          background: `radial-gradient(circle at ${spotlightPosition.x}% ${spotlightPosition.y}%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWY0ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0yLTYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Bounce In Effect */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gold/20 bg-white/80 backdrop-blur-sm animate-bounce-in">
              <Award className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold-dark">EXPERT GUIDANCE</span>
            </div>
            
            {/* Logo with floating animation */}
            <div className="mb-8 floating-logo">
              <img
                src="https://cdn.builder.io/api/v1/assets/df01e345c2d146ff8c27b0570e833c11/merfume-logo-74e35c?format=webp&width=800"
                alt="Merfume - Luxury Perfumes"
                className="h-24 md:h-32 lg:h-36 w-auto mx-auto drop-shadow-lg"
              />
            </div>
            
            {/* Decoded Effect */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 relative">
              <span className="block">Fragrance Care</span>
              <span 
                ref={decodedRef}
                className="block text-gold bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent pb-2"
                onMouseEnter={handleGlitchHover}
              >
                {decodedText || "& MASTERY GUIDE"}
              </span>
              
              {/* Glitch Effect */}
              {glitchActive && (
                <div className="absolute inset-0 glitch-layer">
                  <span className="block text-gold">Fragrance Care</span>
                  <span className="block text-gold glitch-text" data-text="& MASTERY GUIDE">
                    & MASTERY GUIDE
                  </span>
                </div>
              )}
            </h1>
            
            {/* Typewriter Effect */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 h-20 typewriter-container">
              <span className="typewriter-cursor">{typedText}</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Magnetic Pull Button */}
              <button
                className="magnetic-button"
                onMouseMove={(e) => handleMagneticMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMagneticLeave(e.currentTarget)}
              >
                <Button className="bg-gold hover:bg-gold-dark text-luxury-black px-8 py-4 text-lg rounded-lg w-full group">
                  <BookOpen className="mr-2 h-5 w-5" />
                  START LEARNING
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </button>
              
              <Link to="/store">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-luxury-black px-8 py-4 text-lg rounded-lg">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  SHOP FRAGRANCES
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Quick Storage Tips - 3D Flip Cards */}
      <section 
        id="storage"
        ref={storageRef}
        className="py-16 bg-card scroll-section sticky-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {storageTips.map((tip, i) => (
              <div 
                key={i}
                className="group perspective-1000"
              >
                <div className="relative preserve-3d transition-all duration-500 group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="backface-hidden p-6 bg-gradient-to-br from-cream to-white rounded-lg border border-gold/20 text-center">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="text-gold">{tip.icon}</div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                    <p className="text-xs text-muted-foreground">{tip.desc}</p>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 p-6 bg-gold text-luxury-black rounded-lg border border-gold text-center">
                    <div className="h-full flex items-center justify-center">
                      <p className="text-sm font-semibold">Expert Recommended</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pulse Points Section with Reveal Animation */}
      <section 
        id="pulse-points"
        ref={pulsePointsRef}
        className="py-20 bg-background scroll-section relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-text">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic <span className="text-gold">Pulse Points</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apply fragrance to these key areas for optimal projection and longevity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pulse Points List with Staggered Reveal */}
            <div className="space-y-3">
              {pulsePoints.map((point, index) => (
                <button
                  key={point.id}
                  onClick={() => handlePulsePointClick(point)}
                  className={`w-full text-left p-4 rounded-lg border transition-all animate-card ${
                    showTips === point.label 
                      ? 'border-gold bg-gradient-to-r from-gold/10 to-transparent' 
                      : 'border-border/50 hover:border-gold/30 hover:bg-gold/5'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-xl">{point.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{point.label}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gold/50" />
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Point Details with Split Reveal */}
            {showTips && (
              <div className="bg-gradient-to-br from-cream to-white rounded-xl p-8 border border-gold/20 split-reveal">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    <span className="text-gold">Application Tips</span>
                  </h3>
                  <button
                    onClick={() => setShowTips(null)}
                    className="p-2 hover:bg-gold/10 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-gold" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-white rounded-lg border border-gold/10 slide-in-left">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      How to apply:
                    </h4>
                    <p className="text-muted-foreground">
                      {pulsePoints.find(p => p.label === showTips)?.tip || 
                       "Spray 6-8 inches away from skin. Let it dry naturally - don't rub!"}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-gold/10 slide-in-right">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-gold" />
                      Best for:
                    </h4>
                    <p className="text-muted-foreground">
                      {pulsePoints.find(p => p.label === showTips)?.bestFor || "All occasions"}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gold/10 to-transparent p-4 rounded-lg border border-gold/20 scale-in">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold text-gold">Pro Tip:</span> Apply after moisturizing for better longevity
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Techniques - Morphing Cards */}
      <section 
        id="techniques"
        ref={techniquesRef}
        className="py-16 bg-card scroll-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Application <span className="text-gold">Techniques</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applicationTechniques.map((tech, i) => (
              <div 
                key={i}
                className="group relative h-48 animate-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-cream rounded-xl border border-gold/20 p-6 text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-all">
                    <div className="text-gold group-hover:scale-110 transition-transform">{tech.icon}</div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{tech.title}</h3>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Parallax and Sticky Effect */}
      <section 
        id="timeline"
        ref={timelineRef}
        className="py-20 bg-background relative overflow-hidden scroll-section sticky-container"
      >
        <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sticky-title">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fragrance <span className="text-gold">Evolution</span> Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understand how your scent develops throughout the day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {timelinePhases.map((phase, i) => (
              <div 
                key={i} 
                className="group relative animate-card hover:-translate-y-2 transition-all duration-500"
                style={{ 
                  transitionDelay: `${i * 0.15}s` 
                }}
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gold/5 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                
                <div className="relative bg-gradient-to-br from-white to-cream border border-gold/20 rounded-xl p-6 ink-bleed-card">
                  <div className="mb-4">
                    <div className="text-sm text-gold-dark font-semibold mb-2">{phase.time}</div>
                    <div className="h-1.5 w-full bg-gold/10 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-gold-dark to-gold rounded wave-color" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{phase.desc}</p>
                  <p className="text-xs text-gold mb-2">{phase.experience}</p>
                  <p className="text-xs text-muted-foreground mb-4">Duration: {phase.duration}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {phase.notes.map((note, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white border border-gold/20 rounded-full text-xs text-foreground hover:bg-gold/5 transition-all">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Longevity Tips - Binary Decoded Effect with Floating Animation */}
      <section 
        id="longevity"
        ref={longevityRef}
        className="py-16 bg-card scroll-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Longevity <span className="text-gold">Boosters</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {longevityTips.map((tip, i) => (
              <div 
                key={i}
                className="animate-card bg-gradient-to-br from-white to-cream p-4 rounded-lg border border-gold/20 binary-decoded relative hover:shadow-xl transition-all hover:-translate-y-1"
                data-binary={tip}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-md animate-ping"></div>
                  </div>
                  <span className="text-sm text-foreground">{tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Recommendations - Wavy Cards with Rotating Background */}
      <section 
        id="seasonal"
        ref={seasonalRef}
        className="py-16 bg-background scroll-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Seasonal <span className="text-gold">Scent Guide</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seasonalRecs.map((season, i) => (
              <div 
                key={i}
                className="animate-card group relative overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Rotating background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative wavy-card p-6 bg-gradient-to-br from-cream to-white rounded-xl border border-gold/20 hover:shadow-xl transition-all">
                  <h3 className="font-bold text-xl text-gold mb-3">{season.season}</h3>
                  <div className="space-y-2 mb-3">
                    {season.scents.map((scent, idx) => (
                      <span key={idx} className="block text-sm text-foreground">{scent}</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{season.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Tips Grid with Ink Bleed and 3D Tilt */}
      <section 
        id="care-tips"
        ref={careTipsRef}
        className="py-20 bg-card scroll-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional <span className="text-gold">Care Tips</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential knowledge for maintaining your fragrance collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careTips.map((tip, i) => (
              <div 
                key={i} 
                className="animate-card group perspective-1000"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative preserve-3d transition-all duration-500 group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="backface-hidden bg-gradient-to-br from-white to-cream border border-gold/20 rounded-xl p-6">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <div className="text-gold">{tip.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{tip.title}</h3>
                    <ul className="space-y-2">
                      {tip.tips.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gold text-luxury-black rounded-xl p-6 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="h-8 w-8 mx-auto mb-3" />
                      <p className="text-sm font-semibold">Expert Approved</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Guide with Magnetic Pull and Floating Particles */}
      <section 
        id="ingredients"
        ref={ingredientsRef}
        className="py-20 bg-background scroll-section relative"
      >
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Essential <span className="text-gold">Ingredients</span> Guide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understand the building blocks of fine fragrance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ingredients.map((ingredient, i) => (
              <div 
                key={i} 
                className="animate-card bg-gradient-to-br from-white to-cream border border-gold/20 rounded-xl p-4 text-center magnetic-card hover:shadow-xl transition-all"
                onMouseMove={(e) => handleMagneticMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMagneticLeave(e.currentTarget)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-gold">{ingredient.icon}</div>
                </div>
                <h4 className="font-bold text-foreground mb-1">{ingredient.name}</h4>
                <div className="text-xs text-gold mb-1">{ingredient.type}</div>
                <div className="text-xs text-muted-foreground mb-1">{ingredient.desc}</div>
                <div className="text-xs text-gold/70">{ingredient.longevity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mood-Based Selection with Glowing Cards */}
      <section 
        id="mood"
        ref={moodRef}
        className="py-20 bg-card scroll-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mood-Based <span className="text-gold">Selection</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose scents that complement your emotional state
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {moodOptions.map((item, index) => (
              <button
                key={item.mood}
                onClick={() => handleMoodSelect(item.mood)}
                className={`animate-card group relative ${
                  selectedMood === item.mood ? 'selected-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glowing effect */}
                <div className={`absolute inset-0 bg-gold/20 rounded-xl blur-xl transition-opacity duration-500 ${
                  selectedMood === item.mood ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>
                
                <div className={`relative bg-gradient-to-br from-white to-cream border-2 rounded-xl p-6 text-center transition-all ${
                  selectedMood === item.mood 
                    ? 'border-gold shadow-lg' 
                    : 'border-gold/20 hover:border-gold/50'
                }`}>
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <div className="text-gold">{item.icon}</div>
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.mood}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                  <div className="text-xs text-gold font-semibold">{item.strength}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Mood Recommendation with Split Reveal */}
          {selectedMood && (
            <div className="bg-gradient-to-br from-cream to-white border border-gold/20 rounded-xl p-8 split-reveal">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Recommended for: <span className="text-gold">{selectedMood}</span>
                </h3>
                <button
                  onClick={() => setSelectedMood(null)}
                  className="p-2 hover:bg-gold/10 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gold" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3 slide-in-left">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-gold" />
                    Scent Families
                  </h4>
                  <div className="space-y-2">
                    {moodOptions.find(m => m.mood === selectedMood)?.notes.map((note, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg border border-gold/20 text-sm text-foreground hover:shadow-md transition-all">
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 slide-in-bottom" style={{ animationDelay: '0.2s' }}>
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Target className="h-4 w-4 text-gold" />
                    Perfect For
                  </h4>
                  <div className="space-y-2">
                    {moodOptions.find(m => m.mood === selectedMood)?.occasions.map((occasion, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg border border-gold/20 text-sm text-foreground hover:shadow-md transition-all">
                        {occasion}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 slide-in-right" style={{ animationDelay: '0.3s' }}>
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gold" />
                    Application Guide
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between bg-white p-3 rounded-lg border border-gold/20 hover:shadow-md transition-all">
                      <span className="text-sm text-muted-foreground">Strength</span>
                      <span className="text-gold font-bold">
                        {moodOptions.find(m => m.mood === selectedMood)?.strength}
                      </span>
                    </div>
                    <div className="flex justify-between bg-white p-3 rounded-lg border border-gold/20 hover:shadow-md transition-all">
                      <span className="text-sm text-muted-foreground">Sprays</span>
                      <span className="text-gold font-bold">2-3</span>
                    </div>
                    <div className="flex justify-between bg-white p-3 rounded-lg border border-gold/20 hover:shadow-md transition-all">
                      <span className="text-sm text-muted-foreground">Timing</span>
                      <span className="text-gold font-bold">30 min before</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section with Counter Animation and Scale Up */}
      <section 
        id="stats"
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-gold/10 via-accent/20 to-gold/10 scroll-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "EXPERT TIPS", value: "127", icon: <MessageCircle className="h-6 w-6" /> },
              { label: "YEARS EXPERIENCE", value: "15+", icon: <Calendar className="h-6 w-6" /> },
              { label: "SATISFACTION", value: "98.7%", icon: <ThumbsUp className="h-6 w-6" /> }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="animate-card group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gold/20 hover:shadow-xl transition-all hover:-translate-y-2"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <div className="text-gold">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gold mb-1 counter-value">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Glitch Effect and Particle Background */}
      <section 
        id="cta"
        ref={ctaRef}
        className="py-20 bg-background relative overflow-hidden scroll-section"
      >
        {/* Particle background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${10 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative glitch-trigger"
            onMouseEnter={handleGlitchHover}
          >
            Ready to Elevate Your <span className="text-gold">Fragrance Journey?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Apply these expert techniques to transform your fragrance experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/store">
              <Button className="bg-gold hover:bg-gold-dark text-luxury-black px-8 py-4 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all group">
                <ShoppingBag className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                SHOP PREMIUM SCENTS
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-luxury-black px-8 py-4 text-lg rounded-lg group">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                CONSULT EXPERT
              </Button>
            </Link>
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
                className="h-16 w-auto mb-4 brightness-110"
              />
              <p className="text-cream/80 max-w-md">
                Where expertise meets elegance. Master the art of fragrance with professional guidance.
              </p>
            </div>
            
            <div>
              <h3 className="text-gold font-semibold mb-4">GUIDE SECTIONS</h3>
              <ul className="space-y-2">
                <li><a href="#application" className="text-cream/80 hover:text-gold transition-colors">Application</a></li>
                <li><a href="#storage" className="text-cream/80 hover:text-gold transition-colors">Storage</a></li>
                <li><a href="#selection" className="text-cream/80 hover:text-gold transition-colors">Selection</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gold font-semibold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-cream/80 hover:text-gold transition-colors">Blog</Link></li>
                <li><Link to="/video-guides" className="text-cream/80 hover:text-gold transition-colors">Video Guides</Link></li>
                <li><Link to="/expert-consultation" className="text-cream/80 hover:text-gold transition-colors">Consultation</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cream/20 mt-12 pt-8 text-center">
            <p className="text-cream/60 text-sm">
              © 2024 Merfume. All guidance provided by certified fragrance experts.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        /* Custom Cursor */
        .custom-cursor {
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }

        /* Scroll Animation Styles */
        .scroll-hidden {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Section transition with depth */
        .section-transition {
          transition: opacity 1s ease, transform 1s ease, background-color 0.3s ease;
        }

        .section-fully-visible {
          background: linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.02), transparent);
        }

        /* Card animations */
        .animate-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-visible .animate-card,
        .scroll-visible.animate-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Card hidden state */
        .card-hidden {
          opacity: 0;
          transform: translateY(30px);
        }

        /* Staggered animations for children */
        .stagger-children > * {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-visible .stagger-children > * {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children > *:nth-child(1) { transition-delay: 0.1s; }
        .stagger-children > *:nth-child(2) { transition-delay: 0.2s; }
        .stagger-children > *:nth-child(3) { transition-delay: 0.3s; }
        .stagger-children > *:nth-child(4) { transition-delay: 0.4s; }

        /* Different animation directions */
        .scroll-hidden.slide-left {
          transform: translateX(-50px);
        }

        .scroll-hidden.slide-right {
          transform: translateX(50px);
        }

        .scroll-hidden.scale-in {
          transform: scale(0.8);
        }

        .scroll-visible.slide-left,
        .scroll-visible.slide-right,
        .scroll-visible.scale-in {
          transform: translateX(0) scale(1);
        }

        /* Progress bar animation */
        .progress-bar {
          transition: width 0.3s ease;
        }

        /* Smooth section transitions */
        .scroll-section {
          transition: background-color 0.3s ease;
          position: relative;
          z-index: 1;
        }

        /* Sticky section effect */
        .sticky-container {
          position: relative;
        }

        .sticky-title {
          position: sticky;
          top: 100px;
          z-index: 10;
          background: linear-gradient(to bottom, rgba(255,255,255,0.9), transparent);
          padding: 1rem 0;
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
        }

        /* Animation Keyframes */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes slideLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes waveColor {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes crtScanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes inkBleed {
          0% { filter: blur(0px); opacity: 1; }
          50% { filter: blur(2px); opacity: 0.8; }
          100% { filter: blur(0px); opacity: 1; }
        }

        @keyframes wavyBaseline {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-5px); }
          75% { transform: translateY(5px); }
        }

        @keyframes dropShatter {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          30% { transform: scale(1.2) rotate(10deg); }
          60% { transform: scale(0.9) rotate(-5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes float-particle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(15px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }

        /* Floating logo animation */
        .floating-logo {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Scroll indicator animation */
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        /* 3D Flip Card Styles */
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Split reveal animation */
        .split-reveal {
          animation: splitReveal 0.8s ease-out;
        }

        @keyframes splitReveal {
          0% { clip-path: inset(0 100% 0 0); opacity: 0; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }

        /* Slide in animations */
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }

        .slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }

        .slide-in-bottom {
          animation: slideInBottom 0.6s ease-out;
        }

        .scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInBottom {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* Reveal text animation */
        .reveal-text {
          animation: revealText 1s ease-out;
        }

        @keyframes revealText {
          0% { clip-path: inset(0 100% 0 0); opacity: 0; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }

        /* Glowing effect for selected cards */
        .selected-glow {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.8)); }
        }

        /* Animation Classes */
        .fade-in-card {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .scale-up-card {
          animation: scaleUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .slide-left {
          animation: slideLeft 0.8s ease-out forwards;
        }

        .staggered-item {
          opacity: 0;
          animation: slideLeft 0.5s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out forwards;
        }

        .typewriter-cursor::after {
          content: '|';
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .wave-color {
          background-size: 200% 100%;
          animation: waveColor 3s infinite;
        }

        .glitch-layer {
          animation: glitch 0.3s infinite;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); }
          20% { clip: rect(47px, 9999px, 26px, 0); }
          40% { clip: rect(62px, 9999px, 73px, 0); }
          60% { clip: rect(18px, 9999px, 38px, 0); }
          80% { clip: rect(92px, 9999px, 45px, 0); }
          100% { clip: rect(23px, 9999px, 87px, 0); }
        }

        .crt-boot {
          animation: fadeOut 0.5s ease-out 2s forwards;
        }

        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }

        .crt-scanline {
          position: relative;
          overflow: hidden;
        }

        .crt-scanline::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(0, 255, 0, 0.3);
          animation: crtScanline 2s linear infinite;
        }

        .magnetic-button {
          transition: transform 0.2s ease;
        }

        .binary-decoded {
          transition: all 0.3s ease;
          position: relative;
        }

        .binary-decoded:hover::before {
          content: attr(data-binary);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          color: #00ff00;
          font-family: monospace;
          padding: 1rem;
          animation: binaryGlitch 0.5s infinite;
          z-index: 10;
          border-radius: 0.5rem;
        }

        @keyframes binaryGlitch {
          0%, 100% { opacity: 1; transform: translate(0); }
          25% { opacity: 0.5; transform: translate(-2px, 2px); }
          50% { opacity: 0.8; transform: translate(2px, -2px); }
          75% { opacity: 0.3; transform: translate(-1px, 1px); }
        }

        .ink-bleed-card {
          transition: all 0.3s ease;
        }

        .ink-bleed-active {
          animation: inkBleed 0.5s ease;
          box-shadow: 0 10px 30px -10px rgba(212, 175, 55, 0.3);
        }

        .wavy-card {
          animation: wavyBaseline 3s ease-in-out infinite;
        }

        .drop-shatter {
          animation: dropShatter 0.6s ease-out forwards;
        }

        .parallax-bg {
          transform: translateY(0);
          transition: transform 0.5s ease;
        }

        .parallax-active {
          animation: parallaxMove 10s ease infinite;
        }

        @keyframes parallaxMove {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .typewriter-delete:hover {
          animation: typewriterDelete 0.3s ease;
        }

        @keyframes typewriterDelete {
          0% { opacity: 1; }
          50% { opacity: 0.5; letter-spacing: -2px; }
          100% { opacity: 1; letter-spacing: normal; }
        }

        .magnetic-card {
          transition: transform 0.2s ease;
        }

        .glitch-trigger:hover {
          animation: glitch 0.3s infinite;
        }

        /* Counter animation */
        .counter-value {
          animation: countUp 2s ease-out;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .parallax-content {
            transform: translateY(0) !important;
          }
          
          .sticky-title {
            position: relative;
            top: 0;
            backdrop-filter: none;
            background: none;
          }
        }
      `}</style>
    </div>
  );
}
