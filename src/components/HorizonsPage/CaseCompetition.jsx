/**
 * STEM Horizons case-competition copy and timeline (hardcoded in this file).
 */
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Lightbulb,
  ClipboardList,
  CalendarClock,
  Award,
} from "lucide-react";
import { slideUpVariant } from "../../utils/motionVariants";

export default function CaseCompetition() {
  return (
    <section className="bg-zinc-950 text-brand-white">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 lg:px-8 py-12"
      >
        {/* Heading + intro */}
        <div className="text-center mb-10">
          <h2 className="text-brand-white text-4xl font-bold">
            STEM Horizons Case Competition
          </h2>
          <p className="mt-3 text-sm text-justify md:text-center textmd:text-base text-brand-white/80 max-w-3xl mx-auto">
            Teams of 2–4 students tackle an interdisciplinary case spanning
            space, physics, engineering, and medicine—developing a
            research-style abstract and poster with opportunities for QSURJ
            publication, prizes, and recognition.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Timeline */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-cyanBlue mb-6 text-center md:text-left">
              Timeline
            </p>
            <div className="flex flex-col md:flex-row md:items-stretch md:gap-4">
              {timelineSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="flex flex-col md:flex-row md:flex-1 items-center md:items-stretch mb-4 md:mb-0"
                >
                  <TimelineCard {...step} />
                  {idx !== timelineSteps.length - 1 && (
                    <>
                      {/* Arrow for desktop */}
                      <div className="hidden md:flex items-center justify-center mx-2">
                        <span className="text-brand-white/70 text-2xl">→</span>
                      </div>
                      {/* Arrow for mobile */}
                      <div className="md:hidden flex items-center justify-center my-1">
                        <span className="text-brand-white/60 text-xl">↓</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Competition breakdown */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-cyanBlue mb-6 text-center md:text-left">
              Competition Breakdown
            </p>
            <div className="space-y-6">
              {breakdownItems.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 text-sm md:text-base text-brand-white/85"
                >
                  <div className="mt-0.5 h-6 w-6 flex items-center justify-center">
                    <item.icon
                      className="h-5 w-5 text-brand-cyanBlue"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-white">
                      {item.label}
                    </p>
                    <p className="text-brand-white/80">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const timelineSteps = [
  {
    title: "Sign up & tickets",
    highlight: "By Feb 26, 2026",
    description:
      "Register your team (2–4 students) and secure tickets. The first 10–15 teams are accepted on a first-come, first-served basis.",
  },
  {
    title: "Case prompt released",
    highlight: "1 week to prepare",
    description:
      "Teams receive the case prompt in advance and have one week to develop their approach, abstract, and poster concept.",
  },
  {
    title: "Abstract submission",
    highlight: "March 5, 2026",
    description:
      "Submit only your abstract by the deadline. You can continue polishing your poster up until the conference.",
  },
  {
    title: "Conference & presentations",
    highlight: "March 7, 2026",
    description:
      "Attend the conference, hear from speakers, and deliver a 5-minute poster presentation to the judging panel.",
  },
];

function TimelineCard({ title, highlight, description }) {
  return (
    <div className="flex-1 bg-brand-black/80 border border-brand-white/25 rounded-2xl p-4 md:p-5 shadow-md shadow-black/30 min-w-[230px]">
      <p className="text-xs uppercase tracking-wide text-brand-white/60 mb-1">
        {title}
      </p>
      <p className="text-sm md:text-base font-semibold text-brand-cyanBlue mb-2">
        {highlight}
      </p>
      <p className="text-xs md:text-sm text-brand-white/80">{description}</p>
    </div>
  );
}

const breakdownItems = [
  {
    label: "Approach",
    icon: Lightbulb,
    text: "Choose either a physics/engineering/technology-based approach or a medicine/healthcare-based approach.",
  },
  {
    label: "Deliverables",
    icon: ClipboardList,
    text: "A virtual poster presentation (template provided) and a research-style abstract built around your solution.",
  },
  {
    label: "Abstract deadline",
    icon: CalendarClock,
    text: "Abstracts are due March 5, 2026. Only the abstract is submitted; teams can keep editing their poster until conference day.",
  },
  {
    label: "Judging",
    icon: ClipboardList,
    text: "Judges score all teams using a standard rubric similar to USCC, approved by SciNapse and QALC.",
  },
  {
    label: "Awards",
    icon: Award,
    text: "The top 3 teams receive QSURJ abstract publication with a DOI; certificates are awarded to all teams that participate.",
  },
];
