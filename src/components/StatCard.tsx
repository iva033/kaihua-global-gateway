import { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatCard = ({ value, label, prefix = '', suffix = '' }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value.replace(/\D/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.floor(increment * step), numericValue);
      
      // Format with spaces for thousands
      const formatted = current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      setDisplayValue(formatted);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value.replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all hover:shadow-glow group"
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">{label}</div>
    </div>
  );
};

export default StatCard;
