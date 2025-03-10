"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
    const [valueA, setValueA] = useState<number | "">("");
    const [valueB, setValueB] = useState<number | "">("");
    const [valueC, setValueC] = useState<number | "">("");
    const [valueX, setValueX] = useState<number | null>(null);

    const calculateRuleOf3 = () => {
        if (valueA && valueB && valueC) {
            setValueX((valueB * valueC) / valueA);
        } else {
            setValueX(null);
        }
    };

    return (
        <div className="mx-auto my-8 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="max-w-[860px] flex flex-col gap-4">
                <div className="text-center text-xl md:text-3xl">
                    <h1>
                        Regra de 3 Simples
                    </h1>
                </div>
                <div className="flex flex-col gap-8 items-center justify-center">
                    <div className="flex gap-4 items-center">
                        <Input type="number" className="w-28" value={valueA} onChange={(e) => setValueA(e.target.value ? Number(e.target.value) : "")}
                        />
                        <hr className="w-20" />
                        <Input type="number" className="w-28" value={valueB} onChange={(e) => setValueB(e.target.value ? Number(e.target.value) : "")} />
                    </div>
                    <div className="flex gap-4 items-center">
                        <Input type="number" className="w-28" value={valueC} onChange={(e) => setValueC(e.target.value ? Number(e.target.value) : "")} />
                        <hr className="w-20" />
                        <div className="w-28 text-xl text-center">
                            {valueX !== null ? <span>{valueX.toFixed(2)}</span> : <span>x</span>}
                        </div>
                    </div>
                    <Button onClick={calculateRuleOf3} disabled={!valueA || !valueB || !valueC}>
                        Calcular
                    </Button>
                </div>
            </div>
        </div>
    );
}