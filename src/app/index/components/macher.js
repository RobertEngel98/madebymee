"use client";
import React from "react";
import useScrollAnimation from "../../components/useScrollAnimation";

export default function Macher() {
  useScrollAnimation();
  return (
    <section id="macher" className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12">
            <div className="macher-section card-hidden">
              <div className="macher-header card-hidden">
                <h2>madeby. whom?</h2>
              </div>

              <div className="macher-content card-hidden">
                <p className="">
                  Wir sind nicht hier, um jedem zu gefallen. Wir wollen nicht
                  gezwungen Vogue sein. Wir machen, was zu unseren Kunden passt
                  – und was ihnen hilft, ihre Ziele zu erreichen. Und wir haben
                  Spaß dabei. Spaß am Leben. Spaß am Produzieren. Vor allem aber
                  Spaß an außergewöhnlichen Ergebnissen.
                </p>
                <p className="">
                  Wir schauen nicht nach links und rechts. Wir sind Macher und
                  gehen unseren eigenen Weg. Wir setzen eure Ideen um, verleihen
                  ihnen das gewisse Etwas oder fordern Ideen heraus, wenn diese
                  unklar formuliert sind.
                </p>
                <a className="btns" href="#">
                  <span className="btn_arrows">
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-telephone"></i>
                  </span>
                  Termin buchen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
