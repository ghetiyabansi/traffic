import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Form from './component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form/>
    {/* <Home/> */}
    </>
  )
}

export default App
