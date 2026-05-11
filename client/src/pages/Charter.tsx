import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignatoriesList } from "@/components/sections/SignatoriesList";
import { CheckCircle2, Users, Scale, Zap } from "lucide-react";

export function Charter() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Civic Data Tech Charter
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A commitment to open standards, accessible data, and democratic empowerment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 md:py-32 bg-muted/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why This Matters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Scale,
                  title: "Data Fragmentation Weakens Democracy",
                  description:
                    "When civic data is scattered across incompatible systems, voters can't hold representatives accountable and inequity persists.",
                },
                {
                  icon: Users,
                  title: "Standards Enable Community Power",
                  description:
                    "Open, accessible data standards let local organizers, researchers, and citizens participate in democracy on equal footing.",
                },
                {
                  icon: Zap,
                  title: "Local Districts Need Better Tools",
                  description:
                    "State and federal standards often miss the local district level—where gerrymandering is drawn and civic accountability happens.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full flex flex-col">
                    <item.icon className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground flex-grow">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charter Principles */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Charter Principles</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Open Standards First",
                  description:
                    "We believe civic data should follow open, documented standards accessible to all—not proprietary systems that lock in power.",
                },
                {
                  title: "Data as Infrastructure",
                  description:
                    "Like roads and electricity, civic data is shared infrastructure. It should be maintained sustainably with community input.",
                },
                {
                  title: "Local Matters",
                  description:
                    "We center local districts, counties, and municipalities. This is where gerrymandering happens and where citizens organize.",
                },
                {
                  title: "Democracy Through Participation",
                  description:
                    "Voting rights are useless without the data to exercise them. We support projects that empower citizens to understand, track, and influence governance.",
                },
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How Our Community Works</h2>
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Members Vote on Standards",
                  description:
                    "Charter signatories (individuals and organizations) vote on data standards, priorities, and organizational direction.",
                },
                {
                  number: "02",
                  title: "We Maintain Open Projects",
                  description:
                    "We support and sustain foundational open-source projects that implement these standards (OpenStates, CivicPatch, etc.).",
                },
                {
                  number: "03",
                  title: "Community Sets the Agenda",
                  description:
                    "Through bi-monthly hackathons and working groups, maintainers and contributors collaborate on what gets built next.",
                },
                {
                  number: "04",
                  title: "Democracy Wins",
                  description:
                    "When civic data is open, standardized, and locally-focused, voters, organizers, and researchers can build the tools they need.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="text-4xl font-bold text-accent/40 flex-shrink-0 min-w-16">{item.number}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signatories */}
      <SignatoriesList />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Movement?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sign the charter and become part of building the data infrastructure democracy deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Sign the Charter
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Membership
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
