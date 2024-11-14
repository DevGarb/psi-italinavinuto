"use client"

import Atendimento from "./atendimento";
import Card from './card';
import Footer from "./footer";
import Aboutme from "./aboutme";
import Hero from "./hero";
import MentalHealthSection from "./MentalHealthSection";
import FAQSection from "./faq";
import Agendamento from "./agendamento";
import Feedbacks from "./feedbacks";
import Feedtest from "./feedtest";



export default function Home() {
  return (
    <main className="">
      <Hero />
      <Aboutme />
      <Atendimento />
      <Card />
      <MentalHealthSection />
      <Feedbacks />
      <Agendamento />
      {/* <Feedtest /> */}
      <FAQSection />
      <Footer />
    </ main>
  );
}