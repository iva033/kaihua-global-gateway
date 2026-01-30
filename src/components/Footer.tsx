import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Kaihua" className="h-12 w-12 object-contain" />
              <div>
                <span className="text-xl font-heading font-bold">KAIHUA</span>
                <span className="block text-sm text-primary-foreground/70">
                  Automobile Export
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              {t('footer.company')}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>7th Floor, No. 4 Huihong Financial Port, Harbin</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>+86 XXX XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>export@kaihua-auto.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6">
              {t('nav.home')}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/process"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {t('nav.process')}
              </Link>
              <Link
                to="/inspection"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {t('nav.inspection')}
              </Link>
              <Link
                to="/payment"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {t('nav.payment')}
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6">
              {t('nav.team')}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/team"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {t('nav.team')}
              </Link>
              <Link
                to="/faq"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {t('nav.faq')}
              </Link>
              <Link
                to="/contact"
                className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/50">
            © {currentYear} Kaihua Automobile Export. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
