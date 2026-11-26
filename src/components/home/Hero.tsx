import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-50">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 size-[500px] rounded-full bg-sky-200/30 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 size-[400px] rounded-full bg-teal-200/25 blur-[100px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-24">
        {/* Hero content */}
        <div className="relative z-10 max-w-2xl">
          {/* Badge */}
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/80 px-4 py-2 shadow-sm shadow-teal-900/5 backdrop-blur-sm">
              <span className="flex size-7 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                ✦
              </span>
              <span className="text-sm font-semibold text-[#176B91]">
                Nha Khoa Bác Sĩ Thu
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#173B55] sm:text-5xl lg:text-6xl">
              Chăm sóc nụ cười,
              <span className="mt-2 block bg-gradient-to-r from-[#087FC2] to-[#12B7B0] bg-clip-text text-transparent">
                lan tỏa sự tự tin.
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Nha Khoa Bác Sĩ Thu đồng hành cùng bạn trong hành trình chăm sóc
              sức khỏe răng miệng với sự tận tâm và chu đáo.
            </p>
          </Reveal>
          {/* CTA */}
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#087FC2] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#066BA5] hover:shadow-xl"
              >
                Khám phá dịch vụ
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="tel:0961990997"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#087FC2]/30 bg-white/80 px-7 py-4 text-sm font-bold text-[#087FC2] transition-all duration-300 hover:-translate-y-1 hover:border-[#12B7B0] hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7a2 2 0 0 1 1.76 2.04Z" />
                </svg>
                Gọi tư vấn
              </a>
            </div>
          </Reveal>
          {/* Supporting text */}
          <Reveal delay={0.3}>
            <div className="mt-9 flex items-center gap-3 text-sm text-slate-500">
              <span className="h-px w-10 bg-gradient-to-r from-[#087FC2] to-[#12B7B0]" />
              <span>Chăm sóc tận tâm, nụ cười tự tin</span>
            </div>
          </Reveal>
        </div>

        {/* 3D Dental visual */}
        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          {/* Soft background glow */}
          <div
            aria-hidden="true"
            className="absolute inset-[15%] rounded-full bg-gradient-to-br from-sky-300/30 to-teal-300/30 blur-[90px]"
          />

          {/* Tooth image */}
          <Reveal delay={0.4} y={10}>
            <div className="relative aspect-square w-full">
              <Image
                src="/images/homepage/dental-tooth.webp"
                alt="Minh họa chiếc răng 3D"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain motion-safe:animate-[tooth-float_6s_ease-in-out_infinite]"
              />
            </div>
          </Reveal>

          {/* Decorative accents */}
          <div
            aria-hidden="true"
            className="absolute right-[12%] top-[15%] size-3 rounded-full bg-amber-400 shadow-[0_0_20px_5px_rgba(245,166,35,0.25)]"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[15%] left-[12%] size-2 rounded-full bg-teal-400"
          />
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-0 -z-10 h-40 w-full rounded-[50%] bg-gradient-to-r from-sky-100 via-cyan-100 to-teal-100 opacity-70 blur-2xl"
      />
    </section>
  );
}
