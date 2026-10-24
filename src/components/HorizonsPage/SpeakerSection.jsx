/**
 * STEM Horizons speakers. Edit `speakers`; photos in public/horizons/speakers/.
 */
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { slideUpVariant } from "../../utils/motionVariants";
import SpeakerCard from "./SpeakerCard";

const speakers = [
  {
    name: "Dr. Matthew Strickland",
    title: "Medical Oncologist, MGB Cancer Institute & Harvard Medical School",
    image: "/horizons/speakers/MatthewStrickland.png",
    bio: (
      <>
        Dr. Strickland is originally from Edmonton, Alberta and is a{" "}
        <span className="font-semibold text-brand-white">
          Medical Oncologist
        </span>{" "}
        at the{" "}
        <span className="font-semibold text-brand-white">
          Massachusetts General Brigham Cancer Institute
        </span>{" "}
        and{" "}
        <span className="font-semibold text-brand-white">
          Instructor in Medicine at Harvard Medical School
        </span>
        . He serves as{" "}
        <span className="font-semibold text-brand-white">
          Co-Clinical Director
        </span>{" "}
        at the{" "}
        <span className="font-semibold text-brand-white">
          Tucker Gosnell Center for Gastrointestinal Cancers
        </span>
        . His clinical focus is treating patients with{" "}
        <span className="font-semibold text-brand-white">
          gastrointestinal cancers
        </span>
        —particularly of the{" "}
        <span className="font-semibold text-brand-white">esophagus</span> and{" "}
        <span className="font-semibold text-brand-white">stomach</span>. His
        research efforts are focused on{" "}
        <span className="font-semibold text-brand-white">clinical trials</span>{" "}
        and{" "}
        <span className="font-semibold text-brand-white">
          translational research
        </span>{" "}
        developing novel{" "}
        <span className="font-semibold text-brand-white">therapeutics</span> and{" "}
        <span className="font-semibold text-brand-white">biomarkers</span> to
        improve outcomes for patients with cancer. He also serves as{" "}
        <span className="font-semibold text-brand-white">
          Director of Translational Research at the Massachusetts General
          Hospital Center for Space Medicine
        </span>{" "}
        and is interested in the unique role{" "}
        <span className="font-semibold text-brand-white">
          space and microgravity
        </span>{" "}
        can play in dissecting cancer biology and accelerating cancer
        therapeutic development.
      </>
    ),
  },
  {
    name: "Dr. Jonathan Mcleod",
    title:
      "Postdoctoral Fellow, Nutrition & Metabolism Research Group, Queen’s University",
    image: "/horizons/speakers/JonathanMcleod.jpg",
    bio: (
      <>
        Dr. Jonathan McLeod is a{" "}
        <span className="font-semibold text-brand-white">
          postdoctoral research fellow
        </span>{" "}
        in the{" "}
        <span className="font-semibold text-brand-white">
          Nutrition and Metabolism Research Group
        </span>{" "}
        at{" "}
        <span className="font-semibold text-brand-white">
          Queen’s University
        </span>{" "}
        (Kingston, Ontario, Canada). His research leverages{" "}
        <span className="font-semibold text-brand-white">
          stable isotope tracers
        </span>{" "}
        and{" "}
        <span className="font-semibold text-brand-white">
          mass spectrometry
        </span>{" "}
        to investigate{" "}
        <span className="font-semibold text-brand-white">
          human skeletal muscle protein metabolism
        </span>{" "}
        under clinical scenarios that result in{" "}
        <span className="font-semibold text-brand-white">muscle atrophy</span>,
        such as limb disuse and bed rest. Dr. McLeod’s work aims to improve our
        understanding of the{" "}
        <span className="font-semibold text-brand-white">
          metabolic changes
        </span>{" "}
        occurring during periods of inactivity and their implications for{" "}
        <span className="font-semibold text-brand-white">
          health and recovery
        </span>
        .
      </>
    ),
  },
  {
    name: "Dr. Andrew Kerr",
    title:
      "Chief Medical Physicist, Kingston Health Sciences Centre; Associate Professor, Queen’s University",
    image: "/horizons/speakers/AndrewKerr.png",
    bio: (
      <>
        Dr. Andrew (Andy) Kerr is the{" "}
        <span className="font-semibold text-brand-white">
          Chief Medical Physicist
        </span>{" "}
        at the{" "}
        <span className="font-semibold text-brand-white">
          Kingston Health Sciences Centre (KHSC)
        </span>{" "}
        and an{" "}
        <span className="font-semibold text-brand-white">
          Associate Professor
        </span>{" "}
        in the departments of{" "}
        <span className="font-semibold text-brand-white">Oncology</span> and{" "}
        <span className="font-semibold text-brand-white">Physics</span> at{" "}
        <span className="font-semibold text-brand-white">
          Queen’s University
        </span>
        . Andy’s path to becoming a{" "}
        <span className="font-semibold text-brand-white">
          Medical Physicist
        </span>{" "}
        began with an undergraduate degree in{" "}
        <span className="font-semibold text-brand-white">
          Engineering Physics
        </span>{" "}
        from Queen’s University, followed by an{" "}
        <span className="font-semibold text-brand-white">MSc</span> and{" "}
        <span className="font-semibold text-brand-white">PhD</span> in the
        Department of{" "}
        <span className="font-semibold text-brand-white">
          Medical Biophysics
        </span>{" "}
        at the{" "}
        <span className="font-semibold text-brand-white">
          University of Toronto
        </span>{" "}
        and residency training at{" "}
        <span className="font-semibold text-brand-white">KHSC</span>. Medical
        Physics is a branch of{" "}
        <span className="font-semibold text-brand-white">applied physics</span>{" "}
        with specialized training in the{" "}
        <span className="font-semibold text-brand-white">
          medical application of physics
        </span>
        , involving the safe use of many forms of energy for{" "}
        <span className="font-semibold text-brand-white">
          medical diagnosis
        </span>{" "}
        and <span className="font-semibold text-brand-white">therapy</span>.
        Andy will give a brief introduction to the field of Medical Physics,
        describe pathways to becoming a practicing{" "}
        <span className="font-semibold text-brand-white">
          Medical Physicist
        </span>
        , and highlight{" "}
        <span className="font-semibold text-brand-white">
          clinical, research, and development opportunities
        </span>{" "}
        the field has to offer.
      </>
    ),
  },
  {
    name: "Dr. Heidi-Lynn Ploeg",
    title:
      "Professor, Mechanical & Materials Engineering; Chair for Women in Engineering, Queen’s University",
    image: "/horizons/speakers/Heidi-LynnPloeg.jpg",
    bio: (
      <>
        Heidi-Lynn Ploeg,{" "}
        <span className="font-semibold text-brand-white">P.Eng.</span>,{" "}
        <span className="font-semibold text-brand-white">FASME</span>,{" "}
        <span className="font-semibold text-brand-white">FORS</span> is a{" "}
        <span className="font-semibold text-brand-white">Professor</span> in the
        Department of{" "}
        <span className="font-semibold text-brand-white">
          Mechanical and Materials Engineering
        </span>{" "}
        and{" "}
        <span className="font-semibold text-brand-white">
          Chair for Women in Engineering
        </span>
        , Smith Engineering at{" "}
        <span className="font-semibold text-brand-white">
          Queen’s University
        </span>
        , Kingston, ON, Canada. She obtained her{" "}
        <span className="font-semibold text-brand-white">
          PhD in Mechanical Engineering
        </span>{" "}
        at Queen’s University in 2000 and has{" "}
        <span className="font-semibold text-brand-white">
          10 years of experience
        </span>{" "}
        in the{" "}
        <span className="font-semibold text-brand-white">
          orthopaedic implant industry
        </span>
        . Her research mainly focuses on{" "}
        <span className="font-semibold text-brand-white">
          orthopaedic biomechanics
        </span>
        , including the{" "}
        <span className="font-semibold text-brand-white">
          design of medical devices
        </span>
        ,{" "}
        <span className="font-semibold text-brand-white">
          bone modelling and remodelling
        </span>
        ,{" "}
        <span className="font-semibold text-brand-white">
          experimental methods
        </span>
        , and{" "}
        <span className="font-semibold text-brand-white">
          finite element modelling
        </span>
        .
      </>
    ),
  },
];

