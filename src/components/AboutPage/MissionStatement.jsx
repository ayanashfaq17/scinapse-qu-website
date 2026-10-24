/**
 * About-page mission copy. Stats next to this section come from src/data/statData.js.
 */
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import RippleButton from "../UI/RippleButton";

const MissionStatement = () => {
  return (
    <motion.section
      variants={slideUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image / Graphic */}
        <div className="w-full">
          <div className="relative w-full pt-[75%] rounded-lg  overflow-hidden hover:scale-95 hover:rotate-3 transition">
            <img
              src="/about/ideas.svg"
              alt="Man looking at a light bulb"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div>
          <h2 className="text-brand-black font-sans text-4xl font-bold mb-6 leading-tight">
            “Science is about many things. It’s about knowledge. It’s about
            perseverance. But most importantly, science is about ideas.”
          </h2>

          <p className="font-sans text-lg text-gray-800 mb-8 max-w-prose">
            SciNapse Queen’s empowers undergraduate students to bring their
            research ideas to life. Through workshops, mentorship, and
            Ontario-wide competitions, we foster an environment where curiosity
            meets collaboration. We believe that innovation starts when students
            are given the platform to explore, experiment, and inspire.
          </p>

          <RippleButton href="/contact" size="lg" variant="dark">
            Get Involved
          </RippleButton>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionStatement;
