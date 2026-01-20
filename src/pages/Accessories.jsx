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

export default function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [showPrices, setShowPrices] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    {
      id: "all",
      name: "Tous les accessoires",
      count: 68,
      icon: "🛍️",
    },
    { id: "audio", name: "Audio", count: 18, icon: "🎧" },
    { id: "protection", name: "Protection", count: 12, icon: "🛡️" },
    { id: "charging", name: "Chargement", count: 15, icon: "⚡" },
    { id: "smartwatch", name: "Montres connectées", count: 10, icon: "⌚" },
    { id: "gaming", name: "Gaming", count: 8, icon: "🎮" },
    { id: "photo", name: "Photo & Vidéo", count: 7, icon: "📸" },
    { id: "smart-home", name: "Maison connectée", count: 5, icon: "🏠" },
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
        "Annulation active bruit",
        "Audio Spatial",
        "MagSafe",
        "30h batterie",
      ],
      rating: 4.8,
      reviews: 156,
      badge: "Best-seller",
      stock: 25,
      compatibility: ["iPhone", "iPad", "Mac"],
      color: "Blanc",
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
        "Son puissant 30W",
        "Résistance IP67",
        "12h batterie",
        "PartyBoost",
      ],
      rating: 4.7,
      reviews: 134,
      badge: "Waterproof",
      stock: 15,
      compatibility: ["Bluetooth Universel"],
      color: "Noir",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "audio",
      price: "****",
      originalPrice: "****",
      image: "/images/sony-xm5.jpg",
      brand: "Sony",
      features: ["ANC Pro", "30h batterie", "Hi-Res Audio", "Assistant vocal"],
      rating: 4.9,
      reviews: 234,
      badge: "Top Qualité",
      stock: 8,
      compatibility: ["Bluetooth", "NFC"],
      color: "Noir",
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
        "ANC Active",
        "Spatial Audio",
        "40h batterie",
        "Apple/Android",
      ],
      rating: 4.6,
      reviews: 89,
      badge: "Nouveau",
      stock: 12,
      compatibility: ["iOS", "Android"],
      color: "Bleu",
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
        "Protection chocs",
        "Finition silicone",
        "MagSafe",
        "Anti-trace",
      ],
      rating: 4.3,
      reviews: 203,
      badge: "MagSafe",
      stock: 45,
      compatibility: ["iPhone 15 Pro"],
      color: "Silicone",
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
        "Dureté 9H",
        "Anti-reflet",
        "Facile installation",
        "Pack de 2",
      ],
      rating: 4.4,
      reviews: 312,
      badge: "Anti-rayure",
      stock: 60,
      compatibility: ["Tous modèles"],
      color: "Transparent",
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
        "Clavier rétro-éclairé",
        "Trackpad",
        "Protection 360°",
        "Pliable",
      ],
      rating: 4.7,
      reviews: 67,
      badge: "Clavier Intégré",
      stock: 14,
      compatibility: ['iPad Pro 12.9"'],
      color: "Gris",
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
        "Charge rapide 15W",
        "2 appareils",
        "LED indicateur",
        "Compact",
      ],
      rating: 4.6,
      reviews: 78,
      badge: "Rapide",
      stock: 18,
      compatibility: ["iPhone", "AirPods", "Apple Watch"],
      color: "Blanc",
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
        "Charge rapide 240W",
        "Données 40Gbps",
        "Nylon tressé",
        "2m longueur",
      ],
      rating: 4.5,
      reviews: 189,
      badge: "Ultra Rapide",
      stock: 35,
      compatibility: ["USB-C Universel"],
      color: "Noir",
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
        "Charge iPhone/AirPods/Apple Watch",
        "Design compact",
        "LED indicateur",
        "Certifié MFi",
      ],
      rating: 4.6,
      reviews: 92,
      badge: "3-en-1",
      stock: 14,
      compatibility: ["Apple Ecosystem"],
      color: "Blanc",
    },
    {
      id: 11,
      name: "Batterie Externe 20.000mAh",
      category: "charging",
      price: "***",
      originalPrice: "****",
      image: "/images/batterie-externe.jpg",
      brand: "Anker",
      features: ["PD 30W", "3 ports", "LCD écran", "Recharge rapide"],
      rating: 4.7,
      reviews: 145,
      badge: "Haute Capacité",
      stock: 22,
      compatibility: ["Tous appareils"],
      color: "Noir",
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
      features: ['Écran 1.5"', "Batterie 40h", "ECG", "Tournante bezel"],
      rating: 4.5,
      reviews: 89,
      badge: "Nouveau",
      stock: 12,
      compatibility: ["Android", "Samsung"],
      color: "Noir",
    },
    {
      id: 13,
      name: "Apple Watch Series 9",
      category: "smartwatch",
      price: "****",
      originalPrice: "****",
      image: "/images/apple-watch9.jpg",
      brand: "Apple",
      features: ["Écran Always-On", "ECG", "GPS", "18h batterie"],
      rating: 4.8,
      reviews: 189,
      badge: "Best-seller",
      stock: 18,
      compatibility: ["iPhone"],
      color: "Midnight",
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
        "14 jours batterie",
        "100+ modes sport",
        "SpO2",
        "Design premium",
      ],
      rating: 4.4,
      reviews: 76,
      badge: "Autonomie",
      stock: 9,
      compatibility: ["Android", "iOS"],
      color: "Argent",
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
        "Contrôles personnalisables",
        "Batterie longue durée",
        "Retour haptique",
        "Profiles",
      ],
      rating: 4.8,
      reviews: 67,
      badge: "Pro Gaming",
      stock: 8,
      compatibility: ["PS5", "PC"],
      color: "Noir/Blanc",
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
        "Son spatial 360°",
        "Batterie 38h",
        "Micro rétractable",
        "Multi-plateforme",
      ],
      rating: 4.7,
      reviews: 78,
      badge: "Wireless",
      stock: 10,
      compatibility: ["PS5", "Xbox", "PC", "Mobile"],
      color: "Noir",
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
        "Switches mécaniques",
        "RGB personnalisable",
        "Anti-ghosting",
        "Wrist rest",
      ],
      rating: 4.6,
      reviews: 112,
      badge: "RGB",
      stock: 15,
      compatibility: ["PC", "Mac", "PS5"],
      color: "Noir",
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
        "Audio 24-bit",
        "Portée 200m",
        "Enregistrement sécurité",
        "Kit complet",
      ],
      rating: 4.9,
      reviews: 45,
      badge: "Professionnel",
      stock: 6,
      compatibility: ["Smartphones", "Caméras"],
      color: "Noir",
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
        "Grand angle 18mm",
        "Lentilles premium",
        "Montage facile",
        "Sac inclus",
      ],
      rating: 4.4,
      reviews: 56,
      badge: "Pro Photo",
      stock: 7,
      compatibility: ["iPhone 12-15"],
      color: "Noir",
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
        "Stabilisation 3 axes",
        "Extension automatique",
        "Mode suivi",
        "Pliage compact",
      ],
      rating: 4.8,
      reviews: 134,
      badge: "Stabilisation",
      stock: 11,
      compatibility: ["Smartphones"],
      color: "Gris",
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
        "Assistant Google",
        "Son amélioré",
        "Contrôle domotique",
        "Design textile",
      ],
      rating: 4.5,
      reviews: 89,
      badge: "Assistant Vocal",
      stock: 25,
      compatibility: ["Google Home", "Android", "iOS"],
      color: "Gris Charbon",
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
        "3 ampoules LED",
        "Bridge inclus",
        "16M couleurs",
        "Contrôle vocal",
      ],
      rating: 4.7,
      reviews: 156,
      badge: "Éclairage Smart",
      stock: 8,
      compatibility: ["Apple HomeKit", "Google Home", "Alexa"],
      color: "Blanc",
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
      case "Best-seller":
        return "bg-red-700 text-white";
      case "Nouveau":
        return "bg-red-500 text-white";
      case "MagSafe":
        return "bg-red-400 text-white";
      case "Rapide":
        return "bg-red-600 text-white";
      case "Waterproof":
        return "bg-blue-600 text-white";
      case "Pro Gaming":
        return "bg-purple-600 text-white";
      case "Anti-rayure":
        return "bg-gray-600 text-white";
      case "Ultra Rapide":
        return "bg-red-500 text-white";
      case "Professionnel":
        return "bg-gray-700 text-white";
      case "3-en-1":
        return "bg-red-500 text-white";
      case "Wireless":
        return "bg-blue-500 text-white";
      case "Pro Photo":
        return "bg-gray-800 text-white";
      case "Top Qualité":
        return "bg-red-700 text-white";
      case "Clavier Intégré":
        return "bg-blue-700 text-white";
      case "Haute Capacité":
        return "bg-red-600 text-white";
      case "Autonomie":
        return "bg-green-600 text-white";
      case "RGB":
        return "bg-purple-700 text-white";
      case "Stabilisation":
        return "bg-blue-600 text-white";
      case "Assistant Vocal":
        return "bg-green-500 text-white";
      case "Éclairage Smart":
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
            Accessoires Premium
          </h1>
          <p className="font-mono text-red-100 text-xl max-w-2xl mx-auto">
            Complétez votre expérience numérique avec nos accessoires
            soigneusement sélectionnés pour leur qualité, design et performance.
          </p>

          {/* Price Toggle */}
          <div className="mt-6 flex justify-center items-center gap-3">
            <button
              onClick={() => setShowPrices(!showPrices)}
              className="font-mono flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl text-white transition-all duration-300"
            >
              {showPrices ? <EyeOff size={20} /> : <Eye size={20} />}
              {showPrices ? "Cacher les prix" : "Afficher les prix"}
            </button>
            <div className="text-red-300 font-mono text-sm">
              {showPrices ? "Prix visibles" : "Prix masqués"}
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
            <span className="font-mono text-red-100">Trier par :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-mono bg-white/10 border border-white/30 rounded-2xl px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-all duration-300"
            >
              <option value="name">Nom (A-Z)</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Meilleures notes</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="font-mono text-red-300 mb-6">
          {sortedAccessories.length} accessoires trouvés
          {selectedCategory !== "all" &&
            ` dans ${categories.find((c) => c.id === selectedCategory)?.name}`}
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
                  {accessory.badge}
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
                  {accessory.stock} en stock
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
                    {accessory.rating.toFixed(1)} • {accessory.reviews} avis
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
                      +{accessory.features.length - 3} fonctionnalités
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
                    {showPrices ? "Ajouter" : "Découvrir"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="font-mono bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-red-200 flex items-center gap-2 mx-auto">
            Voir plus d'accessoires
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
