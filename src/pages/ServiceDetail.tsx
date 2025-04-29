
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Building2, 
  WrenchIcon, 
  PaintRoller, 
  HardHat, 
  ArrowLeft, 
  CheckCircle2,
  Clock,
  Users
} from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // Service data mapping
  const services = {
    residential: {
      title: t('services.residential') || 'Residential Construction',
      description: t('services.residential.desc') || 'Expert residential construction services for homes of all sizes.',
      icon: Building2,
      imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        t('services.residential.features.1') || 'Custom home design and construction',
        t('services.residential.features.2') || 'Renovations and remodeling',
        t('services.residential.features.3') || 'Additions and expansions',
        t('services.residential.features.4') || 'Kitchen and bathroom remodels'
      ],
      process: [
        {
          title: t('services.process.planning') || 'Planning & Design',
          description: t('services.process.planning.desc') || 'We start by understanding your vision and creating detailed architectural plans.'
        },
        {
          title: t('services.process.permits') || 'Permits & Approvals',
          description: t('services.process.permits.desc') || 'We handle all necessary permits and regulatory approvals.'
        },
        {
          title: t('services.process.construction') || 'Construction',
          description: t('services.process.construction.desc') || 'Our skilled team executes the construction with attention to detail.'
        },
        {
          title: t('services.process.completion') || 'Completion & Handover',
          description: t('services.process.completion.desc') || 'Final inspections and smooth handover of your new home.'
        }
      ]
    },
    commercial: {
      title: t('services.commercial') || 'Commercial Construction',
      description: t('services.commercial.desc') || 'Comprehensive commercial construction services for businesses.',
      icon: WrenchIcon,
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        t('services.commercial.features.1') || 'Office buildings and retail spaces',
        t('services.commercial.features.2') || 'Restaurants and hospitality venues',
        t('services.commercial.features.3') || 'Healthcare facilities',
        t('services.commercial.features.4') || 'Multi-use commercial developments'
      ],
      process: [
        {
          title: t('services.process.planning') || 'Planning & Design',
          description: t('services.process.planning.desc') || 'Tailored planning for your business needs and compliance requirements.'
        },
        {
          title: t('services.process.permits') || 'Permits & Approvals',
          description: t('services.process.permits.desc') || 'We handle all necessary permits and regulatory approvals.'
        },
        {
          title: t('services.process.construction') || 'Construction',
          description: t('services.process.construction.desc') || 'Efficient construction with minimal disruption to business operations.'
        },
        {
          title: t('services.process.completion') || 'Completion & Handover',
          description: t('services.process.completion.desc') || 'Final inspections and smooth handover of your commercial space.'
        }
      ]
    },
    industrial: {
      title: t('services.industrial') || 'Industrial Construction',
      description: t('services.industrial.desc') || 'Specialized industrial construction for manufacturing and production facilities.',
      icon: PaintRoller,
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89894f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        t('services.industrial.features.1') || 'Manufacturing facilities',
        t('services.industrial.features.2') || 'Warehouses and distribution centers',
        t('services.industrial.features.3') || 'Processing plants',
        t('services.industrial.features.4') || 'Industrial retrofits and upgrades'
      ],
      process: [
        {
          title: t('services.process.planning') || 'Planning & Design',
          description: t('services.process.planning.desc') || 'Engineering-focused planning for operational efficiency.'
        },
        {
          title: t('services.process.permits') || 'Permits & Approvals',
          description: t('services.process.permits.desc') || 'We handle all necessary permits and complex industrial regulations.'
        },
        {
          title: t('services.process.construction') || 'Construction',
          description: t('services.process.construction.desc') || 'Specialized construction with industrial-grade materials and systems.'
        },
        {
          title: t('services.process.completion') || 'Completion & Handover',
          description: t('services.process.completion.desc') || 'Final testing, certification, and operational training.'
        }
      ]
    },
    renovation: {
      title: t('services.renovation') || 'Renovation & Remodeling',
      description: t('services.renovation.desc') || 'Expert renovation services to transform existing spaces.',
      icon: HardHat,
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        t('services.renovation.features.1') || 'Complete home renovations',
        t('services.renovation.features.2') || 'Kitchen and bathroom remodeling',
        t('services.renovation.features.3') || 'Commercial space renovations',
        t('services.renovation.features.4') || 'Historic building restorations'
      ],
      process: [
        {
          title: t('services.process.assessment') || 'Assessment & Planning',
          description: t('services.process.assessment.desc') || 'Thorough evaluation of the existing structure and renovation needs.'
        },
        {
          title: t('services.process.design') || 'Design & Selection',
          description: t('services.process.design.desc') || 'Collaborative design process and material selection.'
        },
        {
          title: t('services.process.demolition') || 'Selective Demolition',
          description: t('services.process.demolition.desc') || 'Careful removal of elements to be replaced or updated.'
        },
        {
          title: t('services.process.renovation') || 'Renovation & Finishing',
          description: t('services.process.renovation.desc') || 'Quality craftsmanship and attention to detail in the renovation process.'
        }
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  // Handle invalid service slug
  if (!service) {
    return (
      <div className={`min-h-screen bg-background ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('services.notFound') || 'Service not found'}</h2>
          <Button onClick={() => navigate('/services')}>
            {t('cta.backToServices') || 'Back to Services'}
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${service.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {service.title}
          </h1>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {service.description}
          </p>
        </div>
      </section>

      {/* Back to Services */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/services')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t('cta.backToServices') || 'Back to All Services'}</span>
          </Button>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('services.about') || 'About This Service'}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className={cn(
                  "text-lg text-muted-foreground mb-6",
                  language === 'en' ? 'font-inter' : 'font-cairo'
                )}>
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <h3 className={cn(
                "text-2xl font-semibold mt-12 mb-6",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('services.keyFeatures') || 'Key Features'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-construction-gold flex-shrink-0 mt-1" />
                    <span className={cn(
                      "text-foreground",
                      language === 'en' ? 'font-inter' : 'font-cairo'
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Process */}
              <h3 className={cn(
                "text-2xl font-semibold mt-12 mb-6",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('services.ourProcess') || 'Our Process'}
              </h3>
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex-shrink-0 flex items-center justify-center bg-construction-gold text-white rounded-full w-12 h-12 md:mt-2">
                      <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className={cn(
                        "text-xl font-semibold mb-2",
                        language === 'en' ? 'font-inter' : 'font-cairo'
                      )}>
                        {step.title}
                      </h4>
                      <p className={cn(
                        "text-muted-foreground",
                        language === 'en' ? 'font-inter' : 'font-cairo'
                      )}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className={cn(
                  "text-xl font-semibold border-b pb-4 mb-6",
                  language === 'en' ? 'font-inter' : 'font-cairo'
                )}>
                  {t('services.getInTouch') || 'Get in Touch'}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-construction-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">{t('services.fastResponse') || 'Fast Response'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('services.fastResponse.desc') || 'We respond to all inquiries within 24 hours.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-construction-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">{t('services.expertTeam') || 'Expert Team'}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('services.expertTeam.desc') || 'Dedicated specialists for your project.'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-construction-gold hover:bg-construction-gold/90 text-black">
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

export default ServiceDetail;
