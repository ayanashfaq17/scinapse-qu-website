/**
 * `/gallery`. Albums come from src/data/galleryEvents.js (generated from Vercel Blob).
 * See docs/CONTENT.md for how to add photos.
 */
import EventSection from "../components/GalleryPage/EventSection.jsx";
import HeroBanner from "../components/GalleryPage/HeroBanner.jsx";
import "../CSS/gallery.css";
import { events } from "../data/galleryEvents.js";

// Main Gallery Page component (now also the main gallery UI)
export default function GalleryPage() {
  return (
    // Main container for the gallery page
    <div className="min-h-screen bg-zinc-950 text-brand-white gallery-container">
      {/* Hero-style intro section */}
      <HeroBanner />
      {/* Render each event section using the EventSection component */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {events.map((event) => (
          <EventSection key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}
