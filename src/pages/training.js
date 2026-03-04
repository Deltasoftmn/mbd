import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '../langContext'

const MAIN_TABS_BASE = [
  {
    id: 'financial-report-method',
    labelMn: 'Санхүүгийн тайлан гаргах арга зүйн сургалт',
    labelEn: 'Financial statement preparation training',
  },
  {
    id: 'cpa',
    labelMn: 'Мэргэшсэн нягтлан бодогч эрх олгох шалгалтанд бэлтгэх сургалт / CPA /',
    labelEn: 'CPA exam preparation training',
  },
]

const CPA_SUB_TABS = [
  { id: 'sanhuu-taiлагnal', labelMn: 'Санхүүгийн тайлагнал', labelEn: 'Financial reporting' },
  { id: 'huuli', labelMn: 'Хууль', labelEn: 'Law & tax law' },
  {
    id: 'ortog',
    labelMn: 'Өртөг ба гүйцэтгэлийн удирдлага',
    labelEn: 'Cost and performance management',
  },
  { id: 'sanhuu-menejment', labelMn: 'Санхүүгийн менежмент', labelEn: 'Financial management' },
]

const FINANCIAL_REPORT_SYLLABUS = [
  [1, 'НББ-н тухай ойлголт, данс', 4, 'Ерөнхий ойлголт ба зарчимууд, дансны харилцаа-уялдаа холбоо, Т данс', ''],
  [2, 'Тохиргоо бичилт', 4, 'УТЗ, УОО ба элэгдэл тооцох', ''],
  [3, 'Ерөнхий журнал, гүйлгээ шалгах баланс', 4, 'ЕЖ-д гүйлгээ бүртгэх, ГШБ тэнцүүлэх', ''],
  [4, 'Давтлага хичээл', 4, '', ''],
  [5, 'Бараа материал', 4, 'БМ-г байнгын ба цаг үеийн системээр өртөг тооцох', ''],
  [6, 'Санхүүгийн тайлан', 4, 'Санхүүгийн 4 тайлан гаргана', ''],
  [7, 'Цалин, хөдөлмөрийн хөлс', 4, 'Цалин бодох тооцооллуудыг бодно', ''],
  [8, 'НДШ, ХХОАТ', 4, 'НДШ, ХХОАТ-н тайлан гаргана, маягт бөглөнө', ''],
  [9, 'ААНОАТ', 4, 'ААНОАТ-н тайлан гаргана, маягт бөглөнө', ''],
  [10, 'НӨАТ', 4, 'НӨАТ-н тайлан гаргаж, маягт бөглөнө', ''],
  [11, '/цогц бодлого/', 10, 'Практикт суурилсан бодлого', 'Бие даалт'],
  [12, 'Программ', 10, 'Санхүүгийн программ ашиглаж сурна', ''],
]

const STANDARDS_TABLE = [
  ['НББОУС 2', 'Бараа материал', 6],
  ['СТОУС 5', 'Борлуулах зориулалтаар эзэмшиж буй хөрөнгө ба зогсоосон үйл ажиллагаа', 2],
  ['НББОУС 10', 'Үндсэн хөрөнгө', 4],
  ['НББОУС 23', 'Зээлийн өртөг', 4],
  ['НББОУС 38', 'Биет бус хөрөнгө', 4],
  ['СТОУС 16', 'Түрээс', 4],
  ['НББОУС 40', 'Хөрөнгө оруулалтын зориулалттай үл хөдлөх хөрөнгө', 2],
  ['НББОУС 36', 'Хөрөнгийн үнэ цэнийн бууралт', 4],
  ['НББОУС 37', 'Нөөц, болзошгүй өр ба болзошгүй хөрөнгө', 6],
  ['СТОУС 7, 9 НББОУС 32, 39', 'Санхүүгийн хэрэгсэл', 6],
  ['СТОУС 15', 'Худалдан авагчид байгуулсан гэрээний орлого', 4],
  ['НББОУС 20', 'Засгийн газрын тусламжийг нягтлан бодох бүртгэл ба засгийн газрын туслалцааны тодруулга', 2],
  ['НББОУС 12', 'Орлогын албан татвар', 4],
  ['СТОУС 6', 'Ашигт малтмалын хайгуул ба үнэлгээ', 4],
  ['НББОУС 41', 'Хөдөө аж ахуй', 2],
  ['НББОУС 7', 'Мөнгөн гүйлгээний тайлан', 4],
  ['НББОУС 8', 'Нягтлан бодох бүртгэлийн бодлого, нягтлан бодох бүртгэлийн тооцооны өөрчлөлт ба алдаа', 2],
  ['НББОУС 33', 'Нэгж хувьцаанд ногдох ашиг', 8],
  ['НББОУС 21', 'Гадаад валютын ханшийн өөрчлөлтийн үр нөлөө', 4],
  ['СТОУС 3', 'Бизнесийн нэгдэл', 8],
  ['СТОУС 10', 'Нэгтгэсэн санхүүгийн тайлан', 12],
  ['НББОУС 28', 'Хараат компанид оруулсан хөрөнгө оруулалт', 8],
]

