import { motion } from "framer-motion";
import { Users, Lock, Zap } from "lucide-react";

export function Problem() {
  const impacts = [
    {
      icon: Users,
      title: "Voters Can't Access Reliable Civic Data",
      description: "Fragmented data systems mean citizens struggle to find, contact, and understand the officials who represent them across all levels of government."
    },
    {
      icon: Lock,
      title: "Accountability Disappears",
      description: "Siloed data makes it nearly impossible to compare voting records, track campaign contributions, or hold officials accountable through informed voting."
    },
    {
      icon: Zap,
      title: "Maintainers Are Unsupported",
      description: "The civic tech projects maintaining critical data infrastructure lack consistent funding, coordination, and community support. Maintainers burn out. Projects stall. Communities lose access."
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
            Civic data fragmentation creates cascading problems. Without standardized, interoperable systems, voters can't find officials, maintainers lack resources to sustain projects, and communities lose access to reliable data.
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
