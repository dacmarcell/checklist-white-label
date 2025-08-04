"use client";

import { useTenant, useTenantServices } from "@/lib/TenantContext";
import Image from "next/image";

export default function Home() {
  const tenant = useTenant();
  const services = useTenantServices();

  // Exemplo de uso do serviço de notificações
  const handleShowNotification = () => {
    services.notifications.success(
      "Notificação de exemplo usando as cores do tenant!"
    );
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image 
            src={tenant.logo} 
            alt={`${tenant.name} logo`} 
            width={120} 
            height={120} 
            className="mb-4"
          />
          <h1 className="tenant-primary text-4xl font-bold">
            {services.getText('homeTitle', `Bem-vindo ao ${tenant.name}`)}
          </h1>
          <p className="text-xl max-w-2xl">
            {tenant.description}
          </p>
          <div className="mt-8 p-6 rounded-lg tenant-bg-secondary bg-opacity-20 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4 tenant-accent">
              {services.getText('tasksTitle', "Suas Tarefas")}
            </h2>
            <p>
              Gerencie suas tarefas de forma eficiente com nossa plataforma personalizada.
            </p>
            <div className="flex gap-4 mt-4">
              <button 
                className="px-6 py-2 rounded-md tenant-bg-primary text-white font-medium hover:bg-opacity-90 transition-all"
              >
                {services.getText('newTaskButton', "Nova Tarefa")}
              </button>
              <button 
                onClick={handleShowNotification}
                className="px-6 py-2 rounded-md bg-transparent border border-current tenant-primary font-medium hover:bg-opacity-10 transition-all"
              >
                Testar Notificação
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
