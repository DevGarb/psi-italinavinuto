import React from 'react';
import Image from 'next/image'
import bgthree from '../assets/img/bgthree.png'
import bustoidalina from '../assets/img/bustoidalina.png'


export default function Agendamento() {
    return (
        <div className=" bg-[#241B0F] flex flex-col items-center justify-center text-center text-[#F2F2F2] px-4 bg-bottom bg-no-repeat py-20"
            style={{
                backgroundImage: `url(${bgthree.src})`
            }}>
            {/* Texto principal */}
            <div>

                <h1 className="font-playfair text-4xl md:text-5xl font-semibold mb-4">
                    Agende<br /> sua Consultoria <br /> hoje mesmo
                </h1>

                {/* Subtexto */}
                <p className="text-lg md:text-xl mb-8">
                    Comece agora a melhorar a cultura da sua <br />empresa
                    e a produtividade dos seus colaboradores
                </p>

            </div>
            {/* Botão */}
            <button className="flex items-center bg-[#F1CA52] text-black font-bold font-sans py-3 px-6 rounded-lg hover:bg-yellow-600 transition text-xl">
                {/* Ícone ou imagem dentro do botão */}
                <Image
                    className="rounded-full w-9 h-auto object-cover mr-4"
                    src={bustoidalina} // Substitua pelo caminho correto da imagem
                    alt="Foto de Idalina Vinuto"
                />
                <a href="https://wa.me/5585999173647?text=Oi,%20Agende%20agora%20sua%20consulta."
                    target="_blank">
                    Fale comigo agora
                </a>
            </button>
        </div>

    );
};

