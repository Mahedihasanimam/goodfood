import Image from "next/image";
import Hero from "./components/Hero";
import WhySimplyGoodFood from "./whygoodfood/page";
import TrandingMen from "./components/TrandingMen";

export default function Home() {
  return (
    <main>
      <Hero/>
      <WhySimplyGoodFood/>
      <TrandingMen/>
    </main>
  );
}
