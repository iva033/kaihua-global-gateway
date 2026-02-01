import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О компании',
    'nav.process': 'Процесс работы',
    'nav.inspection': 'Проверка качества',
    'nav.payment': 'Оплата и логистика',
    'nav.team': 'Команда',
    'nav.faq': 'FAQ',
    'nav.contact': 'Связаться',
    
    // Hero
    'hero.title': 'Экспортер автомобилей №1',
    'hero.subtitle': 'в Хэйлунцзяне',
    'hero.years': '2023–2024 гг.',
    'hero.description': 'Heilongjiang Kaihua Automobile — крупнейшая дилерская группа региона с официальной лицензией на экспорт автомобилей',
    'hero.cta': 'Начать сотрудничество',
    'hero.learn': 'Узнать больше',
    
    // Stats
    'stats.years': 'лет опыта',
    'stats.cars': 'экспортированных авто',
    'stats.area': 'м² площадь объектов',
    'stats.dealers': 'автосалонов',
    
    // Trust
    'trust.title': 'Почему выбирают нас',
    'trust.stability': 'Надёжность',
    'trust.stability.desc': 'Реальное предприятие с общей площадью объектов 110 000 м². Гарантируем долгосрочную работу.',
    'trust.honesty': 'Честность',
    'trust.honesty.desc': 'Прозрачные условия, никакого обмана. Вся информация передаётся как есть.',
    'trust.experts': 'Профессионалы',
    'trust.experts.desc': 'Более 30 специалистов по экспорту — бывшие менеджеры дилерских центров.',
    'trust.speed': 'Оперативность',
    'trust.speed.desc': 'Быстрые ответы и подбор авто, чтобы не задерживать ваши продажи.',
    
    // About
    'about.title': 'О компании',
    'about.history': 'История',
    'about.history.text': 'Компания основана в 1989 году. Начав с автозапчастей, в 2006 году мы открыли первый автосалон Nissan, а затем создали 24 автосалона в 4 городах провинции Хэйлунцзян.',
    'about.today': 'Сегодня',
    'about.today.text': 'Мы являемся крупнейшей дилерской группой региона. В 2023 году была основана экспортная компания — одна из первых пяти пилотных предприятий с официальной лицензией.',
    'about.location': 'Расположение',
    'about.location.hq': 'Штаб-квартира: г. Цзямусы',
    'about.location.legal': 'Юридический адрес: г. Харбин',
    
    // Process
    'process.title': 'Процесс работы',
    'process.step1': 'Поиск автомобиля',
    'process.step1.desc': 'По ссылке клиента или нашими экспертами',
    'process.step2': 'Депозит',
    'process.step2.desc': '3 000 – 10 000 RMB',
    'process.step3': 'Инспекция',
    'process.step3.desc': 'Личный осмотр с фото/видео отчётом',
    'process.step4': 'Полная оплата',
    'process.step4.desc': 'Через ATB или VTB',
    'process.step5': 'Экспорт',
    'process.step5.desc': 'Оформление документов',
    'process.step6': 'Доставка',
    'process.step6.desc': '10–25 дней до Уссурийска',
    
    // Inspection
    'inspection.title': 'Проверка и контроль качества',
    'inspection.internal': 'Внутренняя проверка',
    'inspection.internal.desc': 'Личный осмотр менеджером с фото/видео отчётом и замерами толщиномером',
    'inspection.external': 'Сторонняя экспертиза',
    'inspection.external.desc': 'Профессиональный отчёт от агентств 268V или Chaboshi',
    'inspection.pricing': 'Стоимость проверки',
    'inspection.basic': 'Базовая',
    'inspection.basic.desc': 'Проверка на аварийность, подтопление, следы возгорания',
    'inspection.detailed': 'Детальная',
    'inspection.detailed.desc': 'Детальная проверка внешнего вида и салона',
    'inspection.full': 'Полная',
    'inspection.full.desc': 'Внешний вид, салон, двигатель и коробка передач',
    'inspection.mileage': 'Дополнительная проверка пробега',
    'inspection.battery': 'Дополнительная проверка аккумулятора',
    
    // Payment
    'payment.title': 'Оплата и логистика',
    'payment.methods': 'Способы оплаты',
    'payment.atb': 'Оплата через ATB',
    'payment.atb.desc': 'Прямые платежи в юанях на счёт в Bank of China',
    'payment.vtb': 'Оплата через VTB',
    'payment.vtb.desc': 'Перевод на счёт VTB Bank Shanghai Branch',
    'payment.logistics': 'Логистика',
    'payment.logistics.desc': 'Доставка до СВХ в Уссурийске для последующей растаможки брокером клиента',
    'payment.risks': 'Помощь с претензиями',
    'payment.risks.desc': 'В случае повреждений при перевозке помогаем подать претензию транспортной компании',
    
    // Team
    'team.title': 'Наша команда',
    'team.experts': '30+ специалистов',
    'team.experts.desc': 'Все — бывшие менеджеры дилерских центров с большим опытом работы с автомобилями',
    'team.service': 'Высокий сервис',
    'team.service.desc': 'Если вас не устроит менеджер — мы заменим его по первому требованию',
    'team.speed': 'Скорость реакции',
    'team.speed.desc': 'Мы понимаем важность быстрых ответов для вашего бизнеса',
    
    // FAQ
    'faq.title': 'Частые вопросы',
    'faq.q1': 'Как организован процесс закупки подержанных автомобилей?',
    'faq.a1': 'Вы отправляете нам запрос с параметрами: марка, модель, год, пробег, бюджет. Наш менеджер подбирает варианты и отправляет фото/видео материалы.',
    'faq.q2': 'Можете ли вы найти автомобиль по моей ссылке?',
    'faq.a2': 'Да, оба варианта возможны: вы можете самостоятельно найти автомобиль и отправить ссылку, либо мы подберём по вашим требованиям.',
    'faq.q3': 'Как проводится проверка автомобиля в другом городе?',
    'faq.a3': 'Мы просим продавца предоставить фото, видео и результаты проверки толщиномером. Также можно заказать независимую экспертизу.',
    'faq.q4': 'Какие гарантии от скрытых дефектов?',
    'faq.a4': 'Мы передаём всю информацию от продавца. Для полной уверенности рекомендуем заказать отчёт от 268V или Chaboshi.',
    'faq.q5': 'Какие сроки доставки до Уссурийска?',
    'faq.a5': '10–25 дней после получения оплаты, в зависимости от региона нахождения автомобиля.',
    
    // Contact Form
    'contact.title': 'Начать сотрудничество',
    'contact.subtitle': 'Заполните форму и мы свяжемся с вами в ближайшее время',
    'contact.name': 'Ваше имя',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.company': 'Компания',
    'contact.message': 'Сообщение',
    'contact.submit': 'Отправить заявку',
    'contact.success': 'Заявка отправлена!',
    'contact.error': 'Ошибка отправки',
    'contact.captcha': 'Подтвердите, что вы не робот',
    'contact.captcha.error': 'Решите пример для отправки формы',
    'contact.captcha.success': 'Проверка пройдена',
    'contact.captcha.refresh': 'Обновить',
    'contact.info.title': 'Контактная информация',
    'contact.info.address': 'Адрес',
    'contact.info.phone': 'Телефон',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Время работы',
    'contact.info.hours.value': 'Пн–Пт: 9:00 – 18:00 (UTC+8)',
    'contact.company.title': 'Реквизиты компании',
    'contact.form.title': 'Отправить заявку',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.company': 'Heilongjiang Kaihua Automobile Import and Export Trading Co., Ltd.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.inspection': 'Inspection',
    'nav.payment': 'Payment',
    'nav.team': 'Team',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': '#1 Auto Exporter',
    'hero.subtitle': 'in Heilongjiang',
    'hero.years': '2023–2024',
    'hero.description': 'Heilongjiang Kaihua Automobile — the largest dealer group in the region with an official car export license',
    'hero.cta': 'Start Partnership',
    'hero.learn': 'Learn More',
    
    // Stats
    'stats.years': 'years of experience',
    'stats.cars': 'exported cars',
    'stats.area': 'm² facility area',
    'stats.dealers': 'dealerships',
    
    // Trust
    'trust.title': 'Why Choose Us',
    'trust.stability': 'Reliability',
    'trust.stability.desc': 'Real enterprise with 110,000 m² total facility area. Long-term operation guaranteed.',
    'trust.honesty': 'Transparency',
    'trust.honesty.desc': 'Clear terms, no deception. All information is provided as-is.',
    'trust.experts': 'Professionals',
    'trust.experts.desc': 'Over 30 export specialists — former dealership managers.',
    'trust.speed': 'Responsiveness',
    'trust.speed.desc': 'Fast responses and car selection to not delay your sales.',
    
    // About
    'about.title': 'About Company',
    'about.history': 'History',
    'about.history.text': 'Founded in 1989. Starting with auto parts, in 2006 we opened the first Nissan dealership, then created 24 dealerships in 4 cities of Heilongjiang province.',
    'about.today': 'Today',
    'about.today.text': 'We are the largest dealer group in the region. In 2023, our export company was founded — one of the first five pilot enterprises with an official license.',
    'about.location': 'Location',
    'about.location.hq': 'Headquarters: Jiamusi',
    'about.location.legal': 'Legal address: Harbin',
    
    // Process
    'process.title': 'Work Process',
    'process.step1': 'Car Search',
    'process.step1.desc': 'By client link or our experts',
    'process.step2': 'Deposit',
    'process.step2.desc': '3,000 – 10,000 RMB',
    'process.step3': 'Inspection',
    'process.step3.desc': 'Personal inspection with photo/video report',
    'process.step4': 'Full Payment',
    'process.step4.desc': 'Via ATB or VTB',
    'process.step5': 'Export',
    'process.step5.desc': 'Document processing',
    'process.step6': 'Delivery',
    'process.step6.desc': '10–25 days to Ussuriysk',
    
    // Inspection
    'inspection.title': 'Quality Control & Inspection',
    'inspection.internal': 'Internal Inspection',
    'inspection.internal.desc': 'Personal manager inspection with photo/video report and paint thickness measurements',
    'inspection.external': 'Third-party Expertise',
    'inspection.external.desc': 'Professional report from 268V or Chaboshi agencies',
    'inspection.pricing': 'Inspection Pricing',
    'inspection.basic': 'Basic',
    'inspection.basic.desc': 'Accident, flood damage, fire traces check',
    'inspection.detailed': 'Detailed',
    'inspection.detailed.desc': 'Detailed exterior and interior inspection',
    'inspection.full': 'Full',
    'inspection.full.desc': 'Exterior, interior, engine and transmission',
    'inspection.mileage': 'Additional mileage check',
    'inspection.battery': 'Additional battery check',
    
    // Payment
    'payment.title': 'Payment & Logistics',
    'payment.methods': 'Payment Methods',
    'payment.atb': 'ATB Payment',
    'payment.atb.desc': 'Direct CNY payments to Bank of China account',
    'payment.vtb': 'VTB Payment',
    'payment.vtb.desc': 'Transfer to VTB Bank Shanghai Branch account',
    'payment.logistics': 'Logistics',
    'payment.logistics.desc': 'Delivery to bonded warehouse in Ussuriysk for customs clearance by client broker',
    'payment.risks': 'Claims Assistance',
    'payment.risks.desc': 'In case of transport damage, we help file claims with the carrier',
    
    // Team
    'team.title': 'Our Team',
    'team.experts': '30+ Specialists',
    'team.experts.desc': 'All former dealership managers with extensive automotive experience',
    'team.service': 'High Service',
    'team.service.desc': 'If you are not satisfied with a manager — we will replace them immediately',
    'team.speed': 'Quick Response',
    'team.speed.desc': 'We understand the importance of fast responses for your business',
    
    // FAQ
    'faq.title': 'FAQ',
    'faq.q1': 'How is the used car procurement process organized?',
    'faq.a1': 'You send us a request with parameters: make, model, year, mileage, budget. Our manager selects options and sends photo/video materials.',
    'faq.q2': 'Can you find a car by my link?',
    'faq.a2': 'Yes, both options are possible: you can find a car yourself and send a link, or we will select according to your requirements.',
    'faq.q3': 'How is car inspection conducted in another city?',
    'faq.a3': 'We ask the seller to provide photos, videos and paint thickness gauge results. Independent expertise can also be ordered.',
    'faq.q4': 'What guarantees against hidden defects?',
    'faq.a4': 'We transmit all information from the seller. For complete confidence, we recommend ordering a report from 268V or Chaboshi.',
    'faq.q5': 'What are the delivery times to Ussuriysk?',
    'faq.a5': '10–25 days after payment receipt, depending on the car location region.',
    
    // Contact Form
    'contact.title': 'Start Partnership',
    'contact.subtitle': 'Fill out the form and we will contact you shortly',
    'contact.name': 'Your Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.submit': 'Send Request',
    'contact.success': 'Request sent!',
    'contact.error': 'Submission error',
    'contact.captcha': 'Confirm you are not a robot',
    'contact.captcha.error': 'Solve the equation to submit',
    'contact.captcha.success': 'Verification passed',
    'contact.captcha.refresh': 'Refresh',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Working Hours',
    'contact.info.hours.value': 'Mon–Fri: 9:00 AM – 6:00 PM (UTC+8)',
    'contact.company.title': 'Company Details',
    'contact.form.title': 'Send a Request',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.company': 'Heilongjiang Kaihua Automobile Import and Export Trading Co., Ltd.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('kaihua-language');
    return (saved as Language) || 'ru';
  });

  useEffect(() => {
    localStorage.setItem('kaihua-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    // Add transition class for smooth animation
    document.documentElement.classList.add('language-transitioning');
    
    setLanguageState(lang);
    
    // Remove class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('language-transitioning');
    }, 400);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
