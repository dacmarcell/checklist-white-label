import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração para imagens de domínios externos (caso necessário)
  images: {
    domains: [
      // Adicione aqui domínios externos para imagens
      'localhost',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Configuração para domínios personalizados
  async rewrites() {
    return [
      // Exemplo de redirecionamento para subdomínios
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'app.checklist-app.com',
          },
        ],
        destination: '/default/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'checklist.dacti.com',
          },
        ],
        destination: '/dacti/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tasks.cliente1.com.br',
          },
        ],
        destination: '/client1/:path*',
      },
    ];
  },
  
  // Configuração para variáveis de ambiente
  env: {
    NEXT_PUBLIC_DEFAULT_TENANT: process.env.NEXT_PUBLIC_DEFAULT_TENANT || 'default',
  },
};

export default nextConfig;
