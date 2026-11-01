import {
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useRef } from "react";

function useHeroMotion() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0%", "15%"]
  );

  const contentMouseX = useTransform(
    smoothMouseX,
    [-1, 1],
    [20, -20]
  );

  const contentMouseY = useTransform(
    smoothMouseY,
    [-1, 1],
    [4, -4]
  );

  const titleScrollX = useTransform(
    scrollYProgress,
    [0, 0.45],
    [0, -700]
  );

  const textScrollX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, -500]
  );

  const buttonScrollX = useTransform(
    scrollYProgress,
    [0, 0.55],
    [0, -300]
  );

  const titleX = useTransform(
    [titleScrollX, contentMouseX],
    ([scroll, mouse]) => scroll + mouse
  );

  const textX = useTransform(
    [textScrollX, contentMouseX],
    ([scroll, mouse]) => scroll + mouse
  );

  const buttonX = useTransform(
    [buttonScrollX, contentMouseX],
    ([scroll, mouse]) => scroll + mouse
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 0]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.45],
    [1, 0]
  );

  const buttonOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [1, 0]
  );

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return {
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
  };
}

export default useHeroMotion;