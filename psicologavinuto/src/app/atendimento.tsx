import React from 'react';
import Image from 'next/image';

import Consultorio from '../assets/img/consultoriopsicologia.png'
import Wpp from '../assets/img/Wpp.png'

export default function Example() {
    return (
        <div className="bg-[#E6E2DD] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl mb-8  flex justify-center pr-60 pl-60 text-center">Atendimento Individual ou</h2>
                <h2 className="text-3xl mb-8  flex justify-center pr-60 pl-60 text-center">Consultoria em Saúde Mental Corporativa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#FFB699] rounded-lg shadow-lg p-8">
                        <div className="relative overflow-hidden">
                            <Image className="object-cover w-full h-full" src={Consultorio} alt="Product"
                                width={300}
                                height={300} />

                        </div>
                        <h3 className="text-xl font-bold mt-4">Psicóloga Idalina Vinuto: Atendimento Individual</h3>
                        <p className="text-sm mt-2">Como Psicóloga com mais de 10 anos de experiência atendendo adultos de 18 a 75 anos, sou Especialista em Burnout, auxilío no tratamento de depressão, ansiedade e estresse pós-traumático.</p>
                        <p className="text-sm mt-2"> Através da terapia trabalho para melhorar a relação entre pensamentos, emoções e comportamentos ajudando você a trilhar uma vida mais saudável e feliz.</p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="font-bold text-lg flex gap-3"><Image className='object-contain' src={Wpp} alt='' />Vamos dar o primeiro passo</span>
                        </div>
                    </div>
                    <div className="bg-[#FF7733] rounded-lg shadow-lg p-8">
                        <div className="relative overflow-hidden">
                            <Image className="object-cover w-full h-full" src={Consultorio} alt="Product"
                                width={300}
                                height={300} />
                        </div>
                        <h3 className="text-xl font-bold mt-4">Psicóloga Idalina Vinuto: Atendimento Individual</h3>
                        <p className="text-sm mt-2">Como Psicóloga com mais de 10 anos de experiência atendendo adultos de 18 a 75 anos, sou Especialista em Burnout, auxilío no tratamento de depressão, ansiedade e estresse pós-traumático.</p>
                        <p className="text-sm mt-2"> Através da terapia trabalho para melhorar a relação entre pensamentos, emoções e comportamentos ajudando você a trilhar uma vida mais saudável e feliz.</p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="font-bold text-lg">Vamos dar o primeiro passo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
