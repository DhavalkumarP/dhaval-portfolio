"use client";

import { motion } from "motion/react";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";
import { profile } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: EnvelopeSimpleIcon,
  },
  {
    label: "LinkedIn",
    value: `in/${profile.linkedinHandle}`,
    href: profile.linkedin,
    icon: LinkedinLogoIcon,
  },
  {
    label: "GitHub",
    value: `@${profile.githubHandle}`,
    href: profile.github,
    icon: GithubLogoIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    icon: PhoneIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-surface/80 backdrop-blur-sm rounded-[2.5rem] md:rounded-[3rem] border border-light/5 p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-accent opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

          <div className="relative">
            <span className="text-accent font-black text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4">
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-light mb-6">
              Let&apos;s build{" "}
              <span className="font-serif italic font-normal text-accent">
                something.
              </span>
            </h2>
            <p className="text-light/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Open to senior frontend roles, freelance work, and interesting
              collaborations. The fastest way to reach me is email.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-background rounded-2xl font-bold text-sm md:text-base hover:bg-accent-hover transition-all mb-12 leading-none"
            >
              <EnvelopeSimpleIcon size={18} weight="bold" className="shrink-0 translate-y-[0.5px]" />
              <span className="leading-none">{profile.email}</span>
            </a>

            {/* Channel grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group bg-light/5 border border-light/5 rounded-2xl p-5 hover:border-accent/30 hover:bg-accent/5 transition-all text-left"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon
                      size={22}
                      className="text-accent"
                      weight="regular"
                    />
                    <ArrowUpRightIcon
                      size={14}
                      weight="bold"
                      className="text-light/20 group-hover:text-accent transition-colors"
                    />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-light/30 mb-1">
                    {label}
                  </div>
                  <div className="text-xs md:text-sm text-light/70 font-medium truncate">
                    {value}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
