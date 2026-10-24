/**
 * `/links`. Hiring, newsletter stub, USCC card, and resource URLs.
 * Newsletter does not persist emails. Hiring open/closed is toggled in HiringCard.jsx.
 */
import HiringCard from "../components/LinksPage/HiringCard";
import NewsletterCard from "../components/LinksPage/NewsletterCard";
import USCCCard from "../components/LinksPage/USCCCard";
import ResourcesSection from "../components/LinksPage/ResourcesSection";
import { motion } from "framer-motion";
import { slideUpVariant } from "../utils/motionVariants";

export default function Links() {
  return (
    <div className="min-h-screen bg-brand-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Subtitle */}
          <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
            Connect & Engage
          </p>
          <h1 className="text-4xl font-extrabold text-brand-black mb-4">
            Links, Resources & Opportunities
          </h1>
          <p className="text-lg text-gray-600">
            Explore our key resources and opportunities to get involved with
            SciNapse.
          </p>
        </motion.div>
        {/* Three Main Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <HiringCard />
          <NewsletterCard />
          <USCCCard />
        </div>

        {/* Resources Section */}
        <ResourcesSection />
      </div>
    </div>
  );
}
