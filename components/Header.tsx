"use client";

import { tenantConfig } from "@/lib/app";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-xl font-bold">{tenantConfig.name}</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className={`hover:text-${tenantConfig.colors.primary}`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/finalizadas"
              className={`hover:text-${tenantConfig.colors.primary}`}
            >
              Tarefas finalizadas
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
