import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamMemberCard from '@/components/TeamMemberCard'
import { useLang } from '../langContext'

const teamMembers = [
  { nameMn: 'Үүсгэн байгуулагч', nameEn: 'Founder', roleMn: 'Татварын мэргэжилтэн', roleEn: 'Tax specialist', image: '/team/team1.jpg' },
  { nameMn: 'Гүйцэтгэх захирал', nameEn: 'CEO', roleMn: 'Нягтлан бодох бүртгэлийн мэргэжилтэн', roleEn: 'Accounting specialist', image: '/team/team2.jpg' },
  { nameMn: 'Мэргэшсэн нягтлан бодогч', nameEn: 'Certified accountant', roleMn: 'Татварын зөвлөгөө үйлчилгээ', roleEn: 'Tax advisory services', image: '/team/team3.jpg' },
]

export default function AboutPage() {
  const { lang } = useLang()
  return (
    <>
      <Header />
      <main className="pt-20 bg-[#0d1512] min-h-screen">
        {/* Бидний тухай */}
        <section id="bidni-tuhai" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              {lang === 'en' ? 'About us' : 'Бидний тухай'}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10b981] mb-6 text-center">
              {lang === 'en' ? 'MBD Tax Tactic LLC' : 'ЭМ БИ ДИ ТАКС ТАКТИК ХХК'}
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
              {lang === 'en'
                ? 'MBD Tax Tactic LLC was established in 2021 to provide accounting training from entry to professional level, certified tax advisory services, and comprehensive legal consulting based on financial statements. We also provide tax and financial reporting support and outsourced accounting services. We currently work with more than 100 clients, have successfully trained over 250 beginner accountants, and through our advanced programs have prepared more than 30 certified accountants and 40 certified tax advisors. We actively cooperate with “Erdmiin Undarga Consulting Center” and the auditing firm “MBD RD Star Tax”.'
                : 'ЭМ БИ ДИ ТАКС ТАКТИК ХХК нь 2021 онд нягтлан бодох бүртгэлийн анхан шатнаас мэргэшүүлэх түвшин хүртэлх сургалтын үйлчилгээ үзүүлэх, татварын мэргэшсэн зөвлөхийн үйлчилгээ үзүүлэх, санхүүгийн тайлан болон түүнд суурилсан компанийн хууль зүйн зөвлөгөө үйлчилгээг цогцоор нь хүргэхээр байгуулагдсан. Мөн санхүү болон татварын тайлан гаргах зөвлөгөө өгөх, гэрээт нягтлан бодогчийн үйлчилгээ үзүүлэхээр ажиллаж байна. Одоогоор 100 гаруй байгууллагатай хамтран ажиллаж, 250 гаруй суралцагч анхан шатны хөтөлбөрөө амжилттай төгссөн, салбарт мэргэжлийн эхний шатны нягтлан бодогчийн албан тушаалд ажиллаж байна. Мэргэжил дээшлүүлэх хөтөлбөрт 160 гаруй суралцагч онлайн болон нүүрэн амны сургалтад оролцож, 30 гаруй мэргэшсэн нягтлан бодогч, 40 гаруй татварын мэргэшсэн зөвлөх бэлтгэж, үйл ажиллагаагаа өргөжүүлэн хөгжүүлж байна. \"ЭРДМИЙН УНДАРГА ЗӨВЛӨХ ҮЙЛЧИЛГЭЭНИЙ ТӨВ\" болон Auditing / \"ЭМ БИ ДИ АР ДИ СТАР ТАКС\" байгууллагуудтай ойр хамтрал эрхэлж байна.'}
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              {lang === 'en' ? 'Our current team' : 'Одоогоор'}
            </h3>
            <ul className="text-white/85 text-base md:text-lg leading-relaxed mb-8 space-y-2 list-disc list-inside">
              {lang === 'en' ? (
                <>
                  <li>One permanent certified accountant and certified tax advisor</li>
                  <li>Two certified tax advisors</li>
                  <li>Seven accountants</li>
                  <li>One legal advisor</li>
                  <li>One marketing advisor — 12 staff in total.</li>
                </>
              ) : (
                <>
                  <li>Хугацаагүй мэргэшсэн нягтлан бодогч, татварын мэргэшсэн зөвлөх нэг</li>
                  <li>Татварын мэргэшсэн зөвлөх хоёр</li>
                  <li>Нягтлан бодогч долоо</li>
                  <li>Хуулийн зөвлөх нэг</li>
                  <li>Маркетингийн зөвлөх нэг орон тоотойгоор нийт 12 ажилтантай үйл ажиллагаагаа явуулж байна.</li>
                </>
              )}
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">
              {lang === 'en' ? 'Our vision' : 'Манай компанийн алсын хараа:'}
            </h3>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
              {lang === 'en'
                ? 'To become a benchmark company in our sector by providing quality, professional services within Mongolia\'s financial and tax legal framework.'
                : 'Монгол улсын санхүү, татварын эрх зүйн хүрээнд чанартай, мэргэшсэн үйлчилгээ үзүүлэн өөрийн салбарын жишиг компани болох.'}
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              {lang === 'en' ? 'Mission' : 'Эрхэм зорилго:'}
            </h3>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
              {lang === 'en'
                ? 'To integrate global innovations in finance and accounting into our offerings, prioritize client satisfaction, and deliver real value through our services regardless of time and place.'
                : 'Санхүү нягтлан бодох бүртгэлийн дэлхийн инновацийг өөрсдийн бүтээгдэхүүнд шингээн хэрэглэгчийн сэтгэл ханамжийг дээдлэн цаг хугацаа, орон зай үл хамааран үйлчилгээ үзүүлэн бодит үр өгөөжийг харилцагчид бий болгох.'}
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              {lang === 'en' ? 'Goals' : 'Зорилт:'}
            </h3>
            <ul className="text-white/85 text-base md:text-lg leading-relaxed space-y-2 list-disc list-inside">
              {lang === 'en' ? (
                <>
                  <li>Build a capable, professional and stable workforce</li>
                  <li>Be an innovator and initiator of new ideas</li>
                  <li>To continuously listen to the needs, interests and feedback of our clients and partners, and to improve our products and services accordingly.</li>
                </>
              ) : (
                <>
                  <li>Чадвартай, мэргэшсэн тогтвортой хүний нөөцийг бүрдүүлэх</li>
                  <li>Шинэлэг шинийг санаачлагч байх</li>
                  <li>Харилцагч, хэрэглэгчдийн хүсэл, сонирхол, шүүмжийг цаг үргэлж сонсох нь бидний бүтээгдэхүүнийг хөгжүүлэх, үйлчилгээг төгөлдөржүүлэх зорилтууд юм.</li>
                </>
              )}
            </ul>
          </div>
        </section>

        {/* Мэндчилгээ */}
        <section id="mendchilgee" className="py-20 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center md:text-left">
                {lang === 'en' ? 'Greetings' : 'Мэндчилгээ'}
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                {lang === 'en' ? (
                  <>
                    We are pleased to greet you—our valued clients, partner organizations, and students—through our website.
                    <br /><br />
                    We work hard as a trusted partner to our client organizations, in line with growing market demands and for the long term, with the drive and dedication of our team. We are grateful for the support and feedback from the partner organizations that evaluate and encourage our performance. We extend our sincere thanks to all our colleagues and partner organizations who build this success with us, and wish them success in their work and happiness in life.
                    <br /><br />
                    We believe you will find more detailed information about our organization&apos;s goals and activities through this website.
                  </>
                ) : (
                  <>
                    Эрхэм хүндэт харилцагч, хамтран ажилладаг байгуулагууд болон суралцагчид та бүхэнтэйгээ цахим хуудсаараа мэндчилж байгаадаа баяртай байна.
                    <br /><br />
                    Өсөн нэмэгдэж буй зах зээлийн шаардлагад нийцүүлэн харилцагч байгууллагуудынхаа итгэлт түнш нь байх, урт хугацааны зорилгын төлөө, хамт олныхоо урам зориг, сэтгэл зүтгэлээр шаргуу ажиллаж байна. Бидний ажлын гүйцэтгэлд үнэлэлт, дүгнэлт өгч, урамшуулж ажилладаг түнш байгууллагуудаасаа бид асар их урам зоригийг авдагаа хэлэхэд таатай байна. Бидний амжилтыг хамтдаа бүтээлцэж буй нийт хамт олон болон хамтран ажиллагч нийт байгууллагууддаа чин сэтгэлийн талархал илэрхийлэхийн ялдамд цаашдын ажилд нь амжилт, амьдралд нь аз жаргалыг хүсэн ерөөе.
                    <br /><br />
                    Манай вэбээр дамжуулан байгууллагын зорилго, үйл ажиллагааны чиглэлийн талаар илүү дэлгэрэнгүй мэдээллийг авна гэдэгт итгэлтэй байна.
                  </>
                )}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-[#161b22] border border-white/10">
                <Image
                  src="/mend1.jpg"
                  alt={lang === 'en' ? 'Greetings' : 'Мэндчилгээ'}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Баг бүрэлдэхүүн - with images */}
        <section id="bag-bureldehuun" className="py-20 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              {lang === 'en' ? 'Our team' : 'Баг бүрэлдэхүүн'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <TeamMemberCard
                  key={i}
                  member={{
                    name: lang === 'en' ? member.nameEn : member.nameMn,
                    role: lang === 'en' ? member.roleEn : member.roleMn,
                    image: member.image,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
