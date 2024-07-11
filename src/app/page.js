import Image from "next/image";
import Hero from "./components/Hero";
import WhySimplyGoodFood from "./whygoodfood/page";
import TrandingMen from "./components/TrandingMen";
import Dailymela from "./components/Dailymela";

export default function Home() {
  return (
    <main>
      <Hero/>
      <WhySimplyGoodFood/>
      <TrandingMen/>
      <Dailymela/>
    </main>
  );
}
