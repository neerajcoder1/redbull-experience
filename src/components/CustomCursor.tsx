"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "click" | "hidden">("default");
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseDown = () => setCursorType("click");
    const handleMouseUp = () => setCursorType("hover");
    const handleMouseLeave = () => setCursorType("hidden");
    const handleMouseEnter = () => setCursorType("default");

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (cursorType === "hidden") return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff1e27] md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: cursorType === "hover" ? 1.6 : cursorType === "click" ? 0.8 : 1,
          backgroundColor: cursorType === "hover" ? "rgba(255, 30, 39, 0.15)" : "rgba(255, 30, 39, 0)",
          borderColor: cursorType === "hover" ? "#ffd700" : "#ff1e27",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd700] md:block shadow-[0_0_10px_#ffd700]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: cursorType === "hover" ? 0.6 : cursorType === "click" ? 1.4 : 1,
          backgroundColor: cursorType === "hover" ? "#ff1e27" : "#ffd700",
        }}
      />
    </>
  );
}
