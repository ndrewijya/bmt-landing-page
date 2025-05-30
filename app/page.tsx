import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Users,
  Wallet,
  PiggyBank,
  CreditCard,
} from "lucide-react";
import { Roboto } from "next/font/google";
// Add import at the top
import { MobileMenu } from "@/components/mobile-menu";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

import type React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header dengan Logo yang Diperbaiki */}
      <header className="bg-white shadow-lg border-b-2 border-blue-100 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section - Tanpa Background */}
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="BMT Fatihul Barokah Logo"
                width={66}
                height={66}
                className="object-contain mr-3 hover:scale-105 transition-transform"
                priority
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 leading-tight">
                  BMT Fatihul Barokah
                </h1>
                <p className="text-sm text-blue-600 font-medium">
                  Solusi Keuangan Syariah
                </p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#tentang"
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-lg transition-colors hover:bg-blue-50"
              >
                Tentang Kami
              </a>
              <a
                href="#layanan"
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-lg transition-colors hover:bg-blue-50"
              >
                Layanan
              </a>
              <a
                href="#layanan"
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-lg transition-colors hover:bg-blue-50"
              >
                Simpanan
              </a>
              <a
                href="#layanan"
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-lg transition-colors hover:bg-blue-50"
              >
                Pinjaman
              </a>
              <a
                href="#kontak"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg font-medium"
              >
                Kontak
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 p-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content dengan padding top untuk fixed header */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Bergabung dengan BMT Fatihul Barokah
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Solusi Keuangan Syariah yang Aman dan Terpercaya
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                  Daftar Sekarang
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Hero Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Keuangan Syariah Digital
                </h3>
                <p className="text-blue-100 mb-6">
                  Nikmati layanan perbankan syariah yang modern dan terpercaya
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm text-blue-200">Anggota</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm text-blue-200">Layanan</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-200">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tentang Section */}
        <section id="tentang" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tentang BMT Fatihul Barokah
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                BMT Fatihul Barokah adalah lembaga keuangan mikro syariah yang
                berkomitmen untuk memberikan solusi finansial berdasarkan
                prinsip-prinsip syariah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="text-center p-8 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Syariah Compliance
                </h3>
                <p className="text-gray-600">
                  Seluruh produk dan layanan kami sesuai dengan prinsip syariah
                  Islam, bebas dari riba dan gharar.
                </p>
              </div>

              <div className="text-center p-8 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Aman dan Terpercaya
                </h3>
                <p className="text-gray-600">
                  Dikelola oleh tim profesional yang berpengalaman dan
                  terpercaya dalam industri keuangan syariah.
                </p>
              </div>

              <div className="text-center p-8 bg-purple-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Bunga Nol Persen
                </h3>
                <p className="text-gray-600">
                  Kami menerapkan sistem bagi hasil yang adil dan transparan,
                  tanpa bunga sesuai dengan prinsip syariah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Section */}
        <section id="layanan" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Layanan Kami
              </h2>
              <p className="text-xl text-gray-600">
                BMT Fatihul Barokah menyediakan berbagai layanan keuangan
                syariah untuk memenuhi kebutuhan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Simpanan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Simpanan
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Tabungan Wadiah
                    </h4>
                    <p className="text-gray-600">
                      Simpanan yang dapat diambil sewaktu-waktu dengan akad
                      wadiah.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Tabungan Umrah
                    </h4>
                    <p className="text-gray-600">
                      Simpanan khusus untuk persiapan ibadah umrah.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Deposito Mudharabah
                    </h4>
                    <p className="text-gray-600">
                      Simpanan berjangka dengan bagi hasil yang kompetitif.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pinjaman */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Pinjaman
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Pembiayaan Murabahah
                    </h4>
                    <p className="text-gray-600">
                      Pembiayaan untuk pembelian barang dengan margin yang
                      disepakati.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Pembiayaan Mudharabah
                    </h4>
                    <p className="text-gray-600">
                      Pembiayaan dengan sistem bagi hasil untuk modal usaha.
                    </p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Pembiayaan Ijarah
                    </h4>
                    <p className="text-gray-600">
                      Pembiayaan untuk sewa barang atau jasa dengan akad ijarah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-xl text-blue-100">
                Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih
                lanjut, jangan ragu untuk menghubungi kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Alamat</h3>
                <p className="text-blue-100">
                  Jl. Madrasah I No.26, RT.10/RW.1, Gandaria Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12420
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Telepon</h3>
                <p className="text-blue-100">+62 858 1925 0059</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Jam Operasional</h3>
                <p className="text-blue-100">
                  Senin - Jumat: 09.00 - 15.00
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
