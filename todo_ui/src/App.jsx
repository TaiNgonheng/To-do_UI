import { useState } from 'react'
import './App.css'
import ListTodoComponent from "./components/ListTodoComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TodoComponent from "./components/TodoComponent.jsx";
import RegisterComponent from "./components/RegisterComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";
import {isUserLoggedIn} from "./services/AuthService.jsx";

function App() {

    function AuthenticatedRoute({children}){
        const isAuth = isUserLoggedIn();
        if (isAuth){
            return children;
        }
        return <Navigate to="/"/>
    }

  return (
    <>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                {/*http:localhost:3000/*/}
                <Route path='/' element={<LoginComponent/>}></Route>
                {/*http://http:localhost:3000/todos*/}
                <Route path='/todos' element={
                    <AuthenticatedRoute>
                        <ListTodoComponent/>
                    </AuthenticatedRoute>
                }></Route>
                {/*http:localhost3000/add-todo*/}
                <Route path='/addtodo' element={
                    <AuthenticatedRoute>
                        <TodoComponent/>
                    </AuthenticatedRoute>
                }></Route>
                {/*http://localhost:3000/updateTodo*/}
                <Route path='/updatetodo/:id' element={
                    <AuthenticatedRoute>
                        <TodoComponent/>
                    </AuthenticatedRoute>
                    }></Route>
                {/*http://localhost:3000/register*/}
                <Route path='/register' element={<RegisterComponent/>}></Route>
                {/*http:/localhost:8080/login*/}
                <Route path='/login' element={<LoginComponent/>}></Route>
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
    </>
  )
}

export default App
