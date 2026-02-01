import { Building2, MapPin, Award, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  const { t } = useLanguage();

  const timeline = [
    { year: '1989', title: 'Основание', desc: 'Начало с автозапчастей' },
    { year: '2006', title: 'Первый салон', desc: 'Открытие дилерского центра Nissan' },
    { year: '2023', title: 'Экспорт', desc: 'Получение лицензии на экспорт' },
    { year: '2024', title: '№1 в регионе', desc: 'Лидер по объёму экспорта' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                {t('about.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-xl text-primary-foreground/70">
                Heilongjiang Kaihua Automobile Import and Export Trading Co., Ltd.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal variant="fade-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{t('about.history')}</span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={100}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  35+ лет развития
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={200}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('about.history.text')}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fade-right" delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.today.text')}
                </p>
              </ScrollReveal>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} variant="fade-left" delay={index * 100}>
                  <div className="relative pl-12 pb-10 last:pb-0">
                    <div className="absolute left-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h3 className="font-heading font-semibold text-xl mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, value: '24', label: 'Автосалона', desc: 'В 4 городах провинции Хэйлунцзян' },
              { icon: MapPin, value: '110 000', label: 'м² площади', desc: 'Собственные объекты и инфраструктура' },
              { icon: Award, value: '№1', label: 'В регионе', desc: 'По объёму экспорта в 2023-2024' },
            ].map((item, index) => (
              <ScrollReveal key={item.label} variant="zoom-in" delay={index * 100}>
                <div className="bg-card rounded-2xl p-8 border border-border/50 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">{item.value}</div>
                  <p className="text-lg font-semibold mb-2">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              {t('about.location')}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <ScrollReveal variant="fade-right" delay={100}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Штаб-квартира</h3>
                <p className="text-muted-foreground">г. Цзямусы, провинция Хэйлунцзян</p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-left" delay={200}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                <Building2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Юридический адрес</h3>
                <p className="text-muted-foreground">
                  г. Харбин, ул. Чуансинь 2, д. 32, Хуйхун Финанс Порт, 7 этаж
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Yandex Map */}
          <ScrollReveal variant="zoom-in" delay={300}>
            <div className="max-w-4xl mx-auto">
              <a
                href="https://yandex.ru/maps/-/CHEn4L-f"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
              >
                <div className="relative">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=130.361800%2C46.808100&z=13&l=map&pt=130.361800,46.808100,pm2rdm"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen
                    style={{ border: 0 }}
                    className="pointer-events-none"
                    title="Местоположение компании Kaihua — г. Цзямусы"
                  />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-lg">
                      Открыть в Яндекс Картах
                    </div>
                  </div>
                </div>
              </a>
              <p className="text-center text-muted-foreground text-sm mt-4">
                Нажмите на карту, чтобы открыть в Яндекс Картах
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
