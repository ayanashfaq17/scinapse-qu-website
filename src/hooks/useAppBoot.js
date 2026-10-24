/**
 * Preloads the hero image and the first gallery thumbnails before hiding the boot loader.
 * Always finishes (including on image errors) so the app cannot stick on the loader.
 */
import { useEffect, useState } from "react";
import { events } from "../data/galleryEvents";

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
}

export default function useAppBoot() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        setProgress(20); // Step 1
        await preloadImage("/assets/hero_banner.jpg");

        setProgress(60); // Step 2
        await new Promise((res) => setTimeout(res, 200)); // Simulated logic

        // Step 3: Preload first 4 gallery images of each event
        const galleryImages = events.flatMap((event) =>
          event.images.slice(0, 4),
        );
        let loaded = 0;
        await Promise.all(
          galleryImages.map((img) =>
            preloadImage(img.src).then(() => {
              loaded++;
            }),
          ),
        );
        setProgress(80); // Step 3

        setProgress(100); // Done
      } catch (err) {
        console.error("App boot failed:", err);
        setProgress(100); // Fail safe
      }
    };

    bootstrap();
  }, []);

  return progress;
}
