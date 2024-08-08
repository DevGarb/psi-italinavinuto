import Image from "next/image";

import logoidalina from '../assets/img/logoidalina.png'
import Group from '../assets/img/Group.png'
import Vector from '../assets/img/Vector.png'

import Atendimento from "./atendimento"
import Card from './card'
import Footer from "./footer"



export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between ">
      <div className="flex flex-1 flex-col pl-4 sm:pl-24 pr-4 sm:pr-24">
        <header className="font-mono text-sm flex">
          <div className="pt-7 w-full">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src={logoidalina}
                priority={true}
                alt="" />
            </a>
          </div>
        </header>

        <main className="w-full mb-auto">
          <div className="flex h-[45rem] justify-between max-md:flex-wrap">
            <div className="w-[40rem] items-center content-center max-sm:pl-1 max-md:pt-10">
              <h1 className="text-black font-medium text-4xl tracking-widest font-serif">Ajudo pessoas e negócios a construir uma jornada com mais saúde mental e emocional</h1>
              <div className="pt-10">
                <div>
                  <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-400 rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-between transition duration-300 hover:scale-110 w-72 text-lg font-extrabold">
                    <span>Fale comigo agora</span>
                    <svg className="rtl:rotate-180 w-6 h-7 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex gap-4 pt-10">
                <div><Image src={Vector} alt="" /></div>
                <p>Terapia Individual e em Grupo</p>
              </div>
              <div className="flex gap-4 pt-2">
                <div><Image src={Vector} alt="" /></div>
                <p>Diagnóstico Empresarial</p>
              </div>
              <div className="flex gap-4 pt-2">
                <div><Image src={Vector} alt="" /></div>
                <p>Metas e Indicadores</p>
              </div>
            </div>
            <div className="">
              <Image
                className="rounded-lg"
                src={Group}
                priority={true}
                alt="" />
            </div>
          </div>
        </main>
      </div>
      <Atendimento />
      <Card />
      <Footer />
    </div >
  );
}
