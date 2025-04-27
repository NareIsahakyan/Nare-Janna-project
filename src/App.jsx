import { useState } from 'react'

import './App.css'

import Header from "./components/header/Header"
import Main from "./components/main/Main"
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/dashbordPage/DashboardCom'

function App() {
  const [count, setCount] = useState(0)
  // <Main/>
  return (
    <>
    <Header/>
    <DashboardPage/>
    </>
  )
}

export default App
