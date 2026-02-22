import { motion } from "motion/react";

export function WaterBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F4E9CC]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4E9CC] via-[#F0E1B8]/50 to-[#EDD9AA]/50" />
      
      {/* Animated soft glow */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(158, 156, 145, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(94, 33, 29, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(158, 156, 145, 0.15) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft shimmer effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              120deg,
              transparent 40%,
              rgba(255, 255, 255, 0.15) 50%,
              transparent 60%
            )
          `,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 200%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating soft particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 120 + 60,
            height: Math.random() * 120 + 60,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, Math.random() * 80 - 40],
            y: [0, Math.random() * 80 - 40],
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}