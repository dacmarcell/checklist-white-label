export type TenantColors = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  accent?: string;
};

export type TenantConfig = {
  id: string;
  name: string;
  description: string;
  logo: string;
  favicon: string;
  colors: TenantColors;
  domain?: string;
  subdomain?: string;
  emailConfig?: {
    fromName: string;
    fromEmail: string;
    replyTo?: string;
    footer?: string;
    template?: string;
  };
  documents?: {
    header?: string;
    footer?: string;
    template?: string;
  };
  texts?: {
    [key: string]: string;
  };
};

export type TenantsConfig = {
  [key: string]: TenantConfig;
};