import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";

const Contact = () => {
  const email = content.contact.email.address;
  const mailtoLink = `mailto:${email}`;

  return (
    <section id="contact" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{content.contact.email.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href={mailtoLink}
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                {email}
              </a>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{content.contact.address.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {content.contact.address.lines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < content.contact.address.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{content.contact.hours.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">{content.contact.hours.withoutAppointment.label}</p>
                  {content.contact.hours.withoutAppointment.times.map((time, index) => (
                    <p key={index} className="text-sm">{time}</p>
                  ))}
                </div>
                <div>
                  <p className="font-medium text-foreground">{content.contact.hours.withAppointment.label}</p>
                  <p className="text-sm">{content.contact.hours.withAppointment.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button 
            size="lg"
            className="bg-primary hover:bg-accent transition-colors"
            onClick={() => window.location.href = mailtoLink}
          >
            <Mail className="mr-2 h-5 w-5" />
            {content.contact.emailButton}
          </Button>
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Hinweis:</strong> {content.contact.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;