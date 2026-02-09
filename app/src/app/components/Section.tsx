"use client";
import { useScrollReveal } from "./useScrollReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  glow?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = "",
  noBorder = false,
  glow = false,
  id,
}: SectionProps) {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-12 md:py-16 scroll-mt-28 ${
        noBorder ? "" : "border-b border-gray-700/50"
      } ${glow ? "glow-teal" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
