
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string;
}

const HeroSection = ({ title, subtitle, ctaText, backgroundImage }: HeroSectionProps) => {
  const { language, dir } = useLanguage();
  
  return (
    <div 
      className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 
          className={cn(
            "text-4xl md:text-6xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}
        >
          {title}
        </h1>
        
        <p 
          className={cn(
            "text-xl md:text-2xl mb-8 max-w-2xl mx-auto",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}
        >
          {subtitle}
        </p>
        
        <Button 
          size="lg"
          className="bg-construction-gold hover:bg-construction-gold/90 text-black font-medium"
        >
          {ctaText}
          <ArrowRight className={cn("ml-2 h-4 w-4", dir === 'rtl' ? 'rotate-180' : '')} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
