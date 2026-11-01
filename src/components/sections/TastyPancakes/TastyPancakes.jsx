import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import useTastyPancakesMotion from "../../../hooks/useTastyPancakesMotion";
import tastyPancakesImages from "../../../data/tastyPancakes";


function TastyPancakes() {
  const {
    sectionRef,
    imageY,
    cardX,
    cardOpacity,
    badgeY,
    badgeOpacity,
    backgroundY,
  } = useTastyPancakesMotion();

  const [activeImage, setActiveImage] = useState(1);

  return (
    <motion.section
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden bg-[#e9e0d3] py-16 md:py-20 lg:min-h-[760px] lg:py-0"
    >
      {/* ==================== BACKGROUND ==================== */}

      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Wood */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(80,57,38,0.08) 0px,
                rgba(80,57,38,0.08) 2px,
                transparent 2px,
                transparent 88px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(255,255,255,0.18) 0px,
                rgba(255,255,255,0.18) 3px,
                transparent 3px,
                transparent 130px
              ),
              linear-gradient(
                135deg,
                #eee7dc 0%,
                #e1d6c7 45%,
                #f1ebe2 100%
              )
            `,
          }}
        />

        {/* Flour */}
        <div className="absolute -right-28 top-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(238,231,220,0.9)_60%,rgba(208,195,179,0.45))] opacity-80 sm:h-[360px] sm:w-[360px] md:h-[430px] md:w-[430px]" />

        {/* Wheat */}
        <div className="absolute right-0 top-0 hidden h-[330px] w-[150px] rotate-[17deg] opacity-50 sm:block md:right-[3%] md:top-[5%] md:h-[380px] md:w-[180px]">
          <span className="absolute bottom-0 left-1/2 h-[280px] w-[4px] -rotate-[22deg] rounded-full bg-[#ad8958] md:h-[330px]" />
          <span className="absolute bottom-0 left-1/2 h-[280px] w-[4px] -rotate-[11deg] rounded-full bg-[#ad8958] md:h-[330px]" />
          <span className="absolute bottom-0 left-1/2 h-[280px] w-[4px] rounded-full bg-[#ad8958] md:h-[330px]" />
          <span className="absolute bottom-0 left-1/2 h-[280px] w-[4px] rotate-[11deg] rounded-full bg-[#ad8958] md:h-[330px]" />
          <span className="absolute bottom-0 left-1/2 h-[280px] w-[4px] rotate-[22deg] rounded-full bg-[#ad8958] md:h-[330px]" />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(75,52,32,0.08)_100%)]" />
      </motion.div>

      {/* ==================== CONTENT ==================== */}

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center lg:relative lg:min-h-[760px] lg:block">
          {/* ==================== PANCAKES IMAGE ==================== */}

          <motion.div
            style={{ y: imageY }}
            className="relative z-10 w-full max-w-[620px] lg:absolute lg:left-[2%] lg:top-1/2 lg:w-[48%] lg:max-w-[580px] lg:-translate-y-1/2"
          >
            <div className="group relative aspect-[1/0.82] overflow-hidden bg-[#ddd] shadow-[0_25px_60px_rgba(55,38,25,0.18)] sm:aspect-[1/0.85] lg:aspect-[1/0.94] lg:shadow-[0_30px_70px_rgba(55,38,25,0.20),0_8px_20px_rgba(55,38,25,0.12)]">
              <img
                src={tastyPancakesImages[activeImage].src}
                alt={tastyPancakesImages[activeImage].alt}
                className="h-full w-full scale-[1.04] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Shine */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>
          </motion.div>

          {/* ==================== MAIN CARD ==================== */}

          <motion.article
            style={{
              x: cardX,
              opacity: cardOpacity,
            }}
            className="relative z-20 -mt-8 w-[94%] max-w-[560px] sm:-mt-10 sm:w-[90%] md:-mt-12 md:w-[86%] lg:absolute lg:right-[8%] lg:top-1/2 lg:mt-0 lg:w-[43%] lg:-translate-y-1/2"
          >
            <div className="relative min-h-0 border border-[#705236]/10 bg-gradient-to-br from-white/[0.98] to-[#faf7f1]/[0.98] px-5 py-10 shadow-[0_25px_60px_rgba(57,42,30,0.16)] sm:px-8 sm:py-12 md:px-12 md:py-14 lg:min-h-[470px] lg:px-16 lg:py-16 lg:shadow-[0_30px_80px_rgba(57,42,30,0.18),0_5px_20px_rgba(57,42,30,0.08)]">
              {/* Inner border */}
              <div className="pointer-events-none absolute inset-2 border border-[var(--accent)]/10 sm:inset-3" />

              <div className="relative z-10">
                {/* Eyebrow */}
                <p className="font-[Amiri] text-sm tracking-[0.12em] text-[var(--accent)] sm:text-[15px]">
                  المفضلة لدينا
                </p>

                {/* Title */}
                <h2 className="mt-2 font-[Amiri] text-4xl font-bold leading-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                  فطائر شهية
                </h2>

                {/* Divider */}
                <div className="my-5 flex items-center gap-2.5 sm:my-6">
                  <span className="h-px flex-1 bg-[var(--accent)]/30" />
                  <span className="text-sm text-[var(--accent)]">✦</span>
                  <span className="h-px flex-1 bg-[var(--accent)]/30" />
                </div>

                {/* Description */}
                <p className="font-[Amiri] text-[15px] leading-[1.9] text-[var(--text-secondary)] sm:text-[17px] sm:leading-[2]">
                  طبقات من الفطائر الذهبية الطرية، تُحضّر بعناية وتُقدّم مع أجمل
                  النكهات والتوت الطازج والصوص الذي يكمّل كل لقمة.
                </p>

                {/* Details */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-[Amiri] text-sm text-[var(--accent)] lg:justify-start">
                  <span>طازجة</span>
                  <span>•</span>
                  <span>محضّرة بحب</span>
                  <span>•</span>
                  <span>يوميًا</span>
                </div>

                {/* ==================== THUMBNAILS ==================== */}

                <div className="mt-7 flex items-center justify-center gap-2 sm:mt-9 sm:gap-3.5">
                  {/* Previous */}
                  <button
                    type="button"
                    aria-label="الصورة السابقة"
                    onClick={() =>
                      setActiveImage(
                        (activeImage - 1 + tastyPancakesImages.length) %
                          tastyPancakesImages.length,
                      )
                    }
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/35 text-[var(--accent)] transition-all duration-300 hover:scale-110 hover:bg-[var(--accent)] hover:text-white"
                  >
                    <ChevronRight size={16} />
                  </button>

                  {tastyPancakesImages.map((image) => (
                    <button
                      key={image.id}
                      type="button"
                      aria-label={`عرض ${image.alt}`}
                      onClick={() => setActiveImage(image.id)}
                      className={`h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 shadow-[0_4px_15px_rgba(50,35,25,0.16)] transition-transform duration-300 hover:scale-110 sm:h-[68px] sm:w-[68px] lg:h-[72px] lg:w-[72px] ${
                        activeImage === image.id
                          ? "scale-105 border-[var(--accent)]"
                          : "border-white"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                  {/* Next */}
                  <button
                    type="button"
                    aria-label="الصورة التالية"
                    onClick={() =>
                      setActiveImage(
                        (activeImage + 1) % tastyPancakesImages.length,
                      )
                    }
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/35 text-[var(--accent)] transition-all duration-300 hover:scale-110 hover:bg-[var(--accent)] hover:text-white"
                  >
                    <ChevronLeft size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ==================== READY BADGE ==================== */}

          <motion.div
            style={{
              y: badgeY,
              opacity: badgeOpacity,
            }}
            className="relative z-30 -mb-5 ml-auto mr-[5%] mt-[-55px] sm:mr-[8%] md:mr-[12%] lg:absolute lg:right-[18%] lg:top-[7%] lg:mr-0 lg:mt-0"
          >
            <div className="flex h-[120px] w-[100px] flex-col items-center justify-center border border-[var(--accent)]/10 bg-white/[0.96] text-[var(--text-primary)] shadow-[0_15px_35px_rgba(50,35,25,0.13)] sm:h-[140px] sm:w-[110px] lg:h-[165px] lg:w-[135px]">
              <Clock
                size={15}
                strokeWidth={1.5}
                className="mb-1 text-[var(--accent)] lg:h-[17px] lg:w-[17px]"
              />

              <span className="font-[Amiri] text-[11px] text-[var(--text-secondary)] sm:text-xs lg:text-[13px]">
                جاهز خلال
              </span>

              <strong className="font-[Amiri] text-4xl font-normal leading-none text-[var(--accent)] sm:text-5xl lg:text-[55px]">
                40
              </strong>

              <span className="font-[Amiri] text-[10px] text-[var(--text-secondary)] sm:text-xs">
                دقيقة
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ==================== FLOUR BOWL ==================== */}

      <div className="pointer-events-none absolute -bottom-12 -right-16 z-[1] h-24 w-48 rounded-[50%] bg-[radial-gradient(ellipse_at_center,#fffdf8_0%,#f0ebe1_60%,#d4c9bb_100%)] opacity-80 shadow-[inset_0_-15px_25px_rgba(90,65,45,0.12)] sm:h-[100px] sm:w-[220px] md:-bottom-20 md:-right-10 md:h-[120px] md:w-[260px]">
        <div className="absolute left-1/2 top-2 h-14 w-32 -translate-x-1/2 rounded-[50%] bg-[#f9f7f2] shadow-[inset_0_5px_15px_rgba(100,80,60,0.08)] sm:h-16 sm:w-40 md:top-3 md:h-[75px] md:w-[180px]" />
      </div>
    </motion.section>
  );
}

export default TastyPancakes;
