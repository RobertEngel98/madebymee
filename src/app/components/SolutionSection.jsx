"use client";

import { useEffect, useRef } from "react";

const SolutionSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
          observer.disconnect(); // 🔒 once only
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="solution-section" ref={sectionRef}>
      <div className="container">
        <h2 className=" text-center animate-pop mb-2">DER NÄCHSTE SCHRITT IST EINFACHER ALS DU DENKST</h2>
        <h3 className="text-center animate-pop mb-5">Die Lösung: Content, der für dich arbeitet.</h3>

        <div className="row g-4">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="solution-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    title: "Organische Social Media Engine",
    text: "Wir übernehmen euren Auftritt von A bis Z – Strategie, Skripting, Drehs vor Ort, Postproduktion und Posting – plus Community-Management für echtes Engagement, damit ihr dauerhaft sichtbar und relevant bleibt.",
  },
  {
    title: "Performance Video Ads, die Anfragen bringen",
    text: "Wir produzieren Video-Creatives, die sofort Aufmerksamkeit ziehen – bewerten Hooks, Botschaften und Varianten datenbasiert – und skalieren als Performance-Kampagne, bis daraus konstant qualifizierte Anfragen werden.",
  },
  {
    title: "Recruiting Ads, die Bewerbungen liefern",
    text: "Gemeinsam mit euch planen und produzieren wir Recruiting-Videos, die auffallen und im Kopf bleiben. Ausgespielt als Performance Ads, messbar an Bewerbungen statt Reichweite – und kontinuierlich optimiert, bis regelmäßig passende Kandidaten reinkommen.",
  },
];

export default SolutionSection;
