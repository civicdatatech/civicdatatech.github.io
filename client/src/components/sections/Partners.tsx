import { motion } from "framer-motion";

const supportedProjects = [
  {
    name: "CivicPatch",
    url: "https://civicpatch.org/",
    description:
      "A community-driven project focused on improving local civic data and making it easier for residents to find and use public information."
  },
  {
    name: "OpenStates (by PluralPolicy)",
    url: "https://github.com/openstates/jurisdictions",
    description:
      "Aggregates and publishes state legislative data (bills, legislators, committees) to make state government more transparent and accessible." 
  }
];

const supportingOrganizations = [
  { name: "Plural Policy", url: "https://pluralpolicy.com/" },
  { name: "Unified", url: "https://unified.me/" },
  { name: "Populist", url: "https://populist.us/" },
  { name: "VoteLight", url: "https://votelight.com/" }
];

const contributors = [
  { name: "Creyton Loud", url: null },
  { name: "Matthew Copple", url: "https://www.linkedin.com/in/matthewcopple/" },
  { name: "Virginia Dooley", url: "https://www.linkedin.com/in/virginia-dooley/" },
  { name: "YourFriendFido", url: "https://www.yourfriendfido.com/" },
  { name: "Stump.vote", url: "https://stump.vote/" },
  { name: "Mappingsupport", url: "https://mappingsupport.com/" }
];

export function Partners() {
  return (
    <section id="partners" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Partners & Contributors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Civic Data Tech focuses on supporting the open-source projects and maintainers that make civic data usable and trustworthy. Our primary project support today is focused on CivicPatch and OpenStates.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center mb-8">Supported Projects</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {supportedProjects.map((org, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/40 border border-border/50 px-6 py-4 rounded-xl flex flex-col items-start justify-center hover:bg-secondary/60 transition-colors group max-w-xs"
                >
                  <span className="font-semibold text-foreground/80 group-hover:text-primary transition-colors">{org.name}</span>
                  <p className="text-sm text-muted-foreground mt-2">{org.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center mb-8">Supporting Organizations</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {supportingOrganizations.map((org, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <a 
                  href={org.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary/40 border border-border/50 px-6 py-4 rounded-xl flex items-center justify-center hover:bg-secondary/60 transition-colors group"
                >
                  <span className="font-semibold text-foreground/80 group-hover:text-primary transition-colors">{org.name}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center mb-8">Key Contributors</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {contributors.map((person, i) => (
              person.url ? (
                <a
                  key={i}
                  href={person.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 text-lg hover:text-primary transition-colors cursor-pointer"
                >
                  {person.name}
                </a>
              ) : (
                <span key={i} className="text-foreground/70 text-lg cursor-default">
                  {person.name}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
