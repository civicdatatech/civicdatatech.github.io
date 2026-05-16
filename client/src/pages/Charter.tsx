import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignatoriesList } from "@/components/sections/SignatoriesList";
import { CheckCircle2, Users, Scale, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Charter() {
  const [showForm, setShowForm] = useState(false);
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
        <div className="container mx-auto px-6 max-w-4xl">
          {showForm ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <button
                  onClick={() => setShowForm(false)}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  ← Back
                </button>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Sign the Charter</h2>
              <p className="text-center text-muted-foreground mb-12">
                By signing, you commit to supporting open civic data standards and the mission of Civic Data Tech.
              </p>

              <Card className="p-8 md:p-12 max-w-2xl mx-auto">
                <form
                  action="https://formspree.io/f/YOUR_CHARTER_FORM_ID"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization / Project (optional)</label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="e.g., OpenStates, CivicPatch, etc."
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium mb-2">I represent a... *</label>
                    <select
                      name="category"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select...</option>
                      <option value="Civic Tech Project">Civic Tech Project</option>
                      <option value="Government Organization">Government Organization</option>
                      <option value="Academic Institution">Academic Institution</option>
                      <option value="Nonprofit Organization">Nonprofit Organization</option>
                      <option value="Individual Developer">Individual Developer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Role (optional)</label>
                    <input
                      type="text"
                      name="role"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="e.g., Project Lead, Developer, Policy Advocate"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Why are you signing? (optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Tell us why you support open civic data standards..."
                    ></textarea>
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-muted-foreground">
                    By signing the charter, you agree to be listed among our signatories (with the level of visibility you prefer). We'll never spam you.
                  </p>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2"
                  >
                    Sign the Charter
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Movement?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Sign the charter and become part of building the data infrastructure democracy deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowForm(true)}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 flex items-center justify-center gap-2"
                >
                  Sign the Charter
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/membership">Learn More About Membership</a>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
