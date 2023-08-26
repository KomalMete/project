
import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import TestService from '../services/TestService';
import HeaderComponent from './HeaderComponent';

import { Link } from 'react-router-dom';


const ListTestComponent=()=>{

    const [tests, setTest ] = useState([])

    useEffect(()=>{

        getAllTest();
    },[])

        const getAllTest =()=>{
            TestService.getAllTest().then((response)=>{
                setTest(response.data)
                console.log(response.data)
            }).catch(error =>{
                console.log(error);
            })
        }

    const deleteTest=(TestId)=>{

        TestService.deleteTest(TestId).then((response)=>{
           getAllTest(); 
            
        }).catch(error =>{
            console.log(error);
        })
    }


    return(
        <div className='container'>
            <HeaderComponent/>
                <h2 className='text-center'>List Of Tests</h2>
                <Link to = "/add-test" className='btn btn-primary mb-2' >Add Test</Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>Test Id</th>
                        <th>Test Name</th>
                        <th>Test Cost</th>
                        
                    </thead>
                    <tbody>
                        {
                            tests.map(
                                test =>
                                <tr key={test._id}>
                                    <td>{test.id}</td>
                                    <td>{test.name}</td>
                                    <td>{test.cost}</td>
                                   
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-test/${test.id}`}>Update</Link>
                                    </td>

                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteTest(test.id)}>Delete</button>
                                    </td>
                                    </tr>)
                                    
                        }

                        
                    </tbody>
                </table>
           
        </div>
    );
}

export default ListTestComponent;