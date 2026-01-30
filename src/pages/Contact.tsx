import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: '7th Floor, No. 4 Huihong Financial Port, No. 32 Chuangxin 2nd Road, Songbei District, Harbin',
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+86 XXX XXXX XXXX',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'export@kaihua-auto.com',
    },
    {
      icon: Clock,
      title: 'Время работы',
      content: 'Пн–Пт: 9:00 – 18:00 (UTC+8)',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Заполните форму и мы свяжемся с вами в ближайшее время
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-heading font-bold mb-8">
                Контактная информация
              </h2>
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}

              {/* Company Info */}
              <div className="p-6 rounded-xl bg-muted/50 mt-8">
                <h3 className="font-heading font-semibold mb-3">Реквизиты компании</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Heilongjiang Kaihua Automobile Import and Export Trading Co., Ltd.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  黑龙江凯华汽车进出口贸易有限公司
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
                <h2 className="text-2xl font-heading font-bold mb-8">
                  Отправить заявку
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
