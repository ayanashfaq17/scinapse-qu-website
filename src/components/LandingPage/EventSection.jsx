/**
 * Homepage “Upcoming Events”. Edit the `events` array below.
 * Images: public/landing/event_images/. `sortDate` controls display order.
 */
import EventCard from "./EventCard";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

// This code defines an EventsSection component that displays a list of events using the EventCard component.
// This ‘EventCard’ component should accept the following props: date, day, monthYear, title, location, description, imageUrl, link

const events = [
  {
    day: "7",
    weekday: "",
    monthYear: "MAR 2026",
    title: "STEM Horizons: Space & Medicine",
    location: "Queen's University",
    fullDetails:
      "Join us for a conference dedicated to exploring the interdisciplinary intersections of STEM through space and astronomy, bringing together expert speakers from engineering, physics, and medicine alongside a competitive case competition with opportunities for an abstract publication and cash prizes.",
    imageUrl: "/landing/event_images/stem-horizons.jpg",
    sortDate: new Date("2026-03-07"),
    link: "/stem-horizons",
  },
  {
    day: "20",
    weekday: "Mon",
    monthYear: "MAR 2026",
    title: "ROUND 2: The Undergraduate Science Case Competition (USCC)",
    location: "University of Ottawa",
    fullDetails:
      "The Undergraduate Science Case Competition (USCC) is a student-led research competition organized to help undergraduates gain early experience within the STEM research field. It’s structured into 2 rounds, involving a written research proposal and a poster presentation in Ottawa. The goal is to foster curiosity and offer mentorship, feedback, and experience similar to professional academic conferences.",
    imageUrl: "/landing/event_images/uscc.jpg",
    sortDate: new Date("2026-03-20"),
    link: "/uscc",
  },
];

const EventsSection = () => {
  return (
    <section className="bg-zinc-950 text-brand-white">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 md:px-4 pt-16 pb-8"
        id="events"
      >
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-brand-white text-4xl font-bold">
            Upcoming Events
          </h2>
        </div>

        {/* Event Rows */}
        <div className="flex flex-col gap-4">
          {[...events]
            .sort((a, b) => a.sortDate - b.sortDate)
            .map((event, idx) => (
              <EventCard key={idx} {...event} />
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventsSection;
