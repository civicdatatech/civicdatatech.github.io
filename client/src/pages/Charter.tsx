import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Users, Shield, BarChart3 } from "lucide-react";
import { useEffect } from "react";
import { CharterSignForm } from "@/components/forms/CharterSignForm";

export function Charter() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const principles = [
    {
      icon: MapPin,
      title: "Standardized Jurisdiction & District Data",
      description: "We commit to establishing and maintaining shared, interoperable standards for jurisdiction boundaries, district definitions, and electoral geography. Clear, accessible boundary data is foundational to fighting gerrymandering and ensuring voters understand who represents them."
    },
    {
      icon: Users,
      title: "Transparent Representative Information",
      description: "Every voter deserves access to complete, current information about their elected representatives at all levels. We standardize how representative data is collected, verified, and shared to prevent gaps that enable corruption and gerrymandering."
    },
    {
      icon: Shield,
      title: "Open & Auditable Systems",
      description: "All civic data infrastructure must remain open-source and auditable by the communities it serves. No proprietary black boxes. Gerrymandering thrives in opacity—we demand transparency at every level."
    },
    {
      icon: BarChart3,
      title: "Data Equity Across Jurisdictions",
      description: "Under-resourced communities deserve the same access to clean, reliable civic data as well-funded ones. We actively support projects serving historically neglected jurisdictions, especially those with communities of color."
    }
  ];

  const commitments = [
    "Maintain and expand open-source projects that provide standardized civic data for all 50 states and territories",
    "Establish working groups to develop interoperable data standards for jurisdiction boundaries, electoral districts, and representative information",
    "Fund and support maintainers in under-resourced jurisdictions to ensure equitable access to civic data",
    "Provide tools and documentation that make civic data accessible to election protection advocates, journalists, and community organizations",
    "Advocate for government adoption of open data standards that prevent lock-in and proprietary control",
    "Combat data siloing that enables gerrymandering by ensuring boundary and district data flows freely across platforms",
    "Build community governance into civic data projects, giving users and advocates a voice in what gets built",
    "Regularly audit and publish reports on data coverage, quality, and equity across jurisdictions"
  ];

  return (
    <section className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Civic Data Tech Charter
          </h1>
          <p className="text-xl text-muted-foreground">
            A commitment to open, standardized civic data that strengthens democracy and fights gerrymandering
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Civic Data Tech is a member-driven association committed to sustaining open-source civic data infrastructure that makes democracy work. We believe that:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground">
                <strong>Voters have a right to know who represents them.</strong> Standardized, accessible data about jurisdiction boundaries and elected officials is foundational to informed voting.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground">
                <strong>Data fragmentation enables gerrymandering.</strong> When boundary data and representative information are siloed across proprietary systems, redistricting becomes opaque and manipulable.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground">
                <strong>Open standards level the playing field.</strong> Communities with resources and those without should both have access to reliable, verifiable civic data.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Core Principles */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Four Principles
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border/50 rounded-xl p-8 hover:border-accent/50 transition-colors"
                >
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Our Commitments</h2>
          <div className="space-y-4">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{commitment}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Why Civic Data Standards Matter for Democracy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Gerrymandering Thrives in Opacity</h3>
              <p className="text-muted-foreground leading-relaxed">
                When boundary data and electoral geography are fragmented across incompatible systems, it becomes nearly impossible for citizens, journalists, and watchdog organizations to detect or challenge gerrymandering. Open, standardized jurisdiction and district data is the foundation for transparency and accountability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Voters Deserve to Know Their Representatives</h3>
              <p className="text-muted-foreground leading-relaxed">
                Standardized representative data ensures that every voter—regardless of where they live—can find out who represents them, contact their officials, and track voting records. This is not a luxury; it's a prerequisite for informed democratic participation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Resource Equity Is a Civil Rights Issue</h3>
              <p className="text-muted-foreground leading-relaxed">
                Well-resourced jurisdictions can afford to maintain clean databases and hire civic tech experts. Under-resourced ones—disproportionately serving communities of color and low-income residents—are left with fragmented, outdated information systems. We believe open, shared civic data infrastructure levels this playing field.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Open Standards Enable Collective Action</h3>
              <p className="text-muted-foreground leading-relaxed">
                When civic data is locked in proprietary systems, communities can't compare information across jurisdictions, organize collectively, or hold multiple officials accountable. Open standards and interoperable data enable citizens to connect the dots and demand better governance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Plans for the Charter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Plans for the Charter: Building Power for Real Change</h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            This charter is not performative. We're building it because we need collective power to drive systemic change in civic data standards. Here's how we plan to use your signature and this growing movement:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">1. Convening & Standard-Setting Working Groups</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We'll organize working groups of charter signatories—developers, election advocates, journalists, government officials, and maintainers—to collectively design interoperable standards for:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground"><strong>Jurisdiction boundaries and district definitions</strong> (to enable gerrymandering detection)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground"><strong>Representative metadata</strong> (name, office, contact, voting record links)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground"><strong>Data quality & verification</strong> (how to validate accuracy and currency)</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                These standards will be open, community-reviewed, and owned collectively—not by any single company or government.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">2. Implementation & Adoption Roadmap</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Once standards are drafted, we'll:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Partner with existing civic data projects (OpenStates, CivicPatch) to implement the standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Work with states, counties, and municipalities to adopt and publish data using these standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Provide technical support and funding to jurisdictions implementing open data standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Document best practices and publish implementation guides that other communities can follow</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">3. Advocacy & Regulatory Change</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We'll leverage the collective voice of charter signatories to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Advocate for state and federal policies requiring open civic data standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Pressure vendors and platforms to implement interoperable data formats (no more proprietary silos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Build coalitions with election protection organizations to demand better data access for redistricting oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Publish reports documenting where civic data gaps exist and how they enable gerrymandering</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">4. Tools & Resource Building</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We'll fund and develop:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Open-source tools for jurisdictions to publish and maintain representative data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">APIs and data pipelines that make standardized civic data easy to access and use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Training and documentation for communities adopting these standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Audit dashboards showing data coverage, quality, and equity progress</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">5. Community Power & Accountability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most importantly, we'll use the growing list of charter signatories to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Build a coalition that speaks with one voice demanding open civic data standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Hold signatories accountable to the charter commitments through regular check-ins and progress reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Celebrate victories publicly—when jurisdictions adopt standards, when APIs launch, when legislation passes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent">→</span>
                  <span className="text-muted-foreground">Organize direct action when needed—citizen comment campaigns, media outreach, public events</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Why your signature matters:</strong> This isn't about collecting names for a feel-good website. We're building a documented coalition of developers, advocates, journalists, and community leaders who are committed to systemic change. When we approach a government, a vendor, or a funder, we can point to this charter and say: "Here are hundreds/thousands of people who believe civic data must be open and standardized." That's power. That creates accountability. That drives change.
            </p>
          </div>
        </motion.div>

        {/* Who Can Sign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Who Can Sign This Charter?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We invite individuals and organizations committed to open civic data to sign this charter. Signatories include:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent">•</span>
              <span className="text-muted-foreground">Software developers and data engineers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent">•</span>
              <span className="text-muted-foreground">Election protection and voting rights advocates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent">•</span>
              <span className="text-muted-foreground">Journalists and civic data reporters</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent">•</span>
              <span className="text-muted-foreground">Government officials committed to open data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent">•</span>
              <span className="text-muted-foreground">Community organizations serving under-resourced jurisdictions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-accent">•</span>
              <span className="text-muted-foreground">Anyone who believes democracy depends on open civic data</span>
            </li>
          </ul>
          <p className="text-muted-foreground">
            By signing, you commit to advancing these principles in your work and community. Together, we're building civic data infrastructure that serves democracy.
          </p>
        </motion.div>

        {/* CTA with Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Sign the Charter?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Add your name and organization to this growing movement for open civic data standards. Your submission will be recorded, and we'll feature signatories on this page as we build community power and work toward systemic change.
          </p>
          <CharterSignForm />
        </motion.div>
      </div>
    </section>
  );
}
