import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function AddEmployee() {
    const navigate = useNavigate();
    const [error,setError] = useState({
        firstname:'',
        lastname:'',
        email:''
    });

    const[data,setdata] = useState({
        firstname:'',
        lastname:'',
        email:''
    })

    const[updatedata,setupdate]= useState();

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setdata({...data,[name]:value})

    }

    const validate=()=>{
        let valid =true;
        const err = {...error};

        if(data.firstname.trim()){
            err.firstname=''
        }else{
            valid = false;
            err.firstname=' first name is empty'
        }

        if(data.lastname.trim()){
            err.lastname=''
        }else{
            valid = false;
            err.lastname=' first name is empty'
        }

        if(data.email.trim()){
            err.email=''
        }else{
            valid = false;
            err.email=' first name is empty'
        }

        setError(err)
        return valid;

    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        
        

         if(validate()){
                console.log(updatedata);
            if(id){
                 axios.put('http://localhost:8080/api/employees',updatedata)
                    .then( (response)=>console.log(response.data))
                    .catch( (error)=>console.error(error))

                navigate('/') ;

            }else{
                console.log('new'+data);
                   //creating new Employee
                axios.post('http://localhost:8080/api/employees',data)
                        .then( (response)=>console.log(response.data))
                        .catch( (error)=>console.error(error))

                navigate('/') 

            }
         

        }else{
            console.log(error)
        }

              

    }

    //updating employee
     const {id}=useParams();
        
    //  function pagetitle(){
    //     if(){

    //     }
    //  }
        useEffect(
            ()=>{
                if(id){
                    axios.get('http://localhost:8080/api/employees/'+id)
                            .then(
                                (response)=>{
                                    
                                    const {id,...empwithoutid} = response.data
                                    // console.log("without id: "+empwithoutid)
                                    // console.log(response.data)

                                    // setdata(response.data)
                                    setdata(empwithoutid)
                                    setupdate(response.data)

                                }
                            )
                            .catch((err)=>{
                                console.error(err)
                            })
                }

            },[id]
        )

  return (
    <div className='container'>
        <br /><br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {!id && <h2 className='text-center'>Add Employee</h2>}
                {id && <h2 className='text-center'>Update Employee</h2>}  
                    <div className='card-body'>
                        <form onSubmit={handleSubmit} >
                            <div className='form-group mb-2'>
                                <label className='form-label'>First name:</label>
                                <input type="text" placeholder='First name' name='firstname' value={data.firstname} className={`form-control ${error.firstname?'is-invalid':''}`} onChange={handleChange} />

                                    {error.firstname && <div className='invalid-feedback'> {error.firstname}</div>}

                            </div>
                             <div className='form-group mb-2'>
                                <label className='form-label'>Last name:</label>
                                <input type="text" placeholder='Last name' name='lastname' value={data.lastname} className={`form-control ${error.lastname?'is-invalid':''}`} onChange={handleChange} />

                                {error.lastname && <div className='invalid-feedback'> {error.lastname}</div>}


                            </div>
                             <div className='form-group mb-2'>
                                <label className='form-label'>Email id:</label>
                                <input type="email" placeholder='Email Id ' name='email' value={data.email} className={`form-control ${error.email?'is-invalid':''}`} onChange={handleChange} />

                                {error.email && <div className='invalid-feedback'> {error.email}</div>}

                            </div>
                                {/* <input type="submit" value="Add Employee" /> */}
                                <button type="submit" className='btn btn-dark'>Submit</button>


                        </form>
                    </div>


            </div>

        </div>

       

    </div>
  )
}

export default AddEmployee