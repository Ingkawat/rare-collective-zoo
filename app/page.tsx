// app/page.tsx
"use client";
import { Zen_Dots } from "next/font/google";
import Image from "next/image";
import { ArrowRight, MoveRight } from "lucide-react";
import { anuphan } from "@/app/fonts";
const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const redirectToRepttown = () => {
  window.location.href =
    "https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef";
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="pt-10 md:pt-30 pb-30">
        {/* Text */}
        <div className="md:flex md:items-end md:justify-center text-center mt-20 md:mt-0">
          <p className="text-xl md:text-3xl text-gray-300 mb-2">Because</p>

          <p
            className={`text-6xl md:text-8xl font-bold mx-4 bg-clip-text text-transparent ${zenDots.className}`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF5A1F 0%, #FF7A18 40%, #FFB347 100%)",
              textShadow: "0 0 35px rgba(255,120,40,0.4)",
            }}
          >
            RARE
          </p>

          <p className="text-xl md:text-3xl text-gray-300 mb-2">
            isn&apos;t enough
          </p>
        </div>
        {/* Image - Full Width with Max Height */}
        <div className="w-full overflow-hidden mt-20 md:mt-0">
          <Image
            src="/Agama lizard.png"
            alt="Lizard"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto origin-top"
          />
        </div>
      </section>

      {/* WHY WE'RE THE BEST */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <h2 className="text-center text-2xl md:text-[40px] mb-20">
          Why We&apos;re{" "}
          <span
            className={`text-2xl md:text-[40px] font-bold bg-clip-text text-transparent`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF4400 0%, #FF9500 100%)",
              textShadow: "0 0 35px rgba(255,120,40,0.4)",
            }}
          >
            THE BEST
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "PREMIUM",
              desc: "คัดสรรจากฟาร์มและนักเพาะพันธุ์ชั้นนำทั่วโลก มั่นใจได้ว่าสัตว์ที่คุณได้รับคือ สัตว์หายากคุณภาพสูง เหมาะสำหรับนักสะสมและผู้เลี้ยงมืออาชีพ",
              linear: "linear-gradient(90deg, #FF4400 0%, #FF9500 30%)",
              gradientPosition:
                "radial-gradient(ellipse 120% 160% at 0% 100%, rgba(234, 78, 0, 0.6) 0%, transparent 50%)",
            },
            {
              title: "CITES",
              desc: "ทุกการนำเข้าสัตว์มาพร้อมใบอนุญาตและเอกสาร CITES อย่างเป็นทางการ ปฏิบัติตาม กฎหมายไทยและกฎการค้าสัตว์ป่านานาชาติ อย่างเคร่งครัด",
              linear: "linear-gradient(90deg, #FF4400 0%, #FF9500 20%)",
              gradientPosition:
                "radial-gradient(ellipse 120% 100% at 50% 0%, rgba(234, 78, 0, 0.6) 0%, transparent 50%)",
            },
            {
              title: "RARE AND UNIQUE",
              desc: "ทุกการนำเข้าสัตว์มาพร้อมใบอนุญาตและเอกสาร CITES อย่างเป็นทางการ ปฏิบัติตาม กฎหมายไทยและกฎการค้าสัตว์ป่านานาชาติ อย่างเคร่งครัด",
              linear: "linear-gradient(90deg, #FF4400 0%, #FF9500 70%)",
              gradientPosition:
                "radial-gradient(ellipse 120% 100% at 50% 100%, rgba(234, 78, 0, 0.6) 0%, transparent 50%)",
            },
            {
              title: "GLOBAL-STANDARD\nSECURE TRANSPORTATION",
              desc: "ทุกการนำเข้าสัตว์มาพร้อมใบอนุญาตและเอกสาร CITES อย่างเป็นทางการ ปฏิบัติตาม กฎหมายไทยและกฎการค้าสัตว์ป่านานาชาติ อย่างเคร่งครัด",
              linear: "linear-gradient(90deg, #FF4400 0%, #FF9500 80%)",
              gradientPosition:
                "radial-gradient(ellipse 120% 160% at 100% 100%, rgba(234, 78, 0, 0.6) 0%, transparent 50%)",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative p-8 min-h-[300px] flex flex-col items-start justify-center rounded-[20px] overflow-hidden border border-[#A8A8A8]/25 bg-black"
              style={{
                backgroundImage: item.gradientPosition,
              }}
            >
              <p
                className="mb-4 text-2xl md:text-[32px] font-medium bg-clip-text text-transparent whitespace-pre-line relative z-10"
                style={{
                  backgroundImage: item.linear,
                  textShadow: "0 0 35px rgba(255,120,40,0.4)",
                }}
              >
                {item.title}
              </p>
              <p
                className={`text-sm text-gray-300 max-w-md relative z-10 ${anuphan.className}`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STORE */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <div className="relative rounded-3xl overflow-hidden lg:overflow-visible bg-black border border-[#A8A8A8]/40 p-10 lg:p-15 xl:p-20 flex flex-col lg:flex-row items-center justify-between gap-6 pb-48 lg:pb-20">
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-15 rounded-3xl bg-gradient-to-t from-[#FF4400] via-[#FF4400]/10 to-transparent"></div>

          {/* Gradient glow on left side */}
          <div className="absolute top-0 left-0 bottom-0 w-5 rounded-3xl bg-gradient-to-r from-[#FF4400]/50 to-transparent"></div>

          {/* Gradient glow on right side */}
          <div className="absolute top-0 right-0 bottom-0 w-5 rounded-3xl bg-gradient-to-l from-[#FF4400]/50 to-transparent"></div>

          <div className="relative z-10 max-w-xl">
            <h3 className="text-4xl font-light lg:flex lg:items-center text-center lg:text-left gap-4">
              Our store on
              <div className="flex justify-center">
                <Image
                  src="/repttown.png"
                  alt="Repttown logo"
                  width={250}
                  height={150}
                  className="-mt-20 lg:-mt-28"
                />
              </div>
            </h3>
            <p className="text-base lg:text-lg max-w-lg my-10 leading-relaxed text-center lg:text-left">
              Discover exceptional pets, thoughtfully curated and offered with
              the highest standards of trust.
            </p>
            <button
              onClick={() => redirectToRepttown()}
              className="cursor-pointer group relative px-8 py-3 text-sm rounded-full overflow-hidden flex items-center gap-2 mx-auto lg:mx-0 transition-all duration-300"
            >
              {/* Gradient Border */}
              <span
                className="absolute inset-0 rounded-full p-[2px]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FF4400 0%, #FF9500 100%)",
                }}
              >
                <span className="flex h-full w-full items-center justify-center rounded-full bg-black"></span>
              </span>

              {/* Content */}
              <span
                className="relative z-10 bg-clip-text text-transparent font-medium text-base"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FF4400 0%, #FF9500 100%)",
                }}
              >
                See Store
              </span>
              <span
                className="relative z-10 text-base"
                style={{ color: "#FFBA59" }}
              >
                <ArrowRight />
              </span>

              {/* Hover Effect */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FF4400 0%, #FF9500 100%)",
                }}
              ></span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 gap-2">
                <span className="text-white font-medium text-base">
                  See Store
                </span>
                <ArrowRight className="text-white text-base" />
              </span>
            </button>
          </div>

          <div className="absolute lg:-right-12 lg:top-4/6 xl:-right-18 xl:top-4/6 -translate-y-2/3 z-10 lg:block hidden">
            <Image
              src="/liz.png"
              alt="Lizard store"
              width={650}
              height={550}
              className="lg:w-[500px] xl:w-[550px] object-contain"
            />
          </div>

          {/* Mobile version */}
          <div className="absolute bottom-0 right-0 left-0 w-full z-10 lg:hidden flex justify-center">
            <Image
              src="/liz.png"
              alt="Lizard store"
              width={350}
              height={350}
              className="w-[350px] md:w-[550px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* NEW ARRIVAL */}
      <section className="px-6 max-w-6xl mx-auto pb-40">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl">New Arrival</h3>
          <button
            onClick={() => redirectToRepttown()}
            className="cursor-pointer group relative px-8 py-3 text-sm rounded-full overflow-hidden flex items-center gap-2 mx-auto md:mx-0 transition-all duration-300"
          >
            {/* Gradient Border */}
            <span
              className="absolute inset-0 rounded-full p-[2px]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF4400 0%, #FF9500 100%)",
              }}
            >
              <span className="flex h-full w-full items-center justify-center rounded-full bg-black"></span>
            </span>

            {/* Content */}
            <span
              className="relative z-10 bg-clip-text text-transparent font-medium text-base"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF4400 0%, #FF9500 100%)",
              }}
            >
              See more
            </span>
            <span
              className="relative z-10 text-base"
              style={{ color: "#FFBA59" }}
            >
              <ArrowRight />
            </span>

            {/* Hover Effect */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF4400 0%, #FF9500 100%)",
              }}
            ></span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 gap-2">
              <span className="text-white font-medium text-base">See more</span>
              <ArrowRight className="text-white text-base" />
            </span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { name: "Armadillo lizard", image: "/Armadillo.png" },
            { name: "Gecmyda japonica", image: "/Geoemyda.png" },
            { name: "Armadillo lizard", image: "/Gaboon.png" },
            { name: "Sungazer lizard", image: "/Sungazer.png" },
          ].map((reptile, index) => (
            <div
              key={`${reptile.name}-${index}`}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-1 border-amber-600/50 hover:border-amber-500 transition-all duration-300 hover:scale-105"
            >
              {/* รูปภาพ */}
              <div className="h-[300px] xl:h-[200px] bg-black">
                <Image
                  width={250}
                  height={200}
                  src={reptile.image}
                  alt={reptile.name}
                  className="w-full h-full object-fill"
                />
              </div>

              {/* แถบชื่อด้านล่าง */}
              <div
                className="bg-black py-6 px-4 flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(ellipse 140% 300% at 50% 100%, rgba(255, 68, 0, 0.6) 0%, transparent 40%)",
                }}
              >
                <p className="text-white text-xl font-light text-center tracking-wide">
                  {reptile.name}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(251,191,36,0.15)] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
