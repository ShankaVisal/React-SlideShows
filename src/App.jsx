import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './Example'
import Example1 from './Example1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Example/>
        <Example1/>
    </>

  )
}

export default App
