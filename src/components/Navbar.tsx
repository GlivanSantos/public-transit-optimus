
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bus, Clock, MapPin, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-primary font-semibold"
          >
            <Bus className="h-6 w-6 animate-bus-move" />
            <span className="text-xl font-bold">TransitOptimus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-medium hover:text-primary transition-all-ease"
            >
              Início
            </Link>
            <Link
              to="/routes"
              className="text-sm font-medium hover:text-primary transition-all-ease"
            >
              Rotas
            </Link>
            <Link
              to="/map"
              className="text-sm font-medium hover:text-primary transition-all-ease"
            >
              Mapa ao Vivo
            </Link>
            <Link
              to="/schedules"
              className="text-sm font-medium hover:text-primary transition-all-ease"
            >
              Horários
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary transition-all-ease"
            >
              Sobre
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
            <Button className="rounded-full px-4 py-2 animate-scale-in">
              Entrar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slide-in-right bg-white shadow-lg absolute top-full left-0 right-0 pt-2 pb-4">
          <div className="flex flex-col space-y-3 px-4">
            <Link
              to="/"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/routes"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Rotas
            </Link>
            <Link
              to="/map"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Mapa ao Vivo
            </Link>
            <Link
              to="/schedules"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Horários
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <div className="pt-2">
              <Button className="w-full">Entrar</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
