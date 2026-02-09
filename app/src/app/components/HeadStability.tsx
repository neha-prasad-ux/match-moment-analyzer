"use client";

import Section from "./Section";

export default function HeadStability() {
  return (
    <Section id="stability" glow={true}>
      <h3 className="text-gray-300 text-lg font-semibold mb-8 text-center">
        Head Stability Comparison
      </h3>

      <div className="scale-in max-w-3xl mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/areas-for-improvement.png"
          alt="Head stability comparison - Average Batsman 8-12mm drift vs Dhoni 0mm"
          className="w-full h-auto"
        />
      </div>
    </Section>
  );
}
