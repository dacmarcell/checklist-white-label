'use client';

import { createContext, useContext, ReactNode } from 'react';
import { TenantConfig } from './types';
import { tenantConfig as defaultTenantConfig } from './app';
import { createTenantServices } from './TenantServices';

// Tipo para o contexto do tenant
type TenantContextType = {
  config: TenantConfig;
  services: ReturnType<typeof createTenantServices>;
};

// Valor padrão para o contexto
const defaultTenantServices = createTenantServices(defaultTenantConfig);
const defaultContextValue: TenantContextType = {
  config: defaultTenantConfig,
  services: defaultTenantServices,
};

// Contexto para compartilhar a configuração do tenant
const TenantContext = createContext<TenantContextType>(defaultContextValue);

// Provider para o contexto do tenant
export function TenantProvider({
  config,
  children,
}: {
  config: TenantConfig;
  children: ReactNode;
}) {
  // Criar serviços para o tenant
  const services = createTenantServices(config);
  
  return (
    <TenantContext.Provider value={{ config, services }}>
      {children}
    </TenantContext.Provider>
  );
}

// Hook para acessar a configuração do tenant
export function useTenant() {
  const { config } = useContext(TenantContext);
  return config;
}

// Hook para acessar os serviços do tenant
export function useTenantServices() {
  const { services } = useContext(TenantContext);
  return services;
}