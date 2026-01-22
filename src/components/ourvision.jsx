import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const OurVisionSection = () => {
  const { t } = useLanguage();

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
      title: t('valInnovation'),
      description: t('valInnovationDesc')
    },
    {
      icon: "💎",
      title: t('valQuality'),
      description: t('valQualityDesc')
    },
    {
      icon: "🤝",
      title: t('valSupport'),
      description: t('valSupportDesc')
    },
    {
      icon: "🌱",
      title: t('valSustainable'),
      description: t('valSustainableDesc')
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: t('milestone2015Title'),
      description: t('milestone2015Desc')
    },
    {
      year: "2018",
      title: t('milestone2018Title'),
      description: t('milestone2018Desc')
    },
    {
      year: "2021",
      title: t('milestone2021Title'),
      description: t('milestone2021Desc')
    },
    {
      year: "2024",
      title: t('milestone2024Title'),
      description: t('milestone2024Desc')
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
            {t('visionTitle')}
          </h2>
          <p className="font-sans text-red-100 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            {t('visionDesc')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Vision Statement */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/15 hover:border-red-200 transition-all duration-500">
              <h3 className="font-sans text-2xl font-bold text-white mb-4">
                {t('missionTitle')}
              </h3>
              <p className="font-sans text-red-100 text-lg leading-relaxed">
                {t('missionDesc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/15 hover:border-red-200 transition-all duration-500">
              <h3 className="font-sans text-2xl font-bold text-white mb-4">
                {t('commitmentTitle')}
              </h3>
              <p className="font-sans text-red-100 text-lg leading-relaxed">
                {t('commitmentDesc')}
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
              <div className="font-sans text-red-100 text-lg">{t('statsClients')}</div>
              <p className="font-sans text-red-300/70 text-sm">
                {t('statsClientsDesc')}
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-red-400 font-sans">
                {animatedValues.produits}+
              </div>
              <div className="font-sans text-red-100 text-lg">{t('statsProducts')}</div>
              <p className="font-sans text-red-300/70 text-sm">
                {t('statsProductsDesc')}
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-red-500 font-sans">
                {animatedValues.expertise}
              </div>
              <div className="font-sans text-red-100 text-lg">{t('statsExpertise')}</div>
              <p className="font-sans text-red-300/70 text-sm">
                {t('statsExpertiseDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="font-sans text-3xl font-bold text-white text-center mb-12">
            {t('journeyTitle')}
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
              {t('ctaVisionTitle')}
            </h3>
            <p className="font-sans text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              {t('ctaVisionDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="font-sans bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                {t('ctaDiscover')}
              </button>
              <button className="font-sans bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-red-200">
                {t('ctaAppointment')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;