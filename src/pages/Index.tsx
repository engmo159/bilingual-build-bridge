
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Building2, WrenchIcon, PaintRoller, HardHat, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const { t, language, dir } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.residential'),
      description: t('services.residential.desc'),
    },
    {
      icon: WrenchIcon,
      title: t('services.commercial'),
      description: t('services.commercial.desc'),
    },
    {
      icon: PaintRoller,
      title: t('services.industrial'),
      description: t('services.industrial.desc'),
    },
    {
      icon: HardHat,
      title: t('services.renovation'),
      description: t('services.renovation.desc'),
    },
  ];

  const projects = [
    {
      title: 'Luxury Residence Complex',
      category: 'Residential',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2024',
    },
    {
      title: 'Downtown Office Tower',
      category: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2023',
    },
    {
      title: 'Industrial Manufacturing Plant',
      category: 'Industrial',
      imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2022',
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        ctaText={t('home.hero.cta')}
        backgroundImage="https://images.unsplash.com/photo-1617321002806-a22a92d2b6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('home.services.title')}
            </h2>
            <p className={cn(
              "text-muted-foreground max-w-2xl mx-auto",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('home.services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className={cn(
              "text-3xl font-bold",
              language === 'en' ? 'font-inter' : 'font-cairo'
            )}>
              {t('home.projects.title')}
            </h2>
            <Button 
              variant="outline" 
              className="border-construction-gold text-construction-gold hover:bg-construction-gold hover:text-white"
            >
              {t('home.projects.viewAll')}
              <ArrowRight className={cn("ml-2 h-4 w-4", dir === 'rtl' ? 'rotate-180' : '')} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                year={project.year}
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
            {t('cta.quote')}
          </h2>
          <p className={cn(
            "max-w-2xl mx-auto mb-8",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {language === 'en' 
              ? 'Get in touch with our expert team for a free consultation and quote for your next construction project.'
              : 'تواصل مع فريقنا من الخبراء للحصول على استشارة مجانية وعرض سعر لمشروع البناء القادم الخاص بك.'}
          </p>
          <Button 
            size="lg"
            className="bg-construction-gold hover:bg-construction-gold/90 text-black font-medium"
          >
            {t('cta.contact')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
