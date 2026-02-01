import { Users, Headphones, Zap, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const Team = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t('team.experts'),
      description: t('team.experts.desc'),
      stat: '30+',
      statLabel: 'специалистов',
    },
    {
      icon: Award,
      title: 'Опыт работы',
      description: 'Все сотрудники — бывшие менеджеры дилерских центров нашей группы с многолетним опытом',
      stat: '600+',
      statLabel: 'сотрудников в группе',
    },
    {
      icon: Headphones,
      title: t('team.service'),
      description: t('team.service.desc'),
      stat: '24/7',
      statLabel: 'поддержка',
    },
    {
      icon: Zap,
      title: t('team.speed'),
      description: t('team.speed.desc'),
      stat: '< 1ч',
      statLabel: 'время ответа',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold hero-text mb-6">
                {t('team.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-xl hero-text-muted">
                Профессионалы с богатым опытом в автомобильной индустрии
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} variant="fade-up" delay={index * 100}>
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-heading font-bold text-gradient">
                          {feature.stat}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {feature.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manager Change Policy */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal variant="zoom-in">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8">
                <Headphones className="h-10 w-10 text-primary-foreground" />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Гибкий сервис
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Если по какой-либо причине вас не устроит работа вашего персонального менеджера,
                вы можете сообщить нам — мы заменим его на другого специалиста без вопросов.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
                <Users className="h-5 w-5" />
                <span>Замена менеджера по первому требованию</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '35+', label: 'лет на рынке' },
              { value: '24', label: 'автосалона' },
              { value: '600+', label: 'сотрудников' },
              { value: '10 000+', label: 'экспортированных авто' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} variant="zoom-in" delay={index * 100}>
                <div className="text-center p-6 rounded-2xl bg-card border border-border/50">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
