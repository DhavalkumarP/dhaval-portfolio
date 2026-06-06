"use client";

import { motion } from "motion/react";
import { profile, education, certifications, interests } from "@/lib/data";
import {
  GraduationCapIcon,
  MapPinIcon,
  CertificateIcon,
  ConfettiIcon,
} from "@phosphor-icons/react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-40 px-4 md:px-6 bg-[#1A1412]/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading + summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-black text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4">
              About
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-light mb-8">
              Building things that{" "}
              <span className="font-serif italic font-normal text-accent">
                ship.
              </span>
            </h2>
            <p className="text-base md:text-lg text-light/50 leading-relaxed mb-6">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-light/40">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/60 border border-light/5">
                <MapPinIcon size={16} className="text-accent" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/60 border border-light/5">
                <span className="text-accent font-bold">{profile.yearsExperience}</span>
                years of experience
              </span>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <span className="text-light/30 font-black text-[10px] tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
                <ConfettiIcon size={14} className="text-accent" weight="fill" />
                Off the clock
              </span>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-2 rounded-xl bg-light/5 border border-light/5 text-light/70 text-xs md:text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5"
          >
            <span className="text-light/30 font-black text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-2 flex items-center gap-2">
              <GraduationCapIcon size={16} className="text-accent" weight="fill" />
              Education
            </span>
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-surface/80 backdrop-blur-sm rounded-[2rem] border border-light/5 p-7 md:p-8 hover:border-accent/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-light leading-snug">
                    {edu.school}
                  </h3>
                  <span className="text-xs text-accent font-bold whitespace-nowrap mt-1">
                    {edu.period}
                  </span>
                </div>
                <p className="text-light/50 text-sm md:text-base">{edu.degree}</p>
                <p className="text-light/30 text-xs mt-1">{edu.location}</p>
              </div>
            ))}

            {/* Certifications */}
            <span className="text-light/30 font-black text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-2 pt-4 flex items-center gap-2">
              <CertificateIcon size={16} className="text-accent" weight="fill" />
              Certifications
            </span>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-surface/80 backdrop-blur-sm rounded-[2rem] border border-light/5 p-7 md:p-8 hover:border-accent/30 transition-all duration-500"
              >
                <h3 className="text-lg md:text-xl font-bold text-light leading-snug">
                  {cert.name}
                </h3>
                <p className="text-light/50 text-sm md:text-base mt-1">
                  {cert.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
