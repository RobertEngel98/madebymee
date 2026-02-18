// components/Team/EmployeeGrid.jsx
import EmployeeCard from "./EmployeeCard";

const employees = [
  { name: "Leander Ewald", role: "Leander kümmert sich um Strategie & Beratung.", contact: "4917647514132", email: "leander@talentsuite.io", img1: "/assets/Leander.png", img2: "/assets/Leander.png" },
  { name: "Robert Engel", role: "Robert sorgt für technische Umsetzung & Qualität.", contact: "491713846619", email: "Robert@talentsuite.io", img1: "/assets/Robert.png", img2: "/assets/Robert.png" },
  { name: "Lukas Mühlhof", role: "Lukas bringt kreative Ideen in Foto & Video.", contact: "4917635406689", email: "Lukas@talentsuite.io", img1: "/assets/Lukas.png", img2: "/assets/Lukas.png" },
];

export default function EmployeeGrid() {
  return (
    <section className="">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {employees.map((emp, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4 col-xl-4">
              <EmployeeCard {...emp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
