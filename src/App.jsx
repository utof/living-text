import { useState } from "react";
import styled from "@emotion/styled";

const FullScreenDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

const EdgeToEdgeText = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 2rem;
  line-height: 1.2;
  word-break: break-all;
  white-space: pre-wrap;
  /* Force wrap after N characters (e.g., 40ch) */
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

export default function App() {
  const [text, setText] = useState("AAAAAAAAAAAAAA");

  return (
    <FullScreenDiv>
      <EdgeToEdgeText>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            height: "100%",
            fontSize: "2rem",
            lineHeight: 1.2,
            border: "none",
            resize: "none",
            background: "transparent",
            color: "inherit",
            fontFamily: "inherit",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </EdgeToEdgeText>
    </FullScreenDiv>
  );
}
