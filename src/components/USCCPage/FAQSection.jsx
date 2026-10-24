/**
 * USCC FAQ. Edit the `faqs` array below.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

const faqs = [
  {
    question: "Who judges the competition?",
    answer:
      "Faculty members, researchers, and graduate students from relevant universities, hospitals, and research institutes.",
  },
  {
    question: "What is the competition topic and challenge like?",
    answer:
      "The topic changes annually and does not require prior expertise. All participants have equal opportunity, with topics spanning diverse scientific and global challenges. Past competition topics: Mycology, Neuroscience, Climate Crisis, Antimicrobial Resistance, Augmented Biology, Cannabis, Hydrofracturing, Zika Virus, The Global Food Crisis & Nutrition, Epilepsy, and Cystic Fibrosis.",
  },
  {
    question: "Who is eligible for the competition?",
    answer:
      "All undergraduate students in North America are eligible. Lower and Upper Divisions are determined by year and coursework and are judged separately. Students from all disciplines may participate, and teams may be audited for eligibility.",
  },
  {
    question:
      "I’ve already participated in the USCC in a previous year, can I participate again this year?",
    answer: "Yes.",
  },
  {
    question: "Is there a competition fee?",
    answer:
      "Yes. One registration fee applies per team of one to four members.",
  },
  {
    question:
      "I’ve never written a research proposal or created a scientific poster before, can I still participate? Do you offer any guidance?",
    answer:
      "Yes. No prior experience is required. Mentorship, information sessions, and Q and A support are provided.",
  },
  {
    question:
      "How are Round 1 submissions scored to select the finalist teams?",
    answer:
      "The top performing teams overall are selected, typically 10 to 25 percent, depending on participation. Divisions are judged separately.",
  },
  {
    question: "What happens to our submissions?",
    answer:
      "Submissions remain the intellectual property of participants. Permission is required for any publication use.",
  },
  {
    question: "What is the discord channel used for?",
    answer:
      "It is used for announcements, updates, general questions, and partner matching.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Refunds are available before the registration deadline. Later requests are considered only in exceptional circumstances.",
  },
];

const ChevronIcon = ({ open }) => (
  <svg
    className={`w-5 h-5 inline-block transition-transform duration-300 ${open ? "rotate-180 text-brand-cyanBlue" : "text-gray-400"}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="bg-zinc-950 text-brand-white">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-8 md:px-4 py-16"
      >
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-brand-white text-4xl font-bold">
            Frequently Asked
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-brand-white rounded-2xl shadow-md overflow-hidden transition-all bg-brand-black hover:bg-brand-black/90"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-brand-white focus:outline-none"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 break-words text-left">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 flex items-center">
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>
                <div
                  className="transition-all duration-300 ease-in-out px-6"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    paddingBottom: isOpen ? "1rem" : "0",
                  }}
                >
                  <div className="text-gray-300 text-base">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
