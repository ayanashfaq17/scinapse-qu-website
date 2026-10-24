/**
 * `/about`. Counters in src/data/statData.js, mission copy in AboutPage/MissionStatement.jsx.
 */
import StatSection from "../components/AboutPage/StatSection";
import MissionStatement from "../components/AboutPage/MissionStatement";

export default function About() {
  return (
    <div className="min-h-screen bg-brand-white">
      <StatSection />
      <MissionStatement />
    </div>
  );
}
