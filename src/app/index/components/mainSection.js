"use client";
import React, { useEffect, useState } from "react";

export default function MainSection() {
  const word = "CONTENT";
  const [currentWord, setCurrentWord] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < word.length) {
      const timer = setTimeout(() => {
        setCurrentWord(word.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 230);

      return () => clearTimeout(timer);
    }
  }, [charIndex]);

  return (
    <>
      {/* HERO */}
      <section className="hero-video-section">
        <video src="https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Showreel%20LQ.mp4" autoPlay loop muted playsInline className="hero-video" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero_title">
            <span className="typewriter">{currentWord}</span>
            <br />
            <span>madebymee.</span>
          </h1>
        </div>
      </section>
    </>
  );
}
