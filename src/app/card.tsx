import React from "react";
import "@fontsource/playfair-display"
import Avaliações from "./avaliations";


const Blog = () => {
    return (
        <>
            <section className="max-sm:bg-white bg-[#F2F2F2] py-12">

                <div className="-mx-4 flex flex-wrap container max-sm:ml-2 sm:ml-14">
                    <div className="px-2">
                        <div className="mx-auto  max-w-[710px] mb-12">
                            <p className="max-sm:hidden mb-4 text-4xl font-bold font-playfair text-dark max-sm:text-center">
                                Soluções estratégicas que <br />entregamos para sua empresa
                            </p>
                            <p className=" sm:hidden mb-4 text-4xl font-bold font-playfair text-dark max-sm:text-center">
                                Soluções estratégicas que entregamos <br />para sua empresa
                            </p>
                            <p className=" font-semibold text-[#945D38] max-sm:text-center">
                                Criamos de forma personalizada com base na cultura e no negócio
                            </p>
                        </div>
                    </div>
                </div>
                <Avaliações />

                {/* <div className="-mx-4 flex flex-wrap">
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Palestras"
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
                            CardTitle="Desenvolvimento de Programas de Bem-Estar"
                            CardDescription="Criamos programas para equilibrar vida profissional e pessoal, com políticas alinhadas à NR1 e ao Certificado de Empresa Promotora de Saúde Mental."
                            image="https://i.ibb.co/R02rfZd/Group-7-1.png"
                        />
                        <BlogCard
                            date="28 Ago, 2024"
                            CardTitle="Mentoria para profissionais"
                            CardDescription="Desenvolvimento profissional com foco em competências comportamentais cruciais em suas carreiras."
                            image="https://i.ibb.co/dGQ0YPm/Group-8.png"
                        />
                    </div> */}
            </section>
        </>
    );
};

export default Blog;

const BlogCard: React.FC<{ image: string; date: string; CardTitle: string; CardDescription: string }> = ({ image, date, CardTitle, CardDescription }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            </div>
        </>
    );
};

// <div className="mb-8 w-full">
//     <div className="mb-8 overflow-hidden rounded">
//         <img src={image} alt="" className="w-full" />
//     </div>
//     <div>
//         {/* {date && (
//             <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
//                 {date}
//             </span>
//         )} */}
//         <h3>
//             <a
//                 className="mb-4 inline-block text-xl font-semibold text-dark hover:text-[#241B0F] sm:text-2xl lg:text-xl xl:text-2xl"
//             >
//                 {CardTitle}
//             </a>
//         </h3>
//         <p className="text-base text-body-color ">
//             {CardDescription}
//         </p>
//     </div>
// </div>