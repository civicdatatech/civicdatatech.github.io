import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base font-medium">
            🎉 Join us at PyCon US on May 18/19 for our first Civic Data Tech Sprint hack-a-thon
          </p>
        </div>
        <Link
          href="/volunteer"
          className="inline-flex items-center px-4 py-2 bg-primary-foreground text-primary font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap text-sm cursor-pointer"
        >
          Learn More
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="text-primary-foreground hover:opacity-70 transition-opacity p-1"
          aria-label="Close banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
