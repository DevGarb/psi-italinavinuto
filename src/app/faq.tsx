import React, { useState } from 'react';

const FAQSection: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'Quais os benefícios da TCC?',
            answer: 'Eficácia Comprovada: A TCC é amplamente reconhecida por sua eficácia no tratamento de uma variedade de transtornos psicológicos, incluindo depressão, ansiedade, transtornos alimentares e fobias. Foco no Presente: A TCC é uma terapia que se concentra em resolver problemas atuais, ao invés de explorar extensivamente o passado do paciente. Ferramentas Práticas: Os pacientes aprendem habilidades práticas que podem ser usadas para lidar com desafios futuros, promovendo a autonomia e resiliência.'
        },
        {
            question: 'Como funciona a terapia cognitivo comportamental?',
            answer: 'É uma abordagem terapêutica que visa ajudar as pessoas a identificar e modificar padrões que chamamos de crenças, assim como também os pensamentos e comportamentos que causam sofrimento emocional. Criada na década de 1960 pelo psiquiatra Aaron Beck, a TCC é baseada na ideia de que nossos pensamentos, emoções e comportamentos estão interligados. Importante mencionar que a TCC é uma abordagem estruturada e baseada em evidências que pode oferecer suporte significativo na melhoria da sua saúde mental e bem-estar.'
        },
        {
            question: 'Como funcionam os atendimentos clínicos?',
            answer: 'Os atendimentos são pré agendados e ocorreram 1 vez na semana, duração de 50 min. Atendimento online e presencial (Cidade de Fortaleza/CE). Público alvo: Adulto e idoso.'
        },
        {
            question: 'Nunca fiz terapia com um psicólogo, como seria?',
            answer: 'A terapia é uma jornada de autoconhecimento e crescimento pessoal. Imagine um espaço seguro onde você pode explorar seus pensamentos e sentimentos sem julgamentos. O psicólogo está lá para te apoiar, oferecer novas perspectivas e ajudar a encontrar soluções para os desafios que você enfrenta. Cada sessão é uma oportunidade de se conectar mais profundamente consigo mesmo, aprender a lidar com emoções e desenvolver habilidades para uma vida mais equilibrada e feliz.Dar esse primeiro passo pode parecer desafiador, mas é um ato de coragem e cuidado consigo mesmo.Permita - se essa experiência transformadora e descubra o poder da terapia em sua vida'
        },
        {
            question: 'Entendendo a ANSIEDADE através da TCC:',
            answer: 'A ansiedade pode parecer uma sombra que segue seus passos, mas a Terapia Cognitiva Comportamental (TCC) oferece uma luz para dissipá-la. Na TCC, aprendemos que nossos pensamentos influenciam diretamente nossas emoções e comportamentos. A ansiedade muitas vezes surge de padrões de pensamento negativos e previsões catastróficas sobre o futuro, que podem não ser precisos ou úteis. Com a TCC, você tem o poder de mudar o curso de seus pensamentos e, por sua vez, de suas emoções e ações. Estou aqui para apoiá-lo nessa jornada de transformação.'
        },
        {
            question: 'Superando a DEPRESSÃO com a TCC',
            answer: 'A depressão pode fazer você se sentir como se estivesse preso em um túnel escuro, mas a Terapia Cognitiva Comportamental (TCC) oferece ferramentas para encontrar a luz. Na TCC, entendemos que a depressão é frequentemente alimentada por padrões de pensamento negativos identificando crenças como “nunca vou melhorar” ou “sou um fracasso”, e vamos desafiá-las. A TCC ajuda a reformular esses pensamentos, promovendo uma visão mais realista e positiva de si mesmo e do mundo ao seu redor'
        },
        {
            question: 'Enfrentando o TEPT com a TCC',
            answer: 'O Transtorno de Estresse Pós-Traumático (TEPT) pode fazer você se sentir refém de suas memórias, mas a Terapia Cognitiva Comportamental (TCC) oferece estratégias para retomar o controle. Na TCC, reconhecemos que o TEPT é muitas vezes mantido por pensamentos intrusivos e memórias dolorosas que podem parecer incontroláveis. Juntos, vamos identificar e compreender esses pensamentos e memórias, trabalhando para mudar a relação que você tem com eles.'
        },
        {
            question: 'Compreenda o Burnout com a TCC',
            answer: 'Você já se sentiu como uma bateria que nunca carrega completamente? Isso pode ser burnout! Mas não se preocupe, a Terapia Cognitivo-Comportamental (TCC) pode ser a chave para recarregar suas energias. A TCC ajuda a identificar e mudar padrões de pensamento negativos, promovendo uma visão mais equilibrada e saudável da vida. Imagine recuperar sua energia e motivação, aprendendo a lidar melhor com o estresse e a pressão do dia a dia. Não deixe o burnout controlar sua vida. Você merece se sentir pleno e feliz. Vamos juntos nessa jornada de recuperação e bem-estar!'
        },

    ];


    return (
        <section className=" bg-[#F2F2F2]">
            <div className="max-xl:container py-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 ">
                {/* Título e Subtítulo */}
                <div className="flex flex-col max-sm:text-center basis-1/2">
                    <p className="font-playfair text-4xl font-semibold mb-4 text-base-content">Dúvidas Frequentes</p>
                    <p className="inline-block font-semibold text-[#B29480] ">Clique na pergunta para tirar sua dúvida.</p>
                </div>

                {/* FAQ List */}
                <ul className="basis-1/2">
                    {faqs.map((faq, index) => (
                        <li key={index} className="border-l-4 rounded-lg overflow-hidden mb-2" style={{ borderColor: expandedIndex === index ? '#A97155' : '#A97155' }}>
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
            </div>
        </section>
    );
};

export default FAQSection;
