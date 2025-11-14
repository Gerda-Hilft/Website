import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Cloud, Shield } from "lucide-react";
import { content } from "@/lib/content";

const CloudPricing = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {content.cloudPricing.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {content.cloudPricing.hero.description1}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {content.cloudPricing.hero.description2}
              </p>
              <p className="text-lg text-muted-foreground">
                {content.cloudPricing.hero.description3}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 lg:px-8 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.cloudPricing.pricing.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {content.cloudPricing.pricing.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {content.cloudPricing.pricing.plans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      {content.cloudPricing.pricing.popularBadge}
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Cloud className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.storage}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {content.cloudPricing.pricing.storageLabel}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold mb-2">{plan.monthlyPrice}</div>
                      <div className="text-sm text-muted-foreground">{content.cloudPricing.pricing.monthlyLabel}</div>
                    </div>
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-primary mb-1">{plan.yearlyPrice}</div>
                      <div className="text-sm text-muted-foreground">{content.cloudPricing.pricing.yearlyLabel}</div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        {content.cloudPricing.pricing.interestText}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-8">{content.cloudPricing.features.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {content.cloudPricing.features.list.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/50">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">{content.cloudPricing.cta.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {content.cloudPricing.cta.description}
                  </p>
                  <Button size="lg" className="mr-4" onClick={scrollToContact}>
                    {content.cloudPricing.cta.contactButton}
                  </Button>
                  <Button size="lg" variant="outline">
                    {content.cloudPricing.cta.learnMoreButton}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CloudPricing;
