import { useState } from 'react'
import { CssBaseline } from '@mui/material'
import './App.css'
import ToDoList from './ToDoList';
import NavBar from './NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <CssBaseline />
      <NavBar/>
      <ToDoList />
    </>
  )
}

export default App
