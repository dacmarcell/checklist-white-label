"use client";

import { app } from "@/lib/app";
import { getTenantConfig } from "@/lib/tenants";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const tenant = getTenantConfig(app.currentTenant);

  return (
    <>
      <div className="flex items-center">
        <Image
          src={tenant.logo}
          alt="Logo"
          className="h-8 w-8 mr-2"
          width={8}
          height={8}
        />
        <h1 className="text-xl font-bold">My App</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className={`hover:text-${tenant.colors.primary.light}`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/finalizadas"
              className={`hover:text-${tenant.colors.primary.light}`}
            >
              Tarefas finalizadas
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
