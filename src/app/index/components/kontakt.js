"use client";

import { useState } from "react";
import useScrollAnimation from "../../components/useScrollAnimation";
export default function Kontakt() {
  useScrollAnimation();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log(result);
      if (result.status === "success") {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Failed to send message: " + result.message);
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Check console for details.");
    }
  };

  return (
    <section id="kontakt" className="">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="mb-4 card-hidden">Kontakt</h2>
            <form className="contact_form" onSubmit={handleSubmit}>
              <div className="mb-3 card-hidden">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" placeholder="Dein Name" required />
              </div>
              <div className="mb-3 card-hidden">
                <label className="form-label">E-Mail</label>
                <input type="email" name="email" className="form-control" placeholder="Deine E-Mail" required />
              </div>
              <div className="mb-3 card-hidden">
                <label className="form-label">Nachricht</label>
                <textarea name="message" className="form-control" rows="4" placeholder="Deine Nachricht" required></textarea>
              </div>
              <div className="hero_buttons mt-4 card-hidden">
                <button type="submit" className="btns web_btns">
                  Absenden
                  <span className="btn_arrows">
                    <i className="bi bi-arrow-up-right"></i>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </button>
              </div>
              {status && <p className="mt-2">{status}</p>}
            </form>
          </div>
          <div className="col-12 col-md-6">
            <img src="/assets/about-1.png" alt="Social Media Clips" className="card-hidden contact_img"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
