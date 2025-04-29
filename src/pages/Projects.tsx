
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Projects = () => {
  const { t, language, dir } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: t('projects.filters.all') || 'All Projects' },
    { id: 'residential', label: t('projects.filters.residential') || 'Residential' },
    { id: 'commercial', label: t('projects.filters.commercial') || 'Commercial' },
    { id: 'industrial', label: t('projects.filters.industrial') || 'Industrial' },
    { id: 'renovation', label: t('projects.filters.renovation') || 'Renovation' },
  ];

  const projects = [
    {
      title: 'Luxury Residence Complex',
      category: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2023',
    },
    {
      title: 'Downtown Office Tower',
      category: 'commercial',
      imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2022',
    },
    {
      title: 'Industrial Manufacturing Plant',
      category: 'industrial',
      imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2021',
    },
    {
      title: 'Historic Building Renovation',
      category: 'renovation',
      imageUrl: 'https://images.unsplash.com/photo-1574359411659-11e63e4cf5b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2023',
    },
    {
      title: 'Seaside Apartment Complex',
      category: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2021',
    },
    {
      title: 'Shopping Mall & Entertainment Center',
      category: 'commercial',
      imageUrl: 'https://images.unsplash.com/photo-1519431940854-3626fd888c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2022',
    },
    {
      title: 'Logistics & Distribution Center',
      category: 'industrial',
      imageUrl: 'https://images.unsplash.com/photo-1618065400860-56d2e133151b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2021',
    },
    {
      title: 'Heritage Home Restoration',
      category: 'renovation',
      imageUrl: 'https://images.unsplash.com/photo-1617414084015-69a5240914ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2022',
    },
    {
      title: 'Urban Green Apartments',
      category: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      year: '2023',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('projects.title') || 'Our Projects'}
          </h1>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('projects.subtitle') || 'Discover our portfolio of successful construction projects'}
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id 
                  ? "bg-construction-gold hover:bg-construction-gold/90 text-black" 
                  : "border-construction-gold text-construction-gold hover:bg-construction-gold hover:text-black"}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={t(`projects.filters.${project.category}`) || project.category}
                imageUrl={project.imageUrl}
                year={project.year}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className={cn(
                "text-xl text-muted-foreground",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('projects.noProjects') || 'No projects found in this category.'}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
