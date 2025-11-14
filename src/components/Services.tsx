import TiltCard from "@/components/ui/tilt-card";
import { 
  Wrench, 
  Cloud, 
  Monitor, 
  MessageSquare, 
  Globe, 
  HardDrive 
} from "lucide-react";
import { content } from "@/lib/content";

const iconMap = {
  "IT-Support": Wrench,
  "Cloud Speicher": Cloud,
  "Hardware Reparatur": Monitor,
  "Kahoot-Erstellung": MessageSquare,
  "Webseite-Erstellung": Globe,
  "Installation Betriebssystem": HardDrive
};

const Services = () => {
  const services = content.services.items.map(item => ({
    ...item,
    icon: iconMap[item.title as keyof typeof iconMap]
  }));

  return (
    <section id="services" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <TiltCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="h-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;