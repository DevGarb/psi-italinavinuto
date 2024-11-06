// components/MentalHealthSection.tsx
import React from 'react';
import Image from 'next/image'
import "@fontsource/playfair-display"
import Health from '../assets/img/health.jpeg'


const MentalHealthSection: React.FC = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white">
      <div className="col-span-2 space-y-6">
        <div className='mb-20 col-span-1'>
          <h2 className="font-playfair text-2xl font-semibold text-gray-900 ">
            Como promovemos uma melhora da saúde mental no trabalho
          </h2>
          <p className="text-lg text-orange-600 font-semibold">
            Transformando o dia a dia da empresa
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg flex items-start space-x-4">
          <div className="text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 13.5c-4.697 0-8.5-3.803-8.5-8.5S7.303 4.5 12 4.5 20.5 8.303 20.5 13s-3.803 8.5-8.5 8.5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Técnicas Comportamentais</h3>
            <p className="text-gray-700">
              Utilizamos diversas técnicas comportamentais, como o mindfulness, que contribuem no ambiente de trabalho, ajudando a reduzir o estresse e aumentar a produtividade.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg flex items-start space-x-4">
          <div className="text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-18a10 10 0 110 20 10 10 0 010-20zm3.293 12.293l-3.293-3.293-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Gestão de Apoio</h3>
            <p className="text-gray-700">
              Gestores têm o papel fundamental de promover uma cultura de apoio e compreensão, onde os colaboradores possam se sentir à vontade para buscar ajuda.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          className="rounded-lg object-cover w-full"
          src={Health} // Substitua pelo caminho correto da imagem
          alt="Imagem representando saúde mental no trabalho"
        />
        {/* <img
          src="/path/to/image.jpg"
          alt="Imagem representando saúde mental no trabalho"
          className="rounded-lg object-cover w-full h-full"
        /> */}
      </div>
    </section>
  );
};

export default MentalHealthSection;
