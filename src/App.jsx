import React, { useState } from "react";
import styled from "@emotion/styled";
const TextAreaWrapper = styled.div`
  padding: 0;
  /* text-align: justify; */
  margin: 0;
  /* padding: 0; */

  &:after {
    content: "";
    /* display: inline-block; */
    /* width: 100%; */
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
          lineHeight: 1.2,
          outline: "none",
          resize: "none",
          // boxSizing: "border-box",
        }}
      />
    </TextAreaWrapper>
  );
}
