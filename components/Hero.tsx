"use client";

import { motion } from "motion/react";
import {
  ArrowDownIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react";
import { profile, stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Main Headline - Mixed Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[2.75rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-tighter leading-[0.95] mb-6 text-light"
        >
          Senior
          <br />
          <span className="font-serif italic font-normal text-accent">
            frontend
          </span>{" "}
          engineer.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-base md:text-xl text-light/50 max-w-2xl mx-auto leading-relaxed mb-3"
        >
          {profile.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-light/40 mb-10"
        >
          {profile.stack.join(" · ")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 bg-accent text-background rounded-2xl font-bold text-sm hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
          >
            View my work
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-light/10 text-light rounded-2xl font-bold text-sm hover:border-accent/40 hover:text-accent transition-all flex items-center justify-center gap-2"
          >
            <DownloadSimpleIcon size={18} weight="bold" />
            Download résumé
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {[
            { href: profile.github, icon: GithubLogoIcon, label: "GitHub" },
            { href: profile.linkedin, icon: LinkedinLogoIcon, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, icon: EnvelopeSimpleIcon, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full bg-surface/80 border border-light/5 flex items-center justify-center text-light/60 hover:text-accent hover:border-accent/30 transition-all"
            >
              <Icon size={20} weight="regular" />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface/60 backdrop-blur-sm border border-light/5 rounded-2xl md:rounded-[1.5rem] p-5 md:p-6 hover:border-accent/30 transition-colors"
            >
              <div className="text-2xl md:text-4xl font-bold text-accent tracking-tighter mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] md:text-xs text-light/40 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-col items-center gap-3 opacity-40"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-light/40">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDownIcon size={18} className="text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
