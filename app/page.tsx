"use client";

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Home() {
  const [charNum, setCharNum] = useState<any>(10);
  return (
    <div className="m-20 max-w-[860px] flex flex-col gap-4">
      <Input type="text" className="md:text-xl" maxLength={50} />
      <div className="flex gap-4">
        <Slider value={[charNum]} onValueChange={(val) => setCharNum(val)} min={1} max={50} step={1} />
        <Input type="number" className="w-20" value={charNum} onChange={(e) => setCharNum(Number(e.target.value))} />
      </div>
    </div>
  );
}
