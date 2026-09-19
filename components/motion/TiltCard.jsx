import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const spring = { stiffness: 220, damping: 22, mass: 0.6 };

export default function TiltCard({ children, className = "", max = 12, lift = 24, glare = true }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const glareX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 60%)`;

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => {
    px.set(0);
    py.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", ...spring }}
      className={`relative ${className}`}
    >
      <div style={{ transform: `translateZ(${lift}px)`, transformStyle: "preserve-3d" }}>
        {children}
      </div>
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBackground, transform: `translateZ(${lift + 1}px)` }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
