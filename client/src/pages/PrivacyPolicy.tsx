import { useEffect } from 'react';

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Civic Data Tech";
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-display font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-base text-muted-foreground">
            Last updated: October 31, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Introduction</h2>
            <p className="text-base leading-relaxed text-foreground">
              Civic Data Tech ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our organization, website, and community initiatives.
            </p>
          </section>

          {/* Data Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Information We Collect</h2>
            <p className="text-base leading-relaxed text-foreground">
              We may collect information from you in the following ways:
            </p>
            <ul className="space-y-3 text-base text-foreground">
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Contact Information:</span>
                <span>When you reach out to us, sign up for our mailing list, or register for events, we collect your name, email address, and other contact details you provide.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Event Participation:</span>
                <span>If you attend or register for our events, we may collect information about your participation and interests.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Community Engagement:</span>
                <span>Information about your participation in our community initiatives, forums, or discussions.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Technical Information:</span>
                <span>We automatically collect certain technical information when you visit our website, such as your IP address, browser type, and pages visited (via standard web analytics).</span>
              </li>
            </ul>
          </section>

          {/* How We Use Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">How We Use Your Information</h2>
            <p className="text-base leading-relaxed text-foreground">
              We use the information we collect for specific, community-focused purposes:
            </p>
            <ul className="space-y-3 text-base text-foreground">
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Community Growth:</span>
                <span>We review participant information to understand our community better and identify opportunities to organize events, workshops, and initiatives that serve your needs.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Event Coordination:</span>
                <span>To send you information about upcoming events, workshops, and community activities that align with your interests.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Communication:</span>
                <span>To respond to your inquiries, provide support, and keep you informed about our mission and work.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Community Insights:</span>
                <span>To analyze engagement patterns and improve our programs—always in aggregate form to protect individual privacy.</span>
              </li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">We Never Share Your Data</h2>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
              <p className="text-base font-semibold text-primary">
                Your individual data is never shared with third parties. We maintain strict confidentiality.
              </p>
            </div>
            <p className="text-base leading-relaxed text-foreground">
              We do not:
            </p>
            <ul className="space-y-2 text-base text-foreground">
              <li className="flex gap-3">
                <span>•</span>
                <span>Sell your personal information to any individual, company, or organization</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Share your data with external vendors or service providers</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Disclose your contact information without your explicit consent</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Use your data for marketing purposes beyond our own community communications</span>
              </li>
            </ul>
            <p className="text-base leading-relaxed text-foreground mt-4">
              Your information is held in confidence and used exclusively for the community-building and organizational purposes described in this policy.
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Data Security</h2>
            <p className="text-base leading-relaxed text-foreground">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Data Retention</h2>
            <p className="text-base leading-relaxed text-foreground">
              We retain your information only as long as necessary to fulfill the purposes outlined in this policy. You may request deletion of your information at any time by contacting us at{" "}
              <a href="mailto:info@civicdata.tech" className="text-primary hover:underline font-semibold">
                info@civicdata.tech
              </a>.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Your Rights</h2>
            <p className="text-base leading-relaxed text-foreground">
              You have the right to:
            </p>
            <ul className="space-y-3 text-base text-foreground">
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Access:</span>
                <span>Request access to the personal information we hold about you</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Correction:</span>
                <span>Request that we correct any inaccurate information</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Deletion:</span>
                <span>Request that we delete your personal information</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Opt-Out:</span>
                <span>Unsubscribe from our mailing lists or communications at any time</span>
              </li>
            </ul>
            <p className="text-base leading-relaxed text-foreground mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@civicdata.tech" className="text-primary hover:underline font-semibold">
                info@civicdata.tech
              </a>.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Cookies and Tracking</h2>
            <p className="text-base leading-relaxed text-foreground">
              Our website may use cookies and similar tracking technologies to enhance user experience and gather analytics. These tools help us understand how visitors interact with our site. You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Third-Party Links</h2>
            <p className="text-base leading-relaxed text-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Children's Privacy</h2>
            <p className="text-base leading-relaxed text-foreground">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child's account.
            </p>
          </section>

          {/* Policy Changes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Changes to This Privacy Policy</h2>
            <p className="text-base leading-relaxed text-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of our website and services constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold">Contact Us</h2>
            <p className="text-base leading-relaxed text-foreground">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 mt-4">
              <p className="text-base text-foreground">
                <strong>Civic Data Tech</strong><br />
                Email:{" "}
                <a href="mailto:info@civicdata.tech" className="text-primary hover:underline font-semibold">
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
