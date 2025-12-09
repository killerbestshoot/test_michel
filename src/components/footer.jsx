import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const logo = '/icon/michell_cell_logo.svg';

const Footer = ({lang: propLang}) => {

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

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Simuler l'envoi de l'email
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = {
    "Produits": [
      { name: "Smartphones", href: "#" },
      { name: lang === 'fr' ? "Accessoires" : "Accessories", href: "#" },
      { name: "Gaming", href: "#" },
      { name: lang === 'fr' ? "Laptops & Tablettes" : "Laptops & Tablets", href: "#" },
      { name: lang === 'fr' ? "Montres Connectées" : "Smartwatches", href: "#" }
    ],
    "Services": [
      { name: lang === 'fr' ? "Réparations" : "Repairs", href: "#" },
      { name: lang === 'fr' ? "Guide d'achat" : "Buying Guide", href: "#" },
      { name: lang === 'fr' ? "Support technique" : "Technical Support", href: "#" },
      { name: lang === 'fr' ? "Reconditionnement" : "Refurbishing", href: "#" },
      { name: lang === 'fr' ? "Installation" : "Installation", href: "#" }
    ],
    "Entreprise": [
      { name: lang === 'fr' ? "Notre histoire" : "Our Story", href: "#" },
      { name: lang === 'fr' ? "Carrières" : "Careers", href: "#" },
      { name: lang === 'fr' ? "Presse" : "Press", href: "#" },
      { name: "Blog", href: "#" },
      { name: lang === 'fr' ? "Événements" : "Events", href: "#" }
    ]
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: "/icon/facebook-1-svgrepo-com.svg",
      href: "https://www.facebook.com/",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: "/icon/instagram-svgrepo-com.svg",
      href: "https://www.instagram.com/",
      color: "hover:text-pink-400"
    },
    {
      name: "Twitter",
      icon: "/icon/twitter-svgrepo-com.svg",
      href: "https://twitter.com/",
      color: "hover:text-blue-300"
    },
  ];

  const addresses = {
    "Département du Sud": {
      street: "73 Rue Nicolas Geffrard",
      postalCode: "HT2345",
      city: "Arrondissement des Cayes",
      country: "Haïti",
      mapLink: "https://maps.app.goo.gl/CJThiJHgriBKh1sd8",
      phone: "+(509) 4776 39 92",
      email: "sud@michelcell.ht"
    },
    "Département du Nord": {
      street: "Rue 14, & 15 I",
      postalCode: "HT1110",
      city: "Cap-Haïtien",
      country: "Haïti",
      mapLink: "https://maps.app.goo.gl/8sFk3hG5bV9Rx7QZ8",
      phone: "+(509) 3864 84 59",
      email: "nord@michelcell.ht"
    }
  };

  const paymentMethods = [
    { src: '/icon/visa-4-logo-svgrepo-com.svg', alt: 'Visa' },
    { src: '/icon/mastercard-svgrepo-com.svg', alt: 'Mastercard' },
    { src: '/icon/apple-pay-payment-mark-logo-svgrepo-com.svg', alt: 'Apple Pay' },
    { src: '/icon/google-pay-svgrepo-com.svg', alt: 'Google Pay' },
    { src: '/icon/paypal-svgrepo-com.svg', alt: 'PayPal' },
    { src: '/icon/payment-method.png', alt: 'Cash' },
  ];

  const AddressCard = ({ title, address }) => (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 group">
      <h4 className="font-sans font-bold text-white text-lg mb-4 flex items-center gap-2 justify-center">
        <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></span>
        {title}
      </h4>

      <div className="space-y-4 flex flex-col justify-start">
        <div className="flex items-start gap-3">
          <span className="text-green-400 w-7 h-7 flex items-center justify-center min-w-7">
            <img src="/icon/location-map-navigation-pin-svgrepo-com.svg" alt="location_svg" />
          </span>
          <div className="flex flex-col justify-start">
            <p className="font-sans text-gray-200 text-sm underline self-start">{address.street}</p>
            <p className="font-sans text-gray-200 text-sm">
              {address.postalCode}, {address.city} {address.country}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-400 w-7 h-7 flex items-center justify-center">
            <img src="/icon/phone-svgrepo-com.svg" alt="phone_svg" />
          </span>
          <a 
            href={`tel:${address.phone}`}
            className="font-sans text-gray-200 text-sm hover:text-green-400 transition-colors duration-300"
          >
            {address.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-purple-400 w-7 h-7 flex items-center justify-center">
            <img src="/icon/email-letter-mail-message-svgrepo-com.svg" alt="email_svg" />
          </span>
          <a 
            href={`mailto:${address.email}`}
            className="font-sans text-gray-200 text-sm hover:text-purple-400 transition-colors duration-300"
          >
            {address.email}
          </a>
        </div>

        <a
          href={address.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-blue-400 text-sm hover:text-blue-300 transition-colors duration-300 mt-3 group"
        >
          <span className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
            <img src="/icon/maps-me-svgrepo-com.svg" alt="maps_svg" />
          </span>
          Voir sur la carte
        </a>
      </div>
    </div>
  );

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-white/10 font-sans">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 font-sans">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">
              Restez Connecté
            </h3>
            <p className="font-sans text-gray-300 mb-8 max-w-2xl mx-auto">
              Recevez les dernières actualités, promotions exclusives et conseils experts 
              directement dans votre boîte mail.
            </p>
            
            {isSubscribed ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-green-400 font-mono text-lg font-bold mb-2">
                  🎉 Félicitations !
                </div>
                <p className="font-sans text-green-300">
                  Vous êtes maintenant inscrit à notre newsletter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 font-mono bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="font-sans bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  S'abonner
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
                <img src={logo} alt="MichelCell Logo" className="h-28 w-auto inline-block" />
              </div>
              <p className="font-sans text-gray-300 text-sm leading-relaxed">
                { lang === 'fr' ? 'Votre partenaire de confiance dans l\'univers du numérique en Haïti. Nous vous accompagnons avec expertise et passion vers les technologies de demain.' : 'Your trusted partner in the digital world in Haiti. We accompany you with expertise and passion towards the technologies of tomorrow.' }
              </p>
            </div>

            {/* Addresses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(addresses).map(([title, address]) => (
                <AddressCard 
                  key={title}
                  title={title}
                  address={address}
                />
              ))}
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
                          "Smartphones": "/products",
                          "Accessoires": "/accessories",
                          "Gaming": "/products?category=gaming",
                          "Laptops & Tablettes": "/products?category=tablets",
                          "Montres Connectées": "/products?category=wearables",
                          "Réparations": "/about#repairs",
                          "Guide d'achat": "/about#guide",
                          "Support technique": "/support",
                          "Reconditionnement": "/services/reconditioning",
                          "Installation": "/services/installation",
                          "Notre histoire": "/about",
                          "Carrières": "/careers",
                          "Presse": "/press",
                          "Blog": "/blog",
                          "Événements": "/events"
                        };

                        const to = routeMap[link.name];
                        if (to) {
                          return (
                            <Link
                              to={to}
                              className="font-sans text-gray-300 hover:text-blue-300 transition-all duration-300 text-sm flex items-center gap-2 group"
                            >
                              <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                              {link.name}
                            </Link>
                          );
                        }

                        // fallback to external anchor if a full href provided
                        return (
                          <a
                            href={link.href}
                            className="font-sans text-gray-300 hover:text-blue-300 transition-all duration-300 text-sm flex items-center gap-2 group"
                          >
                            <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
                  "Centre d'aide": '/support',
                  'Contactez-nous': '/contact',
                  FAQ: '/faq',
                  'Statut des services': '/status'
                };

                return Object.keys(supportMap).map((label) => (
                  <li key={label}>
                    <Link
                      to={supportMap[label]}
                      className="font-sans text-gray-300 hover:text-blue-300 transition-all duration-300 text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ));
              })()}
            </ul>

            <h4 className="font-sans font-bold text-white text-start px-4 text-lg mb-3 pt-4">
              Légal
            </h4>
            <ul className="space-y-3 pt-4">
              {(() => {
                const legalMap = {
                  [lang === 'fr' ? 'Mentions légales' : 'Legal Notice']: '/legal/mentions',
                  [lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy']: '/legal/privacy',
                  [lang === 'fr' ? 'CGV' : 'Terms of Service']: '/legal/terms',
                  [lang === 'fr' ? 'Cookies' : 'Cookies']: '/legal/cookies'
                };

                return Object.keys(legalMap).map((label) => (
                  <li className='flex flex-col justify-start items-start px-4' key={label}>
                    <Link
                      to={legalMap[label]}
                      className="font-sans text-gray-300 hover:text-blue-300 transition-all duration-300 text-sm"
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
                { lang === 'fr' ? 'Suivez-nous' : 'Follow Us' }
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 text-2xl hover:scale-110`}
                    aria-label={social.name}
                  >
                    <img src={social.icon} alt={`${social.name} icon`} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="font-sans text-gray-400 text-sm text-center lg:text-left">
              
              <Link to="/" className=" font-bold hover:text-blue-300">
                © {new Date().getFullYear()}{' '}MichelCell. { lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.' } 
              </Link>
              
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans text-gray-400 text-sm mr-2">{ lang === 'fr' ? 'Paiements sécurisés :' : 'Secure Payments:' }</span>
              <div className="flex gap-2 items-center">
                {paymentMethods.map((method, index) => (
                  <span key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img src={method.src} alt={method.alt} className="w-6 h-6 object-contain" />
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="font-sans text-gray-400 text-sm text-center">
              { lang === 'fr' ? 'Service client:' : 'Customer Service:' }{' '}
              <a href="mailto:contact@michelcell.ht" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                contact@michelcell.ht
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-white/5">
            <div className="font-sans text-green-400 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img src="/icon/lock-padlock-protection-security-svgrepo-com.svg" alt="" srcset="" />
              </span>
              { lang === 'fr' ? 'Paiement 100% sécurisé' : '100% Secure Payment' }
            </div>
            <div className="font-sans text-blue-400 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img src="/icon/delivery-package-svgrepo-com.svg" alt="" srcset="" />
              </span>
              { lang === 'fr' ? 'Livraison rapide en Haïti' : 'Fast Delivery in Haiti' }
            </div>
            <div className="font-sans text-purple-400 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img src="/icon/return-svgrepo-com.svg" alt="" srcset="" />
              </span>
              { lang === 'fr' ? 'Retours sous 15 jours' : 'Returns within 15 days' }
            </div>
            <div className="font-sans text-orange-400 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img src="/icon/collect-svgrepo-com.svg" alt="" srcset="" />
              </span>
              { lang === 'fr' ? 'Service client 5/5' : 'Customer Service 5/5' }
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


