
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="text-xl font-bold hover:text-primary/80 transition-colors">
          AYE NYEIN SAN
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Home
          </Link>
          <a href="#about" className="text-sm font-medium hover:text-primary/80 transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Projects
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Contact
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
