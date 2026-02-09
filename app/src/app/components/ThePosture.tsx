"use client";

import Section from "./Section";

export default function ThePosture() {
  return (
    <Section id="posture" glow={true}>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_240px] gap-4 items-start">
        {/* Left: Phase Breakdown Card */}
        <div className="bg-surface border border-gray-700/60 rounded-xl p-5 card-hover flex flex-col justify-center">
          <h2 className="text-white text-xl font-semibold mb-4">The Posture</h2>
          <div className="stagger space-y-0">
            {/* Phase 1 */}
            <div className="py-3">
              <p className="text-teal font-mono text-sm font-bold">Overs 1-8</p>
              <p className="text-gray-300 text-sm mt-1">
                Backlift shortened. Forearm power replaced swing.
              </p>
            </div>
            <div className="border-t border-gray-700/40" />
            {/* Phase 2 */}
            <div className="py-3">
              <p className="text-teal font-mono text-sm font-bold">Overs 9-35</p>
              <p className="text-gray-300 text-sm mt-1">
                More hip-shoulder separation to compensate for failing legs.
              </p>
            </div>
            <div className="border-t border-gray-700/40" />
            {/* Phase 3 */}
            <div className="py-3">
              <p className="text-teal font-mono text-sm font-bold">Overs 36-49</p>
              <p className="text-gray-300 text-sm mt-1">
                Three stances. Three problems. Each one solved.
              </p>
            </div>
          </div>
        </div>

        {/* Center: Posture Visualization Image */}
        <div className="scale-in flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/the-posture.png"
            alt="Posture adjusting through back pain across innings"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Quote Card */}
        <div className="bg-surface border border-gray-700/60 rounded-xl p-5 card-hover flex items-center">
          <div className="slide-right">
            <p className="text-gray-200 text-sm leading-relaxed">
              His body was breaking with severe back pain. His brain kept adjusting.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
