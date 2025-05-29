import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"
import { Roboto } from "next/font/google"
// Add import at the top
import { MobileMenu } from "@/components/mobile-menu"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-biru-perak shadow-sm">
        <div className="container flex items-center justify-between h-20 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="BMT Fatihul Barokah Logo"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#tentang-kami"
              className="text-biru-utama hover:text-biru-terang transition-colors font-medium text-base"
            >
              Tentang Kami
            </a>
            <a
              href="#layanan"
              className="text-biru-utama hover:text-biru-terang transition-colors font-medium text-base"
            >
              Layanan
            </a>
            <a
              href="#simpanan"
              className="text-biru-utama hover:text-biru-terang transition-colors font-medium text-base"
            >
              Simpanan
            </a>
            <a
              href="#pinjaman"
              className="text-biru-utama hover:text-biru-terang transition-colors font-medium text-base"
            >
              Pinjaman
            </a>
            <a
              href="#cara-bergabung"
              className="text-biru-utama hover:text-biru-terang transition-colors font-medium text-base"
            >
              Cara Bergabung
            </a>
            <a
              href="#kontak"
              className="text-biru-utama hover:text-biru-terang transition-colors font-medium text-base"
            >
              Kontak
            </a>
          </nav>
          {/* Replace the mobile menu button in header with: */}
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-biru-utama via-biru-tua to-biru-utama text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Islamic Finance Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="relative container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <h1
                  className={`${roboto.className} text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight`}
                >
                  Bergabung dengan BMT Fatihul Barokah
                </h1>
                <p
                  className={`${roboto.className} text-biru-terang text-xl md:text-2xl font-normal leading-relaxed max-w-2xl`}
                >
                  Solusi Keuangan Syariah yang Aman dan Terpercaya.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className={`${roboto.className} bg-biru-terang hover:bg-biru-muda text-white font-medium text-lg px-8 py-4 h-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                  >
                    Daftar Sekarang
                  </Button>
                  <Button
                    size="lg"
                    className={`${roboto.className} bg-biru-terang hover:bg-biru-utama text-white font-medium text-lg px-8 py-4 h-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-biru-terang hover:border-biru-utama`}
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>
              <div className="relative h-[350px] md:h-[450px] lg:h-[550px]">
                <Image
                  src="/placeholder.svg?height=550&width=800"
                  alt="Koperasi Syariah"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tentang Kami Section */}
        <section id="tentang-kami" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4">
                <h2
                  className={`${roboto.className} text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-biru-utama`}
                >
                  Tentang BMT Fatihul Barokah
                </h2>
                <p className={`${roboto.className} mx-auto max-w-[800px] text-biru-perak md:text-xl leading-relaxed`}>
                  BMT Fatihul Barokah adalah lembaga keuangan mikro syariah yang berkomitmen untuk memberikan solusi
                  finansial berdasarkan prinsip-prinsip syariah. Didirikan dengan visi untuk membantu masyarakat dalam
                  mengembangkan usaha dan meningkatkan kesejahteraan ekonomi dengan cara yang halal dan berkah.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border border-biru-perak rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-biru-muda">
                  <CheckCircle className="h-8 w-8 text-biru-perak" />
                </div>
                <h3 className="text-xl font-bold text-biru-utama">Syariah Compliance</h3>
                <p className="text-center text-biru-perak">
                  Seluruh produk dan layanan kami sesuai dengan prinsip syariah Islam, bebas dari riba dan gharar.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-biru-perak rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-biru-muda">
                  <Users className="h-8 w-8 text-biru-perak" />
                </div>
                <h3 className="text-xl font-bold text-biru-utama">Aman dan Terpercaya</h3>
                <p className="text-center text-biru-perak">
                  Dikelola oleh tim profesional yang berpengalaman dan terpercaya dalam industri keuangan syariah.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-biru-perak rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="p-3 rounded-full bg-biru-muda">
                  <Wallet className="h-8 w-8 text-biru-perak" />
                </div>
                <h3 className="text-xl font-bold text-biru-utama">Bunga Nol Persen</h3>
                <p className="text-center text-biru-perak">
                  Kami menerapkan sistem bagi hasil yang adil dan transparan, tanpa bunga sesuai dengan prinsip syariah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Kami Section */}
        <section id="layanan" className="w-full py-12 md:py-24 lg:py-32 bg-biru-muda/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`${roboto.className} text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-biru-utama`}
                >
                  Layanan Kami
                </h2>
                <p className="mx-auto max-w-[700px] text-biru-perak md:text-xl">
                  BMT Fatihul Barokah menyediakan berbagai layanan keuangan syariah untuk memenuhi kebutuhan Anda.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div id="simpanan" className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-biru-muda">
                    <PiggyBank className="h-6 w-6 text-biru-utama" />
                  </div>
                  <h3 className="text-2xl font-bold text-biru-utama">Simpanan</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-biru-terang mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-biru-utama">Tabungan Wadiah</h4>
                      <p className="text-biru-perak">Simpanan yang dapat diambil sewaktu-waktu dengan akad wadiah.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-biru-terang mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-biru-utama">Tabungan Haji dan Umrah</h4>
                      <p className="text-biru-perak">Simpanan khusus untuk persiapan ibadah haji dan umrah.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-biru-terang mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-biru-utama">Deposito Mudharabah</h4>
                      <p className="text-biru-perak">Simpanan berjangka dengan bagi hasil yang kompetitif.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="pinjaman" className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-biru-muda">
                    <CreditCard className="h-6 w-6 text-biru-utama" />
                  </div>
                  <h3 className="text-2xl font-bold text-biru-utama">Pinjaman</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-biru-terang mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-biru-utama">Pembiayaan Murabahah</h4>
                      <p className="text-biru-perak">
                        Pembiayaan untuk pembelian barang dengan margin yang disepakati.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-biru-terang mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-biru-utama">Pembiayaan Mudharabah</h4>
                      <p className="text-biru-perak">Pembiayaan dengan sistem bagi hasil untuk modal usaha.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-biru-terang mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-biru-utama">Pembiayaan Ijarah</h4>
                      <p className="text-biru-perak">Pembiayaan untuk sewa barang atau jasa dengan akad ijarah.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cara Bergabung Section */}
        <section id="cara-bergabung" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`${roboto.className} text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-biru-utama`}
                >
                  Cara Bergabung
                </h2>
                <p className="mx-auto max-w-[700px] text-biru-perak md:text-xl">
                  Bergabung dengan BMT Fatihul Barokah sangat mudah. Ikuti langkah-langkah berikut:
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-biru-muda/20 rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-biru-terang flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-biru-utama mb-2">Daftar Online</h3>
                <p className="text-biru-perak">
                  Isi formulir pendaftaran online atau kunjungi kantor BMT Fatihul Barokah terdekat.
                </p>
              </div>
              <div className="bg-biru-muda/20 rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-biru-terang flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-biru-utama mb-2">Kirim Dokumen</h3>
                <p className="text-biru-perak">
                  Siapkan dan kirimkan dokumen yang diperlukan seperti KTP, KK, dan dokumen pendukung lainnya.
                </p>
              </div>
              <div className="bg-biru-muda/20 rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-biru-terang flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-biru-utama mb-2">Tunggu Konfirmasi</h3>
                <p className="text-biru-perak">
                  Tim kami akan memverifikasi dokumen Anda dan menghubungi untuk konfirmasi.
                </p>
              </div>
              <div className="bg-biru-muda/20 rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-biru-terang flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-biru-utama mb-2">Mulai Bertransaksi</h3>
                <p className="text-biru-perak">
                  Setelah disetujui, Anda dapat langsung menikmati layanan BMT Fatihul Barokah.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button
                className={`${roboto.className} bg-biru-terang hover:bg-biru-muda text-white font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </section>

        {/* Testimoni Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-biru-muda/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`${roboto.className} text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-biru-utama`}
                >
                  Apa Kata Anggota Kami
                </h2>
                <p className="mx-auto max-w-[700px] text-biru-perak md:text-xl">
                  Dengarkan pengalaman anggota yang telah bergabung dengan BMT Fatihul Barokah.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-biru-perak">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-biru-muda h-12 w-12 flex items-center justify-center">
                        <span className="text-biru-utama font-bold">AS</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-biru-utama">Ahmad Saputra</h3>
                        <p className="text-sm text-biru-perak">Pengusaha UMKM</p>
                      </div>
                    </div>
                    <p className="text-biru-utama">
                      "BMT Fatihul Barokah membantu saya mengembangkan usaha dengan pembiayaan yang sesuai syariah.
                      Prosesnya cepat dan pelayanannya ramah."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-biru-perak">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-biru-muda h-12 w-12 flex items-center justify-center">
                        <span className="text-biru-utama font-bold">SR</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-biru-utama">Siti Rahmawati</h3>
                        <p className="text-sm text-biru-perak">Ibu Rumah Tangga</p>
                      </div>
                    </div>
                    <p className="text-biru-utama">
                      "Tabungan di BMT Fatihul Barokah membuat saya tenang karena sesuai syariah. Bagi hasilnya juga
                      kompetitif dan transparan."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-biru-perak">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-biru-muda h-12 w-12 flex items-center justify-center">
                        <span className="text-biru-utama font-bold">HW</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-biru-utama">Hendra Wijaya</h3>
                        <p className="text-sm text-biru-perak">Pedagang</p>
                      </div>
                    </div>
                    <p className="text-biru-utama">
                      "Saya sangat terbantu dengan pembiayaan dari BMT Fatihul Barokah. Angsurannya ringan dan tidak
                      memberatkan usaha saya."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`${roboto.className} text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-biru-utama`}
                >
                  Pertanyaan yang Sering Diajukan
                </h2>
                <p className="mx-auto max-w-[700px] text-biru-perak md:text-xl">
                  Temukan jawaban untuk pertanyaan umum tentang BMT Fatihul Barokah.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-biru-perak">
                  <AccordionTrigger className="text-biru-utama hover:text-biru-terang">
                    Apa itu BMT Fatihul Barokah?
                  </AccordionTrigger>
                  <AccordionContent className="text-biru-perak">
                    BMT Fatihul Barokah adalah lembaga keuangan mikro syariah yang beroperasi berdasarkan
                    prinsip-prinsip syariah Islam. Kami menyediakan layanan keuangan seperti simpanan, pembiayaan, dan
                    layanan lainnya yang sesuai dengan syariah.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-biru-perak">
                  <AccordionTrigger className="text-biru-utama hover:text-biru-terang">
                    Bagaimana cara menjadi anggota BMT Fatihul Barokah?
                  </AccordionTrigger>
                  <AccordionContent className="text-biru-perak">
                    Untuk menjadi anggota, Anda perlu mengisi formulir pendaftaran, menyerahkan fotokopi KTP dan KK,
                    serta membayar simpanan pokok dan simpanan wajib sesuai ketentuan. Anda dapat mendaftar online atau
                    langsung mengunjungi kantor kami.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-biru-perak">
                  <AccordionTrigger className="text-biru-utama hover:text-biru-terang">
                    Apa perbedaan BMT dengan bank konvensional?
                  </AccordionTrigger>
                  <AccordionContent className="text-biru-perak">
                    BMT beroperasi berdasarkan prinsip syariah yang bebas dari riba (bunga), gharar (ketidakjelasan),
                    dan maysir (spekulasi). BMT menggunakan sistem bagi hasil yang adil dan transparan, bukan sistem
                    bunga seperti bank konvensional.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-biru-perak">
                  <AccordionTrigger className="text-biru-utama hover:text-biru-terang">
                    Berapa minimal setoran untuk membuka tabungan?
                  </AccordionTrigger>
                  <AccordionContent className="text-biru-perak">
                    Minimal setoran awal untuk membuka tabungan di BMT Fatihul Barokah bervariasi tergantung jenis
                    produk. Untuk tabungan wadiah, minimal setoran awal adalah Rp 50.000, sedangkan untuk deposito
                    mudharabah minimal Rp 1.000.000.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-biru-perak">
                  <AccordionTrigger className="text-biru-utama hover:text-biru-terang">
                    Bagaimana cara mengajukan pembiayaan?
                  </AccordionTrigger>
                  <AccordionContent className="text-biru-perak">
                    Untuk mengajukan pembiayaan, Anda perlu menjadi anggota BMT terlebih dahulu, kemudian mengisi
                    formulir pengajuan pembiayaan, menyerahkan dokumen yang diperlukan seperti KTP, KK, slip gaji atau
                    bukti penghasilan, dan jaminan sesuai ketentuan. Tim kami akan melakukan survei dan analisis sebelum
                    memberikan keputusan.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Formulir Kontak Section */}
        <section id="kontak" className="w-full py-12 md:py-24 lg:py-32 bg-biru-muda/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <h2
                  className={`${roboto.className} text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-biru-utama`}
                >
                  Hubungi Kami
                </h2>
                <p className="text-biru-perak md:text-xl">
                  Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, jangan ragu untuk menghubungi
                  kami.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-biru-muda">
                      <MapPin className="h-5 w-5 text-biru-utama" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-biru-utama">Alamat</h3>
                      <p className="text-biru-perak">Jl. Raya Fatihul Barokah No. 123, Kota, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-biru-muda">
                      <Phone className="h-5 w-5 text-biru-utama" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-biru-utama">Telepon</h3>
                      <p className="text-biru-perak">+62 123 4567 890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-biru-muda">
                      <Mail className="h-5 w-5 text-biru-utama" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-biru-utama">Email</h3>
                      <p className="text-biru-perak">info@bmtfatihulbarokah.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-biru-muda">
                      <Clock className="h-5 w-5 text-biru-utama" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-biru-utama">Jam Operasional</h3>
                      <p className="text-biru-perak">Senin - Jumat: 08.00 - 16.00</p>
                      <p className="text-biru-perak">Sabtu: 08.00 - 12.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-biru-utama mb-4">Kirim Pesan</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-biru-utama">
                          Nama Lengkap
                        </label>
                        <Input
                          id="name"
                          placeholder="Masukkan nama lengkap"
                          className="bg-biru-perak/20 border-biru-perak focus:border-biru-terang"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-biru-utama">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Masukkan email"
                          className="bg-biru-perak/20 border-biru-perak focus:border-biru-terang"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-biru-utama">
                        Nomor Telepon
                      </label>
                      <Input
                        id="phone"
                        placeholder="Masukkan nomor telepon"
                        className="bg-biru-perak/20 border-biru-perak focus:border-biru-terang"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-biru-utama">
                        Subjek
                      </label>
                      <Input
                        id="subject"
                        placeholder="Masukkan subjek pesan"
                        className="bg-biru-perak/20 border-biru-perak focus:border-biru-terang"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-biru-utama">
                        Pesan
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Masukkan pesan Anda"
                        className="min-h-[120px] bg-biru-perak/20 border-biru-perak focus:border-biru-terang"
                      />
                    </div>
                    <Button
                      className={`${roboto.className} bg-biru-terang hover:bg-biru-muda text-white font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
                    >
                      Kirim Pesan
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-biru-tua text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.jpeg"
                  alt="BMT Fatihul Barokah Logo"
                  width={150}
                  height={50}
                  className="h-auto bg-white p-2 rounded"
                />
              </div>
              <p className="text-biru-perak">
                BMT Fatihul Barokah adalah lembaga keuangan mikro syariah yang berkomitmen untuk memberikan solusi
                finansial berdasarkan prinsip-prinsip syariah.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#tentang-kami" className="text-biru-perak hover:text-biru-terang transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-biru-perak hover:text-biru-terang transition-colors">
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#cara-bergabung" className="text-biru-perak hover:text-biru-terang transition-colors">
                    Cara Bergabung
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="text-biru-perak hover:text-biru-terang transition-colors">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Produk</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#simpanan" className="text-biru-perak hover:text-biru-terang transition-colors">
                    Simpanan
                  </a>
                </li>
                <li>
                  <a href="#pinjaman" className="text-biru-perak hover:text-biru-terang transition-colors">
                    Pinjaman
                  </a>
                </li>
                <li>
                  <a href="#" className="text-biru-perak hover:text-biru-terang transition-colors">
                    Zakat & Wakaf
                  </a>
                </li>
                <li>
                  <a href="#" className="text-biru-perak hover:text-biru-terang transition-colors">
                    Pembayaran
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Kontak</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-biru-perak" />
                  <span className="text-biru-perak">Jl. Raya Fatihul Barokah No. 123, Kota, Indonesia</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-biru-perak" />
                  <span className="text-biru-perak">+62 123 4567 890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-biru-perak" />
                  <span className="text-biru-perak">info@bmtfatihulbarokah.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-biru-perak/30 mt-8 pt-8 text-center">
            <p className="text-biru-perak">
              &copy; {new Date().getFullYear()} BMT Fatihul Barokah. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
