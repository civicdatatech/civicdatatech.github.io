import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import signatories from "@data/signatories.json";
import { Users } from "lucide-react";

interface Signatory {
  name: string;
  organization: string;
  category: string;
  role?: string;
}

export function SignatoriesList() {
  const [grouped, setGrouped] = useState<Record<string, Signatory[]>>({});

  useEffect(() => {
    // Group signatories by category
    const groupedByCategory = signatories.reduce((acc: Record<string, Signatory[]>, signatory) => {
      const category = signatory.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(signatory);
      return acc;
    }, {});

    setGrouped(groupedByCategory);
  }, []);

  // Filter out the example signatory if it exists
  const filteredGrouped = Object.entries(grouped).reduce((acc, [category, sigs]) => {
    const filtered = sigs.filter(s => s.name !== "Example Signatory");
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {} as Record<string, Signatory[]>);

  const totalSignatories = Object.values(filteredGrouped).reduce((sum, sigs) => sum + sigs.length, 0);

  if (totalSignatories === 0) {
    return (
      <section className="py-20 md:py-32 bg-muted/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Users className="h-12 w-12 text-accent mx-auto mb-4 opacity-50" />
            <h2 className="text-3xl font-bold mb-4">Charter Signatories Coming Soon</h2>
            <p className="text-lg text-muted-foreground">
              Be among the first to sign the Civic Data Tech Charter and help build the movement.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Charter Signatories</h2>
          <p className="text-lg text-muted-foreground">
            {totalSignatories} individuals and organizations committed to open civic data standards
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(filteredGrouped).map(([category, sigs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent">{category}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {sigs.map((signatory, index) => (
                  <motion.div
                    key={`${signatory.name}-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-background border border-border/50 rounded-lg p-4 hover:border-accent/50 transition-colors"
                  >
                    <p className="font-semibold text-foreground">{signatory.name}</p>
                    {signatory.organization && signatory.organization !== "Independent" && (
                      <p className="text-sm text-muted-foreground">{signatory.organization}</p>
                    )}
                    {signatory.role && signatory.role !== "Not specified" && (
                      <p className="text-sm text-muted-foreground italic">{signatory.role}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
