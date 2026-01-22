import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addressComponents } from "../components/address_components";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Réinitialiser le message de succès après 5 secondes
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const subjects = [
    t('contactSubjInfo'),
    t('contactSubjSupport'),
    t('contactSubjRepair'),
    t('contactSubjOrder'),
    t('contactSubjReturn'),
    t('contactSubjPartner'),
    t('contactSubjOther'),
  ];

  const faqs = [
    {
      question: t('contactFaq1Q'),
      answer: t('contactFaq1A'),
    },
    {
      question: t('contactFaq2Q'),
      answer: t('contactFaq2A'),
    },
    {
      question: t('contactFaq3Q'),
      answer: t('contactFaq3A'),
    },
    {
      question: t('contactFaq4Q'),
      answer: t('contactFaq4A'),
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-black pt-24 pb-12 font-mono">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-red-900/30 to-red-950/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contactHeroTitle')}
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            {t('contactHeroDesc')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
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

            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                {t('contactQuickTitle')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm">
                    <a href="https://www.instagram.com/michelcell_ht">
                      <img
                        src="/icon/whatsapp-color-svgrepo-com.svg"
                        alt={t('altWhatsApp')}
                        className="h-9 w-9 inline-block mr-2"
                      />
                      {t('contactWhatsAppLabel')}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm">
                    <a href="https://www.instagram.com/michelcell_ht">
                      <img
                        src="/icon/messenger-facebook-svgrepo-com.svg"
                        alt={t('altMessenger')}
                        className="h-9 w-9 inline-block mr-2"
                      />
                      {t('contactFacebookLabel')}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm">
                    <a href="https://www.instagram.com/michelcell_ht">
                      <img
                        src="/icon/instagram-svgrepo-com.svg"
                        alt={t('altInstagram')}
                        className="h-9 w-9 inline-block mr-2"
                      />
                      {t('contactInstagramLabel')}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t('contactFormTitle')}
              </h2>

              {isSubmitted ? (
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <div className="text-red-400 text-lg font-bold mb-2">
                    {t('contactSuccessTitle')}
                  </div>
                  <p className="text-red-300">
                    {t('contactSuccessDesc')}
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-gray-300 text-sm block mb-2"
                    >
                      {t('contactLabelName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder={t('contactPlaceName')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-gray-300 text-sm block mb-2"
                    >
                      {t('contactLabelEmail')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder={t('contactPlaceEmail')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-gray-300 text-sm block mb-2"
                    >
                      {t('contactLabelPhone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder={t('contactPlacePhone')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-gray-300 text-sm block mb-2"
                    >
                      {t('contactLabelSubject')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-all duration-300"
                    >
                      <option value="">{t('contactSelectSubject')}</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-gray-300 text-sm block mb-2"
                  >
                    {t('contactLabelMessage')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 resize-none"
                    placeholder={t('contactPlaceMessage')}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-red-600 bg-white/5 border-white/10 rounded focus:ring-red-500 focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-gray-300 text-sm">
                    {t('contactNewsletter')}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                      {t('contactBtnSending')}
                    </span>
                  ) : (
                    t('contactBtnSend')
                  )}
                </button>

                <p className="text-gray-400 text-sm text-center">
                  {t('contactDisclaimer')}
                </p>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t('contactFaqTitle')}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 last:border-b-0 pb-4 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    to="/faq"
                    className="text-red-400 hover:text-red-300 transition-colors duration-300 text-sm inline-flex items-center gap-2"
                  >
                    {t('contactFaqLink')}
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-gradient-to-r from-red-600/10 to-red-800/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('contactEmergencyTitle')}
              </h3>
              <p className="text-gray-300">
                {t('contactEmergencyDesc')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+50948000002"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                {t('contactEmergencyBtn')}
              </a>
              <Link
                to="/services/repairs"
                className="bg-transparent hover:bg-white/10 border-2 border-white/20 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                {t('contactRepairBtn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
