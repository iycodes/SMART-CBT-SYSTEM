import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestionScreen from './QuestionScreen/QuestionScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <QuestionScreen/>
    </>
  )
}

export default App
