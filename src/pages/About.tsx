
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { Building2, Clock, Users, Award } from 'lucide-react';

const About = () => {
  const { t, language, dir } = useLanguage();

  const stats = [
    {
      icon: Building2,
      value: '250+',
      label: t('about.stats.projects'),
    },
    {
      icon: Clock,
      value: '25+',
      label: t('about.stats.years'),
    },
    {
      icon: Users,
      value: '120+',
      label: t('about.stats.employees'),
    },
    {
      icon: Award,
      value: '15+',
      label: t('about.stats.awards'),
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('about.title') || 'About BildCo'}
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('about.ourStory.title') || 'Our Story'}
              </h2>
              <p className={cn(
                "text-muted-foreground mb-6",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('about.ourStory.p1') || 'Founded in 1995, BildCo has grown from a small family business to one of the leading construction companies in the region. Our journey began with residential projects, and over the years, we have expanded our expertise to commercial, industrial, and renovation projects.'}
              </p>
              <p className={cn(
                "text-muted-foreground",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('about.ourStory.p2') || 'With a team of highly skilled professionals and a commitment to quality, we have successfully completed over 250 projects, earning the trust of our clients and numerous industry awards along the way.'}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="BildCo Team" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg text-center">
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-construction-gold" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className={cn(
                  "text-muted-foreground",
                  language === 'en' ? 'font-inter' : 'font-cairo'
                )}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h3 className={cn(
                "text-2xl font-bold mb-4 text-construction-gold",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('about.mission.title') || 'Our Mission'}
              </h3>
              <p className={cn(
                "text-muted-foreground",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('about.mission.content') || "To deliver exceptional construction services that transform our clients' visions into reality, while maintaining the highest standards of quality, safety, and sustainability."}
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h3 className={cn(
                "text-2xl font-bold mb-4 text-construction-gold",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('about.vision.title') || 'Our Vision'}
              </h3>
              <p className={cn(
                "text-muted-foreground",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('about.vision.content') || 'To be the most trusted and respected construction company, known for our innovation, integrity, and commitment to excellence in every project we undertake.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
