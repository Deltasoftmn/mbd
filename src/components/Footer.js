import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '../langContext'

export default function Footer() {
  const { lang } = useLang()
  const navLinks = [
    { href: '/', label: lang === 'en' ? 'Home' : 'Нүүр хуудас' },
    { href: '/about', label: lang === 'en' ? 'About us' : 'Бидний тухай' },
    { href: '/services', label: lang === 'en' ? 'Services' : 'Бидний үйлчилгээ' },
    { href: '/training', label: lang === 'en' ? 'Training' : 'Сургалт' },
  ]

  return (
    <footer id="contact" className="bg-[#161b22] border-t border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo and nav */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="MBD Tax Tactic лого"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#10b981] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <a
              href="tel:+97670178090"
              className="flex items-center gap-3 text-white/80 hover:text-[#00cc66] transition-colors"
            >
              <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+976 7017 8090</span>
            </a>
            <div className="flex items-start gap-3 text-white/80">
              <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <span>
                {lang === 'en'
                  ? 'Ulaanbaatar, Bayangol district, 5th khoroo, Erdenet Suvraga Center, office 102'
                  : 'УБ, БГД, 5-р хороо, Эрдэнэт суврага төв 102 тоот'}
              </span>
            </div>
          </div>

          {/* QR code placeholder */}
          <div className="flex justify-end">
            <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
              <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 13h6v6H3v-6zm2 2v2h2v-2H5zm13-2h1v1h-1v-1zm-3 3h1v1h-1v-1zm-2 2h1v1h-1v-1zm4 0h1v1h-1v-1zm2 2h1v1h-1v-1zm-4 0h1v1h-1v-1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
