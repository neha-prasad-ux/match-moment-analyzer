"use client";

import Section from "./Section";

const metrics = [
  {
    value: "45°",
    baseline: "Baseline: 40-50°",
    label: "Backlift Angle",
    color: "text-teal",
  },
  {
    value: "35-40°",
    baseline: "Baseline: 30-45°",
    label: "Stance Width",
    color: "text-teal",
  },
  {
    value: "~0mm",
    baseline: "Baseline: <5mm",
    label: "Head Movement",
    color: "text-teal",
  },
  {
    value: "High",
    baseline: "Baseline: Moderate",
    label: "Hip-Shoulder Separation",
    color: "text-[#F5A623]",
  },
];


export default function AIInsights() {
  return (
    <Section id="insights">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_240px] gap-4 items-start">
        {/* Left: Metrics Card */}
        <div className="slide-left bg-surface border border-gray-700/60 rounded-xl p-5 card-hover flex flex-col">
          <h2 className="text-white text-xl font-semibold mb-5 flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal" />
            AI Insights
          </h2>
          <div className="stagger flex flex-col">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`py-3 ${
                  index < metrics.length - 1
                    ? "border-b border-gray-700/50"
                    : ""
                }`}
              >
                <p
                  className={`${metric.color} font-mono text-2xl font-bold`}
                >
                  {metric.value}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  {metric.baseline}
                </p>
                <p className="text-gray-400 text-sm mt-0.5">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Annotated Batsman Photo */}
        <div className="scale-in flex flex-col gap-3">
          <div className="rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ai-insights.png"
              alt="What happened in the 0.4 seconds before contact"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right: Quote Card */}
        <div className="slide-right bg-surface border border-gray-700/60 rounded-xl p-5 card-hover flex items-center">
          <p className="text-gray-200 text-sm leading-relaxed">
            Every body part fired in sequence. Like a detonation.
          </p>
        </div>
      </div>
    </Section>
  );
}
