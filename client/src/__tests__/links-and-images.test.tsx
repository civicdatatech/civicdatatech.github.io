import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

// Utility to collect all anchor and image elements from the rendered document
const getAllAnchors = () =>
  Array.from(document.querySelectorAll<HTMLAnchorElement>("a"));
const getAllImages = () =>
  Array.from(document.querySelectorAll<HTMLImageElement>("img"));

describe("Site links and images", () => {
  it("renders App without throwing", () => {
    render(<App />);
  });

  it("all anchor tags have non-empty href and look like valid URLs/paths", () => {
    render(<App />);

    const anchors = getAllAnchors();
    expect(anchors.length).toBeGreaterThan(0);

    for (const a of anchors) {
      const href = a.getAttribute("href") || "";

      expect(href).not.toBe("");

      const isMailto = href.startsWith("mailto:");
      const isHttp = href.startsWith("http://") || href.startsWith("https://");
      const isInternalPath = href.startsWith("/"); // e.g. "/", "/get-involved", "/?section=mission"

      // DEBUG: log any href that does not match our allowed patterns
      if (!isMailto && !isHttp && !isInternalPath) {
        // eslint-disable-next-line no-console
        console.log("Bad href:", href, "text:", a.textContent);
      }

      expect(isMailto || isHttp || isInternalPath).toBe(true);
    }
  });

  it("all images have a non-empty src attribute", () => {
    render(<App />);

    const imgs = getAllImages();
    expect(imgs.length).toBeGreaterThan(0);

    for (const img of imgs) {
      const src = img.getAttribute("src");
      expect(src).toBeTruthy();
    }
  });

  it("hero Join the community button points to /get-involved route", () => {
    render(<App />);

    const cta = screen.getByText(/join the community/i).closest("a");
    expect(cta).not.toBeNull();

    const href = cta!.getAttribute("href");
    expect(href).toBe("/get-involved");
  });

  it("navbar Get Involved link points to /get-involved", () => {
    render(<App />);

    const navLink = screen
      .getAllByText(/get involved/i)
      .find((el) => el.tagName.toLowerCase() === "a");

    expect(navLink).toBeDefined();
    const href = navLink!.getAttribute("href");
    expect(href).toBe("/get-involved");
  });

  it("hero image source is defined", () => {
    render(<App />);

    const heroImg = screen.getByAltText(/civic data network visualization/i);
    expect(heroImg).toBeInTheDocument();

    const src = (heroImg as HTMLImageElement).getAttribute("src");
    expect(src).toBeTruthy();
  });
});