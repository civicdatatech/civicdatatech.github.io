import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/strategy_image_1765189746629.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Supporting open-source civic data projects
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
              Data fragmentation isn't just a technical problem - it's a democratic one.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              We unite the civic tech community and invest in projects that fill gaps in civic data nationwide, ensuring the data stays open, verifiable, and reaches the communities that need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/get-involved">
                  Join the Community <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full rounded-3xl overflow-hidden border border-border/30"
          >
            <img 
              src={heroImage} 
              alt="Civic Data Network Visualization" 
              className="w-full h-auto display-block"
            />
          </motion.div>
        </div>
      </div>
    
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-t from-accent/5 to-transparent blur-3xl" />
    </section>
  );
}
