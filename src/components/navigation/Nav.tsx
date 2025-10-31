"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CheckPrices from "./CheckPrices";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  // Define nav links clearly
  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/service" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="w-full bg-white/70 backdrop-blur-md border-b border-gray-100 shadow-sm">
      {/* ===== Top Bar (Logo + Links) ===== */}
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-full w-10 h-10 md:w-12 md:h-12 overflow-hidden relative shadow-md">
            <Image
              src="/logo.jpg"
              alt="Melindas logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h1 className="font-bold text-sm md:text-lg leading-tight">
              Melindas Resort & Restaurant
            </h1>
            <p className="text-[11px] text-gray-500">Borongan, Philippines</p>
          </div>
        </div>

        {/* ===== Desktop Nav ===== */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-amber-600 text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Button
            size="sm"
            onClick={() => setShowBooking(!showBooking)}
            className="ml-2 bg-amber-500 hover:bg-amber-600 text-white"
          >
            Check Prices
          </Button>
        </nav>

        {/* ===== Mobile Menu Button ===== */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-md"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-2 border-b text-sm hover:text-amber-600"
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 mt-2 text-white"
                onClick={() => {
                  setMenuOpen(false);
                  setShowBooking(true);
                }}
              >
                Check Prices
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ===== Sticky Check Prices Widget ===== */}
      <AnimatePresence>
        {showBooking && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-xl border-t border-gray-200"
          >
            <div className="container mx-auto p-4">
              <CheckPrices onClose={() => setShowBooking(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
