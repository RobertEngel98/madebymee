"use client";
import React from "react";
import useScrollAnimation from "../components/useScrollAnimation";

const Team = ({ members }) => {
  useScrollAnimation();
  return (
    <section className="team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <h2 className="text-center mb-5">madeby. us.</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {members.map((member, index) => (
            <div className="col-md-4 text-center mb-4" key={index}>
              <div className="team_members card-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="img-fluid rounded-circle mb-4"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3>{member.name}</h3>
                <p>{member.text}</p>
                <div className="team_contact">
                    <span>
                      <i className="bi bi-telephone"></i>
                      {member.contact}
                    </span>
                    <span>
                      <i className="bi bi-envelope"></i>
                      {member.email}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
