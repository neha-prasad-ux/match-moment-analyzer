"use client";

import Section from "./Section";

export default function TheSituation() {
  return (
    <Section id="situation">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_240px] gap-4 items-start">
        {/* Left: Stats Card */}
        <div className="slide-left card-hover bg-surface border border-gray-700/60 rounded-xl p-5 flex flex-col justify-center">
          <h2 className="text-white text-xl font-semibold mb-5">The Situation</h2>
          <div className="flex items-center justify-between gap-4">
            <div className="text-center">
              <div className="relative inline-block">
                <span className="absolute inset-0 blur-lg bg-teal/20 rounded-full" />
                <p className="relative text-teal font-mono text-3xl font-bold">161</p>
              </div>
              <p className="text-gray-400 text-sm mt-1">runs</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <span className="absolute inset-0 blur-lg bg-teal/20 rounded-full" />
                <p className="relative text-teal font-mono text-3xl font-bold">216</p>
              </div>
              <p className="text-gray-400 text-sm mt-1">balls</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <span className="absolute inset-0 blur-lg bg-teal/20 rounded-full" />
                <p className="relative text-teal font-mono text-3xl font-bold">7</p>
              </div>
              <p className="text-gray-400 text-sm mt-1">wickets</p>
            </div>
          </div>
        </div>

        {/* Center: Embedded YouTube Video */}
        <div className="scale-in rounded-xl overflow-hidden aspect-video">
          <iframe
            src="https://www.youtube.com/embed/R0alThHNb0Y"
            title="ICC World Cup 2011 Final - Dhoni's winning six"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Right: Quote Card */}
        <div className="slide-right card-hover bg-surface border border-gray-700/60 rounded-xl p-5 flex items-center">
          <p className="text-gray-200 text-base leading-relaxed">
            India hadn&apos;t won a World Cup in 28 years. India&apos;s
            World Cup dream was slipping.
          </p>
        </div>
      </div>
    </Section>
  );
}
