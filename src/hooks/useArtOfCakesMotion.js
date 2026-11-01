import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

function useArtOfCakesMotion() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // حركة Gallery نفسها عند دخول القسم
  const galleryY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [120, 0]
  );

  // زاوية المدار المشتركة بين الصور الأربع
  const angle = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0, Math.PI * 2, Math.PI * 2]
  );

  /*
    كل صورة تبدأ من أحد أركان الـGallery
    ثم تدور حول المركز.
  */

  // Image 1
  const image1Left = useTransform(
    angle,
    (value) =>
      `${50 + Math.cos(value + Math.PI / 4) * 36}%`
  );

  const image1Top = useTransform(
    angle,
    (value) =>
      `${50 + Math.sin(value + Math.PI / 4) * 36}%`
  );

  // Image 2
  const image2Left = useTransform(
    angle,
    (value) =>
      `${50 + Math.cos(value + (3 * Math.PI) / 4) * 36}%`
  );

  const image2Top = useTransform(
    angle,
    (value) =>
      `${50 + Math.sin(value + (3 * Math.PI) / 4) * 36}%`
  );

  // Image 3
  const image3Left = useTransform(
    angle,
    (value) =>
      `${50 + Math.cos(value + (5 * Math.PI) / 4) * 36}%`
  );

  const image3Top = useTransform(
    angle,
    (value) =>
      `${50 + Math.sin(value + (5 * Math.PI) / 4) * 36}%`
  );

  // Image 4
  const image4Left = useTransform(
    angle,
    (value) =>
      `${50 + Math.cos(value + (7 * Math.PI) / 4) * 36}%`
  );

  const image4Top = useTransform(
    angle,
    (value) =>
      `${50 + Math.sin(value + (7 * Math.PI) / 4) * 36}%`
  );

// Image 1 Scale
const image1Scale = useTransform(
  angle,
  (value) => 0.92 + Math.cos(value - (3 * Math.PI) / 4) * 0.18
);

// Image 2 Scale
const image2Scale = useTransform(
  angle,
  (value) => 0.92 + Math.cos(value - Math.PI / 4) * 0.18
);

// Image 3 Scale
const image3Scale = useTransform(
  angle,
  (value) => 0.92 + Math.cos(value + Math.PI / 4) * 0.18
);

// Image 4 Scale
const image4Scale = useTransform(
  angle,
  (value) => 0.92 + Math.cos(value + (3 * Math.PI) / 4) * 0.18
);

const image1Z = useTransform(
  angle,
  (value) => Math.round(10 + Math.cos(value - (3 * Math.PI) / 4) * 5)
);

const image2Z = useTransform(
  angle,
  (value) => Math.round(10 + Math.cos(value - Math.PI / 4) * 5)
);

const image3Z = useTransform(
  angle,
  (value) => Math.round(10 + Math.cos(value + Math.PI / 4) * 5)
);

const image4Z = useTransform(
  angle,
  (value) => Math.round(10 + Math.cos(value + (3 * Math.PI) / 4) * 5)
);

  return {
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
  };
}

export default useArtOfCakesMotion;