import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export function Strategy() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  
  return (
    <section className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Strategy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We sustain open-source civic data projects by supporting their maintainers and ensuring the data they steward remains accessible and verifiable.
            </p>
          </div>

          {/* Core Strategy Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Supporting Maintainers & Projects</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  Our strategy centers on sustaining the maintainers and projects that power civic data pipelines. We recognize that reliable civic data infrastructure depends on consistent support for the teams and tools behind it.
                </p>
                <p>
                  We invest in projects like CivicPatch and OpenStates, ensuring they have the resources needed to serve communities effectively. Our approach combines direct funding, collaborative partnerships, and community governance to create a sustainable ecosystem for civic data.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="bg-card border border-border/50 p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Project Funding</h3>
                  <p className="text-sm text-muted-foreground">Direct financial support for open-source civic data projects.</p>
                </div>
              </div>
              <div className="bg-card border border-border/50 p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Maintainer Support</h3>
                  <p className="text-sm text-muted-foreground">Resources and collaboration for the teams maintaining critical projects.</p>
                </div>
              </div>
              <div className="bg-card border border-border/50 p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-secondary rounded-lg text-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Open & Verifiable</h3>
                  <p className="text-sm text-muted-foreground">Ensuring data and tools remain open-source and auditable by communities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Local District Gap */}
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold font-display mb-6">The Local District Gap: Where Real Change Happens</h3>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  There are civic data standards in place—OpenStates provides excellent state legislature data, and federal data exists through official channels. But there's an acute gap at the local and district level, where grassroots democracy actually happens.
                </p>
                <p>
                  When voters need to know who represents them on city council, school board, county commission, or water district—that's where the data fragmentizes. That's where resources disappear. That's where marginalized communities get left behind.
                </p>
                <div className="bg-background rounded-lg p-6 border border-accent/30">
                  <h4 className="font-bold mb-3 text-foreground">Why the Local District Level Matters</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>School boards, county commissions, and water districts control billions in spending—directly affecting your child's education and your community's resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Voter engagement at the local level determines turnout and political power in state and federal elections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Gerrymandering starts with district boundary data—and local districts are the hardest to access and standardize</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Under-resourced jurisdictions rarely have staff to maintain clean datasets, making community organizing nearly impossible</span>
                    </li>
                  </ul>
                </div>
                <p>
                  CivicPatch and OpenStates are filling this gap—but they need sustained support to reach every municipality, every school district, every special district in the country. That's what we're here to enable.
                </p>
              </div>
            </div>
          </div>

          {/* Initial Phase & Future */}
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-20">
             <div className="max-w-3xl mx-auto">
               <h3 className="text-2xl font-bold font-display mb-6">Our Roadmap</h3>
               <div className="space-y-8">
                 <div className="relative pl-8 border-l-2 border-primary">
                   <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                   <h4 className="text-xl font-bold mb-2 text-primary">Immediate Support</h4>
                   <p className="text-muted-foreground">
                     We are actively supporting CivicPatch and OpenStates, two critical projects that fill significant gaps in civic data nationwide. Our direct funding and partnerships help these teams maintain and expand their work.
                   </p>
                 </div>
                 <div className="relative pl-8 border-l-2 border-border">
                   <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border ring-4 ring-background" />
                   <h4 className="text-xl font-bold mb-2">Build Community Contributors</h4>
                   <p className="text-muted-foreground">
                     Grow a engaged community of maintainers, developers, and civic data advocates who contribute to and sustain the projects we support.
                   </p>
                 </div>
                 <div className="relative pl-8 border-l-2 border-border">
                   <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border ring-4 ring-background" />
                   <h4 className="text-xl font-bold mb-2">Continue Bi-Monthly Hackathons</h4>
                   <p className="text-muted-foreground">
                     Host regular hackathons to connect contributors, solve pressing civic data challenges, and accelerate project development.
                   </p>
                 </div>
                 <div className="relative pl-8 border-l-2 border-border">
                   <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border ring-4 ring-background" />
                   <h4 className="text-xl font-bold mb-2">Secure Funding Partners</h4>
                   <p className="text-muted-foreground">
                     Build sustainable partnerships with organizations committed to civic data access and open infrastructure.
                   </p>
                 </div>
                 <div className="relative pl-8 border-l-2 border-border">
                   <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border ring-4 ring-background" />
                   <h4 className="text-xl font-bold mb-2">Support New Launches</h4>
                   <p className="text-muted-foreground">
                     Help supported projects reach new communities and expand their impact through strategic guidance and resources.
                   </p>
                 </div>
                 <div className="relative pl-8 border-l-2 border-border">
                   <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border ring-4 ring-background" />
                   <h4 className="text-xl font-bold mb-2">Expand to New Projects</h4>
                   <p className="text-muted-foreground">
                     Identify and support additional open-source civic data projects that fill critical gaps nationwide.
                   </p>
                 </div>
               </div>
             </div>
          </div>

          {/* Current Status */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-display mb-6">Current Status: Supporting Key Projects</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Civic Data Tech is actively engaged in supporting CivicPatch and OpenStates, providing funding and collaborative partnerships to sustain these essential projects.
                  </p>
                  <p>
                    Our governance model emphasizes transparency and community involvement, ensuring that decisions about project support are made collaboratively with partners and stakeholders.
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Active Projects
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    CivicPatch support & development
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    OpenStates partnership & funding
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    Community-led governance
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    Open-source infrastructure maintenance
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link href="/get-involved">
                    Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
