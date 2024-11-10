import React from "react";
import "@fontsource/playfair-display"


const Blog = () => {
    return (
        <>
            <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="px-2">
                            <div className="mx-auto mb-[60px] max-w-[710px] lg:mb-20">
                                <p className="mb-4 text-5xl font-bold font-playfair text-dark">
                                    Soluções estratégicas que entregamos para sua empresa
                                </p>
                                <p className="font-semibold text-[#945D38] ">
                                    Criamos de forma personalizada com base na cultura e no negócio
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Palestras para Empresas"
                            CardDescription="Educamos sua empresa sobre Saúde Mental abordando temas relevantes para o seu negócio"
                            image="https://i.ibb.co/xHxZpWY/Group-5.png"
                        />
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Treinamento e Workshop de Liderança e Gestão"
                            CardDescription="Capacitamos líderes que facilitem a saúde mental promovendo uma cultura de apoio, empatia e bem-estar."
                            image="https://i.ibb.co/XVZkBsD/Group-6.png"
                        />
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Desenvolvimento de Políticas de Bem-Estar"
                            CardDescription="Criamos programas para equilibrar vida profissional e pessoal, com políticas alinhadas à NR1 e ao Certificado de Empresa Promotora de Saúde Mental."
                            image="https://i.ibb.co/cwT2n5j/Group-7.png"
                        />
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Mentoria para profissionais"
                            CardDescription="Desenvolvimento profissional com foco em competências comportamentais cruciais em suas carreiras."
                            image="https://i.ibb.co/dGQ0YPm/Group-8.png"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;

const BlogCard: React.FC<{ image: string; date: string; CardTitle: string; CardDescription: string }> = ({ image, date, CardTitle, CardDescription }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="mb-10 w-full">
                    <div className="mb-8 overflow-hidden rounded">
                        <img src={image} alt="" className="w-full" />
                    </div>
                    <div>
                        {/* {date && (
                            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                                {date}
                            </span>
                        )} */}
                        <h3>
                            <a
                                href="/#"
                                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-[#241B0F] sm:text-2xl lg:text-xl xl:text-2xl"
                            >
                                {CardTitle}
                            </a>
                        </h3>
                        <p className="text-base text-body-color ">
                            {CardDescription}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
