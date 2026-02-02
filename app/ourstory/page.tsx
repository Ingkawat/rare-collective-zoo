import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative py-12 md:py-16 lg:py-36 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-0 md:gap-8 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-4 md:space-y-6 px-6 md:px-12 lg:px-6 text-[#FFFFFF]">
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

      {/* Snake Image - Outside max-w container */}
      <div className="w-full -mt-20 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-3/5 lg:w-3/5 md:max-w-4xl md:h-[480px] lg:h-[640px] xl:h-[800px] 2xl:h-[960px]">
        <Image
          src="/snake.png"
          alt="snake"
          width={800}
          height={400}
          className="w-full h-full object-contain object-right"
        />
      </div>
    </section>
  );
}
