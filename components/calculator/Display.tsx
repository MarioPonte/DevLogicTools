"use client";

interface CalculatorDisplayProps {
  input: string;
  result: string;
}

const Display: React.FC<CalculatorDisplayProps> = ({ input, result }) => {
    return (
        <div className="flex flex-col p-2 justify-between items-end border rounded-lg w-full h-20">
            {result && <span className="text-sm text-neutral-600">{input} =</span>}
            <span className="text-3xl">{result || input || ""}</span>
        </div>
    );
}

export default Display;