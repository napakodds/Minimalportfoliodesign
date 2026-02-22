import { motion } from "motion/react";
import { BarChart3, Database, FileText, GitBranch, LineChart, Users2 } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Analysis & Strategy",
      skills: [
        { name: "Business Process Mapping", level: 95 },
        { name: "Requirements Gathering", level: 90 },
        { name: "Stakeholder Management", level: 88 },
        { name: "Gap Analysis", level: 92 },
      ],
      icon: BarChart3,
    },
    {
      title: "Data & Tools",
      skills: [
        { name: "SQL & Database", level: 85 },
        { name: "Excel & Power BI", level: 90 },
        { name: "Tableau", level: 82 },
        { name: "Python for Analysis", level: 78 },
      ],
      icon: Database,
    },
    {
      title: "Documentation & Communication",
      skills: [
        { name: "Technical Writing", level: 93 },
        { name: "User Stories & Use Cases", level: 90 },
        { name: "Presentation Skills", level: 88 },
        { name: "Agile Methodology", level: 85 },
      ],
      icon: FileText,
    },
  ];

  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">Skills</h2>
          <p className="text-lg text-foreground/60 leading-relaxed">
            A comprehensive toolkit for business analysis, combining technical
            expertise with strong communication and analytical capabilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="p-8 liquid-glass"
            >
              <category.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-sm text-secondary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
