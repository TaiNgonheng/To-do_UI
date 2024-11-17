import React, {useState} from 'react'
import {loginAPICall, registerAPICall, saveLoggedInUser, storeToken} from "../services/AuthService.jsx";
import error from "eslint-plugin-react/lib/util/error.js";
import {useNavigate} from "react-router-dom"

const LoginComponent = () => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const navigator =useNavigate();
    function handleLoginForm(e){
        e.preventDefault();
        const login={username, password}
        console.log(login);
        loginAPICall(username, password).then((response)=>{
            console.log(response.data);

            const token = 'Bearer ' + response.data.accessToken;

            const role = response.data.role;
            storeToken(token);
            saveLoggedInUser(username,role);

            navigator("/todos")
            window.location.reload();
        }).catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className='container'>
            <br/>
            <br/>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'>Login</h2>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Username</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='username'
                                        className='form-control'
                                        placeholder='Enter Username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Password</label>
                                <div className='col-md-9'>
                                    <input
                                        type='password'
                                        name='email'
                                        className='form-control'
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className='form-group mb-3'>
                                <button className='btn btn-primary' onClick={(e)=>handleLoginForm(e)}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginComponent
