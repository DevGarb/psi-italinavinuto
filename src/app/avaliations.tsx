import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

// Dados dos cartões
const blogCardsData = [
    {
        image: "https://i.ibb.co/xHxZpWY/Group-5.png",
        title: "Palestras",
        description: "Educamos sua empresa sobre Saúde Mental abordando temas relevantes para o seu negócio.",
    },
    {
        image: "https://i.ibb.co/XVZkBsD/Group-6.png",
        title: "Treinamento e Workshop de Liderança e Gestão",
        description: "Capacitamos líderes que facilitem a saúde mental promovendo uma cultura de apoio, empatia e bem-estar.",
    },
    {
        image: "https://i.ibb.co/cwT2n5j/Group-7.png",
        title: "Desenvolvimento de Programas de Bem-Estar",
        description: "Criamos programas para equilibrar vida profissional e pessoal, com políticas alinhadas à NR1 e ao Certificado de Empresa Promotora de Saúde Mental.",
    },
    {
        image: "https://i.ibb.co/dGQ0YPm/Group-8.png",
        title: "Mentoria para profissionais",
        description: "Desenvolvimento profissional com foco em competências comportamentais cruciais em suas carreiras.",
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
            <div className="">
                <div className="flex flex-col w-[330px] h-[390px] shadow-btn rounded-lg my-12 mx-16 items-center ">
                    {/* Imagem */}
                    <div className="w-full h-40 mb-4">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                    {/* Título */}
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold text-dark mb-2">{title}</h3>
                        {/* Descrição */}
                        <p className="text-base text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
