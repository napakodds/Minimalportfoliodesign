import { motion } from "motion/react";
import { Target, Users, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Delivering accurate analysis with attention to detail",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly across teams and stakeholders",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Driving continuous improvement and innovation",
    },
  ];

  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            About Me
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed mb-6">
            As a Business Analyst with a passion for data-driven decision
            making, I specialize in bridging the gap between business needs and
            technical solutions. My approach combines analytical rigor with
            creative problem-solving to deliver insights that matter.
          </p>
          <p className="text-lg text-foreground/60 leading-relaxed">
            With experience across various industries, I've developed a unique
            ability to understand complex business processes, identify
            improvement opportunities, and translate requirements into
            actionable strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="p-8 liquid-glass"
            >
              <value.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl mb-3">{value.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
