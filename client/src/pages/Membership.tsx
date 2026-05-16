import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Code2, Zap, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Membership() {
  const [showForm, setShowForm] = useState(false);
  const membershipTiers = [
    {
      name: "Advocate",
      price: "$300/year",
      description: "For individual developers and small civic tech orgs",
      benefits: [
        "Hobbyist rate-limited API access to curated civic datasets",
        "Access to standards documentation and open workshops",
        "Community forum and project directory",
        "Early visibility into incubator cohorts",
      ],
    },
    {
      name: "Partner",
      price: "$3,000/year",
      description: "For mid-size civic tech nonprofits and local government",
      benefits: [
        "Standard tier API access with enhanced dataset access",
        "Quarterly advisory calls with Civic Data Tech leadership",
        "Co-author civic data standards (shape what gets standardized)",
        "Influence which projects get incubated",
        "Nominate incubator fellows",
      ],
      highlighted: true,
    },
    {
      name: "Sustaining",
      price: "$10,000+/year",
      description: "For enterprise platforms, major institutions, and foundations",
      benefits: [
        "Premium tier: full API access and custom data aggregations",
        "Priority support and dedicated coordination",
        "Governance role in standards body",
        "Fund incubator fellows directly",
        "Mentor early-stage projects",
        "Co-lead standards working groups",
      ],
    },
  ];

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
              Become a Member
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Shape standards. Support projects. Build civic data infrastructure together.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Civic Data Tech is a 501(c)(6) membership organization and incubator for open-source civic data projects. Your membership funds maintainers, incubates new initiatives, and establishes the standards that power civic tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Membership */}
      <section className="py-20 md:py-32 bg-muted/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You're Supporting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Code2,
                  title: "Incubate New Projects",
                  description:
                    "We identify emerging civic data initiatives and provide mentorship, infrastructure, and funding ($5k–$15k fellowships) to help projects reach sustainability.",
                },
                {
                  icon: Layers,
                  title: "Establish Standards",
                  description:
                    "Member organizations co-author open data standards for representatives, districts, elections, and government structure—making interoperability the default.",
                },
                {
                  icon: Users,
                  title: "Support Maintainers",
                  description:
                    "Direct financial support and community networks for core project maintainers. Prevent burnout. Build maintainer circles where leads collaborate and share best practices.",
                },
                {
                  icon: TrendingUp,
                  title: "Drive Government Adoption",
                  description:
                    "Your membership funds advocacy work with state and local governments to publish data in Civic Data Tech standards—the de facto practice for civic data.",
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
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Level</h2>
            <p className="text-lg text-muted-foreground">
              All membership levels are on a suggested donation basis. Give what you can.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`p-8 h-full flex flex-col ${
                    tier.highlighted
                      ? "border-accent/50 bg-accent/5 ring-1 ring-accent/50"
                      : "hover:border-accent/30"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="bg-accent text-background text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-lg font-semibold text-accent mb-2">{tier.price}</p>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => setShowForm(true)}
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-accent hover:bg-accent/90"
                        : "bg-accent/20 hover:bg-accent/30"
                    }`}
                  >
                    Apply Now
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 501(c)(6) Explanation */}
      <section className="py-20 md:py-32 bg-muted/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How Membership Works</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center">
                  <Code2 className="h-6 w-6 text-accent" />
                  The Incubator: New Projects Get Support
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  We accept 3–5 civic data projects annually into a structured 6-month incubator program. Projects receive mentorship, $5k–$15k fellowships, infrastructure access, and network introductions. Partner and Sustaining members help select incubated projects and can mentor them directly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center">
                  <Layers className="h-6 w-6 text-accent" />
                  Standards Development: You Shape What Gets Built
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Partner and Sustaining members sit on working groups that design and publish open data standards for representatives, districts, elections, and government structure. These standards become the foundation for interoperability across civic tech. We then advocate with government partners to adopt them—making them the de facto practice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center">
                  <Users className="h-6 w-6 text-accent" />
                  Community Governance: Members Decide
                </h3>
                <p className="text-lg text-muted-foreground">
                  Civic Data Tech is steered by its members. Sustaining members have governance roles. Partner members influence project selection and standards priorities. Everyone participates in quarterly workshops and annual conferences. Your membership means a real seat at the table.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Questions?</h2>
            <div className="space-y-8">
              {[
                {
                  question: "Is my membership tax-deductible?",
                  answer:
                    "No—501(c)(6) membership dues are not tax-deductible. But that's by design. It means your dues directly fund our incubator, standards work, and maintainer support without passing through a foundation layer. You're supporting the commons directly.",
                },
                {
                  question: "What if I want to support projects but am not ready to join at Partner tier?",
                  answer:
                    "Start with an Advocate membership ($300/year). You get API access to curated civic datasets, access to standards documentation, and visibility into our incubator cohorts. Move to Partner when your organization is ready to co-author standards or mentor projects.",
                },
                {
                  question: "Can I nominate a project for incubation?",
                  answer:
                    "Yes. Partner and Sustaining members can nominate projects for our annual incubator cohort. We also accept public applications. Selection criteria: the project fills a gap in civic data coverage, commits to open standards, benefits the broader ecosystem, and has maintainers willing to engage with the community.",
                },
                {
                  question: "What standards are you working on?",
                  answer:
                    "Year 1: We're developing standards for representative records, district boundaries, and election information. Partner and Sustaining members sit on the working groups that design these. Once published, we advocate with state and local governments to adopt them.",
                },
                {
                  question: "How is membership revenue used?",
                  answer:
                    "Transparency is core to our model. ~60% of membership revenue goes directly to incubator fellowships and foundational project support. The rest funds standards development, advocacy work, events, and organizational operations. Members get a detailed annual report.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA / Form Section */}
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

              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Join Civic Data Tech</h2>
              <p className="text-center text-muted-foreground mb-12">
                Fill out the form below and we'll get in touch within 2 business days.
              </p>

              <Card className="p-8 md:p-12 max-w-2xl mx-auto">
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
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
                    <label className="block text-sm font-medium mb-2">Organization / Project Name *</label>
                    <input
                      type="text"
                      name="organization"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="e.g., OpenStates, CivicPatch, My Civic Tech Nonprofit"
                    />
                  </div>

                  {/* Membership Tier */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Membership Tier *</label>
                    <select
                      name="membership_tier"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select a tier...</option>
                      <option value="Advocate">Advocate ($300/year)</option>
                      <option value="Partner">Partner ($3,000/year)</option>
                      <option value="Sustaining">Sustaining ($10,000+/year)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Tell us about your work (optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="What civic data challenges are you facing? How can Civic Data Tech help?"
                    ></textarea>
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to be contacted by Civic Data Tech about membership. We'll never share your email with third parties.
                  </p>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2"
                  >
                    Submit Application
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Pick your tier and help us build the data infrastructure civic tech deserves.
              </p>
              <Button
                onClick={() => setShowForm(true)}
                size="lg"
                className="bg-accent hover:bg-accent/90 flex items-center justify-center gap-2 mx-auto"
              >
                Join Civic Data Tech
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
