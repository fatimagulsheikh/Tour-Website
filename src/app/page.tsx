import { Footer } from "./components/footer";
import Hero from "./components/hero";
import { Hotels } from "./components/Hotels";
//import { Hotels } from "./components/hotels";
import { Testmonial } from "./components/testmonial";
import { Tours } from "./components/tours";

export default function Home() {
  return <main>
    <Hero />
    <Tours />
    <Hotels />
    <Testmonial />
    
  </main>
}