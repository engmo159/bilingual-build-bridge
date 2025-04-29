
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Factory, Users, Landmark, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndustrialService = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1581094794329-c8112a89894f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('services.industrial') || 'Industrial Construction'}
          </h1>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('services.industrial.desc') || 'Building robust facilities that power manufacturing and production.'}
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
                {t('services.industrial.title') || 'Specialized Industrial Construction Services'}
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="mb-4">
                  {t('services.industrial.paragraph1') || 'Our industrial construction services focus on creating facilities that meet the specialized needs of manufacturing, processing, and distribution operations. We build facilities that combine functionality, safety, and efficiency.'}
                </p>
                <p className="mb-4">
                  {t('services.industrial.paragraph2') || 'With deep expertise in industrial construction requirements, regulations, and best practices, we deliver projects that help our clients optimize their operations and achieve their production objectives.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Factory className="h-10 w-10 text-construction-gold mr-4" />
                    <h3 className="text-xl font-semibold">{t('services.industrial.manufacturing') || 'Manufacturing Facilities'}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('services.industrial.manufacturingDesc') || 'Custom-designed production spaces that maximize efficiency and output.'}
                  </p>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Landmark className="h-10 w-10 text-construction-gold mr-4" />
                    <h3 className="text-xl font-semibold">{t('services.industrial.warehouses') || 'Warehouses & Distribution'}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {t('services.industrial.warehousesDesc') || 'Strategic storage and distribution facilities designed for optimal logistics operations.'}
                  </p>
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Industrial Construction"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />

              <h3 className={cn(
                "text-2xl font-bold mb-4",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('services.industrial.approach') || 'Our Approach'}
              </h3>
              
              <p className="mb-8">
                {t('services.industrial.approachDesc') || 'Industrial construction requires specialized knowledge and strict adherence to safety and regulatory standards. Our approach combines technical expertise, rigorous project management, and quality construction practices to deliver facilities that support industrial operations efficiently and safely.'}
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-8">
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  language === 'en' ? 'font-inter' : 'font-cairo'
                )}>
                  {t('services.industrial.inquire') || 'Inquire About This Service'}
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <Users className="h-5 w-5 text-construction-gold mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">{t('services.industrial.clients') || 'Client Focus'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('services.industrial.clientsDesc') || 'Manufacturing companies, logistics providers, and industrial businesses'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <ShieldCheck className="h-5 w-5 text-construction-gold mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">{t('services.industrial.projectTypes') || 'Project Types'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('services.industrial.projectTypesDesc') || 'Factories, warehouses, distribution centers, and processing facilities'}
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

export default IndustrialService;
