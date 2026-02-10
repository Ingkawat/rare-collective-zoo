import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative py-12 xl:py-16 2xl:py-36 mb-0 xl:mb-0">
      <div className="mx-auto max-w-7xl">
        <div className="grid xl:grid-cols-2 gap-0 xl:gap-8 2xl:gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-4 xl:space-y-6 px-10 md:px-20 lg:px-30 xl:px-12 2xl:px-6 text-[#FFFFFF]">
            <p
              className="font-normal text-4xl bg-clip-text text-transparent font-rems"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF4400 0%, #FF6600 10%, #FF8800 30%, #FF9500 100%)",
              }}
            >
              OUR STORY
            </p>
            <h1 className="text-xl font-normal leading-tight">
              Rare Collective Zoo <br />
              is exotic pet import business in Thailand
            </h1>

            <p className="text-base font-normal leading-relaxed">
              dedicated to raising the standards of acquiring, importing, and
              caring for rare exotic animals to an international level.
            </p>
            <p className="text-base font-normal leading-relaxed">
              Our mission is to innovate within the exotic pet industry while
              empowering enthusiasts, collectors, and breeders to pursue their
              passion professionally and legally.
            </p>
            <p className="text-base font-normal leading-relaxed">
              Whether you are looking for rare exotic pets in Thailand, seeking
              CITES-compliant exotic animals, or aiming to transform your love
              for exotic pets into a sustainable business, Rare Collective Zoo
              is here to support your journey every step of the way.
            </p>
          </div>

          {/* RIGHT - ว่างไว้สำหรับ grid */}
          <div className="hidden md:block"></div>
        </div>
      </div>

      {/* Snake Image สำหรับหน้าจอเล็ก (บน-ล่าง) */}
      <div className="xl:hidden w-full -mt-10 md:-mt-35 lg:-mt-60 -mb-20 md:-mb-32 lg:-mb-40">
        <Image
          src="/snake.png"
          alt="snake"
          width={800}
          height={400}
          className="w-full h-full object-contain object-right"
        />
      </div>

      {/* Our Story Image สำหรับหน้าจอใหญ่ (ซ้าย-ขวา) */}
      <div className="hidden xl:block xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:w-3/5 2xl:w-3/5 xl:max-w-4xl 2xl:h-[600px]">
        <Image
          src="/ourstory.png"
          alt="our story"
          width={800}
          height={960}
          className="w-full h-full object-contain object-right"
        />
      </div>
    </section>
  );
}