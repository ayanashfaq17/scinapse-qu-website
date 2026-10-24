/**
 * One gallery album. Data shape comes from galleryEvents.js (`title`, `date`, `images`).
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MasonryGrid from "./MasonryGrid.jsx";
import FluidText from "../CoreWeb/FluidText.jsx";
import RippleButton from "../UI/RippleButton.jsx";

// Hook to detect mobile screens
function useIsMobile() {
  const isClient = typeof window !== "undefined";
  const [isMobile, setIsMobile] = useState(
    isClient ? window.innerWidth < 768 : false,
  );
  useEffect(() => {
    if (!isClient) return;

    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

/**
 * EventSection - Individual event with show/hide functionality
 * @param {Object} event - Event object with title, date, images
 */
export default function EventSection({ event }) {
  // Track if all images should be shown or just initial set
  const [showAll, setShowAll] = useState(false);
  // Track if the button should be disabled
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // Track if user has ever clicked 'Show All'
  const [hasShownAll, setHasShownAll] = useState(false);

  // Number of images to show initially (default 4)
  const initialShow = 4;

  // Only show the toggle button if there are more images than initially shown
  const hasMoreImages = event.images.length > initialShow;

  // Handle show all/less with temporary disable
  const handleToggle = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (next) setHasShownAll(true);
      return next;
    });
    setButtonDisabled(true);
    setTimeout(() => setButtonDisabled(false), 1000);
  };

  const isMobile = useIsMobile();

  return (
    <section className="mb-10 relative" data-event={event.title}>
      {/* Event title and date */}
      <div>
        <span className="hidden md:block">
          <FluidText
            text={event.title}
            baseColor="text-brand-white"
            size="text-3xl"
          />
        </span>
        <span className="block md:hidden">
          <h2 className="text-2xl font-bold text-brand-white leading-tight mb-1">
            {event.title}
          </h2>
        </span>
      </div>
      <div className="text-brand-white/60 mb-3">{event.date}</div>
      <div className="relative">
        {/* Animate the height of the image grid when toggling showAll */}
        <motion.div
          initial={false}
          animate={
            isMobile
              ? { opacity: 1 }
              : { maxHeight: showAll ? "2000px" : "600px", opacity: 1 }
          }
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            if (
              typeof window === "undefined" ||
              typeof document === "undefined"
            ) {
              return;
            }
            const element = document.querySelector(
              `[data-event="${event.title}"]`,
            );
            if (element) {
              if (showAll) {
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // !!!!!! Removing the scrollIntoView to avoid jumping because it was proving to be disruptive
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                // Scroll to show the newly revealed content
                // element.scrollIntoView({
                //   behavior: 'smooth',
                //   block: 'end',
                //   inline: 'nearest'
                // });
              } else {
                // Scroll back to top of section when showing less with some space above
                const rect = element.getBoundingClientRect();
                const scrollTop = window.pageYOffset + rect.top - 100; // 100px above
                window.scrollTo({
                  top: scrollTop,
                  behavior: "smooth",
                });
              }
            }
          }}
        >
          {/* Masonry grid for event images, keep all images mounted after first show all */}
          <MasonryGrid
            images={event.images}
            showAll={showAll}
            initialShow={initialShow}
            keepAll={hasShownAll}
          />
        </motion.div>
      </div>
      {/* Show toggle button if there are more images to display */}
      {hasMoreImages && (
        <div className="text-center mt-8 md:mt-4">
          <RippleButton
            type="button"
            onClick={handleToggle}
            disabled={buttonDisabled}
            variant="primary"
          >
            {showAll ? "Show Less" : `View All Photos`}
          </RippleButton>
        </div>
      )}
    </section>
  );
}
