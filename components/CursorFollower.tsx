"use client";
import { useEffect, useRef } from "react";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
    };
    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        const s = hovering ? 1.7 : 1;
        ringRef.current.style.transform = `translate(${rx - 19}px, ${ry - 19}px) scale(${s})`;
      }
      raf = requestAnimationFrame(tick);
    };
    const overHover = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      hovering = !!t?.closest("a, button, [data-magnet], [data-cursor='hover']");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", overHover, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", overHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-fx cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-fx cursor-dot" aria-hidden />
    </>
  );
}
