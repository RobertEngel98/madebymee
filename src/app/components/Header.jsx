"use client";
import React, { useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);

  return (
    <header className="header madebyme_header" ref={headerRef}>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" href="/">
            <img src="/MBMEE-Logo.png" className="logo" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#macher" className="nav-link animated-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#referenzen" className="nav-link animated-link">
                  Leistungen
                </a>
              </li>
              <li className="nav-item">
                <a href="/team" className="nav-link animated-link">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#kontakt" className="nav-link animated-link">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
