import React, { Fragment } from 'react';
import {Form, FormGroup } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import './AddTest.css';
const AddTest=()=>{

    return (
    <div className="add">
            <h1 className='text-center my-3'>Test Details</h1>
        <Form className='addcontent'>
            <FormGroup>
                <label>Test Id</label><br/>
                <input type='text'
                 placeholder='Enter id' 
                 name="testid" 
                 id="testid" />
            </FormGroup>

            <FormGroup>
                <label>Test Name</label><br/>
                <input type='text'
                 placeholder='Enter testname' 
                 name="testname" 
                 id="testname" />
            </FormGroup>

            <FormGroup>
                    <label>Test description</label><br/>
                    <textarea rows = "5" cols = "50" name = "description" placeholder='Enter testdetails' />
            </FormGroup>

            <FormGroup>
                <label>Test Cost</label><br/>
                <input type='text'
                 placeholder='Enter cost' 
                 name="testcost" 
                 id="testcost" />
            </FormGroup>

            <Container className='text-center'>
                <Button color="success">Add Test</Button>
                <Button color="warning ml-2">Clear</Button>
            </Container>
        </Form>

        

    </div>
    );
}

export default AddTest;