import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>© 2026 Business Analyst Portfolio.</span>
            <span className="hidden md:inline">Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>

          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <a
              href="#home"
              className="hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
