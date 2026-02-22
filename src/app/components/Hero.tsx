import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import heroImage from "figma:asset/68a8be4f2ba68041a207d382244c5d5e40207f56.png";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="relative grid grid-cols-12 gap-8 items-center">
          {/* Left Side - Title Part 1 & CTA */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-none text-primary uppercase">
                Transform
                <br />
                Data
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <button
                onClick={scrollToAbout}
                className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-sm transition-all inline-flex items-center gap-2"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-foreground/60 max-w-xs leading-relaxed">
                Expert analysis that transforms complex data into strategic business insights
              </p>
            </motion.div>

            {/* Feature Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-sm border border-border max-w-xs"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base mb-1">Strategic Analysis</h3>
                  <p className="text-xs text-foreground/60">
                    Data-driven solutions for growth
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 lg:col-span-4 relative z-10"
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden mx-auto max-w-md">
              <img
                src={heroImage}
                alt="Business Analyst Profile"
                className="w-full h-full object-cover"
                style={{
                  mixBlendMode: 'multiply'
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-sm shadow-xl border border-border"
            >
              <p className="text-xs text-secondary uppercase tracking-wider mb-1">
                Experience
              </p>
              <p className="text-2xl text-primary">5+ Years</p>
            </motion.div>
          </motion.div>

          {/* Right Side - Title Part 2 & Stats */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:text-right"
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-none text-primary uppercase">
                Drive
                <br />
                Results
              </h1>
            </motion.div>

            {/* Stats Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-primary text-white p-6 rounded-sm lg:ml-auto max-w-xs"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/70 mb-2">
                    Success Rate
                  </p>
                  <p className="text-4xl">98%</p>
                </div>
                <TrendingUp className="w-6 h-6 text-white/70" />
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Project completion with measurable impact
              </p>
            </motion.div>

            {/* Feature highlight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <p className="text-sm text-foreground/70">Process Optimization</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <p className="text-sm text-foreground/70">Data Visualization</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm text-foreground/70">Strategic Planning</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}