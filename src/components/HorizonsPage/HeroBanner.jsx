/**
 * STEM Horizons hero. Partner/ticket links live here (currently Linktree for QALC).
 */
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import RippleButton from "../UI/RippleButton";
import { Rocket, Users, Trophy } from "lucide-react";
import FluidText from "../CoreWeb/FluidText";
import { ScrollSmoother } from "gsap/all";

export default function HeroBanner() {
  return (
    <section className="bg-zinc-950 text-brand-textMutedDark">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-[calc(100vh-72px)] max-w-8xl mx-auto flex flex-col-reverse md:flex-row items-stretch px-6 lg:px-8"
      >
        {/* Image side */}
        <div className="w-full md:w-1/2 flex-shrink-0 flex items-stretch md:mb-0">
          <div className="relative w-full overflow-hidden shadow-lg">
            <img
              src="/horizons/astronaut.png"
              alt="Astronaut representing STEM Horizons: Space & Medicine"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content side */}
        <div className="w-full md:w-1/2 md:pl-10 flex items-center mb-8 md:mb-0">
          <div className="space-y-3 sm:space-y-4 max-w-xl mx-auto md:mx-0">
            <div className="flex justify-center md:justify-start">
              <a
                href="https://linktr.ee/qalc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/horizons/organized-by.png"
                  alt="Organized by SciNapse Queen's and Queen's Astro-Lens Club"
                  className="h-16 w-auto sm:h-26"
                />
              </a>
            </div>
            <p className="text-[11px] sm:text-xs uppercase text-brand-cyanBlue text-center md:text-left">
              Event concluded on March 7, 2026 • Queen&apos;s University
            </p>

            <div className="hidden md:block">
              <FluidText text="STEM Horizons: Space & Medicine" />
            </div>
            <h1 className="md:hidden text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left">
              STEM Horizons:
              <span className="ml-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left">
                Space &amp; Medicine
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-brand-white/80 text-justify md:text-left">
              Thank you for joining us for a conference dedicated to exploring
              the interdisciplinary intersections of STEM through space and
              astronomy, bringing together expert speakers from engineering,
              physics, and medicine alongside a competitive case competition
              with opportunities for an abstract publication and cash prizes.
            </p>

            <ul className="space-y-1.5 text-xs sm:text-sm md:text-base text-brand-white">
              <li className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Rocket className="w-4 h-4 text-brand-primary" />
                <span>
                  <span className="font-semibold">Case competition:</span>{" "}
                  Poster Presentation
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Users className="w-4 h-4 text-brand-primary" />
                <span>
                  <span className="font-semibold">Networking:</span> Engineers,
                  physicists, clinicians
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                <Trophy className="w-4 h-4 text-brand-primary" />
                <span>
                  <span className="font-semibold">Prizes:</span> QSURJ abstract
                  publication &amp; cash
                </span>
              </li>
            </ul>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-3 pt-3 justify-center md:justify-start">
                <RippleButton
                  size="md"
                  variant="disabled"
                  onClick={() => {
                    const target = document.getElementById(
                      "conference-schedule",
                    );
                    if (!target) return;

                    const smoother = ScrollSmoother.get();
                    if (smoother) {
                      smoother.scrollTo(target, true);
                    } else {
                      const rect = target.getBoundingClientRect();
                      const offset = window.pageYOffset + rect.top - 80;
                      window.scrollTo({ top: offset, behavior: "smooth" });
                    }
                  }}
                >
                  Get Tickets
                </RippleButton>
                <RippleButton
                  size="md"
                  variant="outlineLight"
                  onClick={() => {
                    const target = document.getElementById(
                      "conference-schedule",
                    );
                    if (!target) return;

                    const smoother = ScrollSmoother.get();
                    if (smoother) {
                      smoother.scrollTo(target, true);
                    } else {
                      const rect = target.getBoundingClientRect();
                      const offset = window.pageYOffset + rect.top - 80;
                      window.scrollTo({ top: offset, behavior: "smooth" });
                    }
                  }}
                >
                  Learn more
                </RippleButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
