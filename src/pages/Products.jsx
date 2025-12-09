import React, { useState } from 'react';
import Footer from '../components/footer';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'Tous les produits', count: 48 },
    { id: 'smartphones', name: 'Smartphones', count: 18 },
    { id: 'tablettes', name: 'Tablettes', count: 8 },
    { id: 'laptops', name: 'Laptops', count: 6 },
    { id: 'gaming', name: 'Gaming', count: 7 },
    { id: 'accessories', name: 'Accessoires', count: 9 }
  ];

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "smartphones",
      price: 1299,
      originalPrice: 1399,
      image: "/images/michel-cell-iphone-15.jpg",
      brand: "Apple",
      features: ["Écran 6.7\"", "Chip A17 Pro", "Camera 48MP", "Titanium"],
      rating: 4.8,
      reviews: 124,
      badge: "Nouveau",
      stock: 15
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      category: "smartphones",
      price: 999,
      originalPrice: 1199,
      image: "/images/gs24.jpg",
      brand: "Samsung",
      features: ["Écran 6.8\"", "S Pen", "Camera 200MP", "AI Integration"],
      rating: 4.6,
      reviews: 89,
      badge: "IA Intégrée",
      stock: 8
    },
    {
      id: 3,
      name: "MacBook Pro M3",
      category: "laptops",
      price: 2299,
      originalPrice: 2499,
      image: "/images/macbook-pro-m3.jpg",
      brand: "Apple",
      features: ["Chip M3 Pro", "14\" Liquid Retina", "18h autonomie", "18GB RAM"],
      rating: 4.9,
      reviews: 67,
      badge: "Professionnel",
      stock: 5
    },
    {
      id: 4,
      name: "PS5 Slim",
      category: "gaming",
      price: 449,
      originalPrice: 499,
      image: "/images/ps5-slim.jpg",
      brand: "Sony",
      features: ["1TB SSD", "4K 120Hz", "Ray Tracing", "DualSense"],
      rating: 4.7,
      reviews: 203,
      badge: "Promo",
      stock: 12
    },
    {
      id: 5,
      name: "iPad Air M2",
      category: "tablettes",
      price: 799,
      originalPrice: 899,
      image: "/images/2-ipad-air-m2.jpg",
      brand: "Apple",
      features: ["Chip M2", "11\" Liquid Retina", "Apple Pencil", "5G"],
      rating: 4.5,
      reviews: 45,
      badge: "Polyvalent",
      stock: 10
    },
    {
      id: 6,
      name: "AirPods Pro 2",
      category: "accessories",
      price: 279,
      originalPrice: 299,
      image: "/images/airPods-black.jpg",
      brand: "Apple",
      features: ["Annulation bruit", "Audio Spatial", "MagSafe", "30h batterie"],
      rating: 4.8,
      reviews: 156,
      badge: "Best-seller",
      stock: 25
    },
    {
      id: 7,
      name: "Google Pixel 8 Pro",
      category: "smartphones",
      price: 899,
      originalPrice: 999,
      image: "/images/collection_pxl.jpg",
      brand: "Google",
      features: ["Android 14", "Camera 50MP", "7 ans updates", "Tensor G3"],
      rating: 4.4,
      reviews: 78,
      badge: "Android Pur",
      stock: 7
    },
    {
      id: 8,
      name: "Xbox Series X",
      category: "gaming",
      price: 499,
      originalPrice: 549,
      image: "/images/xbox-series-x.jpg",
      brand: "Microsoft",
      features: ["1TB SSD", "4K 120Hz", "Game Pass", "Quick Resume"],
      rating: 4.6,
      reviews: 134,
      badge: "Ultimate",
      stock: 9
    }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
      case 'Nouveau': return 'bg-green-500';
      case 'Promo': return 'bg-red-500';
      case 'Best-seller': return 'bg-orange-500';
      case 'IA Intégrée': return 'bg-purple-500';
      case 'Professionnel': return 'bg-blue-500';
      case 'Android Pur': return 'bg-green-600';
      case 'Ultimate': return 'bg-cyan-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-4">
            Notre Collection
          </h1>
          <p className="font-mono text-gray-300 text-xl max-w-2xl mx-auto">
            Découvrez notre sélection premium de produits high-tech, soigneusement 
            sélectionnés pour leur qualité et performance exceptionnelle.
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
                    ? 'bg-blue-600 text-white shadow-lg'
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
              className="font-mono bg-white/5 border border-white/10 rounded-2xl px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
            >
              <option value="name">Nom</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Meilleures notes</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl"
            >
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </span>
              </div>

              {/* Stock Indicator */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  product.stock > 10 ? 'bg-green-500/20 text-green-400' :
                  product.stock > 5 ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {product.stock} en stock
                </span>
              </div>

              {/* Product Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Brand and Name */}
                <div>
                  <div className="font-mono text-gray-400 text-sm uppercase tracking-wide">
                    {product.brand}
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="font-mono text-gray-400 text-sm">
                    ({product.rating}) • {product.reviews} avis
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="font-mono text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                  {product.features.length > 2 && (
                    <div className="font-mono text-blue-400 text-sm">
                      +{product.features.length - 2} fonctionnalités
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="font-mono text-2xl font-bold text-white">
                      {product.price}Htg
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="font-mono text-gray-500 line-through text-sm">
                        {product.originalPrice}Htg
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-mono font-semibold py-2 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Voir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="font-mono bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105">
            Charger plus de produits
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 font-mono mb-2">48+</div>
            <div className="font-mono text-gray-300">Produits disponibles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 font-mono mb-2">4.7/5</div>
            <div className="font-mono text-gray-300">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 font-mono mb-2">24h</div>
            <div className="font-mono text-gray-300">Livraison express</div>
          </div>
        </div>
      </div>
    </main>
    // <Footer /> 
  );
}