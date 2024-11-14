import React from "react";
import "@fontsource/playfair-display"
import Avaliações from "./avaliations";


const Blog = () => {
    return (
        <>
            <section className="container my-12">

                <div className="flex flex-wrap sm:ml-2">
                    <div className="px-2">
                        <div className="mx-auto  max-w-[710px] mb-12">
                            <p className="max-sm:hidden mb-4 text-3xl font-bold font-playfair text-dark max-sm:text-center">
                                Soluções estratégicas que <br />entregamos para sua empresa
                            </p>
                            <p className=" sm:hidden mb-4 text-3xl font-bold font-playfair text-dark max-sm:text-center">
                                Soluções estratégicas que entregamos <br />para sua empresa
                            </p>
                            <p className=" font-semibold text-[#945D38] max-sm:text-center">
                                Criamos de forma personalizada com base na cultura e no negócio
                            </p>
                        </div>
                    </div>
                </div>
                <Avaliações />
            </section>
        </>
    );
};

export default Blog;
