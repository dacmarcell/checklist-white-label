import { TenantConfig } from "../types";

type NotificationOptions = {
  title: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
};

/**
 * Serviço de notificações personalizado por tenant
 */
export function createNotificationService(tenant: TenantConfig) {
  // Cores padrão para os tipos de notificação
  const defaultColors = {
    info: {
      background: tenant.colors.secondary,
      text: tenant.colors.text,
    },
    success: {
      background: 'green-500',
      text: 'white',
    },
    warning: {
      background: 'yellow-500',
      text: 'gray-900',
    },
    error: {
      background: 'red-500',
      text: 'white',
    },
  };

  return {
    /**
     * Exibe uma notificação usando as cores e estilos do tenant
     */
    showNotification(options: NotificationOptions) {
      const { title, message, type = 'info', duration = 5000, action } = options;
      
      // Aqui você implementaria a lógica para exibir a notificação
      // usando as cores e estilos do tenant
      console.log(`[${tenant.name}] Notificação: ${title}`);
      console.log(`Tipo: ${type}`);
      console.log(`Mensagem: ${message}`);
      console.log(`Duração: ${duration}ms`);
      
      if (action) {
        console.log(`Ação: ${action.label}`);
      }
      
      // Retorna um objeto com métodos para controlar a notificação
      return {
        close: () => {
          console.log(`Fechando notificação: ${title}`);
        },
      };
    },
    
    /**
     * Exibe uma notificação de informação
     */
    info(message: string, options?: Partial<NotificationOptions>) {
      return this.showNotification({
        title: options?.title || 'Informação',
        message,
        type: 'info',
        ...options,
      });
    },
    
    /**
     * Exibe uma notificação de sucesso
     */
    success(message: string, options?: Partial<NotificationOptions>) {
      return this.showNotification({
        title: options?.title || 'Sucesso',
        message,
        type: 'success',
        ...options,
      });
    },
    
    /**
     * Exibe uma notificação de alerta
     */
    warning(message: string, options?: Partial<NotificationOptions>) {
      return this.showNotification({
        title: options?.title || 'Alerta',
        message,
        type: 'warning',
        ...options,
      });
    },
    
    /**
     * Exibe uma notificação de erro
     */
    error(message: string, options?: Partial<NotificationOptions>) {
      return this.showNotification({
        title: options?.title || 'Erro',
        message,
        type: 'error',
        ...options,
      });
    },
  };
}