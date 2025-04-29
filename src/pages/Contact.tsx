
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { t, language, dir } = useLanguage();
  const { toast } = useToast();

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      // Simulate form submission
      console.log('Form submitted:', data);
      
      // Wait for 1 second to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: t('contact.form.success.title') || 'Message Sent!',
        description: t('contact.form.success.description') || 'We will get back to you as soon as possible.',
      });
      
      // Reset form
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      
      toast({
        title: t('contact.form.error.title') || 'Error',
        description: t('contact.form.error.description') || 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address') || 'Address',
      content: t('footer.address') || '123 Construction St, Building City',
    },
    {
      icon: Phone,
      title: t('contact.phone') || 'Phone',
      content: '+1 (123) 456-7890',
    },
    {
      icon: Mail,
      title: t('contact.email') || 'Email',
      content: 'info@bildco.com',
    },
    {
      icon: Clock,
      title: t('contact.hours') || 'Working Hours',
      content: t('contact.workingHours') || 'Mon - Fri: 8:00 AM - 5:00 PM',
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('contact.title') || 'Contact Us'}
          </h1>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            language === 'en' ? 'font-inter' : 'font-cairo'
          )}>
            {t('contact.subtitle') || 'Get in touch with our team for any inquiries or project discussions'}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg shadow-sm p-8">
              <h2 className={cn(
                "text-2xl font-bold mb-6",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('contact.form.title') || 'Send Us a Message'}
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {t('contact.form.name') || 'Name'}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder={t('contact.form.namePlaceholder') || 'Your name'}
                      {...register('name', { required: true })}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs">
                        {t('contact.form.nameRequired') || 'Name is required'}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t('contact.form.email') || 'Email'}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder') || 'Your email'}
                      {...register('email', { 
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      })}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs">
                        {t('contact.form.emailInvalid') || 'Valid email is required'}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {t('contact.form.phone') || 'Phone'}
                  </Label>
                  <Input
                    id="phone"
                    placeholder={t('contact.form.phonePlaceholder') || 'Your phone number'}
                    {...register('phone')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">
                    {t('contact.form.subject') || 'Subject'}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="subject"
                    placeholder={t('contact.form.subjectPlaceholder') || 'Message subject'}
                    {...register('subject', { required: true })}
                    className={errors.subject ? 'border-red-500' : ''}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs">
                      {t('contact.form.subjectRequired') || 'Subject is required'}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">
                    {t('contact.form.message') || 'Message'}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.form.messagePlaceholder') || 'Your message'}
                    rows={5}
                    {...register('message', { required: true })}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">
                      {t('contact.form.messageRequired') || 'Message is required'}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-construction-gold hover:bg-construction-gold/90 text-black w-full"
                >
                  {isSubmitting 
                    ? (t('contact.form.sending') || 'Sending...') 
                    : (t('contact.form.submit') || 'Send Message')}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className={cn(
                "text-2xl font-bold mb-6",
                language === 'en' ? 'font-inter' : 'font-cairo'
              )}>
                {t('contact.info.title') || 'Contact Information'}
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-construction-gold p-3 rounded-full text-construction-navy">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className={cn(
                        "font-bold",
                        language === 'en' ? 'font-inter' : 'font-cairo'
                      )}>
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden h-[300px] shadow-sm">
                <iframe 
                  title="BildCo Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03606467596!2d-74.25987368715491!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1690514229225!5m2!1sen!2s"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
