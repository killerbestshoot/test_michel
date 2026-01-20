import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [animatedValues, setAnimatedValues] = useState({
    experience: 0,
    customers: 0,
    products: 0,
    repairs: 0,
  });

  const targetValues = {
    experience: 8,
    customers: 5000,
    products: 250,
    repairs: 10000,
  };

  // Animation des compteurs
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateValue = (key) => {
      let current = 0;
      const end = targetValues[key];
      const increment = end / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setAnimatedValues((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepDuration);
    };

    Object.keys(targetValues).forEach((key) => {
      animateValue(key);
    });
  }, []);

  const values = [
    {
      icon: "🎯",
      title: "Expertise Technique",
      description:
        "Nos techniciens sont certifiés et suivent des formations régulières pour maîtriser les dernières technologies.",
    },
    {
      icon: "🤝",
      title: "Confiance & Transparence",
      description:
        "Nous établissons une relation de confiance avec nos clients grâce à une communication claire et transparente.",
    },
    {
      icon: "⚡",
      title: "Innovation Continue",
      description:
        "Nous restons à la pointe de l'innovation pour vous proposer les produits et services les plus avancés.",
    },
    {
      icon: "❤️",
      title: "Service Personnalisé",
      description:
        "Chaque client est unique. Nous adaptons nos conseils et solutions à vos besoins spécifiques.",
    },
  ];

  const milestones = [
    {
      year: 2017,
      title: "Ouverture",
      description: "Première boutique dans le sud d'Haïti",
    },
    {
      year: 2019,
      title: "Expansion",
      description: "Ouverture de la deuxième boutique dans le nord",
    },
    {
      year: 2020,
      title: "Service Réparation",
      description: "Lancement du service de réparation expert",
    },
    {
      year: 2022,
      title: "E-commerce",
      description: "Mise en place de notre boutique en ligne",
    },
    {
      year: 2023,
      title: "Gaming Zone",
      description: "Création d'un espace dédié aux gamers",
    },
    {
      year: 2024,
      title: "Innovation",
      description: "Intégration de services de réalité augmentée",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-red-900/30 to-red-800/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
            Notre Histoire
          </h1>
          <p className="font-mono text-red-100 text-xl max-w-3xl mx-auto leading-relaxed">
            De passionnés de technologie à référence numérique en Haïti,
            découvrez notre parcours, nos valeurs et notre mission.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-mono text-3xl font-bold text-white mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="font-mono text-red-100 text-lg leading-relaxed">
                Michel Cell est une entreprise haïtienne spécialisée dans la
                technologie mobile, l'électronique et les services de
                réparation. Nous nous sommes donné pour mission de rendre la
                technologie accessible à tous en Haïti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                <h3 className="font-mono text-xl font-bold text-red-300 mb-4">
                  Notre Présence
                </h3>
                <p className="font-mono text-red-100">
                  Présents dans 4 villes à travers Haïti avec 4 magasins
                  physiques, nous sommes implantés au plus près de nos clients.
                  Notre réseau s'agrandit constamment pour mieux servir chaque
                  région.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                <h3 className="font-mono text-xl font-bold text-red-300 mb-4">
                  Notre Mission
                </h3>
                <p className="font-mono text-red-100">
                  Démocratiser l'accès à la technologie de qualité en Haïti en
                  offrant des produits adaptés, des services de réparation
                  fiables et des conseils experts à des prix accessibles.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8">
              <h3 className="font-mono text-2xl font-bold text-white mb-4 text-center">
                Notre Engagement
              </h3>
              <p className="font-mono text-red-100 text-center">
                Chez Michel Cell, chaque client compte. Nous croyons en une
                approche personnalisée où l'écoute, le respect et la
                transparence sont au cœur de toutes nos interactions. Notre
                équipe s'engage à vous offrir le meilleur service, qu'il
                s'agisse d'un achat, d'une réparation ou d'un simple conseil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-red-200 transition-all duration-300">
              <div className="text-4xl font-bold text-red-300 font-mono mb-2">
                {animatedValues.experience}+
              </div>
              <div className="font-mono text-red-100">Ans d'expérience</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-red-200 transition-all duration-300">
              <div className="text-4xl font-bold text-red-400 font-mono mb-2">
                {animatedValues.customers}+
              </div>
              <div className="font-mono text-red-100">Clients satisfaits</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-red-200 transition-all duration-300">
              <div className="text-4xl font-bold text-red-500 font-mono mb-2">
                {animatedValues.products}+
              </div>
              <div className="font-mono text-red-100">Produits disponibles</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-red-200 transition-all duration-300">
              <div className="text-4xl font-bold text-red-600 font-mono mb-2">
                {animatedValues.repairs}+
              </div>
              <div className="font-mono text-red-100">Appareils réparés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-3xl font-bold text-white text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/15 hover:border-red-200 transition-all duration-500 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="font-mono text-red-100 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-3xl font-bold text-white text-center mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-mono text-xl font-bold text-white mb-3">
                Vente de Produits
              </h3>
              <p className="font-mono text-red-100 text-sm">
                Smartphones, tablettes, accessoires et équipements électroniques
                des meilleures marques à des prix compétitifs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-mono text-xl font-bold text-white mb-3">
                Service de Réparation
              </h3>
              <p className="font-mono text-red-100 text-sm">
                Réparation rapide et fiable de tous types d'appareils
                électroniques par nos techniciens certifiés.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="font-mono text-xl font-bold text-white mb-3">
                Espace Gaming
              </h3>
              <p className="font-mono text-red-100 text-sm">
                Produits et conseils spécialisés pour les gamers : consoles,
                accessoires, équipements streaming et plus encore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-3xl font-bold text-white text-center mb-12">
            Notre Parcours
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-red-500 to-red-700"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"} ${index % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/15 hover:border-red-200 transition-all duration-500">
                      <div className="font-mono text-red-300 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-mono text-white font-bold text-xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-mono text-red-100">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm border border-white/30 rounded-3xl p-12 text-center">
            <h2 className="font-mono text-3xl font-bold text-white mb-6">
              Prêt à Découvrir Nos Services ?
            </h2>
            <p className="font-mono text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Que vous ayez besoin d'un nouveau smartphone, de conseils
              techniques ou d'une réparation, notre équipe est là pour vous
              accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="font-mono bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Voir nos produits
              </Link>
              <Link
                to="/contact"
                className="font-mono bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-red-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
