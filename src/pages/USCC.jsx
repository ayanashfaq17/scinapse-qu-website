/**
 * `/uscc`. Dates in USCCPage/TimelineSection.jsx, FAQ in FAQSection.jsx.
 */
import AboutSection from "../components/USCCPage/AboutSection";
import FAQSection from "../components/USCCPage/FAQSection";
import TimelineSection from "../components/USCCPage/TimelineSection";

export default function USCC() {
  return (
    <div className="bg-zinc-950 text-brand-white">
      <AboutSection />
      <TimelineSection />
      <FAQSection />
    </div>
  );
}
