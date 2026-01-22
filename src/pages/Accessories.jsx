import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  ShoppingCart,
  Star,
  Shield,
  Truck,
  RefreshCw,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Accessories() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [showPrices, setShowPrices] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    {
      id: "all",
      name: t('catAllAccessories'),
      count: 68,
      icon: "🛍️",
    },
    { id: "audio", name: t('catAudio'), count: 18, icon: "🎧" },
    { id: "protection", name: t('catProtection'), count: 12, icon: "🛡️" },
    { id: "charging", name: t('catCharging'), count: 15, icon: "⚡" },
    { id: "smartwatch", name: t('catSmartwatch'), count: 10, icon: "⌚" },
    { id: "gaming", name: t('catPhotoVideo'), count: 8, icon: "🎮" },
    { id: "photo", name: t('catPhotoVideo'), count: 7, icon: "📸" },
    { id: "smart-home", name: t('catSmartHome'), count: 5, icon: "🏠" },
  ];

  const accessories = [
    // Audio
    {
      id: 1,
      name: "AirPods Pro 2",
      category: "audio",
      price: "****",
      originalPrice: "****",
      image: "/images/airpods-pro2.jpg",
      brand: "Apple",
      features: [
        t('featANCActive'),
        t('featSpatial'),
        t('featMagSafe'),
        t('feat30h'),
      ],
      rating: 4.8,
      reviews: 156,
      badge: 'badgeBestseller',
      stock: 25,
      compatibility: ["iPhone", "iPad", "Mac"],
      color: t('colorWhite'),
    },
    {
      id: 2,
      name: "JBL Flip 6",
      category: "audio",
      price: "***",
      originalPrice: "****",
      image: "/images/jbl-flip6.jpg",
      brand: "JBL",
      features: [
        t('featSound30W'),
        t('featIP67'),
        t('feat12h'),
        t('featPartyBoost'),
      ],
      rating: 4.7,
      reviews: 134,
      badge: 'badgeWaterproof',
      stock: 15,
      compatibility: ["Bluetooth Universel"],
      color: t('colorBlack'),
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "audio",
      price: "****",
      originalPrice: "****",
      image: "/images/sony-xm5.jpg",
      brand: "Sony",
      features: [t('featANCPro'), t('feat30h'), t('featHiRes'), t('featVoiceAssist')],
      rating: 4.9,
      reviews: 234,
      badge: 'badgeTopQuality',
      stock: 8,
      compatibility: ["Bluetooth", "NFC"],
      color: t('colorBlack'),
    },
    {
      id: 4,
      name: "Beats Studio Pro",
      category: "audio",
      price: "****",
      originalPrice: "****",
      image: "/images/beats-studio-pro.jpg",
      brand: "Beats",
      features: [
        t('featANCActive'),
        t('featSpatial'),
        t('featBatt40h'),
        t('featAppleAndroid'),
      ],
      rating: 4.6,
      reviews: 89,
      badge: 'badgeNew',
      stock: 12,
      compatibility: ["iOS", "Android"],
      color: t('colorBlue'),
    },

    // Protection
    {
      id: 5,
      name: "Coque iPhone 15 Pro - Silicone",
      category: "protection",
      price: "***",
      originalPrice: "****",
      image: "/images/coque-iphone15.jpg",
      brand: "Apple",
      features: [
        t('featShockProtect'),
        t('featSiliconeFinish'),
        t('featMagSafe'),
        t('featAntiTrace'),
      ],
      rating: 4.3,
      reviews: 203,
      badge: 'badgeMagSafe',
      stock: 45,
      compatibility: ["iPhone 15 Pro"],
      color: t('colorSilicone'),
    },
    {
      id: 6,
      name: "Protection Écran Verre Trempé",
      category: "protection",
      price: "***",
      originalPrice: "****",
      image: "/images/protection-ecran.jpg",
      brand: "ESR",
      features: [
        t('featHard9H'),
        t('featAntiReflect'),
        t('featEasyInstall'),
        t('featPack2'),
      ],
      rating: 4.4,
      reviews: 312,
      badge: 'badgeScratchResist',
      stock: 60,
      compatibility: ["Tous modèles"],
      color: t('colorTransparent'),
    },
    {
      id: 7,
      name: "Étui iPad Pro - Clavier",
      category: "protection",
      price: "****",
      originalPrice: "****",
      image: "/images/etui-ipad.jpg",
      brand: "Logitech",
      features: [
        t('featBacklitKey'),
        t('featTrackpad'),
        t('featProtect360'),
        t('featFoldable'),
      ],
      rating: 4.7,
      reviews: 67,
      badge: 'badgeKeyboard',
      stock: 14,
      compatibility: ['iPad Pro 12.9"'],
      color: t('colorGrey'),
    },

    // Chargement
    {
      id: 8,
      name: "Chargeur MagSafe Double",
      category: "charging",
      price: "***",
      originalPrice: "****",
      image: "/images/charger-magsafe.jpg",
      brand: "Apple",
      features: [
        t('featFastCharge15W'),
        t('feat2Devices'),
        t('featLEDInd'),
        t('featCompact'),
      ],
      rating: 4.6,
      reviews: 78,
      badge: 'badgeFast',
      stock: 18,
      compatibility: ["iPhone", "AirPods", "Apple Watch"],
      color: t('colorWhite'),
    },
    {
      id: 9,
      name: "Câble USB-C 240W",
      category: "charging",
      price: "***",
      originalPrice: "****",
      image: "/images/cable-usbc.jpg",
      brand: "Anker",
      features: [
        t('featFastCharge240W'),
        t('featData40Gbps'),
        t('featNylon'),
        t('feat2m'),
      ],
      rating: 4.5,
      reviews: 189,
      badge: 'badgeUltraFast',
      stock: 35,
      compatibility: ["USB-C Universel"],
      color: t('colorBlack'),
    },
    {
      id: 10,
      name: "Station Charge 3-en-1",
      category: "charging",
      price: "****",
      originalPrice: "****",
      image: "/images/station-charge.jpg",
      brand: "Belkin",
      features: [
        t('feat3in1Charge'),
        t('featCompact'),
        t('featLEDInd'),
        t('featMFi'),
      ],
      rating: 4.6,
      reviews: 92,
      badge: 'badge3in1',
      stock: 14,
      compatibility: ["Apple Ecosystem"],
      color: t('colorWhite'),
    },
    {
      id: 11,
      name: "Batterie Externe 20.000mAh",
      category: "charging",
      price: "***",
      originalPrice: "****",
      image: "/images/batterie-externe.jpg",
      brand: "Anker",
      features: [t('featPD30W'), t('feat3Ports'), t('featLCD'), t('featFastCharge15W')],
      rating: 4.7,
      reviews: 145,
      badge: 'badgeHighCap',
      stock: 22,
      compatibility: ["Tous appareils"],
      color: t('colorBlack'),
    },

    // Smartwatch
    {
      id: 12,
      name: "Galaxy Watch 6 Classic",
      category: "smartwatch",
      price: "***",
      originalPrice: "****",
      image: "/images/galaxy-watch6.jpg",
      brand: "Samsung",
      features: [t('featScreen15Watch'), t('featBatt40h'), t('featECG'), t('featRotatingBezel')],
      rating: 4.5,
      reviews: 89,
      badge: 'badgeNew',
      stock: 12,
      compatibility: ["Android", "Samsung"],
      color: t('colorBlack'),
    },
    {
      id: 13,
      name: "Apple Watch Series 9",
      category: "smartwatch",
      price: "****",
      originalPrice: "****",
      image: "/images/apple-watch9.jpg",
      brand: "Apple",
      features: [t('featAlwaysOn'), t('featECG'), t('featGPS'), t('feat18h')],
      rating: 4.8,
      reviews: 189,
      badge: 'badgeBestseller',
      stock: 18,
      compatibility: ["iPhone"],
      color: t('colorMidnight'),
    },
    {
      id: 14,
      name: "Huawei Watch GT 4",
      category: "smartwatch",
      price: "***",
      originalPrice: "****",
      image: "/images/huawei-watch.jpg",
      brand: "Huawei",
      features: [
        t('featBatt14d'),
        t('featSportModes'),
        t('featSpO2'),
        t('featPremDesign'),
      ],
      rating: 4.4,
      reviews: 76,
      badge: 'badgeAutonomy',
      stock: 9,
      compatibility: ["Android", "iOS"],
      color: t('colorSilver'),
    },

    // Gaming
    {
      id: 15,
      name: "Manette DualSense Edge",
      category: "gaming",
      price: "***",
      originalPrice: "****",
      image: "/images/dualsense-edge.jpg",
      brand: "Sony",
      features: [
        t('featCustomControls'),
        t('featHaptic'),
        t('featProfiles'),
        t('featBatt38h'), // Approximation if missing specific key
      ],
      rating: 4.8,
      reviews: 67,
      badge: 'badgeProGaming',
      stock: 8,
      compatibility: ["PS5", "PC"],
      color: t('colorBlackWhite'),
    },
    {
      id: 16,
      name: "Casque Gaming Arctis Nova 7",
      category: "gaming",
      price: "****",
      originalPrice: "****",
      image: "/images/casque-gaming.jpg",
      brand: "SteelSeries",
      features: [
        t('featSpatial360'),
        t('featBatt38h'),
        t('featRetractMic'),
        t('featMultiPlat'),
      ],
      rating: 4.7,
      reviews: 78,
      badge: 'badgeWireless',
      stock: 10,
      compatibility: ["PS5", "Xbox", "PC", "Mobile"],
      color: t('colorBlack'),
    },
    {
      id: 17,
      name: "Clavier Mécanique Gaming",
      category: "gaming",
      price: "***",
      originalPrice: "****",
      image: "/images/clavier-gaming.jpg",
      brand: "Razer",
      features: [
        t('featMechSwitch'),
        t('featRGB'),
        t('featAntiGhost'),
        t('featWristRest'),
      ],
      rating: 4.6,
      reviews: 112,
      badge: 'badgeRGB',
      stock: 15,
      compatibility: ["PC", "Mac", "PS5"],
      color: t('colorBlack'),
    },

    // Photo & Vidéo
    {
      id: 18,
      name: "Micro Rode Wireless Pro",
      category: "photo",
      price: "***",
      originalPrice: "****",
      image: "/images/micro-rode.jpg",
      brand: "Rode",
      features: [
        t('featAudio24bit'),
        t('featRange200m'),
        t('featSafetyRec'),
        t('featCompleteKit'),
      ],
      rating: 4.9,
      reviews: 45,
      badge: 'badgePro',
      stock: 6,
      compatibility: ["Smartphones", "Caméras"],
      color: t('colorBlack'),
    },
    {
      id: 19,
      name: "Objectif Moment pour iPhone",
      category: "photo",
      price: "***",
      originalPrice: "****",
      image: "/images/objectif-moments1.jpg",
      brand: "Moment",
      features: [
        t('featWide18mm'),
        t('featPremLens'),
        t('featEasyMount'),
        t('featBagIncl'),
      ],
      rating: 4.4,
      reviews: 56,
      badge: 'badgeProPhoto',
      stock: 7,
      compatibility: ["iPhone 12-15"],
      color: t('colorBlack'),
    },
    {
      id: 20,
      name: "Gimbal DJI OM 6",
      category: "photo",
      price: "***",
      originalPrice: "****",
      image: "/images/gimbal-dji.jpg",
      brand: "DJI",
      features: [
        t('featStab3Axis'),
        t('featAutoExt'),
        t('featTrackMode'),
        t('featCompactFold'),
      ],
      rating: 4.8,
      reviews: 134,
      badge: 'badgeStabilization',
      stock: 11,
      compatibility: ["Smartphones"],
      color: t('colorGrey'),
    },

    // Maison Connectée
    {
      id: 21,
      name: "Google Nest Mini",
      category: "smart-home",
      price: "***",
      originalPrice: "****",
      image: "/images/google-nest.jpg",
      brand: "Google",
      features: [
        t('featGoogleAssist'),
        t('featBetterSound'),
        t('featHomeControl'),
        t('featTextileDesign'),
      ],
      rating: 4.5,
      reviews: 89,
      badge: 'badgeVoiceAssist',
      stock: 25,
      compatibility: ["Google Home", "Android", "iOS"],
      color: t('colorCharcoal'),
    },
    {
      id: 22,
      name: "Philips Hue Starter Kit",
      category: "smart-home",
      price: "****",
      originalPrice: "****",
      image: "/images/philips-hue.jpg",
      brand: "Philips",
      features: [
        t('feat3Bulbs'),
        t('featBridgeIncl'),
        t('feat16MColor'),
        t('featVoiceControl'),
      ],
      rating: 4.7,
      reviews: 156,
      badge: 'badgeSmartLight',
      stock: 8,
      compatibility: ["Apple HomeKit", "Google Home", "Alexa"],
      color: t('colorWhite'),
    },
  ];

  const filteredAccessories = accessories.filter(
    (accessory) =>
      selectedCategory === "all" || accessory.category === selectedCategory,
  );

  const sortedAccessories = [...filteredAccessories].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-600 text-gray-600"
        }`}
      />
    ));
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "badgeBestseller":
        return "bg-red-700 text-white";
      case "badgeNew":
        return "bg-red-500 text-white";
      case "badgeMagSafe":
        return "bg-red-400 text-white";
      case "badgeFast":
        return "bg-red-600 text-white";
      case "badgeWaterproof":
        return "bg-blue-600 text-white";
      case "badgeProGaming":
        return "bg-purple-600 text-white";
      case "badgeScratchResist":
        return "bg-gray-600 text-white";
      case "badgeUltraFast":
        return "bg-red-500 text-white";
      case "badgePro":
        return "bg-gray-700 text-white";
      case "badge3in1":
        return "bg-red-500 text-white";
      case "badgeWireless":
        return "bg-blue-500 text-white";
      case "badgeProPhoto":
        return "bg-gray-800 text-white";
      case "badgeTopQuality":
        return "bg-red-700 text-white";
      case "badgeKeyboard":
        return "bg-blue-700 text-white";
      case "badgeHighCap":
        return "bg-red-600 text-white";
      case "badgeAutonomy":
        return "bg-green-600 text-white";
      case "badgeRGB":
        return "bg-purple-700 text-white";
      case "badgeStabilization":
        return "bg-blue-600 text-white";
      case "badgeVoiceAssist":
        return "bg-green-500 text-white";
      case "badgeSmartLight":
        return "bg-yellow-600 text-white";
      default:
        return "bg-red-300 text-white";
    }
  };

  const formatPrice = (price) => {
    if (!showPrices) return "**** Htg";
    return `${price} Htg`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-red-900/30 to-red-800/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-4">
            {t('accHeroTitle')}
          </h1>
          <p className="font-mono text-red-100 text-xl max-w-2xl mx-auto">
            {t('accHeroDesc')}
          </p>

          {/* Price Toggle */}
          <div className="mt-6 flex justify-center items-center gap-3">
            <button
              onClick={() => setShowPrices(!showPrices)}
              className="font-mono flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl text-white transition-all duration-300"
            >
              {showPrices ? <EyeOff size={20} /> : <Eye size={20} />}
              {showPrices ? t('hidePrices') : t('showPrices')}
            </button>
            <div className="text-red-300 font-mono text-sm">
              {showPrices ? t('pricesVisible') : t('pricesHidden')}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`font-mono px-4 py-3 rounded-2xl transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white shadow-lg transform scale-105"
                    : "bg-white/10 text-red-100 hover:bg-white/20 hover:text-white"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-white/20"
                      : "bg-white/10"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-red-100">{t('sortLabel')}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-mono bg-white/10 border border-white/30 rounded-2xl px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-all duration-300"
            >
              <option value="name">{t('sortName')}</option>
              <option value="price-asc">{t('sortPriceAsc')}</option>
              <option value="price-desc">{t('sortPriceDesc')}</option>
              <option value="rating">{t('sortRating')}</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="font-mono text-red-300 mb-6">
          {sortedAccessories.length} {t('foundAccessories')}
          {selectedCategory !== "all" &&
            ` ${t('inCategory')} ${categories.find((c) => c.id === selectedCategory)?.name}`}
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedAccessories.map((accessory) => (
            <div
              key={accessory.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 p-6 transition-all duration-500 hover:bg-white/15 hover:border-red-200 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProduct(accessory.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Accessory Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(accessory.badge)}`}
                >
                  {t(accessory.badge)}
                </span>
              </div>

              {/* Stock Indicator */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    accessory.stock > 20
                      ? "bg-green-500/20 text-green-400"
                      : accessory.stock > 10
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {accessory.stock} {t('stockLabel')}
                </span>
              </div>

              {/* Accessory Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-2xl">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent transition-opacity duration-300 ${
                    hoveredProduct === accessory.id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                ></div>
              </div>

              {/* Accessory Info */}
              <div className="space-y-3">
                {/* Brand and Name */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-red-300/70 text-sm uppercase tracking-wide">
                      {accessory.brand}
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white">
                      {accessory.color}
                    </span>
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300 line-clamp-2 mt-2">
                    {accessory.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(accessory.rating)}</div>
                  <span className="font-mono text-red-300/70 text-sm">
                    {accessory.rating.toFixed(1)} • {accessory.reviews} {t('reviews')}
                  </span>
                </div>

                {/* Compatibility */}
                <div className="flex flex-wrap gap-1">
                  {accessory.compatibility.map((device, index) => (
                    <span
                      key={index}
                      className="font-mono text-xs bg-white/10 text-red-100 px-2 py-1 rounded-full"
                    >
                      {device}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {accessory.features.slice(0, 3).map((feature, index) => (
                    <div
                      key={index}
                      className="font-mono text-red-100 text-sm flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                  {accessory.features.length > 3 && (
                    <div className="font-mono text-red-300 text-sm">
                      +{accessory.features.length - 3} {t('featuresCount')}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div>
                    <div className="font-mono text-2xl font-bold text-white">
                      {formatPrice(accessory.price)}
                    </div>
                    {showPrices &&
                      accessory.originalPrice > accessory.price && (
                        <div className="font-mono text-red-300/50 line-through text-sm">
                          {accessory.originalPrice} Htg
                        </div>
                      )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`flex items-center gap-2 font-mono font-semibold py-2 px-4 rounded-2xl transition-all duration-300 transform ${
                      showPrices
                        ? "bg-red-600 hover:bg-red-700 text-white hover:scale-105"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    } shadow-lg`}
                  >
                    <ShoppingCart size={18} />
                    {showPrices ? t('add') : t('discover')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="font-mono bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-red-200 flex items-center gap-2 mx-auto">
            {t('viewMoreAccessories')}
            <span className="text-xl">↓</span>
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
          <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:border-red-200 hover:border transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Truck className="text-red-400" size={32} />
            </div>
            <div className="font-mono text-xl font-bold text-white mb-2">
              Livraison Gratuite
            </div>
            <div className="font-mono text-red-100 text-sm">
              Dès 50€ d'achat en Haïti
            </div>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:border-red-200 hover:border transition-all duration-300">
            <div className="flex justify-center mb-4">
              <RefreshCw className="text-red-400" size={32} />
            </div>
            <div className="font-mono text-xl font-bold text-white mb-2">
              Retours Faciles
            </div>
            <div className="font-mono text-red-100 text-sm">
              30 jours satisfait ou remboursé
            </div>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:border-red-200 hover:border transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Shield className="text-red-400" size={32} />
            </div>
            <div className="font-mono text-xl font-bold text-white mb-2">
              Garantie 2 Ans
            </div>
            <div className="font-mono text-red-100 text-sm">
              Sur tous nos accessoires
            </div>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:border-red-200 hover:border transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Star className="text-red-400" size={32} />
            </div>
            <div className="font-mono text-xl font-bold text-white mb-2">
              Certifié Original
            </div>
            <div className="font-mono text-red-100 text-sm">
              Produits 100% authentiques
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
