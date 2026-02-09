"use client";

import Section from "./Section";

const battingOrder = [
  { position: 1, name: "Sehwag" },
  { position: 2, name: "Sachin" },
  { position: 3, name: "Gambhir" },
  { position: 4, name: "Kohli" },
  { position: 5, name: "Dhoni", highlighted: true },
  { position: 6, name: "Yuvraj" },
];

const topShots = [
  "Disrupted the world\u2019s best spinner",
  "Fielders moved from attack to defense",
  "Required rate dropped below 6",
];

export default function TheGamble() {
  return (
    <Section id="gamble">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_240px] gap-4 items-start">
        {/* Left Card */}
        <div className="bg-surface border border-gray-700/60 rounded-xl p-5 card-hover slide-left">
          <h2 className="text-white text-xl font-semibold mb-3">The Gamble</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Promoted himself above Yuvraj Singh. No World Cup captain had ever
            done this in a final.
          </p>

          <div className="space-y-1.5 stagger">
            {battingOrder.map((b) => (
              <div
                key={b.position}
                className={`flex items-center gap-2 text-sm ${
                  b.highlighted
                    ? "bg-teal text-bg font-semibold rounded px-2 py-1"
                    : "text-gray-300 px-2 py-1"
                }`}
              >
                <span className="font-mono text-xs opacity-70">
                  #{b.position}
                </span>
                <span>{b.name}</span>
                {b.highlighted && (
                  <svg
                    className="w-3.5 h-3.5 ml-auto"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 3l4 5H4l4-5z" />
                  </svg>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 text-sm text-gray-500 px-2 py-1 line-through">
              <span className="font-mono text-xs opacity-70">#7</span>
              <span>was Dhoni</span>
            </div>
          </div>
        </div>

        {/* Center: Wagon Wheel Image */}
        <div className="flex flex-col items-center justify-center scale-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/the-gamble.png"
            alt="Shot wagon wheel of Dhoni on the field"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Card */}
        <div className="bg-surface border border-gray-700/60 rounded-xl p-5 card-hover slide-right">
          <h2 className="text-white text-xl font-semibold mb-4">
            Top 3 shots
          </h2>
          <ol className="space-y-3">
            {topShots.map((shot, i) => (
              <li
                key={i}
                className={`flex gap-3 text-sm pb-3 ${
                  i < topShots.length - 1
                    ? "border-b border-gray-700/50"
                    : ""
                }`}
              >
                <span className="text-teal font-mono font-bold">
                  {i + 1}.
                </span>
                <span className="text-gray-300 leading-relaxed">{shot}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
