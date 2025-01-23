"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Copy, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [charNum, setCharNum] = useState<any>(12);
  const [password, setPassword] = useState<string>("");
  const [userEdited, setUserEdited] = useState<boolean>(false);
  const [upperChars, setUpperChars] = useState<boolean>(true);
  const [lowerChars, setLowerChars] = useState<boolean>(true);
  const [numberChars, setNumberChars] = useState<boolean>(true);

  // Function to generate random password
  const generateRandomPassword = (length: number) => {
    const uppercaseData = upperChars ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const lowercaseData = lowerChars ? "abcdefghijklmnopqrstuvwxyz" : "";
    const numbersData = numberChars ? "0123456789" : "";

    let chars = uppercaseData + lowercaseData + numbersData;

    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  // Ensure at least one checkbox is always selected
  const handleCheckboxChange = (type: "upper" | "lower" | "number") => {
    const currentState = { upper: upperChars, lower: lowerChars, number: numberChars };
    currentState[type] = !currentState[type];

    // If all options are about to be deselected, prevent the change
    if (!currentState.upper && !currentState.lower && !currentState.number) {
      alert("Pelo menos uma opção deve estar selecionada.");
      return;
    }

    // Update the appropriate state
    if (type === "upper") setUpperChars(!upperChars);
    if (type === "lower") setLowerChars(!lowerChars);
    if (type === "number") setNumberChars(!numberChars);
  };

  // Updates the random password whenever `charNum` changes, but only if it hasn't been edited by the user
  useEffect(() => {
    if (!userEdited) setPassword(generateRandomPassword(charNum))
  }, [charNum, userEdited]);

  // Function to handle changes in text input
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);
    setCharNum(newValue.length);
    setUserEdited(true);
  };

  // Function to handle changes in number input
  const handleCharNumChange = (newCharNum: number) => {
    setCharNum(newCharNum);
    setUserEdited(false);
  };

  // Function to copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copiada para a área de transferência!");
      })
      .catch(() => {
        alert("Falha ao copiar a password.");
      });
  };

  // Function to regenerate password
  const regeneratePassword = () => {
    const newPassword = generateRandomPassword(charNum);
    setPassword(newPassword);
    setUserEdited(false);
  };

  return (
    <div className="mx-auto my-8 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="max-w-[860px] flex flex-col gap-4">
        <div className="flex gap-2">
          <Input type="text" className="md:text-xl" maxLength={50} value={password} onChange={handlePasswordChange} />
          <Button variant="outline" size="icon" onClick={copyToClipboard} >
            <Copy />
          </Button>
          <Button variant="outline" size="icon" onClick={regeneratePassword} >
            <RefreshCcw />
          </Button>
        </div>
        <div className="flex gap-4">
          <Slider value={[charNum]} onValueChange={(val) => handleCharNumChange(val[0])} min={1} max={50} step={1} />
          <Input type="number" className="w-20" value={charNum} onChange={(e) => handleCharNumChange(Number(e.target.value))} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="maiusculas" checked={upperChars} onCheckedChange={() => handleCheckboxChange("upper")} />
            <label htmlFor="maiusculas" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Maiúsculas
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="minusculas" checked={lowerChars} onCheckedChange={() => handleCheckboxChange("lower")} />
            <label htmlFor="minusculas" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Minúsculas
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="numeros" checked={numberChars} onCheckedChange={() => handleCheckboxChange("number")} />
            <label htmlFor="numeros" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Números
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="simbolos" />
            <label htmlFor="simbolos" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Símbolos
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}