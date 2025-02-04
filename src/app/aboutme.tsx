import React from 'react';
import Image from 'next/image'
import "@fontsource/playfair-display"

import bustoidalina from '../../public/img/bustoidalina.png'
import path from 'path';
import { BsPeopleFill } from 'react-icons/bs';
import { IoPersonSharp } from 'react-icons/io5';
import { RiMentalHealthFill } from "react-icons/ri";



export default function aboutme() {
    return (
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-8 items-center">
            <h1 className="max-sm:hidden font-playfair text-3xl col-span-1 md:col-span-3 justify-center flex text-center sm:mb-8">
                <span>
                    Olá, sou <span className="font-bold">Idalina Vinuto </span>e conto
                    <br />abaixo um pouco da minha trajetória
                </span>
            </h1>
            <h1 className="sm:hidden font-playfair text-3xl col-span-1 md:col-span-3 justify-center flex text-center sm:mb-8">
                <span>
                    Olá, sou <span className="font-bold">Idalina Vinuto </span>e conto
                    abaixo um pouco da minha trajetória
                </span>
            </h1>
            {/* Coluna dos ícones de experiência */}
            <div className="flex flex-col items-center md:items-start gap-4 rounded md:border-r border-gray-300 h-full">
                {/* Ícone de Experiência Clínica */}
                <div className="max-sm:hidden flex items-center justify-center space-x-3">
                    <div className="bg-gray-100  rounded flex items-center justify-center">
                        {/* Ícone */}
                        {/* <IoPersonSharp className="w-9 m-2.5 h-auto text-[#945D38]" /> */}
                        <RiMentalHealthFill className="w-9 m-2.5 h-auto text-[#945D38]" />
                    </div>
                    <div>
                        <p className="text-3xl font-bold">12 anos</p>
                        <p className="text-[#999999]">Psicologia</p>
                    </div>
                </div>
                {/* Ícone Psicologia MOBILE */}
                <div className="md:hidden flex-row flex items-center justify-center space-x-3">
                    <div className="bg-gray-100 rounded ">
                        {/* Ícone */}
                        {/* <IoPersonSharp className="max-sm:w-4 w-9 m-1.5 h-auto text-[#945D38]" /> */}
                        <RiMentalHealthFill className="max-sm:w-4 w-9 m-1.5 h-auto text-[#945D38]" />
                    </div>
                    <div className="text-sm font-bold">
                        6 anos <a className="text-[#999999]">Psicologia</a>
                    </div>
                </div>

                {/* Ícone de Gestão de Pessoas MOBILE*/}
                <div className="md:hidden flex-row flex items-center justify-center space-x-3">
                    <div className="bg-gray-100  rounded">
                        {/* Ícone */}
                        <BsPeopleFill className="max-sm:w-5 w-10 m-1.5 h-auto text-[#945D38]" />
                    </div>
                    <div className="text-sm font-bold">
                        14 anos <a className="text-[#999999]">em Gestão de Pessoas</a>
                    </div>
                </div>
                {/* Ícone de Gestão de Pessoas */}
                <div className="max-sm:hidden flex items-center justify-center space-x-3">
                    <div className="bg-gray-100  rounded">
                        {/* Ícone */}
                        <BsPeopleFill className="w-10 m-2 h-auto text-[#945D38]" />
                    </div>
                    <div>
                        <p className="text-3xl font-bold">14 anos</p>
                        <p className="text-[#999999]">em Gestão de Pessoas</p>
                    </div>
                </div>
            </div>

            {/* Coluna da descrição e informações adicionais */}
            <div className="text-center md:text-left space-y-10 xl:min-w-[500px]">

                {/* Descrição da experiência */}
                <p className="text-[#999999] text-justify">
                    Sou psicóloga formada pela Universidade de Fortaleza desde 2012, com especialização em Terapia Cognitivo-Comportamental (TCC)
                    pela Unichristus (2019) e MBA em Gestão Estratégica de Recursos Humanos pela Ibmec (2015).
                </p>
                <p className="text-[#999999] text-justify">
                    Atuo em duas áreas distintas: como Psicóloga Clínica, aplicando Terapia Cognitivo-Comportamental e práticas baseadas em evidências; 
                    e como Consultora em Saúde Mental Corporativa, onde foco no desenvolvimento de lideranças e na criação de ambientes de trabalho saudáveis e produtivos. 
                    Além disso, sou aluna voluntária do Laboratório Estudos do Trabalho (LET/Unifor), onde são realizadas pesquisas com objetivo em identificar
                </p>

                <div className="sm:hidden md:h-full flex items-center gap-6 justify-center md:justify-end flex-row-reverse">
                    <h5>
                        <p className="font-bold text-base">Idalina Vinuto</p>
                        <p className="text-gray-600 text-xs">CRP 11/07872</p>
                    </h5>
                    <Image
                        className="rounded-lg  sm:h-auto md:h-1/4 lg:h-2/5 xl:h-2/4 w-28 h-auto"
                        src={bustoidalina}
                        alt="Foto de Idalina Vinuto"
                    />
                </div>
                <h5 className="hidden md:block items-center">
                    <p className="font-bold text-base">Idalina Vinuto</p>
                    <p className="text-gray-600 text-xs">CRP 11/07872</p>
                </h5>
            </div>

            <div className="hidden md:flex md:h-full justify-end">
                <Image
                    className="rounded-lg w-auto sm:h-auto md:h-1/4 lg:h-2/5 xl:h-2/4"
                    src={bustoidalina}
                    alt="Foto de Idalina Vinuto"

                />
            </div>
        </div>

    )
}