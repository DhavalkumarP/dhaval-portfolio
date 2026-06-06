"use client";

import { motion } from "motion/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { featuredProjects, personalProjects, type ProjectItem } from "@/lib/data";

function ProjectCard({
  project,
  index,
  badge,
}: {
  project: ProjectItem;
  index: number;
  badge?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative bg-surface/80 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] border border-light/5 p-8 md:p-10 hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
        {badge && (
          <div className="absolute -top-4 -left-2 md:-top-5 md:-left-3">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-background font-black text-lg md:text-xl">
                0{index + 1}
              </span>
            </div>
          </div>
        )}

        <div className={`${badge ? "pt-8 md:pt-10" : ""} flex-grow`}>
          {/* Category tag */}
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider mb-4">
            {project.category}
          </span>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-light group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-light/50 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-light/5 border border-light/5 text-light/60 text-[10px] font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links && (
          <div className="flex flex-wrap gap-4 mt-5">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-light/60 hover:text-accent text-sm font-semibold transition-colors"
              >
                {link.label}
                <ArrowUpRightIcon size={14} weight="bold" />
              </a>
            ))}
          </div>
        )}

        {/* Decorative corner */}
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-light/5 rounded-br-2xl group-hover:border-accent/20 transition-colors pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-40 px-4 md:px-6 bg-[#1A1412]/50"
    >
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
              Selected work
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-light">
              Products I&apos;ve{" "}
              <span className="font-serif italic font-normal text-accent">
                built.
              </span>
            </h2>
          </div>
          <p className="text-light/40 text-sm md:text-base max-w-xs leading-relaxed">
            Full-stack and web products — plus mobile — that shipped to
            production and reached real users.
          </p>
        </motion.div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 md:gap-y-10">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} badge />
          ))}
        </div>

        {/* Personal projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 md:mt-32 mb-12 md:mb-16"
        >
          <span className="text-accent font-black text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4">
            Personal projects
          </span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-light">
            Things I built{" "}
            <span className="font-serif italic font-normal text-accent">
              for fun.
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {personalProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
