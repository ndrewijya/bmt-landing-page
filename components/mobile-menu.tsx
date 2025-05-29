"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: "#tentang-kami", label: "Tentang Kami" },
    { href: "#layanan", label: "Layanan" },
    { href: "#simpanan", label: "Simpanan" },
    { href: "#pinjaman", label: "Pinjaman" },
    { href: "#cara-bergabung", label: "Cara Bergabung" },
    { href: "#kontak", label: "Kontak" },
  ]

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="text-biru-utama hover:text-biru-terang"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-biru-perak shadow-lg z-50">
          <nav className="container px-4 py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-biru-utama hover:text-biru-terang transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-biru-perak">
                <Button className="w-full bg-biru-terang hover:bg-biru-muda text-white">Daftar Sekarang</Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
