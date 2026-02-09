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
        <TheSituation />
        <TheGamble />
        <ThePosture />
        <AIInsights />
        <TheChoice />
        <HeadStability />
        <Verdict />
      </main>
      <footer className="border-t border-gray-700/50 py-8 text-center text-gray-500 text-xs tracking-wide">
        Match Moment Analyzer v1.0
      </footer>
    </>
  );
}
