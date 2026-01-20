import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addressComponents } from "./address_components";
const logo = "/icon/michell_cell_logo.svg";

const Footer = ({ lang: propLang }) => {
  const [lang, setLang] = useState("fr");

  // Cookie helper
  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    // Read language from cookie or use prop
    const saved = getCookie("mc_lang");
    if (saved === "fr" || saved === "en") {
      setLang(saved);
    } else if (propLang === "fr" || propLang === "en") {
      setLang(propLang);
    }
  }, [propLang]);

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Simuler l'envoi de l'email
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = {
    Produits: [
      { name: "Smartphones", href: "#" },
      { name: lang === "fr" ? "Accessoires" : "Accessories", href: "#" },
      { name: "Gaming", href: "#" },
      {
        name: lang === "fr" ? "Laptops & Tablettes" : "Laptops & Tablets",
        href: "#",
      },
      {
        name: lang === "fr" ? "Montres Connectées" : "Smartwatches",
        href: "/accessories#wearables",
      },
    ],
    Services: [
      { name: lang === "fr" ? "Réparations" : "Repairs", href: "#" },
      { name: lang === "fr" ? "Guide d'achat" : "Buying Guide", href: "#" },
      {
        name: lang === "fr" ? "Support technique" : "Technical Support",
        href: "#",
      },
      { name: lang === "fr" ? "Reconditionnement" : "Refurbishing", href: "#" },
      { name: lang === "fr" ? "Installation" : "Installation", href: "#" },
    ],
    Entreprise: [
      { name: lang === "fr" ? "Notre histoire" : "Our Story", href: "#" },
      { name: lang === "fr" ? "Carrières" : "Careers", href: "#" },
      { name: lang === "fr" ? "Presse" : "Press", href: "#" },
      { name: "Blog", href: "#" },
      { name: lang === "fr" ? "Événements" : "Events", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: "/icon/facebook-1-svgrepo-com.svg",
      href: "https://www.facebook.com/",
      color: "hover:text-red-400",
    },
    {
      name: "Instagram",
      icon: "/icon/instagram-svgrepo-com.svg",
      href: "https://www.instagram.com/",
      color: "hover:text-red-300",
    },
    {
      name: "Twitter",
      icon: "/icon/twitter-svgrepo-com.svg",
      href: "https://twitter.com/",
      color: "hover:text-red-200",
    },
  ];

  const paymentMethods = [
    { src: "/icon/visa-4-logo-svgrepo-com.svg", alt: "Visa" },
    { src: "/icon/mastercard-svgrepo-com.svg", alt: "Mastercard" },
    {
      src: "/icon/apple-pay-payment-mark-logo-svgrepo-com.svg",
      alt: "Apple Pay",
    },
    { src: "/icon/google-pay-svgrepo-com.svg", alt: "Google Pay" },
    { src: "/icon/paypal-svgrepo-com.svg", alt: "PayPal" },
    { src: "/icon/payment-method.png", alt: "Cash" },
  ];

  return (
    <footer className="bg-gradient-to-b from-red-950 to-black border-t border-white/10 font-sans">
      {/* Newsletter Section */}
      <div className="border-b border-white/20 font-sans">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">
              {lang === "fr" ? "Restez Connecté" : "Stay Connected"}
            </h3>
            <p className="font-sans text-red-100 mb-8 max-w-2xl mx-auto">
              {lang === "fr"
                ? "Recevez les dernières actualités, promotions exclusives et conseils experts directement dans votre boîte mail."
                : "Receive the latest news, exclusive promotions and expert advice directly in your mailbox."}
            </p>

            {isSubscribed ? (
              <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-red-400 font-mono text-lg font-bold mb-2">
                  🎉 {lang === "fr" ? "Félicitations !" : "Congratulations!"}
                </div>
                <p className="font-sans text-red-300">
                  {lang === "fr"
                    ? "Vous êtes maintenant inscrit à notre newsletter."
                    : "You are now subscribed to our newsletter."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 font-mono bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-red-300/50 focus:outline-none focus:border-red-500 transition-all duration-300 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="font-sans bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  {lang === "fr" ? "S'abonner" : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="text-3xl font-bold text-white font-inter mb-2">
                <img
                  src={logo}
                  alt="MichelCell Logo"
                  className="h-28 w-auto inline-block"
                />
              </div>
              <p className="font-sans text-red-100 text-sm leading-relaxed">
                {lang === "fr"
                  ? "Votre partenaire de confiance dans l'univers du numérique en Haïti. Nous vous accompagnons avec expertise et passion vers les technologies de demain."
                  : "Your trusted partner in the digital world in Haiti. We accompany you with expertise and passion towards the technologies of tomorrow."}
              </p>
            </div>

            {/* Addresses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(addressComponents.addresses).map(
                ([title, address]) => (
                  <addressComponents.AddressCard
                    key={title}
                    title={title}
                    address={address}
                  />
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(quickLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-sans font-bold text-white text-start px-6 text-lg mb-6">
                  {category}
                </h4>
                <ul className="space-y-3 text-start px-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      {(() => {
                        // map some well-known link names to internal routes
                        const routeMap = {
                          Smartphones: "/products",
                          Accessoires: "/accessories",
                          Gaming: "/products?category=gaming",
                          "Laptops & Tablettes": "/products?category=tablets",
                          "Montres Connectées": "/products?category=wearables",
                          Réparations: "/about#repairs",
                          "Guide d'achat": "/about#guide",
                          "Support technique": "/support",
                          Reconditionnement: "/services/reconditioning",
                          Installation: "/services/installation",
                          "Notre histoire": "/about",
                          Carrières: "/careers",
                          Presse: "/press",
                          Blog: "/blog",
                          Événements: "/events",
                        };

                        const to = routeMap[link.name];
                        if (to) {
                          return (
                            <Link
                              to={to}
                              className="font-sans text-red-100 hover:text-red-300 transition-all duration-300 text-sm flex items-center gap-2 group"
                            >
                              <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                              {link.name}
                            </Link>
                          );
                        }

                        // fallback to external anchor if a full href provided
                        return (
                          <a
                            href={link.href}
                            className="font-sans text-red-100 hover:text-red-300 transition-all duration-300 text-sm flex items-center gap-2 group"
                          >
                            <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            {link.name}
                          </a>
                        );
                      })()}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Support & Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-white text-start px-4 text-lg mb-6">
              Support
            </h4>
            <ul className="space-y-3 mb-8 text-start px-4">
              {(() => {
                const supportMap = {
                  "Centre d'aide": "/support",
                  "Contactez-nous": "/contact",
                  FAQ: "/faq",
                  "Statut des services": "/status",
                };

                return Object.keys(supportMap).map((label) => (
                  <li key={label}>
                    <Link
                      to={supportMap[label]}
                      className="font-sans text-red-100 hover:text-red-300 transition-all duration-300 text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ));
              })()}
            </ul>

            <h4 className="font-sans font-bold text-white text-start px-4 text-lg mb-3 pt-4">
              {lang === "fr" ? "Légal" : "Legal"}
            </h4>
            <ul className="space-y-3 pt-4">
              {(() => {
                const legalMap = {
                  [lang === "fr" ? "Mentions légales" : "Legal Notice"]:
                    "/legal/mentions",
                  [lang === "fr"
                    ? "Politique de confidentialité"
                    : "Privacy Policy"]: "/legal/privacy",
                  [lang === "fr" ? "CGV" : "Terms of Service"]: "/legal/terms",
                  [lang === "fr" ? "Cookies" : "Cookies"]: "/legal/cookies",
                };

                return Object.keys(legalMap).map((label) => (
                  <li
                    className="flex flex-col justify-start items-start px-4"
                    key={label}
                  >
                    <Link
                      to={legalMap[label]}
                      className="font-sans text-red-100 hover:text-red-300 transition-all duration-300 text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ));
              })()}
            </ul>

            {/* Social Links */}
            <div className="mt-8 text-start px-4">
              <h4 className="font-sans font-bold text-white text-lg mb-4">
                {lang === "fr" ? "Suivez-nous" : "Follow Us"}
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-red-300 ${social.color} transition-all duration-300 text-2xl hover:scale-110`}
                    aria-label={social.name}
                  >
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="font-sans text-red-300 text-sm text-center lg:text-left">
              <Link to="/" className="font-bold hover:text-red-200">
                © {new Date().getFullYear()} MichelCell.{" "}
                {lang === "fr"
                  ? "Tous droits réservés."
                  : "All rights reserved."}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans text-red-300 text-sm mr-2">
                {lang === "fr" ? "Paiements sécurisés :" : "Secure Payments:"}
              </span>
              <div className="flex gap-2 items-center">
                {paymentMethods.map((method, index) => (
                  <span
                    key={index}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src={method.src}
                      alt={method.alt}
                      className="w-6 h-6 object-contain"
                    />
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="font-sans text-red-300 text-sm text-center">
              {lang === "fr" ? "Service client:" : "Customer Service:"}{" "}
              <a
                href="mailto:michelcell19@gmail.com"
                className="text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                michelcell19@gmail.com
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-white/10">
            <div className="font-sans text-red-300 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/icon/lock-padlock-protection-security-svgrepo-com.svg"
                  alt="lock icon"
                  className="text-red-300"
                />
              </span>
              {lang === "fr" ? "Paiement 100% sécurisé" : "100% Secure Payment"}
            </div>
            <div className="font-sans text-red-400 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/icon/delivery-package-svgrepo-com.svg"
                  alt="delivery icon"
                  className="text-red-400"
                />
              </span>
              {lang === "fr"
                ? "Livraison rapide en Haïti"
                : "Fast Delivery in Haiti"}
            </div>
            <div className="font-sans text-red-500 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/icon/return-svgrepo-com.svg"
                  alt="return icon"
                  className="text-red-500"
                />
              </span>
              {lang === "fr"
                ? "Retours sous 15 jours"
                : "Returns within 15 days"}
            </div>
            <div className="font-sans text-red-600 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/icon/collect-svgrepo-com.svg"
                  alt="service icon"
                  className="text-red-600"
                />
              </span>
              {lang === "fr" ? "Service client 5/5" : "Customer Service 5/5"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
