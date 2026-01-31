import { Eye, FileSearch, Camera, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const Inspection = () => {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      name: t('inspection.basic'),
      price: '300',
      description: t('inspection.basic.desc'),
      features: ['Проверка на аварийность', 'Проверка на подтопление', 'Следы возгорания'],
    },
    {
      name: t('inspection.detailed'),
      price: '500',
      description: t('inspection.detailed.desc'),
      features: ['Всё из базовой проверки', 'Детальный осмотр кузова', 'Проверка салона', 'Косметические дефекты'],
      popular: true,
    },
    {
      name: t('inspection.full'),
      price: '700',
      description: t('inspection.full.desc'),
      features: ['Всё из детальной проверки', 'Проверка двигателя', 'Проверка КПП', 'Техническое состояние'],
    },
  ];

  const additionalChecks = [
    { name: t('inspection.mileage'), price: '+50 RMB' },
    { name: t('inspection.battery'), price: '+200 RMB' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                {t('inspection.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-xl text-primary-foreground/70">
                Многоуровневая система проверки для вашего спокойствия
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal variant="fade-right">
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {t('inspection.internal')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('inspection.internal.desc')}
                </p>
                <ul className="space-y-3">
                  {['Фото/видео отчёт', 'Замеры толщиномером', 'Фиксация всех дефектов', 'Видеопросмотр с продавцом'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <Camera className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={100}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors h-full">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <FileSearch className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {t('inspection.external')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('inspection.external.desc')}
                </p>
                <ul className="space-y-3">
                  {['Агентство 268V', 'Агентство Chaboshi', 'Отчёт за 1-2 дня', 'Полная независимость'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              {t('inspection.pricing')}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <ScrollReveal key={tier.name} variant="fade-up" delay={index * 100}>
                <div
                  className={`relative bg-card rounded-2xl p-8 border transition-all hover:shadow-lg h-full ${
                    tier.popular
                      ? 'border-primary shadow-glow scale-105'
                      : 'border-border/50 hover:border-primary/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 gradient-primary rounded-full text-xs font-medium text-primary-foreground">
                      Популярный
                    </div>
                  )}
                  <h3 className="text-xl font-heading font-semibold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-heading font-bold text-gradient">{tier.price}</span>
                    <span className="text-muted-foreground">RMB</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional Checks */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="mt-12 max-w-md mx-auto">
              <h3 className="text-lg font-heading font-semibold text-center mb-6">
                Дополнительные проверки
              </h3>
              <div className="space-y-3">
                {additionalChecks.map((check) => (
                  <div
                    key={check.name}
                    className="flex items-center justify-between bg-card rounded-xl p-4 border border-border/50"
                  >
                    <span className="text-sm">{check.name}</span>
                    <span className="font-semibold text-primary">{check.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Inspection;
