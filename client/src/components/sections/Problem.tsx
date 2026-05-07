import { motion } from "framer-motion";
import { Users, Lock, Zap } from "lucide-react";

export function Problem() {
  const impacts = [
    {
      icon: Users,
      title: "Voters Can't Find Their Representatives",
      description: "Without standardized jurisdiction data, citizens struggle to identify all officials who represent them—especially in overlapping districts and special areas."
    },
    {
      icon: Lock,
      title: "Accountability Disappears",
      description: "Siloed data makes it nearly impossible to compare voting records, track campaign contributions, or hold officials accountable through informed voting."
    },
    {
      icon: Zap,
      title: "Inequity Is Reinforced",
      description: "Well-resourced jurisdictions maintain clean databases. Under-resourced ones—often serving communities of color and low-income residents—operate with fragmented, outdated systems."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/40" id="problem">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            When Civic Data Fragments, Democracy Suffers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            When civic data lacks standardized, interoperable systems, voters can't easily find, contact, or hold accountable the officials who represent them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors"
              >
                <div className="mb-4">
                  <Icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
