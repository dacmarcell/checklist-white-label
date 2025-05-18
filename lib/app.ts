import { tenants } from "./tenants";

type App = {
  currentTenant: keyof typeof tenants;
};

export const app: App = {
  currentTenant: "default",
};

export const tenantConfig = tenants[app.currentTenant];
