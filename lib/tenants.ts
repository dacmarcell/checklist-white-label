import { TenantsConfig } from "./types";

export const tenants: TenantsConfig = {
  default: {
    id: "default",
    name: "Checklist App",
    description: "Aplicativo de gerenciamento de tarefas",
    logo: "/next.svg",
    favicon: "/favicon.ico",
    colors: {
      primary: "blue-500",
      secondary: "blue-300",
      text: "gray-100",
      background: "gray-800",
      accent: "yellow-400"
    },
    domain: "checklist-app.com",
    subdomain: "app",
    emailConfig: {
      fromName: "Checklist App",
      fromEmail: "noreply@checklist-app.com",
      footer: "© 2023 Checklist App. Todos os direitos reservados."
    },
    texts: {
      homeTitle: "Bem-vindo ao Checklist App",
      tasksTitle: "Suas Tarefas",
      completedTasksTitle: "Tarefas Concluídas",
      newTaskButton: "Nova Tarefa"
    }
  },
  dacti: {
    id: "dacti",
    name: "Dacti Checklist",
    description: "Sistema de gerenciamento de tarefas da Dacti",
    logo: "/file.svg",
    favicon: "/favicon.ico",
    colors: {
      primary: "purple-600",
      secondary: "purple-400",
      text: "white",
      background: "gray-900",
      accent: "green-400"
    },
    domain: "dacti.com",
    subdomain: "checklist",
    emailConfig: {
      fromName: "Dacti Checklist",
      fromEmail: "checklist@dacti.com",
      footer: "© 2023 Dacti. Todos os direitos reservados."
    },
    texts: {
      homeTitle: "Bem-vindo ao Dacti Checklist",
      tasksTitle: "Suas Tarefas",
      completedTasksTitle: "Tarefas Concluídas",
      newTaskButton: "Nova Tarefa"
    }
  },
  client1: {
    id: "client1",
    name: "Cliente 1 Tasks",
    description: "Sistema de gerenciamento de tarefas personalizado",
    logo: "/globe.svg",
    favicon: "/favicon.ico",
    colors: {
      primary: "green-600",
      secondary: "green-400",
      text: "gray-100",
      background: "gray-800",
      accent: "orange-400"
    },
    domain: "cliente1.com.br",
    subdomain: "tasks",
    emailConfig: {
      fromName: "Cliente 1 Tasks",
      fromEmail: "tasks@cliente1.com.br",
      footer: "© 2023 Cliente 1. Todos os direitos reservados."
    },
    texts: {
      homeTitle: "Bem-vindo ao Cliente 1 Tasks",
      tasksTitle: "Suas Tarefas",
      completedTasksTitle: "Tarefas Concluídas",
      newTaskButton: "Nova Tarefa"
    }
  }
};

export type TenantId = keyof typeof tenants;
