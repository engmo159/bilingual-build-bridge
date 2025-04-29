
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Globe, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="w-full bg-background sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Building className="h-8 w-8 text-construction-gold" />
          <span className={cn(
            "text-xl font-bold",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            BildCo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-foreground hover:text-construction-gold transition-colors",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe className="h-4 w-4 mr-1" />
            <span className={language === 'en' ? 'font-inter' : 'font-cairo'}>
              {language === 'en' ? 'العربية' : 'English'}
            </span>
          </Button>

          {/* CTA Button */}
          <Button className="bg-construction-gold hover:bg-construction-gold/90 text-construction-darkGray">
            {t('cta.contact')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-foreground hover:text-construction-gold transition-colors py-2",
                  language === 'en' ? 'font-inter' : 'font-cairo'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center justify-center gap-1 w-full"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            >
              <Globe className="h-4 w-4 mr-1" />
              <span className={language === 'en' ? 'font-inter' : 'font-cairo'}>
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </Button>
            
            {/* CTA Button */}
            <Button 
              className="bg-construction-gold hover:bg-construction-gold/90 text-construction-darkGray w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('cta.contact')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
