"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <div className="mx-auto my-8 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="max-w-[860px] flex flex-col gap-4">
                <div className="text-center text-xl md:text-3xl">
                    <h1>
                        Calculadora
                    </h1>
                </div>
                <div className="flex flex-col gap-4 sm:gap-8 items-center justify-center w-96 m-auto">
                    {/* Tela */}
                    <div className="flex flex-col p-2 justify-between items-end border rounded-lg w-full h-20">
                        <span className="text-sm text-neutral-600">4+4=</span>
                        <span className="text-3xl">8</span>
                    </div>

                    <div className="flex justify-between w-full">
                        {/* Números */}
                        <div className="flex flex-col gap-4 w-60">
                            <div className="flex justify-between">
                                <Button className="text-xl w-14 h-14">1</Button>
                                <Button className="text-xl w-14 h-14">2</Button>
                                <Button className="text-xl w-14 h-14">3</Button>
                            </div>
                            <div className="flex justify-between">
                                <Button className="text-xl w-14 h-14">4</Button>
                                <Button className="text-xl w-14 h-14">5</Button>
                                <Button className="text-xl w-14 h-14">6</Button>
                            </div>
                            <div className="flex justify-between">
                                <Button className="text-xl w-14 h-14">7</Button>
                                <Button className="text-xl w-14 h-14">8</Button>
                                <Button className="text-xl w-14 h-14">9</Button>
                            </div>
                            <div className="flex justify-between">
                                <Button className="text-xl w-14 h-14">0</Button>
                                <Button className="text-xl w-14 h-14">.</Button>
                                <Button className="text-xl w-14 h-14">=</Button>
                            </div>
                        </div>

                        {/* Operadores */}
                        <div className="flex flex-col gap-4">
                            <Button className="text-xl w-14 h-14">+</Button>
                            <Button className="text-xl w-14 h-14">-</Button>
                            <Button className="text-xl w-14 h-14">x</Button>
                            <Button className="text-xl w-14 h-14">÷</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}