import { Hero } from "@/components/sections/Hero";
import { TheGap } from "@/components/sections/TheGap";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TheGap />
      <Services />
      <Differentials />
      <CTAFinal />
      <Footer />
    </main>
  );
}
