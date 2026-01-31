import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Kaihua" className="h-12 w-12 object-contain" />
              <div>
                <span className="text-xl font-heading font-bold text-white">KAIHUA</span>
                <span className="block text-sm text-white/80">
                  Automobile Export
                </span>
              </div>
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              {t('footer.company')}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span>7th Floor, No. 4 Huihong Financial Port, Harbin</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>+86 189 4344 4284</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="h-4 w-4 text-primary" />
                <span>export@kaihua-auto.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-white">
              {t('nav.home')}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-white/80 hover:text-primary transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/process"
                className="text-sm text-white/80 hover:text-primary transition-colors"
              >
                {t('nav.process')}
              </Link>
              <Link
                to="/inspection"
                className="text-sm text-white/80 hover:text-primary transition-colors"
              >
                {t('nav.inspection')}
              </Link>
              <Link
                to="/payment"
                className="text-sm text-white/80 hover:text-primary transition-colors"
              >
                {t('nav.payment')}
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-white">
              {t('nav.team')}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/team"
                className="text-sm text-white/80 hover:text-primary transition-colors"
              >
                {t('nav.team')}
              </Link>
              <Link
                to="/faq"
                className="text-sm text-white/80 hover:text-primary transition-colors"
              >
                {t('nav.faq')}
              </Link>
              <Link
                to="/contact"
                className="text-sm text-white/80 hover:text-primary transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-sm text-white/70">
            © {currentYear} Kaihua Automobile Export. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
