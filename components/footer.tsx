import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Goggle Trading PLC</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Leading supplier of agricultural equipment, laboratory supplies, and educational materials in Ethiopia
              since 2003.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/251911304297"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/goggletrading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/goggletrading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@goggletrading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products#agricultural"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Agricultural Equipment
                </Link>
              </li>
              <li>
                <Link href="/products#laboratory" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Laboratory Supplies
                </Link>
              </li>
              <li>
                <Link href="/products#educational" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Educational Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Contact & Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <div className="text-gray-300 text-sm">
                  <p>Office: +251 11 550 9748</p>
                  <p>Mobile: +251 911 304 297</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">+251 911 304 297</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">tradinggoggle@google.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  Belay Zeleke Street
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="border-t border-gray-700 pt-3 mt-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 text-red-400 mt-1" />
                  <div className="text-gray-300 text-sm">
                    <p className="font-semibold text-red-400 mb-1">Office Hours:</p>
                    <p>Mon - Sat: 8:00 AM - 5:00 PM</p>
                    <p>Sun & Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Goggle Trading PLC. All rights reserved. | Quality Import • Export • Distribution
            </p>
            <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm flex-col md:flex-row">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 8AM-5PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+251 911 304 297</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>tradinggoggle@google.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
