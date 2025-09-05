'use client';

export default function FloatingCallButton({
  phone = '0935789363', // thay số của bạn
  label = 'Gọi ngay',
}) {
  const tel = `tel:${phone.replace(/\s+/g, '')}`;

  return (
    <div
      className="fixed z-[100] right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] md:right-6 md:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]"
      aria-label="Nút gọi nhanh"
    >
      <a
        href={tel}
        className="relative flex items-center gap-3 rounded-full bg-green-600 text-white shadow-lg hover:shadow-xl
                   transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2
                   focus:ring-green-400 focus:ring-offset-2"
      >
        {/* Hiệu ứng ping */}
        <span className="absolute -inset-1.5 rounded-full bg-green-500/40 animate-ping pointer-events-none" />

        {/* Icon điện thoại */}
        <span className="relative grid place-items-center size-18 md:size-14 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 md:size-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 5a2 2 0 012-2h1.28a2 2 0 011.94 1.516l.5 2A2 2 0 018.1 8.1l-1.2 1.2a16 16 0 006.8 6.8l1.2-1.2a2 2 0 012.584-.1l2 .5A2 2 0 0121 18.72V20a2 2 0 01-2 2h-1C9.716 22 3 15.284 3 7V5z" />
          </svg>
        </span>

        {/* Nhãn (ẩn trên mobile, hiện trên md+) */}
        <span className="pr-4 hidden md:block font-medium">{label}</span>
      </a>
    </div>
  );
}
