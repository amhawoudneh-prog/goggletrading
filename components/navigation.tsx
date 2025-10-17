"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Facebook, Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

const logoStyles = `
  .logo-light {
    filter: hue-rotate(0deg) saturate(1.2) brightness(0.8) contrast(1.1);
    mix-blend-mode: multiply;
  }
  
  .logo-dark {
    filter: brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(340deg) brightness(1.2) contrast(1.3);
    mix-blend-mode: normal;
  }
  
  .group:hover .logo-light {
    filter: hue-rotate(0deg) saturate(1.3) brightness(0.7) contrast(1.2);
  }
  
  .group:hover .logo-dark {
    filter: brightness(0) invert(1) sepia(1) saturate(2.2) hue-rotate(340deg) brightness(1.4) contrast(1.4);
  }
`

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <style jsx>{logoStyles}</style>
      <nav className="bg-white dark:bg-gray-900 shadow-xl sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Original font size maintained */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative p-2 bg-gradient-to-br from-red-700/30 to-red-500/30 rounded-xl transition-all duration-300 group-hover:from-red-600/40 group-hover:to-red-500/40 text-black bg-red-950">
                <Image
                  src="/goggle-logo-transparent.png"
                  alt="Goggle Trading PLC Logo"
                  width={45}
                  height={25}
                  className="transition-all duration-300"
                  style={{
                    filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(340deg) brightness(0.9)",
                  }}
                />
              </div>
              {/* Company name - original font size restored */}
              <div className="hidden sm:block">
                <div className="font-bold text-2xl text-red-800 dark:text-red-400 tracking-wide transition-colors duration-300 group-hover:text-red-900 dark:group-hover:text-red-300">
                  GOGGLE TRADING PLC
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                  Quality Import • Export • Distribution
                </div>
              </div>
              {/* Mobile company name - original size */}
              <div className="block sm:hidden">
                <div className="font-bold text-lg text-red-800 dark:text-red-400 tracking-wide transition-colors duration-300 group-hover:text-red-900 dark:group-hover:text-red-300">
                  {"GOGGLE TRADING PLC\n"}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                  Quality Import • Export • Distribution
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Social Media Links & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://wa.me/251911304297"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/goggletrading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/goggletrading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@goggletrading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800"
                title="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <ThemeToggle />
            </div>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                asChild
                className="hidden md:flex bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 text-white"
                size="sm"
              >
                <a href="tel:+251911304297">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>

              {/* Mobile menu button */}
              <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Only one company name entry */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
              {/* Single company info section in mobile menu */}

              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile actions */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <Button
                    asChild
                    size="sm"
                    className="bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 text-white"
                  >
                    <a href="tel:+251115509748">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>

                  {/* Social media links and theme toggle in mobile */}
                  <div className="flex items-center justify-center space-x-4 pt-2">
                    <a
                      href="https://wa.me/251911304297"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20"
                      title="WhatsApp"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>
                    <a
                      href="https://facebook.com/goggletrading"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      title="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/goggletrading"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20"
                      title="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://tiktok.com/@goggletrading"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800"
                      title="TikTok"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
                      </svg>
                    </a>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
