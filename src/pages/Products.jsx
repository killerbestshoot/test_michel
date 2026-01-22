import React, { useState } from "react";
import Footer from "../components/footer";
import { useLanguage } from "../context/LanguageContext";

export default function Products() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    { id: "all", name: t('catAll'), count: 48 },
    { id: "smartphones", name: t('catSmartphones'), count: 18 },
    { id: "tablettes", name: t('catTablets'), count: 8 },
    { id: "laptops", name: t('catLaptops'), count: 6 },
    { id: "gaming", name: t('catGaming'), count: 7 },
    { id: "accessories", name: t('catAccessories'), count: 9 },
  ];

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "smartphones",
      price: "****",
      originalPrice: "****",
      image: "/images/michel-cell-iphone-15.jpg",
      brand: "Apple",
      features: [t('featScreen67'), t('featChipA17'), t('featCam48'), t('featTitanium')],
      rating: 4.8,
      reviews: 124,
      badge: t('badgeNew'),
      stock: 15,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      category: "smartphones",
      price: "****",
      originalPrice: "****",
      image: "/images/gs24.jpg",
      brand: "Samsung",
      features: [t('featScreen68'), t('featSPen'), t('featCam200'), t('featAI')],
      rating: 4.6,
      reviews: 89,
      badge: t('badgeAI'),
      stock: 8,
    },
    {
      id: 3,
      name: "MacBook Pro M3",
      category: "laptops",
      price: "****",
      originalPrice: "****",
      image: "/images/macbook-pro-m3.jpg",
      brand: "Apple",
      features: [
        t('featChipM3Pro'),
        t('featScreen14'),
        t('feat18h'),
        t('feat18GB'),
      ],
      rating: 4.9,
      reviews: 67,
      badge: t('badgePro'),
      stock: 5,
    },
    {
      id: 4,
      name: "PS5 Slim",
      category: "gaming",
      price: "****",
      originalPrice: "****",
      image: "/images/ps5-slim.jpg",
      brand: "Sony",
      features: [t('feat1TB'), t('feat4K'), t('featRayTracing'), t('featDualSense')],
      rating: 4.7,
      reviews: 203,
      badge: t('badgePromo'),
      stock: 12,
    },
    {
      id: 5,
      name: "iPad Air M2",
      category: "tablettes",
      price: "****",
      originalPrice: "****",
      image: "/images/2-ipad-air-m2.jpg",
      brand: "Apple",
      features: [t('featChipM2'), t('featScreen11'), t('featPencil'), t('feat5G')],
      rating: 4.5,
      reviews: 45,
      badge: t('badgeVersatile'),
      stock: 10,
    },
    {
      id: 6,
      name: "AirPods Pro 2",
      category: "accessories",
      price: "****",
      originalPrice: "****",
      image: "/images/airPods-black.jpg",
      brand: "Apple",
      features: [
        t('featANC'),
        t('featSpatial'),
        t('featMagSafe'),
        t('feat30h'),
      ],
      rating: 4.8,
      reviews: 156,
      badge: t('badgeBestseller'),
      stock: 25,
    },
    {
      id: 7,
      name: "Google Pixel 8 Pro",
      category: "smartphones",
      price: "****",
      originalPrice: "****",
      image: "/images/collection_pxl.jpg",
      brand: "Google",
      features: [t('featAndroid14'), t('featCam50'), t('feat7Updates'), t('featTensor')],
      rating: 4.4,
      reviews: 78,
      badge: t('badgePure'),
      stock: 7,
    },
    {
      id: 8,
      name: "Xbox Series X",
      category: "gaming",
      price: "****",
      originalPrice: "****",
      image: "/images/xbox-series-x.jpg",
      brand: "Microsoft",
      features: [t('feat1TB'), t('feat4K'), t('featGamePass'), t('featQuickResume')],
      rating: 4.6,
      reviews: 134,
      badge: t('badgeUltimate'),
      stock: 9,
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory,
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      >
        ★
      </span>
    ));
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case t('badgeNew'):
        return "bg-red-500";
      case t('badgePromo'):
        return "bg-red-600";
      case t('badgeBestseller'):
        return "bg-red-700";
      case t('badgeAI'):
        return "bg-red-400";
      case t('badgePro'):
        return "bg-red-500";
      case t('badgePure'):
        return "bg-red-600";
      case t('badgeUltimate'):
        return "bg-red-400";
      case t('badgeVersatile'):
        return "bg-red-500";
      default:
        return "bg-red-300";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-red-900/30 to-red-800/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-4">
            {t('productsHeroTitle')}
          </h1>
          <p className="font-mono text-red-100 text-xl max-w-2xl mx-auto">
            {t('productsHeroDesc')}
          </p>
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
                className={`font-mono px-4 py-2 rounded-2xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white/10 text-red-100 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 p-6 transition-all duration-500 hover:bg-white/15 hover:border-red-200 hover:scale-105 hover:shadow-2xl"
            >
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(product.badge)}`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Stock Indicator */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    product.stock > 10
                      ? "bg-red-500/20 text-red-300"
                      : product.stock > 5
                        ? "bg-red-600/20 text-red-400"
                        : "bg-red-700/20 text-red-500"
                  }`}
                >
                  {product.stock} {t('stockLabel')}
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
                  <div className="font-mono text-red-300/70 text-sm uppercase tracking-wide">
                    {product.brand}
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="font-mono text-red-300/70 text-sm">
                    ({product.rating}) • {product.reviews} {t('reviews')}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div
                      key={index}
                      className="font-mono text-red-100 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                  {product.features.length > 2 && (
                    <div className="font-mono text-red-300 text-sm">
                      +{product.features.length - 2} {t('featuresLabel')}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div>
                    <div className="font-mono text-2xl font-bold text-white">
                      {product.price}Htg
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="font-mono text-red-300/50 line-through text-sm">
                        {product.originalPrice}Htg
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className="bg-red-600 hover:bg-red-700 text-white font-mono font-semibold py-2 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {t('viewButton')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="font-mono bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-red-200">
            {t('loadMore')}
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-300 font-mono mb-2">
              48+
            </div>
            <div className="font-mono text-red-100">{t('statAvailable')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 font-mono mb-2">
              4.7/5
            </div>
            <div className="font-mono text-red-100">{t('statRating')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 font-mono mb-2">
              24h
            </div>
            <div className="font-mono text-red-100">{t('statDelivery')}</div>
          </div>
        </div>
      </div>
    </main>
    // <Footer />
  );
}
