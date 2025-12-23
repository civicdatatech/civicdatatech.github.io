//// filepath: /Users/virginiadooley/Documents/civicdataproject/client/src/pages/Home.tsx
import { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Partners } from "@/components/sections/Partners";

export default function Home() {
  useEffect(() => {
    const { search } = window.location;
    if (!search) return;

    const params = new URLSearchParams(search);
    const section = params.get("section");
    if (!section) return;

    const el = document.getElementById(section);
    if (!el) return;

    const timeout = setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Hero />
      <Mission />
      <Partners />
    </>
  );
}