import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddEmployeeComponent=()=>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
        const saveOrUpdateEmployee=(e) =>{

            e.preventDefault();
            const employee = {firstName, lastName, email}

                if(id){

                    EmployeeService.updateEmployee(id, employee).then((response) =>{
                        console.log(response.data)
    
                        navigate.push('/employees');
                    }).catch(error => {
                        console.log(error)
                    })

                }else{
                    EmployeeService.createEmployee(employee).then((response) =>{
                        console.log(response.data)
    
                        navigate.push('/employees');
                    }).catch(error => {
                        console.log(error)
                    })
                }

                
        }

        useEffect(() => {
            EmployeeService.getEmployeeById(id).then((response) =>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch(error => {
                console.log(error)
            })
        }, [])

        const title =()=>{

                if(id){
                    return <h3 className='text-center'>Update Employee</h3>
                }else{
                    return <h3 className='text-center'>Add Employee</h3>
                }
        }
    return(
        <div className='container'>
            <br/><br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                            title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input 
                                type="text"
                                placeholder="Enter first name"
                                name="firstName"
                                className="form-control"
                                value={firstName}
                                onChange={(e)=>{setFirstName(e.target.value)}}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input 
                                type="text"
                                placeholder="Enter last name"
                                name="lastName"
                                className="form-control"
                                value={lastName}
                                onChange={(e)=>{setLastName(e.target.value)}}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email Id</label>
                                <input 
                                type="email"
                                placeholder="Enter email id"
                                name="email"
                                className="form-control"
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>

                            <button className="btn btn-success" onClick={(e) =>saveOrUpdateEmployee(e)}>Submit</button>

                            <Link to="/addemployee" className="btn btn-danger ml-2">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;