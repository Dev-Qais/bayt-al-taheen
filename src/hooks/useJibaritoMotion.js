import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

function useJibaritoMotion() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 18,
    mass: 0.35,
  });

  // =========================
  // INTRO
  // =========================

  const introY = useTransform(
    smoothProgress,
    [0, 0.2],
    [80, 0]
  );

  const introOpacity = useTransform(
    smoothProgress,
    [0, 0.15],
    [0, 1]
  );

  // =========================
  // CINEMATIC CAMERA
  // =========================

  const sandwichScale = useTransform(
    smoothProgress,
    [0.12, 0.28, 0.43, 0.58, 0.75, 0.92],
    [0.55, 0.9, 1.15, 1.3, 1.12, 0.7]
  );

  const sandwichX = useTransform(
    smoothProgress,
    [0.12, 0.35, 0.6, 0.82, 0.95],
    [180, 0, -20, 50, 0]
  );

  const sandwichY = useTransform(
    smoothProgress,
    [0.1, 0.3, 0.55, 0.8, 1],
    [120, 0, -35, -70, -130]
  );

  const sandwichRotate = useTransform(
    smoothProgress,
    [0.1, 0.28, 0.48, 0.65, 0.82, 1],
    [-18, 0, 7, -5, 8, 0]
  );

  const sandwichRotateY = useTransform(
    smoothProgress,
    [0.1, 0.35, 0.55, 0.75, 0.95],
    [25, 0, -15, 18, 0]
  );

  const sandwichOpacity = useTransform(
    smoothProgress,
    [0.08, 0.18, 0.78, 0.94],
    [0, 1, 1, 0]
  );

  // =========================
  // FLOATING EFFECT
  // =========================

  const floatY = useTransform(
    smoothProgress,
    [0.18, 0.28, 0.38],
    [0, -18, 0]
  );

  const floatRotate = useTransform(
    smoothProgress,
    [0.18, 0.28, 0.38],
    [0, 2, 0]
  );

  // =========================
  // TEXT CARD
  // =========================

  const cardX = useTransform(
    smoothProgress,
    [0.08, 0.27],
    [-180, 0]
  );

  const cardOpacity = useTransform(
    smoothProgress,
    [0.08, 0.2],
    [0, 1]
  );

  const cardScale = useTransform(
    smoothProgress,
    [0.08, 0.25],
    [0.85, 1]
  );

  // =========================
  // BITE 01
  // =========================

  const biteOneX = useTransform(
    smoothProgress,
    [0.38, 0.44, 0.5],
    [0, 70, 230]
  );

  const biteOneY = useTransform(
    smoothProgress,
    [0.38, 0.44, 0.5],
    [0, -25, -10]
  );

  const biteOneRotate = useTransform(
    smoothProgress,
    [0.38, 0.44, 0.5],
    [0, -8, 20]
  );

  const biteOneScale = useTransform(
    smoothProgress,
    [0.38, 0.44, 0.5],
    [0.55, 0.4, 0.03]
  );

  const biteOneOpacity = useTransform(
    smoothProgress,
    [0.38, 0.43, 0.5],
    [0, 1, 0]
  );

  // =========================
  // BITE 02
  // =========================

  const biteTwoX = useTransform(
    smoothProgress,
    [0.52, 0.58, 0.64],
    [0, -75, -240]
  );

  const biteTwoY = useTransform(
    smoothProgress,
    [0.52, 0.58, 0.64],
    [0, -35, -15]
  );

  const biteTwoRotate = useTransform(
    smoothProgress,
    [0.52, 0.58, 0.64],
    [0, 9, -18]
  );

  const biteTwoScale = useTransform(
    smoothProgress,
    [0.52, 0.58, 0.64],
    [0.5, 0.38, 0.02]
  );

  const biteTwoOpacity = useTransform(
    smoothProgress,
    [0.52, 0.57, 0.64],
    [0, 1, 0]
  );

  // =========================
  // BITE 03
  // =========================

  const biteThreeX = useTransform(
    smoothProgress,
    [0.66, 0.72, 0.78],
    [0, 90, 250]
  );

  const biteThreeY = useTransform(
    smoothProgress,
    [0.66, 0.72, 0.78],
    [0, -30, -5]
  );

  const biteThreeRotate = useTransform(
    smoothProgress,
    [0.66, 0.72, 0.78],
    [0, -12, 25]
  );

  const biteThreeScale = useTransform(
    smoothProgress,
    [0.66, 0.72, 0.78],
    [0.45, 0.3, 0.01]
  );

  const biteThreeOpacity = useTransform(
    smoothProgress,
    [0.66, 0.71, 0.78],
    [0, 1, 0]
  );

  // =========================
  // CRUMBS
  // =========================

  const crumbsX = useTransform(
    smoothProgress,
    [0.36, 0.5, 0.64, 0.78],
    [0, 40, -30, 80]
  );

  const crumbsY = useTransform(
    smoothProgress,
    [0.36, 0.5, 0.64, 0.78],
    [0, -30, -60, -100]
  );

  const crumbsRotate = useTransform(
    smoothProgress,
    [0.36, 0.78],
    [0, 180]
  );

// =========================
// FINAL
// =========================

const finalOpacity = useTransform(
  smoothProgress,
  [0.6, 0.72],
  [0, 1]
);

const finalY = useTransform(
  smoothProgress,
  [0.6, 0.72],
  [80, 0]
);

// =========================
// ORBITS
// =========================

const orbitRightRotate = useTransform(
  smoothProgress,
  [0, 1],
  [0, 360]
);

const orbitLeftRotate = useTransform(
  smoothProgress,
  [0, 1],
  [360, 0]
);

// =========================
// SCROLL MESSAGE
// =========================

const scrollMessageOpacity = useTransform(
  smoothProgress,
  [0.02, 0.12],
  [1, 0]
);



  return {
    sectionRef,
    smoothProgress,

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

    finalOpacity,
    finalY,

    orbitRightRotate,
    orbitLeftRotate,
    scrollMessageOpacity
  };
}

export default useJibaritoMotion;