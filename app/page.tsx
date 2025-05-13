"use client";

import { app } from "@/lib/app";
import { getTenantConfig } from "@/lib/tenants";
import Image from "next/image";

export default function Home() {
  const tenant = getTenantConfig(app.currentTenant);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src={tenant.logo}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">{tenant.name}</li>
          <li className="tracking-[-.01em]">{tenant.description}</li>
        </ol>
      </main>
    </div>
  );
}
