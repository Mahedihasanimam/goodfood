import Image from "next/image";
import Hero from "./components/Hero";
import WhySimplyGoodFood from "./whygoodfood/page";

export default function Home() {
  return (
    <main>
      <Hero/>
      <WhySimplyGoodFood/>
    </main>
  );
}
