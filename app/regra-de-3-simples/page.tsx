"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function Page() {
    const [valueA, setValueA] = useState<number | "">("");
    const [valueB, setValueB] = useState<number | "">("");
    const [valueC, setValueC] = useState<number | "">("");
    const [valueX, setValueX] = useState<number | null>(null);

    const calculateRuleOf3 = () => (valueA && valueB && valueC) ? setValueX((valueB * valueC) / valueA) : setValueX(null);

    // Function to copy X value to clipboard
    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(valueX!.toString())
            .then(() => toast({ title: "Copiado para a área de transferência!", description: "Senha copiada com sucesso!" }))
            .catch(() => alert("Falha ao copiar a senha."));
    };

    return (
        <div className="mx-auto my-8 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="max-w-[860px] flex flex-col gap-4">
                <div className="text-center text-xl md:text-3xl">
                    <h1>
                        Regra de 3 Simples
                    </h1>
                </div>
                <div className="flex flex-col gap-4 sm:gap-8 items-center justify-center">
                    <div className="flex gap-2 sm:gap-4 items-center">
                        <Input type="number" className="w-16 sm:w-28" value={valueA} onChange={(e) => setValueA(e.target.value ? Number(e.target.value) : "")}
                        />
                        <hr className="w-14 sm:w-20" />
                        <Input type="number" className="w-16 sm:w-28" value={valueB} onChange={(e) => setValueB(e.target.value ? Number(e.target.value) : "")} />
                    </div>
                    <div className="flex gap-2 sm:gap-4 items-center">
                        <Input type="number" className="w-16 sm:w-28" value={valueC} onChange={(e) => setValueC(e.target.value ? Number(e.target.value) : "")} />
                        <hr className="w-14 sm:w-20" />
                        <div className="w-16 sm:w-28 text-md sm:text-xl text-center">
                            {valueX !== null ? <span>{valueX.toFixed(2)}</span> : <span>x</span>}
                        </div>
                    </div>
                    <Button onClick={calculateRuleOf3} disabled={!valueA || !valueB || !valueC}>
                        Calcular
                    </Button>
                    {valueX !== null && (
                        <Button variant="outline" size="icon" onClick={copyToClipboard} >
                            <Copy />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}