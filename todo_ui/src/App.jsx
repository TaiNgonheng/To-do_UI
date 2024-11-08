import { useState } from 'react'
import './App.css'
import ListTodoComponent from "./components/ListTodoComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TodoComponent from "./components/TodoComponent.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                {/*http:localhost:3000/*/}
                <Route path='/' element={<ListTodoComponent/>}></Route>
                {/*http://http:localhost:3000/todos*/}
                <Route path='/todos' element={<ListTodoComponent/>}></Route>
                {/*http:localhost3000/add-todo*/}
                <Route path='/addtodo' element={<TodoComponent/>}></Route>
                {/*http://localhost:3000/updateTodo*/}
                <Route path='/updatetodo/:id' element={<TodoComponent/>}></Route>
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
    </>
  )
}

export default App
