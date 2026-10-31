import { useEffect } from 'react';

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Civic Data Tech";
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: October 31, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Introduction</h2>
            <p className="text-foreground">
              Civic Data Tech ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our organization, website, and community initiatives.
            </p>
          </section>

          {/* Data Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Information We Collect</h2>
            <p className="text-foreground">
              We may collect information from you in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li><strong>Contact Information:</strong> When you reach out to us, sign up for our mailing list, or register for events, we collect your name, email address, and other contact details you provide.</li>
              <li><strong>Event Participation:</strong> If you attend or register for our events, we may collect information about your participation and interests.</li>
              <li><strong>Community Engagement:</strong> Information about your participation in our community initiatives, forums, or discussions.</li>
            </ul>
          </section>

          {/* How We Use Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">How We Use Your Information</h2>
            <p className="text-foreground">
              We use the information we collect for specific, community-focused purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li><strong>Community Growth:</strong> We review participant information to understand our community better and identify opportunities to organize events, workshops, and initiatives that serve your needs.</li>
              <li><strong>Event Coordination:</strong> To send you information about upcoming events, workshops, and community activities that align with your interests.</li>
              <li><strong>Communication:</strong> To respond to your inquiries, provide support, and keep you informed about our mission and work.</li>
              <li><strong>Community Insights:</strong> To analyze engagement patterns and improve our programs—always in aggregate form to protect individual privacy.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">We Never Share Your Data</h2>
            <p className="text-foreground font-semibold text-primary mb-4">
              Your individual data is never shared with third parties. We maintain strict confidentiality.
            </p>
            <p className="text-foreground">
              We do not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li>Sell your personal information to any individual, company, or organization</li>
              <li>Share your data with external vendors or service providers</li>
              <li>Disclose your contact information without your explicit consent</li>
              <li>Use your data for marketing purposes beyond our own community communications</li>
            </ul>
            <p className="text-foreground mt-4">
              Your information is held in confidence and used exclusively for the community-building and organizational purposes described in this policy.
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Data Security</h2>
            <p className="text-foreground">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Data Retention</h2>
            <p className="text-foreground">
              We retain your information only as long as necessary to fulfill the purposes outlined in this policy. You may request deletion of your information at any time by contacting us at{" "}
              <a href="mailto:info@civicdata.tech" className="text-primary hover:underline">
                info@civicdata.tech
              </a>.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Your Rights</h2>
            <p className="text-foreground">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request that we correct any inaccurate information</li>
              <li><strong>Deletion:</strong> Request that we delete your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from our mailing lists or communications at any time</li>
            </ul>
            <p className="text-foreground mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@civicdata.tech" className="text-primary hover:underline">
                info@civicdata.tech
              </a>.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Cookies and Tracking</h2>
            <p className="text-foreground">
              Our website may use cookies and similar tracking technologies to enhance user experience and gather analytics. These tools help us understand how visitors interact with our site. You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Third-Party Links</h2>
            <p className="text-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Children's Privacy</h2>
            <p className="text-foreground">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child's account.
            </p>
          </section>

          {/* Policy Changes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Changes to This Privacy Policy</h2>
            <p className="text-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of our website and services constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Contact Us</h2>
            <p className="text-foreground">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 mt-4">
              <p className="text-foreground">
                <strong>Civic Data Tech</strong><br />
                Email:{" "}
                <a href="mailto:info@civicdata.tech" className="text-primary hover:underline">
                  info@civicdata.tech
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
