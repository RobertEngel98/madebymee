// components/Team/EmployeeCard.jsx
export default function EmployeeCard({ name, role, contact, email, img1, img2 }) {
  return (
    <div className="employee-card white-caption">
      <div className="insta_caption white">
        <img
          src={img1}
          alt={img1}
          className="img-fluid rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
        <h5 className="mb-1">{name}</h5>
      </div>
      <div className="img-wrapper">
        <img src={img1} alt={name} className="img-front" />
        <img src={img2} alt={name} className="img-back" />
      </div>
      <div className="insta_caption d-block white">
        <p className="mb-1">{role}</p>
        {/* <div className="team_contact">
          <span>
            <i className="bi bi-telephone"></i>
            {contact}
          </span>
          <span>
            <i className="bi bi-envelope"></i>
            {email}
          </span>
        </div> */}
      </div>
    </div>
  );
}
