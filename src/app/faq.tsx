import React, { useState } from 'react';

const FAQSection: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'Você faz psicoterapia na clínica e nas empresas você atende também?',
            answer: 'Não faço atendimentos nas empresas. Para isso trabalho a saúde mental corporativa alinhada com minhas soluções.'
        },
        // Adicione mais perguntas e respostas conforme necessário
    ];

    return (
        <section className="container w-full py-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Título e Subtítulo */}
            <div className="flex flex-col max-sm:text-center basis-1/2">
                <p className="font-playfair text-4xl font-semibold mb-4 text-base-content">Dúvidas Frequentes</p>
                <p className="inline-block font-semibold text-[#B29480] ">Clique na pergunta para tirar sua dúvida.</p>
            </div>

            {/* FAQ List */}
            <ul className="basis-1/2">
                {faqs.map((faq, index) => (
                    <li key={index} className="border-l-4 rounded-lg overflow-hidden" style={{ borderColor: expandedIndex === index ? '#A97155' : '#A97155' }}>
                        <button
                            className={`relative flex gap-2 items-center w-full p-4 text-base font-semibold text-left rounded-lg border transition-colors ${expandedIndex === index ? 'bg-[#E9DDD1] text-black border-[#E9DDD1]' : 'bg-white text-black border-gray-200'
                                }`}
                            aria-expanded={expandedIndex === index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="flex-1">{faq.question}</span>
                            {/* Ícone de expansão */}
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${expandedIndex === index ? 'rotate-90' : ''}`}
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="7" width="16" height="2" rx="1" className="fill-current"></rect>
                                <rect y="7" width="16" height="2" rx="1" className="transform rotate-90 fill-current"></rect>
                            </svg>
                        </button>
                        {/* Resposta */}
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                            style={{ transition: 'max-height 0.3s ease-in-out' }}
                        >
                            <div className="p-4 bg-[#F5EFE8] text-black">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FAQSection;
