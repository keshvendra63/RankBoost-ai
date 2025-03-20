"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {Button} from "./ui/button/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = usePathname();
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          RankBoost UK
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {["services", "portfolio", "team", "testimonials", "contact"].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="nav-item">
              {item}
            </button>
          ))}
          <Link href="/blog" className="nav-item">
            Blog
          </Link>
          <button onClick={() => scrollToSection("contact")} className="get-started-btn">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-container">
            {["services", "portfolio", "team", "testimonials", "contact"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="mobile-menu-item">
                {item}
              </button>
            ))}
            <Link href="/blog" className="mobile-menu-item">
              Blog
            </Link>
            <Button onClick={() => scrollToSection("contact")} className="get-started-btn">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
