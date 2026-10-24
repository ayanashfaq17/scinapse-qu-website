/**
 * `/stem-horizons`. Speakers, schedule, and case copy live in HorizonsPage/*.
 */
import HeroBanner from "../components/HorizonsPage/HeroBanner";
import CaseCompetition from "../components/HorizonsPage/CaseCompetition";
import ConferenceSchedule from "../components/HorizonsPage/ConferenceSchedule";
import PartnerSection from "../components/HorizonsPage/PartnerSection";
import SpeakerSection from "../components/HorizonsPage/SpeakerSection";

export default function HorizonsPage() {
  return (
    <div className="bg-brand-black">
      <HeroBanner />
      <SpeakerSection />
      <CaseCompetition />
      <ConferenceSchedule />
      <PartnerSection />
    </div>
  );
}
