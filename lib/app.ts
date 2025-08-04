import { tenants, TenantId } from "./tenants";
import { TenantConfig } from "./types";

/**
 * Obtém o ID do tenant a partir das variáveis de ambiente
 * Esta função é segura para uso em componentes client-side
 */
export function getClientTenantId(): TenantId {
  return process.env.NEXT_PUBLIC_DEFAULT_TENANT as TenantId || 'default';
}

/**
 * Obtém a configuração do tenant para uso em componentes client-side
 */
export function getClientTenantConfig(): TenantConfig {
  const tenantId = getClientTenantId();
  return tenants[tenantId];
}

// Exporta a configuração do tenant para uso em componentes client-side
export const tenantConfig = tenants[getClientTenantId()];
