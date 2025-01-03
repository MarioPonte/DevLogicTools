"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

export default function Home() {
  const [charNum, setCharNum] = useState<any>(12);
  const [password, setPassword] = useState<string>("");
  const [userEdited, setUserEdited] = useState<boolean>(false);

  // Function to generate random password
  const generateRandomPassword = (length: number) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
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

  return (
    <div className="m-20 max-w-[860px] flex flex-col gap-4">
      <Input type="text" className="md:text-xl" maxLength={50} value={password} onChange={handlePasswordChange} />
      <div className="flex gap-4">
        <Slider value={[charNum]} onValueChange={(val) => handleCharNumChange(val[0])} min={1} max={50} step={1} />
        <Input type="number" className="w-20" value={charNum} onChange={(e) => handleCharNumChange(Number(e.target.value))} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="maiusculas" />
          <label htmlFor="maiusculas" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Maiúsculas
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="minusculas" />
          <label htmlFor="minusculas" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Minúsculas
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="minusculas" />
          <label htmlFor="minusculas" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Números
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="minusculas" />
          <label htmlFor="minusculas" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Símbolos
          </label>
        </div>
      </div>
    </div>
  );
}
