"use client";

import { useTenant, useTenantServices } from "@/lib/TenantContext";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const tenant = useTenant();
  const services = useTenantServices();

  return (
    <>
      <div className="flex items-center gap-3">
        <Image 
          src={tenant.logo} 
          alt={`${tenant.name} logo`} 
          width={32} 
          height={32} 
        />
        <h1 className="text-xl font-bold tenant-primary">{tenant.name}</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="hover:tenant-primary transition-colors"
            >
              {services.getText('homeTitle', 'Início')}
            </Link>
          </li>
          <li>
            <Link
              href="/finalizadas"
              className="hover:tenant-primary transition-colors"
            >
              {services.getText('completedTasksTitle', 'Tarefas finalizadas')}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
