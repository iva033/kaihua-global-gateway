import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/?scrollTo=main-content');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check if contact section is in view (only on homepage)
      if (location.pathname === '/') {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          const isVisible = rect.top <= 150 && rect.bottom >= 150;
          setIsContactSectionVisible(isVisible);
        }
      } else {
        setIsContactSectionVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/process', label: t('nav.process') },
    { path: '/inspection', label: t('nav.inspection') },
    { path: '/payment', label: t('nav.payment') },
    { path: '/team', label: t('nav.team') },
    { path: '/faq', label: t('nav.faq') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark py-3 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Kaihua"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-heading font-bold hero-text">
                KAIHUA
              </span>
              <span className="block text-xs hero-text-muted">
                Automobile Export
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === link.path
                    ? 'text-primary bg-white/10'
                    : 'hero-text hover:text-primary hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Contact link with scroll detection */}
            <Link
              to={location.pathname === '/' ? '#contact-section' : '/contact'}
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                location.pathname === '/contact' || isContactSectionVisible
                  ? 'text-primary bg-white/10'
                  : 'hero-text hover:text-primary hover:bg-white/10'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="hero-text hover:text-primary hover:bg-white/10 px-3 py-2 gap-1.5 rounded-lg"
              title={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hero-text hover:text-primary hover:bg-white/10"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* CTA Button */}
            <Link to="/contact" className="hidden md:block">
              <Button className="gradient-primary text-white font-medium shadow-glow">
                {t('nav.contact')}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hero-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
                    location.pathname === link.path
                      ? 'text-primary bg-white/10'
                      : 'hero-text hover:text-primary hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2"
              >
                <Button className="w-full gradient-primary text-white font-medium">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
