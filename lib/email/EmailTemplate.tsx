import { TenantConfig } from "../types";

type EmailTemplateProps = {
  tenant: TenantConfig;
  subject: string;
  previewText?: string;
  content: React.ReactNode;
};

export function EmailTemplate({
  tenant,
  subject,
  previewText,
  content,
}: EmailTemplateProps) {
  return (
    <html>
      <head>
        <title>{subject}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        {previewText && (
          <div
            style={{
              display: "none",
              maxHeight: 0,
              overflow: "hidden",
            }}
          >
            {previewText}
          </div>
        )}
        <style>
          {`
            /* Base styles */
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              width: 100%;
              background-color: #f9f9f9;
              color: #333333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
            }
            .header {
              padding: 20px;
              text-align: center;
              background-color: ${tenant.colors.primary};
              color: ${tenant.colors.text};
            }
            .content {
              padding: 20px;
            }
            .footer {
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #666666;
              border-top: 1px solid #eeeeee;
            }
            a {
              color: ${tenant.colors.primary};
              text-decoration: none;
            }
            .button {
              display: inline-block;
              padding: 10px 20px;
              margin: 10px 0;
              background-color: ${tenant.colors.primary};
              color: #ffffff !important;
              text-decoration: none;
              border-radius: 4px;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <img 
              src={`${process.env.NEXT_PUBLIC_APP_URL}${tenant.logo}`} 
              alt={`${tenant.name} logo`} 
              width="120" 
              style={{ display: 'block', margin: '0 auto' }}
            />
            <h1>{tenant.name}</h1>
          </div>
          <div className="content">
            {content}
          </div>
          <div className="footer">
            {tenant.emailConfig?.footer || `© ${new Date().getFullYear()} ${tenant.name}. Todos os direitos reservados.`}
          </div>
        </div>
      </body>
    </html>
  );
}

export function createEmailSender(tenant: TenantConfig) {
  return {
    /**
     * Função para enviar e-mail usando a configuração do tenant
     */
    async sendEmail({
      to,
      subject,
      content,
      previewText,
    }: {
      to: string;
      subject: string;
      content: React.ReactNode;
      previewText?: string;
    }) {
      // Aqui você implementaria a lógica de envio de e-mail
      // usando a configuração do tenant e o template de e-mail
      const emailHtml = (
        <EmailTemplate
          tenant={tenant}
          subject={subject}
          previewText={previewText}
          content={content}
        />
      );

      // Exemplo de implementação (simulada)
      console.log(`Enviando e-mail para ${to}`);
      console.log(`De: ${tenant.emailConfig?.fromName} <${tenant.emailConfig?.fromEmail}>`);
      console.log(`Assunto: ${subject}`);
      console.log(`Conteúdo: ${emailHtml}`);

      // Aqui você chamaria sua API de envio de e-mail
      return { success: true };
    },
  };
}