import Atendimento from "./atendimento";
import Card from './card';
import Footer from "./footer";
import Aboutme from "./aboutme";
import Hero from "./hero";


export default function Home() {
  return (
    <>
      <Hero />
      <Aboutme />
      <Atendimento />
      <Card />
      <Footer />
    </>
  );
}
