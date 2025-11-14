import { content } from "@/lib/content";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 lg:px-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.newsletter.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {content.newsletter.subtitle}
        </p>
        <div className="flex justify-center">
          <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
          <iframe 
            src="https://subscribe-forms.beehiiv.com/75273fb5-cc5d-493f-987c-b42ee6378c1f" 
            data-test-id="beehiiv-embed" 
            scrolling="no" 
            style={{ 
              width: '400px', 
              height: '47px', 
              margin: '0', 
              borderRadius: '7px', 
              backgroundColor: 'transparent', 
              boxShadow: '0 0 #0000', 
              maxWidth: '100%' 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
