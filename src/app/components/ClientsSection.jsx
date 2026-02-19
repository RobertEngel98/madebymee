"use client";
import { useEffect, useRef } from "react";

export default function ClientsSection() {
  const logosRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    logosRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const logos = [
    "/client-logos/4D-Elements.svg",
    "/client-logos/BoehmKabel.svg",
    "/client-logos/cre8ify.svg",
    "/client-logos/Garant-Personal.svg",
    "/client-logos/Heizkurier.svg",
    "/client-logos/Investment-Guide.svg",
    "/client-logos/Just-Virtual-Food-Brands.svg",
    "/client-logos/lds-logo.svg",
    "/client-logos/lebenswert-iserlohn-logo.svg",
    "/client-logos/Logo_UME_RLK.svg",
    "/client-logos/Roosters-Logo.svg",
    "/client-logos/schalf-platz.svg",
    "/client-logos/Specht-Immobilien.svg",
    "/client-logos/logo_seite_coool.svg",
  ];

  return (
    <section className="clients-section p-0">
      <div className="clients-grid">
        {logos.map((logo, i) => (
          <img
            key={i}
            ref={(el) => (logosRef.current[i] = el)}
            src={logo}
            alt="Client Logo"
            className="client-logo"
            style={{ transitionDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </section>
  );
}
