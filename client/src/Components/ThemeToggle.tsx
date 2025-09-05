import  { useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100"
    >
      {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
