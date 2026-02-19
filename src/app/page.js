"use client";
import React from "react";

import MainSection from "./sections/mainSection";
import Referenzen from "./sections/referenzen";
import Kontakt from "./sections/kontakt";
import SocialsMadebymee from "./sections/socialsMadebymee";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ClientsSection from "./components/ClientsSection";
import SocialProofSection from "./sections/SocialProofSection";
import FaqSection from "./sections/FaqSection";

export default function Page() {
  return (
    <div className="">
      <MainSection />
      <ClientsSection />
      <ProblemSection />
      <SolutionSection />
      <SocialsMadebymee />
      <Referenzen />
      <SocialProofSection />
      <FaqSection />
      <Kontakt />
    </div>
  );
}
