import { tenants, TenantId } from "./tenants";
import { TenantConfig } from "./types";

/**
 * Obtém a configuração do tenant padrão
 * Esta função é segura para uso em Server Components
 */
export async function getTenantConfig(): Promise<TenantConfig> {
  // Usar o tenant padrão definido nas variáveis de ambiente
  const defaultTenant = process.env.NEXT_PUBLIC_DEFAULT_TENANT as TenantId || 'default';
  return tenants[defaultTenant];
}