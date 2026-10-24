/**
 * `/` landing page.
 * Upcoming events: LandingPage/EventSection.jsx
 * TestimonialSection exists but is not mounted here.
 */
import HeroBanner from "../components/LandingPage/HeroBanner";
import EventSection from "../components/LandingPage/EventSection";
import AboutSection from "../components/LandingPage/AboutSection";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-brand-white">
      <HeroBanner />
      <EventSection />
      <AboutSection />
    </div>
  );
}
