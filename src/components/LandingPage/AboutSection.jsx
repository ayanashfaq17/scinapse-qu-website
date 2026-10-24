/**
 * Homepage about blurb + gallery preview strip (uses galleryEvents data).
 */
import { useRef } from "react";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import { Link } from "react-router-dom"; // Optional for CTA
import RippleButton from "../UI/RippleButton";
import { events as galleryEvents } from "../../data/galleryEvents";

const AboutSection = () => {
  const galleryRef = useRef(null);

  const usccEvent =
    galleryEvents.find((event) =>
      event.title.includes("Undergraduate Science Case Competition"),
    ) || galleryEvents[1];

  const usccImages = usccEvent?.images || [];

  return (
    <motion.section
      variants={slideUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-zinc-950 text-brand-white -mt-px"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-4 py-16">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="hidden md:block text-brand-white  text-4xl font-bold">
            Undergraduate Science Case Competition 2026
          </h2>
          <h2 className="md:hidden text-brand-white text-4xl font-bold">
            USCC 2026
          </h2>
        </div>

        {/* Text + Video in two columns on desktop */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          {/* Left: Text + CTAs */}
          <div className="max-w-xl">
            <p className="font-sans text-sm sm:text-base md:text-lg text-brand-white/80 mb-12 md:mb-6 text-justify md:text-left">
              SciNapse Queen’s leads Queen’s University’s participation in the
              Undergraduate Science Case Competition (USCC), an Ontario-wide
              initiative where teams of 2 to 4 students design interdisciplinary
              research proposals.
              <br />
              <br />
              SciNapse coordinates Queen’s Round 1 internal review by faculty
              members and doctoral researchers, supports participants through
              year-round programming, and advances top teams to the provincial
              finals in Ottawa.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-normal">
              <RippleButton href="/uscc" variant="primary">
                Learn More
              </RippleButton>

              <RippleButton
                href="https://scinapsescience.com/"
                variant="outlineLight"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official USCC Website
              </RippleButton>
            </div>
          </div>

          {/* Right: Video */}
          <div className="w-full">
            <div className="relative w-full pt-[56.25%] rounded-2xl border border-white/10 shadow-lg overflow-hidden hover:shadow-xl transition">
              <iframe
                src="https://www.youtube.com/embed/PRq35XYDBKE?start=2"
                title="USCC Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Horizontal highlight strip with parallax images */}
        <div className="mt-12 overflow-x-auto pb-4">
          <div className="flex gap-4 sm:gap-6 min-w-max">
            <motion.div className="relative w-64 h-40 sm:w-72 sm:h-44 rounded-2xl overflow-hidden border border-white/15 bg-zinc-900/70 flex-shrink-0">
              <img
                src="/landing/uscc_images/collaboration.png"
                alt="USCC participants collaborating"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-sm font-semibold">
                Collaborative research teams
              </div>
            </motion.div>

            <motion.div className="relative w-64 h-40 sm:w-72 sm:h-44 rounded-2xl overflow-hidden border border-white/15 bg-zinc-900/70 flex-shrink-0">
              <img
                src="/landing/uscc_images/uottawa.png"
                alt="Picture of uOttawa, destination of final round"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-sm font-semibold">
                Provincial presentations & finals
              </div>
            </motion.div>

            <motion.div className="relative w-64 h-40 sm:w-72 sm:h-44 rounded-2xl overflow-hidden border border-white/15 bg-zinc-900/70 flex-shrink-0">
              <img
                src="landing/uscc_images/feedback.png"
                alt="Faculty member giving participant feedback"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-sm font-semibold">
                Faculty & mentor feedback
              </div>
            </motion.div>

            <motion.div className="relative w-64 h-40 sm:w-72 sm:h-44 rounded-2xl overflow-hidden border border-white/15 bg-zinc-900/70 flex-shrink-0">
              <img
                src="landing/uscc_images/communication.jpg"
                alt="Join the USCC to build your communication & presentation skills"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-sm font-semibold">
                Communication & presentation skills
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default AboutSection;
