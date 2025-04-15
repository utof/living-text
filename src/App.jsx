import React, { useState } from "react";
import styled from "@emotion/styled";
const TextAreaWrapper = styled.div`
  padding: 0;
  text-align: justify;
  margin: 0;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    color: #ff1818;
    /* pointer-events: none; */
  }
`;

export default function App() {
  const [text, setText] = useState("ASADDSADASDASDA");

  return (
    <TextAreaWrapper>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          maxHeight: "100vh",
          lineHeight: 1.2,
          fontSize: "10rem",
          outline: "none",
          resize: "none",
          backgroundColor: "pink",
          // boxSizing: "border-box",
        }}
      />
    </TextAreaWrapper>
  );
}
