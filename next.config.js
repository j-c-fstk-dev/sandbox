// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Mantenha esta configuração

  // --- NOVA SEÇÃO DE IMAGENS ABAIXO ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**', // Permite qualquer caminho dentro desse hostname
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
      // Adicione outros domínios aqui se você usar imagens de outras fontes no futuro
    ],
  },
  // --- FIM DA NOVA SEÇÃO DE IMAGENS ---
};

module.exports = nextConfig;