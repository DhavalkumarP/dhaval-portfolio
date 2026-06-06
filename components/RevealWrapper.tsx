"use client";

import React, { useEffect } from "react";

const RevealWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal-section");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};

export default RevealWrapper;
