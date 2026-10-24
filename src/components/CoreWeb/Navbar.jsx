/**
 * Site header. Add routes to the <ul> (and the mobile menu below).
 * Ticket / “happening now” chip is commented out near the desktop CTAs. Uncomment for live events.
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import RippleButton from "../UI/RippleButton";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const navRef = useRef(null);

  // Scroll direction state for navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const hideThreshold = 800; // px

  useEffect(() => {
    const handleScroll = () => {
      // Only hide navbar on desktop (md and up)
      if (window.innerWidth >= 768) {
        const currentScrollY = window.scrollY;
        if (currentScrollY < hideThreshold) {
          setShowNavbar(true);
        } else if (currentScrollY > lastScrollY) {
          setShowNavbar(false); // scrolling down
        } else {
          setShowNavbar(true); // scrolling up
        }
        setLastScrollY(currentScrollY);
      } else {
        // Always show navbar on mobile
        setShowNavbar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen) {
        // Check if click is on the hamburger button
        const hamburgerButton = event.target.closest(
          'button[class*="md:hidden"]',
        );
        if (hamburgerButton) {
          return; // Don't close if clicking the hamburger button
        }

        // Check if click is on the mobile menu
        const mobileMenu = event.target.closest(".md\\:hidden");
        if (!mobileMenu) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      // Add a small delay to prevent immediate closing when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-40 bg-brand-black text-brand-white px-4 md:px-6 py-3 shadow-md transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between md:justify-start items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="SciNapse Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Links - Left justified (desktop only) */}
        <ul className="hidden md:flex gap-10 text-sm font-medium ml-16">
          <li className="relative">
            <Link
              to="/"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              Home
              <span
                className={`
                  absolute left-0 -bottom-1 h-0.5 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/uscc"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/uscc" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              USCC
              <span
                className={`
                  absolute left-0 -bottom-1 h-0.5 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/uscc" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/stem-horizons"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/stem-horizons" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              STEM Horizons 2026
              <span
                className={`
                  absolute left-0 -bottom-1 h-0.5 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/stem-horizons" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/gallery"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/gallery" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              Gallery
              <span
                className={`
                  absolute left-0 -bottom-1 h-0.5 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/gallery" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/team"
              className={`hover:text-brand-cyanBlue transition-colors duration-300 ${currentPath === "/team" ? "text-brand-cyanBlue" : ""} pb-1`}
            >
              Team
              <span
                className={`
                  absolute left-0 -bottom-1 h-0.5 w-full bg-brand-cyanBlue rounded
                  transition-transform duration-300 ease-in-out
                  ${currentPath === "/team" ? "scale-x-100" : "scale-x-0"}
                  origin-left
                  block
                `}
              />
            </Link>
          </li>
        </ul>

        {/* Buttons and Social Media Icons (Desktop Only, Grouped) - Right aligned */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* USE WHEN HIRING/EVENTS ARE HAPPENING -- All Purpose Indicator */}
          {/* <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <a
              href="https://www.bouncelife.com/events/696846047c69da5d5990e8eb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Horizons Tickets on Sale!</span>
            </a>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <RippleButton href="/contact" size="sm" variant="primary">
              Contact
            </RippleButton>
            <RippleButton href="/uscc" size="sm" variant="outlineLight">
              USCC
            </RippleButton>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 text-xl">
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
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-black text-brand-white px-6 pt-6 pb-8 space-y-6 rounded-b-lg shadow-2xl z-40 relative border-b-2 border-brand-cyanBlue/30">
          {/* Bottom indicator line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-brand-cyanBlue rounded-full"></div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 text-base font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}
            >
              Home
            </Link>
            <Link
              to="/uscc"
              onClick={() => setIsOpen(false)}
              className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/uscc" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}
            >
              USCC
            </Link>
            <Link
              to="/stem-horizons"
              onClick={() => setIsOpen(false)}
              className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/stem-horizons" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}
            >
              STEM Horizons 2026
            </Link>
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/gallery" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}
            >
              Gallery
            </Link>
            <Link
              to="/team"
              onClick={() => setIsOpen(false)}
              className={`hover:text-brand-darkCyan pb-1 border-b-2 transition ${currentPath === "/team" ? "border-brand-cyanBlue text-brand-cyanBlue" : "border-transparent"}`}
            >
              Team
            </Link>
          </nav>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-center bg-brand-cyanBlue hover:bg-brand-darkCyan text-brand-black font-semibold px-4 py-2 rounded hover:brightness-110 transition"
            >
              Contact
            </Link>
            <Link
              to="/uscc"
              onClick={() => setIsOpen(false)}
              className="text-center border border-brand-white text-brand-white font-semibold px-4 py-2 rounded hover:bg-brand-white hover:text-brand-black transition"
            >
              USCC
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
