import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
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
      title: t('aboutValExpertise'),
      description: t('aboutValExpertiseDesc'),
    },
    {
      icon: "🤝",
      title: t('aboutValTrust'),
      description: t('aboutValTrustDesc'),
    },
    {
      icon: "⚡",
      title: t('aboutValInnovation'),
      description: t('aboutValInnovationDesc'),
    },
    {
      icon: "❤️",
      title: t('aboutValPersonalized'),
      description: t('aboutValPersonalizedDesc'),
    },
  ];

  const milestones = [
    {
      year: 2017,
      title: t('mile2017'),
      description: t('mile2017Desc'),
    },
    {
      year: 2019,
      title: t('mile2019'),
      description: t('mile2019Desc'),
    },
    {
      year: 2020,
      title: t('mile2020'),
      description: t('mile2020Desc'),
    },
    {
      year: 2022,
      title: t('mile2022'),
      description: t('mile2022Desc'),
    },
    {
      year: 2023,
      title: t('mile2023'),
      description: t('mile2023Desc'),
    },
    {
      year: 2024,
      title: t('mile2024'),
      description: t('mile2024Desc'),
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-red-900/30 to-red-800/30 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
            {t('aboutHeroTitle')}
          </h1>
          <p className="font-mono text-red-100 text-xl max-w-3xl mx-auto leading-relaxed">
            {t('aboutHeroDesc')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="font-mono text-3xl font-bold text-white mb-6">
                {t('aboutWhoTitle')}
              </h2>
              <p className="font-mono text-red-100 text-lg leading-relaxed">
                {t('aboutWhoDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                <h3 className="font-mono text-xl font-bold text-red-300 mb-4">
                  {t('aboutPresenceTitle')}
                </h3>
                <p className="font-mono text-red-100">
                  {t('aboutPresenceDesc')}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                <h3 className="font-mono text-xl font-bold text-red-300 mb-4">
                  {t('aboutMissionTitle')}
                </h3>
                <p className="font-mono text-red-100">
                  {t('aboutMissionDesc')}
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8">
              <h3 className="font-mono text-2xl font-bold text-white mb-4 text-center">
                {t('aboutCommitTitle')}
              </h3>
              <p className="font-mono text-red-100 text-center">
                {t('aboutCommitDesc')}
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
              <div className="font-mono text-red-100">{t('aboutStatsExp')}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-red-200 transition-all duration-300">
              <div className="text-4xl font-bold text-red-400 font-mono mb-2">
                {animatedValues.customers}+
              </div>
              <div className="font-mono text-red-100">{t('aboutStatsCust')}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-red-200 transition-all duration-300">
              <div className="text-4xl font-bold text-red-500 font-mono mb-2">
                {animatedValues.products}+
              </div>
              <div className="font-mono text-red-100">{t('aboutStatsProd')}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 hover:border-red-200 transition-all duration-300">
              <div className="text-4xl font-bold text-red-600 font-mono mb-2">
                {animatedValues.repairs}+
              </div>
              <div className="font-mono text-red-100">{t('aboutStatsRepair')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-3xl font-bold text-white text-center mb-12">
            {t('valTitle')}
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
            {t('servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-mono text-xl font-bold text-white mb-3">
                {t('svcSalesTitle')}
              </h3>
              <p className="font-mono text-red-100 text-sm">
                {t('svcSalesDesc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-mono text-xl font-bold text-white mb-3">
                {t('svcRepairTitle')}
              </h3>
              <p className="font-mono text-red-100 text-sm">
                {t('svcRepairDesc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="font-mono text-xl font-bold text-white mb-3">
                {t('svcGamingTitle')}
              </h3>
              <p className="font-mono text-red-100 text-sm">
                {t('svcGamingDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-3xl font-bold text-white text-center mb-12">
            {t('timelineTitle')}
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
              {t('ctaVisionTitle')}
            </h2>
            <p className="font-mono text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              {t('ctaVisionDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="font-mono bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('ctaDiscover')}
              </Link>
              <Link
                to="/contact"
                className="font-mono bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-red-200"
              >
                {t('ctaAppointment')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
