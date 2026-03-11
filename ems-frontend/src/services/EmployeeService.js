import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = ()=>{
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee = ()=>{
    return axios.post(REST_API_BASE_URL,employee);
}

export const getEmployees = ()=>{
    return axios.get(REST_API_BASE_URL+'/'+employeeid);
}

export const updateEmployees = ()=>{
    return axios.put(REST_API_BASE_URL,employee);
}
