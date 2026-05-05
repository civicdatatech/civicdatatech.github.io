import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Code, Zap, Heart, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export function Volunteer() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Civic Data Tech Sprint at PyCon 2026
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for our first hack-a-thon focused on advancing open-source civic data projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="font-semibold">May 18–19, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="font-semibold">PyCon 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Why Attend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Why Attend?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a developer, designer, civic tech enthusiast, or just curious about open-source civic data,
            this sprint is for you. You'll contribute directly to projects like OpenStates and CivicPatch while building
            community with fellow advocates for transparent, accessible government data.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Code className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Hands-On Development</h3>
                <p className="text-muted-foreground">
                  Contribute code, documentation, and features to real civic data projects.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Meet the Community</h3>
                <p className="text-muted-foreground">
                  Connect with maintainers, civic tech leaders, and like-minded volunteers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Real Impact</h3>
                <p className="text-muted-foreground">
                  Your contributions directly support the infrastructure that powers civic data access.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Heart className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Learn & Grow</h3>
                <p className="text-muted-foreground">
                  Deepen your understanding of civic tech, open-source governance, and data standards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Day 1: Kickoff & Sprints Begin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Introductions, project overviews, and team formation. Dive into your first tasks with guidance from
                  experienced maintainers.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Day 2: Build & Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continue development work, pair with other contributors, and prepare demos of your contributions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>All Skill Levels Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From first-time open-source contributors to veteran developers, we have tasks for everyone.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Community & Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with civic tech leaders, project maintainers, and fellow volunteers passionate about data
                  access.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* How to Get Involved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 bg-secondary/30 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-6">How to Get Involved</h2>
          <ol className="space-y-4 text-lg">
            <li className="flex gap-4">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                1
              </span>
              <span>
                <strong>Sign up:</strong> Register for PyCon 2026 and add the Civic Data Tech Sprint to your schedule.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                2
              </span>
              <span>
                <strong>Join our community:</strong>{" "}
                <a
                  href="https://unified.me/organization/27721/posts?invite=civicdata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Unified
                </a>{" "}
                and/or connect with us via email at{" "}
                <a href="mailto:info@civicdata.tech" className="text-primary font-medium hover:underline">
                  info@civicdata.tech
                </a>{" "}
                to get sprint details and project info.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                3
              </span>
              <span>
                <strong>Pick a project:</strong> Explore OpenStates, CivicPatch, and other civic data projects we support.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                4
              </span>
              <span>
                <strong>Come ready to contribute:</strong> Set up your development environment before the sprint begins.
              </span>
            </li>
          </ol>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch and let us know you're interested in joining the Civic Data Tech Sprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="mailto:info@civicdata.tech">Contact Us</a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
