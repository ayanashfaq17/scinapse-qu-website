/**
 * Homepage testimonials. Not currently rendered from Home.jsx.
 * Photos: public/landing/testimonial_images/. Edit the `testimonials` array.
 */
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";

const testimonials = [
  {
    name: "Darren Jason Watkins Jr. (aka IShowSpeed)",
    role: "Content Creator",
    affiliation: "YouTube / Twitch",
    quote:
      "SciNapse gave me the opportunity to explore AI in medicine in a way that lectures never could. It’s been a game-changer for my career path.",
    imageUrl: "/landing/testimonial_images/darren.jpg",
  },
  {
    name: "Donald Glover",
    role: "Artist & Creator",
    affiliation: "FX / Childish Gambino",
    quote:
      "The USCC was the most exciting and intense academic event I’ve attended. Our team walked away more connected and inspired.",
    imageUrl: "/landing/testimonial_images/donald.jpg",
  },
  {
    name: "Timothée Chalamet",
    role: "Actor",
    affiliation: "Dune",
    quote:
      "I never thought I’d be this involved in undergrad research. SciNapse helped me find the confidence and the community to grow.",
    imageUrl: "/landing/testimonial_images/timothee.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <motion.section
      variants={slideUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <div className="mb-10">
        <p className="text-brand-teal text-sm uppercase tracking-widest mb-2">
          WORDS FROM OUR COMMUNITY
        </p>
        <h2 className="text-brand-black font-sans text-4xl font-bold mt-2 mb-4">
          What Our Members Say
        </h2>
        <p className="font-sans text-lg max-w-2xl text-gray-800">
          Discover how SciNapse shaped the journeys of our students and alumni —
          from presenting at research showcases and organizing campus-wide
          events, to finding mentorship, building lifelong skills, and unlocking
          new academic and career opportunities.
          <strong>
            These experiences weren’t just memorable — they were transformative.
          </strong>
        </p>
      </div>

      <div className="flex justify-center sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
