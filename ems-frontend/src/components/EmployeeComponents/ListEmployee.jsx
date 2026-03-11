import React, { useEffect, useState } from 'react'
import { listEmployees } from '../../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function ListEmployee() {
// const data=[
//     {
//     "id":1,
//     "firstname":"ram",
//     "lastname":"gouda",
//     "email":"ram@gmail.com"
// },
// {
//     "id":2,
//     "firstname":"lakshmi",
//     "lastname":"sita",
//     "email":"sita@gmail.com"
// },
// {
//     "id":3,
//     "firstname":"mahmood",
//     "lastname":"patel",
//     "email":"md@gmail.com"
// }
// ]

    const [empdata,setempdata] = useState([])
    const navigate = useNavigate();
    
    useEffect(
        ()=>{
            getAllEmp();
        },[]
    )

    function getAllEmp(){
            listEmployees().then( 
                    (response)=>{
                        setempdata(response.data)
                    }
                    )
                        .catch(
                            err=> {
                                console.error(err);
                            })
    }
    const addEmp=()=>{
            navigate('/addemployee')
    }

    const updateEmployee=(id)=>{
            navigate(`/updateemployee/${id}`);
    }

    const deleteEmployee=(id)=>{
        console.log(id)
            axios.delete('http://localhost:8080/api/employees/'+id)
                    .then((res)=>{
                        console.log(res)
                        getAllEmp()})
                    .catch((err)=> console.log(err));
    }



  return (
    <>
    <h2 className='text-center'>List of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addEmp}>Add Employee</button>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>employee Id</th>
                <th>employee FirstName</th>
                <th>employee LastName</th>
                <th>Employee Email</th>
                <th>Actions</th>

            </tr>
        </thead>
        <tbody>
            {
                empdata.map(
                    (emp)=>{
                        return <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.firstname}</td>
                                        <td>{emp.lastname}</td>
                                        <td>{emp.email}</td>
                                        <td>
                                            <button className='btn btn-info' onClick={()=>updateEmployee(emp.id)} >Update</button>
                                            <button className='btn btn-danger' onClick={()=>deleteEmployee(emp.id)} style={{
                                                margin:'5px'
                                            }}>Delete</button>
                                        </td>
                                 </tr>
                    }
                )
            }
        </tbody>
    </table>

    </>
  )
}

export default ListEmployee