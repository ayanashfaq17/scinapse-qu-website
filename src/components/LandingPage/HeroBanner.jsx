/**
 * Homepage hero. Primary CTAs currently point at /stem-horizons and /uscc.
 */
import RippleButton from "../UI/RippleButton";
import { motion } from "framer-motion";
import FluidText from "../CoreWeb/FluidText";
import { slideUpVariant } from "../../utils/motionVariants";

export default function HeroBanner() {
  return (
    <>
      {/* Hero Banner */}
      <section className="min-h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] bg-brand-black text-brand-white relative">
        <img
          src="/assets/hero_banner.jpg"
          alt="Hero Banner - SciNapse affiliated professor giving a presentation to students"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          loading="eager"
        />

        <div className="relative z-10 flex flex-col justify-center grow px-6 py-16 md:px-16 lg:px-32 space-y-8 h-full">
          <div className="max-w-xl text-left space-y-6 md:bg-white/10 md:backdrop-blur-md md:rounded-2xl md:border md:border-white/20 md:shadow-xl p-8">
            {/* Desktop: FluidText */}
            <div className="hidden md:block">
              <FluidText
                text="We prepare undergraduates to lead through research and innovation."
                breakAfterWords={["prepare", "to", "research"]}
              />
            </div>
            {/* Mobile: Static heading */}
            <h1 className="block md:hidden text-2xl font-bold text-center leading-tight">
              We prepare undergraduate students to lead through research and
              innovation.
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <RippleButton href="/stem-horizons" variant="primary">
                Get Involved
              </RippleButton>

              <RippleButton href="/uscc" variant="outlineLight">
                USCC
              </RippleButton>
            </div>
          </div>

          <p className="rounded-2xl mt-6 bg-black/40 backdrop-blur-sm p-6 text-sm sm:text-base md:text-lg leading-relaxed w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl border border-white/10 shadow-lg">
            SciNapse is a non-profit led by students from universities across
            Ontario. We create opportunities for undergraduates to explore
            science, sharpen their skills, and stand out. Our core initiative is
            the national Undergraduate Science Case Competition (USCC), hosted
            annually at the University of Ottawa in partnership with uOttawa's
            Faculty of Science and Faculty of Medicine.
          </p>
        </div>
      </section>

      {/* Other Chapters Section temporarily removed for darker landing theme */}
    </>
  );
}
