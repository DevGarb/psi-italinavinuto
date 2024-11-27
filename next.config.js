/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Desativa a otimização automática para imagens
    },
    assetPrefix: './', // Garante que os caminhos sejam relativos
};

module.exports = nextConfig;
