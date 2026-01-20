import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addressComponents } from "../components/address_components";

export default function Contact() {
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

  const contactInfo = [
    {
      title: "Département du Sud",
      address: "73 Rue Nicolas Geffrard",
      city: "Arrondissement des Cayes, HT2345",
      phone: "+509 48 00 0000",
      email: "sud@michelcell.ht",
      mapLink: "https://maps.app.goo.gl/CJThiJHgriBKh1sd8",
      hours: "Lun-Sam: 8h-19h, Dim: 10h-17h",
    },
    {
      title: "Département du Nord",
      address: "Rue 14, & 15 I",
      city: "Cap-Haïtien, HT1110",
      phone: "+509 44 00 0000",
      email: "nord@michelcell.ht",
      mapLink: "https://maps.app.goo.gl/8sFk3hG5bV9Rx7QZ8",
      hours: "Lun-Sam: 8h-19h, Dim: 10h-17h",
    },
  ];

  const subjects = [
    "Demande d'information",
    "Support technique",
    "Réparation d'appareil",
    "Commande spéciale",
    "Retour produit",
    "Partenaire commercial",
    "Autre",
  ];

  const faqs = [
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer:
        "Nos boutiques sont ouvertes du lundi au samedi de 8h à 19h, et le dimanche de 10h à 17h.",
    },
    {
      question: "Combien de temps prend une réparation ?",
      answer:
        "La plupart des réparations sont effectuées en 24-48h. Pour les cas complexes, nous vous tiendrons informés du délai estimé.",
    },
    {
      question: "Offrez-vous la garantie sur vos produits ?",
      answer:
        "Oui, tous nos produits bénéficient d'une garantie d'un an minimum. Les produits reconditionnés ont 6 mois de garantie.",
    },
    {
      question: "Acceptez-vous les commandes en ligne ?",
      answer:
        "Oui, vous pouvez commander en ligne et retirer en boutique, ou bénéficier de notre service de livraison.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-black pt-24 pb-12 font-mono">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-red-900/30 to-red-950/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Notre équipe est là pour répondre à toutes vos questions. N'hésitez
            pas à nous contacter pour des conseils, réparations ou toute autre
            demande.
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
                Contact Rapide
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm">
                    <a href="https://www.instagram.com/michelcell_ht">
                      <img
                        src="/icon/whatsapp-color-svgrepo-com.svg"
                        alt="WhatsApp"
                        className="h-9 w-9 inline-block mr-2"
                      />
                      Whatsapp: +(509) 4776 3992
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm">
                    <a href="https://www.instagram.com/michelcell_ht">
                      <img
                        src="/icon/messenger-facebook-svgrepo-com.svg"
                        alt="Instagram"
                        className="h-9 w-9 inline-block mr-2"
                      />
                      FaceBook: @michelcell_ht
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 text-sm">
                    <a href="https://www.instagram.com/michelcell_ht">
                      <img
                        src="/icon/instagram-svgrepo-com.svg"
                        alt="Instagram"
                        className="h-9 w-9 inline-block mr-2"
                      />
                      Instagram: @michelcell_ht
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
                Envoyez-nous un message
              </h2>

              {isSubmitted ? (
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <div className="text-red-400 text-lg font-bold mb-2">
                    ✅ Message envoyé !
                  </div>
                  <p className="text-red-300">
                    Merci pour votre message. Notre équipe vous répondra dans
                    les plus brefs délais.
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
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-gray-300 text-sm block mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-gray-300 text-sm block mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                      placeholder="+509 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-gray-300 text-sm block mb-2"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-all duration-300"
                    >
                      <option value="">Sélectionnez un sujet</option>
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
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-red-600 bg-white/5 border-white/10 rounded focus:ring-red-500 focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-gray-300 text-sm">
                    Je souhaite recevoir les offres spéciales et actualités
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
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>

                <p className="text-gray-400 text-sm text-center">
                  * Champs obligatoires. Nous répondons généralement dans les
                  24h.
                </p>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Questions Fréquentes
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
                    Voir toutes les FAQ
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
                🔴 Urgence Technique ?
              </h3>
              <p className="text-gray-300">
                Pour les réparations urgentes ou problèmes techniques critiques
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+50948000002"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                Urgence : +509 48 00 0002
              </a>
              <Link
                to="/services/repairs"
                className="bg-transparent hover:bg-white/10 border-2 border-white/20 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                Service Réparation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
