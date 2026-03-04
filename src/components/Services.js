import { useLang } from '../langContext'

export default function Services() {
  const { lang } = useLang()

  const services = [
    {
      title:
        lang === 'en'
          ? 'Tax consulting and advisory services'
          : 'ТАТВАРЫН БҮХ ТӨРЛИЙН ЗӨВЛӨГӨӨ ҮЙЛЧИЛГЭЭ',
      icon: (
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
    },
    {
      title:
        lang === 'en'
          ? 'Tax calculation, bookkeeping and return preparation compliant with law'
          : 'ХУУЛИЙН ДАГУУ ТАТВАРЫН ТООЦООЛОЛ БОЛОН БҮРТГЭЛИЙГ ХИЙЖ ТАЙЛАН ГАРГАХ',
      icon: (
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-1-7h-4v-2h4v2zm0 4h-4v-2h4v2z" />
        </svg>
      ),
    },
    {
      title:
        lang === 'en'
          ? 'Representation before tax authorities and other parties'
          : 'ТАТВАРЫН БАЙГУУЛЛАГА БОЛОН БУСАД ЭТГЭЭДТЭЙ ТӨЛӨӨЛӨН ХАРИЛЦАХ',
      icon: (
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-24 px-4 relative bg-[#0d1512]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'en' ? 'MBD Tax Tactic LLC' : 'ЭМ БИ ДИ ТАКС ТАКТИК ХХК'}
          </h2>
          <div className="w-24 h-1 bg-[#10b981] rounded-full mx-auto mb-6" />
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            {lang === 'en'
              ? 'MBD Tax Tactic LLC was founded in 2021 to provide training from basic to professional level in accounting, certified tax advisory services, and comprehensive legal and financial consulting based on financial statements. We also provide outsourced accounting services and support for preparing tax and financial reports.'
              : 'ЭМ БИ ДИ ТАКС ТАКТИК ХХК нь 2021 онд нягтлан бодох бүртгэлийн анхан шатнаас мэргэшүүлэх түвшин хүртэлх сургалтын үйлчилгээ үзүүлэх, татварын мэргэшсэн зөвлөхийн үйлчилгээ үзүүлэх, санхүүгийн тайлан болон түүнд суурилсан компанийн хууль зүйн зөвлөгөө үйлчилгээг цогцоор нь хүргэхээр байгуулагдсан. Мөн санхүү болон татварын тайлан гаргах зөвлөгөө өгөх, гэрээт нягтлан бодогчийн үйлчилгээ үзүүлэхээр ажиллаж байна.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#161b22] rounded-2xl p-8 border border-white/5 hover:border-[#10b981]/40 transition-colors"
            >
              <div className="flex justify-center mb-6 text-[#10b981]">
                {service.icon}
              </div>
              <h3 className="text-white text-center font-medium text-sm md:text-base leading-relaxed">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
