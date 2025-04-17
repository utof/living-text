import React, { useEffect, useRef, useState } from "react";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("ASADDSADASDASDA");
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
      style={{ height: "100vh", overflow: "hidden", wordBreak: "break-word" }}
    >
      <textarea
        ref={textRef}
        ref={textRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          fontSize: `${fontSize}px`,
          fontSize: `${fontSize}px`,
          width: "100%",
          height: "100%",
          lineHeight: 1.2,
          resize: "none",
          resize: "none",
          outline: "none",
          background: "pink",
          overflow: "hidden",
          background: "pink",
          overflow: "hidden",
        }}
      />
    </div>
    </div>
  );
}
