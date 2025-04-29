
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const { t, language, dir } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen bg-background flex flex-col ${language === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h1 className={cn(
            "text-6xl font-bold mb-4 text-construction-navy",
            language === 'ar' ? 'font-cairo' : 'font-inter'
          )}>404</h1>
          <p className={cn(
            "text-2xl text-foreground mb-8",
            language === 'ar' ? 'font-cairo' : 'font-inter'
          )}>
            {language === 'en' ? 'Oops! Page not found' : 'عفواً! الصفحة غير موجودة'}
          </p>
          <Link to="/">
            <Button 
              className="bg-construction-gold hover:bg-construction-gold/90 text-black"
            >
              <ArrowLeft className={cn("mr-2 h-4 w-4", dir === 'rtl' ? 'rotate-180' : '')} />
              {language === 'en' ? 'Return to Home' : 'العودة للرئيسية'}
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
