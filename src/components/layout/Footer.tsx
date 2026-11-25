import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Thư viện", href: "/gallery" },
  { label: "Đánh giá", href: "/testimonials" },
  { label: "Câu hỏi thường gặp", href: "/faq" },
];

const serviceLinks = [
  "Khám và tư vấn nha khoa",
  "Lấy cao răng",
  "Trám răng",
  "Nhổ răng",
];

export default function Footer() {
  return (
    <footer className="bg-[#173B55] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label="Nha Khoa Bác Sĩ Thu - Trang chủ"
              className="inline-flex rounded-xl bg-white p-3 transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src="/logo/logo.svg"
                alt="Nha Khoa Bác Sĩ Thu"
                width={320}
                height={124}
                className="h-auto w-[240px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
              Đồng hành cùng bạn trên hành trình chăm sóc
              sức khỏe răng miệng và gìn giữ nụ cười tự tin.
            </p>

            <Link
              href="https://www.facebook.com/nhakhoathamychinhnhatrongranggia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-secondary hover:text-secondary"
            >
              Facebook
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold tracking-wide">
              KHÁM PHÁ
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-wide">
              DỊCH VỤ
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/65 transition-colors hover:text-secondary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wide">
              LIÊN HỆ
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div className="flex gap-3">
                <span className="text-secondary">⌖</span>
                <p>Con Cuông, Nghệ An, Việt Nam</p>
              </div>

              <div className="flex gap-3">
                <span className="text-secondary">↗</span>
                <Link
                  href="https://www.facebook.com/nhakhoathamychinhnhatrongranggia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-secondary"
                >
                  Facebook của phòng khám
                </Link>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-secondary transition-colors hover:text-white"
              >
                Xem thông tin liên hệ
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        
        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © 2026 Nha Khoa Bác Sĩ Thu. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/50 transition-colors hover:text-secondary"
            >
              Chính sách bảo mật
            </Link>

            <span className="hidden text-white/20 sm:inline">|</span>

            <p className="text-xs text-white/50">
              Designed & Developed by{" "}
              <a
                href="https://www.luongtuandung.id.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition-colors hover:text-secondary"
              >
                Luong Tuan Dung
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
