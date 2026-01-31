import { Landmark, CreditCard, Truck, ShieldCheck, Copy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import ScrollReveal from '@/components/ScrollReveal';

const Payment = () => {
  const { t } = useLanguage();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} скопирован`);
  };

  const bankDetails = {
    atb: {
      name: 'HEILONGJIANG KAIHUA AUTOMOBILE IMPORT AND EXPORT TRADING CO., LTD.',
      account: '1715 0361 8214',
      swift: 'BKCHCNBJ860',
      bank: 'BANK OF CHINA HARBIN XIANGFANG BRANCH',
      address: 'NO. 61 ZHONGSHAN ROAD, XIANGFANG DISTRICT, HARBIN CITY',
    },
    vtb: {
      name: 'Heilongjiang Kaihua Automobile Import and Export Trading Co., Ltd.',
      account: '40807156800610007894',
      swift: 'VTBRCNSH',
      bank: 'VTB BANK SHANGHAI BRANCH',
      address: 'ROOM 2503-2505, 25TH FLOOR, NO. 501 YINCHENG MIDDLE ROAD, CHINA (SHANGHAI) PILOT FREE TRADE ZONE',
    },
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                {t('payment.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={100}>
              <p className="text-xl text-primary-foreground/70">
                Надёжные способы оплаты и доставка до Уссурийска
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              {t('payment.methods')}
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* ATB */}
            <ScrollReveal variant="fade-right">
              <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                    <Landmark className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold">{t('payment.atb')}</h3>
                    <p className="text-sm text-muted-foreground">Bank of China</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">Счёт в юанях</p>
                      <p className="font-mono font-semibold">{bankDetails.atb.account}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(bankDetails.atb.account, 'Счёт')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">SWIFT</p>
                      <p className="font-mono font-semibold">{bankDetails.atb.swift}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(bankDetails.atb.swift, 'SWIFT')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Банк</p>
                    <p className="text-sm">{bankDetails.atb.bank}</p>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Получатель</p>
                    <p className="text-sm">{bankDetails.atb.name}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* VTB */}
            <ScrollReveal variant="fade-left" delay={100}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                    <CreditCard className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold">{t('payment.vtb')}</h3>
                    <p className="text-sm text-muted-foreground">VTB Shanghai</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">Счёт в юанях</p>
                      <p className="font-mono font-semibold">{bankDetails.vtb.account}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(bankDetails.vtb.account, 'Счёт')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">SWIFT</p>
                      <p className="font-mono font-semibold">{bankDetails.vtb.swift}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(bankDetails.vtb.swift, 'SWIFT')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Банк</p>
                    <p className="text-sm">{bankDetails.vtb.bank}</p>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Получатель</p>
                    <p className="text-sm">{bankDetails.vtb.name}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal variant="fade-right">
              <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Truck className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {t('payment.logistics')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('payment.logistics.desc')}
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Доставка до СВХ в Уссурийске</li>
                  <li>• 10–25 дней с момента оплаты</li>
                  <li>• Растаможка брокером клиента</li>
                  <li>• Возможность установки доп. опций</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={100}>
              <div className="bg-card rounded-2xl p-8 border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <ShieldCheck className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {t('payment.risks')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('payment.risks.desc')}
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Проверка при приёмке на СВХ</li>
                  <li>• Фиксация повреждений</li>
                  <li>• Подача претензий перевозчику</li>
                  <li>• Важно: сообщить до вывоза со склада</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
