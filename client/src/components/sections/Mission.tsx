import { motion } from "framer-motion";
import { Shield, Speaker, Database, Users, Search, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Database,
    title: "Foundational Dataset",
    description: "Building a verifiable baseline for all cities and counties in the U.S., including official websites and contact info."
  },
  {
    icon: Users,
    title: "Collaborative Governance",
    description: "Managed by partners to ensure transparency, community-driven development, and democratic oversight."
  },
  {
    icon: Shield,
    title: "Verified Accuracy",
    description: "Combining AI technology with human-in-the-loop oversight to ensure the highest standards of data integrity."
  },
  {
    icon: Search,
    title: "Future Expansion",
    description: "Planning to provide critical election information, candidate profiles, and detailed voting procedures."
  },
  {
    icon: Speaker,
    title: "Advocacy for Data Standards",
    description: "Working with federal, state and local governments to adopt data standards to improve access to data at all levels of government."
  }
];

export function Mission() {
  return (
    <section id="mission" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Purpose</h2>
          <p className="text-lg text-muted-foreground">
            We are dedicated to fostering a more accessible, resilient, and participatory democracy through open data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center bg-card border border-border rounded-2xl p-8 md:p-12 overflow-hidden relative" id="strategy">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Learn About Our Strategy</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Discover how we combine AI-based technology with human-in-the-loop oversight to build a verifiable civic dataset.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" />
                <p className="text-muted-foreground">Advanced technological framework</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 shrink-0" />
                <p className="text-muted-foreground">Collaborative governance model</p>
              </div>
            </div>
            <Link href="/strategy" className="inline-flex items-center text-primary font-medium hover:underline text-lg cursor-pointer">
               View Full Strategy & Status &rarr;
            </Link>
          </div>
          <div className="relative z-10 bg-secondary/50 rounded-xl p-8">
             <h4 className="font-semibold mb-4 text-foreground">Join the Movement</h4>
             <p className="text-muted-foreground mb-6">
               We're looking for partners in hosting, promotion, and data contribution. Help us support a more informed democracy.
             </p>
             <a href="mailto:info@civicdata.tech" className="text-primary font-medium hover:underline">
               Contact us at info@civicdata.tech &rarr;
             </a>
          </div>
          
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full -z-0" />
        </div>
      </div>
    </section>
  );
}
