import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform Optimization",
      category: "Process Improvement",
      description:
        "Led comprehensive analysis of customer journey, identifying bottlenecks and implementing solutions that increased conversion rates by 35%.",
      tags: ["User Research", "Data Analysis", "A/B Testing"],
      impact: "35% increase in conversion",
    },
    {
      title: "Supply Chain Analytics Dashboard",
      category: "Data Visualization",
      description:
        "Designed and implemented real-time analytics dashboard providing insights into inventory management, reducing stockouts by 45%.",
      tags: ["Power BI", "SQL", "KPI Design"],
      impact: "45% reduction in stockouts",
    },
    {
      title: "Customer Segmentation Model",
      category: "Strategic Analysis",
      description:
        "Developed advanced segmentation model using RFM analysis, enabling targeted marketing campaigns with 3x higher engagement rates.",
      tags: ["Python", "Machine Learning", "Marketing Analytics"],
      impact: "3x engagement increase",
    },
    {
      title: "Agile Transformation Initiative",
      category: "Change Management",
      description:
        "Facilitated organization-wide transition to agile methodology, improving team productivity and reducing time-to-market by 40%.",
      tags: ["Agile", "Scrum", "Training"],
      impact: "40% faster delivery",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Selected projects that demonstrate impact, innovation, and strategic
            thinking in business analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 sm:p-8 liquid-glass hover:shadow-[0_14px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.55)] transition-all duration-300"
            >
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider text-secondary">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl mt-2 mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs text-foreground/70 liquid-glass-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="text-sm">
                  <span className="text-foreground/50">Impact: </span>
                  <span className="text-primary">{project.impact}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
