import React, { useState } from 'react';

export default function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'Tous les accessoires', count: 42 },
    { id: 'audio', name: 'Audio', count: 12 },
    { id: 'protection', name: 'Protection', count: 8 },
    { id: 'charging', name: 'Chargement', count: 7 },
    { id: 'smartwatch', name: 'Montres connectées', count: 6 },
    { id: 'gaming', name: 'Gaming', count: 5 },
    { id: 'photo', name: 'Photo & Vidéo', count: 4 }
  ];

  const accessories = [
    {
      id: 1,
      name: "AirPods Pro 2",
      category: "audio",
      price: 279,
      originalPrice: 299,
      image: "/images/airpods-pro2.jpg",
      brand: "Apple",
      features: ["Annulation active bruit", "Audio Spatial", "MagSafe", "30h batterie"],
      rating: 4.8,
      reviews: 156,
      badge: "Best-seller",
      stock: 25,
      compatibility: ["iPhone", "iPad", "Mac"]
    },
    {
      id: 2,
      name: "Galaxy Watch 6 Classic",
      category: "smartwatch",
      price: 349,
      originalPrice: 399,
      image: "/images/galaxy-watch6.jpg",
      brand: "Samsung",
      features: ["Écran 1.5\"", "Batterie 40h", "ECG", "Tournante bezel"],
      rating: 4.5,
      reviews: 89,
      badge: "Nouveau",
      stock: 12,
      compatibility: ["Android", "Samsung"]
    },
    {
      id: 3,
      name: "Coque iPhone 15 Pro - Silicone",
      category: "protection",
      price: 49,
      originalPrice: 59,
      image: "/images/coque-iphone15.jpg",
      brand: "Apple",
      features: ["Protection chocs", "Finition silicone", "MagSafe", "Anti-trace"],
      rating: 4.3,
      reviews: 203,
      badge: "MagSafe",
      stock: 45,
      compatibility: ["iPhone 15 Pro"]
    },
    {
      id: 4,
      name: "Chargeur MagSafe Double",
      category: "charging",
      price: 129,
      originalPrice: 149,
      image: "/images/charger-magsafe.jpg",
      brand: "Apple",
      features: ["Charge rapide 15W", "2 appareils", "LED indicateur", "Compact"],
      rating: 4.6,
      reviews: 78,
      badge: "Rapide",
      stock: 18,
      compatibility: ["iPhone", "AirPods", "Apple Watch"]
    },
    {
      id: 5,
      name: "JBL Flip 6",
      category: "audio",
      price: 129,
      originalPrice: 149,
      image: "/images/jbl-flip6.jpg",
      brand: "JBL",
      features: ["Son puissant 30W", "Résistance IP67", "12h batterie", "PartyBoost"],
      rating: 4.7,
      reviews: 134,
      badge: "Waterproof",
      stock: 15,
      compatibility: ["Bluetooth Universel"]
    },
    {
      id: 6,
      name: "Manette DualSense Edge",
      category: "gaming",
      price: 239,
      originalPrice: 269,
      image: "/images/dualsense-edge.jpg",
      brand: "Sony",
      features: ["Contrôles personnalisables", "Batterie longue durée", "Retour haptique", "Profiles"],
      rating: 4.8,
      reviews: 67,
      badge: "Pro Gaming",
      stock: 8,
      compatibility: ["PS5", "PC"]
    },
    {
      id: 7,
      name: "Protection Écran Verre Trempé",
      category: "protection",
      price: 29,
      originalPrice: 39,
      image: "/images/protection-ecran.jpg",
      brand: "ESR",
      features: ["Dureté 9H", "Anti-reflet", "Facile installation", "Pack de 2"],
      rating: 4.4,
      reviews: 312,
      badge: "Anti-rayure",
      stock: 60,
      compatibility: ["Tous modèles"]
    },
    {
      id: 8,
      name: "Câble USB-C 240W",
      category: "charging",
      price: 39,
      originalPrice: 49,
      image: "/images/cable-usbc.jpg",
      brand: "Anker",
      features: ["Charge rapide 240W", "Données 40Gbps", "Nylon tressé", "2m longueur"],
      rating: 4.5,
      reviews: 189,
      badge: "Ultra Rapide",
      stock: 35,
      compatibility: ["USB-C Universel"]
    },
    {
      id: 9,
      name: "Micro Rode Wireless Pro",
      category: "photo",
      price: 449,
      originalPrice: 499,
      image: "/images/micro-rode.jpg",
      brand: "Rode",
      features: ["Audio 24-bit", "Portée 200m", "Enregistrement sécurité", "Kit complet"],
      rating: 4.9,
      reviews: 45,
      badge: "Professionnel",
      stock: 6,
      compatibility: ["Smartphones", "Caméras"]
    },
    {
      id: 10,
      name: "Station Charge 3-en-1",
      category: "charging",
      price: 159,
      originalPrice: 179,
      image: "/images/station-charge.jpg",
      brand: "Belkin",
      features: ["Charge iPhone/AirPods/Apple Watch", "Design compact", "LED indicateur", "Certifié MFi"],
      rating: 4.6,
      reviews: 92,
      badge: "3-en-1",
      stock: 14,
      compatibility: ["Apple Ecosystem"]
    },
    {
      id: 11,
      name: "Casque Gaming Arctis Nova 7",
      category: "gaming",
      price: 199,
      originalPrice: 229,
      image: "/images/casque-gaming.jpg",
      brand: "SteelSeries",
      features: ["Son spatial 360°", "Batterie 38h", "Micro rétractable", "Multi-plateforme"],
      rating: 4.7,
      reviews: 78,
      badge: "Wireless",
      stock: 10,
      compatibility: ["PS5", "Xbox", "PC", "Mobile"]
    },
    {
      id: 12,
      name: "Objectif Moment pour iPhone",
      category: "photo",
      price: 149,
      originalPrice: 179,
      image: "/images/objectif-moment.jpg",
      brand: "Moment",
      features: ["Grand angle 18mm", "Lentilles premium", "Montage facile", "Sac inclus"],
      rating: 4.4,
      reviews: 56,
      badge: "Pro Photo",
      stock: 7,
      compatibility: ["iPhone 12-15"]
    }
  ];

  const filteredAccessories = accessories.filter(accessory => 
    selectedCategory === 'all' || accessory.category === selectedCategory
  );

  const sortedAccessories = [...filteredAccessories].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best-seller': return 'bg-orange-500';
      case 'Nouveau': return 'bg-green-500';
      case 'MagSafe': return 'bg-blue-500';
      case 'Rapide': return 'bg-cyan-500';
      case 'Waterproof': return 'bg-blue-600';
      case 'Pro Gaming': return 'bg-purple-500';
      case 'Anti-rayure': return 'bg-gray-500';
      case 'Ultra Rapide': return 'bg-red-500';
      case 'Professionnel': return 'bg-indigo-500';
      case '3-en-1': return 'bg-pink-500';
      case 'Wireless': return 'bg-teal-500';
      case 'Pro Photo': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-4">
            Accessoires Premium
          </h1>
          <p className="font-mono text-gray-300 text-xl max-w-2xl mx-auto">
            Complétez votre expérience numérique avec nos accessoires soigneusement 
            sélectionnés pour leur qualité, design et performance.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Sorting */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`font-mono px-4 py-2 rounded-2xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-gray-300">Trier par :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-mono bg-white/5 border border-white/10 rounded-2xl px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-all duration-300"
            >
              <option value="name">Nom</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Meilleures notes</option>
            </select>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedAccessories.map(accessory => (
            <div
              key={accessory.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl"
            >
              {/* Accessory Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(accessory.badge)}`}>
                  {accessory.badge}
                </span>
              </div>

              {/* Stock Indicator */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  accessory.stock > 20 ? 'bg-green-500/20 text-green-400' :
                  accessory.stock > 10 ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
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
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Accessory Info */}
              <div className="space-y-3">
                {/* Brand and Name */}
                <div>
                  <div className="font-mono text-gray-400 text-sm uppercase tracking-wide">
                    {accessory.brand}
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                    {accessory.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(accessory.rating)}</div>
                  <span className="font-mono text-gray-400 text-sm">
                    ({accessory.rating}) • {accessory.reviews} avis
                  </span>
                </div>

                {/* Compatibility */}
                <div className="flex flex-wrap gap-1">
                  {accessory.compatibility.map((device, index) => (
                    <span
                      key={index}
                      className="font-mono text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {device}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {accessory.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="font-mono text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                  {accessory.features.length > 2 && (
                    <div className="font-mono text-purple-400 text-sm">
                      +{accessory.features.length - 2} fonctionnalités
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="font-mono text-2xl font-bold text-white">
                      {accessory.price}€
                    </div>
                    {accessory.originalPrice > accessory.price && (
                      <div className="font-mono text-gray-500 line-through text-sm">
                        {accessory.originalPrice}€
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-mono font-semibold py-2 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="font-mono bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105">
            Voir plus d'accessoires
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <div className="text-4xl mb-4">🚚</div>
            <div className="font-mono text-xl font-bold text-white mb-2">Livraison Gratuite</div>
            <div className="font-mono text-gray-300">Dès 50€ d'achat</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <div className="text-4xl mb-4">↩️</div>
            <div className="font-mono text-xl font-bold text-white mb-2">Retours Faciles</div>
            <div className="font-mono text-gray-300">30 jours pour changer d'avis</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <div className="text-4xl mb-4">🛡️</div>
            <div className="font-mono text-xl font-bold text-white mb-2">Garantie 2 Ans</div>
            <div className="font-mono text-gray-300">Sur tous nos accessoires</div>
          </div>
        </div>
      </div>
    </main>
  );
}