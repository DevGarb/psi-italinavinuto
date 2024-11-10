import React from 'react';
import Image from 'next/image'

import logoidalina from '../assets/img/logoidalina.png';
import photoidalina from '../assets/img/photoidalina.png';
import backgroundphoto from '../assets/img/backgroundphoto.png';
import Vector from '../assets/img/Vector.png';


export default function hero() {
    return (
        <div className="mx-auto">
            <div className="bg-[#241B0F]">
                <main className="container justify-center flex flex-col pt-10">
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className='max-md:hidden'>
                            <Image
                                alt='Idalina Vinuto'
                                src={photoidalina}
                                className='mt-20' />
                        </div>
                        <div className="flex-1">
                            <div className='max-sm:text-center'>
                                <Image
                                    className="rounded-lg w-auto h-16 mb-24"
                                    src={logoidalina}
                                    priority={true}
                                    alt="Logo"
                                />
                                <p className="text-white font-playfair font-bold text-4xl">
                                    Ensino pessoas e negócios a construir uma jornada com&nbsp;
                                </p>
                                {/* <p className="text-white font-playfair font-bold text-4xl">
                                    a construir uma jornada com&nbsp;
                                </p> */}
                                <p className="text-[#F1CA52] font-playfair font-bold text-4xl">
                                    mais saúde mental e bem-estar
                                </p>
                            </div>

                            {/* IMAGEM MOBILE */}
                            <div className='md:hidden pt-8'>
                                <Image
                                    alt="Idalina Vinuto"
                                    src={photoidalina}
                                    priority={true}/>
                            </div>
                            {/* IMAGEM MOBILE */}

                            <div className="sm:py-8 pb-10">
                                <a
                                    href="https://wa.me/5585999173647?text=Oi,%20Agende%20agora%20sua%20consulta."
                                    target="_blank"
                                    className="text-black bg-[#F1CA52] rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-between transition duration-300 hover:scale-110 w-full sm:w-72 text-md font-bold"
                                >
                                    <span>Fale comigo agora</span>

                                    {/* TROCAR SETA */}
                                    <svg className="rtl:rotate-180 w-6 h-7 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                    {/* TROCAR SETA */}

                                </a>
                            </div>

                            <div className="flex flex-col gap-4 mb-8 text-white">
                                {["Terapia Individual", "Terapia Cognitivo-Comportamental", "Diagnóstico Empresarial", "Metas e Indicadores"].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 max-sm:justify-center">
                                        <Image src={Vector} className="w-4 h-4" alt="" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
{/* <Image
    className="inset-0 object-cover"
    src={photoidalina}
    priority={true}
    quality={100}
    alt="Photo Idalina"
/> */}