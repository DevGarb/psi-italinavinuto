// components/MentalHealthSection.tsx
import React from 'react';
import Image from 'next/image'
import "@fontsource/playfair-display"

import Health from '../../public/img/health.png'
import { LuHeartHandshake } from 'react-icons/lu';
import { BsBagPlus } from 'react-icons/bs';


const MentalHealthSection: React.FC = () => {
  return (
    <section className='bg-[#F2F2F2]'>
      <div className="container grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8 py-12 bg-[#F2F2F2]">
        <div className="col-span-2">
          <div className='mb-10 col-span-1'>
            <p className="max-sm:hidden font-playfair text-3xl font-semibold text-gray-900 mb-4 max-sm:text-center">
              Como promovemos uma melhora<br /> da saúde mental no trabalho
            </p>
            <p className="sm:hidden font-playfair text-3xl font-semibold text-gray-900  max-sm:text-center mb-4">
              Como promovemos <br />uma melhora da saúde mental no trabalho
            </p>
            <p className="text-base text-[#945D38] font-semibold max-sm:text-center">
              Transformando o dia a dia da empresa
            </p>
          </div>
          <div className="md:hidden flex justify-center items-center">
            <Image
              className="rounded-lg object-cover w-full mb-6"
              src={Health}
              alt="Imagem representando saúde mental no trabalho"
              unoptimized
            />
          </div>
          <div className='flex'>
            <div className='flex-col flex max-sm:justify-between'>
              <div className="bg-white p-7 rounded-lg flex items-center mb-9">
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
              <div className="bg-white p-7 rounded-lg flex items-center">
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
                    Capacitamos gestores para promover uma cultura de apoio e compreensão, onde os colaboradores sintam-se seguros e encorajados a buscar ajuda.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-lg:hidden flex ml-5 w-3/4">
              <Image
                className="rounded-lg object-contain w-screen"
                src={Health} // Substitua pelo caminho correto da imagem
                alt="Imagem representando saúde mental no trabalho"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MentalHealthSection;
