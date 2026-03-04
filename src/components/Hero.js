import { useState, useEffect } from 'react'
import Image from 'next/image'

const carouselImages = [
  '/cars1.jpg',
  '/cars1.jpg', // Add more images: '/cars2.jpg', '/cars3.jpg'
  '/cars1.jpg',
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imgError, setImgError] = useState({})

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const goPrev = () => setCurrentSlide((s) => (s - 1 + carouselImages.length) % carouselImages.length)
  const goNext = () => setCurrentSlide((s) => (s + 1) % carouselImages.length)

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #0A1C16 0%, #0d281f 25%, #134e32 60%, #1E6E45 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(56, 161, 105, 0.2) 0%, transparent 50%)',
        }}
      />

      {/* Full carousel - fills viewport */}
      <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center pt-20 pb-20 px-2 md:px-4">
        <div className="relative w-full h-[calc(100vh-6rem)] min-h-[500px] max-w-[1920px] mx-auto flex items-center justify-center">
          {/* Carousel slides - full image */}
          {carouselImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {!imgError[i] ? (
                <Image
                  src={src}
                  alt={`MBD Tax Tactic slide ${i + 1}`}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                  priority={i === 0}
                  onError={() => setImgError((prev) => ({ ...prev, [i]: true }))}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#0d281f]/80 rounded-2xl">
                  <span className="text-6xl font-bold text-[#38A169]">MBD</span>
                </div>
              )}
            </div>
          ))}

          {/* Prev arrow */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-[#38A169] hover:text-[#48bb78] transition-colors rounded-full hover:bg-white/5"
            aria-label="Previous slide"
          >
            <span className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[20px] border-r-current" />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-[#38A169] hover:text-[#48bb78] transition-colors rounded-full hover:bg-white/5"
            aria-label="Next slide"
          >
            <span className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[20px] border-l-current" />
          </button>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            className={`w-3.5 h-3.5 rounded-full transition-colors ${
              i === currentSlide ? 'bg-[#38A169]' : 'bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
