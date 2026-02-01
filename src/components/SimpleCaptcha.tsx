import { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';

interface SimpleCaptchaProps {
  onVerify: (isValid: boolean) => void;
  error?: boolean;
}

const SimpleCaptcha = ({ onVerify, error }: SimpleCaptchaProps) => {
  const { t } = useLanguage();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const generateNewCaptcha = useCallback(() => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer('');
    setIsVerified(false);
    onVerify(false);
  }, [onVerify]);

  useEffect(() => {
    generateNewCaptcha();
  }, []);

  const handleAnswerChange = (value: string) => {
    setUserAnswer(value);
    const answer = parseInt(value, 10);
    const isCorrect = answer === num1 + num2;
    setIsVerified(isCorrect);
    onVerify(isCorrect);
  };

  return (
    <div className="space-y-2">
      <Label>{t('contact.captcha')} *</Label>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 font-mono text-lg">
          <span>{num1}</span>
          <span>+</span>
          <span>{num2}</span>
          <span>=</span>
        </div>
        <Input
          type="number"
          value={userAnswer}
          onChange={(e) => handleAnswerChange(e.target.value)}
          placeholder="?"
          className={`w-20 text-center bg-background/50 border-border/50 focus:border-primary ${
            error && !isVerified ? 'border-destructive' : ''
          } ${isVerified ? 'border-primary' : ''}`}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={generateNewCaptcha}
          className="flex-shrink-0"
          title={t('contact.captcha.refresh')}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      {error && !isVerified && (
        <p className="text-sm text-destructive">{t('contact.captcha.error')}</p>
      )}
      {isVerified && (
        <p className="text-sm text-primary">✓ {t('contact.captcha.success')}</p>
      )}
    </div>
  );
};

export default SimpleCaptcha;
