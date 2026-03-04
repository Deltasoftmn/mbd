import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '../langContext'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('consulting')
  const { lang } = useLang()

  const TABS = [
    { id: 'consulting', label: lang === 'en' ? 'Consulting services' : 'Зөвлөх үйлчилгээ' },
    { id: 'reporting', label: lang === 'en' ? 'Reporting services' : 'Тайлан гаргах үйлчилгээ' },
    {
      id: 'policy',
      label: lang === 'en' ? 'Accounting policy documentation' : 'Нягтлан бодох бүртгэлийн бодлогын баримт бичиг',
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20 bg-[#0d1512] min-h-screen pb-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
            {lang === 'en' ? 'Our services' : 'Бидний үйлчилгээ'}
          </h1>

          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            {/* Left sidebar - service categories */}
            <nav className="space-y-3">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-5 py-4 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#10b981] text-white'
                      : 'bg-[#161b22] text-white/90 hover:bg-[#10b981]/20 border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Right content */}
            <div className="bg-[#161b22] rounded-xl border border-white/5 p-6 md:p-8 text-white/90">
              {activeTab === 'consulting' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Зөвлөх үйлчилгээ</h2>
                  <p className="leading-relaxed">
                    Татвар төлөгчдийг татварын зөвлөгөө мэдээллээр хангах, тэдгээрийн хууль ёсны ашиг сонирхлыг хамгаалах юм.
                  </p>
                  <p className="leading-relaxed">
                    Шинээр төгссөн, мэргэжлээрээ ажиллаагүй удсан нягтлан бодогч танд мэдэхгүй чадахгүй зүйл их тулгарч байна уу? Бид танд чадварлаг нягтлан бодогч болоход нь туслах болно оо.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/85">
                    <li>Анхан шатны баримт үдэж цэгцлэх</li>
                    <li>Нягтлан бодох бүртгэлийн хөтлөлт /СТОУС/</li>
                    <li>Татварын хууль тогтоомж / түүнийг хэрхэн оновтой ашиглах вэ/</li>
                    <li>Салбарын бүртгэлийн ялгаа, онцлог, анхаарах чухал асуудлууд гээд л чадах мэдэх бүхнээрээ туслах болно.</li>
                  </ul>
                  <p className="leading-relaxed">
                    Та зөвлөгөө авсанаараа өөрийгөө ирээдүйд учирч болзошгүй эрсдэлээс урьдчилан сэргийлэх чадах юм.
                  </p>
                </div>
              )}

              {activeTab === 'reporting' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Тайлан гаргах үйлчилгээ</h2>
                  <p className="leading-relaxed">
                    Бид нягтлан бодох бүртгэлийн цогц үйлчилгээ буюу санхүүгийн аутсорсингийн үйлчилгээгээрээ байгууллага, аж ахуй нэгж, хуулийн этгээд, бизнес эрхлэгчийн санхүүг гэрээгээр хариуцан дараах ажлуудыг хийж гүйцэтгэнэ.
                  </p>
                  <div className="overflow-x-auto">
                    <div className="space-y-6 text-sm md:text-base">
                      <div>
                        <h3 className="font-semibold text-white mb-2">1. Санхүүгийн тайлан</h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>А. Санхүү байдлын тайлан</li>
                          <li>В. Орлогын дэлгэрэнгүй тайлан</li>
                          <li>С. Өмчийн өөрчлөлтийн тайлан</li>
                          <li>D. Мөнгөн гүйлгээний тайлан</li>
                          <li>Е. Нэмэлт тодруулга тайлан</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">2. Татварын тайлан</h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>А. Аж ахуйн нэгжийн орлогын албан татвар ТТ-02</li>
                          <li>В. Хувь хүний орлогын албан татвар ТТ-11, ТТ-11-1, ТТ-12</li>
                          <li>С. Нийслэл хотын албан татвар</li>
                          <li>D. Нэмэгдсэн өртгийн албан татвар ТТ-0За</li>
                          <li>Е. Үл хөдлөх эд хөрөнгийн албан татвар ТТ-23</li>
                          <li>F. Авто тээврийн өрөө явагч хэрэгслийн албан татвар</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">3. Нийгмийн даатгалын тайлан</h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>А. Нийгмийн даатгалын ногдуулалтын тайлан НД-8</li>
                          <li>В. Нийгмийн даатгалын төлөлтийн тайлан НД-76</li>
                          <li>С. Хөдөлмөрийн чадвараа түр алдсаны тэтгэмж НД-10</li>
                          <li>D. Жирэмсэн эхийн амаржсаны тэтгэмж НД-10а</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">4. Санхүү, татварын хоорондын зөрүү зохицуулах тайлан</h3>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">5. Бусад тайлан</h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>А. Ерөнхий дэвтэр</li>
                          <li>В. Ерөнхий журнал</li>
                          <li>С. Гүйлгээ шалгах баланс</li>
                          <li>D. Кассын тайлан</li>
                          <li>Е. Харилцахын тайлан</li>
                          <li>F. Өглөг авлагын товчоо тайлан</li>
                          <li>G. Бараа материалын тайлан</li>
                          <li>Н. Үндсэн хөрөнгийн тайлан</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">6. Нягтлан бодох бүртгэлтэй холбоотой бусад ажилбарууд</h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>А. Дотоод хяналт (Гэнэтийн тооллого, Хяналтын тооллого)</li>
                          <li>В. Өглөг авлагын тулган баталгаажуулалт</li>
                          <li>С. Бараа материалын тооллого</li>
                          <li>D. Баримт үдэж цэгцлэх</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'policy' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Нягтлан бодох бүртгэлийн бодлогын баримт бичиг</h2>
                  <p className="leading-relaxed">
                    Нягтлан бодох бүртгэлийн бодлогын баримт бичиг боловсруулах үйлчилгээ нь холбогдох хууль тогтоомж, стандарт, дүрэм, журам, зааварт нийцүүлсэн баримт бичгийн ҮЙЛЧИЛГЭЭНИЙ ЗОРИЛГО: Үйлчлүүлэгчийн үйл ажиллагааны онцлог, дотоод дүрэм, журам, зохион байгуулалтын бүтэцтэй уялдуулан санхүүгийн албаны үйл ажиллагааны процесс, нягтлан бодох бүртгэлийн зохион байгуулалтыг системчлэн хүний хүчин зүйлээс хамаарах эрсдэлийг бууруулахад оршино.
                  </p>
                  <p className="leading-relaxed">
                    Нягтлан бодох бүртгэлийн бодлогын бичиг баримтыг дараах циклүүдийн дагуу боловсруулагдана. Та өөрийн байгууллагын үйл ажиллагааны онцлогт тохируулан бодлогын бичиг баримтаа бэлтгүүлэх бүрэн боломжтой.
                  </p>
                  <p className="text-white font-medium">№ НББ-н бодлогын горимууд / Зарцуулах цаг</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 pr-4 text-white/80">№</th>
                          <th className="text-left py-2 pr-4 text-white/80">Горим</th>
                          <th className="text-right py-2 text-white/80">Цаг</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/85">
                        {[
                          [1, 'Нягтлан бодох бүртгэлийн бодлогын баримт бичгийн агуулга, нийтлэг үндэслэл', 8],
                          [2, 'Нягтлан бодох бүртгэлийн удирдлага, зохион байгуулалт', 8],
                          [3, 'Нягтлан бодох бүртгэлийн ерөнхий бодлого, зарчим', 8],
                          [4, 'Нягтлан бодох бүртгэлийн тусгай бодлого, горим', 8],
                          [5, 'Мөнгөн хөрөнгийн бүртгэл үйлдвэрлэлийн өртөг тооцолт', 16],
                          [6, 'Бараа материал', 32],
                          [7, 'Авлага ба урьдчилгаа тооцоо, Өр төлбөрийн бүртгэл', 24],
                          [8, 'Бусад санхүүгийн хөрөнгө ба Урт хугацаат хөрөнгө оруулалт', 24],
                          [9, 'Борлуулах зорилгоор эзэмшиж буй эргэлтийн бус хөрөнгө', 24],
                          [10, 'Үндсэн хөрөнгө', 24],
                          [11, 'Биет бус хөрөнгө', 24],
                          [12, 'Хайгуул ба үнэлгээний хөрөнгө', 16],
                          [13, 'Хөрөнгө оруулалтын зориулалттай үл хөдлөх хөрөнгийн бүртгэл', 16],
                          [14, 'Эзний өмчийн бүртгэл', 16],
                          [15, 'Гаалийн бүртгэл болон ачаа тээвэрийн бүртгэл өртгийн бүртгэл', 32],
                          [16, 'Орлогын бүртгэл', 16],
                          [17, 'Зардалын бүртгэл', 16],
                          [18, 'Татварын бүртгэл', 28],
                          [19, 'Нягтлан бодох бүртгэлтэй холбоотой журамууд /Мөнгөн хөрөнгө, бараа материал, үндсэн хөрөнгө/', 32],
                          [20, 'Хавсралт', 8],
                        ].map(([no, label, hours]) => (
                          <tr key={no} className="border-b border-white/5">
                            <td className="py-2 pr-4">{no}</td>
                            <td className="py-2 pr-4">{label}</td>
                            <td className="py-2 text-right">{hours} цаг</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[#10b981] font-semibold pt-2">Нийт зарцуулах цаг: 480 цаг</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
