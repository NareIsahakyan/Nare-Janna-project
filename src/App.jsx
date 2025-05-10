import { useState } from 'react'

import './App.css'

import Header from "./components/header/Header"
import Main from "./components/main/Main"
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/dashbordPage/DashboardCom'
import CreateNewProject from './pages/createNewProject/CreateNewProject'
import AddPersonBox from './pages/addPerson/AddPersonBox'

function App() {
  const [count, setCount] = useState(0)

  //  <Main/>
  //<CreateNewProject/>
  //   <AddPersonBox/>
  //<DashboardPage/>
  return (
    <>
    <Header/>
    <AddPersonBox/>
    

    </>
  )
}

export default App
