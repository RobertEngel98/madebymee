"use client";
import React, { useEffect } from "react";

import MainSection from "./components/mainSection";
import Macher from "./components/macher";
import Team from "./components/team";
import ContentSection from "./components/contentSection";
import Referenzen from "./components/referenzen";
import Kontakt from "./components/kontakt";
import SocialsMadebymee from "./components/socialsMadebymee";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import ClientsSection from "../components/ClientsSection";
import SocialProofSection from "./components/SocialProofSection";
import FaqSection from "./components/FaqSection";

export default function MadeByMe() {
  const teamMembers = [
    {
      img: "/assets/Leander.png",
      name: "Leander Ewald",
      designation: "(Co Founder - ihr Ansprechpartner)",
      text: "Leander kümmert sich um Strategie & Beratung.",
      contact: +4917647514132,
      email: "leander@talentsuite.io",
    },
    {
      img: "/assets/Robert.png",
      name: "Robert Engel",
      designation: "(Co Founder - Systematisierung und Marketing)",
      text: "Robert sorgt für technische Umsetzung & Qualität.",
      contact: +491713846619,
      email: "Robert@talentsuite.io",
    },
    {
      img: "/assets/Lukas.png",
      name: "Lukas Mühlhof",
      designation: "(Co Founder - von der Idee bis zur Umsetzung)",
      text: "Lukas bringt kreative Ideen in Foto & Video.",
      contact: +4917635406689,
      email: "Lukas@talentsuite.io",
    },
  ];

  const services = [
    {
      title: "Socials. madebymee",
      desc: "Content für Social Media, Stories & Reels.",
    },
    {
      title: "Recruiting. madebymee",
      desc: "Employer Branding, HR Content, Karriereseiten.",
    },
    {
      title: "Ads. madebymee",
      desc: "Performance Marketing, Kampagnen & Paid Ads.",
    },
  ];

  const tiles = [
    { type: "portrait", color: "#A7D1B0", text: "Social Media Clips" },
    { type: "landscape", color: "#000000", text: "Employer Branding" },
    { type: "portrait", color: "#A7D1B0", text: "Werbekampagnen" },
    { type: "landscape", color: "#000000", text: "Content Strategie" },
  ];

  return (
    <div className="">
      <MainSection tiles={tiles} />
      <ClientsSection />
      <ProblemSection />
      <SolutionSection />
      {/* <Macher /> */}
      <SocialsMadebymee />
      {/* <Team members={teamMembers} /> */}
      {/* <ContentSection items={services} /> */}
      <Referenzen />
      <SocialProofSection />
      <FaqSection />
      <Kontakt />
    </div>
  );
}
