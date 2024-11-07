import React, {useEffect, useState} from 'react'
import {getAllTodos} from "../services/TodoService.jsx";

const ListTodoComponent = () => {
    const [todo, setTodo] = useState([]);

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

    return (
        <div className='container'>
            <h2 className='text-center'>List Of 2-Do</h2>
            <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todo.map(todo =>
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed? 'Yes' : 'No'}</td>
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
