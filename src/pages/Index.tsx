import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Shield, Users, Clock, Sparkles, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/StatCard';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';
import heroVideo from '@/assets/hero-video.mp4';
import { useEffect, useRef } from 'react';

const Index = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);

  // Handle scroll to main content when navigating from other pages
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scrollTo') === 'main-content') {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clean up URL
      window.history.replaceState({}, '', '/');
    }
  }, [location.search]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      // Start playing when user scrolls and video is in view
      if (window.scrollY > 10 && video.paused) {
        video.play();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Hero Video Section */}
      <section ref={videoSectionRef} className="relative min-h-screen w-full overflow-hidden">
        {/* Full-screen Video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        {/* Animated Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="animate-bounce">
            <div className="w-10 h-10 rounded-full border-2 border-white/60 backdrop-blur-sm bg-white/10 flex items-center justify-center">
              <ChevronDown className="h-5 w-5 text-white animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Title Section - Below Video */}
      <section id="main-content" className="py-16 md:py-24 gradient-hero scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <ScrollReveal variant="fade-up">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold hero-text mb-4">
                {t('hero.title')}
                <span className="block text-gradient mt-2">{t('hero.subtitle')}</span>
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-lg md:text-xl hero-text-muted max-w-2xl mx-auto mb-12">
                {t('hero.description')}
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white font-semibold px-8 py-6 text-lg shadow-glow hover:scale-105 transition-transform"
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-white/40 !text-white bg-white/5 hover:bg-white/15 px-8 py-6 text-lg">
                    {t('hero.learn')}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
              <StatCard value="35" suffix="+" label={t('stats.years')} />
              <StatCard value="10000" suffix="+" label={t('stats.cars')} />
              <StatCard value="110000" label={t('stats.area')} />
              <StatCard value="24" label={t('stats.dealers')} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t('trust.title')}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, index) => (
              <ScrollReveal key={item.title} variant="fade-up" delay={index * 100}>
                <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-24 gradient-hero scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold hero-text text-center mb-8">
                {t('contact.title')}
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="zoom-in" delay={100}>
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/20">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
