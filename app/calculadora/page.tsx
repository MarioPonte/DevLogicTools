"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value: string) => value === "=" ? calculateResult() : setInput((prev) => prev + value);

    const calculateResult = () => {
        try {
            const expression = input.replace(/x/g, "*").replace(/÷/g, "/").replace(/%/g, "/100");

            const evaluatedResult = eval(expression);

            setResult(evaluatedResult.toString());
        } catch (error) {
            setResult("Erro de Sintaxe");
        }
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    // Keyboard Keys input
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;

            // Valid Keys
            const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "(", ")", "+", "-", "*", "/", "x", "÷", "%"];

            if (validKeys.includes(key)) {
                if (key === "*") {
                    setInput((prev) => prev + "x");
                } else if (key === "/") {
                    setInput((prev) => prev + "÷");
                } else if (key === ",") {
                    setInput((prev) => prev + ".");
                } else {
                    setInput((prev) => prev + key);
                }
            } else if (key === "Enter") {
                e.preventDefault();
                calculateResult();
            } else if (key === "Backspace") {
                setInput((prev) => prev.slice(0, -1));
            } else if (key === "Escape") {
                handleClear();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // Cleanup function to remove the event listener.
        // This is a good practice to prevent memory leaks and ensure that the event is not registered multiple times on re-renders.
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [input]);

    return (
        <div className="mx-auto my-8 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="max-w-[860px] flex flex-col gap-4">
                <div className="text-center text-xl md:text-3xl">
                    <h1>
                        Calculadora
                    </h1>
                </div>
                <div className="flex flex-col gap-4 sm:gap-8 items-center justify-center w-96 m-auto">
                    <div className="flex flex-col p-2 justify-between items-end border rounded-lg w-full h-20">
                        {result && <span className="text-sm text-neutral-600">{input} =</span>}
                        <span className="text-3xl">{result || input || ""}</span>
                    </div>

                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-4 w-56">
                            {[
                                ["(", ")", "%"],
                                ["1", "2", "3"],
                                ["4", "5", "6"],
                                ["7", "8", "9"],
                                ["0", ".", "="],
                            ].map((row, index) => (
                                <div key={index} className="flex justify-between">
                                    {row.map((num) => (
                                        <Button key={num} className="text-xl w-14 h-14" onClick={() => handleButtonClick(num)}>
                                            {num}
                                        </Button>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Operators */}
                            <div className="flex flex-col gap-4 w-32">
                                {[["+", "-"], ["x", "÷"]].map((row, index) => (
                                    <div key={index} className="flex justify-between">
                                        {row.map((num) => (
                                            <Button key={num} className="text-xl w-14 h-14" onClick={() => handleButtonClick(num)}>
                                                {num}
                                            </Button>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div>
                                <Button className="text-xl w-full h-14" onClick={() => handleClear()}>
                                    Limpar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}