import { TenantConfig } from "./types";
import { createEmailSender } from "./email/EmailTemplate";
import { createDocumentGenerator } from "./documents/DocumentTemplate";
import { createNotificationService } from "./notifications/NotificationService";

/**
 * Cria todos os serviços personalizados para um tenant específico
 */
export function createTenantServices(tenant: TenantConfig) {
  return {
    // Serviço de e-mail personalizado
    email: createEmailSender(tenant),
    
    // Serviço de documentos personalizado
    documents: createDocumentGenerator(tenant),
    
    // Serviço de notificações personalizado
    notifications: createNotificationService(tenant),
    
    // Função para obter textos personalizados
    getText(key: string, defaultValue: string = ''): string {
      return tenant.texts?.[key] || defaultValue;
    },
  };
}

/**
 * Hook para usar os serviços do tenant em componentes React
 */
export function useTenantServices(tenant: TenantConfig) {
  return createTenantServices(tenant);
}