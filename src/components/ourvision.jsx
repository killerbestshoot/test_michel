import { useState, useEffect } from 'react';

const OurVisionSection = ({lang: propLang}) => {
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

  const [animatedValues, setAnimatedValues] = useState({
    clients: 0,
    produits: 0,
    expertise: 0
  });

  const targetValues = {
    clients: 5000,
    produits: 250,
    expertise: 5
  };

  // Animation des compteurs
  useEffect(() => {
    const duration = 3000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateValue = (start, end, setter) => {
      let current = start;
      const increment = (end - start) / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setter(Math.floor(current));
      }, stepDuration);
    };

    animateValue(0, targetValues.clients, (value) =>
      setAnimatedValues(prev => ({ ...prev, clients: value }))
    );
    animateValue(0, targetValues.produits, (value) =>
      setAnimatedValues(prev => ({ ...prev, produits: value }))
    );
    animateValue(0, targetValues.expertise, (value) =>
      setAnimatedValues(prev => ({ ...prev, expertise: value }))
    );
  }, []);

  const values = [
    {
      icon: "🚀",
      title: lang === 'fr' ? 'Innovation Continue' : 'Continuous Innovation',
      description: lang === 'fr' ? "Nous restons à la pointe de la technologie pour vous offrir les dernières innovations et tendances du marché numérique." : "We stay at the forefront of technology to bring you the latest innovations and trends in the digital market."
    },
    {
      icon: "💎",
      title: lang === 'fr' ? 'Qualité Premium' : 'Premium Quality',
      description: lang === 'fr' ? "Chaque produit est soigneusement sélectionné et testé pour garantir une excellence irréprochable." : "Each product is carefully selected and tested to ensure impeccable excellence."
    },
    {
      icon: "🤝",
      title: lang === 'fr' ? "Accompagnement Personnalisé" : "Personalized Support",
      description: lang === 'fr' ? "Notre équipe d'experts vous guide dans vos choix avec des conseils adaptés à vos besoins spécifiques." : "Our team of experts guides you in your choices with advice tailored to your specific needs."
    },
    {
      icon: "🌱",
      title: lang === 'fr' ? "Développement Durable" : "Sustainable Development",
      description: lang === 'fr' ? "Nous nous engageons dans une démarche éco-responsable avec des produits reconditionnés et recyclables." : "We are committed to an eco-responsible approach with refurbished and recyclable products."
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: lang === 'fr' ? "Fondation" : "Foundation",
      description: lang === 'fr' ? "Ouverture de notre premier espace dédié au numérique" : "Opening of our first digital space"
    },
    {
      year: "2018",
      title: lang === 'fr' ? "Expansion" : "Expansion",
      description: lang === 'fr' ? "Lancement de notre service de réparation expert" : "Launch of our expert repair service"
    },
    {
      year: "2021",
      title: lang === 'fr' ? "Transformation" : "Transformation",
      description: lang === 'fr' ? "Digitalisation complète et e-commerce" : "Complete digitalization and e-commerce"
    },
    {
      year: "2024",
      title: lang === 'fr' ? "Innovation" : "Innovation",
      description: lang === 'fr' ? "Intégration IA et réalité augmentée" : "Integration of AI and augmented reality"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-950 to-black relative overflow-hidden font-inter">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            { lang === 'fr' ? 'Notre Vision et Nos Valeurs' : 'Our Vision and Values' }
          </h2>
          <p className="font-sans text-red-100 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            { lang === 'fr' ? "Révolutionner l'expérience numérique grâce à l'expertise, l'innovation et un engagement sans faille envers l'excellence." : "Revolutionizing the digital experience through expertise, innovation, and an unwavering commitment to excellence." }
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Vision Statement */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/15 hover:border-red-200 transition-all duration-500">
              <h3 className="font-sans text-2xl font-bold text-white mb-4">
                { lang === 'fr' ? 'Notre Mission' : 'Our Mission' }
              </h3>
              <p className="font-sans text-red-100 text-lg leading-relaxed">
                { lang === 'fr' ? "Chez MichelCell, notre mission est de fournir des solutions numériques innovantes et personnalisées qui répondent aux besoins uniques de chaque client. Nous nous efforçons de créer une expérience utilisateur exceptionnelle en combinant expertise technique, service client attentif et engagement envers la qualité." : "At MichelCell, our mission is to provide innovative and personalized digital solutions that meet the unique needs of each client. We strive to create an exceptional user experience by combining technical expertise, attentive customer service, and a commitment to quality." }
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/15 hover:border-red-200 transition-all duration-500">
              <h3 className="font-sans text-2xl font-bold text-white mb-4">
                { lang === 'fr' ? 'Notre Engagement' : 'Our Commitment' }
              </h3>
              <p className="font-sans text-red-100 text-lg leading-relaxed">
                { lang === 'fr' ? "Nous nous engageons à fournir des produits de qualité, des conseils d'experts et un service après-vente exceptionnel. Votre satisfaction est notre priorité absolue et nous travaillons chaque jour pour mériter votre confiance." : "We are committed to providing quality products, expert advice, and exceptional after-sales service. Your satisfaction is our top priority, and we work every day to earn your trust." }
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/15 hover:border-red-200 transition-all duration-500 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-sans text-xl font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="font-sans text-red-100 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-bold text-red-300 font-sans">
                {animatedValues.clients}+
              </div>
              <div className="font-sans text-red-100 text-lg">{ lang === 'fr' ? 'Clients Satisfaits' : 'Satisfied Clients' }</div>
              <p className="font-sans text-red-300/70 text-sm">
                { lang === 'fr' ? 'Une communauté fidèle qui nous fait confiance' : 'A loyal community that trusts us' }
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-red-400 font-sans">
                {animatedValues.produits}+
              </div>
              <div className="font-sans text-red-100 text-lg">{ lang === 'fr' ? 'Produits Disponibles' : 'Available Products' }</div>
              <p className="font-sans text-red-300/70 text-sm">
                { lang === 'fr' ? 'Une sélection premium constamment mise à jour' : 'A constantly updated premium selection' }
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-red-500 font-sans">
                {animatedValues.expertise}
              </div>
              <div className="font-sans text-red-100 text-lg">{ lang === 'fr' ? "Ans d'Expertise" : "Years of Expertise" }</div>
              <p className="font-sans text-red-300/70 text-sm">
                { lang === 'fr' ? "Un savoir-faire acquis au fil des années" : "Expertise acquired over the years" }
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="font-sans text-3xl font-bold text-white text-center mb-12">
            { lang === 'fr' ? 'Notre Parcours' : 'Our Journey' }
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-red-700"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2 px-8">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/15 hover:border-red-200 transition-all duration-500">
                      <div className="font-sans text-red-300 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-sans text-white font-bold text-xl mb-2">
                        {milestone.title}
                      </h4>
                      <p className="font-sans text-red-100">
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm border border-white/30 rounded-3xl p-12">
            <h3 className="font-sans text-3xl font-bold text-white mb-4">
              { lang === 'fr' ? "Prêt à Rejoindre l'Aventure ?" : "Ready to Join the Adventure?" }
            </h3>
            <p className="font-sans text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              { lang === 'fr' ? "Découvrez comment nous pouvons transformer votre expérience numérique et vous accompagner vers le futur technologique." : "Discover how we can transform your digital experience and guide you towards the technological future." }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="font-sans bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                { lang === 'fr' ? 'Découvrir Nos Services' : 'Discover Our Services' }
              </button>
              <button className="font-sans bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-red-200">
                { lang === 'fr' ? 'Prendre Rendez-vous' : 'Make an Appointment' }
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;