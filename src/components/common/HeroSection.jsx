import { motion } from "framer-motion";
import Button from "../ui/Button";
import useHeroMotion from "../../hooks/useHeroMotion";

function HeroSection() {
  const {
    heroRef,
    imageY,
    contentMouseY,
    titleX,
    textX,
    buttonX,
    titleOpacity,
    textOpacity,
    buttonOpacity,
    handleMouseMove,
    handleMouseLeave,
  } = useHeroMotion();

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      
    >
      <div className="relative h-[calc(100svh-80px)] w-full overflow-hidden">
        {/* =========================
            Hero Image
        ========================= */}

        <div className="h-full w-full overflow-hidden">
          <motion.img
            style={{
              y: imageY,
            }}
            initial={{
              scale: 4.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.55, 1, 0.76, 1],
            }}
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dbjckxjul/image/upload/f_auto/q_auto/esusjmydjsef0imduxh7"
            alt="خبز طازج"
          />

          {/* Overlay ثابت */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
            }}
            className="absolute inset-0 bg-black/35"
          />
        </div>

        {/* =========================
            Hero Content
        ========================= */}

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center text-white overflow-hidden">
          {/* =========================
              Title
          ========================= */}

          <motion.h1
            style={{
              x: titleX,
              y: contentMouseY,
              opacity: titleOpacity,
            }}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl md:text-6xl font-bold"
          >
            خبزٌ يُخبز بحب
          </motion.h1>

          {/* =========================
              Description
          ========================= */}

          <motion.p
            style={{
              x: textX,
              y: contentMouseY,
              opacity: textOpacity,
            }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-base md:text-lg"
          >
            نخبز لك كل يوم أطيب المخبوزات الطازجة بمكونات مختارة بعناية.
          </motion.p>

          {/* =========================
              Button
          ========================= */}

          <motion.div
            style={{
              x: buttonX,
              y: contentMouseY,
              opacity: buttonOpacity,
            }}
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button to="/menu" className="mt-2">
              تصفّح المنيو
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;