import React, { useState } from "react";

const NewsCarousel: React.FC = () => {
    const [translateX, setTranslateX] = useState(0);

    const handleSlide = (direction: "left" | "right") => {
        const containerWidth = 300; // Largura de cada card (ajuste conforme necessário)
        const maxTranslate = -containerWidth * (8 - 1); // Quantidade máxima de deslocamento (4 cards)

        if (direction === "left") {
            setTranslateX((prev) => Math.min(prev + containerWidth, 0)); // Evita deslizar além do início
        } else {
            setTranslateX((prev) => Math.max(prev - containerWidth, maxTranslate)); // Evita deslizar além do final
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="relative mb-20 flex">
                <h2 className="text-2xl font-bold mb-4">Últimas notícias</h2>
                {/* Botões de navegação */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md"
                    onClick={() => handleSlide("left")}
                >
                    &#8592;
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md"
                    onClick={() => handleSlide("right")}
                >
                    &#8594;
                </button>

            </div>
            {/* Cards deslizáveis */}
            <div className="overflow-hidden my-12">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {[
                        { logo: "Veja", text: "Plataforma inédita monitora transformação digital nos serviços públicos" },
                        { logo: "InfoMoney", text: "Com novo CEO, Valid quer reforçar presença no mercado de chips virtuais" },
                        { logo: "Valor", text: "Saiba quais locais se destacam no ranking de competitividade em gestão pública" },
                        { logo: "Exame", text: "Como o poder público brasileiro pode governar de forma mais inteligente" },
                        { logo: "Veja", text: "Plataforma inédita monitora transformação digital nos serviços públicos" },
                        { logo: "InfoMoney", text: "Com novo CEO, Valid quer reforçar presença no mercado de chips virtuais" },
                        { logo: "Valor", text: "Saiba quais locais se destacam no ranking de competitividade em gestão pública" },
                        { logo: "Exame", text: "Como o poder público brasileiro pode governar de forma mais inteligente" },
                    ].map((news, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] max-w-[300px] bg-gray-100 border rounded-lg p-4 mx-2"
                        >
                            <div className="text-center text-xl font-bold mb-2">{news.logo}</div>
                            <p className="text-sm text-gray-700">{news.text}</p>
                            <a href="#" className="text-blue-500 text-sm mt-2 block">
                                saiba mais &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsCarousel;
