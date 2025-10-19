import React from "react";
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

// Dados dos cartões
const blogCardsData = [
    {
        image: "https://i.ibb.co/xHxZpWY/Group-5.png",
        title: "Palestras, Treinamento e Workshop",
        description: "Capacitamos empresas e líderes a cultivar uma cultura de apoio, empatia e bem-estar, promovendo um ambiente de trabalho saudável para o time.",
    },
    {
        image: "https://i.ibb.co/XVZkBsD/Group-6.png",
        title: "Plantão Psicológico",
        description: "Oferecemos plantão psicológico com acolhimento, garantindo suporte emocional e bem-estar para a sua empresa.",
    },
    {
        image: "https://i.ibb.co/cwT2n5j/Group-7.png",
        title: "Desenvolvimento de Programas de Bem-Estar",
        description: "Criamos programas para equilibrar vida profissional e pessoal com políticas alinhadas a NR1 (Riscos Psicossociais) e ao Certificado de Empresa Promotora de Saúde Mental (Lei 14/831)"
    },
    {
        image: "https://i.ibb.co/dGQ0YPm/Group-8.png",
        title: "Mentoria para profissionais",
        description: "Desenvolvimento profissional com foco em aprimorar soft skills essenciais ao sucesso da sua carreira.",
    },
    {
        image: "https://i.ibb.co/VWHqsXyz/Group9.png",
        title: "Mapeamento e gerenciamento dos Riscos Psicossociais/NR1",
        description: "Avaliação integrada dos fatores de riscos psicossociais nas empresas, unindo métricas qualitativas e quantitativas a painéis de BI para gerar insights estratégicos e atender às exigências da NR-01.",
    },
];

const avaliations = () => {
    return (
        <Swiper
            scrollbar={{
                hide: false,
            }}
            modules={[Scrollbar]}
            className="mySwiper justify-start"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            }}

        >
            {blogCardsData.map((card, index) => (
                <SwiperSlide key={index}>
                    <BlogCard
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default avaliations;

// Componente BlogCard
const BlogCard: React.FC<{
    image: string;
    title: string;
    description: string;
}> = ({ image, title, description }) => {
    return (
        <>
            <div className="container">
                <div className="flex flex-col h-[350px] rounded-lg  items-center shadow-lg mb-10">
                    {/* Imagem */}
                    <div className="w-full h-40">
                        <Image src={image} width={30} height={30} alt={title} className="w-full h-full object-cover" />
                    </div>
                    {/* Título */}
                    <div className="p-4">
                        <h3 className="text-base font-semibold text-dark mb-2">{title}</h3>
                        {/* Descrição */}
                        <p className="text-[14px] text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
