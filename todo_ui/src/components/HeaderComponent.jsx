import React from 'react'
import {NavLink} from 'react-router-dom'
import {isUserLoggedIn, logout} from "../services/AuthService.jsx";
import {useNavigate} from 'react-router-dom'
const HeaderComponent = () => {
    const navigate = useNavigate();
    const isAuth =  isUserLoggedIn();
    function handleLogout(){
        logout();
        navigate('/login');
    }
    return (
        <div>
            <header className='header'>
                <h1 className='mt-xxl-4 fw-bold'>Task Management🗒</h1>
                {
                    isAuth &&
                    <button className='header todo'>
                        <NavLink to="/todos" className='nav-link '>ToDo</NavLink>
                    </button>
                }
                {
                    !isAuth &&
                    <button className='header register ms-5'>
                        <NavLink to="/register" className='nav-link '>Register</NavLink>
                    </button>
                }
                {
                    !isAuth &&
                    <button className='header signIn'>
                        <NavLink to="/login" className='nav-link'>Login</NavLink>
                    </button>
                }
                {
                     isAuth &&
                    <button className='header signIn'>
                        <NavLink to="/login" className='nav-link' onClick={handleLogout}>Logout</NavLink>
                    </button>
                     }
            </header>
        </div>
    )
}
export default HeaderComponent
