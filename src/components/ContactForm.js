import { useLang } from '../langContext'

export default function ContactForm() {
  const { lang } = useLang()

  return (
    <section className="bg-[#0d1512] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {lang === 'en' ? 'Contact us' : 'Хамтран ажиллах хүсэлт'}
        </h1>
        <p className="text-white/80 mb-8">
          {lang === 'en'
            ? 'We provide professional accounting and tax reporting services.'
            : 'Санхүү болон татварын тайлан гаргах үйлчилгээ үзүүлнэ.'}
        </p>

        <div className="rounded-2xl bg-[#05070a] border border-white/10 p-6 sm:p-8 shadow-lg shadow-black/40">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  {lang === 'en' ? 'Company name' : 'Таны компани'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Enter your company name' : 'Компанийн нэрээ бичих'}
                  className="w-full rounded-lg border border-white/10 bg-[#0b0f17] px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  {lang === 'en' ? 'Your name' : 'Таны нэр'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Enter your full name' : 'Өөрийн нэрээ бичих'}
                  className="w-full rounded-lg border border-white/10 bg-[#0b0f17] px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  {lang === 'en' ? 'Email address' : 'И-мэйл хаяг'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder={lang === 'en' ? 'Enter your email' : 'Цахим хаягаа бичих'}
                  className="w-full rounded-lg border border-white/10 bg-[#0b0f17] px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-xs text-white/40">
                  {lang === 'en' ? 'Example: user@example.com' : 'Жишээ: user@example.com'}
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-white/80">
                  {lang === 'en' ? 'Phone number' : 'Утасны дугаар'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder={lang === 'en' ? '+(976) 12345678' : '+(976) 12345678'}
                  className="w-full rounded-lg border border-white/10 bg-[#0b0f17] px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-white/80">
                {lang === 'en' ? 'Your question or request' : 'Асуух зүйлээ үлдээнэ үү.'}
              </label>
              <textarea
                rows={4}
                placeholder={
                  lang === 'en' ? 'Please describe your request in detail.' : 'Асуух зүйлээ дэлгэрэнгүй бичнэ үү.'
                }
                className="w-full rounded-lg border border-white/10 bg-[#0b0f17] px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-y"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/50"
            >
              {lang === 'en' ? 'Send' : 'Илгээх'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

