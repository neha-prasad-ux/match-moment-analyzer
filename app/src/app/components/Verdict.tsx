"use client";

import Section from "./Section";

export default function Verdict() {
  return (
    <Section id="verdict" noBorder glow={true}>
      <div className="flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="shimmer-text text-2xl font-bold tracking-tight mb-8">
          The Verdict
        </h2>

        {/* Semicircle Gauge */}
        <svg
          viewBox="0 0 300 180"
          className="w-64 md:w-80 mb-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background arc */}
          <path
            d="M 30 160 A 120 120 0 0 1 270 160"
            fill="none"
            stroke="#27272A"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Filled arc with animation */}
          <path
            d="M 30 160 A 120 120 0 0 1 270 160"
            fill="none"
            stroke="#00C896"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="377"
            className="verdict-arc-animate"
          />
          {/* Center text */}
          <text
            x="150"
            y="130"
            textAnchor="middle"
            fill="#00C896"
            fontSize="28"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Elite
          </text>
          <text
            x="150"
            y="155"
            textAnchor="middle"
            fill="#71717A"
            fontSize="13"
            fontFamily="sans-serif"
          >
            Performance Rating
          </text>
        </svg>

        {/* Verdict text */}
        <p className="text-gray-300 text-base leading-relaxed max-w-lg">
          Dhoni&apos;s exceptional adaptability under pressure, combined with
          near-zero head stability drift, produced one of the most
          biomechanically refined shots in World Cup history. His ability to
          maintain composure while generating maximum power remains unmatched,
          though physical durability concerns at age 30+ introduced long-term
          risk factors to this elite performance profile.
        </p>

        {/* Confidence badge */}
        <p className="text-teal font-mono text-sm mt-6">
          SportAI Confidence: 96%
        </p>
      </div>
    </Section>
  );
}
