"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number;
  className?: string;
}

export function TiltCard({
  children,
  maxTilt = 8,
  className,
  ...props
}: TiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const rafId = React.useRef<number | null>(null);

  const [tiltTransform, setTiltTransform] = React.useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  );
  const [transitionStyle, setTransitionStyle] = React.useState(
    "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"
  );
  const [glareStyle, setGlareStyle] = React.useState({
    opacity: 0,
    background: "radial-gradient(circle at 50% 50%, rgba(0, 216, 246, 0.25), transparent 70%)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setTransitionStyle("transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)");
      setTiltTransform(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.015)`
      );

      setGlareStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(0, 216, 246, 0.22), transparent 60%)`,
      });
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    setTransitionStyle("transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)");
    setTiltTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    );

    setGlareStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  React.useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tiltTransform,
        transition: transitionStyle,
        WebkitFontSmoothing: "antialiased",
        backfaceVisibility: "hidden",
      }}
      className={cn("relative overflow-hidden rounded-2xl", className)}
      {...props}
    >
      {/* Dynamic Glassmorphism Glare Light Reflection Overlay */}
      <div
        style={{
          opacity: glareStyle.opacity,
          background: glareStyle.background,
          transition: "opacity 0.3s ease",
        }}
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
