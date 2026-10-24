import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

/**
 * USCC timeline. Change the date constants (ISO UTC) each year.
 * Open / current / completed labels are derived from `now` vs those dates.
 * Registration URLs: national SciNapse site + Queen’s Google Form.
 */
const uscc_registration_end_date = new Date("2025-10-30T23:59:59Z"); // USCC registration end date
const written_round_start_date = new Date("2025-11-01T23:59:59Z"); // Written round start date
const written_round_submission_date = new Date("2025-11-22T23:59:59Z"); // Written round submission date
const presentation_round_start_date = new Date("2026-03-20T23:59:59Z"); // Presentation round start date
const presentation_round_end_date = new Date("2026-03-22T23:59:59Z"); // Presentation round end date

const now = new Date();

// Helper function to format dates nicely
const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

// Helper function to format dates without year
const formatDateNoYear = (date) => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
};

const steps = [
  {
    title: "Team Registration",
    status:
      now > uscc_registration_end_date
        ? "Registration for this year's USCC is closed."
        : `Registration for this year's USCC is now open! (Ends ${formatDate(uscc_registration_end_date)})`,
    desc: (
      <>
        Any undergraduate student interested in STEM research is encouraged to
        apply in teams of 2–4.{" "}
        <strong>
          Register through the{" "}
          <a
            className="text-brand-cyanHue"
            href="https://scinapsescience.com/register/uscc-2020-2021-ht3be-cejga-p5ykc-w4w45-nt6e7"
            target="_blank"
            rel="noopener noreferrer"
          >
            official USCC site
          </a>
        </strong>
        , not through SciNapse Queen's. Registration closes on{" "}
        {formatDateNoYear(uscc_registration_end_date)} @ 11:59 PM EDT with a fee
        of $80 per group (Catering + Hotel Expenses included).
        <p>
          <br />
        </p>
        After registering for USCC as a team OR if you are looking for potential
        team members, please fill in this{" "}
        <a
          className="text-brand-cyanHue"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfUvGPWO3LaxsORkjUR8gKOA62MR-DFbmsEK2OPvucHQkTbSg/viewform"
        >
          form
        </a>{" "}
        to let SciNapse Queen’s know!
      </>
    ),
    // Registration acts like an "open until" phase, so we only track the end.
    endDate: uscc_registration_end_date,
    state: now < uscc_registration_end_date ? "current" : "completed",
  },
  {
    title: "Written Round @ Queen's",
    status:
      now < written_round_start_date
        ? `Written rounds will officially begin on ${formatDate(written_round_start_date)}`
        : now > written_round_submission_date
          ? "Written rounds have ended. Thank you for participating!"
          : `Written round submissions are due on ${formatDate(written_round_submission_date)}`,
    desc: (
      <>
        Come up with a novel research proposal within this year’s topic:{" "}
        <strong>reproductive health</strong>! Conduct a literature search and
        try your best to find any gaps in areas that interest you. With the help
        of your group, you will complete a written research proposal (abstract,
        rationale, methodology, etc.) which will be submitted online. Teams will
        have until {formatDate(written_round_submission_date)} @ 11:59PM EDT to
        complete their proposal. Feel free to reach out to the SciNapse Queen’s
        executive team for any support!
      </>
    ),
    // Written round has a clear start and submission deadline.
    startDate: written_round_start_date,
    endDate: written_round_submission_date,
    state:
      now < written_round_start_date
        ? "upcoming"
        : now <= written_round_submission_date
          ? "current"
          : "completed",
  },
  {
    title: "Presentation Round @ uOttawa",
    status:
      now < presentation_round_start_date
        ? `Presentation rounds will begin on ${formatDate(presentation_round_start_date)} @ The University of Ottawa`
        : now > presentation_round_end_date
          ? "Presentation rounds have closed. Thank you for joining us this year!"
          : `Presentation rounds will finish on ${formatDate(presentation_round_end_date)} @ The University of Ottawa`,
    desc: (
      <>
        The top 10%-15% of teams per university will qualify for Round 2 which
        consists of a scientific poster presentation at the University of Ottawa
        from {formatDate(presentation_round_start_date)} -{" "}
        {formatDate(presentation_round_end_date)}. The weekend will consist of
        poster presentations, workshops, networking, and an award ceremony! The
        top 10 teams will have their abstracts published, and the overall winner
        in each division will have their proposals published in the URNCT
        Journal. If you need more clarification, check out this{" "}
        <a
          className="text-brand-cyanHue"
          target="_blank"
          href="https://docs.google.com/document/d/1ZcS2f30aCVFR0AkIWIk8e19w3OSCb7uD41DSuajMPss/edit?tab=t.0"
        >
          information doc!
        </a>
      </>
    ),
    // Presentation weekend also has a start and end.
    startDate: presentation_round_start_date,
    endDate: presentation_round_end_date,
    state:
      now < presentation_round_start_date
        ? "upcoming"
        : now <= presentation_round_end_date
          ? "current"
          : "completed",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-zinc-950 text-brand-white">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 md:px-4 py-16"
      >
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-brand-white text-4xl font-bold">
            USCC 2025–2026 Timeline
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <ol className="relative ml-3 md:ml-4 border-l border-brand-white/40 space-y-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8">
                {(() => {
                  const hasStart = !!step.startDate;
                  const hasEnd = !!step.endDate;
                  const isBeforeStart = hasStart && now < step.startDate;
                  const hasStarted = hasStart && now >= step.startDate;
                  const hasEnded = hasEnd && now > step.endDate;

                  // Attach these to step for use below via closure-like pattern
                  step._timingMeta = {
                    hasStart,
                    hasEnd,
                    isBeforeStart,
                    hasStarted,
                    hasEnded,
                  };
                })()}
                {/* Timeline node */}
                <span
                  className={`absolute -left-[11px] md:-left-2 flex h-5 w-5 items-center justify-center rounded-full border text-xs font-semibold ${
                    step.state === "completed"
                      ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                      : step.state === "current"
                        ? "border-brand-cyanHue bg-brand-cyanHue/20 text-brand-black"
                        : "border-brand-white/40 bg-zinc-900 text-gray-300"
                  }`}
                >
                  {idx + 1}
                </span>

                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  {/* Date / phase labels */}
                  <div className="mb-3 md:mb-0 md:w-52 space-y-2">
                    {step.startDate &&
                      (() => {
                        const { isBeforeStart } = step._timingMeta || {};
                        const dotClasses = isBeforeStart
                          ? "bg-brand-cyanHue"
                          : "bg-emerald-400";
                        const labelText = isBeforeStart ? "Begins" : "Began";
                        const labelColor = isBeforeStart
                          ? "text-brand-cyanHue"
                          : "text-emerald-300";

                        return (
                          <div className="flex items-start gap-2 text-xs text-gray-300">
                            <span
                              className={`mt-1 h-2 w-2 rounded-full ${dotClasses}`}
                            />
                            <div>
                              <p
                                className={`font-semibold uppercase tracking-wide ${labelColor}`}
                              >
                                {labelText}
                              </p>
                              <p>{formatDate(step.startDate)}</p>
                            </div>
                          </div>
                        );
                      })()}
                    {step.endDate &&
                      (() => {
                        const { hasStarted, hasEnded } = step._timingMeta || {};
                        const dotClasses = !hasStarted
                          ? "border border-brand-white/60"
                          : !hasEnded
                            ? "bg-brand-cyanHue"
                            : "bg-emerald-400";
                        const labelText =
                          idx === 0
                            ? hasEnded
                              ? "Registration closed"
                              : "Registration closes"
                            : hasEnded
                              ? "Ended"
                              : "Ends";
                        const labelColor =
                          !hasStarted || !hasEnded
                            ? "text-gray-400"
                            : "text-emerald-300";

                        return (
                          <div className="flex items-start gap-2 text-xs text-gray-300">
                            <span
                              className={`mt-1 h-2 w-2 rounded-full ${dotClasses}`}
                            />
                            <div>
                              <p
                                className={`font-semibold uppercase tracking-wide ${labelColor}`}
                              >
                                {labelText}
                              </p>
                              <p>{formatDate(step.endDate)}</p>
                            </div>
                          </div>
                        );
                      })()}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-brand-black border border-brand-white/40 rounded-2xl p-6 flex flex-col justify-center shadow-md shadow-black/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg ${
                          step.state === "completed"
                            ? "bg-emerald-500/20 text-emerald-300"
                            : step.state === "current"
                              ? "bg-brand-cyanBlue/20 text-brand-cyanBlue"
                              : "bg-zinc-800 text-zinc-200"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <h3 className="font-bold text-lg md:text-xl text-brand-white font-sans">
                        {step.title}
                      </h3>
                    </div>
                    <div
                      className={`text-sm mb-2 ${
                        step.state === "completed"
                          ? "text-emerald-300 font-semibold"
                          : step.state === "current"
                            ? "text-brand-cyanBlue font-semibold"
                            : "text-gray-300 font-semibold"
                      }`}
                    >
                      {step.status}
                    </div>
                    <p className="text-gray-200 text-sm md:text-base font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
}
