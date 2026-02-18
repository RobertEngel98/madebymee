// components/SocialProof/SocialProofSection.jsx

export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Max Müller",
      role: "CEO",
      company: "Müller Logistik GmbH",
      image: "/assets/Leander.png",
      text: "Die Zusammenarbeit mit madebymee hat unsere Sichtbarkeit massiv verbessert. Innerhalb weniger Wochen hatten wir qualifizierte Bewerbungen und eine deutlich stärkere Online-Präsenz.",
    },
    {
      name: "Anna Schmidt",
      role: "Founder",
      company: "Schmidt Solutions",
      image: "/assets/Leander.png",
      text: "Endlich eine Agentur, die nicht nur schöne Inhalte produziert, sondern wirklich versteht, wie Recruiting und Performance zusammenarbeiten.",
    },
    {
      name: "Daniel Weber",
      role: "Managing Director",
      company: "Weber Industrie",
      image: "/assets/Leander.png",
      text: "madebymee hat es geschafft, unsere Qualität nach außen sichtbar zu machen. Das Feedback unserer Kunden und Mitarbeiter spricht für sich.",
    },
  ];

  return (
    <section className="social-proof-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="mb-3">Was unsere Kunden sagen</h2>
            <p className="">Geschäftsführer und Entscheider berichten über ihre Erfahrungen mit uns.</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="testimonial-card h-100">
                <div className="testimonial-content">
                  <p className="testimonial-text">“{item.text}”</p>

                  <div className="insta_caption testimonial_author">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="">
                      <h6 className="mb-0 fw-bold">{item.name}</h6>
                      <small className="text-muted">
                        {item.role}, {item.company}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