export default function SpeakerSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleOpen = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const handleClose = () => {
    setSelectedSpeaker(null);
  };

  return (
    <section id="speakers" className="bg-zinc-950 text-brand-white">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 lg:px-8 py-12"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-brand-white text-4xl font-bold">
            Meet Our Speakers
          </h2>
          <p className="mt-3 text-sm text-justify md:text-center textmd:text-base text-brand-white/80 max-w-3xl mx-auto">
            Learn from leaders in oncology, medical physics, biomechanics, and
            metabolism research as they share how space, engineering, and
            medicine intersect in their work.
          </p>
        </div>

        {/* Speakers grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.name}
              name={speaker.name}
              title={speaker.title}
              image={speaker.image}
              onReadMore={() => handleOpen(speaker)}
            />
          ))}
        </div>
      </motion.div>

      {/* Speaker modal (portal to body for reliable overlay) */}
      {selectedSpeaker &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/80"
              onClick={handleClose}
            />
            <div className="relative z-10 max-w-3xl w-full bg-zinc-950 rounded-2xl p-6 shadow-xl shadow-black/50">
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 text-brand-white/60 hover:text-brand-white text-sm"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Image only on md+ */}
                <div className="hidden md:block flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-full max-w-[414px] mb-3 h-[220px] md:h-[260px] flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedSpeaker.image}
                      alt={selectedSpeaker.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-brand-white">
                    {selectedSpeaker.name}
                  </h3>
                  {selectedSpeaker.title && (
                    <p className="mt-1 text-xs 2xl:text-sm font-medium text-brand-cyanBlue">
                      {selectedSpeaker.title}
                    </p>
                  )}
                  <p className="mt-3 text-sm md:text-[13px] 2xl:text-[15px] leading-relaxed text-brand-white/85 text-left [&_strong]:font-semibold">
                    {selectedSpeaker.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
