"use client";

import React, { useState } from "react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/actions", label: "Actions" },
  { href: "/calendar", label: "Calendar" },
  { href: "/community", label: "Community" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" }];


  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50" data-oid="nz59vh-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="z3uwiui">
          <div className="flex items-center justify-between h-16" data-oid="rv5a-vt">
            {/* Logo */}
            <div className="flex-shrink-0" data-oid="rwk1u_o">
              <a
                href="/"
                className="font-serif font-bold text-xl text-primary-green-dark hover:text-primary-green transition-colors duration-200" data-oid="0pr57zp">

                #MonthlyEarthDay
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" data-oid="h:r3qki">
              {navLinks.map((link) =>
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-dark-gray hover:text-primary-green transition-colors duration-200 font-medium" data-oid="xxuuikk">

                  {link.label}
                </a>
              )}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-neutral-dark-gray hover:text-primary-green hover:bg-neutral-light-gray transition-colors duration-200" data-oid="tq.ufi8">

              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" data-oid=".tj9.m.">

                {isMobileMenuOpen ?
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" data-oid="jt:xphg" /> :


                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" data-oid="z14lt7e" />

                }
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen &&
      <div className="fixed inset-0 z-40 md:hidden" data-oid="bpz1au5">
          <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)} data-oid="7spxafx" />

          <div className="fixed top-16 left-0 right-0 bg-white shadow-lg animate-slide-up" data-oid="kbhq59:">
            <nav className="px-4 py-6 space-y-4" data-oid="rmldhgs">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-lg font-medium text-neutral-dark-gray hover:text-primary-green transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)} data-oid="3fn6fm9">

                  {link.label}
                </a>
            )}
            </nav>
          </div>
        </div>
      }
    </>);

}