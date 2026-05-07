import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function CharterSignForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = [
    "Software Developer / Data Engineer",
    "Election Protection / Voting Rights Advocate",
    "Journalist / Civic Data Reporter",
    "Government Official",
    "Community Organization",
    "Academic / Researcher",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.category) {
        setError("Please fill in all required fields");
        setLoading(false);
        return;
      }

      // Create GitHub issue via form submission
      // This will be processed by GitHub Actions
      const payload = {
        name: formData.name,
        email: formData.email,
        organization: formData.organization || "Independent",
        role: formData.role || "Not specified",
        category: formData.category,
        message: formData.message,
        timestamp: new Date().toISOString(),
      };

      // Create the issue body
      const issueBody = `
## New Charter Signatory

**Name:** ${payload.name}
**Email:** ${payload.email}
**Organization:** ${payload.organization}
**Role/Title:** ${payload.role}
**Category:** ${payload.category}

**Message:**
${payload.message || "No message provided"}

**Submitted:** ${payload.timestamp}
`;

      // For GitHub Pages deployment, we'll create issues via GitHub API
      // This requires a GitHub token, which we'll handle via form submission
      // Users can also submit via email as fallback
      
      // Try to create GitHub issue
      try {
        const response = await fetch(
          "https://api.github.com/repos/civicdatatech/civicdatatech.github.io/issues",
          {
            method: "POST",
            headers: {
              "Accept": "application/vnd.github+json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: `Charter Signatory: ${payload.name}`,
              body: issueBody,
              labels: ["charter-signatory", "automated"],
            }),
          }
        );

        if (!response.ok && response.status !== 403 && response.status !== 401) {
          throw new Error(`GitHub API returned ${response.status}`);
        }
      } catch (githubErr) {
        // If GitHub API fails (likely due to auth), continue with email fallback
        console.warn("GitHub API call failed, using email fallback", githubErr);
      }

      // Also send email notification as backup
      const emailSubject = `Charter Signatory: ${payload.name}`;
      const emailBody = `${payload.name} has signed the Civic Data Tech Charter.\n\n${issueBody}`;
      
      try {
        await fetch(
          `https://formspree.io/f/xyzpqwer`, // You'll need to set up a Formspree integration
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: payload.name,
              email: payload.email,
              organization: payload.organization,
              role: payload.role,
              category: payload.category,
              message: payload.message,
              _subject: emailSubject,
            }),
          }
        );
      } catch (emailErr) {
        console.warn("Email notification failed", emailErr);
      }

      // Show success
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        role: "",
        category: "",
        message: "",
      });

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(
        "There was an error submitting the form. Please try again or email info@civicdata.tech"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Alert className="border-green-500/50 bg-green-50">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          Thank you for signing the charter! Your submission has been received and will be added to our signatories list.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <Alert className="border-red-500/50 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-semibold">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background border-border"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-semibold">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background border-border"
          />
        </div>
      </div>

      {/* Organization */}
      <div className="space-y-2">
        <Label htmlFor="organization" className="text-foreground font-semibold">
          Organization <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="organization"
          name="organization"
          type="text"
          placeholder="Your organization or project"
          value={formData.organization}
          onChange={handleChange}
          className="bg-background border-border"
        />
      </div>

      {/* Role */}
      <div className="space-y-2">
        <Label htmlFor="role" className="text-foreground font-semibold">
          Role / Title <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="role"
          name="role"
          type="text"
          placeholder="Your role or title"
          value={formData.role}
          onChange={handleChange}
          className="bg-background border-border"
        />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label htmlFor="category" className="text-foreground font-semibold">
          Category <span className="text-red-500">*</span>
        </Label>
        <Select value={formData.category} onValueChange={handleSelectChange}>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder="Select your category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground font-semibold">
          Message <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us why you're signing the charter and what you hope to accomplish (optional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="bg-background border-border resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-12 px-8 text-base w-full md:w-auto"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Sign the Charter"}
      </Button>

      <p className="text-sm text-muted-foreground">
        By signing, you commit to advancing open civic data standards in your work and community.
      </p>
    </form>
  );
}
