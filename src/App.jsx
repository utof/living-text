import React, { useEffect, useRef, useState } from "react";
import GlassmorphicBackground from "./GlassmorphicBackground";

export default function App() {
  const [text, setText] = useState("Such Text, Very Wow");
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(400); // in px

  useEffect(() => {
    const el = textRef.current;
    // if (!el) return;

    let size = fontSize;
    const maxTries = 50;

    for (let i = 0; i < maxTries; i++) {
      if (el.scrollHeight <= el.clientHeight) break;
      size -= 2;
      el.style.fontSize = `${size}px`;
    }

    setFontSize(size);
  }, [fontSize, text]);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        wordBreak: "break-word",
        position: "relative",
      }}
    >
      <GlassmorphicBackground />
      <textarea
        ref={textRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          fontSize: `${fontSize}px`,
          width: "100%",
          height: "100%",
          lineHeight: 1.2,
          fontFamily: "'Syne', sans-serif",
          color: "rgba(0, 0, 0, 0.8)",
          fontWeight: "$(Math.random() * 900 + 100)",
          resize: "none",
          outline: "none",
          background: "rgba(255, 235, 239, 0.7)",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      />
    </div>
  );
}
