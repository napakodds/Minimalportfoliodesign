import { motion } from "motion/react";

export function WaterBackground() {
  const causticShapes = [
    "radial-gradient(120% 85% at 18% 16%, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.3) 24%, rgba(255,255,255,0) 52%)",
    "radial-gradient(95% 95% at 78% 24%, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.26) 30%, rgba(255,255,255,0) 58%)",
    "radial-gradient(110% 80% at 28% 74%, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.22) 28%, rgba(255,255,255,0) 58%)",
    "radial-gradient(140% 85% at 85% 84%, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.24) 26%, rgba(255,255,255,0) 54%)",
  ].join(",");

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#e5e9e4]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(150% 110% at 20% 10%, #edf1ec 0%, #e5e9e4 45%, #dde3de 100%)",
        }}
      />

      <motion.div
        className="absolute -inset-[18%] opacity-85"
        style={{
          background: causticShapes,
          filter: "blur(16px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: [0, 24, -16, 0],
          y: [0, -16, 22, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -inset-[24%]"
        style={{
          background: `
            radial-gradient(120% 70% at 14% 8%, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.12) 34%, transparent 68%),
            radial-gradient(120% 70% at 88% 26%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 33%, transparent 66%),
            radial-gradient(130% 80% at 38% 96%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 35%, transparent 70%)
          `,
          filter: "blur(24px)",
          mixBlendMode: "soft-light",
        }}
        animate={{
          x: [0, -22, 14, 0],
          y: [0, 18, -12, 0],
          rotate: [0, 1.5, -1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -inset-[15%] opacity-55"
        style={{
          background: `
            linear-gradient(
              115deg,
              transparent 30%,
              rgba(255, 255, 255, 0.5) 44%,
              rgba(255, 255, 255, 0.18) 52%,
              transparent 68%
            )
          `,
          backgroundSize: "230% 230%",
          filter: "blur(10px)",
          mixBlendMode: "screen",
        }}
        animate={{
          backgroundPosition: ["0% 40%", "200% 70%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 0.6px, transparent 0.6px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}
