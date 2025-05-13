"use client";

import { app } from "@/lib/app";
import { getTenantConfig, Tenant } from "@/lib/tenants";
import { createContext, useState, useContext, useEffect } from "react";

type TenantContext = {
  tenant: Tenant;
};

const TenantContext = createContext<TenantContext>({} as TenantContext);

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenant] = useState<Tenant>(getTenantConfig("default"));

  useEffect(() => {
    setTenant(getTenantConfig(app.currentTenant));
  }, [tenant]);

  return (
    <TenantContext.Provider value={{ tenant }}>
      {children}
    </TenantContext.Provider>
  );
}

// 3. Hook customizado para consumir o contexto
export const useTenantContext = () => useContext(TenantContext);
