"use client";
import React, { useState, useRef } from "react";
import useScrollAnimation from "../components/useScrollAnimation";

const Referenzen = () => {
  useScrollAnimation();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);
  const scrollYRef = useRef(0);

  React.useEffect(() => {
    if (modalOpen) {
      scrollYRef.current = window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [modalOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
      }
    };
    if (modalOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const projects = [
    {
      title: "Kunde A",
      desc: "Event Recap",
      type: "video",
      thumb: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longform%20Tag%20der%20Investoren.mp4",
    },
    {
      title: "Kunde B",
      desc: "VIP Promotion",
      type: "video",
      thumb: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longfrom%20Roosters%20VIP%20HQ.mp4",
    },
    {
      title: "Kunde C",
      desc: "Black Friday Promotion",
      type: "video",
      thumb: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longform%20Black%20Week%20HQ.mp4",
    },
    {
      title: "Kunde D",
      desc: "Creative Project",
      type: "video",
      thumb: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longform%20911%20Carrera%20HQ.mp4",
    },
    {
      title: "Kunde E",
      desc: "Social Media Production",
      type: "video",
      thumb: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longfrom%20Business%20Roosters%20HQ.mp4",
    },
    {
      title: "Kunde F",
      desc: "Recruiting AD",
      type: "video",
      thumb: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/Longform%20Bo%CC%88hm%20Jobspotting%20HQ.mp4",
    },
  ];

  return (
    <section id="referenzen">
      <div className="container">
        <div className="row mb-5 card-hidden text-center">
          <h2 className="mb-3">
            CASES. <span>madebymee.</span>
          </h2>
          <p>Ein Auszug erfolgreicher Projekte, die wir für unsere Kunden umgesetzt haben.</p>
        </div>

        <div className="row g-4">
          {projects.map((proj, i) => (
            <div key={i} className="col-md-4">
              <div
                className="project-tile card-hidden h-100 position-relative overflow-hidden"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setModalVideo(proj.thumb);
                  setModalOpen(true);
                }}>
                {proj.type === "video" ? (
                  <video className="w-100 h-100 object-fit-cover" muted loop playsInline preload="metadata">
                    <source src={proj.thumb} type="video/mp4" />
                  </video>
                ) : (
                  <img src={proj.thumb} alt={proj.title} className="img-fluid w-100 h-100 object-fit-cover" />
                )}

                <div className="project-overlay position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                  <div className="play-button rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-fill text-white fs-3"></i>
                  </div>
                </div>

                <div className="project-info position-absolute bottom-0 start-0 p-3">
                  <h5 className="mb-0">{proj.title}</h5>
                  <p className="mb-0">{proj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal-backdrop-custom" onClick={() => setModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalOpen(false)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <video src={modalVideo} controls autoPlay playsInline className="modal-video" />
          </div>
        </div>
      )}

      <style jsx>{`
        .project-overlay {
          pointer-events: none;
        }
        .play-button {
          width: 60px;
          height: 60px;
          background-color: rgba(90, 170, 215, 0.2);
          box-shadow: 0 0 8px rgba(90, 170, 215, 0.5);
          transition: transform 0.3s ease;
        }
        .project-tile:hover .play-button {
          transform: scale(1.1);
        }
        video {
          object-fit: cover;
        }
        .modal-backdrop-custom {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.82);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          box-sizing: border-box;
        }
        .modal-box {
          position: relative;
          width: 100%;
          max-width: 1080px;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .modal-video {
          display: block;
          width: 100%;
          height: auto;
          max-height: 70vh;
          background: #000;
        }
        .modal-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 10;
          background: rgba(0, 0, 0, 0.45);
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          transition:
            background 0.25s ease,
            transform 0.2s ease;
        }
        .modal-close-btn:hover {
          background: rgba(90, 170, 215, 0.7);
          transform: scale(1.1);
        }
        @media (max-width: 900px) {
          .modal-box {
            max-width: 90vw;
          }
        }
        @media (max-width: 540px) {
          .modal-backdrop-custom {
            padding: 12px;
            align-items: flex-end;
            padding-bottom: 24px;
          }
          .modal-box {
            max-width: 100%;
            border-radius: 16px 16px 12px 12px;
          }
          .modal-video {
            max-height: 55vh;
          }
          .modal-close-btn {
            top: 10px;
            right: 10px;
            width: 34px;
            height: 34px;
          }
          .modal-close-btn svg {
            width: 17px;
            height: 17px;
          }
        }
      `}</style>
    </section>
  );
};

export default Referenzen;
