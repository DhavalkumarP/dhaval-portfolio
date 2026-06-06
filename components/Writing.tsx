"use client";

import { motion } from "motion/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { writing } from "@/lib/data";

export function Writing() {
  return (
    <section
      id="writing"
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
              Writing
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-light">
              Notes on{" "}
              <span className="font-serif italic font-normal text-accent">
                building.
              </span>
            </h2>
          </div>
          <p className="text-light/40 text-sm md:text-base max-w-xs leading-relaxed">
            Articles on React, React Native, and cross-platform development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {writing.map((post, idx) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="lift-card group bg-surface/80 backdrop-blur-sm rounded-[2rem] border border-light/5 p-7 md:p-8 hover:border-accent/30 transition-colors duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-light/30 text-[10px] font-black uppercase tracking-[0.2em]">
                  {post.date}
                </span>
                <span className="w-9 h-9 rounded-full bg-light/5 flex items-center justify-center text-light/40 group-hover:bg-accent group-hover:text-background transition-all">
                  <ArrowUpRightIcon size={16} weight="bold" />
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-light mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-light/50 leading-relaxed line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
