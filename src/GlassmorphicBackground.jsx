import React, { useEffect, useRef } from "react";
const excludeHueRanges = [
  [60, 170], // dull reds/oranges/yellows
];
function randHue(exclude = []) {
  let h;
  do h = Math.random() * 360;
  while (
    exclude.some(([a, b]) => (a <= b ? h >= a && h <= b : h >= a || h <= b))
  );
  return h;
}

// Glassmorphic, blurry, moving shapes background
export default function GlassmorphicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const shapes = Array.from({ length: 20 }).map(() => {
      const hue = randHue(excludeHueRanges);
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 50 + Math.random() * 200,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        color: `hsla(${hue}, ${80 + Math.random() * 20}%, ${
          50 + Math.random() * 10
        }%, 0.9)`,
      };
    });

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((s) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 0;
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
        pointerEvents: "none",
        filter: "blur(100px) saturate(10000%)",
        // transform: "scale(5)",
        backgroundColor: "rgba(0, 11, 110, 0.151)",
        opacity: 0.9,
      }}
    />
  );
}
