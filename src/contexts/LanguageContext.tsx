
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
    'services.pageTitle': 'Our Services',
    'services.pageSubtitle': 'Comprehensive construction solutions for all your building needs',
    'services.mainTitle': 'Our Core Services',
    'services.mainDescription': 'We provide a comprehensive range of construction services with a focus on quality, safety, and client satisfaction',
    'services.additionalTitle': 'Additional Services',
    'services.additionalDescription': 'Beyond our core offerings, we provide specialized services to meet diverse construction needs',
    'services.additional.architecture': 'Architectural Design',
    'services.additional.architecture.desc': 'Professional architectural design services tailored to your specific needs and preferences',
    'services.additional.maintenance': 'Maintenance & Repair',
    'services.additional.maintenance.desc': 'Comprehensive maintenance and repair services to keep your property in optimal condition',
    'services.additional.consulting': 'Construction Consulting',
    'services.additional.consulting.desc': 'Expert advice on construction projects, from planning and design to execution and completion',
    'services.additional.emergency': 'Emergency Services',
    'services.additional.emergency.desc': '24/7 emergency construction services to address urgent structural issues and repairs',
    
    // About
    'about.title': 'About BildCo',
    'about.ourStory.title': 'Our Story',
    'about.ourStory.p1': 'Founded in 1995, BildCo has grown from a small family business to one of the leading construction companies in the region. Our journey began with residential projects, and over the years, we have expanded our expertise to commercial, industrial, and renovation projects.',
    'about.ourStory.p2': 'With a team of highly skilled professionals and a commitment to quality, we have successfully completed over 250 projects, earning the trust of our clients and numerous industry awards along the way.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To deliver exceptional construction services that transform our clients\' visions into reality, while maintaining the highest standards of quality, safety, and sustainability.',
    'about.vision.title': 'Our Vision',
    'about.vision.content': 'To be the most trusted and respected construction company, known for our innovation, integrity, and commitment to excellence in every project we undertake.',
    'about.stats.projects': 'Projects Completed',
    'about.stats.years': 'Years of Experience',
    'about.stats.employees': 'Expert Employees',
    'about.stats.awards': 'Industry Awards',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Discover our portfolio of successful construction projects',
    'projects.filters.all': 'All Projects',
    'projects.filters.residential': 'Residential',
    'projects.filters.commercial': 'Commercial',
    'projects.filters.industrial': 'Industrial',
    'projects.filters.renovation': 'Renovation',
    'projects.noProjects': 'No projects found in this category.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team for any inquiries or project discussions',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.workingHours': 'Mon - Fri: 8:00 AM - 5:00 PM',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.nameRequired': 'Name is required',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'Your email',
    'contact.form.emailInvalid': 'Valid email is required',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': 'Your phone number',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'Message subject',
    'contact.form.subjectRequired': 'Subject is required',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Your message',
    'contact.form.messageRequired': 'Message is required',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Message Sent!',
    'contact.form.success.description': 'We will get back to you as soon as possible.',
    'contact.form.error.title': 'Error',
    'contact.form.error.description': 'There was a problem sending your message. Please try again.',
    'contact.info.title': 'Contact Information',
    
    // Footer
    'footer.contact': 'Contact Us',
    'footer.rights': 'All Rights Reserved',
    'footer.address': '123 Construction St, Building City',
    
    // CTAs
    'cta.contact': 'Contact Us',
    'cta.quote': 'Get a Quote',
    'cta.learn': 'Learn More',
    'cta.startProject': 'Ready to Start Your Project?',
    'cta.consultation': 'Contact us today for a free consultation and quote. Our team is ready to bring your construction vision to life.',
    
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
    'services.pageTitle': 'خدماتنا',
    'services.pageSubtitle': 'حلول بناء شاملة لجميع احتياجات البناء الخاصة بك',
    'services.mainTitle': 'خدماتنا الأساسية',
    'services.mainDescription': 'نقدم مجموعة شاملة من خدمات البناء مع التركيز على الجودة والسلامة ورضا العملاء',
    'services.additionalTitle': 'خدمات إضافية',
    'services.additionalDescription': 'بالإضافة إلى خدماتنا الأساسية، نقدم خدمات متخصصة لتلبية احتياجات البناء المتنوعة',
    'services.additional.architecture': 'التصميم المعماري',
    'services.additional.architecture.desc': 'خدمات التصميم المعماري المهنية المصممة خصيصًا لاحتياجاتك وتفضيلاتك',
    'services.additional.maintenance': 'الصيانة والإصلاح',
    'services.additional.maintenance.desc': 'خدمات صيانة وإصلاح شاملة للحفاظ على ممتلكاتك في حالة مثالية',
    'services.additional.consulting': 'استشارات البناء',
    'services.additional.consulting.desc': 'نصائح خبيرة في مشاريع البناء، من التخطيط والتصميم إلى التنفيذ والإنجاز',
    'services.additional.emergency': 'خدمات الطوارئ',
    'services.additional.emergency.desc': 'خدمات بناء للطوارئ على مدار الساعة لمعالجة المشكلات الهيكلية العاجلة والإصلاحات',
    
    // About
    'about.title': 'عن بيلدكو',
    'about.ourStory.title': 'قصتنا',
    'about.ourStory.p1': 'تأسست بيلدكو في عام 1995، ونمت من شركة عائلية صغيرة إلى واحدة من شركات البناء الرائدة في المنطقة. بدأت رحلتنا بالمشاريع السكنية، وعلى مر السنين، قمنا بتوسيع خبرتنا إلى المشاريع التجارية والصناعية ومشاريع التجديد.',
    'about.ourStory.p2': 'مع فريق من المهنيين ذوي المهارات العالية والالتزام بالجودة، أنجزنا بنجاح أكثر من 250 مشروعًا، وكسبنا ثقة عملائنا والعديد من الجوائز في هذا المجال.',
    'about.mission.title': 'مهمتنا',
    'about.mission.content': 'تقديم خدمات بناء استثنائية تحول رؤية عملائنا إلى واقع، مع الحفاظ على أعلى معايير الجودة والسلامة والاستدامة.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.content': 'أن نكون شركة البناء الأكثر ثقة واحترامًا، المعروفة بابتكارنا ونزاهتنا والتزامنا بالتميز في كل مشروع نقوم به.',
    'about.stats.projects': 'المشاريع المنجزة',
    'about.stats.years': 'سنوات الخبرة',
    'about.stats.employees': 'موظفون خبراء',
    'about.stats.awards': 'جوائز الصناعة',
    
    // Projects
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'اكتشف محفظة مشاريعنا الناجحة في البناء',
    'projects.filters.all': 'جميع المشاريع',
    'projects.filters.residential': 'سكني',
    'projects.filters.commercial': 'تجاري',
    'projects.filters.industrial': 'صناعي',
    'projects.filters.renovation': 'تجديد',
    'projects.noProjects': 'لم يتم العثور على مشاريع في هذه الفئة.',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا لأي استفسارات أو مناقشات المشاريع',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.workingHours': 'الاثنين - الجمعة: 8:00 ص - 5:00 م',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'الاسم',
    'contact.form.namePlaceholder': 'اسمك',
    'contact.form.nameRequired': 'الاسم مطلوب',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.emailPlaceholder': 'بريدك الإلكتروني',
    'contact.form.emailInvalid': 'البريد الإلكتروني صحيح مطلوب',
    'contact.form.phone': 'الهاتف',
    'contact.form.phonePlaceholder': 'رقم هاتفك',
    'contact.form.subject': 'الموضوع',
    'contact.form.subjectPlaceholder': 'موضوع الرسالة',
    'contact.form.subjectRequired': 'الموضوع مطلوب',
    'contact.form.message': 'الرسالة',
    'contact.form.messagePlaceholder': 'رسالتك',
    'contact.form.messageRequired': 'الرسالة مطلوبة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.form.success.title': 'تم إرسال الرسالة!',
    'contact.form.success.description': 'سنعود إليك في أقرب وقت ممكن.',
    'contact.form.error.title': 'خطأ',
    'contact.form.error.description': 'حدثت مشكلة في إرسال رسالتك. يرجى المحاولة مرة أخرى.',
    'contact.info.title': 'معلومات الاتصال',
    
    // Footer
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.address': '١٢٣ شارع البناء، مدينة العمار',
    
    // CTAs
    'cta.contact': 'اتصل بنا',
    'cta.quote': 'احصل على عرض سعر',
    'cta.learn': 'اعرف المزيد',
    'cta.startProject': 'جاهز لبدء مشروعك؟',
    'cta.consultation': 'اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر. فريقنا مستعد لتحويل رؤيتك في البناء إلى حقيقة.',
    
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
