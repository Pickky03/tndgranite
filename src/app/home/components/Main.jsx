"use client"
import Image from "next/image"
import { HomeCarousel } from "./Carousel"
import { useRouter } from "next/navigation"
const stoneTypes = [
  {
    name: "Đá Thạch Anh Lux Quartz",
    title: "Vẻ đẹp tinh tế, sang trọng",
    description:
      "Đá thạch anh Lux Quartz mang đến vẻ đẹp sang trọng, tinh tế với những mẫu mã độc đáo. Phù hợp cho các không gian cao cấp, tạo điểm nhấn ấn tượng.",
    image: "/images/lux/demo4.png",
    features: ["Vân đá đẹp ", "Độ bền cao", "Dễ gia công", "Màu sắc đa dạng"],
  },
  {
    name: "Đá Vicostone",
    title: "Công nghệ hiện đại",
    description:
      "Vicostone là sản phẩm đá nhân tạo cao cấp với công nghệ tiên tiến, kháng khuẩn tự nhiên, không thấm nước và dễ vệ sinh.",
    image: "/images/vicostone/demo6.jpg",
    features: ["Kháng khuẩn tự nhiên", "Không thấm nước", "Dễ vệ sinh", "Màu sắc ổn định"],
  },
  {
    name: "Đá terazzo",
    title: "Vẻ đẹp độc đáo, sang trọng",
    description: "Terazzo là loại đá nhân tạo được tạo ra từ việc kết hợp nhiều loại đá khác nhau, mang đến vẻ đẹp độc đáo và tính năng vượt trội.",
    image: "/images/terrazzo/demo4.jpg",
    features: ["Độ bền cao", "Chịu nhiệt tốt", "Dễ vệ sinh", "Màu sắc đa dạng"],
  },
]

const usageSpaces = [
  {
    title: "Phòng bếp",
    description:
      "Sản phẩm TND Granite luôn làm nổi bật không gian bếp của bạn với khả năng chống thấm, chống bám bẩn, độ bền cao và đại mau trang nhã ấn tượng",
    image: "/images/vicostone/demo4.jpg",
    icon: "🍳",
  },
  {
    title: "Phòng tắm",
    description:
      "TND Granite cung cấp nhiều thiết kế với màu sắc tinh tế, phù hợp với phong cách từ cổ điển đến hiện đại. Đặc tính chống thấm, dễ bảo dưỡng của đá nhân tạo góp thách anh là sự lựa chọn tối ưu cho phòng tắm của bạn",
    image: "/images/lux/demo8.jpg",
    icon: "🛁",
  },
  {
    title: "Công trình thương mại",
    description:
      "TND Granite luôn cung cấp các loại đá có độ bền cao, khả năng chịu mài mòn tốt, là vật liệu thích hợp nhất cho mọi công trình thương mại",
    image: "/images/granite/demo3.jpg",
    icon: "🏢",
  },
  {
    title: "Cầu thang",
    description:
      "Đá tự nhiên và nhân tạo tạo nên những bậc cầu thang sang trọng, bền đẹp theo thời gian với khả năng chống trơn trượt tốt",
    image: "/images/china/demo2.png",
    icon: "🪜",
  },
]

export default function Main() {
  const router = useRouter()
  const handleClick = () => {
    console.log("Navigating to products page")
    router.push('/products')
  }
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Carousel Section */}
      <section className="relative">
        <HomeCarousel />
      </section>

      {/* Stone Types Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Khám phá bộ sưu tập đá cao cấp</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cung cấp đa dạng các loại đá tự nhiên và nhân tạo cao cấp, phù hợp với mọi nhu cầu thiết kế và
              thi công
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stoneTypes.map((stone, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image src={stone.image} alt={stone.name} fill className="object-cover" priority />

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{stone.name}</h3>
                    <p className="text-sm opacity-90">{stone.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Spaces Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Không gian ứng dụng đa dạng</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sản phẩm đá của chúng tôi phù hợp với mọi không gian từ gia đình đến thương mại
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usageSpaces.map((space, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={space.image || "/placeholder.svg"}
                    alt={space.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{space.icon}</span>
                    <h3 className="text-2xl font-bold">{space.title}</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed mb-4">{space.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)" />
            <defs>
              <pattern id="pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                <circle cx="5" cy="5" r="1" fill="currentColor" />
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bạn cần tư vấn về sản phẩm đá?</h2>
              <p className="text-blue-100 max-w-xl text-lg leading-relaxed">
                Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất cho dự án của
                bạn.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/lien-he"
                className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Liên hệ ngay
              </a>
              <a
                href="tel:0935789363"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                Gọi ngay
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
