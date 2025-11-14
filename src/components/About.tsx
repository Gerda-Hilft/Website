import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Target } from "lucide-react";
import { content } from "@/lib/content";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.about.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{content.about.stats.founded.label}</h3>
              <p className="text-muted-foreground">{content.about.stats.founded.value}</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{content.about.stats.team.label}</h3>
              <p className="text-muted-foreground">{content.about.stats.team.value}</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{content.about.stats.mission.label}</h3>
              <p className="text-muted-foreground">{content.about.stats.mission.value}</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  {content.about.description.paragraph1}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  {content.about.description.paragraph2}
                </p>

                <div className="border-t border-border pt-6 mt-6">
                  <h4 className="font-semibold text-lg mb-4">{content.about.team.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {content.about.team.members.map((member, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-4">{content.about.school.title}</h4>
                  <img
                    src="/hasu.jpg"
                    alt={content.about.school.imageAlt}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-4">
                    {content.about.workplace.title}
                  </h4>
                  <img
                    src="/kasten.jpeg"
                    alt={content.about.workplace.imageAlt}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
