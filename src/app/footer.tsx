import React from 'react';
export default function footer() {
    return (
        <footer className="bg-[#241B0F] text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 font-playfair">
                <div className="border-t border-gray-500 pt-4 text-2xl tracking-wider">
                    <h1 className="font-bold">
                        <a href="https://www.instagram.com/idalinavinuto.psi/" target='blank'>
                            Instagram
                        </a>
                    </h1>
                </div>
                <div className="border-t border-gray-500 pt-4 text-2xl tracking-wider">
                    <h1 className="font-bold">
                        <a href="https://www.linkedin.com/in/idalina-vinuto-a3009856">
                            LinkedIn
                        </a>
                    </h1>
                </div>
                <div className="border-t border-gray-500 pt-4 text-2xl tracking-wider">
                    <h1 className="font-bold">
                        <a href="https://wa.me/5585999173647?text=Oi,%20Agende%20agora%20sua%20consulta."
                            target="_blank">
                            WhatsApp
                        </a>
                    </h1>
                </div>
            </div>
            <div className="container mt-28 flex flex-col md:flex-row text-center justify-between  text-sm text-gray-400">
                <span>Direitos Reservados © 2024</span>
                <span>Desenvolvido por
                    <a href='https://www.linkedin.com/in/nildodias/' target='blank' className='mx-2 underline tracking-widest'>
                        Nildo Dias
                    </a>
                    &
                    <a href='https://www.instagram.com/gabrielcporto' target='blank' className='mx-2 underline tracking-widest'>
                        Gabriel Porto
                    </a>
                </span>
            </div>
        </footer>
    );
};


