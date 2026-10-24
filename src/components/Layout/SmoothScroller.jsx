/**
 * GSAP ScrollSmoother wrapper used in App.jsx. Do not nest another one.
 */
"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });

    const resetScrollToTop = () => {
      if (smoother) {
        smoother.scrollTo(0, false);
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Force scroll to top now and on next frame
    resetScrollToTop();
    requestAnimationFrame(resetScrollToTop);

    return () => {
      if (smoother) {
        smoother.kill();
      }

      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
