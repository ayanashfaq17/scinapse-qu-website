/**
 * `/contact`. Builds a mailto: to scinapse@clubs.queensu.ca.
 * Nothing is stored or sent from the server. Change the address in this file and Footer.jsx.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { slideUpVariant } from "../utils/motionVariants";
import RippleButton from "../components/UI/RippleButton";

const MESSAGE_MAX_LENGTH = 1000;

const INQUIRY_OPTIONS = [
  "General",
  "USCC",
  "STEM Horizons",
  "Sponsorship",
  "Other",
];

export default function Contact() {
  const [selectedInquiry, setSelectedInquiry] = useState("General");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-brand-black text-brand-white">
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-brand-white/10 bg-zinc-950/90 shadow-xl"
        >
          {/* Background accent */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-brand-cyanBlue/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">
            {/* Left: copy + info */}
            <div className="flex flex-col justify-between gap-10">
              <div className="space-y-4 md:space-y-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-cyanBlue">
                  Contact SciNapse Queen&apos;s
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-brand-white">
                  Questions about past or upcoming events,
                  <br />
                  partnerships, or getting involved?
                </h1>
                <p className="text-sm sm:text-base text-brand-white/80 max-w-xl">
                  Reach out about the Undergraduate Science Case Competition,
                  STEM Horizons, collaborations, or anything SciNapse related.
                  Our team will follow up by email.
                </p>
              </div>

              <div className="grid gap-6 text-sm md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-white/70">
                    Location
                  </p>
                  <p className="text-sm text-brand-white/90">
                    Queen&apos;s University
                    <br />
                    Kingston, Ontario
                    <br />
                    Canada
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-white/70">
                    Social
                  </p>
                  <div className="space-y-1 text-sm">
                    <a
                      href="https://www.instagram.com/scinapsequ/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-white/90 underline-offset-4 hover:text-brand-cyanBlue hover:underline"
                    >
                      Instagram
                    </a>
                    <br />
                    <a
                      href="https://www.linkedin.com/company/scinapse-queen-s-university/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-white/90 underline-offset-4 hover:text-brand-cyanBlue hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-white/70">
                    Email
                  </p>
                  <a
                    href="mailto:scinapse@clubs.queensu.ca"
                    className="text-sm text-brand-white/90 underline-offset-4 hover:text-brand-cyanBlue hover:underline break-words"
                  >
                    scinapse@clubs.queensu.ca
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm
              selectedInquiry={selectedInquiry}
              onInquiryChange={setSelectedInquiry}
              message={message}
              onMessageChange={setMessage}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ContactForm({
  selectedInquiry,
  onInquiryChange,
  message,
  onMessageChange,
}) {
  return (
    <div className="w-full max-w-md mx-auto bg-brand-black/90 border border-brand-white/15 rounded-2xl px-5 py-6 sm:px-6 sm:py-7 shadow-lg backdrop-blur">
      <h2 className="text-lg font-semibold text-brand-white">
        Tell us how we can help
      </h2>
      <p className="mt-2 text-xs sm:text-sm text-brand-white/70">
        Share a few details about your question or idea. We&apos;ll respond by
        email.
      </p>

      <form
        className="mt-6 space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const formData = new FormData(form);

          const firstName = formData.get("firstName") || "";
          const lastName = formData.get("lastName") || "";
          const email = formData.get("email") || "";
          const subject = encodeURIComponent(
            `SciNapse Queen's – ${selectedInquiry} inquiry`,
          );

          const bodyLines = [
            "Website contact form submission from scinapsequ.com",
            "",
            "------------------------------",
            "Contact details",
            "------------------------------",
            `Name: ${firstName} ${lastName}`,
            `Email: ${email}`,
            `Type of inquiry: ${selectedInquiry}`,
            "",
            "------------------------------",
            "Message",
            "------------------------------",
            message,
            "",
            "--",
          ];

          const body = encodeURIComponent(
            bodyLines.filter((line) => line !== "").join("\n"),
          );

          window.location.href = `mailto:scinapse@clubs.queensu.ca?subject=${subject}&body=${body}`;
        }}
      >
        {/* Name row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              maxLength={50}
              placeholder="First name"
              className="w-full rounded-full border border-brand-white/30 bg-brand-black/60 px-4 py-2.5 text-sm text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-cyanBlue/70"
            />
          </div>
          <div className="space-y-1.5">
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              maxLength={50}
              placeholder="Last name"
              className="w-full rounded-full border border-brand-white/30 bg-brand-black/60 px-4 py-2.5 text-sm text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-cyanBlue/70"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={100}
            placeholder="Email address"
            className="w-full rounded-full border border-brand-white/30 bg-brand-black/60 px-4 py-2.5 text-sm text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-cyanBlue/70"
          />
        </div>

        {/* Inquiry pills */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-brand-white/70">
            Type of inquiry
          </p>
          <div className="flex flex-wrap gap-2">
            {INQUIRY_OPTIONS.map((option) => {
              const isActive = option === selectedInquiry;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onInquiryChange(option)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    isActive
                      ? "border-brand-cyanBlue bg-brand-cyanBlue text-brand-black"
                      : "border-brand-white/30 bg-brand-black/60 text-brand-white hover:border-brand-cyanBlue/70"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={message}
            onChange={(event) => onMessageChange(event.target.value)}
            maxLength={MESSAGE_MAX_LENGTH}
            placeholder="Tell us a bit about your question or idea..."
            className="w-full rounded-2xl border border-brand-white/30 bg-brand-black/60 px-4 py-3 text-sm text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:ring-2 focus:ring-brand-cyanBlue/70 min-h-[140px] max-h-[260px] resize-y"
          />
          <div className="mt-1 flex justify-end text-[11px] text-brand-white/50">
            {message.length} / {MESSAGE_MAX_LENGTH}
          </div>
        </div>

        <div className="pt-1">
          <RippleButton
            type="submit"
            size="md"
            variant="primary"
            className="w-full justify-center"
          >
            Submit via email
          </RippleButton>
        </div>
      </form>
    </div>
  );
}
