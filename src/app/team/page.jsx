import "bootstrap/dist/css/bootstrap.min.css";
import PageHeader from "./PageHeader";
import EmployeeGrid from "./EmployeeGrid";
import FounderSection from "./FounderSection";

export const metadata = {
  title: "Team | Let us entertain you",
  description: "Meet our team and founders",
};

export default function TeamPage() {
  return (
    <main className="team-page">
      <PageHeader />
      <EmployeeGrid />
      <FounderSection />
    </main>
  );
}
