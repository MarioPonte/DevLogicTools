import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const keyboardKeyVariants = cva(
  "inline-flex items-center justify-center border border-gray-400 rounded-md text-xs font-mono bg-gray-100",
  {
    variants: {
      shape: {
        square: "w-8 h-8 p-1",
        default: "w-10 h-8 p-1",
      },
    },
    defaultVariants: {
      shape: "default",
    },
  }
);

export type KeyboardKeyProps = VariantProps<typeof keyboardKeyVariants> & {
  children: React.ReactNode;
};

const KeyboardKey = ({ children, shape }: KeyboardKeyProps) => {
    return (
      <span className={cn(keyboardKeyVariants({ shape }))}>
        {children}
      </span>
    );
  };
  
  export default KeyboardKey;