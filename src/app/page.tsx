import Image from "next/image";

import logoidalina from '../assets/img/logoidalina.png';
import photoidalina from '../assets/img/photoidalina.png';
import backgroundphoto from '../assets/img/backgroundphoto.png';
import Vector from '../assets/img/Vector.png';

import Atendimento from "./atendimento";
import Card from './card';
import Footer from "./footer";

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="bg-[#241B0F] px-6">
        <header className="font-mono text-sm py-7 container">
          <a href="#">
            <Image
              className="rounded-lg w-auto h-16"
              src={logoidalina}
              priority={true}
              alt="Logo"
            />
          </a>
        </header>

        <main className="mt-10 flex justify-center">
          <div className="flex flex-col md:flex-row md:gap-8 max-w-screen-xl">
            <div className="flex-1 md:max-w-[40rem]">
              <h1 className="text-white font-medium text-2xl md:text-4xl tracking-widest font-serif">
                Ensino pessoas e negócios a construir uma jornada com mais saúde mental e bem-estar
              </h1>
              <div className="pt-10 mb-10">
                <a
                  href="https://wa.me/5585985302993?text=Oi,%20Agende%20agora%20sua%20consulta."
                  target="_blank"
                  className="text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-between transition duration-300 hover:scale-110 w-full sm:w-72 text-md font-bold"
                >
                  <span>Fale comigo agora</span>
                  <svg className="rtl:rotate-180 w-6 h-7 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col gap-4 pt-10 text-white">
                {["Terapia Individual", "Terapia Cognitivo-Comportamental", "Diagnóstico Empresarial", "Metas e Indicadores"].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Image src={Vector} className="w-4 h-4" alt="" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex-shrink-0 mt-8 md:mt-0">
              <Image
                className="absolute inset-0 object-cover w-full h-full"
                src={backgroundphoto}
                priority={true}
                alt="Background"
              />
              <Image
                className="relative z-10"
                src={photoidalina}
                priority={true}
                quality={100}
                alt="Photo Idalina"
              />
            </div>
          </div>
        </main>
      </div>
      <Atendimento />
      <Card />
      <Footer />
    </div>
  );
}
