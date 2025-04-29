
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Globe, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-8 w-8 text-construction-gold" />
              <span className={cn(
                "text-xl font-bold",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                BildCo
              </span>
            </div>
            <p className={cn(
              "text-gray-300 mb-4",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-construction-gold" />
                <span className={cn(
                  "text-sm text-gray-300",
                  language === 'en' ? 'font-inter' : 'font-cairo'
                )}>
                  {t('footer.address')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-construction-gold" />
                <span className="text-sm text-gray-300">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-construction-gold" />
                <span className="text-sm text-gray-300">info@bildco.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={cn(
              "text-lg font-semibold mb-4 text-construction-gold",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('nav.home')}
            </h3>
            <ul className="space-y-2">
              {[
                { label: t('nav.about'), path: '/about' },
                { label: t('nav.services'), path: '/services' },
                { label: t('nav.projects'), path: '/projects' },
                { label: t('nav.contact'), path: '/contact' },
                { label: t('nav.careers'), path: '/careers' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={cn(
                      "text-gray-300 hover:text-construction-gold transition-colors",
                      language === 'en' ? 'font-inter' : 'font-cairo'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={cn(
              "text-lg font-semibold mb-4 text-construction-gold",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('nav.services')}
            </h3>
            <ul className="space-y-2">
              {[
                t('services.residential'),
                t('services.commercial'),
                t('services.industrial'),
                t('services.renovation'),
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className={cn(
                      "text-gray-300 hover:text-construction-gold transition-colors",
                      language === 'en' ? 'font-inter' : 'font-cairo'
                    )}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language & Social */}
          <div>
            <h3 className={cn(
              "text-lg font-semibold mb-4 text-construction-gold",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('language')}
            </h3>
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-4 w-4 text-construction-gold" />
              <div className="flex gap-2">
                <button
                  onClick={() => {}}
                  className={cn(
                    "text-sm hover:text-construction-gold transition-colors",
                    language === 'en' ? 'text-construction-gold' : 'text-gray-300'
                  )}
                >
                  {t('language.english')}
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => {}}
                  className={cn(
                    "text-sm hover:text-construction-gold transition-colors",
                    language === 'ar' ? 'text-construction-gold' : 'text-gray-300'
                  )}
                >
                  {t('language.arabic')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className={cn(
            "text-sm text-gray-400",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            © {currentYear} BildCo. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
