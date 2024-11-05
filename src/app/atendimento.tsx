import Image from 'next/image';
import { FC } from 'react';
import { FaHeart, FaClipboardList } from 'react-icons/fa';
import "@fontsource/playfair-display"

import Consultorio from '../assets/img/maoqueixo.png'
import Grupo from '../assets/img/grupo.png'
import IdalinaMic from '../assets/img/idalinamic1.png'

export default function Example() {
    return (
        <div className="bg-[#F9F6F1] py-16 border-t-2 border-gray-300">
            <div className="container mx-auto px-4">
                {/* Título da seção */}
                <h1 className="font-playfair text-3xl md:text-4xl text-center font-bold mb-4">
                    Atendimento Clínico e
                    <p>Consultoria em Saúde Mental Corporativa</p>
                </h1>
                <p className="text-center text-gray-500 mb-12">
                    Saiba abaixo como funciona
                </p>

                {/* Card de Atendimento Clínico */}
                <div className="grid grid-cols-1 gap-8 m-10 mx-auto shadow-2xl rounded-lg overflow-hidden bg-[#F0E4DB] w-full">
                    <div className="p-16 flex flex-col md:flex-row items-center gap-20 ">

                        {/* Texto e ícones */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold mb-4 font-playfair">
                                Atendimento Clínico
                            </h1>
                            <p className="text-gray-700 mb-4">
                                Especialista pela Unichristus, com experiência há mais de 6 anos em psicoterapia para adultos e idosos (18 a 75 anos), ofereço tratamentos especializados para Burnout, Depressão, Ansiedade e Estresse. Atendo no formato online e presencial.
                            </p>
                            <p className="text-gray-700 mb-4">
                                A TCC tem como base as evidências, focando na identificação e modificação de pensamentos e comportamentos disfuncionais. Adapto as técnicas da TCC para atender a cada necessidade específica, criando um espaço seguro e acolhedor para explorar pensamentos e emoções com confiança.
                            </p>
                            <p className="font-semibold flex items-center gap-2 text-orange-600">
                                <FaHeart className="text-red-500" />
                                Vamos dar o primeiro passo juntos?
                            </p>
                        </div>
                        {/* Imagem */}
                        <div className="flex-shrink-0 bg-[#FFB699] rounded-md px-2 ">
                            <Image
                                src={Consultorio}
                                alt="Psicóloga Idalina Vinuto"
                                className="rounded-lg object-cover "
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Card de Atendimento Clínico */}
                <div className="grid grid-cols-1 gap-8 m-10 mx-auto shadow-2xl rounded-lg overflow-hidden bg-[#E2D7CF] w-full">
                    <div className="p-16 flex flex-col md:flex-row items-center gap-20 ">
                        {/* Imagem */}
                        <div className="flex-shrink-0 rounded-md">
                            <div>
                                <Image
                                    src={IdalinaMic}
                                    alt="Psicóloga Idalina Vinuto"
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        {/* Texto e ícones */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold mb-4 font-playfair">
                                Consultoria em Saúde Mental Corporativa
                            </h1>
                            <p className="text-gray-700 mb-4 font-bold">
                                Possuo 14 anos de experiência atuando em Gestão de Pessoas e MBA em Gestão Estratégica de RH pela Ibmec.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Na minha trajetória profissional, fui responsável por implantar a área de Pessoas e Cultura em diversos segmentos, incluindo tecnologia, fintechs e varejo. Sempre com o objetivo de criar ambientes de trabalho saudáveis e produtivos, transformei cada desafio em uma oportunidade de crescimento e inovação.
                            </p>
                            <p className="font-semibold flex items-center gap-2 text-orange-600">
                                <FaHeart className="text-red-500" />
                                Vamos dar o primeiro passo juntos?
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};