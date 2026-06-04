import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Wrench, Cloud, Monitor, MessageSquare, Globe, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "@/lib/content";

const iconMap = {
  "it-support": Wrench,
  "cloud-speicher": Cloud,
  "hardware-reparatur": Monitor,
  "kahoot-erstellung": MessageSquare,
  "website-erstellung": Globe,
  "installation-betriebssystem": HardDrive,
} as const;

type ServiceKey = keyof typeof iconMap;

interface ServicePageProps {
  serviceKey: ServiceKey;
}

const ServicePage = ({ serviceKey }: ServicePageProps) => {
  const service = content.servicePages[serviceKey];
  const Icon = iconMap[serviceKey];
  const primaryAction = service.cta;
  const secondaryAction = service.secondaryCta;
  const isPrimaryExternal = /^https?:\/\//.test(primaryAction.href);
  const isSecondaryExternal = secondaryAction ? /^https?:\/\//.test(secondaryAction.href) : false;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
          <div className="container mx-auto max-w-4xl">
            <Link to="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Zurück zu den Leistungen
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Leistung</p>
                <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
              </div>
            </div>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              {service.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {isPrimaryExternal ? (
                <Button asChild size="lg">
                  <a href={primaryAction.href} target="_blank" rel="noreferrer">
                    {primaryAction.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg">
                  <Link to={primaryAction.href}>{primaryAction.label}</Link>
                </Button>
              )}

              {secondaryAction && (
                isSecondaryExternal ? (
                  <Button asChild variant="outline" size="lg">
                    <a href={secondaryAction.href} target="_blank" rel="noreferrer">
                      {secondaryAction.label}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button asChild variant="outline" size="lg">
                    <Link to={secondaryAction.href}>{secondaryAction.label}</Link>
                  </Button>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
