/**
 * STEM Horizons partner block (QALC). Update hrefs and public/horizons/qalc.png as needed.
 */
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import RippleButton from "../UI/RippleButton";
import { Instagram, Link2 } from "lucide-react";

export default function PartnerSection() {
  return (
    <section className="bg-zinc-950 text-brand-white">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 lg:px-8 py-12"
      >
        <div className="grid md:grid-cols-[1.1fr_minmax(0,1fr)] gap-8 md:gap-10 items-center">
          {/* Text content */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-cyanBlue mb-2 text-center md:text-left">
              Meet our Partner!
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-3 text-center md:text-left">
              Queen&apos;s Astro-Lens Club (QALC)
            </h2>
            <p className="text-sm md:text-base text-brand-white/80 text-justify md:text-left leading-relaxed">
              QALC is dedicated to promoting interest in astronomy, space, and
              physics through educational, hands-on, and social activities. The
              club provides access to telescopes and observational equipment,
              along with workshops designed to support students at all levels.
              Through outreach, collaboration, and community-building events,
              QALC aims to inspire curiosity, develop practical skills, and
              foster a safe, inclusive, and supportive community for science
              enthusiasts.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-normal">
              <RippleButton
                href="https://linktr.ee/qalc"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="primary"
              >
                <Link2 className="w-4 h-4 mr-1.5 hidden md:block" />
                Visit QALC Linktree
              </RippleButton>
              <RippleButton
                href="https://www.instagram.com/queensastrolensclub/"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="outlineLight"
              >
                <Instagram className="w-4 h-4 mr-1.5 hidden md:block" />
                Follow on Instagram
              </RippleButton>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs md:max-w-sm border border-brand-cyanBlue/60 bg-brand-black/80">
              <img
                src="/horizons/qalc.png"
                alt="Queen's Astro-Lens Club (QALC)"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
