import { useState, useEffect } from "react";

const ProductsPreviewSection = ({ lang: propLang }) => {

const [lang, setLang] = useState('fr');

  // Cookie helper
  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  };

  useEffect(() => {
    // Read language from cookie or use prop
    const saved = getCookie('mc_lang');
    if (saved === 'fr' || saved === 'en') {
      setLang(saved);
    } else if (propLang === 'fr' || propLang === 'en') {
      setLang(propLang);
    }
  }, [propLang]);

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Smartphone",
      price: "**** htg",
      originalPrice: "*** htg",
      image: "/images/michel-cell-iphone-15.jpg",
      features: [
        'Écran 6.1" Super Retina XDR',
        "Chip A17 Pro",
        "Camera 48MP",
        "Titanium",
      ],
      badge: "Nouveau",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Smartphone",
      price: "**** htg",
      originalPrice: "*** htg",
      image: "/images/gs24.jpg",
      features: [
        'Écran 6.2" Dynamic AMOLED',
        "Snapdragon 8 Gen 3",
        "AI Integration",
        "7 ans updates",
      ],
      badge: "IA Intégrée",
      rating: 4.6,
    },
    {
      id: 3,
      name: "PS5 Slim",
      category: "Console Gaming",
      price: "**** htg",
      originalPrice: "*** htg",
      image: "/images/michel-cell-ps5.jpg",
      features: ["1TB SSD", "4K 120Hz", "Ray Tracing", "DualSense"],
      badge: "Promo",
      rating: 4.9,
    },
    {
      id: 4,
      name: "MacBook Air M3",
      category: "Laptop",
      price: "**** htg",
      originalPrice: "*** htg",
      image: "/images/michel-cell-macbook_air-m4.jpg",
      features: ["Chip M3", '15" Liquid Retina', "18h autonomie", "8GB RAM"],
      badge: "Écologie",
      rating: 4.7,
    },
    {
      id: 5,
      name: "AirPods Pro 2",
      category: "Accessoires",
      price: "**** htg",
      originalPrice: "*** htg",
      image: "/images/michel-cel-air-pods.jpg",
      features: [
        "Annulation active bruit",
        "Audio Spatial",
        "MagSafe",
        "30h batterie",
      ],
      badge: "Best-seller",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Google Pixel 8",
      category: "Smartphone",
      price: "**** htg",
      originalPrice: "*** htg",
      image: "/images/michel-cell-google-pxl.jpg",
      features: ["Android 14", "Camera 50MP", "7 ans updates", "Tensor G3"],
      badge: "Android Pur",
      rating: 4.5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const slidesToShow = 3;
  const totalSlides = Math.ceil(products.length / slidesToShow);

  // Slideshow automatique
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalSlides, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

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

  const getVisibleProducts = () => {
    const startIndex = currentSlide * slidesToShow;
    return products.slice(startIndex, startIndex + slidesToShow);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden font-inter">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            { lang === 'fr' ? 'Nos Produits Phares' : 'Featured Products' }
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            { lang === 'fr' ? 'Découvrez notre sélection exclusive de produits high-tech aux meilleurs prix.' : 'Explore our exclusive selection of high-tech products at the best prices.' }
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-14 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Slide précédent"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-14 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Slide suivant"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleProducts().map((product) => (
              <div
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === "Nouveau"
                        ? "bg-green-500 text-white"
                        : product.badge === "Promo"
                        ? "bg-red-500 text-white"
                        : product.badge === "Best-seller"
                        ? "bg-orange-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProduct === product.id
                        ? "scale-110 rotate-2"
                        : "scale-100"
                    }`}
                  />
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-0" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {product.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {product.price}
                      </div>
                      <div className="text-gray-500 line-through text-sm">
                        {product.originalPrice}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-gray-400 text-sm">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Features */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      hoveredProduct === product.id
                        ? "max-h-32 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-1 mt-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div
                    className={`transition-all duration-500 ${
                      hoveredProduct === product.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      { lang === 'fr' ? 'Voir les détails' : 'View Details' }
{/* -                      Voir les détails --- IGNORE --- */}
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <button className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-5">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      { lang === 'fr' ? 'Ajouter aux favoris' : 'Add to Favorites' }
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      { lang === 'fr' ? 'Comparer' : 'Compare' }
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-transparent hover:bg-white/10 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-white/40 backdrop-blur-sm">
            <a href="/products" className="flex items-center gap-3">
              { lang === 'fr' ? 'Voir tous les produits' : 'View All Products' }
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreviewSection;
