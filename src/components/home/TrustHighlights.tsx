import Reveal from "@/components/animations/Reveal";

import {
  UserRoundCheck,
  Monitor,
  HeartHandshake,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: UserRoundCheck,
    title: "Bác sĩ giàu kinh nghiệm",
    description:
      "Đội ngũ bác sĩ có kinh nghiệm, tận tâm trong quá trình thăm khám và điều trị.",
    color: "bg-sky-50 text-sky-600",
    delay: 0.1,
  },
  {
    icon: Monitor,
    title: "Trang thiết bị hiện đại",
    description:
      "Ứng dụng trang thiết bị hiện đại hỗ trợ quá trình thăm khám và chăm sóc răng miệng.",
    color: "bg-teal-50 text-teal-600",
    delay: 0.2,
  },
  {
    icon: HeartHandshake,
    title: "Tư vấn tận tâm",
    description:
      "Lắng nghe, giải đáp thắc mắc và tư vấn phù hợp với nhu cầu của từng khách hàng.",
    color: "bg-amber-50 text-amber-600",
    delay: 0.3,
  },
  {
    icon: ShieldCheck,
    title: "Quy trình vô khuẩn",
    description:
      "Chú trọng vệ sinh, khử khuẩn và kiểm soát vô khuẩn trong quá trình thực hiện dịch vụ.",
    color: "bg-indigo-50 text-indigo-600",
    delay: 0.4,
  },
];

export default function TrustHighlights() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-bold tracking-wide text-teal-700">
              <span className="size-2 rounded-full bg-teal-500" />
              GIÁ TRỊ CỦA CHÚNG TÔI
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#173B55] sm:text-4xl">
              An tâm chăm sóc,
              <span className="block bg-gradient-to-r from-[#087FC2] to-[#12B7B0] bg-clip-text text-transparent">
                trọn vẹn niềm tin.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Với sự tận tâm, kinh nghiệm và chú trọng chất lượng, Nha Khoa Bác
              Sĩ Thu luôn hướng đến trải nghiệm chăm sóc răng miệng tốt nhất cho
              khách hàng.
            </p>
          </div>
        </Reveal>
        {/* Highlight cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal delay={item.delay} key={item.title}>
                <article className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/40 transition-all duration-300 hover:-translate-y-2 hover:border-teal-100 hover:shadow-xl hover:shadow-sky-900/5">
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex size-14 items-center justify-center rounded-2xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-bold text-slate-200">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-lg font-bold text-[#173B55]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  {/* Decorative arrow */}
                  <div className="mt-6 flex items-center justify-end">
                    <ArrowUpRight
                      size={19}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-500"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
