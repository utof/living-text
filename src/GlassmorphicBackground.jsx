import React, { useEffect, useRef } from "react";

// Glassmorphic, blurry, moving shapes background
export default function GlassmorphicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const shapes = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 100 + Math.random() * 200,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
      color: `hsla(${Math.random() * 536 + 360}, 100%, 10%, 1)`,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((s) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 40;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.restore();
        // Move
        s.x += s.dx;
        s.y += s.dy;
        // Bounce
        if (s.x < s.r || s.x > canvas.width - s.r) s.dx *= -1;
        if (s.y < s.r || s.y > canvas.height - s.r) s.dy *= -1;
      });
      animationFrameId = requestAnimationFrame(draw);
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(50px) saturate(10000%)",
        opacity: 0.9,
      }}
    />
  );
}
