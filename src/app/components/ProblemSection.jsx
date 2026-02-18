"use client";

import { useEffect, useRef } from "react";

const ProblemSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);

            if (index !== -1) {
              setTimeout(() => {
                entry.target.classList.add("show");
              }, index * 500); // 0.5 sec delay per card
            }
          }
        });
      },
      { threshold: 0.4 },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="problem-section">
      <div className="container">
        <h2 className="mb-5 text-center animate-pop">KOMMT DIR DAS BEKANNT VOR?</h2>

        <div className="row g-4">
          {problemData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div ref={(el) => (cardsRef.current[index] = el)} className="problem-card fade-card">
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

const problemData = [
  {
    title: "Keine Sichtbarkeit",
    text: "Starke Leistung, aber online findet euch kaum jemand – Content wirkt zufällig statt geplant – und potenzielle Kunden landen bei Mitbewerbern, bevor sie euch überhaupt wahrnehmen.",
  },
  {
    title: "Marketing ohne Wirkung",
    text: "Ihr postet, schaltet Ads oder probiert „ein bisschen was” aus – aber es kommt kaum messbar etwas zurück – weil Werbeanzeigen fehlen, die Botschaft nicht treffen und ohne Performance-Fokus kein konstanter Lead-Flow entsteht.",
  },
  {
    title: "Mitarbeitermangel",
    text: "Offene Stellen, aber kaum qualifizierte Bewerbungen – Budget versickert in Stellenportalen, Print & Co. – während eure Zielgruppe längst am Smartphone entscheidet und ihr im Feed nicht stattfindet.",
  },
];

export default ProblemSection;
