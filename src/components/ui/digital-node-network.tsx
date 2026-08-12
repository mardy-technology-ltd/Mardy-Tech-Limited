"use client";

import * as React from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
}

export function DigitalNodeNetwork() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive Canvas Handling
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Node Count & 3D Boundaries
    const nodeCount = Math.min(55, Math.floor(width / 28));
    const nodes: Node3D[] = [];
    const depth = 600;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * depth,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.2 - Math.random() * 0.4, // Floating upwards
        vz: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2 + 1.2,
      });
    }

    // Mouse & Scroll State
    let mouseX = width / 2;
    let mouseY = height / 2;
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - width / 2;
      mouseY = e.clientY - height / 2;
    };

    const handleScroll = () => {
      const deltaScroll = window.scrollY - scrollY;
      scrollY = window.scrollY;

      // Accelerate floating speed on scroll
      nodes.forEach((node) => {
        node.y -= deltaScroll * 0.2;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Render 60fps Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const focalLength = 400;

      // Project Nodes & Update 3D Positions
      const projected = nodes.map((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Wrap around screen boundaries
        if (node.y < -height) node.y = height;
        if (node.y > height) node.y = -height;
        if (node.x < -width) node.x = width;
        if (node.x > width) node.x = -width;
        if (node.z < 0) node.z = depth;
        if (node.z > depth) node.z = 0;

        // Slight cursor attraction/repulsion
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          node.x += (dx / dist) * 0.5;
          node.y += (dy / dist) * 0.5;
        }

        // Perspective Math
        const scale = focalLength / (focalLength + node.z);
        const px = width / 2 + node.x * scale;
        const py = height / 2 + node.y * scale;
        const alpha = Math.max(0.1, 1 - node.z / depth);

        return { px, py, scale, alpha, z: node.z };
      });

      // Draw Connecting Lines between Close Nodes
      const maxDistance = 140;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.18 * p1.alpha;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(0, 216, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8 * p1.scale;
            ctx.stroke();
          }
        }
      }

      // Draw Floating Nodes
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.px, p.py, Math.max(1, 2.2 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 216, 246, ${p.alpha * 0.8})`;
        ctx.shadowColor = "rgba(0, 216, 246, 0.5)";
        ctx.shadowBlur = 6 * p.scale;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-60 transition-opacity"
    />
  );
}
