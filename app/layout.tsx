import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getTenantConfig } from "@/lib/server";
import { TenantProvider } from "@/lib/TenantContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Função para gerar metadados dinâmicos baseados no tenant
export async function generateMetadata(): Promise<Metadata> {
  const tenantConfig = await getTenantConfig();
  
  return {
    title: tenantConfig.name,
    description: tenantConfig.description,
    icons: {
      icon: tenantConfig.favicon,
    },
  };
}

// Configuração da viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Obter a configuração do tenant no servidor
  const tenantConfig = await getTenantConfig();
  
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href={tenantConfig.favicon} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          '--color-primary': `var(--${tenantConfig.colors.primary})`,
          '--color-secondary': `var(--${tenantConfig.colors.secondary})`,
          '--color-text': `var(--${tenantConfig.colors.text})`,
          '--color-background': `var(--${tenantConfig.colors.background})`,
          '--color-accent': tenantConfig.colors.accent ? `var(--${tenantConfig.colors.accent})` : undefined,
        } as any}
      >
        <TenantProvider config={tenantConfig}>
          <div className={`min-h-screen bg-${tenantConfig.colors.background} text-${tenantConfig.colors.text}`}>
            <header className="flex items-center justify-between p-4">
              <Header />
            </header>
            {children}
          </div>
        </TenantProvider>
      </body>
    </html>
  );
}
