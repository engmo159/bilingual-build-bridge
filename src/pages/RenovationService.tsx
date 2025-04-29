
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HardHat, Users, Paintbrush, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const RenovationService = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const handleQuoteRequest = () => {
    toast({
      title: t('services.quoteRequested') || 'Quote Requested',
      description: t('services.quoteRequestedDesc') || "We'll contact you shortly to discuss your project needs.",
    });
  };

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('services.renovation') || 'Renovation Services'}
          </h1>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('services.renovation.desc') || 'Transforming existing spaces into beautiful and functional environments.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('services.renovation.title') || 'Expert Renovation & Remodeling Services'}
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="mb-4">
                  {t('services.renovation.paragraph1') || 'Our renovation services breathe new life into existing structures, whether residential, commercial, or industrial. We specialize in transforming outdated spaces into modern, functional, and aesthetically pleasing environments.'}
                </p>
                <p className="mb-4">
                  {t('services.renovation.paragraph2') || 'From minor updates to complete property overhauls, our team handles renovations with the same attention to detail and quality standards that define all our construction services.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Paintbrush className="h-10 w-10 text-construction-gold mr-4" />
                    <h3 className="text-xl font-semibold">{t('services.renovation.interior') || 'Interior Renovations'}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('services.renovation.interiorDesc') || 'Complete interior makeovers including kitchen and bathroom remodels, flooring updates, and more.'}
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Hammer className="h-10 w-10 text-construction-gold mr-4" />
                    <h3 className="text-xl font-semibold">{t('services.renovation.structural') || 'Structural Renovations'}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('services.renovation.structuralDesc') || 'Major structural changes including extensions, conversions, and building retrofits.'}
                  </p>
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1523413307857-ef22dc5c2eaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Renovation Services"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />

              <h3 className={cn(
                "text-2xl font-bold mb-4",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('services.renovation.approach') || 'Our Approach'}
              </h3>
              
              <p className="mb-8">
                {t('services.renovation.approachDesc') || 'Renovation projects require a unique approach that balances preserving valuable elements of the existing structure while upgrading others. We conduct thorough assessments before starting any renovation work, develop detailed plans that consider the unique constraints of each property, and execute with minimal disruption to occupants when possible.'}
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-8">
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  language === 'en' ? 'font-inter' : 'font-cairo'
                )}>
                  {t('services.renovation.inquire') || 'Inquire About This Service'}
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <Users className="h-5 w-5 text-construction-gold mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">{t('services.renovation.clients') || 'Client Focus'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('services.renovation.clientsDesc') || 'Property owners, businesses, institutions, and public entities'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <HardHat className="h-5 w-5 text-construction-gold mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">{t('services.renovation.projectTypes') || 'Project Types'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('services.renovation.projectTypesDesc') || 'Home renovations, office remodels, retail store renovations, and industrial facility updates'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-construction-gold hover:bg-construction-gold/90 text-black"
                  onClick={handleQuoteRequest}
                >
                  {t('cta.requestQuote') || 'Request a Quote'}
                </Button>
              </div>
            </div>
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
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-construction-gold hover:bg-construction-gold/90 text-black font-medium"
            >
              {t('cta.contact')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RenovationService;
