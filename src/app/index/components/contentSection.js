// "use client";
// import React from "react";

// const ContentSection = ({ items }) => {
//   return (
//     <section id="content" className="content-section container py-5">
//       <h2 className="text-center mb-4">Content. madebymee</h2>
//       <div className="row">
//         {items.map((item, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="p-4 shadow rounded" style={{ background: "#FAF9F6" }}>
//               <h5>{item.title}</h5>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ContentSection;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useScrollAnimation from "../../components/useScrollAnimation";

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
    desc: "Werbung - direkt in’s Ziel",
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
                    <img src={process.image} />
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
