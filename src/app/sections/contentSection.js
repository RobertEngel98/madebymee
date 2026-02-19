"use client";
import React from "react";
import useScrollAnimation from "../components/useScrollAnimation";

const processData = [
  {
    image: "/assets/step1.svg",
    heading: "Socials. madebymee.",
    desc: "Dein Social Media auf dem nächsten Level",
  },
  {
    image: "/assets/step2.svg",
    heading: "Recruiting. madebymee.",
    desc: "Recruiting Videos, die deine offenen Stellen besetzen",
  },
  {
    image: "/assets/step3.svg",
    heading: "Ads. madebymee.",
    desc: "Werbung - direkt in's Ziel",
  },
];

const ContentSection = () => {
  useScrollAnimation();
  return (
    <section
      className="process_section"
      style={{ backgroundColor: "#000000" }}
    >
      <img
        src="/assets/step-img1.gif"
        className="process_img"
        alt="process image"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-5">
            <div className="titles text-center card-hidden">
              <h2 className="text-white mb-4">Marketing. madebymee.</h2>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="process_steps">
              {processData.map((process, index) => (
                <div key={index} className="process card-hidden">
                  <div className="process_icon">
                    <img src={process.image} alt={process.heading} />
                  </div>
                  <h3>{process.heading}</h3>
                  <p>{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/step-img2.gif"
        className="process_img"
        alt="process image"
      />
    </section>
  );
};

export default ContentSection;
