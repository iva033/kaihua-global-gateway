import { Search, Wallet, ClipboardCheck, CreditCard, FileText, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      number: '01',
      title: t('process.step1'),
      description: t('process.step1.desc'),
      details: 'Вы отправляете запрос с параметрами: марка, модель, год, пробег, цвет, бюджет. Наши эксперты находят подходящие варианты.',
    },
    {
      icon: Wallet,
      number: '02',
      title: t('process.step2'),
      description: t('process.step2.desc'),
      details: 'Депозит возвращается после получения полной оплаты. Размер зависит от условий продавца.',
    },
    {
      icon: ClipboardCheck,
      number: '03',
      title: t('process.step3'),
      description: t('process.step3.desc'),
      details: 'Менеджер лично проверяет автомобиль, замеряет толщину ЛКП, фиксирует все дефекты на фото и видео.',
    },
    {
      icon: CreditCard,
      number: '04',
      title: t('process.step4'),
      description: t('process.step4.desc'),
      details: 'Оплата по контракту и счёту-фактуре. Средства поступают в течение 1-2 рабочих дней.',
    },
    {
      icon: FileText,
      number: '05',
      title: t('process.step5'),
      description: t('process.step5.desc'),
      details: 'Оформляем все необходимые экспортные документы в соответствии с требованиями таможни.',
    },
    {
      icon: Truck,
      number: '06',
      title: t('process.step6'),
      description: t('process.step6.desc'),
      details: 'Доставка до СВХ в Уссурийске. Далее растаможка осуществляется вашим брокером.',
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
                {t('process.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-xl hero-text-muted">
                Прозрачный пошаговый процесс от поиска до доставки
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <ScrollReveal 
                key={step.number} 
                variant={index % 2 === 0 ? 'fade-right' : 'fade-left'} 
                delay={index * 50}
              >
                <div
                  className={`relative flex gap-8 pb-12 last:pb-0 ${
                    index % 2 === 0 ? '' : 'flex-row-reverse text-right'
                  }`}
                >
                  {/* Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-20 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all ${
                        index % 2 === 0 ? 'mr-8' : 'ml-8'
                      }`}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <span className="text-primary text-sm font-medium">Шаг {step.number}</span>
                          <h3 className="font-heading font-semibold text-xl">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                      <span className="text-xl font-heading font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <h2 className="text-3xl font-heading font-bold mb-8">Сроки доставки</h2>
            </ScrollReveal>
            <ScrollReveal variant="zoom-in" delay={100}>
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
                <div className="text-6xl font-heading font-bold text-gradient mb-4">
                  10–25
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  дней до Уссурийска
                </p>
                <p className="text-sm text-muted-foreground">
                  Срок зависит от местоположения автомобиля в Китае и времени оформления документов
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
