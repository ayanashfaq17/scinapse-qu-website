/**
 * STEM Horizons day-of schedule. Edit `scheduleItems` (`time`, `title`, `description`, `type`).
 */
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

const scheduleItems = [
  {
    time: "9:45 AM",
    title: "Doors open & check-in",
    description: "Arrive, grab your badge, and get settled in your room.",
    type: "logistics",
  },
  {
    time: "10:00 AM",
    title: "Welcome from the team",
    description: "Opening remarks, overview of the day, and housekeeping.",
    type: "plenary",
  },
  {
    time: "10:15 AM",
    title: "Keynote 1",
    description: "Keynote talk 1.",
    type: "keynote",
  },
  {
    time: "10:45 AM",
    title: "Keynote 2",
    description: "Keynote talk 2.",
    type: "keynote",
  },
  {
    time: "11:15 AM",
    title: "Break",
    description: "Stretch, grab water, and chat with other participants.",
    type: "break",
  },
  {
    time: "11:25 AM",
    title: "Keynote 3",
    description: "Keynote talk 3.",
    type: "keynote",
  },
  {
    time: "11:55 AM",
    title: "Keynote 4",
    description: "Keynote talk 4.",
    type: "keynote",
  },
  {
    time: "12:30 PM",
    title: "Lunch & networking",
    description:
      "Lunch served. Use this time to meet speakers, judges, and other teams.",
    type: "meal",
  },
  {
    time: "1:30 PM",
    title: "Competition briefing",
    description:
      "Instructions for competition presentations and introduction of judges.",
    type: "competition",
  },
  {
    time: "1:45 PM",
    title: "Set up & start presentations",
    description: "Teams set up their posters and presentations begin.",
    type: "competition",
  },
  {
    time: "3:00 PM",
    title: "End of presentations",
    description: "Presentations wrap up. Judges move to deliberation.",
    type: "competition",
  },
  {
    time: "3:30 PM",
    title: "Judges review",
    description:
      "Closed-door judging session. Participants can relax or network.",
    type: "judging",
  },
  {
    time: "4:00 PM",
    title: "Awards & closing remarks",
    description: "Winners announced, final reflections, and next steps.",
    type: "plenary",
  },
];

export default function ConferenceSchedule() {
  return (
    <section className="bg-zinc-950 text-brand-white" id="conference-schedule">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 lg:px-8 py-12"
      >
        {/* Section heading */}
        <div className="text-center mb-8">
          <h2 className="text-brand-white text-4xl font-bold">
            Conference Schedule
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between text-xs md:text-sm text-brand-white/70 mb-2">
            <span className="font-semibold text-brand-cyanBlue">Time</span>
            <span className="font-semibold">Session</span>
          </div>
          <div className="border border-brand-cyanBlue/50 bg-brand-black/80 rounded-lg">
            {scheduleItems.map((item, idx) => (
              <div
                key={item.time + item.title}
                className={`flex flex-row gap-4 sm:gap-6 px-4 sm:px-5 py-3 md:py-3.5 text-sm md:text-base ${
                  idx !== scheduleItems.length - 1
                    ? "border-b border-brand-white/10"
                    : ""
                }`}
              >
                <div className="w-20 sm:w-24 flex items-start">
                  <span className="font-mono text-xs md:text-sm text-brand-cyanBlue">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-brand-white text-sm md:text-base">
                    {item.title}
                    {item.type === "keynote" && (
                      <span className="ml-1 text-[11px] uppercase tracking-wide text-brand-white/60">
                        • Keynote
                      </span>
                    )}
                    {item.type === "competition" && (
                      <span className="ml-1 text-[11px] uppercase tracking-wide text-brand-white/60">
                        • Competition
                      </span>
                    )}
                  </p>
                  <p className="mt-0.5 text-xs md:text-sm text-brand-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <p className="mt-3 text-[11px] md:text-xs text-brand-white/70">
            
          </p> */}
        </div>
      </motion.div>
    </section>
  );
}
