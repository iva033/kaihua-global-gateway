import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/StatCard';
import ContactForm from '@/components/ContactForm';
import logo from '@/assets/logo.png';

const Index = () => {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: Shield,
      title: t('trust.stability'),
      description: t('trust.stability.desc'),
    },
    {
      icon: Sparkles,
      title: t('trust.honesty'),
      description: t('trust.honesty.desc'),
    },
    {
      icon: Users,
      title: t('trust.experts'),
      description: t('trust.experts.desc'),
    },
    {
      icon: Clock,
      title: t('trust.speed'),
      description: t('trust.speed.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center animate-fade-in">
              <img
                src={logo}
                alt="Kaihua"
                className="h-24 w-24 md:h-32 md:w-32 object-contain animate-pulse-glow rounded-full"
              />
            </div>


            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold hero-text mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {t('hero.title')}
              <span className="block text-gradient mt-2">{t('hero.subtitle')}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl hero-text-muted max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white font-semibold px-8 py-6 text-lg shadow-glow hover:scale-105 transition-transform">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white/40 !text-white bg-white/5 hover:bg-white/15 px-8 py-6 text-lg">
                  {t('hero.learn')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <StatCard value="35" suffix="+" label={t('stats.years')} />
            <StatCard value="10000" suffix="+" label={t('stats.cars')} />
            <StatCard value="110000" label={t('stats.area')} />
            <StatCard value="24" label={t('stats.dealers')} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
            {t('trust.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, index) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold hero-text text-center mb-8">
              {t('contact.title')}
            </h2>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
