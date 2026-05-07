import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Membership() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      role: formData.get("role"),
      interests: formData.getAll("interests"),
      message: formData.get("message"),
    };

    try {
      // Send to Formspree or your email service
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Join Our Member Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Become a member of Civic Data Tech and collaborate with us in supporting open-source civic data infrastructure.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-primary/50 rounded-2xl p-12 text-center"
            >
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've received your membership application. Our team will review it and be in touch within 3-5 business days.
              </p>
              <Button asChild>
                <a href="/">Return to Home</a>
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
              {/* Benefits Section */}
              <div className="mb-10 p-6 bg-secondary/30 rounded-xl">
                <h3 className="font-bold text-lg mb-4">Member Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Voting rights on association decisions</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Access to member-only events and resources</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Collaboration opportunities with civic data projects</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Input on association strategy and priorities</span>
                  </li>
                </ul>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Organization / Company
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your organization (optional)"
                />
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">
                  Your Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a role</option>
                  <option value="developer">Developer / Engineer</option>
                  <option value="designer">Designer</option>
                  <option value="data-analyst">Data Analyst</option>
                  <option value="civic-leader">Civic Leader / Government</option>
                  <option value="researcher">Researcher / Academic</option>
                  <option value="advocate">Civic Advocate</option>
                  <option value="business">Business / Organization</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium mb-4">
                  Areas of Interest * (select all that apply)
                </label>
                <div className="space-y-3">
                  {[
                    { value: "openStates", label: "OpenStates Project" },
                    { value: "civicPatch", label: "CivicPatch Project" },
                    { value: "dataStandards", label: "Data Standards & Advocacy" },
                    { value: "infrastructure", label: "Hosting & Infrastructure Support" },
                    { value: "outreach", label: "Outreach & Promotion" },
                    { value: "development", label: "Development & Contribution" },
                  ].map((interest) => (
                    <label key={interest.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest.value}
                        className="w-4 h-4 rounded border-border bg-background"
                      />
                      <span className="text-sm">{interest.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about yourself and why you want to join
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Share your background, interests, and how you'd like to contribute..."
                />
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90 flex-1"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button type="reset" variant="outline" className="flex-1">
                  Clear Form
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                * Required fields. We'll review your application and follow up within 3-5 business days.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