export default function TrainingPage() {
  const { lang } = useLang()
  const [activeTab, setActiveTab] = useState('financial-report-method')
  const [cpaSubTab, setCpaSubTab] = useState('sanhuu-taiлагnal')
  const [financeDetailTab, setFinanceDetailTab] = useState('ifrs')

  const getTabContent = () => {
    if (activeTab === 'financial-report-method') {
      return (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en'
              ? 'Financial statement preparation training'
              : 'Санхүүгийн тайлан гаргах арга зүйн сургалт'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'en'
              ? 'This course teaches you how to prepare financial, tax, and social insurance reports based on source documents, and how to read financial statements in order to make informed decisions. You will practice preparing reports manually, in Excel, and in accounting software.'
              : 'Анхан шатны баримтад үндэслэн мэдээлэл боловсруулж санхүү, татвар, нийгмийн даатгалын тайлан бэлтгэж сурах, санхүүгийн тайлан уншиж оновчтой шийдвэр гаргах чадвартай болоход оршино. Ангиас сонгон суралцаж гар аргаар, эксел файл болон санхүүгийн програм дээр тайлан гаргаж сурна.'}
          </p>
                  <div className="space-y-4">
            <p className="font-medium text-white">
              {lang === 'en' ? '1.1 Course objective:' : '1.1 ХИЧЭЭЛИЙН ЗОРИЛГО:'}
            </p>
            <p className="leading-relaxed">
              {lang === 'en'
                ? 'To train participants to process business transactions, record them correctly, and prepare complete financial statements in accordance with IFRS and relevant legislation within the required deadlines.'
                : 'Бизнесийн байгууллагын аж ахуйн үйл ажиллагаа, ажил гүйлгээний мэдээллийг боловсруулах, бүртгэлд тусгах, бүртгэлийн мэдээллийг ашиглан санхүүгийн тайланг тогтоосон хугацаанд нь СТОУС болон бусад хууль тогтоомжийн дагуу иж бүрэн санхүүгийн тайлан бэлтгэн гаргах арга зүйд сургах зорилготой.'}
            </p>
            <p className="font-medium text-white">
              {lang === 'en' ? '1.2 Main topics:' : '1.2 ХИЧЭЭЛИЙН ҮНДСЭН АГУУЛГА:'}
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              {lang === 'en' ? (
                <>
                  <li>Introduction to accounting and accounts</li>
                  <li>Adjusting entries</li>
                  <li>General journal and trial balance</li>
                  <li>Inventory</li>
                  <li>Financial statements</li>
                  <li>Salaries and wages</li>
                  <li>Social insurance and personal income tax</li>
                  <li>Corporate income tax return</li>
                  <li>Value added tax return</li>
                  <li>Comprehensive case study</li>
                </>
              ) : (
                <>
                  <li>НББ-н тухай ойлголт, данс</li>
                  <li>Тохиргоо бичилт</li>
                  <li>Ерөнхий журнал, гүйлгээ шалгах баланс</li>
                  <li>Бараа материал</li>
                  <li>Санхүүгийн тайлан</li>
                  <li>Цалин, хөдөлмөрийн хөлс</li>
                  <li>НДШ, ХХОАТ</li>
                  <li>Аж ахуй нэгжийн орлогын албан татварын тайлан</li>
                  <li>Нэмэгдсэн өртгийн албан татвар</li>
                  <li>Эрдэм трейд /цогц бодлого/</li>
                </>
              )}
            </ul>
            <p className="font-medium text-white">
              {lang === 'en' ? '1.3 Knowledge:' : '1.3 МЭДЛЭГ:'}
            </p>
            <p className="leading-relaxed">
              {lang === 'en'
                ? 'You will gain a foundational understanding of an entity’s assets, liabilities and equity, and how they are structured and presented in financial statements.'
                : 'Аж ахуй нэгжийн хөрөнгө, өр төлбөр, цэвэр хөрөнгийг зохих журмын дагуу ашиглан, бүтэц бүрэлдэхүүнийг судлан, санхүүгийн анхан шатны мэдлэгийг эзэмшинэ.'}
            </p>
            <p className="font-medium text-white">
              {lang === 'en' ? '1.4 Skills:' : '1.4 ЧАДВАР:'}
            </p>
            <p className="leading-relaxed">
              {lang === 'en'
                ? 'You will be able to prepare complete financial statements with appropriate notes and explanations, in the required format and time frame.'
                : 'Санхүүгийн тайланг хэрэглээний зориулалтын төрөл, хэлбэрээр нь холбогдох тайлбар, тодруулгатайгаар, тогтоосон хугацаанд нь бэлтгэн гаргах талаар мэргэжлийн мэдлэг, ур чадварыг эзэмшинэ.'}
            </p>
            <p className="font-medium text-white">
              {lang === 'en' ? '1.5 Habits and practice:' : '1.5 ДАДАЛ:'}
            </p>
            <p className="leading-relaxed">
              {lang === 'en'
                ? 'You will develop the habit of analysing transactions, recording them correctly, preparing complete financial information, and using it to read statements and make sound decisions.'
                : 'Нягтлан бодох бүртгэлийн ажил гүйлгээг шинжлэн журналд бүртгэн, санхүүгийн мэдээг иж бүрэн бэлтгэж, тайлан бэлтгэх, унших, оновчтой шийдвэр гаргах дадлыг хэвшүүлэх.'}
            </p>
            <p className="font-medium text-white">
              {lang === 'en' ? 'Assessment: total 100 points, including:' : 'Дүгнэх журам: Нийт 100 оноо. Үүнээс:'}
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              {lang === 'en' ? (
                <>
                  <li>1. Comprehensive case: 30 points</li>
                  <li>2. Ongoing (in‑class) assessment: 70 points</li>
                  <li>3. Attendance: 10 points</li>
                </>
              ) : (
                <>
                  <li>1. Цогц бодлого: 30 оноо</li>
                  <li>2. Явцын оноо: 70 оноо</li>
                  <li>3. Ирц: 10 оноо</li>
                </>
              )}
            </ul>
            <p className="font-medium text-white pt-2">
              {lang === 'en'
                ? 'Syllabus: Financial statement preparation'
                : 'САНХҮҮГИЙН ТАЙЛАН ГАРГАХ АРГА ЗҮЙН ХИЧЭЭЛИЙН ХӨТӨЛБӨР'}
            </p>
                    <div className="overflow-x-auto pt-2">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'No.' : '№'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Topic' : 'Сэдэв'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Hours' : 'Заах цаг'}
                            </th>
                            <th className="text-left py-2 text-white/80">
                              {lang === 'en' ? 'Target competency' : 'Эзэмших чадвар'}
                            </th>
                            <th className="text-left py-2 text-white/80">
                              {lang === 'en' ? 'Notes' : 'Тайлбар'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {FINANCIAL_REPORT_SYLLABUS.map((row, i) => (
                            <tr key={i} className="border-b border-white/5">
                              <td className="py-2 pr-4">{row[0]}</td>
                              <td className="py-2 pr-4">{row[1]}</td>
                              <td className="py-2 pr-4">{row[2]}</td>
                              <td className="py-2 pr-4">{row[3]}</td>
                              <td className="py-2">{row[4]}</td>
                            </tr>
                          ))}
                          <tr className="border-t-2 border-white/20 font-medium">
                            <td className="py-2 pr-4" colSpan="2">
                              {lang === 'en' ? 'Total' : 'Нийт'}
                            </td>
                            <td className="py-2 pr-4">60</td>
                            <td className="py-2" colSpan="2"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Санхүүгийн тайлан гаргах арга зүйн сургалт – цагийн хуваарь */}
                  <section className="mt-10 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {lang === 'en'
                        ? 'Financial statement preparation – course schedule'
                        : 'САНХҮҮГИЙН ТАЙЛАН ГАРГАХ АРГА ЗҮЙН СУРГАЛТ'}
                    </h3>
                    <p className="leading-relaxed text-white/85">
                      {lang === 'en'
                        ? 'The classroom course runs for 21 days. The types of training, duration, and class schedules are as follows.'
                        : 'Танхимын анги 21 хоногийн хугацаатай бөгөөд сургалтын төрөл, үргэлжлэх хугацаа, хичээлийн хуваарь дараах байдлаар байна.'}
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'No.' : 'Д/Д'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Training type' : 'Сургалтын төрөл'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Duration' : 'Үргэлжлэх хугацаа'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Class schedule' : 'Хичээлийн хуваарь'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">1</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Classroom training' : 'Танхимын сургалт'}
                            </td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? '21 days' : '21 хоног'}
                            </td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Morning, evening' : 'Өглөө, орой'}
                            </td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">2</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Online training' : 'Онлайн сургалт'}
                            </td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? '21 days' : '21 хоног'}
                            </td>
                            <td className="py-2 pr-4">14:00–16:00</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">3</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'One‑to‑one training' : 'Ганцаарчилсан сургалт'}
                            </td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? '14 days' : '14 хоног'}
                            </td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Morning, afternoon, evening' : 'Өглөө, өдөр, орой'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="overflow-x-auto pt-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Time of day' : 'Цагийн хуваарь'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Morning' : 'Өглөө'}
                            </td>
                            <td className="py-2 pr-4">10:00–13:00</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Afternoon' : 'Өдөр'}
                            </td>
                            <td className="py-2 pr-4">14:00–17:00</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Evening' : 'Орой'}
                            </td>
                            <td className="py-2 pr-4">19:00–21:30</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* CPA / ЛЕКЦ / ТМЗ сургалтын цагийн хуваарь */}
                  <section className="mt-10 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {lang === 'en' ? '/CPA/, lectures, /TMZ/ training' : '/CPA/, /ЛЕКЦ/, /ТМЗ/ СУРГАЛТ'}
                    </h3>
                    <p className="leading-relaxed text-white/85">
                      {lang === 'en'
                        ? 'CPA, lecture and TMZ trainings are held three days a week. The following tables show example schedules for possible class days.'
                        : 'CPA, лекц, ТМЗ сургалтууд 7 хоногт 3 өдөр зохион байгуулагдана. Доорх хүснэгтүүд нь боломжит хичээл орох өдрүүдийн жишиг хуваарийг харуулна.'}
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse mb-4">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'No.' : 'Д/Д'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Class day' : 'Хичээл орох гариг'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Class time' : 'Хичээлийн цаг'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">1</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Monday' : 'Даваа'}
                            </td>
                            <td className="py-2 pr-4">19:00–21:30</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">2</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Wednesday' : 'Лхагва'}
                            </td>
                            <td className="py-2 pr-4">19:00–21:30</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">3</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Saturday' : 'Бямба'}
                            </td>
                            <td className="py-2 pr-4">10:00–17:30</td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'No.' : 'Д/Д'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Class day' : 'Хичээл орох гариг'}
                            </th>
                            <th className="text-left py-2 pr-4 text-white/80">
                              {lang === 'en' ? 'Class time' : 'Хичээлийн цаг'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">1</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Tuesday' : 'Мягмар'}
                            </td>
                            <td className="py-2 pr-4">19:00–21:30</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">2</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Friday' : 'Баасан'}
                            </td>
                            <td className="py-2 pr-4">19:00–21:30</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 pr-4">3</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? 'Sunday' : 'Ням'}
                            </td>
                            <td className="py-2 pr-4">10:00–17:30</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
      );
    }
    if (activeTab === 'cpa') {
      return (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en'
              ? 'CPA (Certified Public Accountant) exam preparation training'
              : 'Мэргэшсэн нягтлан бодогч эрх олгох шалгалтанд бэлтгэх сургалт / CPA /'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'en'
              ? 'This program aims to develop highly skilled professional accountants through theory, practice and application. The CPA preparation course is structured in three parts: theory, practice exercises and real‑world application.'
              : 'Мэргэжлийн өндөр чадвартай нягтлан бодогчийг онол, дадлага практикаар бэлтгэх зорилготой. Мэргэшсэн нягтлан бодогч эрх олгох шалгалтанд бэлтгэх сургалт нь онол, дадлага, практик гэсэн 3 хэсгээс бүрдэнэ.'}
          </p>
          <div className="space-y-2">
            <p className="font-medium text-white">
              {lang === 'en' ? 'THEORY:' : 'ОНОЛ:'}
            </p>
            <p className="leading-relaxed text-white/85">
              {lang === 'en'
                ? 'Deepen your theoretical knowledge of studied topics, understand new standards, and stay current with existing rules, regulations and legislation.'
                : 'Сурсан сэдвүүдийн онолын мэдлэгээ дээшлүүлэх, шинэ стандартуудыг ойлгох, одоогийн дүрэм журам, хууль тогтоомжийн мэдээлэлтэй байх.'}
            </p>
            <p className="font-medium text-white">
              {lang === 'en' ? 'PRACTICE EXERCISES:' : 'ДАДЛАГА:'}
            </p>
            <p className="leading-relaxed text-white/85">
              {lang === 'en'
                ? 'Strengthen theory through problems, exercises, and comprehensive case studies.'
                : 'Бодлого, дасгал, цогц бодлогоор онолын мэдлэгээ бэхжүүлэх.'}
            </p>
            <p className="font-medium text-white">
              {lang === 'en' ? 'APPLICATION:' : 'ПРАКТИК:'}
            </p>
            <p className="leading-relaxed text-white/85">
              {lang === 'en'
                ? 'Connect your knowledge to Mongolian commercial law and related legislation, and learn how to apply it in real‑life business situations.'
                : 'Олсон онол, дадлагын мэдлэг Монгол улсын Ерөнхий худалдааны хууль болон холбогдох хууль дүрэм журамтай хэрхэн нийцэж, бодит ажиллагаанд хэрхэн ашиглах талаар мэдээлэл өгнө.'}
            </p>
          </div>
          <p className="font-medium text-white">
            {lang === 'en'
              ? '2.1 Who is eligible to sit the CPA exam?'
              : '2.1 Мэргэшсэн нягтлан бодогчийн эрх олгох шалгалтанд хэн орох эрхтэй вэ?'}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            {lang === 'en' ? (
              <>
                <li>
                  Professional accountants with a bachelor’s degree in accounting and at least 2 years of experience in the profession
                </li>
                <li>
                  Economists and finance specialists who have worked in an accounting position for 4 or more years
                </li>
              </>
            ) : (
              <>
                <li>Нягтлан бодох бүртгэлийн мэргэжлээр бакалавр зэрэгтэй, мэргэжлээрээ 2 ба түүнээс дээш жил ажилласан мэргэжлийн нягтлан бодогчид</li>
                <li>Эдийн засагч, санхүүчид нягтлан бодогчийн албан тушаалд 4 жил ажилласан бол</li>
              </>
            )}
          </ul>
          <p className="font-medium text-white">
            {lang === 'en'
              ? '2.2 The CPA qualification exam has two stages. The preliminary (screening) exam includes:'
              : '2.2 Мэргэшсэн нягтлан бодогчийн эрх олгох шалгалт 2 үе шаттай. Сорил шалгалт нь:'}
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            {lang === 'en' ? (
              <>
                <li>Professional ethics</li>
                <li>Financial statement preparation / comprehensive case study</li>
                <li>English language</li>
                <li>Information technology (4 subjects)</li>
              </>
            ) : (
              <>
                <li>Мэргэжлийн ёс зүй</li>
                <li>Санхүүгийн тайлан гаргах арга зүй / цогц бодлого /</li>
                <li>Англи хэл</li>
                <li>Мэдээллийн технологи (4 хичээл)</li>
              </>
            )}
          </ul>
          <p className="leading-relaxed text-white/85">
            {lang === 'en'
              ? 'For the subjects “Professional ethics” and “Financial statement preparation / comprehensive case study”, you must complete the official training announced by the Institute of Professional Accountants and obtain a certificate in order to be eligible for the exam. Each preliminary exam is scored from 0–100, and a score of 60% or higher is considered a pass.'
              : 'Үүнээс Мэргэжлийн ёс зүй, Санхүүгийн тайлан гаргах арга зүй / цогц бодлого / гэсэн 2 хичээлийн мэргэшсэн нягтлан бодогчийн институтээс зарласан сургалтанд заавал сууж батламж буюу гэрчилгээг авсанаар шалгалтанд орох эрх үүснэ. Сорил шалгалт тус бүрийг 0–100 оноогоор үнэлэх ба үүнээс 60 хувиас дээш оноо авсан бол шалгалтанд тэнцсэнд тооцно.'}
          </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 pr-4 text-white/80">Д/Д</th>
                          <th className="text-left py-2 pr-4 text-white/80">Хичээлийн нэр</th>
                          <th className="text-left py-2 text-white/80">Шалгалт авах хугацаа</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">Мэдээллийн технологи</td><td className="py-2">1 цаг</td></tr>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">Санхүүгийн тайлан гаргах арга зүй / цогц бодлого/</td><td className="py-2">3 цаг 30 минут</td></tr>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">3</td><td className="py-2 pr-4">Мэргэжлийн ёс зүй</td><td className="py-2">1 цаг</td></tr>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">4</td><td className="py-2 pr-4">Англи хэл</td><td className="py-2">1 цаг</td></tr>
                      </tbody>
                    </table>
                  </div>
          <p className="text-white/85 text-sm">
            {lang === 'en'
              ? 'The result of the “Financial reporting / comprehensive case study” preliminary exam is valid for 24 months.'
              : 'Сорил шалгалтаас санхүүгийн тайлагнал буюу цогц бодлого хичээлийн шалгалтын хүчинтэй хугацаа 24 сар байна.'}
          </p>
          <p className="font-medium text-white">
            {lang === 'en' ? 'Main exam' : 'Үндсэн шалгалт'}
          </p>
          <p className="leading-relaxed text-white/85">
            {lang === 'en'
              ? 'Candidates who have passed all four preliminary exams and obtained certificates become eligible for the main exam. Each of the five main exam subjects is scored from 0–100, and a score of 70% or higher is required to pass. The validity period for passing the full set of exams is 5 years.'
              : 'Сорил 4 хичээлийн шалгалтад тэнцсэн батламжаа авсан шалгуулагч үндсэн шалгалтанд орох эрх үүснэ. Үндсэн 5 хичээлийн шалгалт тус бүрийг 0–100 оноогоор үнэлнэ, үүнээс 70 хувиас дээш оноо авч шалгалтандаа тэнцэнэ. Шалгалтын хүчинтэй хугацаа 5 жил байна.'}
          </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 pr-4 text-white/80">Д/Д</th>
                          <th className="text-left py-2 pr-4 text-white/80">Хичээлийн нэр</th>
                          <th className="text-left py-2 text-white/80">Шалгалт авах хугацаа</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">Санхүүгийн тайлагнал-1</td><td className="py-2">3 цаг 30 минут</td></tr>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">Хууль эрх зүй, татварын бүртгэл</td><td className="py-2">2 цаг 30 минут</td></tr>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">3</td><td className="py-2 pr-4">Өртөг ба гүйцэтгэлийн удирдлага</td><td className="py-2">3 цаг 30 минут</td></tr>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">4</td><td className="py-2 pr-4">Санхүүгийн менежмент-1</td><td className="py-2">2 цаг 30 минут</td></tr>
                        <tr className="border-b border-white/5"><td className="py-2 pr-4">5</td><td className="py-2 pr-4">Аудит гэсэн хичээлүүдээс бүрдэнэ</td><td className="py-2">2 цаг 30 минут</td></tr>
                      </tbody>
                    </table>
                  </div>
          <p className="leading-relaxed text-white/85">
            {lang === 'en'
              ? 'The initial CPA certificate is issued for 4 years; after that, a permanent licence can be obtained. Our organization currently offers preparation courses for the following four subjects: 1) Financial reporting, 2) Law, 3) Cost and performance management, and 4) Financial management.'
              : 'Мэргэшсэн нягтлан бодогчийн эрхийг 4 жилийн хугацаатай авна. 4 жилийн дараа хугацаагүй эрхээ авна. Манай байгууллагын хувьд дээрх хичээлүүдээс дараах 4 хичээлийг зааж байна: 1. Санхүүгийн тайлагнал 2. Хууль 3. Өртөг ба гүйцэтгэлийн удирдлага 4. Санхүүгийн менежмент'}
          </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {CPA_SUB_TABS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setCpaSubTab(t.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          cpaSubTab === t.id ? 'bg-[#10b981] text-white' : 'bg-white/10 text-white/90 hover:bg-white/15'
                        }`}
                      >
                        {lang === 'en' ? t.labelEn : t.labelMn}
                      </button>
                    ))}
                  </div>

                  {cpaSubTab === 'sanhuu-taiлагnal' && (
                    <div className="space-y-4 pt-4">
                      <h3 className="text-lg font-semibold text-white">
                        {lang === 'en' ? 'A. Financial reporting' : 'А. САНХҮҮГИЙН ТАЙЛАГНАЛ:'}
                      </h3>
                      <p className="leading-relaxed">
                        {lang === 'en'
                          ? 'In this subject you will understand the specific features of accounting across different sectors and deepen your practical skills.'
                          : 'Энэ хичээлийг үзсэнээр нягтлан бодох бүртгэлийн салбар салбарын бүртгэлийн онцлог, ялгааг мэдэж ур чадвараа өсгөнө.'}
                      </p>
                      <p className="font-medium text-white">
                        {lang === 'en' ? 'Course objective:' : 'Хичээлийн зорилго:'}
                      </p>
                      <p className="leading-relaxed">
                        {lang === 'en'
                          ? 'To provide a general understanding of International Financial Reporting Standards (IFRS) and to train participants to apply them in practice.'
                          : 'Санхүүгийн Тайлагналын Олон улсын стандартын талаар ерөнхий ойлголтийг өгөх болон онол практикийг хослуулан хэрэглэхэд сургахад оршино.'}
                      </p>
                      <p className="font-medium text-white">
                        {lang === 'en' ? 'Main content:' : 'Хичээлийн үндсэн агуулга:'}
                      </p>
                      <p className="leading-relaxed">
                        {lang === 'en'
                          ? 'Analysing financial statements, identifying issues, drawing conclusions and making decisions based on key indicators.'
                          : 'Санхүүгийн тайланд шинжилгээ хийх, асуудлыг илрүүлэх, дүгнэлт гаргах, шийдвэр гаргах арга зүй.'}
                      </p>
                      <p className="font-medium text-white">
                        {lang === 'en' ? 'Outcomes for learners:' : 'Суралцагчдад эзэмшүүлэх:'}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-white">
                          {lang === 'en' ? 'Knowledge: ' : 'Мэдлэг:'}
                        </strong>
                        {lang === 'en'
                          ? ' Understanding how to implement financial reporting standards and sector‑specific accounting in line with Mongolian laws and regulations.'
                          : ' Санхүүгийн тайлагналын хэрэгжүүлэлт, салбар бүрийн бүртгэлийн онцлогийг Монгол улсын хууль, дүрэм журамтай уялдуулан бүртгэж сурах мэдлэг.'}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-white">
                          {lang === 'en' ? 'Skills: ' : 'Чадвар:'}
                        </strong>
                        {lang === 'en'
                          ? ' Ability to read and analyse financial statements and use key indicators to draw conclusions and make decisions.'
                          : ' Санхүүгийн тайланг уншиж шинжилгээ хийх, гол үзүүлэлтүүдийг ашиглан дүгнэлт гаргаж шийдвэр гаргах чадвар.'}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-white">
                          {lang === 'en' ? 'Habits: ' : 'Дадал:'}
                        </strong>
                        {lang === 'en'
                          ? ' Developing the habit of combining theory with practice and working quickly and accurately with calculators and Excel.'
                          : ' Онол практикийг зөв хослуулж, тооны машин болон Excel дээр хурдтай, алдаагүй ажиллах дадал.'}
                      </p>
                      <p className="font-medium text-white pt-2">
                        {lang === 'en'
                          ? 'Syllabus: Financial reporting'
                          : 'САНХҮҮГИЙН ТАЙЛАГНАЛ ХИЧЭЭЛИЙН ХӨТӨЛБӨР'}
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left py-2 pr-4 text-white/80">№</th>
                              <th className="text-left py-2 pr-4 text-white/80">Стандарт</th>
                              <th className="text-right py-2 text-white/80">Хичээл заах цаг</th>
                            </tr>
                          </thead>
                          <tbody>
                            {STANDARDS_TABLE.map((row, i) => (
                              <tr key={i} className="border-b border-white/5">
                                <td className="py-2 pr-4">{row[0]}</td>
                                <td className="py-2 pr-4">{row[1]}</td>
                                <td className="py-2 text-right">{row[2]}</td>
                              </tr>
                            ))}
                            <tr className="border-t-2 border-white/20 font-medium">
                              <td className="py-2 pr-4" colSpan="2">
                                Нийт хичээл заах цаг
                              </td>
                              <td className="py-2 text-right">102</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {cpaSubTab === 'huuli' && (
                    <div className="space-y-4 pt-6">
                      <h3 className="text-lg font-semibold text-white">
                        {lang === 'en' ? 'B. Law' : 'В. ХУУЛЬ'}
                      </h3>
                      <p className="leading-relaxed">
                        {lang === 'en'
                          ? 'This subject deepens legal understanding, explores the tax legal environment systematically, and develops the ability to apply it in practice.'
                          : 'Хууль зүйн ойлголтыг гүнзгийрүүлж, татварын эрх зүйн орчныг системтэйгээр судлуулж, практикт хэрэглэх чадварт сургана.'}
                      </p>
                      <p className="font-medium text-white">
                        {lang === 'en'
                          ? 'Comprehensive program in law, legal framework, and tax accounting'
                          : 'ХУУЛЬ, ЭРХ ЗҮЙ, ТАТВАРЫН БҮРТГЭЛИЙН ИЖ БҮРЭН ХӨТӨЛБӨР'}
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'No.' : 'Д/Д'}
                              </th>
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'Topic' : 'Хичээлийн сэдэв'}
                              </th>
                              <th className="text-right py-2 text-white/80">
                                {lang === 'en' ? 'Hours' : 'Хичээл заах цаг'}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">1</td>
                          <td className="py-2 pr-4">Татварын ерөнхий хууль</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">2</td>
                          <td className="py-2 pr-4">Татвар ногдуулах</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">3</td>
                          <td className="py-2 pr-4">Улсын төлбөр хураамж</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">4</td>
                          <td className="py-2 pr-4">Хэрэглээний төлбөр хураамж</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">5</td>
                          <td className="py-2 pr-4">Усны төлбөр хураамж</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">6</td>
                          <td className="py-2 pr-4">Авто тээвэр өөрөө явах хэрэгслийн татвар</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">7</td>
                          <td className="py-2 pr-4">Буухи татвар</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">8</td>
                          <td className="py-2 pr-4">Үл хөдлөх эд хөрөнгийн албан татвар</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">9</td>
                          <td className="py-2 pr-4">Гаалийн татвар</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">10</td>
                          <td className="py-2 pr-4">Онцгой албан татвар</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">11</td>
                          <td className="py-2 pr-4">Нийслэл хотын албан татвар</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">12</td>
                          <td className="py-2 pr-4">Агаарын бохирдлын татвар</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">13</td>
                          <td className="py-2 pr-4">Нийгмийн даатгалын ерөнхий хууль</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">14</td>
                          <td className="py-2 pr-4">Нийгмийн даатгалаас олгох тэтгэвэр тэтгэмжийн тухай хууль</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">15</td>
                          <td className="py-2 pr-4">Нэмэгдсэн өртгийн албан татвар</td>
                          <td className="py-2 text-right">8</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">16</td>
                          <td className="py-2 pr-4">Орлогын албан татвар</td>
                          <td className="py-2 text-right">8</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">17</td>
                          <td className="py-2 pr-4">Хувь хүний орлогын албан татвар</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">18</td>
                          <td className="py-2 pr-4">Байгалийн нөөц ашигласны татвар</td>
                          <td className="py-2 text-right">8</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">19</td>
                          <td className="py-2 pr-4">Нягтлан бодох бүртгэлийн тухай хууль</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">20</td>
                          <td className="py-2 pr-4">Аудитын тухай хууль</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">21</td>
                          <td className="py-2 pr-4">Төрийн аудитын тухай хууль</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-t-2 border-white/20 font-medium">
                          <td className="py-2 pr-4" colSpan="2">
                            Нийт
                          </td>
                          <td className="py-2 text-right">72</td>
                        </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {cpaSubTab === 'ortog' && (
                    <div className="space-y-4 pt-6">
                      <h3 className="text-lg font-semibold text-white">
                        {lang === 'en'
                          ? 'C. Cost and performance management'
                          : 'С. ӨРТӨГ БА ГҮЙЦЭТГЭЛИЙН УДИРДЛАГА'}
                      </h3>
                      <p className="leading-relaxed">
                        {lang === 'en'
                          ? 'This subject provides the knowledge and skills needed to calculate costs, plan budgets, analyse performance and support decision‑making.'
                          : 'Байгууллагын өртөг тооцох, төсөв төлөвлөх, гүйцэтгэлийг шинжлэх шийдвэр гаргалтад шаардлагатай мэдлэг, ур чадварыг олгоно.'}
                      </p>
                      <p className="font-medium text-white">
                        {lang === 'en'
                          ? 'Syllabus: Cost and performance management'
                          : 'ӨРТӨГ БА ГҮЙЦЭТГЭЛИЙН УДИРДЛАГА ХИЧЭЭЛИЙН ХӨТӨЛБӨР'}
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'No.' : 'Д/Д'}
                              </th>
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'Topic' : 'Хичээлийн сэдэв'}
                              </th>
                              <th className="text-right py-2 text-white/80">
                                {lang === 'en' ? 'Hours' : 'Хичээл заах цаг'}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">1</td>
                          <td className="py-2 pr-4">Зардлын ангилал</td>
                          <td className="py-2 text-right">10</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">2</td>
                          <td className="py-2 pr-4">Өртөг тооцолт</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">3</td>
                          <td className="py-2 pr-4">Үйлдэлд суурилсан өртөг тооцолт</td>
                          <td className="py-2 text-right">6</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">4</td>
                          <td className="py-2 pr-4">Зорилтот өртөг тооцолт</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">5</td>
                          <td className="py-2 pr-4">Амьдралын мөчлөгийн өртөг тооцолт</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">6</td>
                          <td className="py-2 pr-4">Төгс ашгийн ашигт ажиллагаа</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">7</td>
                          <td className="py-2 pr-4">Хүрээлэн буй орчны удирдлагын бүртгэл</td>
                          <td className="py-2 text-right">2</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">8</td>
                          <td className="py-2 pr-4">Өртөг-тоо хэмжээ-ашгийн шинжилгээ</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">9</td>
                          <td className="py-2 pr-4">Хянагдах хүчин зүйлийн шинжилгээ</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">10</td>
                          <td className="py-2 pr-4">Үнэ тогтоох шийдвэр гаргалт</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">11</td>
                          <td className="py-2 pr-4">Богино хугацаат шийдвэр гаргалт</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">12</td>
                          <td className="py-2 pr-4">Эрсдэл ба тодорхой бус байдал</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">13</td>
                          <td className="py-2 pr-4">Төсвийн систем</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">14</td>
                          <td className="py-2 pr-4">Төсөвлөлтөд ашиглах тоон шинжилгээний арга</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">15</td>
                          <td className="py-2 pr-4">Хэлбэлзлийн шинжилгээ</td>
                          <td className="py-2 text-right">10</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">16</td>
                          <td className="py-2 pr-4">Төлөвлөлт ба үйл ажиллагааны хяналт</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">17</td>
                          <td className="py-2 pr-4">Гүйцэтгэлийн шинжилгээ ба зан төлөвийн нөлөө</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">18</td>
                          <td className="py-2 pr-4">Гүйцэтгэлийн удирдлагын мэдээллийн систем</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">19</td>
                          <td className="py-2 pr-4">Удирдлагын мэдээллийн эх үүсвэр ба удирдлагын тайлан</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">20</td>
                          <td className="py-2 pr-4">Бизнесийн байгууллагын удирдлагын хамрах хүрээ</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">21</td>
                          <td className="py-2 pr-4">Салбар нэгжийн үр дүн ба гүйцэтгэлийн бүртгэл</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4">22</td>
                          <td className="py-2 pr-4">Гүйцэтгэлийн удирдлагын орчин үеийн чиг хандлага</td>
                          <td className="py-2 text-right">4</td>
                        </tr>
                        <tr className="border-t-2 border-white/20 font-medium">
                          <td className="py-2 pr-4" colSpan="2">
                            {lang === 'en' ? 'Total' : 'Нийт'}
                          </td>
                          <td className="py-2 text-right">100</td>
                        </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {cpaSubTab === 'sanhuu-menejment' && (
                    <div className="space-y-6 pt-6">
                      <h3 className="text-lg font-semibold text-white">
                        {lang === 'en' ? 'D. Financial management' : 'D. САНХҮҮГИЙН МЕНЕЖМЕНТ'}
                      </h3>
                      <p className="leading-relaxed">
                        {lang === 'en' ? 'Course objective: ' : 'Хичээлийн зорилго: '}
                        <span className="font-medium">
                          {lang === 'en'
                            ? 'To provide a general understanding of financial management and train participants to combine theory with practice.'
                            : 'Санхүүгийн менежментийн талаар ерөнхий ойлголт өгөх болон онол практикийг хослуулан хэрэглэхэд сургахад оршино.'}
                        </span>
                      </p>
                      <p className="leading-relaxed">
                        {lang === 'en' ? 'Main content: ' : 'Хичээлийн үндсэн агуулга: '}
                        <span className="font-medium">
                          {lang === 'en'
                            ? 'Analysing financial statements, identifying issues, drawing conclusions and making decisions.'
                            : 'Санхүүгийн тайланд шинжилгээ хийх, асуудлыг илрүүлэх, дүгнэлт гаргах, шийдвэр гаргах арга зүй.'}
                        </span>
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium text-white">
                          {lang === 'en' ? 'Outcomes for learners:' : 'Суралцагчдад эзэмшүүлэх:'}
                        </p>
                        <p className="leading-relaxed">
                          <strong className="text-white">
                            {lang === 'en' ? 'Knowledge: ' : 'Мэдлэг:'}
                          </strong>
                          {lang === 'en'
                            ? 'Understanding of the role of financial management, business environment, financial markets, working capital management, investment decisions, project appraisal, cost of capital and financing.'
                            : 'Санхүүгийн удирдлагын үүрэг, бизнесийн орчин, санхүүгийн зах зээл, ажлын капиталын удирдлага, хөрөнгө оруулалтын шийдвэр гаргалт, төслийн үнэлгээ, бизнесийн санхүүжилтийн өртөг, удирдлага гэсэн сэдвүүдээр мэргэшсэн нягтлан бодогчид байх ёстой мэдлэгийг олгоно.'}
                        </p>
                        <p className="leading-relaxed">
                          <strong className="text-white">
                            {lang === 'en' ? 'Skills: ' : 'Чадвар:'}
                          </strong>
                          {lang === 'en'
                            ? 'Plan financial activities over the medium and long term, implement strategy, make appropriate financing and investment decisions, and analyse financial statements using key ratios.'
                            : 'Ирээдүйгээ урт болон дунд хугацаагаар харж санхүүгийн үйл ажиллагаагаа төлөвлөх, стратегиа хэрэгжүүлэх, орчин нөхцөлдөө тохирсон санхүү, хөрөнгө оруулалтын шийдвэр гаргах, санхүүгийн тайланд шинжилгээ хийж хөрвөх чадвар, төлбөрийн чадвар зэрэг харьцаануудыг ашиглан дүгнэлт гаргах чадвар эзэмшинэ.'}
                        </p>
                        <p className="leading-relaxed">
                          <strong className="text-white">
                            {lang === 'en' ? 'Habits: ' : 'Дадал:'}
                          </strong>
                          {lang === 'en'
                            ? 'Develop practical habits for combining theory with practice and working efficiently with calculations.'
                            : 'Онол практикийг зөв хослуулж, тооны машин дээр хурдтай, ойлгомжтой ажиллах зэрэг практик дадал суулгана.'}
                        </p>
                      </div>

                      <p className="font-medium text-white pt-2">
                        {lang === 'en'
                          ? 'Standard syllabus content for Financial Management (lectures)'
                          : 'САНХҮҮГИЙН МЕНЕЖМЕНТ ХИЧЭЭЛИЙН СТАНДАРТ ХӨТӨЛБӨРИЙН АГУУЛГА /ЛЕКЦ/'}
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'Week' : 'Долоо хоног'}
                              </th>
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'Session' : 'Орох өдөр'}
                              </th>
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'Topic' : 'Сэдэв'}
                              </th>
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'Content' : 'Агуулга'}
                              </th>
                              <th className="text-right py-2 text-white/80">
                                {lang === 'en' ? 'Hours' : 'Заах цаг'}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top">1</td>
                              <td className="py-2 pr-4 align-top">I II</td>
                              <td className="py-2 pr-4 align-top">Санхүүгийн менежмент ба санхүүгийн зорилго</td>
                              <td className="py-2 pr-4">
                                Санхүүгийн менежментийн зорилго, мөн чанар<br />
                                Санхүүгийн зорилго ба компанийн стратеги уялдаа холбоо<br />
                                Оролцогч талууд<br />
                                Компанийн зорилгын биелэлтийг хэмжих нь<br />
                                Оролцогч талуудын зорилгын биелэлтийг дэмжих нь<br />
                                Ашгийн бус байгууллагын зорилгын онцлог
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">I II</td>
                              <td className="py-2 pr-4 align-top">Бизнесийн эдийн засгийн орчин</td>
                              <td className="py-2 pr-4">
                                Макро эдийн засгийн бодлого<br />
                                Төсвийн бодлого<br />
                                Мөнгөн бодлого<br />
                                Валютын ханш<br />
                                Өрсөлдөөний бодлого<br />
                                Бизнесийг үзүүлэх засгийн газрын дэмжлэг<br />
                                Ногоон бодлогууд<br />
                                Компанийн засаглалын хууль тогтоомж
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">I II</td>
                              <td className="py-2 pr-4 align-top">Санхүүгийн болон мөнгөний зах зээл, санхүүгийн байгууллагууд</td>
                              <td className="py-2 pr-4">
                                Санхүүгийн зуучлагчид<br />
                                Санхүүгийн зах зээл<br />
                                Олон улсын мөнгөний болон хөрөнгийн зах зээл<br />
                                Хуулийн болон өгөөжийн түвшин<br />
                                Мөнгөний зах зээлийн хэрэгсэл
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top">1</td>
                              <td className="py-2 pr-4 align-top">III IV</td>
                              <td className="py-2 pr-4 align-top">Ажлын капитал</td>
                              <td className="py-2 pr-4">
                                Ажлын капиталын мөн чанар<br />
                                Ажлын капиталын удирдлагын зорилго<br />
                                Ажлын капиталын удирдлагын үүрэг<br />
                                Мөнгөн хөрөнгийн менежмент<br />
                                Хөрвөх чадварын харьцаа
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">III IV</td>
                              <td className="py-2 pr-4 align-top">Ажлын капиталын удирдлага</td>
                              <td className="py-2 pr-4">
                                Бараа материалын удирдлага<br />
                                Дансны авлагын удирдлага<br />
                                Дансны өглөгийн удирдлага
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">III IV</td>
                              <td className="py-2 pr-4 align-top">Ажлын капиталын санхүү</td>
                              <td className="py-2 pr-4">
                                Мөнгөн хөрөнгийн удирдлага<br />
                                Мөнгөн урсгалын таамаглал<br />
                                Сангийн удирдлага<br />
                                Мөнгөн хөрөнгийн удирдлагын загварууд<br />
                                Илүүдэл мөнгөөр хөрөнгө оруулах нь<br />
                                Ажлын капиталын санхүүжилтийн стратеги
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top">1</td>
                              <td className="py-2 pr-4 align-top">VI VII</td>
                              <td className="py-2 pr-4 align-top">Хөрөнгө оруулалтын шийдвэр гаргалт</td>
                              <td className="py-2 pr-4">
                                Хөрөнгө оруулалт ба капитал төсөвлөлтийн үйл явц<br />
                                Хөрөнгө оруулалттай холбоотой мөнгөн урсгал<br />
                                Эргэн төлөх хугацаа<br />
                                Ашигласан капиталын өгөөж
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">VI VII</td>
                              <td className="py-2 pr-4 align-top">Хорогдуулсан мөнгөн урсгалаар хөрөнгө оруулалтын төслийг үнэлэх</td>
                              <td className="py-2 pr-4">
                                Хорогдуулсан мөнгөн урсгал<br />
                                Өнөөгийн цэвэр үнэ цэнийн арга (ӨЦҮЦ)<br />
                                Өөртөө ногдох хувь тооцох арга (ӨДХ)<br />
                                ӨЦҮЦ ба ӨДХ тооцох аргуудын харьцуулалт<br />
                                Хорогдуулсан мөнгөн урсгалаар төслийг үнэлэх нь
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">VI VII</td>
                              <td className="py-2 pr-4 align-top">Инфляци ба татварын нөлөөг харгалзан үзэх нь</td>
                              <td className="py-2 pr-4">
                                Инфляцийн нөлөөг тооцох нь<br />
                                Татварын нөлөөг тооцох нь<br />
                                Өнөөгийн үнэ цэнийн бүтцийг тооцох нь
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top">2</td>
                              <td className="py-2 pr-4 align-top">I II</td>
                              <td className="py-2 pr-4 align-top">Төслийн үнэлгээний эрсдэл</td>
                              <td className="py-2 pr-4">
                                Эрсдэл ба тодорхойгүй байдал<br />
                                Мэдрэмжийн шинжилгээ<br />
                                Магадлалын шинжилгээ<br />
                                Эрсдэлийг зохицуулах бусад арга хэрэгсэл
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">I II</td>
                              <td className="py-2 pr-4 align-top">Тусгай хөрөнгө оруулалтын шийдвэр гаргалт</td>
                              <td className="py-2 pr-4">
                                Түрээсэлж эзэмшүүлэх эсвэл худалдаж авах шийдвэр гаргах<br />
                                Хөрөнгийг солих, орлуулах шийдвэр гаргах<br />
                                Капиталын хязгаарлалт ба нормчлол
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">III IV</td>
                              <td className="py-2 pr-4 align-top">Санхүүжилтийн эх үүсвэрүүд</td>
                              <td className="py-2 pr-4">
                                Богино хугацаат санхүүжилтийн эх үүсвэрүүд<br />
                                Өрийн санхүүжилт<br />
                                Венчур капитал<br />
                                Өмчийн үнэт цаасаар санхүүжилт<br />
                                Ислам санхүүжилт
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">III IV</td>
                              <td className="py-2 pr-4 align-top">Ногдол ашгийн бодлого</td>
                              <td className="py-2 pr-4">
                                Санхүүжилтийн дотоод эх үүсвэрүүд<br />
                                Ногдол ашгийн бодлого
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">VI VII</td>
                              <td className="py-2 pr-4 align-top">Хөшүүрэг ба капиталын бүтэц</td>
                              <td className="py-2 pr-4">
                                Хөшүүрэг<br />
                                Хувь нийлүүлэгчдийн хөрөнгөд нөлөөлөх хүчин зүйлс<br />
                                Жижиг дунд бизнесийн санхүүжилт
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">VI VII</td>
                              <td className="py-2 pr-4 align-top">Капиталын өртөг</td>
                              <td className="py-2 pr-4">
                                Капиталын өртөг<br />
                                Ногдол ашгийн өсөлтийн загвар<br />
                                Капитал үнэлгээний загвар (CAPM)<br />
                                Урт хугацаат өр төлбөрийн өртөг<br />
                                Капиталын жигнэсэн дундаж өртөг
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">VI VII</td>
                              <td className="py-2 pr-4 align-top">Капиталын бүтэц</td>
                              <td className="py-2 pr-4">
                                Капиталын бүтцийг оновчлох<br />
                                Хөрөнгө оруулалт дахь капиталын өртгийг харгалзан үзэх
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4 align-top"></td>
                              <td className="py-2 pr-4 align-top">VI VII</td>
                              <td className="py-2 pr-4 align-top">Бизнесийн үнэлгээ</td>
                              <td className="py-2 pr-4">
                                Бизнес үнэлгээний зорилго, мөн чанар<br />
                                Хөрөнгийн үнэлгээний үнэлгээний суурь<br />
                                Орлогд суурилсан үнэлгээний суурь<br />
                                Мөнгөн урсгалд суурилсан үнэлгээний суурь<br />
                                Зах зээлийн суурьтай үнэлгээний хандлага
                              </td>
                              <td className="py-2 text-right align-top">2</td>
                            </tr>
                            <tr className="border-t-2 border-white/20 font-medium">
                              <td className="py-2 pr-4" colSpan={4}>
                                Бүгд
                              </td>
                              <td className="py-2 text-right">34</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto pt-4">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'No.' : 'Д/Д'}
                              </th>
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'Subject' : 'Хичээлийн нэр'}
                              </th>
                              <th className="text-left py-2 pr-4 text-white/80">
                                {lang === 'en' ? 'Exam duration' : 'Шалгалтын үргэлжлэх хугацаа'}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4">1</td>
                              <td className="py-2 pr-4">Мэдээллийн технологи</td>
                              <td className="py-2 pr-4">1 цаг</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4">2</td>
                              <td className="py-2 pr-4">Англи хэл</td>
                              <td className="py-2 pr-4">1 цаг</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 pr-4">3</td>
                              <td className="py-2 pr-4">Санхүү болон өртөг, удирдлагын бүртгэл</td>
                              <td className="py-2 pr-4">1 цаг 30 минут</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-10 space-y-6">
                        <div className="inline-flex rounded-full overflow-hidden border border-[#10b981]/40 mb-4">
                          <button
                            type="button"
                            onClick={() => setFinanceDetailTab('ifrs')}
                            className={`px-4 py-1.5 text-xs sm:text-sm font-medium ${
                              financeDetailTab === 'ifrs'
                                ? 'bg-[#10b981] text-white'
                                : 'bg-transparent text-white/70'
                            }`}
                          >
                            {lang === 'en'
                              ? 'International Financial Reporting Standards (IFRS)'
                              : 'САНХҮҮГИЙН ТАЙЛАГНАЛЫН ОЛОН УЛСЫН СТАНДАРТ'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setFinanceDetailTab('tax')}
                            className={`px-4 py-1.5 text-xs sm:text-sm font-medium ${
                              financeDetailTab === 'tax'
                                ? 'bg-[#10b981] text-white'
                                : 'bg-transparent text-white/70'
                            }`}
                          >
                            {lang === 'en' ? 'Tax accounting' : 'ТАТВАРЫН БҮРТГЭЛ'}
                          </button>
                        </div>

                        {financeDetailTab === 'ifrs' && (
                          <div className="space-y-8">
                            <h4 className="font-semibold text-white mb-2">
                              {lang === 'en'
                                ? '1. International Financial Reporting Standards'
                                : '1. САНХҮҮГИЙН ТАЙЛАГНАЛЫН ОЛОН УЛСЫН СТАНДАРТ'}
                            </h4>
                            <p className="leading-relaxed text-white/85 mb-3">
                              {lang === 'en'
                                ? 'In this module, you will study International Financial Reporting Standards. By the end, you will understand sector‑specific accounting features and further develop your professional skills.'
                                : 'Санхүүгийн тайлагналын олон улсын стандартуудыг судална. Энэхүү хичээлийг үзсэнээр нягтлан бодох бүртгэлийн салбар бүртгэлийн онцлог, ялгааг мэдэж ур чадвараа өсгөнө.'}
                            </p>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm border-collapse">
                                <thead>
                                  <tr className="border-b border-white/10">
                                    <th className="text-left py-2 pr-4 text-white/80">
                                      {lang === 'en' ? 'No.' : '№'}
                                    </th>
                                    <th className="text-left py-2 pr-4 text-white/80">
                                      {lang === 'en' ? 'Standard' : 'Стандарт'}
                                    </th>
                                    <th className="text-right py-2 text-white/80">
                                      {lang === 'en' ? 'Hours' : 'Хичээл заах цаг'}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {STANDARDS_TABLE.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                      <td className="py-2 pr-4">{row[0]}</td>
                                      <td className="py-2 pr-4">{row[1]}</td>
                                      <td className="py-2 text-right">{row[2]}</td>
                                    </tr>
                                  ))}
                                  <tr className="border-t-2 border-white/20 font-medium">
                                    <td className="py-2 pr-4" colSpan={2}>
                                      {lang === 'en' ? 'Total teaching hours' : 'Нийт хичээллэх цаг'}
                                    </td>
                                    <td className="py-2 text-right">102</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="space-y-4 pt-4">
                              <h5 className="font-semibold text-white">
                                3. ТАТВАРЫН МЭРГЭШСЭН ЗӨВЛӨХИЙН СУРГАЛТ /ТМЗ/ /СРТА/
                              </h5>
                              <p className="leading-relaxed text-white/85">
                                Зорилго нь онол практикийн мэдлэгээ бататгах мэргэжлийн өндөр ур чадвартай татварын мэргэшсэн зөвлөх бэлтгэхэд оршино. Нягтлан бодох
                                бүртгэлийн бакалавр зэрэгтэй, мэргэжлээрээ 5 жилээс дээш хугацаанд ажилласан нягтлан бодогчид энэ сургалтад хамрагдана.
                              </p>
                              <p className="leading-relaxed text-white/85">
                                Татварын мэргэшсэн зөвлөхийн эрх олгох шалгалт 2 үе шаттай: сорил шалгалт болон үндсэн шалгалт. Сорил шалгалтанд Мэдээллийн технологи,
                                Англи хэл, Санхүү болон өртөг, удирдлагын бүртгэл зэрэг хичээлүүд орно.
                              </p>

                              <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                  <thead>
                                    <tr className="border-b border-white/10">
                                      <th className="text-left py-2 pr-4 text-white/80">Холбогдох сургалтууд</th>
                                      <th className="text-left py-2 pr-4 text-white/80">Төлбөр</th>
                                      <th className="text-left py-2 pr-4 text-white/80">Эхлэх хугацаа (жишиг)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b border-white/5">
                                      <td className="py-2 pr-4">СТОУС – танхимын сургалт</td>
                                      <td className="py-2 pr-4">500,000₮</td>
                                      <td className="py-2 pr-4">7 хоногийн 3 өдөр, орой 19:00–21:30 (30–45 хоног)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                      <td className="py-2 pr-4">Татварын бүртгэл – танхим онлайн хосолсон сургалт</td>
                                      <td className="py-2 pr-4">300,000₮</td>
                                      <td className="py-2 pr-4">4-р сар болон 5-р саруудад, орой 19:00–21:30</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                      <td className="py-2 pr-4">Татварын онол – онлайн сургалт</td>
                                      <td className="py-2 pr-4">75,000₮</td>
                                      <td className="py-2 pr-4">Даваа, Лхагва 19:00–21:30, Бямба 10:00–17:30</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                      <td className="py-2 pr-4">Хууль эрх зүй – онлайн сургалт</td>
                                      <td className="py-2 pr-4">75,000₮</td>
                                      <td className="py-2 pr-4">Мягмар, Баасан 19:00–21:30, Ням 10:00–17:30</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        )}

                        {financeDetailTab === 'tax' && (
                          <div className="space-y-4 pt-2">
                            <h4 className="font-semibold text-white mb-2">
                              {lang === 'en' ? '2. Tax accounting' : '2. ТАТВАРЫН БҮРТГЭЛ'}
                            </h4>
                            <p className="leading-relaxed text-white/85 mb-3">
                              {lang === 'en'
                                ? 'A comprehensive study of the theory and legal foundations of tax accounting, types of taxes, their accounting and reporting specifics.'
                                : 'Татварын бүртгэлийн онол, эрх зүйн үндэс, татварын төрөл, бүртгэл, тайлагналын онцлогийг иж бүрнээр судална.'}
                            </p>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm border-collapse">
                                <thead>
                                  <tr className="border-b border-white/10">
                                    <th className="text-left py-2 pr-4 text-white/80">
                                      {lang === 'en' ? 'No.' : 'Д/Д'}
                                    </th>
                                    <th className="text-left py-2 pr-4 text-white/80">
                                      {lang === 'en' ? 'Topic' : 'Хичээлийн сэдэв'}
                                    </th>
                                    <th className="text-right py-2 text-white/80">
                                      {lang === 'en' ? 'Hours' : 'Хичээл заах цаг'}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">1</td>
                                    <td className="py-2 pr-4">Татварын бүртгэлийн үндсэн ухагдахуун</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">2</td>
                                    <td className="py-2 pr-4">Татвар ногдуулалтын үндсэн ойлголт</td>
                                    <td className="py-2 text-right">4</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">3</td>
                                    <td className="py-2 pr-4">Татварын тооцоолол</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">4</td>
                                    <td className="py-2 pr-4">Татвар ногдуулалт, бүртгэл, тайлагналын асуудал</td>
                                    <td className="py-2 text-right">4</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">5</td>
                                    <td className="py-2 pr-4">Орлогын албан татварын бүртгэл</td>
                                    <td className="py-2 text-right">4</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">6</td>
                                    <td className="py-2 pr-4">Тайлагнал үеийн хойшлогдсон татварын бүртгэл</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">7</td>
                                    <td className="py-2 pr-4">Аж ахуйн нэгжийн орлогын албан татварын бүртгэл</td>
                                    <td className="py-2 text-right">8</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">8</td>
                                    <td className="py-2 pr-4">Улсын төлбөр хураамж</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">9</td>
                                    <td className="py-2 pr-4">Хэрэглээний төлбөр хураамж</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">10</td>
                                    <td className="py-2 pr-4">Усны төлбөр хураамж</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">11</td>
                                    <td className="py-2 pr-4">Авто тээвэр өөрөө явах хэрэгслийн татвар</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">12</td>
                                    <td className="py-2 pr-4">Буухи татвар</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">13</td>
                                    <td className="py-2 pr-4">Үл хөдлөх эд хөрөнгийн албан татвар</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">14</td>
                                    <td className="py-2 pr-4">Гаалийн татвар</td>
                                    <td className="py-2 text-right">4</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">15</td>
                                    <td className="py-2 pr-4">Онцгой албан татвар</td>
                                    <td className="py-2 text-right">4</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">16</td>
                                    <td className="py-2 pr-4">Нийслэл хотын албан татвар</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">17</td>
                                    <td className="py-2 pr-4">Агаарын бохирдлын албан татвар</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">18</td>
                                    <td className="py-2 pr-4">Нийгмийн даатгалын ерөнхий тухай хууль</td>
                                    <td className="py-2 text-right">2</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">19</td>
                                    <td className="py-2 pr-4">Нийгмийн даатгалаас олгогдох тэтгэвэр тэтгэмжийн тухай хууль</td>
                                    <td className="py-2 text-right">4</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">20</td>
                                    <td className="py-2 pr-4">Нэмэгдсэн өртгийн албан татвар</td>
                                    <td className="py-2 text-right">4</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">21</td>
                                    <td className="py-2 pr-4">Хувь хүний орлогын албан татвар</td>
                                    <td className="py-2 text-right">4</td>
                                  </tr>
                                  <tr className="border-b border-white/5">
                                    <td className="py-2 pr-4">22</td>
                                    <td className="py-2 pr-4">Байгалийн нөөц ашигласны албан татвар</td>
                                    <td className="py-2 text-right">8</td>
                                  </tr>
                                  <tr className="border-t-2 border-white/20 font-medium">
                                    <td className="py-2 pr-4" colSpan={2}>
                                      {lang === 'en' ? 'Total' : 'Нийт'}
                                    </td>
                                    <td className="py-2 text-right">72</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
      );
    }
    return null;
  }

  return (
    <>
      <Header />
      <main className="pt-20 bg-[#0d1512] min-h-screen pb-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
            {lang === 'en' ? 'Training' : 'Сургалт'}
          </h1>
          <div className="grid md:grid-cols-[300px_1fr] gap-8">
            <nav className="space-y-3">
              {MAIN_TABS_BASE.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-4 rounded-lg font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#10b981] text-white'
                      : 'bg-[#161b22] text-white/90 hover:bg-[#10b981]/20 border border-white/10'
                  }`}
                >
                  {lang === 'en' ? tab.labelEn : tab.labelMn}
                </button>
              ))}
            </nav>
            <div className="bg-[#161b22] rounded-xl border border-white/5 p-6 md:p-8 text-white/90">
              {getTabContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
