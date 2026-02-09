import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import TheSituation from "./components/TheSituation";
import TheGamble from "./components/TheGamble";
import ThePosture from "./components/ThePosture";
import AIInsights from "./components/AIInsights";
import TheChoice from "./components/TheChoice";
import HeadStability from "./components/HeadStability";
import Verdict from "./components/Verdict";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="py-16 md:py-20 text-center border-b border-gray-700/50">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Match Moment Analyzer
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Analysing MS Dhoni&apos;s batting skill and decision-making during the 2011 ICC World Cup Final, using broadcast video as the sole data source.
          </p>
        </div>
        <TheSituation />
        <TheGamble />
        <ThePosture />
        <AIInsights />
        <TheChoice />
        <HeadStability />
        <Verdict />
      </main>
      <footer className="border-t border-gray-700/50 py-8 text-center text-gray-500 text-xs tracking-wide">
        Match Moment Analyzer v1.0 — by Neha
      </footer>
    </>
  );
}
