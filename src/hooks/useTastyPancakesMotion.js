import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

function useTastyPancakesMotion() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // حركة الصورة الرئيسية
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [80, 0, -40]
  );

  // دخول الكرت من اليمين
  const cardX = useTransform(
    scrollYProgress,
    [0, 0.25],
    [120, 0]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  // حركة Badge من الأعلى
  const badgeY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [-80, 0]
  );

  const badgeOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  // حركة خفيفة للخلفية
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  return {
    sectionRef,
    imageY,
    cardX,
    cardOpacity,
    badgeY,
    badgeOpacity,
    backgroundY,
  };
}

export default useTastyPancakesMotion;