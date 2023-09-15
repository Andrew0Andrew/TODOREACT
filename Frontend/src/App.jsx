import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Todo from './pages/todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Todo></Todo>}></Route>
    </Routes>
    </>
  )
}

export default App
