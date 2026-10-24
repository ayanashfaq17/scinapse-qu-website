/**
 * Site footer: club email, national USCC links, socials.
 * Newsletter form is a stub (does not save emails). Keep mailto in sync with Contact.jsx.
 */
import { FaInstagram, FaLinkedin, FaDiscord, FaFacebook } from "react-icons/fa";
import RippleButton from "../UI/RippleButton";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white py-8 px-2.5 mt-0">
      <div className="max-w-7xl mx-auto overflow-hidden grid grid-cols-1 sm:grid-cols-[1fr_2fr_1.5fr] gap-6">
        {/* COLUMN 1: Footer About Section */}
        <div>
          {/* Logo Above (Phone) */}
          <div className="flex sm:hidden justify-center mb-8">
            <img
              src="/assets/logo.png"
              alt="SciNapse Logo"
              className="h-auto w-60"
            />
          </div>

          {/* About Text Square */}
          <div className="p-1.5 bg-gradient-to-r from-purple-500 to-brand-cyanBlue mb-4 max-w-[95%] sm:max-w-none">
            <div className="bg-brand-black text-brand-black p-4 rounded-md flex flex-col justify-center">
              <div className="bg-black text-white p-4 rounded-md sm:min-h-0 self-start sm:self-stretch sm:-mr-[25%] -mr-[10%] content-center">
                <p className="leading-snug text-lg mb-2 max-w-[100%] sm:max-w-none">
                  {" "}
                  Our mission is to empower Queen's Students to communicate
                  science beyond the lecture halls.{" "}
                </p>
                <p className="leading-snug text-sm mb-1 max-w-[100%] sm:max-w-none">
                  We offer hands-on research experience to undergraduates every
                  year through cross-club events, the USCC, and STEM
                  Horizons{" "}
                </p>
                <p className="leading-snug text-sm max-w-[100%] sm:max-w-none">
                  Our chapter, based at{" "}
                  <strong>Queen’s University in Kingston </strong>, works with
                  national networks to expand science communication across
                  Canada.
                </p>
              </div>
            </div>
          </div>

          {/* Logo beneath */}
          <div className="hidden sm:flex justify-center">
            <img
              src="/assets/logo.png"
              alt="SciNapse Logo"
              className="h-auto w-auto"
            />
          </div>
        </div>

        {/* COLUMN 2: Footer Navigation Section */}
        <div className="sm:pl-14 flex flex-col gap-6 sm:gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <p className="text-sm text-brand-white/60 mb-4">
                Did you miss anything?
              </p>
              <li>
                <a href="/team" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="mailto:scinapse@clubs.queensu.ca?subject=Inquiry%20from%20Website"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-brand-white/20" />

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-4 text-sm">
              <p className="text-sm text-brand-white/60 mb-4">
                Explore our resources
              </p>
              <li>
                <a
                  href="https://scinapsescience.com/about"
                  className="hover:underline"
                >
                  USCC - Scinapse Science
                </a>
              </li>
              <li>
                <a
                  href="https://scinapsescience.com/register/uscc-2020-2021-ht3be-cejga-p5ykc-w4w45-nt6e7"
                  className="hover:underline"
                >
                  USCC - Team Registration
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1ZcS2f30aCVFR0AkIWIk8e19w3OSCb7uD41DSuajMPss/edit?tab=t.0"
                  className="hover:underline"
                >
                  USCC - Information Document
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider (Mobile Only) */}
        <hr className="sm:hidden border-t border-brand-white/20" />

        {/* COLUMN 3: Footer Social Media + Newsletter Section */}
        <div className="sm:pl-14 flex flex-col gap-6 min-h-72">
          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <div className="flex space-x-4 text-xl">
              <p className="text-sm text-brand-white/60 mb-4">
                Plug into our community:{" "}
              </p>
              <a
                href="https://www.instagram.com/scinapsequ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-brand-cyanBlue transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/scinapse-queen-s-university/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-brand-cyanBlue transition" />
              </a>
              <a
                href="https://discord.com/invite/rxreXNFhEa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="hover:text-brand-cyanBlue transition" />
              </a>
              <a
                href="https://www.facebook.com/scinapseuscc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-brand-cyanBlue transition" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-brand-white/20" />

          {/* Newsletter */}
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-brand-white/60 mb-4">
              Get updates on events and opportunities.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                // Stub: no newsletter backend. See NewsletterCard.jsx and docs/CONTENT.md.
                console.log("Submitted email:", email);
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-sm bg-brand-black text-white border border-brand-white/20 w-full sm:w-auto mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-brand-white/60 transition"
              />
              <RippleButton type="submit" size="sm" variant="primary">
                Subscribe
              </RippleButton>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
