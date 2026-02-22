import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Senior Business Analyst",
      company: "Tech Innovations Ltd.",
      period: "2022 - Present",
      description:
        "Leading cross-functional teams in digital transformation projects, conducting comprehensive business process analysis, and delivering data-driven recommendations that resulted in 30% efficiency improvement.",
      achievements: [
        "Spearheaded a major CRM implementation project",
        "Developed automated reporting dashboards",
        "Reduced project delivery time by 25%",
      ],
    },
    {
      role: "Business Analyst",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Collaborated with stakeholders to gather requirements, create detailed documentation, and ensure successful project delivery across multiple product lines.",
      achievements: [
        "Managed 15+ projects simultaneously",
        "Improved stakeholder satisfaction by 40%",
        "Implemented agile methodologies across teams",
      ],
    },
    {
      role: "Junior Business Analyst",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description:
        "Supported senior analysts in requirements gathering, data analysis, and documentation. Gained foundational experience in business process optimization.",
      achievements: [
        "Created comprehensive process documentation",
        "Assisted in user acceptance testing",
        "Contributed to product roadmap planning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            Experience
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            A track record of delivering impactful solutions across various
            industries and organizational scales.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative pl-8 border-l-2 border-primary/20"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              
              <div className="p-8 liquid-glass">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-secondary">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-foreground/70 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wider text-secondary mb-3">
                    Key Achievements
                  </p>
                  {exp.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="flex items-start gap-3 text-foreground/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
