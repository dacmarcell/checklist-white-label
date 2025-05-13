export type Tenant = {
  name: string;
  description: string;
  logo: string;
  color: string;
};

export const tenants = {
  default: {
    name: "Default",
    description: "Default tenant",
    logo: "/next.svg",
    color: "#000000",
  },
  dacti: {
    name: "Dacti",
    description: "Dacti tenant",
    logo: "/file.svg",
    color: "#000000",
  },
};

export function getTenantConfig(tenant: keyof typeof tenants) {
  return tenants[tenant] || tenants.default;
}
