
import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.careers': 'Careers',
    
    // Home Page
    'home.hero.title': 'Building the Future',
    'home.hero.subtitle': 'Excellence in construction since 1995',
    'home.hero.cta': 'View Our Projects',
    'home.services.title': 'Our Services',
    'home.services.description': 'We provide a wide range of construction services with the highest standards of quality and safety',
    'home.projects.title': 'Featured Projects',
    'home.projects.viewAll': 'View All Projects',
    
    // Services
    'services.residential': 'Residential Building',
    'services.commercial': 'Commercial Construction',
    'services.industrial': 'Industrial Projects',
    'services.renovation': 'Renovation',
    'services.residential.desc': 'High-quality residential buildings that combine functionality with modern design',
    'services.commercial.desc': 'State-of-the-art commercial spaces designed for business success',
    'services.industrial.desc': 'Large-scale industrial facilities built to the highest industry standards',
    'services.renovation.desc': 'Transform your existing space with our professional renovation services',
    
    // Footer
    'footer.contact': 'Contact Us',
    'footer.rights': 'All Rights Reserved',
    'footer.address': '123 Construction St, Building City',
    
    // CTAs
    'cta.contact': 'Contact Us',
    'cta.quote': 'Get a Quote',
    'cta.learn': 'Learn More',
    
    // Language
    'language': 'Language',
    'language.english': 'English',
    'language.arabic': 'العربية',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بنا',
    'nav.careers': 'الوظائف',
    
    // Home Page
    'home.hero.title': 'بناء المستقبل',
    'home.hero.subtitle': 'التميز في البناء منذ عام 1995',
    'home.hero.cta': 'عرض مشاريعنا',
    'home.services.title': 'خدماتنا',
    'home.services.description': 'نقدم مجموعة واسعة من خدمات البناء بأعلى معايير الجودة والسلامة',
    'home.projects.title': 'مشاريع مميزة',
    'home.projects.viewAll': 'عرض جميع المشاريع',
    
    // Services
    'services.residential': 'البناء السكني',
    'services.commercial': 'البناء التجاري',
    'services.industrial': 'المشاريع الصناعية',
    'services.renovation': 'التجديد',
    'services.residential.desc': 'مباني سكنية عالية الجودة تجمع بين الوظائف والتصميم الحديث',
    'services.commercial.desc': 'مساحات تجارية حديثة مصممة لنجاح الأعمال',
    'services.industrial.desc': 'منشآت صناعية واسعة النطاق مبنية وفق أعلى معايير الصناعة',
    'services.renovation.desc': 'قم بتحويل المساحة الموجودة لديك من خلال خدمات التجديد الاحترافية',
    
    // Footer
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.address': '١٢٣ شارع البناء، مدينة العمار',
    
    // CTAs
    'cta.contact': 'اتصل بنا',
    'cta.quote': 'احصل على عرض سعر',
    'cta.learn': 'اعرف المزيد',
    
    // Language
    'language': 'اللغة',
    'language.english': 'English',
    'language.arabic': 'العربية',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Set the dir attribute on the document
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    // Add appropriate class for text direction
    document.documentElement.classList.remove('ltr', 'rtl');
    document.documentElement.classList.add(language === 'ar' ? 'rtl' : 'ltr');
    
    // Save the language to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
