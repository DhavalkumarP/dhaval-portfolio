"use client";

import { motion } from "motion/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24"
        >
          <div>
            <span className="text-accent font-black text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4">
              Experience
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-light">
              Where I&apos;ve{" "}
              <span className="font-serif italic font-normal text-accent">
                shipped.
              </span>
            </h2>
          </div>
          <p className="text-light/40 text-sm md:text-base max-w-xs leading-relaxed">
            Five years across staffing, fintech, e-commerce, education, and 3D
            visualization.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6 md:space-y-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-surface/80 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] border border-light/5 p-8 md:p-12 hover:border-accent/30 transition-all duration-500"
            >
              {/* Top row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 pb-8 border-b border-light/5">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-light mb-1 group-hover:text-accent transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-accent font-semibold text-base md:text-lg">
                    {exp.role}
                  </p>
                </div>
                <div className="md:text-right shrink-0">
                  <p className="text-light/60 text-sm font-medium">
                    {exp.period}
                  </p>
                  <p className="text-light/30 text-xs mt-1">{exp.location}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-8">
                {exp.highlights.map((h) => (
                  <div key={h.title}>
                    {h.title && (
                      <h4 className="text-light font-bold text-base md:text-lg mb-3">
                        {h.title}
                      </h4>
                    )}
                    <ul className="space-y-3">
                      {h.points.map((point, i) => (
                        <li
                          key={i}
                          className="relative pl-6 text-light/50 text-sm md:text-base leading-relaxed"
                        >
                          <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {h.link && (
                      <a
                        href={h.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-light/60 hover:text-accent text-sm font-semibold transition-colors"
                      >
                        {h.link.label}
                        <ArrowUpRightIcon size={14} weight="bold" />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-light/5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-[11px] md:text-xs font-bold uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
