import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/lib/content";

const Impressum = () => {
  const email = content.impressum.company.email;
  const mailtoLink = `mailto:${email}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{content.impressum.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">{content.impressum.company.name}</h2>
                  <p className="text-muted-foreground mb-2">
                    {content.impressum.company.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    {content.impressum.company.address.lines.map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < content.impressum.company.address.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <p className="text-muted-foreground">
                    E-Mail: <a href={mailtoLink} className="text-primary hover:underline">
                      {email}
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">{content.impressum.management.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {content.impressum.management.content}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">{content.impressum.authors.title}</h3>
                  <p className="text-muted-foreground">
                    {content.impressum.authors.description}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    {content.impressum.authors.list.map((author, index) => (
                      <li key={index}>{author}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">{content.impressum.links.title}</h3>
                  <p className="text-muted-foreground">
                    {content.impressum.links.content}
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

export default Impressum;
