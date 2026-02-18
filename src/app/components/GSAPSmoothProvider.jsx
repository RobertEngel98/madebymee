"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function GSAPSmoothProvider({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const smootherRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    // Delay init slightly to ensure DOM layout is ready
    const timeout = setTimeout(() => {
      // Initialize ScrollSmoother
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 0.3, // Scroll smoothness
        smoothTouch: 0.5, // Mobile touch smoothness
        normalizeScroll: true, // Fix browser scroll differences
        effects: true, // Enables data-speed & data-lag
        ignoreMobileResize: false,
      });

      ScrollTrigger.refresh(); // Ensure ScrollTrigger knows dimensions
    }, 100);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      clearTimeout(timeout);

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);

      if (smootherRef.current) smootherRef.current.kill();
      ScrollTrigger.killAll();

      // Reset styles
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="smooth-wrapper"
      style={{
        overflow: "hidden", // Prevent native scroll
        height: "100%",
        width: "100%",
      }}>
      <div
        ref={contentRef}
        id="smooth-content"
        style={{
          minHeight: "100vh", // Ensure content fills viewport
          width: "100%",
        }}>
        {children}
      </div>
    </div>
  );
}
