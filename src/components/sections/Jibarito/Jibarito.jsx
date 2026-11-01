import { motion } from "framer-motion";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import Button from "../../ui/Button";
import useJibaritoMotion from "../../../hooks/useJibaritoMotion";
import jibaritoData from "../../../data/jibarito";

const sandwichImage = jibaritoData.sandwichImage.src;
const sandwichImageAlt = jibaritoData.sandwichImage.alt;

function Jibarito() {
  const {
    sectionRef,

    introY,
    introOpacity,

    sandwichScale,
    sandwichX,
    sandwichY,
    sandwichRotate,
    sandwichRotateY,
    sandwichOpacity,

    floatY,
    floatRotate,

    cardX,
    cardOpacity,
    cardScale,

    biteOneX,
    biteOneY,
    biteOneRotate,
    biteOneScale,
    biteOneOpacity,

    biteTwoX,
    biteTwoY,
    biteTwoRotate,
    biteTwoScale,
    biteTwoOpacity,

    biteThreeX,
    biteThreeY,
    biteThreeRotate,
    biteThreeScale,
    biteThreeOpacity,

    crumbsX,
    crumbsY,
    crumbsRotate,

    orbitRightRotate,
    orbitLeftRotate,

    scrollMessageOpacity,

    finalOpacity,
    finalY,
  } = useJibaritoMotion();

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[160vh] overflow-hidden bg-[var(--bg-primary)] md:min-h-[250vh]"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-[140px]" />

        <div className="absolute -right-40 top-[55%] h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[120px]" />

        <div className="absolute -left-40 top-[75%] h-[500px] w-[500px] rounded-full bg-[var(--accent-hover)]/10 blur-[120px]" />
      </div>

      {/* Intro */}
      <motion.div
        style={{
          y: introY,
          opacity: introOpacity,
        }}
        className="container-custom relative z-20 pt-28 text-center md:pt-40"
      >
        <div className="mx-auto flex w-fit items-center gap-3 text-[var(--accent)]">
          <Sparkles size={16} />

          <span className="text-xs font-semibold tracking-[0.4em]">
            {jibaritoData.content.badge}
          </span>

          <Sparkles size={16} />
        </div>

        <h2 className="mt-6 text-4xl font-bold text-[var(--text-primary)] md:text-7xl">
          {jibaritoData.content.title}
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
          {jibaritoData.content.intro}
          <br />
          {jibaritoData.content.introHighlight}
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="container-custom relative z-20 mt-24 md:mt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Content Card */}
          <motion.div
            style={{
              x: cardX,
              opacity: cardOpacity,
              scale: cardScale,
            }}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden border border-[var(--accent)]/20 bg-[var(--bg-secondary)]/90 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="absolute right-0 top-0 h-full w-[3px] bg-[var(--accent)]" />

              <p className="text-xs tracking-[0.35em] text-[var(--accent)]">
                {jibaritoData.content.cardLabel}
              </p>

              <h3 className="mt-6 text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
                {jibaritoData.content.cardTitle.lineOne}
                <br />
                {jibaritoData.content.cardTitle.lineTwo}
              </h3>

              <p className="mt-7 leading-8 text-[var(--text-secondary)]">
                {jibaritoData.content.cardDescription}
              </p>

              <div className="mt-8 space-y-4">
                {jibaritoData.features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-[var(--text-primary)]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Check size={14} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-end justify-between gap-6">
                <div>
                  <span className="text-xs text-[var(--text-secondary)]">
                    السعر
                  </span>

                  <p className="mt-1 text-3xl font-bold text-[var(--accent)]">
                    ${jibaritoData.price.toFixed(2)}
                  </p>
                </div>

                <Button size="lg" to="/menu">
                  {jibaritoData.content.orderButton}
                  <ArrowLeft size={18} className="mr-2 inline-block" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Sandwich */}
          <div className="order-1 flex min-h-[620px] items-center justify-center lg:order-2">
            <motion.div
              style={{
                x: sandwichX,
                y: sandwichY,
                scale: sandwichScale,
                rotate: sandwichRotate,
                rotateY: sandwichRotateY,
                opacity: sandwichOpacity,
              }}
              className="relative h-[390px] w-[390px] md:h-[570px] md:w-[570px]"
            >
              {/* Glow */}
              <motion.div
                style={{
                  scale: sandwichScale,
                }}
                className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/20 blur-[90px]"
              />

              {/* Shadow */}
              <motion.div
                style={{
                  scaleX: sandwichScale,
                }}
                className="absolute bottom-[12%] left-1/2 h-12 w-[65%] -translate-x-1/2 rounded-full bg-black/70 blur-2xl"
              />

              {/* Main Sandwich */}
              <motion.div
                style={{
                  y: floatY,
                  rotate: floatRotate,
                }}
                className="absolute inset-0"
              >
                <img
                  src={sandwichImage}
                  alt={sandwichImageAlt}
                  className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.55)]"
                />
              </motion.div>

              {/* Bite One */}
              <motion.img
                style={{
                  x: biteOneX,
                  y: biteOneY,
                  rotate: biteOneRotate,
                  scale: biteOneScale,
                  opacity: biteOneOpacity,
                }}
                src={sandwichImage}
                alt=""
                className="pointer-events-none absolute left-[54%] top-[37%] z-40 w-32 object-contain"
              />

              {/* Bite Two */}
              <motion.img
                style={{
                  x: biteTwoX,
                  y: biteTwoY,
                  rotate: biteTwoRotate,
                  scale: biteTwoScale,
                  opacity: biteTwoOpacity,
                }}
                src={sandwichImage}
                alt=""
                className="pointer-events-none absolute left-[45%] top-[35%] z-40 w-32 object-contain"
              />

              {/* Bite Three */}
              <motion.img
                style={{
                  x: biteThreeX,
                  y: biteThreeY,
                  rotate: biteThreeRotate,
                  scale: biteThreeScale,
                  opacity: biteThreeOpacity,
                }}
                src={sandwichImage}
                alt=""
                className="pointer-events-none absolute left-[53%] top-[39%] z-40 w-32 object-contain"
              />

              {/* Crumbs */}
              <motion.div
                style={{
                  x: crumbsX,
                  y: crumbsY,
                  rotate: crumbsRotate,
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-50"
              >
                <span className="absolute h-2 w-2 rounded-full bg-[var(--accent)]" />

                <span className="absolute left-10 top-8 h-1.5 w-1.5 rounded-full bg-[var(--accent-hover)]" />

                <span className="absolute left-[-25px] top-12 h-2 w-2 rounded-full bg-[var(--accent)]" />

                <span className="absolute left-16 top-[-20px] h-1 w-1 rounded-full bg-[var(--accent)]" />

                <span className="absolute left-[-45px] top-[-15px] h-1.5 w-1.5 rounded-full bg-[var(--accent-hover)]" />
              </motion.div>

              {/* Right Orbit */}
              <motion.div
                style={{
                  rotate: orbitRightRotate,
                }}
                className="absolute -right-8 top-8 h-28 w-28 rounded-full border border-[var(--accent)]/25 md:-right-16 md:h-40 md:w-40"
              />

              {/* Left Orbit */}
              <motion.div
                style={{
                  rotate: orbitLeftRotate,
                }}
                className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full border border-[var(--accent)]/20 md:-bottom-12 md:-left-12 md:h-32 md:w-32"
              />
            </motion.div>
          </div>
        </div>
        {/* Final Stage */}
        <motion.div
          style={{
            opacity: finalOpacity,
            y: finalY,
          }}
          className="container-custom relative z-[100]  pb-24 text-center max-sm:mt-8 md:mt-15"
        >
          <p className="text-xs tracking-[0.45em] text-[var(--accent)]">
            {jibaritoData.content.finalLabel}
          </p>

          <h3 className="mt-5 text-5xl font-bold text-[var(--text-primary)] md:text-8xl">
            {jibaritoData.content.finalTitle}
          </h3>

          <p className="mx-auto mt-5 max-w-md leading-8 text-[var(--text-secondary)]">
            {jibaritoData.content.finalDescription.lineOne}
            <br />
            {jibaritoData.content.finalDescription.lineTwo}
          </p>

          <div className="mt-4  flex justify-center">
            <Button size="lg" to="/menu">
              {jibaritoData.content.orderButton}
              <ArrowLeft size={18} className="mr-2 inline-block" />
            </Button>
          </div>

          {/* Decorative Footer */}
          <div className="mt-20 flex items-center justify-center gap-4">
            <span className="h-px w-24 bg-[var(--accent)]/30" />

            <Sparkles size={18} className="text-[var(--accent)]" />

            <span className="h-px w-24 bg-[var(--accent)]/30" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Message */}
      <motion.div
        style={{
          opacity: scrollMessageOpacity,
        }}
        className="pointer-events-none absolute bottom-16 left-1/2 z-30 -translate-x-1/2 text-center"
      >
        <p className="text-xs tracking-[0.3em] text-[var(--text-secondary)]">
          {jibaritoData.content.scrollMessage}
        </p>

        <div className="mx-auto mt-4 h-12 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
      </motion.div>
    </section>
  );
}

export default Jibarito;
