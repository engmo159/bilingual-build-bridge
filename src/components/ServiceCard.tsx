
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
}

const ServiceCard = ({ title, description, icon: Icon, imageUrl }: ServiceCardProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4 gap-2">
          <Icon className="h-6 w-6 text-construction-gold" />
          <h3 className={cn(
            "text-xl font-semibold",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {title}
          </h3>
        </div>
        <p className={cn(
          "text-muted-foreground mb-6",
          language === 'en' ? 'font-inter' : 'font-cairo'
        )}>
          {description}
        </p>
        <Button
          variant="outline"
          className="border-construction-gold text-construction-gold hover:bg-construction-gold hover:text-white"
        >
          {t('cta.learn')}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
