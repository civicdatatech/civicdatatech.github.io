import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";
import civicDataTechLogo from "@/assets/generated_images/civic-data-tech-logo.png";
import unifiedIcon from "@/assets/unified-icon.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={civicDataTechLogo} alt="Civic Data Tech Logo" className="h-6 w-6" />
              <h3 className="font-display font-bold text-2xl">Civic Data Tech</h3>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Fostering a more accessible, resilient, and participatory democracy for all through open data and collaboration.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/civic-data-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/civicdatatech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@civicdata.tech"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              {/* New Unified icon */}
              <a
                href="https://unified.me/organization/27721/posts?invite=civicdata"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Unified organization posts"
              >
                <img
                  src={unifiedIcon}
                  alt="Unified"
                  className="h-5 w-5 object-contain"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Project</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-background transition-colors cursor-pointer"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/strategy"
                  className="hover:text-background transition-colors cursor-pointer"
                >
                  Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-background transition-colors cursor-pointer"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="hover:text-background transition-colors cursor-pointer"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* ...optional Legal column... */}
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Civic Data Tech. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}