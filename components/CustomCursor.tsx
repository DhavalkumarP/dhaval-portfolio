"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    setIsVisible(isDesktop);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const cursor = document.getElementById("custom-cursor");
    const follower = document.getElementById("cursor-follower");
    if (!cursor || !follower) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      follower.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div id="custom-cursor" className="custom-cursor" />
      <div id="cursor-follower" className="cursor-follower" />
    </>
  );
}
