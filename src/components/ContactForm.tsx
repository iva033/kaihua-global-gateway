import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

import { supabase } from '@/integrations/supabase/client';
import SimpleCaptcha from './SimpleCaptcha';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Минимум 2 символа').max(100, 'Максимум 100 символов'),
  phone: z.string().trim().min(5, 'Введите корректный номер').max(20, 'Максимум 20 символов'),
  email: z.string().trim().email('Некорректный email').max(255, 'Максимум 255 символов'),
  company: z.string().trim().max(100, 'Максимум 100 символов').optional(),
  message: z.string().trim().max(1000, 'Максимум 1000 символов').optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!isCaptchaValid) {
      setCaptchaError(true);
      return;
    }
    
    setCaptchaError(false);
    
    try {
      const { data: response, error } = await supabase.functions.invoke('send-telegram', {
        body: data,
      });
      
      if (error) {
        throw error;
      }
      
      console.log('Form submitted successfully');
      
      setIsSubmitted(true);
      toast.success(t('contact.success'));
      reset();
      setIsCaptchaValid(false);
      
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(t('contact.error'));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t('contact.name')} *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder={t('contact.name')}
            className={`bg-background/50 border-border/50 focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{t('contact.phone')} *</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+7 XXX XXX XX XX"
            className={`bg-background/50 border-border/50 focus:border-primary ${errors.phone ? 'border-destructive' : ''}`}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">{t('contact.email')} *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="email@example.com"
            className={`bg-background/50 border-border/50 focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">{t('contact.company')}</Label>
          <Input
            id="company"
            {...register('company')}
            placeholder={t('contact.company')}
            className="bg-background/50 border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t('contact.message')}</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder={t('contact.message')}
          rows={4}
          className="bg-background/50 border-border/50 focus:border-primary resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <SimpleCaptcha onVerify={setIsCaptchaValid} error={captchaError} />

      <Button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full gradient-primary text-primary-foreground font-semibold py-6 text-lg shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
      >
        {isSubmitted ? (
          <>
            <CheckCircle className="mr-2 h-5 w-5 animate-scale-in" />
            {t('contact.success')}
          </>
        ) : isSubmitting ? (
          <span className="animate-pulse">...</span>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            {t('contact.submit')}
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
