import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

const feedbackCardsData = [
    {
        feedback: "1 Idalina é muito atenciosa com o time, escuta a todos com muito respeito e age sempre com bastante proatividade. ",
        feedbacksub: "Além disso, a dedicação em manter um ambiente de trabalho harmonioso é notável. Sua abordagem empática e sua habilidade em encontrar soluções criativas tornam o dia a dia mais leve.",
        client: "Cliente Corporativo B",
        color: "bg-yellow-200",
    },
    {
        feedback: "2 Idalina é uma das profissionais de Gestão de Pessoas com maior capacidade de execução que já conheci. Sua capacidade de colocar em ação os projetos é algo extraordinário! Com habilidades humanas incríveis consegue implementar objetivos e ações práticas com velocidade e excelentes resultados.",
        feedbacksub: "teste",
        client: "Cliente Corporativo S",
        color: "bg-blue-200",
    },
    {
        feedback: "3 Profissional dinâmica e realizadora, comprometida com o seu trabalho. Seu foco em resultados concretos e na realização de tarefas que trabalham alinhadas com as estratégias de responsabilidade e sua atuação clara a tornam ideal para cargos de confiança.",
        feedbacksub: "teste",
        client: "Cliente Corporativo V",
        color: "bg-gray-200",
    },
    {
        feedback: "4 O acompanhamento psicológico com a Idalina vem sendo muito positivo para mim. Nesse processo estou aprendendo a lidar com algumas situações que antes eram difíceis para mim e vem contribuindo para que eu me liberte de algumas crenças desnecessárias.",
        feedbacksub: "teste",
        client: "Cliente Clínica I",
        color: "bg-yellow-200",
    },
    {
        feedback: "5 O atendimento da Idalina realmente me mudou, mudou a forma através da qual eu vejo as minhas questões e é, através dessa orientação psicológica, que eu venho aprendendo a substituir a raiva, o choro, o desespero, a tristeza, etc; pelo entendimento, pela reflexão, pelas atitudes mais assertivas. ",
        client: "Cliente Clínica S",
        feedbacksub: "teste",
        color: "bg-green-200",
    },
    {
        feedback: "6 Gostaria de expressar minha profunda gratidão pelo apoio que recebi da Idalina  durante um dos momentos mais difíceis da minha vida. Enfrentar um burnout em um ambiente de trabalho com uma cultura tóxica foi devastador para mim, tanto física quanto emocionalmente.",
        client: "Cliente Clínica B",
        feedbacksub: "teste",
        color: "bg-blue-200",
    },
    {
        feedback: "7 Tenho o prazer de recomendar Idalina, uma profissional incrível, que realmente faz a diferença onde atua. Ela é extremamente comprometida e sempre focada em entregar resultados concretos. Mas o que mais me chama atenção é o seu senso de responsabilidade e a confiança que transmite. Fico tranquila em indicá-la porque sei que ela sempre entrega o melhor.",
        client: "Cliente Corporativa V",
        feedbacksub: "teste",
        color: "bg-green-200",
    },
    {
        feedback: "8 Se você busca acolhimento e resultados no cuidado com a sua saúde mental, recomendo de coração o atendimento da Idalina. Com uma abordagem humanizada e focada em você, ela faz toda a diferença!",
        client: "Cliente Clínica V",
        feedbacksub: "teste",
        color: "bg-yellow-200",
    },
];


export default function Feedbacks() {
    return (
        <section className=''>
            <div className='container py-12 max-sm:text-center'>
                <div className='flex flex-col gap-8'>
                    <span className='text-4xl font-playfair font-semibold tracking-wide'>
                        Confira o que nossos <br /> clientes tem a dizer
                    </span>
                    <span className='text-lg text-[#945D38] font-semibold max-sm:text-center'>
                        Depoimentos de clientes reais
                    </span>
                </div>
            </div>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                slidesPerView={3}
                className="mySwiper container"
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
                }}
            >
                {feedbackCardsData.slice(0, 4).map((feedback, index) => (
                    <SwiperSlide key={index}>
                        <FeedbackCard
                            feedback={feedback.feedback}
                            feedbacksub={feedback.feedbacksub}
                            client={feedback.client}
                            color={feedback.color}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            <Swiper
                scrollbar={{
                    hide: false,
                }}
                modules={[Scrollbar]}
                slidesPerView={3}
                className="mySwiper container"
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
                }}
            >
                {feedbackCardsData.slice(4, 8).map((feedback, index) => (
                    <SwiperSlide className='mb-14 ' key={index}>
                        <FeedbackCard2
                            feedback={feedback.feedback}
                            client={feedback.client}
                            color={feedback.color}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


        </section>
    );
};

const FeedbackCard: React.FC<{
    feedback: string;
    feedbacksub: string;
    client: string;
    color: string;
}> = ({ feedback, client, color, feedbacksub }) => {
    return (
        <section className='container'>
            <div className="grid grid-cols-1 py-2 mb-4">
                <div className="bg-[#F2F2F2] shadow-lg rounded-lg p-6 flex flex-col justify-between h-[300px] "
                >
                    <p className="text-gray-800 mb-1 text-sm text-left">{feedback}</p>
                    <p className="text-gray-800 mb-4 text-sm text-left">{feedbacksub}</p>
                    <div className="flex items-center">
                        <span
                            className={`w-4 h-4 rounded-full mr-2 ${color}`}
                        ></span>
                        <p className="text-gray-600 font-semibold">{client}</p>
                    </div>
                </div>
            </div>




            {/* <div className="py-12 mb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-[#F2F2F2] shadow-lg rounded-lg p-6 flex flex-col justify-between"
                        >
                            <p className="text-gray-800 mb-4">{feedback}</p>
                            <div className="flex items-center">
                                <span
                                    className={`w-4 h-4 rounded-full mr-2 ${color}`}
                                ></span>
                                <p className="text-gray-600 font-semibold">{client}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

const FeedbackCard2: React.FC<{
    feedback: string;
    client: string;
    color: string;
}> = ({ feedback, client, color }) => {
    return (
        <section className='container'>
            <div className="grid grid-cols-1 py-2 mb-4">
            <div className="bg-[#F2F2F2] shadow-lg rounded-lg p-6 flex flex-col justify-between h-[300px] 3xl:w-[490px]"
                >
                    <p className="text-gray-800 mb-4 text-sm text-left">{feedback}</p>
                    <div className="flex items-center">
                        <span
                            className={`w-4 h-4 rounded-full mr-2 ${color}`}
                        ></span>
                        <p className="text-gray-600 font-semibold">{client}</p>
                    </div>
                </div>

            </div>


            {/* <div className="py-12 mb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-[#F2F2F2] shadow-lg rounded-lg p-6 flex flex-col justify-between"
                        >
                            <p className="text-gray-800 mb-4">{feedback}</p>
                            <div className="flex items-center">
                                <span
                                    className={`w-4 h-4 rounded-full mr-2 ${color}`}
                                ></span>
                                <p className="text-gray-600 font-semibold">{client}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}






