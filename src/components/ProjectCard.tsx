
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  year: string;
}

const ProjectCard = ({ title, category, imageUrl, year }: ProjectCardProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity">
        <p className={cn(
          "text-construction-gold text-sm mb-1",
          language === 'en' ? 'font-inter' : 'font-cairo'
        )}>
          {category} • {year}
        </p>
        <h3 className={cn(
          "text-white text-xl font-bold group-hover:text-construction-gold transition-colors",
          language === 'en' ? 'font-inter' : 'font-cairo'
        )}>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
