import React, { useEffect, useState } from 'react';
import TestService from '../services/TestService';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddTestComponent=()=>{

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    
    const navigate = useNavigate();
    const {id} = useParams();
        const saveOrUpdateTest=(e) =>{

            e.preventDefault();
            const test = {firstName, lastName, email}

                if(id){

                    TestService.updateTest(id, test).then((response) =>{
                        console.log(response.data)
    
                        navigate.push('/tests');
                    }).catch(error => {
                        console.log(error)
                    })

                }else{
                    TestService.createTest(test).then((response) =>{
                        console.log(response.data)
    
                        navigate.push('/tests');
                    }).catch(error => {
                        console.log(error)
                    })
                }

                
        }

        useEffect(() => {
            TestService.getTestById(id).then((response) =>{
                setName(response.data.name)
                setCost(response.data.cost)
                
            }).catch(error => {
                console.log(error)
            })
        }, [])

        const title =()=>{

                if(id){
                    return <h3 className='text-center'>Update Test</h3>
                }else{
                    return <h3 className='text-center'>Add Test</h3>
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
                                <label className='form-label'>Test Name</label>
                                <input 
                                type="text"
                                placeholder="Enter test name"
                                name="name"
                                className="form-control"
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}/>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Test Cost</label>
                                <input 
                                type="text"
                                placeholder="Enter test cost"
                                name="cost"
                                className="form-control"
                                value={cost}
                                onChange={(e)=>{setCost(e.target.value)}}/>
                            </div>


                            <button className="btn btn-success" onClick={(e) =>saveOrUpdateTest(e)}>Submit</button>

                            <Link to="/addtest" className="btn btn-danger ml-2">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTestComponent;