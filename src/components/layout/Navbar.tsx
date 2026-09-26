"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, User, LogIn } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Fee Structure", href: "/fee-structure" },
    { name: "Faculty", href: "/faculty" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary group-hover:scale-105 transition-transform">
            <Image
              src="/logo.jpg"
              alt="Chanakya Classes Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled || pathname !== '/' ? 'text-primary' : 'text-white'}`}>
              CHANAKYA CLASSES
            </h1>
            <p className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${scrolled || pathname !== '/' ? 'text-accent-600' : 'text-accent-300'}`}>
              Knowledge • Discipline • Success
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group py-2 ${
                  scrolled || pathname !== '/' 
                    ? isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                    : isActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${scrolled || pathname !== '/' ? 'bg-primary/50' : 'bg-white/50'}`}></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className={`text-sm font-medium flex items-center gap-2 transition-colors ${
              scrolled || pathname !== '/' ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/register"
              className="text-sm font-medium bg-accent text-primary-950 px-5 py-2.5 rounded-md hover:bg-accent-light transition-colors shadow-md flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Register
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled || pathname !== '/' ? "text-gray-900" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white shadow-xl"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 p-2 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-gray-100" />
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-primary flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium bg-primary text-white px-4 py-3 rounded-md flex justify-center items-center gap-2 mt-2 shadow-sm"
              >
                <User className="w-4 h-4" />
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
