import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [animatedValues, setAnimatedValues] = useState({
    experience: 0,
    customers: 0,
    products: 0,
    repairs: 0
  });

  const targetValues = {
    experience: 10,
    customers: 5000,
    products: 250,
    repairs: 10000
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
        setAnimatedValues(prev => ({ 
          ...prev, 
          [key]: Math.floor(current) 
        }));
      }, stepDuration);
    };

    Object.keys(targetValues).forEach(key => {
      animateValue(key);
    });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Michel Dubois",
      role: "Fondateur & CEO",
      image: "/images/michel-dubois.jpg",
      bio: "Passionné de technologie depuis toujours, Michel a créé Michel Cell en 2015 avec une vision claire : rendre la technologie accessible à tous.",
      expertise: ["Technologie", "Business", "Innovation"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Sophie Laurent",
      role: "Directrice Technique",
      image: "/images/sophie-laurent.jpg",
      bio: "Ingénieure en électronique, Sophie supervise toutes les réparations et garantit la qualité technique de nos services.",
      expertise: ["Réparation", "Électronique", "Qualité"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "Thomas Martin",
      role: "Responsable Commercial",
      image: "/images/thomas-martin.jpg",
      bio: "Avec 8 ans d'expérience dans le retail high-tech, Thomas connaît chaque produit et saura vous conseiller au mieux.",
      expertise: ["Vente", "Conseil", "Relation Client"],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Julie Chen",
      role: "Spécialiste Gaming",
      image: "/images/julie-chen.jpg",
      bio: "Gamer passionnée, Julie est notre experte en consoles, accessoires gaming et tout ce qui touche à l'univers du jeu vidéo.",
      expertise: ["Gaming", "Consoles", "Streaming"],
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Expertise Technique",
      description: "Nos techniciens sont certifiés et suivent des formations régulières pour maîtriser les dernières technologies."
    },
    {
      icon: "🤝",
      title: "Confiance & Transparence",
      description: "Nous établissons une relation de confiance avec nos clients grâce à une communication claire et transparente."
    },
    {
      icon: "⚡",
      title: "Innovation Continue",
      description: "Nous restons à la pointe de l'innovation pour vous proposer les produits et services les plus avancés."
    },
    {
      icon: "❤️",
      title: "Service Personnalisé",
      description: "Chaque client est unique. Nous adaptons nos conseils et solutions à vos besoins spécifiques."
    }
  ];

  const milestones = [
    { year: 2015, title: "Ouverture", description: "Première boutique dans le sud d'Haïti" },
    { year: 2017, title: "Expansion", description: "Ouverture de la deuxième boutique dans le nord" },
    { year: 2019, title: "Service Réparation", description: "Lancement du service de réparation expert" },
    { year: 2021, title: "E-commerce", description: "Mise en place de notre boutique en ligne" },
    { year: 2023, title: "Gaming Zone", description: "Création d'un espace dédié aux gamers" },
    { year: 2024, title: "Innovation", description: "Intégration de services de réalité augmentée" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
            Notre Histoire
          </h1>
          <p className="font-mono text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            De passionnés de technologie à référence numérique en Haïti, découvrez 
            notre parcours, nos valeurs et l'équipe qui fait vivre Michel Cell.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div>
              <h2 className="font-mono text-3xl font-bold text-white mb-6">
                Notre Début
              </h2>
              <div className="space-y-4">
                <p className="font-mono text-gray-300 leading-relaxed">
                  Tout a commencé en 2015 lorsque Michel Dubois, passionné de technologie depuis son plus jeune âge, 
                  a ouvert une petite boutique spécialisée dans les téléphones portables dans le sud d'Haïti.
                </p>
                <p className="font-mono text-gray-300 leading-relaxed">
                  Face au succès rencontré et à la demande croissante, nous avons rapidement élargi notre offre 
                  pour inclure des accessoires, des services de réparation, et finalement toute la gamme de 
                  produits high-tech que nous proposons aujourd'hui.
                </p>
                <p className="font-mono text-gray-300 leading-relaxed">
                  En 2017, nous avons ouvert notre deuxième boutique dans le nord d'Haïti, marquant ainsi notre 
                  expansion à l'échelle nationale et notre engagement à servir tous les Haïtiens.
                </p>
              </div>
            </div>

            {/* Founder Image */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-6">
                <img
                  src="/images/michel-dubois.jpg"
                  alt="Michel Dubois - Fondateur"
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                <div className="text-center">
                  <h3 className="font-mono text-xl font-bold text-white mb-2">
                    Michel Dubois
                  </h3>
                  <p className="font-mono text-blue-400 mb-2">Fondateur & CEO</p>
                  <p className="font-mono text-gray-300 text-sm">
                    "Notre mission est de démocratiser l'accès à la technologie en Haïti"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-blue-400 font-mono mb-2">
                {animatedValues.experience}+
              </div>
              <div className="font-mono text-gray-300">Ans d'expérience</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-green-400 font-mono mb-2">
                {animatedValues.customers}+
              </div>
              <div className="font-mono text-gray-300">Clients satisfaits</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-purple-400 font-mono mb-2">
                {animatedValues.products}+
              </div>
              <div className="font-mono text-gray-300">Produits disponibles</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">
                {animatedValues.repairs}+
              </div>
              <div className="font-mono text-gray-300">Appareils réparés</div>
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="font-mono text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-3xl font-bold text-white text-center mb-12">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white/10"
                />
                <h3 className="font-mono text-xl font-bold text-white text-center mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-blue-400 text-center mb-4">
                  {member.role}
                </p>
                <p className="font-mono text-gray-300 text-sm text-center mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="font-mono text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    💼
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
                    aria-label={`Twitter de ${member.name}`}
                  >
                    🐦
                  </a>
                </div>
              </div>
            ))}
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
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                      <div className="font-mono text-blue-400 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-mono text-white font-bold text-xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-mono text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
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
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="font-mono text-3xl font-bold text-white mb-6">
              Prêt à Découvrir Nos Services ?
            </h2>
            <p className="font-mono text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Que vous ayez besoin d'un nouveau smartphone, de conseils techniques 
              ou d'une réparation, notre équipe est là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="font-mono bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Voir nos produits
              </Link>
              <Link
                to="/contact"
                className="font-mono bg-transparent hover:bg-white/10 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105"
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