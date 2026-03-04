import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useLang } from '../langContext'

export default function Header() {
  const router = useRouter()
  const { lang, setLang } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    {
      href: '/',
      label: lang === 'en' ? 'Home' : 'Нүүр хуудас',
    },
    {
      href: '/about',
      label: lang === 'en' ? 'About us' : 'Бидний тухай',
    },
    {
      href: '/services',
      label: lang === 'en' ? 'Services' : 'Бидний үйлчилгээ',
    },
    {
      href: '/training',
      label: lang === 'en' ? 'Training' : 'Сургалт',
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="MBD Tax Tactic лого"
              width={140}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-white border-b-2 border-[#10b981] pb-0.5'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <div className="inline-flex rounded-full border border-white/15 bg-white/5 overflow-hidden text-xs">
              <button
                type="button"
                onClick={() => setLang('mn')}
                className={`px-3 py-1.5 ${
                  lang === 'mn' ? 'bg-[#10b981] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                Монгол
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 ${
                  lang === 'en' ? 'bg-[#10b981] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
            <a
              href="https://www.facebook.com/MBDTaxTactic"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12.07C22 6.49 17.52 2 11.93 2 6.35 2 1.86 6.49 1.86 12.07c0 4.74 3.44 8.68 7.94 9.53v-6.75H7.5v-2.78h2.3V9.86c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.24h-1.14c-1.13 0-1.49.7-1.49 1.42v1.7h2.54l-.41 2.78h-2.13v6.75c4.5-.85 7.94-4.79 7.94-9.53z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/messages/t/637082169761283"
              target="_blank"
              rel="noreferrer"
              aria-label="Messenger"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.05 2 11.11 2 14.02 3.37 16.57 5.6 18.22v3.03l2.57-1.41c1.17.32 2.19.45 3.83.45 5.52 0 10-4.05 10-9.11C22 6.05 17.52 2 12 2zm1.01 11.9-2.56-2.73-4.94 2.73 5.44-5.82 2.6 2.73 4.9-2.73-5.44 5.82z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#10b981] text-white hover:bg-[#059669] transition-colors font-medium rounded"
            >
              {lang === 'en' ? 'Contact us' : 'Хамтран ажиллах'}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden ml-auto inline-flex items-center justify-center p-2 rounded text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#10b981]"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">Цэс нээх</span>
            <div className="flex flex-col justify-between h-4">
              <span className="block w-5 h-[2px] bg-white rounded" />
              <span className="block w-5 h-[2px] bg-white rounded" />
              <span className="block w-5 h-[2px] bg-white rounded" />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 pt-4 pb-3 space-y-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm px-1 ${
                      isActive
                        ? 'text-white border-l-2 border-[#10b981] pl-3'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center justify-between pt-2 gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex rounded-full border border-white/15 bg-white/5 overflow-hidden text-xs">
                  <button
                    type="button"
                    onClick={() => setLang('mn')}
                    className={`px-3 py-1.5 ${
                      lang === 'mn' ? 'bg-[#10b981] text-white' : 'text-white/70'
                    }`}
                  >
                    Монгол
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`px-3 py-1.5 ${
                      lang === 'en' ? 'bg-[#10b981] text-white' : 'text-white/70'
                    }`}
                  >
                    English
                  </button>
                </div>
                <a
                  href="https://www.facebook.com/MBDTaxTactic"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22 12.07C22 6.49 17.52 2 11.93 2 6.35 2 1.86 6.49 1.86 12.07c0 4.74 3.44 8.68 7.94 9.53v-6.75H7.5v-2.78h2.3V9.86c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.24h-1.14c-1.13 0-1.49.7-1.49 1.42v1.7h2.54l-.41 2.78h-2.13v6.75c4.5-.85 7.94-4.79 7.94-9.53z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/messages/t/637082169761283"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Messenger"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.05 2 11.11 2 14.02 3.37 16.57 5.6 18.22v3.03l2.57-1.41c1.17.32 2.19.45 3.83.45 5.52 0 10-4.05 10-9.11C22 6.05 17.52 2 12 2zm1.01 11.9-2.56-2.73-4.94 2.73 5.44-5.82 2.6 2.73 4.9-2.73-5.44 5.82z" />
                  </svg>
                </a>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-4 py-2.5 bg-[#10b981] text-white hover:bg-[#059669] transition-colors font-medium rounded"
              >
                {lang === 'en' ? 'Contact us' : 'Хамтран ажиллах'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
