import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

export function Donate() {
  useEffect(() => {
    document.title = "Support Us | Civic Data Tech";
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

          {/* Donation Info Section */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-display font-bold">Make a Donation</h2>
              
              {/* 501c3 Status */}
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>501(c)(3) Status:</strong> Civic Data Tech is currently applying for 501(c)(3) nonprofit status. Once approved (estimated November 2026), donations will be tax-deductible. We'll update this page when the status is official.
                </p>
              </div>

              {/* Donation Methods */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Donations</h3>
                
                <Button className="w-full" size="lg" asChild>
                  <a href="https://buymeacoffee.com/civicdatatech" target="_blank" rel="noopener noreferrer">
                    Donate via Stripe
                  </a>
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-sm text-muted-foreground space-y-2 border-t border-border pt-4">
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

        {/* Other Ways to Support */}
        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-display font-bold">Other Ways to Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
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
    </div>
  );
}
