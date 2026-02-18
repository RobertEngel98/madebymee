export default function FaqSection() {
  return (
    <section className="faqs_section">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="fw-bold">FAQ</h2>
            <p>Häufig gestellte Fragen.</p>
          </div>
        </div>

        {/* Accordion */}
        <div className="accordion" id="faqAccordion">
          {/* FAQ 1 */}
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="true" aria-controls="faqOne">
                Funktioniert das auch für unseren Betrieb – egal ob Industrie, Handwerk oder Dienstleistung?
              </button>
            </h3>
            <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                <p>
                  Ja. Entscheidend ist nicht eure Branche, sondern, wen ihr erreichen wollt – und die sind heute am Smartphone. Wir schauen uns euren Betrieb, eure Zielgruppe und eure Stärken an und übersetzen das in Content, der zu euch passt, nicht
                  zu irgendeinem Trend.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
                Wie viel Zeit benötige ich für die Zusammenarbeit?
              </button>
            </h3>
            <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                <p>Von deiner Seite benötigen wir:</p>
                <ul>
                  <li>ein fokussiertes Erstgespräch,</li>
                  <li>Ein bis drei Drehtage – an denen du nicht anwesend sein musst,</li>
                  <li>und final eine Freigabe.</li>
                </ul>
                <p>Das heißt: möglichst wenig Aufwand für dich, maximale Wirkung für euren Auftritt!</p>
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
                Können wir mit euren Videos und Kampagnen wirklich messbar mehr Bewerbungen oder Anfragen erzielen?
              </button>
            </h3>
            <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                <p>
                  Wir versprechen keine Fantasie-Zahlen, sondern bringen deine Chancen auf ein Maximum. Mit gutem Content und passenden Kampagnen steigern wir eure Sichtbarkeit bei den richtigen Menschen und sehen in den Zahlen, was passiert:
                  Reichweite, Klicks, Bewerbungen und Anfragen.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour" aria-expanded="false" aria-controls="faqFour">
                Wie läuft die Zusammenarbeit mit euch ab?
              </button>
            </h3>
            <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                <p>
                  <strong>Kurz gesagt:</strong>
                </p>
                <ul>
                  <li>Erstgespräch – Ziele, Status, Zielgruppe, ehrliche Einschätzung.</li>
                  <li>Konzept & Planung – Formate, Botschaften, Drehplanung.</li>
                  <li>Produktion – wir kommen zu euch und setzen alles um.</li>
                  <li>Postproduktion & Abliefern – fertiger Content für Website, Social Media & Ads.</li>
                  <li>Feedback – wir setzen euer Feedback um.</li>
                  <li>Optional: Laufende Betreuung – regelmäßiger Content und Optimierung.</li>
                </ul>
                <p>So gestalten wir die Zusammenarbeit so simpel und effektiv wie möglich.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
