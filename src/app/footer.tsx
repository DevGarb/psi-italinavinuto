import React from 'react';
export default function footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 font-playfair font-semibold ">
                <div className="border-t border-gray-500 pt-4 text-2xl tracking-wider">
                    <h1 className="font-semibold">Instagram</h1>
                </div>
                <div className="border-t border-gray-500 pt-4 text-2xl tracking-wider">
                    <h1 className="font-semibold">LinkedIn</h1>
                </div>
                <div className="border-t border-gray-500 pt-4 text-2xl tracking-wider">
                    <h1 className="font-semibold">WhatsApp</h1>
                </div>
            </div>
            <div className="container mx-auto mt-28 flex flex-col md:flex-row justify-between text-center text-sm text-gray-400">
                <span>Direitos Reservados © 2024</span>
                <span>Desenvolvido por Nildo Dias & Gabriel Porto</span>
            </div>
        </footer>
    );
};

