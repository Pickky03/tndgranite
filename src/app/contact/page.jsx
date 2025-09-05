'use client'

import Header from "../home/components/header"
import Footer from "../home/components/Footer"
export default function ContactPage() {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r  from-blue-950 to-blue-700 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên hệ với chúng tôi</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
          Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ ngay để được hỗ trợ nhanh chóng và chuyên nghiệp.
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📍 Địa chỉ</h3>
            <p className="text-gray-600">
              77 Võ Chí Công, Phường Hoà Xuân,<br />
              Quận Cẩm Lệ, TP Đà Nẵng
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📞 Điện thoại</h3>
            <a href="tel:0935789363" className="text-blue-600 font-medium hover:underline">
              093 578 93 63
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📧 Email</h3>
            <a
              href="mailto:tuongnhadep247@gmail.com"
              className="text-blue-600 font-medium hover:underline"
            >
              tuongnhadep247@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gửi tin nhắn cho chúng tôi</h2>
          <form className="bg-white rounded-xl shadow-md p-8 space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Họ và tên</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập họ và tên"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập email của bạn"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nội dung</label>
              <textarea
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập nội dung tin nhắn"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </section>

      {/* Map (Optional) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Bản đồ</h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=77+V%C3%B5+Ch%C3%AD+C%C3%B4ng,+Ho%C3%A0+Xu%C3%A2n,+C%E1%BA%A9m+L%E1%BB%87,+%C4%90%C3%A0+N%E1%BA%B5ng&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}
