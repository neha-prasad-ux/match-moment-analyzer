"use client";

import Section from "./Section";

export default function TheChoice() {
  return (
    <Section id="choice">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_240px] gap-4 items-start">
        {/* Left: The Choice Card */}
        <div className="slide-left bg-surface border border-gray-700/60 rounded-xl p-5 card-hover">
          <h2 className="text-white text-xl font-semibold mb-3">The Choice</h2>
          <p className="text-gray-300 text-sm mb-4">
            Kulasekara bowled from wide of the crease. Full delivery on middle stump.
          </p>

          <div className="space-y-3">
            {/* Option 1 */}
            <div className="bg-surface-2 border border-gray-700/50 rounded-lg p-3">
              <p className="text-white text-sm font-medium">Flick to mid-wicket</p>
              <p className="text-gray-400 text-xs mt-1">
                Safe but risk of leading edge. Lower percentage.
              </p>
            </div>

            {/* Option 2 */}
            <div className="bg-surface-2 border border-gray-700/50 rounded-lg p-3">
              <p className="text-white text-sm font-medium">Straight drive</p>
              <p className="text-gray-400 text-xs mt-1">
                Full face of bat. But fielder at long-on.
              </p>
            </div>

            {/* Option 3 - Highlighted */}
            <div className="bg-teal-dim border border-teal/40 rounded-lg p-3">
              <p className="text-teal text-sm font-medium">
                Lofted on-drive with helicopter finish
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Highest risk. Maximum elevation. Clears the fielder.
              </p>
            </div>
          </div>
        </div>

        {/* Center: Field Diagram Image */}
        <div className="scale-in flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/the-choice.png"
            alt="Field diagram showing shot options"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Analysis Card */}
        <div className="slide-right bg-surface border border-gray-700/60 rounded-xl p-5 card-hover flex flex-col justify-center">
          <h2 className="text-teal text-xl font-semibold mb-3">Why Long-On?</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Kulasekara&apos;s wide-of-crease angle naturally favored the long-on
            arc. The delivery pitched on middle stump with a slight inswing,
            making the on-drive the highest-percentage power shot. Dhoni&apos;s
            wrist position and bottom-hand dominance allowed him to generate
            loft over the fielder stationed at long-on, turning the bowler&apos;s
            angle into an advantage.
          </p>
        </div>
      </div>
    </Section>
  );
}
