import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/lib/content";

const Datenschutz = () => {
  const email = content.datenschutz.responsible.company.email;
  const mailtoLink = `mailto:${email}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{content.datenschutz.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <p className="text-muted-foreground mb-6">
                    {content.datenschutz.intro}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">{content.datenschutz.responsible.title}</h2>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-muted-foreground mb-2">
                      {content.datenschutz.responsible.company.name}<br />
                      {content.datenschutz.responsible.company.address.lines.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < content.datenschutz.responsible.company.address.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <p className="text-muted-foreground">
                      E-Mail: <a href={mailtoLink} className="text-primary hover:underline">
                        {email}
                      </a>
                    </p>
                    <p className="text-muted-foreground mt-2 whitespace-pre-line">
                      {content.datenschutz.responsible.company.management}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">{content.datenschutz.accessData.title}</h2>
                  <p className="text-muted-foreground mb-4">
                    {content.datenschutz.accessData.description}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    {content.datenschutz.accessData.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    {content.datenschutz.accessData.conclusion}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">{content.datenschutz.contact.title}</h2>
                  <p className="text-muted-foreground">
                    {content.datenschutz.contact.content}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">{content.datenschutz.personalData.title}</h2>
                  <p className="text-muted-foreground">
                    {content.datenschutz.personalData.content}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">{content.datenschutz.rights.title}</h2>
                  <p className="text-muted-foreground mb-4">{content.datenschutz.rights.description}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    {content.datenschutz.rights.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">{content.datenschutz.externalLinks.title}</h2>
                  <p className="text-muted-foreground">
                    {content.datenschutz.externalLinks.content}
                  </p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>{content.datenschutz.footer.date}</strong><br />
                    {content.datenschutz.footer.update}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
