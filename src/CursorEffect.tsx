import React, { useEffect, useRef } from "react";

const CursorEffect: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  // Trailing dot animation
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let animationFrame: number;

    const moveDot = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveDot);
    animationFrame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", moveDot);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Ripple effect on click
  useEffect(() => {
    const showRipple = (e: MouseEvent) => {
      if (rippleRef.current) {
        const ripple = rippleRef.current;
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        ripple.classList.remove("active");
        // Force reflow to restart animation
        void ripple.offsetWidth;
        ripple.classList.add("active");
      }
    };
    window.addEventListener("click", showRipple);
    return () => window.removeEventListener("click", showRipple);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
      />
      <div
        ref={rippleRef}
        className="cursor-ripple"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "40px",
          height: "40px",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%) scale(0)",
          zIndex: 9998,
          transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s",
          opacity: 0,
        }}
      />
    </>
  );
};

export default CursorEffect; 