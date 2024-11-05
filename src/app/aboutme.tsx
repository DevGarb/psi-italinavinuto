import React from 'react';
import Image from 'next/image'
import "@fontsource/playfair-display"

import bustoidalina from '../assets/img/bustoidalina.png'


export default function aboutme() {
    return (
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-8 items-center">
            <h1 className="font-playfair text-3xl md:text-4xl col-span-1 md:col-span-3 justify-center flex text-center mb-10">
                <span>
                    Olá, sou <span className="font-bold">Idalina Vinuto </span> e conto
                    <p>&nbsp;abaixo um pouco da minha trajetória</p>
                </span>
            </h1>
            {/* Coluna dos ícones de experiência */}
            <div className="flex flex-col items-center md:justify-center md:items-start space-y-6 rounded border-r border-gray-300 h-full">
                {/* Ícone de Experiência Clínica */}
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-3 rounded border-r border-gray-300">
                        {/* Ícone */}
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A4 4 0 0121 14v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a4 4 0 012.84-3.838L12 14z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xl font-bold">6 anos</p>
                        <p className="text-gray-600">de Experiência Clínica</p>
                    </div>
                </div>

                {/* Ícone de Gestão de Pessoas */}
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-3 rounded border-r border-gray-300">
                        {/* Ícone */}
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m3-4a4 4 0 11-8 0 4 4 0 018 0zm8 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xl font-bold">14 anos</p>
                        <p className="text-gray-600">na área de Gestão de Pessoas</p>
                    </div>
                </div>
            </div>

            {/* Coluna da descrição e informações adicionais */}
            <div className="text-center md:text-left space-y-6">

                {/* Descrição da experiência */}
                <p className="text-[#999999]">
                    Sou Psicóloga formada pela Universidade de Fortaleza há 12 anos, com
                    especialização em Terapia Cognitivo-Comportamental (TCC) pela Unichristus e
                    MBA em Gestão Estratégica de RH pela Ibmec.
                </p>
                <p className="text-[#999999]">Possuo 6 anos de experiência
                    como Psicóloga Clínica em TCC e baseada em evidências, e 14 anos na Gestão
                    de Pessoas, desenvolvimento de lideranças e criação de ambientes de trabalho
                    saudáveis.
                </p>
                <h5 className='pt-5'>
                    <p className="font-bold">Idalina Vinuto</p>
                    <p className="text-gray-600">CRP 11/07872</p>
                </h5>
            </div>

            {/* Coluna da imagem */}
            <div className="flex justify-center md:justify-end">
                <Image
                    className="rounded-lg w-48 h-auto object-cover"
                    src={bustoidalina} // Substitua pelo caminho correto da imagem
                    alt="Foto de Idalina Vinuto"
                />
            </div>
        </div>

    )
}