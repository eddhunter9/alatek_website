import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/alatek-logo.png";

const navLinks = [
  { label: "Technology", href: "#software" },
  { label: "About Us", href: "#about" },
  // { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center h-16 px-4">
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="ALATEK logo" className="h-8" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Spacer for balance */}
        <div className="hidden md:block w-[80px] flex-shrink-0" />

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-semibold tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
