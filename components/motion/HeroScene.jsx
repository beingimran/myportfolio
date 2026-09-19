import { motion } from "framer-motion";

const faces = [
  "translateZ(80px)",
  "rotateY(180deg) translateZ(80px)",
  "rotateY(90deg) translateZ(80px)",
  "rotateY(-90deg) translateZ(80px)",
  "rotateX(90deg) translateZ(80px)",
  "rotateX(-90deg) translateZ(80px)",
];

export default function HeroScene({ rotateX, rotateY, className = "" }) {
  return (
    <div aria-hidden className={`scene relative w-full ${className}`}>
      <motion.div
        style={{ rotateX, rotateY, x: "-50%", y: "-50%", transformStyle: "preserve-3d" }}
        className="absolute left-1/2 top-1/2 h-[160px] w-[160px]"
      >
        <div className="animate-float absolute inset-0 preserve-3d">
          <div className="animate-spin-3d absolute inset-0 preserve-3d">
            {faces.map((transform) => (
              <div key={transform} className="cube-face" style={{ transform }} />
            ))}
            <div className="orb absolute inset-0 m-auto h-14 w-14 rounded-full" />
          </div>
        </div>
        <div className="animate-orbit absolute inset-0 m-auto h-[320px] w-[320px] rounded-full border border-line-strong" />
        <div className="animate-orbit-reverse absolute inset-0 m-auto h-[400px] w-[400px] rounded-full border border-dashed border-line" />
      </motion.div>
    </div>
  );
}
