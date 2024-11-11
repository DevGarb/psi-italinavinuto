// components/MentalHealthSection.tsx
import React from 'react';
import Image from 'next/image'
import "@fontsource/playfair-display"
import Health from '../assets/img/health.jpeg'
import { LuHeartHandshake } from 'react-icons/lu';
import { BsBagPlus } from 'react-icons/bs';


const MentalHealthSection: React.FC = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8 p-8 bg-[#F2F2F2] md:bg-white">
      <div className="col-span-2 space-y-6">
        <div className='mb-20 col-span-1'>
          <p className="font-playfair text-5xl font-semibold text-gray-900 pb-12 max-sm:text-center">
            Como promovemos uma melhora <br />da saúde mental no trabalho
          </p>
          <p className="text-lg text-[#945D38] font-semibold max-sm:text-center">
            Transformando o dia a dia da empresa
          </p>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <Image
            className="rounded-lg object-cover w-full"
            src={Health}
            alt="Imagem representando saúde mental no trabalho"
          />
        </div>
        <div className='flex'>
          <div className='flex-col flex max-sm:justify-between'>
            <div className="max-sm:bg-white bg-[#F2F2F2] p-7 rounded-lg flex items-center mb-6">
              <div className="text-[#945D38]">
                <svg
                  className='w-10 h-auto text-[#945D38]'
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <LuHeartHandshake />
                </svg>
              </div>
              <div className='h-full'>
                <h3 className="text-lg font-semibold text-gray-900">Técnicas Comportamentais</h3>
                <p className="text-gray-700">
                  Utilizamos diversas técnicas comportamentais, como o mindfulness, que contribuem no ambiente de trabalho, ajudando a reduzir o estresse e aumentar a produtividade.
                </p>
              </div>
            </div>
            <div className="max-sm:bg-white bg-[#F2F2F2] p-7 rounded-lg flex items-center">
              <div className="text-[#945D38]">
                <svg
                  className='w-10 h-auto text-[#945D38]'
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <BsBagPlus />
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
          <div className="max-md:hidden flex ml-5 w-3/4">
            <Image
              className="rounded-lg object-cover w-screen"
              src={Health} // Substitua pelo caminho correto da imagem
              alt="Imagem representando saúde mental no trabalho"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default MentalHealthSection;
