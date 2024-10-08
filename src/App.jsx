import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import View from './pages/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:cat' element={<Home/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/view/:id' element={<View/>} />
        </Routes>

    </>
  )
}

export default App
