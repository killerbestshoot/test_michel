import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { addressComponents } from "./address_components";
const logo = "/icon/michell_cell_logo.svg";

const Footer = () => {
  const { t, lang } = useLanguage();
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

  const quickLinks = [
    {
      titleKey: 'ftProducts',
      links: [
        { key: 'ftSmartphones', to: '/products' },
        { key: 'ftAccessories', to: '/accessories' },
        { key: 'ftGaming', to: '/products?category=gaming' },
        { key: 'ftLaptops', to: '/products?category=tablets' },
        { key: 'ftSmartwatches', to: '/accessories#wearables' },
      ]
    },
    {
      titleKey: 'ftServices',
      links: [
        { key: 'ftRepairs', to: '/about#repairs' },
        { key: 'ftGuide', to: '/about#guide' },
        { key: 'ftSupport', to: '/support' },
        { key: 'ftRefurb', to: '/services/reconditioning' },
        { key: 'ftInstall', to: '/services/installation' },
      ]
    },
    {
      titleKey: 'ftCompany',
      links: [
        { key: 'ftStory', to: '/about' },
        { key: 'ftCareers', to: '/careers' },
        { key: 'ftPress', to: '/press' },
        { key: 'ftBlog', to: '/blog' },
        { key: 'ftEvents', to: '/events' },
      ]
    }
  ];

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
              {t('newsletterTitle')}
            </h3>
            <p className="font-sans text-red-100 mb-8 max-w-2xl mx-auto">
              {t('newsletterDesc')}
            </p>

            {isSubscribed ? (
              <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-red-400 font-mono text-lg font-bold mb-2">
                  🎉 {t('congrats')}
                </div>
                <p className="font-sans text-red-300">
                  {t('newsletterSuccess')}
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
                  placeholder={t('emailPlaceholder')}
                  className="flex-1 font-mono bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-red-300/50 focus:outline-none focus:border-red-500 transition-all duration-300 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="font-sans bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  {t('subscribe')}
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
                {t('brandDesc')}
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
            {quickLinks.map((section) => (
              <div key={section.titleKey}>
                <h4 className="font-sans font-bold text-white text-start px-6 text-lg mb-6">
                  {t(section.titleKey)}
                </h4>
                <ul className="space-y-3 text-start px-2">
                  {section.links.map((link) => (
                    <li key={link.key}>
                      <Link
                        to={link.to}
                        className="font-sans text-red-100 hover:text-red-300 transition-all duration-300 text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                        {t(link.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Support & Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-white text-start px-4 text-lg mb-6">
              {t('ftSupportTitle')}
            </h4>
            <ul className="space-y-3 mb-8 text-start px-4">
              {[
                { key: 'ftHelpCenter', to: '/support' },
                { key: 'ftContactUs', to: '/contact' },
                { key: 'ftFAQ', to: '/faq' },
                { key: 'ftServiceStatus', to: '/status' },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.to}
                    className="font-sans text-red-100 hover:text-red-300 transition-all duration-300 text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-sans font-bold text-white text-start px-4 text-lg mb-3 pt-4">
              {t('ftLegalTitle')}
            </h4>
            <ul className="space-y-3 pt-4">
              {[
                { key: 'ftLegalNotice', to: '/legal/mentions' },
                { key: 'ftPrivacyPolicy', to: '/legal/privacy' },
                { key: 'ftTermsService', to: '/legal/terms' },
                { key: 'ftCookies', to: '/legal/cookies' },
              ].map((link) => (
                <li
                  className="flex flex-col justify-start items-start px-4"
                  key={link.key}
                >
                  <Link
                    to={link.to}
                    className="font-sans text-red-100 hover:text-red-300 transition-all duration-300 text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8 text-start px-4">
              <h4 className="font-sans font-bold text-white text-lg mb-4">
                {t('ftFollowUs')}
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
                {t('ftCopyright')}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans text-red-300 text-sm mr-2">
                {t('ftSecurePayments')}
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
              {t('ftCustomerService')}{" "}
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
              {t('ftSecurePaymentBadge')}
            </div>
            <div className="font-sans text-red-400 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/icon/delivery-package-svgrepo-com.svg"
                  alt="delivery icon"
                  className="text-red-400"
                />
              </span>
              {t('ftFastDelivery')}
            </div>
            <div className="font-sans text-red-500 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/icon/return-svgrepo-com.svg"
                  alt="return icon"
                  className="text-red-500"
                />
              </span>
              {t('ftReturns')}
            </div>
            <div className="font-sans text-red-600 text-sm flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center">
                <img
                  src="/icon/collect-svgrepo-com.svg"
                  alt="service icon"
                  className="text-red-600"
                />
              </span>
              {t('ftServiceScore')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
