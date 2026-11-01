import useArtOfCakesMotion from "../../../hooks/useArtOfCakesMotion";
import { motion } from "framer-motion";
import artOfCakesImages from "../../../data/artOfCakes";

function ArtOfCakes() {
  const {
    sectionRef,
    galleryY,
    image1Left,
    image1Top,
    image2Left,
    image2Top,
    image3Left,
    image3Top,
    image4Left,
    image4Top,
    image1Scale,
    image2Scale,
    image3Scale,
    image4Scale,
    image1Z,
    image2Z,
    image3Z,
    image4Z,
  } = useArtOfCakesMotion();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Top Ornament */}
      <div className="absolute left-1/2 top-8 z-100 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="z-50 h-7 w-7 rounded-full border-3 border-dashed border-[var(--accent)]/50" />
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-14 py-20 md:py-24 lg:grid-cols-2 lg:gap-20 lg:py-28">
          {/* =================================
              Gallery - LEFT
          ================================= */}

          <motion.div
            style={{ y: galleryY }}
            className="order-1 relative mx-auto w-full max-w-[620px] lg:justify-self-start"
          >
            {/* Orbit Container */}
            <div className="relative aspect-[4/3] w-full">
              {/* Image 1 */}
              <motion.div
                style={{
                  left: image1Left,
                  top: image1Top,
                  scale: image1Scale,
                  zIndex: image1Z,
                }}
                className="absolute w-[38%] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="group aspect-[4/3] overflow-hidden border border-[var(--text-primary)]/20 bg-[var(--bg-secondary)]">
                  <img
                    src={artOfCakesImages[0].src}
                    alt={artOfCakesImages[0].alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                style={{
                  left: image2Left,
                  top: image2Top,
                  scale: image2Scale,
                  zIndex: image2Z,
                }}
                className="absolute w-[38%] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="group aspect-[4/3] overflow-hidden border border-[var(--text-primary)]/20 bg-[var(--bg-secondary)]">
                  <img
                    src={artOfCakesImages[1].src}
                    alt={artOfCakesImages[1].alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Image 3 */}
              <motion.div
                style={{
                  left: image3Left,
                  top: image3Top,
                  scale: image3Scale,
                  zIndex: image3Z,
                }}
                className="absolute w-[38%] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="group aspect-[4/3] overflow-hidden border border-[var(--text-primary)]/20 bg-[var(--bg-secondary)]">
                  <img
                    src={artOfCakesImages[2].src}
                    alt={artOfCakesImages[2].alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Image 4 */}
              <motion.div
                style={{
                  left: image4Left,
                  top: image4Top,
                  scale: image4Scale,
                  zIndex: image4Z,
                }}
                className="absolute w-[38%] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="group aspect-[4/3] overflow-hidden border border-[var(--text-primary)]/20 bg-[var(--bg-secondary)]">
                  <img
                    src={artOfCakesImages[3].src}
                    alt={artOfCakesImages[3].alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Center Badge */}
              <div className="absolute left-1/2 top-1/2 z-50 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--bg-primary)] text-center shadow-xl md:h-32 md:w-32">
                <div>
                  <span className="block text-sm font-semibold text-[var(--accent)]">
                    لذيذ
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-[var(--accent)]">
                    جدًا!
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================
              Content - RIGHT
          ================================= */}

          <div
            dir="rtl"
            className="order-2 flex flex-col items-center text-center"
          >
            <p className="text-sm font-medium tracking-[0.25em] text-[var(--accent)]">
              فن المخبوزات
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
              نصنع ذكريات لذيذة
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              نؤمن أن المخبوزات ليست مجرد طعام، بل تفاصيل صغيرة تصنع لحظات جميلة
              وذكريات لا تُنسى.
            </p>

            <div className="mt-10 flex w-full flex-col items-center">
              <p className="text-lg font-semibold text-[var(--text-primary)]">
                صُنّاع الطعم
              </p>

              <div className="mt-6 flex w-full max-w-[430px] items-center justify-center gap-5">
                {/* Beneto */}
                <div className="flex flex-1 flex-col items-center gap-3">
                  <span className="h-px w-20 bg-[var(--accent)]/40" />

                  <span className="font-serif text-base text-[var(--text-secondary)]">
                    بنّيتو
                  </span>

                  <span className="h-px w-20 bg-[var(--accent)]/40" />
                </div>

                {/* Chef Image */}
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[var(--accent)]/40 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&q=85"
                    alt="الشيف"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* Gaspare */}
                <div className="flex flex-1 flex-col items-center gap-3">
                  <span className="h-px w-20 bg-[var(--accent)]/40" />

                  <span className="font-serif text-base text-[var(--text-secondary)]">
                    غاسبار
                  </span>

                  <span className="h-px w-20 bg-[var(--accent)]/40" />
                </div>
              </div>

              {/* Signature */}
              <div className="mt-9 flex flex-col items-center">
                <p className="font-serif text-3xl italic text-[var(--accent)]">
                  نصنعها بحب
                </p>

                <span className="mt-2 text-xs tracking-[0.18em] text-[var(--accent)]/70">
                  منذ البداية وحتى آخر لقمة
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtOfCakes;
