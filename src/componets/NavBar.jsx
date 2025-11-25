import { useEffect, useState } from "react";
import { cn } from "../libary/utiles";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handledScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handledScroll);
    return () => window.removeEventListener("scroll", handledScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="conatiner flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="ralative z-10">
            <span className="text-glow text-foreground">Pratice</span> Portfoil
          </span>
        </a>
        {/* destop ke liye */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/90 hover:text-primary transition-colors duration-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile ke liye */}
        <button onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden p-4 text-foreground z-50"
        aria-label={isMenuOpen? "Close Menu":"Open Menu"}    
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop:-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/90 hover:text-primary transition-colors duration-400"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
