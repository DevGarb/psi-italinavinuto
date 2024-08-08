import React from "react";

const Blog = () => {
    return (
        <>
            <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="px-2">
                            <div className="mx-auto mb-[60px] max-w-[510px] lg:mb-20">
                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[30px]">
                                    Quais soluções estratégicas entregamos para sua empresa
                                </h2>
                                <p className="text-base text-yellow-500 ">
                                    Ajudamos seus colaboradores de forma personalizada
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Palestras para Empresas"
                            CardDescription="Educamos sua empresa sobre Saúde Mental abordando temas relevantes para o seu negócio"
                            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
                        />
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Treinamento e Workshop de Liderança e Gestão"
                            CardDescription="Capacitamos líderes que facilitem a saúde mental promovendo uma cultura de apoio, empatia e bem-estar."
                            image="https://i.ibb.co/Y23YC07/image-02.jpg"
                        />
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Desenvolvimento de Políticas de Bem-Estar"
                            CardDescription="Criamos programas para equilibrar vida profissional e pessoal, promovendo satisfação e retenção de talentos."
                            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
                        />
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Mentoria para profissionais"
                            CardDescription="Desenvolvimento profissional com foco em competências comportamentais cruciais em suas carreiras."
                            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
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
                        {date && (
                            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                                {date}
                            </span>
                        )}
                        <h3>
                            <a
                                href="/#"
                                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
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
