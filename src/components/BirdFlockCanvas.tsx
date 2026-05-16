"use client";

import React, { useEffect, useRef } from "react";

export default function BirdFlockCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number, mx = -400, my = -400;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    const bird = {
      x: 200,
      y: 200,
      vx: 0,
      vy: 0,
      wing: 0,
      wingDir: 1,
      size: 26,
      trail: [] as { x: number; y: number }[],
      angle: 0,
    };

    const flock = Array.from({ length: 7 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: 80 + Math.random() * window.innerHeight * 0.55,
      vx: (Math.random() - 0.5) * 1.1,
      vy: (Math.random() - 0.5) * 0.5,
      wing: Math.random() * Math.PI * 2,
      wingDir: 1,
      size: 7 + Math.random() * 9,
      phaseOffset: Math.random() * Math.PI * 2,
    }));

    function drawBird(cx: number, cy: number, size: number, wingAngle: number, angle: number, color: string, alpha: number) {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      const wUp = -Math.abs(Math.sin(wingAngle)) * size * 0.58;
      const ws = size * 1.08;
      ctx.fillStyle = color;
      
      // body
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.27, size * 0.13, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // left wing
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-ws * 0.5, wUp * 0.6, -ws, wUp);
      ctx.quadraticCurveTo(-ws * 0.5, wUp * 0.2, 0, size * 0.1);
      ctx.fill();
      
      // right wing
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(ws * 0.5, wUp * 0.6, ws, wUp);
      ctx.quadraticCurveTo(ws * 0.5, wUp * 0.2, 0, size * 0.1);
      ctx.fill();
      
      // head
      ctx.beginPath();
      ctx.arc(size * 0.27, -size * 0.04, size * 0.12, 0, Math.PI * 2);
      ctx.fill();
      
      // beak
      ctx.beginPath();
      ctx.moveTo(size * 0.37, -size * 0.04);
      ctx.lineTo(size * 0.51, -size * 0.02);
      ctx.lineTo(size * 0.37, size * 0.02);
      ctx.fill();
      
      // tail
      ctx.beginPath();
      ctx.moveTo(-size * 0.27, 0);
      ctx.quadraticCurveTo(-size * 0.5, size * 0.06, -size * 0.54, -size * 0.08);
      ctx.quadraticCurveTo(-size * 0.44, 0, -size * 0.27, size * 0.04);
      ctx.fill();
      
      ctx.restore();
    }

    let t = 0;
    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      t += 0.016;

      const ease = 0.07;
      bird.vx += (mx - bird.x) * ease;
      bird.vy += (my - bird.y) * ease;
      bird.vx *= 0.82;
      bird.vy *= 0.82;
      bird.x += bird.vx;
      bird.y += bird.vy;

      const speed = Math.sqrt(bird.vx * bird.vx + bird.vy * bird.vy);
      const ws = 0.12 + speed * 0.018;
      bird.wing += bird.wingDir * ws;
      if (Math.abs(bird.wing) > Math.PI * 0.5) bird.wingDir *= -1;
      if (speed > 0.5) bird.angle = Math.atan2(bird.vy, bird.vx);

      bird.trail.push({ x: bird.x, y: bird.y });
      if (bird.trail.length > 20) bird.trail.shift();

      bird.trail.forEach((p, i) => {
        const prog = i / bird.trail.length;
        ctx.save();
        ctx.globalAlpha = 0.1 * prog;
        ctx.fillStyle = "#c4521a";
        ctx.beginPath();
        ctx.arc(p.x, p.y, bird.size * 0.22 * prog, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      drawBird(bird.x, bird.y, bird.size, bird.wing, bird.angle, "#1c1208", 0.86);

      flock.forEach((b) => {
        b.x += b.vx + Math.sin(t * 0.4 + b.phaseOffset) * 0.28;
        b.y += b.vy + Math.cos(t * 0.3 + b.phaseOffset) * 0.18;
        b.vx += (bird.x - b.x) * 0.00014;
        b.vy += (bird.y - b.y) * 0.00014;
        const dx = b.x - bird.x, dy = b.y - bird.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 85) {
          b.vx += dx * 0.008;
          b.vy += dy * 0.008;
        }
        b.vx *= 0.98;
        b.vy *= 0.98;
        if (b.x < -60) b.x = W + 60;
        if (b.x > W + 60) b.x = -60;
        if (b.y < -60) b.y = H * 0.82;
        if (b.y > H * 0.82) b.y = -60;
        b.wing += b.wingDir * 0.13;
        if (Math.abs(b.wing) > Math.PI * 0.5) b.wingDir *= -1;
        const fa = Math.atan2(b.vy + 0.001, b.vx + 0.001);
        const al = 0.22 + Math.sin(t * 0.5 + b.phaseOffset) * 0.07;
        drawBird(b.x, b.y, b.size, b.wing, fa, "#c4521a", al);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[500]" />;
}
