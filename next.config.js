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
      { // Adicionado como um novo objeto dentro de remotePatterns
        protocol: 'https',
        hostname: 'unavatar.io',
        port: '',
        pathname: '**', // Permite qualquer caminho em unavatar.io. Pode ser mais específico se preferir (ex: '/twitter/**')
      },
      // Adicione outros padrões remotos aqui se você usar imagens de outras fontes no futuro
    ],
    // A propriedade 'domains' foi removida, pois 'remotePatterns' é a forma recomendada
    // e mais flexível de configurar domínios de imagem externos no Next.js 13+.
  },
  // --- FIM DA NOVA SEÇÃO DE IMAGENS ---
};

module.exports = nextConfig;