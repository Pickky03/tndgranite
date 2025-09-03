'use client'

import Footer from "../home/components/Footer"
import Header from "../home/components/header"

export default function TndgranitePage() {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-300 to-indigo-400 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Công Ty TNHH TM&TK Tường Nhà Đẹp
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Chuyên cung cấp – thi công – lắp đặt các loại đá Granite, Marble, Đá Nung Kết và Đá Thạch Anh cao cấp
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Giới thiệu về chúng tôi</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              TND Granite là đơn vị hàng đầu trong lĩnh vực cung cấp, thi công và lắp đặt đá tại Đà Nẵng.
              Với nhiều năm kinh nghiệm, chúng tôi tự hào mang đến cho khách hàng những sản phẩm chất lượng cao,
              mẫu mã đa dạng, cùng dịch vụ chuyên nghiệp.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Đá Granite – bền bỉ, sang trọng</li>
              <li>✅ Đá Marble – tinh tế, đẳng cấp</li>
              <li>✅ Đá Nung Kết – công nghệ tiên tiến</li>
              <li>✅ Đá Thạch Anh – hiện đại, đa dạng</li>
            </ul>
          </div>
          <div>
            <img
              src="/images/logo.jpg"
              alt="TND Granite showroom"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Liên hệ với chúng tôi</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ, tư vấn và cung cấp giải pháp tối ưu cho công trình của bạn.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Địa chỉ</h3>
              <p className="text-gray-600">
                77 Võ Chí Công, Phường Hoà Xuân,<br />
                Quận Cẩm Lệ, TP Đà Nẵng
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Điện thoại</h3>
              <a href="tel:0935789363" className="text-blue-600 font-medium hover:underline">
                093 578 93 63
              </a>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Loại hình</h3>
              <p className="text-gray-600">Cửa hàng vật liệu xây dựng</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bạn cần tư vấn hoặc báo giá?
          </h2>
          <p className="mb-6 text-blue-100">
            Liên hệ ngay để được hỗ trợ nhanh chóng và chuyên nghiệp từ đội ngũ TND Granite.
          </p>
          <a
            href="tel:0935789363"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
          >
            Gọi ngay: 093 578 93 63
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </>
  )
}
