"use client";
import { useState } from "react";

export default function FounderTextBlock() {
  const [activeTab, setActiveTab] = useState("leander");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="founder_text">
      <h2 className="fw-bold mb-3">Vom Betrieb in den Feed</h2>
      <p>
        Wir geben deinem Unternehmen den Auftritt, den eure Qualität verdient – und holen euch raus aus 08/15-Anzeigen rein in die Feeds eurer Wunschmitarbeiter und Kunden. Hinter madebymee stehen drei Gründer aus Vertrieb, Performance-Ads und
        Content Creation, die ihre Erfahrung bündeln, um mittelständische Betriebe sichtbar, begehrenswert und vertrauenswürdig zu machen.
        <br />
        Mit ADS für Recruiting oder Neukundengewinnung und Social-Media-Content schließen wir eure Trust Gap, lösen Sichtbarkeitsprobleme und helfen euch, die richtigen Menschen für euren Betrieb zu gewinnen.
      </p>
      <p>
        Wir geben deinem Unternehmen den Auftritt, den eure Qualität verdient – und holen euch raus aus 08/15-Anzeigen rein in die Feeds eurer Wunschmitarbeiter und Kunden! Hinter madebymee stehen drei Gründer mit völlig unterschiedlichem Background
        – und genau dieser Mix macht den Unterschied.
      </p>
      <span></span>
      <div className="story_card">
        <ul className="nav nav-tabs mb-4" role="tablist">
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "leander" ? "active" : ""}`} onClick={() => handleTabClick("leander")} type="button" role="tab">
              Leander
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "robert" ? "active" : ""}`} onClick={() => handleTabClick("robert")} type="button" role="tab">
              Robert
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "lukas" ? "active" : ""}`} onClick={() => handleTabClick("lukas")} type="button" role="tab">
              Lukas
            </button>
          </li>
        </ul>

        <div className="tab-content">
          {activeTab === "leander" && (
            <div className="tab-pane fade show active">
              <p className="text-lg leading-relaxed text-neutral-200">
                <strong>Leander</strong> hat seine Passion in der Content Creation gefunden. Schon früh haben ihn Videographie, Schnitt und Storytelling mehr interessiert als klassischer Konsum. Heute denkt er in Hooks, Formaten und Bildern – mit
                einem Gefühl dafür, was auf Social Media wirklich hängenbleibt.
              </p>
            </div>
          )}
          {activeTab === "robert" && (
            <div className="tab-pane fade show active">
              <p className="text-lg leading-relaxed text-neutral-200">
                <strong>Robert</strong> hat bereits Werbebudgets im Wert von mehreren Mio. € verantwortet und lebt Performance-Ads. Er versteht, wie Kampagnen funktionieren, warum der erste Eindruck im Feed über Erfolg oder Totalausfall entscheidet –
                und wie man Content so baut, dass er nicht einfach ausgespielt, sondern genutzt wird.
              </p>
            </div>
          )}
          {activeTab === "lukas" && (
            <div className="tab-pane fade show active">
              <p className="text-lg leading-relaxed text-neutral-200">
                <strong>Lukas</strong> kommt aus dem Vertrieb und hat seit über … Jahren nichts anderes gemacht, als Menschen von Angeboten zu überzeugen – am Telefon, im Termin, auf Messen. Er weiß, welche Botschaften wirklich ziehen und wie man sie
                so formuliert, dass sie nicht nach Werbung klingen, sondern nach echter Chance.
              </p>
            </div>
          )}
        </div>

        <ul className="key_points">
          <li>
            <strong>Trust Gap</strong> – indem außen sichtbar wird, wie gut ihr tatsächlich seid, statt dass es nur im Gespräch erzählt wird.
          </li>
          <li>
            <strong>Sichtbarkeit</strong> – mit Videos, Fotos und Social-Media-Auftritten, durch die man online nicht mehr an eurem Betrieb vorbeikommt.
          </li>
          <li>
            <strong>Mitarbeitermangel</strong> – durch Recruiting-ADS und Social-Content, der die Menschen anspricht, die du wirklich im Team haben willst.
          </li>
        </ul>

        <p className="mt-3">
          Wir arbeiten jung im Kopf, klar in der Ansprache und professionell in der Umsetzung. Wenn dein Unternehmen bereit ist, die alte Anzeigen-Welt hinter sich zu lassen und dort sichtbar zu werden, wo Aufmerksamkeit heute wirklich passiert, dann
          sollten wir miteinander reden.
        </p>
      </div>
    </div>
  );
}
