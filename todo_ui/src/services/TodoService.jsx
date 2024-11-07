import axios from 'axios';
const BASE_REST_API_URL = 'http://localhost:8080/api/todos';
// export function getALlTodos(){
//     return axios.get(BASE_REST_API_URL);
// }
export const getAllTodos = () => axios.get(BASE_REST_API_URL);
