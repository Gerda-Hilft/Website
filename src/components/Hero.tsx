import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
            {content.hero.badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {content.hero.title} <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {content.hero.titleHighlight}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {content.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-accent transition-colors text-base"
            >
              {content.hero.primaryButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToServices}
              className="text-base"
            >
              {content.hero.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;