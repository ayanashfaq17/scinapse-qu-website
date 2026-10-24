/**
 * `/team`. Roster in src/data/teamData.js, photos in public/team/YYYY-YYYY/.
 * Update the heading year when the executive year changes.
 */
import TeamCard from "../components/TeamPage/TeamCard";
import { motion } from "framer-motion";
import { slideUpVariant } from "../utils/motionVariants";
import { teamMembers } from "../data/teamData.js";

export default function Team() {
  return (
    <div className="min-h-screen bg-zinc-950 text-brand-white">
      <motion.section
        variants={slideUpVariant}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-white">
            The 2025–2026 Executive Team
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.name + idx} {...member} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
