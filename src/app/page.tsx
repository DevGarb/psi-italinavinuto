"use client"

import Atendimento from "./atendimento";
import Card from './card';
import Footer from "./footer";
import Aboutme from "./aboutme";
import Hero from "./hero";
import MentalHealthSection from "./MentalHealthSection";
import FAQSection from "./faq";



export default function Home() {
  return (
    <main >
      <Hero />
      <Aboutme />
      <Atendimento />
      <Card />
      <MentalHealthSection />
      <FAQSection />
      <Footer />
    </ main>
  );
}