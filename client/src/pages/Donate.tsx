import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dbox-widget': any;
    }
  }
}

export function Donate() {
  useEffect(() => {
    document.title = "Support Us | Civic Data Tech";
    // Load Donorbox widget script
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widgets.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us build shared civic data infrastructure and support the maintainers who sustain open-source projects.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Why Support & More Ways */}
          <div className="space-y-12">
            {/* Why Support Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Why Support Civic Data Tech?</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Supporting Maintainers</h3>
                  <p className="text-muted-foreground">
                    Open-source civic data projects are built and maintained by dedicated volunteers. Your support helps sustain their critical work.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Shared Infrastructure</h3>
                  <p className="text-muted-foreground">
                    We build standardized, accessible civic data resources that benefit organizations across the country.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Strengthening Democracy</h3>
                  <p className="text-muted-foreground">
                    Reliable civic data is essential for voter engagement, government accountability, and informed civic participation.
                  </p>
                </div>
              </div>
            </div>

            {/* More Ways to Support Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">More Ways to Get Involved</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Contribute Code</h3>
                  <p className="text-muted-foreground text-sm">
                    Help maintain and improve our open-source projects on GitHub. All are welcome to contribute.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Amplify Our Message</h3>
                  <p className="text-muted-foreground text-sm">
                    Share our work with your network and help spread awareness about civic data challenges.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Join Our Community</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect with us on Unified and participate in our discussions and events.
                  </p>
                </div>
              </div>
              <Button variant="outline" asChild>
                <a href="/get-involved">Learn More About Getting Involved</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Donation */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg space-y-6 overflow-hidden">
              <div className="px-8 pt-8 text-center">
                <h2 className="text-2xl font-display font-bold">Make a Donation</h2>
              </div>

              {/* Donation Methods */}
              <div className="space-y-4 px-2 pb-8">
                
                {/* Donorbox Widget */}
                <div className="w-full">
                  <script type="module" src="https://donorbox.org/widgets.js" async></script>
                  {/* @ts-ignore */}
                  <dbox-widget campaign="recurring-donations-977788" type="donation_form" enable-auto-scroll="true"></dbox-widget>
                </div>
              </div>

              {/* Additional Info */}
              <div className="text-sm text-muted-foreground space-y-2 border-t border-border pt-4 px-8 pb-8">
                <p>
                  If you have questions about donations or would like to discuss partnership opportunities, please contact us at{" "}
                  <a href="mailto:info@civicdata.tech" className="text-primary hover:underline">
                    info@civicdata.tech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
