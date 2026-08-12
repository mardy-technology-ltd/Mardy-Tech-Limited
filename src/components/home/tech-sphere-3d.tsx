"use client";

import * as React from "react";

const techTags = [
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "PHP",
  "Python",
  "MySQL",
  "Docker",
  "AWS",
  "Android",
  "iOS",
  "GitHub",
  "TypeScript",
  "Tailwind",
  "Framer",
  "GraphQL",
  "Redis",
  "Postgres",
  "REST API",
  "Zod",
];

interface Point3D {
  x: number;
  y: number;
  z: number;
  tag: string;
}

export function TechSphere3D() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 450);
    let height = (canvas.height = 450);

    // Responsive Canvas Resizing with Device Pixel Ratio scaling for Crisp High-DPI Rendering
    const updateCanvasSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width || 450;
      height = rect.height || 450;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Fibonacci Lattice Sphere Initialization
    const N = techTags.length;
    const radius = Math.min(width, height) * 0.38;
    const points: Point3D[] = [];

    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < N; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      points.push({ x, y, z, tag: techTags[i] });
    }

    // Dynamic Rotation State
    let angleX = 0.003;
    let angleY = 0.005;

    let targetAngleX = 0.003;
    let targetAngleY = 0.005;

    // Mouse Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;

      targetAngleX = (mouseY / height) * 0.02;
      targetAngleY = (mouseX / width) * 0.02;
    };

    const handleMouseLeave = () => {
      targetAngleX = 0.003;
      targetAngleY = 0.005;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // 60FPS Render Loop using 3D Projection Math
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate rotation speed towards target
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Rotate points in 3D Space & Project to 2D Screen Coordinates
      const projectedPoints = points.map((point) => {
        // Rotate around X axis
        const y1 = point.y * cosX - point.z * sinX;
        const z1 = point.y * sinX + point.z * cosX;

        // Rotate around Y axis
        const x2 = point.x * cosY + z1 * sinY;
        const z2 = -point.x * sinY + z1 * cosY;

        // Update 3D point state for continuous rotation
        point.x = x2;
        point.y = y1;
        point.z = z2;

        // Perspective depth scale and opacity calculation
        const focalLength = 300;
        const scale = focalLength / (focalLength - z2);
        const alpha = Math.max(0.15, Math.min(1, (z2 + radius) / (2 * radius)));

        return {
          screenX: width / 2 + x2 * scale,
          screenY: height / 2 + y1 * scale,
          scale,
          alpha,
          z: z2,
          tag: point.tag,
        };
      });

      // Sort points by Z index (depth buffering) so foreground items render on top
      projectedPoints.sort((a, b) => a.z - b.z);

      // Draw 3D Text Tags with Futuristic HSL Styling
      projectedPoints.forEach((pt) => {
        const fontSize = Math.max(10, Math.floor(14 * pt.scale));
        ctx.font = `bold ${fontSize}px var(--font-geist-sans), system-ui, sans-serif`;

        // Color interpolation: Cyan/Teal (#00D8F6) in foreground, muted slate in background
        if (pt.z > 0) {
          ctx.fillStyle = `rgba(0, 216, 246, ${pt.alpha})`;
          ctx.shadowColor = "rgba(0, 216, 246, 0.4)";
          ctx.shadowBlur = 8 * pt.scale;
        } else {
          ctx.fillStyle = `rgba(148, 163, 184, ${pt.alpha * 0.7})`;
          ctx.shadowBlur = 0;
        }

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(pt.tag, pt.screenX, pt.screenY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clean up event listeners & animation frame on component unmount
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-[480px] mx-auto select-none pointer-events-auto">
      {/* Subtle Glow Ring behind Canvas */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/20 via-accent/10 to-cyan-500/20 filter blur-2xl -z-10 animate-pulse" />

      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
