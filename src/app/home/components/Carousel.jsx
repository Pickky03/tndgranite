"use client"
import React from "react"
import Image from "next/image"

const carouselSlides = [
  {
    title: "Bộ sưu tập Exotic",
    subtitle: "Đá cao cấp cho không gian sang trọng",
    description:
      "Bộ sưu tập cao cấp Exotic tái tạo những thiết kế độc đáo, tinh tế, quy phái không chỉ của các sản phẩm đá tự nhiên mà còn từ những vẻ đẹp vô giá của thiên nhiên, là nguồn cảm hứng bất tận cho mọi sáng tạo",
    image: "/images/vicostone/demo1.jpg",
    buttonText: "ẢNH ỨNG DỤNG",
    buttonLink: "XEM BỘ SƯU TẬP",
  },
  {
    title: "Đá Nung kết Cao Cấp",
    subtitle: "Sức mạnh thiên nhiên trong từng chi tiết",
    description:
      "Granite tự nhiên với độ bền vượt trội, chịu được nhiệt độ cao và va đập mạnh. Phù hợp cho mọi không gian từ bếp gia đình đến công trình thương mại",
    image: "/images/china/demo3.png",
    buttonText: "XEM SẢN PHẨM",
    buttonLink: "TƯ VẤN NGAY",
  },
  {
    title: "Vicostone Premium",
    subtitle: "Công nghệ hiện đại, chất lượng vượt trội",
    description:
      "Sản phẩm đá nhân tạo cao cấp với công nghệ tiên tiến, kháng khuẩn tự nhiên, không thấm nước và dễ vệ sinh. Lựa chọn hoàn hảo cho không gian hiện đại",
    image: "/images/vicostone/demo2.jpg",
    buttonText: "KHÁM PHÁ",
    buttonLink: "LIÊN HỆ",
  },
]

export const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl">
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
                  <h2 className="text-xl md:text-2xl mb-6 text-gray-200">{slide.subtitle}</h2>
                  <p className="text-lg mb-8 leading-relaxed text-gray-300 max-w-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
