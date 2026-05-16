import Hero from "@/components/sections/Hero";
import FocusArea from "@/components/sections/FocusArea";
import WhoWeServe from "@/components/sections/WhoWeServe";
import HowItWorks from "@/components/sections/HowItWorks";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import Volunteer from "@/components/sections/Volunteer";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FocusArea />
      <WhoWeServe />
      <HowItWorks />
      <ImpactMetrics />
      <Volunteer />
    </main>
  );
}
