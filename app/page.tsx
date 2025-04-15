"use client";

import { Calculator, Calendar, KeyRound } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto my-8 max-w-3xl px-4 sm:px-6">
      <div className="max-w-[860px] flex flex-col gap-4">
        <div className="text-center mb-6">
          <h1 className="text-center text-xl md:text-3xl">
            Dev Logic Tools
          </h1>
          <span className="text-center text-sm text-neutral-400">
            Um hub de ferramentas úteis para tornar as tuas tarefas mais rápidas e eficientes.
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link href="/gerador-de-senhas" className="flex items-center justify-between w-80 text-xl p-2 border-2 border-black rounded-md">
            <span>Gerador de Senhas</span>
            <KeyRound />
          </Link>

          <Link href="/regra-de-3-simples" className="flex items-center justify-between w-80 text-xl p-2 border-2 border-black rounded-md">
            <span>Regra de 3 Simples</span>
            <Calculator />
          </Link>

          <Link href="/calculadora" className="flex items-center justify-between w-80 text-xl p-2 border-2 border-black rounded-md">
            <span>Calculadora</span>
            <Calculator />
          </Link>

          <Link href="/calendario" className="flex items-center justify-between w-80 text-xl p-2 border-2 border-black rounded-md">
            <span>Calendário</span>
            <Calendar />
          </Link>
        </div>
      </div>
    </div>
  );
}