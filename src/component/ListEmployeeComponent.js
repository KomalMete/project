import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import EmployeeService from '../services/EmployeeService';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import './ListEmployeeComponent.css';
import { Link } from 'react-router-dom';
const ListEmployeeComponent=()=>{

    const [employees, setEmployees ] = useState([])

    useEffect(()=>{

        getAllEmployees();
    },[])

        const getAllEmployees =()=>{
            EmployeeService.getAllEmployees().then((response)=>{
                setEmployees(response.data)
                console.log(response.data)
            }).catch(error =>{
                console.log(error);
            })
        }

    const deleteEmployee=(employeeId)=>{

        EmployeeService.deleteEmployee(employeeId).then((response)=>{
           getAllEmployees(); 
            
        }).catch(error =>{
            console.log(error);
        })
    }
    return(
        
        <div className='container'>
            <HeaderComponent/>
                <h2 className='text-center'>List Of Employees</h2>
                <Link to = "/add-employee" className='btn btn-primary mb-2' >Add Employee</Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>Employee Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email Id</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                <tr key={employee._id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                    </td>

                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                    </td>
                                    </tr>)
                                    
                        }

                        
                    </tbody>
                </table>
           
        </div>
        
    );

}

export default ListEmployeeComponent;