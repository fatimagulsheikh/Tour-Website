

import { Footer } from "./components/footer";
import Hero from "./components/hero";
import { Hotels } from "./components/Hotels";
import { Testmonial } from "./components/testmonial";
import { Tours } from "./components/tours";

export default function Home() {
  return <main>
    <Hero />
    <Tours />
    <Hotels />
    <Testmonial />
    <Footer />
  </main>
}