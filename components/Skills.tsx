"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-accent font-black text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4">
            Toolbox
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-light">
            The stack I{" "}
            <span className="font-serif italic font-normal text-accent">
              reach for.
            </span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface/80 backdrop-blur-sm rounded-[2rem] border border-light/5 p-7 md:p-8 hover:border-accent/30 transition-all duration-500"
            >
              <h3 className="text-light/30 font-black text-[10px] md:text-xs tracking-[0.3em] uppercase mb-5">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-2 rounded-xl bg-light/5 border border-light/5 text-light/70 text-xs md:text-sm font-medium hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all"
                  >
                    {item}
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
