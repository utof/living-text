import { useState } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  @apply h-full w-full bg-white flex items-center justify-center overflow-hidden;
`

const GlassText = styled.input`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  color: #111;
  border: none;
  outline: none;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  transition: font-size 0.2s ease;
  width: 100%;
  height: auto;
`

function App() {
  const [text, setText] = useState("Type something beautiful")

  const fontSize = Math.max(1, 10 - text.length * 0.2)

  return (
    <Container>
      <GlassText
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          fontSize: `${fontSize}vw`
        }}
      />
    </Container>
  )
}

export default App
