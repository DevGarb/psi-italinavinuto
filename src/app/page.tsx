"use client"

import Atendimento from "./atendimento";
import Card from './card';
import Footer from "./footer";
import Aboutme from "./aboutme";
import Hero from "./hero";
import MentalHealthSection from "./MentalHealthSection";
import FAQSection from "./faq";
import Agendamento from "./agendamento";
import Avaliações from "./avaliations";



export default function Home() {
  return (
    <main >
      <Hero />
      <Aboutme />
      <Atendimento />
      <Card />
      <MentalHealthSection />
      <Agendamento />
      <Avaliações />
      <FAQSection />
      <Footer />
    </ main>
  );
}