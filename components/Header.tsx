"use client";

import { app } from "@/lib/app";
import { getTenantConfig } from "@/lib/tenants";
import Image from "next/image";

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
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
