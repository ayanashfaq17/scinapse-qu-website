/**
 * Shared CTA. Pass `href` for in-app (`/path`) or external (`https://`) links; omit href for a real <button>.
 */
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function RippleButton({
  children,
  className = "",
  size = "md",
  variant = "primary",
  href,
  onClick,
  type = "button",
  ...props
}) {
  const btnRef = useRef();
  const navigate = useNavigate();

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm md:text-base px-4 py-2",
    lg: "text-base md:text-lg px-6 py-3",
  };

  const baseClasses =
    "relative overflow-hidden select-none inline-flex items-center justify-center rounded font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyanBlue/70";

  const variantClasses = {
    // Cyan filled button on light/dark backgrounds
    primary: "bg-brand-cyanBlue text-brand-black hover:bg-brand-darkCyan",
    // Dark background button that highlights to cyan on hover
    dark: "bg-brand-black text-brand-white hover:bg-brand-cyanBlue",
    // Outline button for dark backgrounds (e.g., navbar)
    outlineLight:
      "border border-brand-white text-brand-white bg-transparent hover:border-brand-cyanBlue hover:text-brand-cyanBlue",
    // Text-style button for inline CTAs (e.g., Read more)
    link: "bg-transparent text-brand-cyanBlue hover:underline px-0 py-0",
    // Disabled state (used when `disabled` prop is true)
    disabled:
      "bg-brand-cyanBlue text-brand-black opacity-50 cursor-not-allowed pointer-events-none",
  };

  const Element = href ? "a" : "button";
  const isDisabled = props.disabled;
  const resolvedVariant = isDisabled ? "disabled" : variant;

  const handleClick = (e) => {
    const btn = btnRef.current;
    if (!btn) return;

    const ripple = document.createElement("span");
    ripple.className = "ripple";

    const rect = btn.getBoundingClientRect();
    const rippleSize = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${rippleSize}px`;
    ripple.style.left = `${e.clientX - rect.left - rippleSize / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - rippleSize / 2}px`;

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    if (onClick) {
      onClick(e);
    }

    if (e.defaultPrevented) return;

    if (!href) return;

    // In-page anchor links: smooth scroll without route change
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // For links that should open in a new tab, let the browser handle navigation
    if (props.target === "_blank") {
      return;
    }

    e.preventDefault();
    setTimeout(() => {
      if (href.startsWith("/")) {
        navigate(href);
      } else {
        window.location.href = href;
      }
    }, 150);
  };

  return (
    <Element
      ref={btnRef}
      href={href}
      type={!href ? type : undefined}
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${
        variantClasses[resolvedVariant] || ""
      } ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}
