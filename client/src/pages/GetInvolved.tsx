import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Megaphone, Code } from "lucide-react";
import { useEffect } from "react";

export function GetInvolved() {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Get Involved</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us build a more informed democracy. There are many ways to contribute to the Civic Data Tech initiative.
            </p>
          </div>

          {/* Join Us CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center mb-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Connect with other contributors, participate in discussions, and stay updated on our progress.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8 text-base" asChild>
                <a href="https://unified.me/organization/27721/posts?invite=civicdata" target="_blank" rel="noopener noreferrer">
                  Join Civic Data Group on Unified <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -z-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 -z-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <h2 className="text-3xl font-bold font-display mb-10 text-center">Support & Collaboration Opportunities</h2>

          <div className="grid gap-8">
            {/* Hosting Support */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                  <Server className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Hosting Support & Infrastructure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are looking for partners who can offer reliable and scalable hosting solutions, cloud resources, or technical infrastructure expertise to support our growing data sets and user base. Contributions in this area are crucial for the stability and reach of our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Promotion */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg shrink-0">
                  <Megaphone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Project Promotion & Outreach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Help us spread the word! If you or your organization can assist in promoting Civic Data Tech to wider audiences – including civic groups, academic institutions, media outlets, and technological communities – your advocacy will be invaluable in attracting both users and potential collaborators.
                  </p>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg shrink-0">
                  <Code className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Development & Data Contribution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Individuals and organizations with expertise in data science, software development, data verification, or civic engagement are invited to join our collaborative. Your skills can directly contribute to expanding our dataset, refining our tools, and shaping the future of civic data access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-6">Support Us Financially</h3>
            <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-xl p-8 mb-12 text-left">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Civic Data Tech is pursuing <strong>501(c)(3) nonprofit status</strong>. In the meantime, we're accruing real costs for hosting, digital infrastructure, and maintaining the open-source projects we support.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Currently, donations are not tax-deductible</strong>, but they directly fund:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Cloud hosting and server infrastructure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Development and maintenance of civic data tools</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Once we achieve 501(c)(3) status, all contributions will be tax-deductible retroactively. If you'd like to support our mission, every contribution helps.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8 text-base mb-8" asChild>
              <a href="https://www.buymeacoffee.com/civicdatatech" target="_blank" rel="noopener noreferrer">
                Support Civic Data Tech
              </a>
            </Button>

            <h3 className="text-2xl font-bold mb-6 mt-16">Ready to Contribute?</h3>
            <p className="text-muted-foreground mb-8">
              Reach out to us directly to discuss how you can help support a more informed democracy.
            </p>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <a href="mailto:info@civicdata.tech">Contact Us at info@civicdata.tech</a>
            </Button>

            {/* State Maintainer Volunteer Section */}
            <div className="mt-20 pt-20 border-t border-border">
              <h3 className="text-3xl font-bold mb-6">Become a State Data Maintainer</h3>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                We're recruiting volunteers to maintain and improve civic data for every state. Help us crowdsource and verify representative data from your state with training, demo videos, and community support.
              </p>

              <div className="mb-12 text-left max-w-3xl mx-auto">
                <h4 className="text-xl font-semibold mb-8 text-center">What State Maintainers Do</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm">
                        1
                      </span>
                      Claim Your State
                    </h5>
                    <p className="text-muted-foreground ml-10">
                      Pick one or more states you're interested in maintaining. We'll guide you through the process.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm">
                        2
                      </span>
                      Maintain Data Quality
                    </h5>
                    <p className="text-muted-foreground ml-10">
                      Set up role configurations, log scrape issues, and ensure data accuracy for your state. We help you organize and prioritize the work.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm">
                        3
                      </span>
                      Update Jurisdictions Data
                    </h5>
                    <p className="text-muted-foreground ml-10">
                      Maintain jurisdiction information like website URLs. You won't do this alone—we crowdsource reviews, especially for initial scrapes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
                <p className="text-muted-foreground mb-4 text-left">
                  <strong>What We Provide:</strong>
                </p>
                <ul className="space-y-2 text-muted-foreground text-left">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Demo videos and step-by-step training</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Direct support from the Civic Data Tech team</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Community of fellow state maintainers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Access to verified, a data verification platform</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to help strengthen civic data for your state? Let's connect.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8 text-base" asChild>
                <a href="mailto:info@civicdata.tech">Become a State Maintainer</a>
              </Button>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
