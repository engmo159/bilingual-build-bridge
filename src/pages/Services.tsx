
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Building2, WrenchIcon, PaintRoller, HardHat, Construction, Wrench, TrendingUp, Clock } from 'lucide-react';

const Services = () => {
  const { t, language, dir } = useLanguage();

  const mainServices = [
    {
      icon: Building2,
      title: t('services.residential'),
      description: t('services.residential.desc'),
      imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      icon: WrenchIcon,
      title: t('services.commercial'),
      description: t('services.commercial.desc'),
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      icon: PaintRoller,
      title: t('services.industrial'),
      description: t('services.industrial.desc'),
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89894f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      icon: HardHat,
      title: t('services.renovation'),
      description: t('services.renovation.desc'),
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const additionalServices = [
    {
      icon: Construction,
      title: t('services.additional.architecture') || 'Architectural Design',
      description: t('services.additional.architecture.desc') || 'Professional architectural design services tailored to your specific needs and preferences.',
    },
    {
      icon: Wrench, // Changed from Tools to Wrench
      title: t('services.additional.maintenance') || 'Maintenance & Repair',
      description: t('services.additional.maintenance.desc') || 'Comprehensive maintenance and repair services to keep your property in optimal condition.',
    },
    {
      icon: TrendingUp,
      title: t('services.additional.consulting') || 'Construction Consulting',
      description: t('services.additional.consulting.desc') || 'Expert advice on construction projects, from planning and design to execution and completion.',
    },
    {
      icon: Clock,
      title: t('services.additional.emergency') || 'Emergency Services',
      description: t('services.additional.emergency.desc') || '24/7 emergency construction services to address urgent structural issues and repairs.',
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('services.pageTitle') || 'Our Services'}
          </h1>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('services.pageSubtitle') || 'Comprehensive construction solutions for all your building needs'}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('services.mainTitle') || 'Our Core Services'}
            </h2>
            <p className={cn(
              "text-muted-foreground max-w-2xl mx-auto",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('services.mainDescription') || 'We provide a comprehensive range of construction services with a focus on quality, safety, and client satisfaction.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('services.additionalTitle') || 'Additional Services'}
            </h2>
            <p className={cn(
              "text-muted-foreground max-w-2xl mx-auto",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('services.additionalDescription') || 'Beyond our core offerings, we provide specialized services to meet diverse construction needs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-construction-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className={cn(
            "text-3xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('cta.startProject') || 'Ready to Start Your Project?'}
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto mb-8",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('cta.consultation') || 'Contact us today for a free consultation and quote. Our team is ready to bring your construction vision to life.'}
          </p>
          <Button 
            size="lg"
            className="bg-construction-gold hover:bg-construction-gold/90 text-black font-medium"
          >
            {t('cta.contact')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
