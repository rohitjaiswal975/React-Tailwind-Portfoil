import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../libary/utiles";

const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storeTheme = localStorage.getItem("Theme")
    if(storeTheme ==="dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }else {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  },[])
  
  const toggleTheme = () => {
    if(isDarkMode) {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
      localStorage.setItem("Theme","light")
    }else {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
      localStorage.setItem("Theme","dark")
    }
  }
  return (
    <>
      <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-12 right-1 z-50 p-2 rounded-full transition-colors" ,
      "duration-300 focus:outline-hidden")} >
        {isDarkMode ? (
          <Sun className="h-8 w-8 text-yellow-500" />
        ) : (
          <Moon className="h-8 w-8 text-purple-900" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
