import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

// Dados dos feedbacks
const feedbackCardsData = [
    {
        feedback: "Idalina é muito atenciosa com o time, escuta a todos com muito respeito e age sempre com bastante proatividade.",
        client: "Cliente Corporativo B",
    },
    {
        feedback: "Idalina é uma das profissionais de Gestão de Pessoas com maior capacidade de execução que já conheci.",
        client: "Cliente Corporativo S",
    },
    {
        feedback: "O acompanhamento psicológico com a Idalina vem sendo muito positivo para mim.",
        client: "Cliente Clínica I",
    },
    {
        feedback: "O atendimento da Idalina realmente me mudou, mudou a forma através da qual eu vejo as minhas questões.",
        client: "Cliente Clínica S",
    },
    {
        feedback: "Gostaria de expressar minha gratidão pelo atendimento que recebi da Idalina durante um momento difícil.",
        client: "Cliente Clínica B",
    },
    {
        feedback: "Profissional dinâmica e realizadora, sempre comprometida com o seu trabalho.",
        client: "Cliente Corporativo V",
    },
    {
        feedback: "O atendimento da Idalina realmente me mudou, mudou a forma através da qual eu vejo as minhas questões.",
        client: "Cliente Clínica S",
    },
    {
        feedback: "Gostaria de expressar minha gratidão pelo atendimento que recebi da Idalina durante um momento difícil.",
        client: "Cliente Clínica B",
    },

];

const Avaliations = () => {
    return (
        <div className="flex flex-col items-center gap-6">

                {/* Linha superior: 3 primeiros feedbacks */}
                <Swiper
                    scrollbar={{
                        hide: false,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {feedbackCardsData.slice(0, 4).map((feedback, index) => (
                        <SwiperSlide key={index}>
                            <FeedbackCard
                                feedback={feedback.feedback}
                                client={feedback.client}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Linha inferior: 3 últimos feedbacks */}
                <Swiper
                    scrollbar={{
                        hide: false,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"

                >
                    {feedbackCardsData.slice(4, 8).map((feedback, index) => (
                        <SwiperSlide key={index}>
                            <FeedbackCard
                                feedback={feedback.feedback}
                                client={feedback.client}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    );
};

export default Avaliations;

// Componente FeedbackCard
const FeedbackCard: React.FC<{
    feedback: string;
    client: string;
}> = ({ feedback, client }) => {
    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg p-6 w-[300px] h-[250px]">
            <p className="text-gray-700 text-sm mb-4">{feedback}</p>
            <span className="text-sm font-semibold text-primary mt-auto">{client}</span>
        </div>
    );
};
