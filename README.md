# Checklist White Label

Uma aplicação de gerenciamento de tarefas com suporte completo para White Label, permitindo personalização de cores, logos, textos e domínios para diferentes clientes.

## Recursos White Label

- **Personalização visual completa**: Cores, logos, favicon e estilos personalizados por tenant
- **Textos customizáveis**: Todos os textos da interface podem ser personalizados por tenant
- **Domínios personalizados**: Suporte para domínios e subdomínios específicos por tenant
- **E-mails personalizados**: Templates de e-mail com a identidade visual do tenant
- **Documentos personalizados**: Geração de documentos com a marca do tenant
- **Notificações personalizadas**: Sistema de notificações com as cores do tenant

## Estrutura do Projeto

- `/lib/types.ts`: Definição dos tipos para configuração de tenants
- `/lib/tenants.ts`: Configuração dos tenants disponíveis
- `/lib/app.ts`: Lógica para detecção de tenant baseado no domínio
- `/lib/TenantContext.tsx`: Contexto React para compartilhar configurações do tenant
- `/lib/TenantServices.ts`: Serviços personalizados por tenant
- `/lib/email`: Templates de e-mail personalizados
- `/lib/documents`: Templates de documentos personalizados
- `/lib/notifications`: Serviço de notificações personalizado

## Como adicionar um novo tenant

1. Adicione a configuração do novo tenant em `/lib/tenants.ts`
2. Adicione os arquivos de mídia necessários (logo, favicon, etc.) em `/public`
3. Configure o domínio/subdomínio no arquivo `next.config.ts`

Exemplo de configuração de tenant:

```typescript
meuTenant: {
  id: "meuTenant",
  name: "Minha Empresa",
  description: "Sistema de gerenciamento de tarefas personalizado",
  logo: "/meu-logo.svg",
  favicon: "/meu-favicon.ico",
  colors: {
    primary: "indigo-600",
    secondary: "indigo-400",
    text: "gray-100",
    background: "gray-800",
    accent: "pink-400"
  },
  domain: "minhaempresa.com.br",
  subdomain: "tarefas",
  emailConfig: {
    fromName: "Tarefas Minha Empresa",
    fromEmail: "tarefas@minhaempresa.com.br",
    footer: "© 2023 Minha Empresa. Todos os direitos reservados."
  },
  texts: {
    homeTitle: "Bem-vindo ao Sistema de Tarefas",
    tasksTitle: "Suas Tarefas",
    completedTasksTitle: "Tarefas Concluídas",
    newTaskButton: "Nova Tarefa"
  }
}
```

## Executando o projeto

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar em modo de produção
npm start
```

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
# Tenant padrão a ser usado quando não for possível detectar pelo domínio
NEXT_PUBLIC_DEFAULT_TENANT=default

# URL base da aplicação (para uso em e-mails, documentos, etc.)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
