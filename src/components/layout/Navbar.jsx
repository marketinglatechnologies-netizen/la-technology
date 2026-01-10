"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { PhoneCall, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null); // Ref to track the entire navbar area

  // Handle Click Outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is NOT inside the navbar, close all dropdowns
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveAccordion(null);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-[60] w-full bg-white border-b border-gray-100 font-poppins shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-6 md:px-6 px-4 relative">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0 relative z-[70]">
          <img
            src="/assets/svgs/logo.svg"
            alt="LA TECH Logo"
            className="h-9 md:h-10 lg:h-11 xl:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center lg:space-x-5 xl:space-x-10">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative py-2"
              // Desktop: Hover triggers dropdown
              onMouseEnter={() => setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.dropdown || link.megaMenu ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label
                    );
                  }}
                  className={`lg:text-[13px] xl:text-[15px] font-semibold flex items-center transition-colors whitespace-nowrap ${
                    openDropdown === link.label
                      ? "text-la-orange"
                      : "text-gray-800"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-300 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="lg:text-[13px] xl:text-[15px] font-semibold whitespace-nowrap text-gray-800 hover:text-la-orange transition-colors"
                >
                  {link.label}
                </Link>
              )}

              {/* Desktop Dropdown Content */}
              <AnimatePresence>
                {/* MEGA MENU – only for What We Do */}
                {link.megaMenu && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-1/2 -translate-x-[40%] pt-6 z-[100]"
                  >
                    <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-8 grid grid-cols-3 gap-10 min-w-[900px]">
                      {link.megaMenu.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-la-red font-semibold mb-4">
                            {section.title}
                          </h4>
                          <ul className="space-y-3">
                            {section.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="text-sm text-gray-700 hover:text-la-orange transition"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* NORMAL DROPDOWN – for others */}
                {link.dropdown &&
                  !link.megaMenu &&
                  openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full -left-4 pt-2 w-max z-[100]"
                    >
                      <div className="bg-white shadow-2xl border border-gray-100 rounded-xl min-w-[240px] p-3">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm hover:bg-la-cream rounded-lg"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden lg:flex bg-la-gradient text-white xl:px-6 lg:px-4 py-2.5 rounded-xl font-bold text-xs xl:text-sm items-center gap-2 hover:opacity-90 transition-all shadow-md"
          >
            <PhoneCall size={16} strokeWidth={2.5} />
            <span className="hidden xl:inline">Contact us</span>
            <span className="xl:hidden">Contact</span>
          </Link>

          {/* Hamburger Menu (Tablets & Mobile) */}
          <button
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Code remains standard for touch support) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/40 z-[65] backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <img src="/assets/svgs/logo.svg" alt="Logo" className="h-10" />
                <button onClick={closeMobileMenu}>
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-10">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="mb-8">
                    {link.dropdown || link.megaMenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveAccordion(
                              activeAccordion === link.label ? null : link.label
                            )
                          }
                          className="flex items-center justify-between w-full text-xl font-bold text-gray-900"
                        >
                          {link.label}
                          <ChevronDown
                            className={`transition-transform duration-300 ${
                              activeAccordion === link.label ? "rotate-180" : ""
                            }`}
                            size={22}
                          />
                        </button>
                        <AnimatePresence>
                          {activeAccordion === link.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden mt-4 ml-2 border-l-2 border-la-cream pl-4"
                            >
                              <div className="flex flex-col gap-4 py-2">
                                {link.megaMenu
                                  ? link.megaMenu.map((section) => (
                                      <div key={section.title} className="mb-6">
                                        <p className="text-sm font-semibold text-la-red mb-3">
                                          {section.title}
                                        </p>
                                        <div className="flex flex-col gap-3 pl-3">
                                          {section.items.map((item) => (
                                            <Link
                                              key={item.label}
                                              href={item.href}
                                              onClick={closeMobileMenu}
                                              className="text-gray-600 text-base"
                                            >
                                              {item.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ))
                                  : link.dropdown.map((sub) => (
                                      <Link
                                        key={sub.label}
                                        href={sub.href}
                                        onClick={closeMobileMenu}
                                        className="text-gray-600 text-base"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="text-xl font-bold block text-gray-900"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gray-50">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="w-full bg-la-gradient text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-lg shadow-lg"
                >
                  <PhoneCall size={20} /> Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
