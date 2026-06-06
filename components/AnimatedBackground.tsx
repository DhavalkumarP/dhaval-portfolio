"use client";

import React from "react";
import InteractiveDots from "./InteractiveDots";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <InteractiveDots />

      {/* Glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F15A29] opacity-[0.03] blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-[#3D262A] opacity-[0.15] blur-[150px] rounded-full"></div>

      {/* Artistic wavy line */}
      <svg
        className="absolute w-full h-full opacity-[0.02]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M0,500 C200,300 400,700 600,500 C800,300 1000,700 1200,500"
          fill="none"
          stroke="#F15A29"
          strokeWidth="20"
          className="animate-wave"
        />
      </svg>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0) skewX(0);
          }
          50% {
            transform: translateX(-5%) skewX(2deg);
          }
          100% {
            transform: translateX(0) skewX(0);
          }
        }
        .animate-wave {
          animation: wave 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
