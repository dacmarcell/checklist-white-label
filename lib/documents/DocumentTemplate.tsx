import { TenantConfig } from "../types";

type DocumentTemplateProps = {
  tenant: TenantConfig;
  title: string;
  content: React.ReactNode;
};

export function DocumentTemplate({
  tenant,
  title,
  content,
}: DocumentTemplateProps) {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      color: '#333',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: `2px solid ${tenant.colors.primary}`,
        paddingBottom: '10px',
        marginBottom: '20px',
      }}>
        <img 
          src={`${process.env.NEXT_PUBLIC_APP_URL}${tenant.logo}`} 
          alt={`${tenant.name} logo`} 
          width="60" 
          style={{ marginRight: '15px' }}
        />
        <h1 style={{ 
          color: tenant.colors.primary,
          margin: 0,
          fontSize: '24px',
        }}>
          {tenant.name}
        </h1>
      </div>
      
      <h2 style={{ 
        color: tenant.colors.secondary,
        fontSize: '20px',
        marginBottom: '15px',
      }}>
        {title}
      </h2>
      
      <div style={{ marginBottom: '30px' }}>
        {content}
      </div>
      
      <div style={{
        borderTop: '1px solid #eee',
        paddingTop: '15px',
        fontSize: '12px',
        color: '#666',
        textAlign: 'center',
      }}>
        {tenant.documents?.footer || `© ${new Date().getFullYear()} ${tenant.name}. Todos os direitos reservados.`}
      </div>
    </div>
  );
}

export function createDocumentGenerator(tenant: TenantConfig) {
  return {
    /**
     * Função para gerar um documento usando a configuração do tenant
     */
    generateDocument({
      title,
      content,
      format = 'html',
    }: {
      title: string;
      content: React.ReactNode;
      format?: 'html' | 'pdf';
    }) {
      // Aqui você implementaria a lógica de geração de documento
      // usando a configuração do tenant e o template de documento
      const documentContent = (
        <DocumentTemplate
          tenant={tenant}
          title={title}
          content={content}
        />
      );

      // Exemplo de implementação (simulada)
      console.log(`Gerando documento: ${title}`);
      console.log(`Formato: ${format}`);
      console.log(`Conteúdo: ${documentContent}`);

      // Aqui você geraria o documento no formato solicitado
      return { success: true, content: documentContent };
    },
  };
}