import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

const feedbackCardsData = [
    {
        feedback: "Idalina é muito atenciosa com o time, escuta a todos com muito respeito e age sempre com bastante proatividade. ",
        feedbacksub: "Além disso, a dedicação em manter um ambiente de trabalho harmonioso é notável. Sua abordagem empática e sua habilidade em encontrar soluções criativas tornam o dia a dia mais leve.",
        client: "Cliente Corporativo B",
        color: "bg-yellow-200",
    },
    {
        feedback: "Idalina é uma das profissionais de Gestão de Pessoas com maior capacidade de execução que eu já conheci.",
        feedbacksub: "Sua capacidade de colocar em ação os projetos é algo extraordinário! Com habilidades humanas incríveis consegue implementar objetivos e ações estratégicas com velocidade e excelentes resultados.",
        client: "Cliente Corporativo S",
        color: "bg-blue-200",
    },
    {
        feedback: "Profissional dinâmica e realizadora, inteiramente comprometida com o seu trabalho.",
        feedbacksub: "Seu foco em resultados concretos permite à empresa em que trabalha alcançar metas e objetivos. Por seu alto senso de responsabilidade e sua alta credibilidade, considero-a ideal para cargos de confiança. ",
        client: "Cliente Corporativo V",
        color: "bg-gray-200",
    },
    {
        feedback: "Gostaria de expressar minha profunda gratidão pelo apoio que recebi da Idalina  durante um dos momentos mais difíceis da minha vida. Enfrentar um burnout em um ambiente de trabalho com uma cultura tóxica foi devastador para mim, tanto física quanto emocionalmente.",
        feedbacksub: "No entanto, com sua orientação, consegui entender melhor os sinais que meu corpo e minha mente estavam enviando, além de desenvolver ferramentas para lidar com o estresse e recuperar minha saúde mental.",
        client: "Cliente Corporativo V",
        color: "bg-green-200",
    },
    {
        feedback: "Tenho o prazer de recomendar Idalina, uma profissional incrível, que realmente faz a diferença onde atua.",
        feedbacksub: "Ela é extremamente comprometida e sempre focada em entregar resultados concretos. Mas o que mais me chama atenção é o seu senso de responsabilidade e a confiança que transmite. Fico tranquila em indicá-la porque sei que ela sempre entrega o melhor. ",
        client: "Cliente Clínica I",
        color: "bg-yellow-200",
    },
    {
        feedback: "O acompanhamento psicológico com a Idalina vem sendo muito positivo para mim",
        feedbacksub: "Nesse processo estou aprendendo a lidar com algumas situações que antes eram difíceis para mim e vem contribuindo para que eu me liberte de algumas crenças desnecessárias.",
        client: "Cliente Clínica S",
        color: "bg-green-200",
    },
    {
        feedback: "O atendimento da Idalina realmente me mudou, mudou a forma através da qual eu vejo as minhas questões e é, através dessa orientação psicológica, que eu venho aprendendo a substituir a raiva, o choro, o desespero, a tristeza, etc; pelo entendimento, pela reflexão, pelas atitudes mais assertivas. ",
        feedbacksub: "",
        client: "Cliente Clínica B",
        color: "bg-blue-200",
    },
   
    {
        feedback: "Se você busca acolhimento e resultados no cuidado com a sua saúde mental, recomendo de coração o atendimento da Idalina.",
        feedbacksub: "Com uma abordagem humanizada e focada em você, ela faz toda a diferença!",
        client: "Cliente Clínica V",
        color: "bg-yellow-200",
    },
];


export default function Feedbacks() {
    return (
        <section className='container'>
            <div className='py-12 max-sm:text-center'>
                <div className='flex flex-col'>
                    <span className='text-3xl font-playfair font-semibold tracking-wide mb-4'>
                        Confira o que nossos <br /> clientes tem a dizer
                    </span>
                    <span className='text-base text-[#945D38] font-semibold max-sm:text-center'>
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
                className="mySwiper"
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
                    <SwiperSlide className='mb-2' key={index}>
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
                className="mySwiper"
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
                    <SwiperSlide className='mb-2 mt-2' key={index}>
                        <FeedbackCard2
                            feedback={feedback.feedback}
                            feedbacksub={feedback.feedbacksub}
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
        <section className=''>
            <div className="grid grid-cols-1 py-2 mb-4 p-4">
                <div className="bg-[#F2F2F2] shadow-md rounded-lg p-6 h-[300px] flex flex-col justify-around"
                >
                    <span className="text-gray-800 text-sm text-left">{feedback}</span>

                    <span className="text-gray-800 text-sm text-left">{feedbacksub}</span>

                    <div className="flex items-center">
                        <span
                            className={`w-4 h-4 rounded-full mr-2 ${color}`}
                        ></span>
                        <p className="text-gray-600 font-semibold">{client}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FeedbackCard2: React.FC<{
    feedback: string;
    feedbacksub: string;
    client: string;
    color: string;
}> = ({ feedback, feedbacksub, client, color }) => {
    return (
        <section className=''>
            <div className="grid grid-cols-1 py-2 mb-4 p-4">
                <div className="bg-[#F2F2F2] shadow-md rounded-lg p-6 h-[300px] flex flex-col justify-around"
                >
                    <span className="text-gray-800 text-sm text-left">{feedback}</span>

                    <span className="text-gray-800 text-sm text-left">{feedbacksub}</span>
                    <div className="flex items-center">
                        <span
                            className={`w-4 h-4 rounded-full mr-2 ${color}`}
                        ></span>
                        <p className="text-gray-600 font-semibold">{client}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}






