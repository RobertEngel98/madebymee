// components/Team/FounderSection.jsx
import FounderTextBlock from "./FounderTextBlock";

const employees = [
  {
    name: "Lukas Mühlhof",
    role: "Vertrieb & Kommunikation",
    contact: "4917635406689",
    email: "lukas@talentsuite.io",
    profile: "M",
    img1: "/assets/Lukas.png",
    img2: "/assets/Lukas.png",
  },
  {
    name: "Leander Ewald",
    role: "Content & Storytelling",
    contact: "4917647514132",
    email: "leander@talentsuite.io",
    profile: "E",
    img1: "/assets/Leander.png",
    img2: "/assets/Leander.png",
  },
  {
    name: "Robert Engel",
    role: "Marketing & HR",
    contact: "491713846619",
    email: "robert@talentsuite.io",
    profile: "E",
    img1: "/assets/Robert.png",
    img2: "/assets/Robert.png",
  },
];

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="container">
        <h2 className="text-center mb-5">Unsere Gründer</h2>

        <div className="row g-4 mb-5 justify-content-center">
          {employees.map((employee, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-3">
              <div className="employee-card">
                {/* Top Instagram-style caption */}
                <div className="insta_caption d-flex align-items-center">
                  <h3>{employee.profile}</h3>
                  <h5 className="mb-0">{employee.name}</h5>
                </div>

                {/* Image hover wrapper */}
                <div className="img-wrapper">
                  <img src={employee.img1} alt={employee.name} className="img-front" />
                  <img src={employee.img2} alt={employee.name} className="img-back" />
                </div>

                {/* Bottom caption */}
                <div className="insta_caption d-block">
                  <p className="mb-2">{employee.role}</p>
                  <span className="hr"></span>
                  <div className="team_contact gap-1">
                    <span>
                      <i className="bi bi-telephone me-2"></i>
                      {employee.contact}
                    </span>
                    <span>
                      <i className="bi bi-envelope me-2"></i>
                      {employee.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Text content below founders */}
        <FounderTextBlock />
      </div>
    </section>
  );
}
