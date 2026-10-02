"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import type { ElementType } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-in";
  delay?: number;
  as?: ElementType;
}

export default function AnimateIn({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variant} ${className}`}
    >
      {children}
    </Tag>
  );
}
