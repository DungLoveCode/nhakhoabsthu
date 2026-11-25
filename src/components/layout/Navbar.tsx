import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Thư viện", href: "/gallery" },
  { label: "Đánh giá", href: "/testimonials" },
  { label: "Liên hệ", href: "/contact" },
];

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Nha Khoa Bác Sĩ Thu - Trang chủ"
      className="group flex shrink-0 items-center gap-2.5"
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-surface-muted text-primary transition-transform duration-300 group-hover:rotate-6">
        <Image
          src="/logo/logo.svg"
          alt="Nha Khoa Bác Sĩ Thu"
          width={320}
          height={124}
          priority
        />
      </span>

      <span className="flex flex-col">
        <span className="text-sm font-extrabold tracking-tight text-text-primary sm:text-base">
          Nha Khoa Bác Sĩ Thu
        </span>
        <span className="text-[10px] font-medium tracking-[0.16em] text-text-secondary">
          CON CUÔNG · NGHỆ AN
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Điều hướng chính"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/15 lg:inline-flex"
        >
          Liên hệ ngay
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile menu */}
        <details className="group relative lg:hidden">
          <summary
            aria-label="Mở menu điều hướng"
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl border border-border text-text-primary transition-colors hover:bg-surface-muted [&::-webkit-details-marker]:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-6 group-open:hidden"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="hidden size-6 group-open:block"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          </summary>

          <div className="absolute right-0 top-full mt-3 w-[min(90vw,360px)] rounded-2xl border border-border bg-white p-3 shadow-xl shadow-text-primary/10">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 border-t border-border pt-3">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Liên hệ ngay ↗
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
