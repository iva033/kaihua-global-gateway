import { Building2, MapPin, Award, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Heilongjiang Kaihua Automobile Import and Export Trading Co., Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">{t('about.history')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                35+ лет развития
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.history.text')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.today.text')}
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative pl-12 pb-10 last:pb-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h3 className="font-heading font-semibold text-xl mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-heading font-bold text-gradient mb-2">24</div>
              <p className="text-lg font-semibold mb-2">Автосалона</p>
              <p className="text-muted-foreground text-sm">В 4 городах провинции Хэйлунцзян</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-heading font-bold text-gradient mb-2">110 000</div>
              <p className="text-lg font-semibold mb-2">м² площади</p>
              <p className="text-muted-foreground text-sm">Собственные объекты и инфраструктура</p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-heading font-bold text-gradient mb-2">№1</div>
              <p className="text-lg font-semibold mb-2">В регионе</p>
              <p className="text-muted-foreground text-sm">По объёму экспорта в 2023-2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            {t('about.location')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-2">Штаб-квартира</h3>
              <p className="text-muted-foreground">г. Цзямусы, провинция Хэйлунцзян</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <Building2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-2">Юридический адрес</h3>
              <p className="text-muted-foreground">
                г. Харбин, ул. Чуансинь 2, д. 32, Хуйхун Финанс Порт, 7 этаж
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
