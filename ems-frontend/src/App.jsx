import { useState } from 'react'
import ListEmployee from './components/EmployeeComponents/ListEmployee'
import Header from './components/comp/Header'
import Footer from './components/comp/Footer'
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import AddEmployee from './components/EmployeeComponents/AddEmployee'
import UpdateEmployee from './components/EmployeeComponents/UpdateEmployee'

function App() {
  
  return (
    <>

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<ListEmployee/>}>  </Route>
        <Route path='/addemployee' element={<AddEmployee/>} ></Route>
        <Route path='/updateemployee/:id' element={<AddEmployee/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>

     {/* <Header/>
    <ListEmployee/>
    <Footer/> */}

    </>
  )
}

export default App
