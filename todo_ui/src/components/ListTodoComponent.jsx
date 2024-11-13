import React, {useEffect, useState} from 'react'
import {completeTodo, deleteTodo, getAllTodos, inCompleteTodo} from "../services/TodoService.jsx";
import {useNavigate} from "react-router-dom"
import {isAdminUser} from "../services/AuthService.jsx";

const ListTodoComponent = () => {
    const [todo, setTodo] = useState([]);
const navigator = useNavigate();
    const isAdmin = isAdminUser();

     useEffect(()=>{
        listodos();
     },[])

    function listodos(){
         getAllTodos().then((response)=>{
             setTodo(response.data);
         }).catch(error=>{
             console.error(error);
         })
    }

    function addNewTodos(){
         navigator('/addtodo');
    }

    function updateTodo(id){
         console.log(id)
        navigator(`/updatetodo/${id}`)
    }

    function removeTodo(id){
         deleteTodo(id).then((response)=>{
             listodos()
         }).catch(error=>{
             console.error(error)
         })
    }

    function markCompleteTodo(id){
         completeTodo(id).then((response)=>{
             listodos()
         }).catch(error=>{
             console.error(error)
         })
    }

    function remarkIncompleteTodo(id){
         inCompleteTodo(id).then((response)=>{
             listodos()
         }).catch(error=>{
             console.error(error)
         })
    }

    return (
        <div className='container '>
            {/*<h2 className='text-center'>To Do -LIST</h2>*/}
            {
                isAdmin &&
                <button className='btn btn-primary mb-2' onClick={addNewTodos}>Add Task</button>

            }
            <div>
                <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todo.map(todo =>
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td className='text-center'>{todo.completed ? 'Yes✅' : 'No❌'}</td>
                            <td className=' p-2 m-2'>
                                {
                                    isAdmin &&
                                    <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                }
                                {
                                    isAdmin &&
                                    <button className='btn btn-danger ms-1' onClick={() => removeTodo(todo.id)}>Delete</button>
                                }

                                <button className='btn btn-primary ms-1' onClick={() => markCompleteTodo(todo.id)}>Complete</button>
                                <button className='btn btn-secondary ms-1' onClick={()=> remarkIncompleteTodo(todo.id)}>In complete</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
              </table>
            </div>
        </div>
    )
}
export default ListTodoComponent
