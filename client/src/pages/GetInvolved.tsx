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
            <h3 className="text-2xl font-bold mb-6">Ready to Contribute?</h3>
            <p className="text-muted-foreground mb-8">
              Reach out to us directly to discuss how you can help support a more informed democracy.
            </p>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <a href="mailto:info@civicdata.tech">Contact Us at info@civicdata.tech</a>
            </Button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
