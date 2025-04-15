const KeyboardKey = ({ children }: { children: React.ReactNode }) => {
    return (
      <span className="inline-flex items-center justify-center border border-gray-400 rounded-md px-1 py-1 text-xs font-mono bg-gray-100">
        {children}
      </span>
    );
  };
  
  export default KeyboardKey;