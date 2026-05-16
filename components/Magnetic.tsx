"use client";
import { useRef, useState, ReactNode, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  strength?: number;
};

export function Magnetic({ children, strength = 0.35, className = "", ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      data-magnet
      className={`magnet inline-block ${className}`}
      style={{
        transform: `translate3d(${t.x}px, ${t.y}px, 0)`,
        transition: "transform 0.35s cubic-bezier(.2,.7,.2,1)",
      }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        setT({ x: x * strength, y: y * strength });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      {...rest}
    >
      {children}
    </div>
  );
}
