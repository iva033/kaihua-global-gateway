import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
    },
    {
      question: 'Какие автомобили вы можете найти?',
      answer: 'Мы работаем со всеми популярными марками: Audi, BMW, Mercedes-Benz, Toyota, Lexus, Porsche и другие. Можем найти как новые, так и подержанные автомобили с пробегом.',
    },
    {
      question: 'Как формируется цена на автомобиль?',
      answer: 'Цена складывается из стоимости автомобиля у продавца, комиссии за наши услуги, транспортных расходов и стоимости оформления документов. Мы предоставляем полную расшифровку всех затрат.',
    },
    {
      question: 'Что делать если автомобиль повреждён при перевозке?',
      answer: 'При приёмке на СВХ в Уссурийске необходимо проверить автомобиль и зафиксировать повреждения. Если сообщить нам до вывоза со склада — мы поможем подать претензию транспортной компании.',
    },
    {
      question: 'Можно ли установить дополнительное оборудование?',
      answer: 'Да, мы можем организовать установку защитной плёнки, подогрева сидений, устранение мелких дефектов и другие работы до отправки автомобиля.',
    },
    {
      question: 'Какие документы я получу?',
      answer: 'Вы получите контракт, счёт-фактуру, экспортную декларацию и все необходимые документы для растаможки в России.',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                {t('faq.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-xl text-primary-foreground/70">
                Ответы на популярные вопросы о работе с нами
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} variant="fade-up" delay={index * 50}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card rounded-2xl border border-border/50 px-6 hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Остались вопросы?
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-lg text-muted-foreground mb-8">
                Свяжитесь с нами — мы ответим на все ваши вопросы и поможем начать сотрудничество
              </p>
            </ScrollReveal>
            <ScrollReveal variant="zoom-in" delay={200}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 gradient-primary text-primary-foreground font-semibold rounded-xl shadow-glow hover:scale-105 transition-transform"
              >
                Связаться с нами
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
