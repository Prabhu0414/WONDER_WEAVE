import { useState, useEffect } from "react";
import { Link, } from "react-router-dom";
import { Compass, X, Menu  } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";


export function Navbar () {

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setMobileOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
         <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-extrabold tracking-tight">
              Wonder Weave
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "#", label: "Home" },
              { href: "#destinations", label: "Destinations" },
              { href: "#features", label: "Features" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-gray-700 hover:text-orange-600"
              >
                {l.label}
              </a>
            ))}
          </nav>

          
          <div className="flex items-center gap-3">
           <Link to="/AuthPage"> <Button className="hidden md:inline-flex bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 text-white shadow-lg">
              Sign Up
            </Button></Link>
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-transparent"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-white/80 backdrop-blur ${mobileOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="container mx-auto px-4 py-4 grid gap-2">
            {["Home", "Destinations", "Features", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-2 font-medium hover:text-orange-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </header>
  )
}
