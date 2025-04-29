
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Building2, Users, Home, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ResidentialService = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('services.residential') || 'Residential Construction'}
          </h1>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('services.residential.desc') || 'Building quality homes with attention to detail and customer satisfaction.'}
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
                {t('services.residential.title') || 'Quality Residential Construction Services'}
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="mb-4">
                  {t('services.residential.paragraph1') || 'Our residential construction services are designed to bring your dream home to life. We handle everything from custom home building to renovations, additions, and remodeling projects of all sizes.'}
                </p>
                <p className="mb-4">
                  {t('services.residential.paragraph2') || 'With decades of experience in the residential construction industry, our team of skilled professionals is committed to delivering high-quality workmanship that exceeds your expectations.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Home className="h-10 w-10 text-construction-gold mr-4" />
                    <h3 className="text-xl font-semibold">{t('services.residential.customHomes') || 'Custom Homes'}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('services.residential.customHomesDesc') || 'Tailored home building solutions that reflect your personal style and meet your specific needs.'}
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <HeartHandshake className="h-10 w-10 text-construction-gold mr-4" />
                    <h3 className="text-xl font-semibold">{t('services.residential.renovations') || 'Home Renovations'}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('services.residential.renovationsDesc') || 'Transform your existing space with our comprehensive renovation services.'}
                  </p>
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Residential Construction"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />

              <h3 className={cn(
                "text-2xl font-bold mb-4",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('services.residential.approach') || 'Our Approach'}
              </h3>
              
              <p className="mb-8">
                {t('services.residential.approachDesc') || 'We believe in a collaborative approach to residential construction. Our process starts with understanding your vision, followed by detailed planning, transparent communication throughout the project, and meticulous execution that ensures the highest quality standards.'}
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-8">
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  language === 'en' ? 'font-inter' : 'font-cairo'
                )}>
                  {t('services.residential.inquire') || 'Inquire About This Service'}
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <Users className="h-5 w-5 text-construction-gold mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">{t('services.residential.clients') || 'Client Focus'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('services.residential.clientsDesc') || 'Homeowners, real estate developers, and property managers'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <Building2 className="h-5 w-5 text-construction-gold mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">{t('services.residential.projectTypes') || 'Project Types'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('services.residential.projectTypesDesc') || 'Single-family homes, townhouses, condos, and apartments'}
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

export default ResidentialService;
