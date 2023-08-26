import React from 'react';
import {Form, Row,Col,FormGroup } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import './BillingComponent.css';
import FooterBill from './FooterBill';

const BillingComponent=( {patientName, patientAddress} )=>{
    return(
        <div>
            <Container className='cont'>
                <Row>
                    <Col>
                       <img src="doctorlogo.png" className='img1'></img>
                    </Col>
                    <Col>
                    <h6 className='text-right my-6'>Invoice</h6>
                    <h6 className='text-right my-6'>Date</h6>
                    </Col>
                 </Row>
                 <Container>
                    <Form>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                               <Form.Group  className="mb-3" controlId="formGridFirstName">
                                
                                    <h6>Patient Id</h6>
                                    <h6>Patient Name</h6>
                                    <h6>Patient Address</h6>
                                    <h6>Patient EmailId</h6>
                                    <h6>Patient PhoneNo</h6>
                               </Form.Group>
                            </Col>
                        </Row>
                        
                        
                        <table className="table table-bordered table-striped">
                    <thead>
                        <th>Test Id</th>
                        <th>Test Name</th>
                        
                        <th>Price</th>
                        <th>Total</th>
                    </thead>

                   {/*  <tbody>
                        {
                            employees.map(
                                employee =>
                                <tr key={employee._id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                </tr>)
                                    
                        }

                        
                    </tbody> */}
                        </table>
                    </Form>
                 </Container>
            
        <Form className='addcontent'>
        
        </Form>

        
        </Container>
        <FooterBill />
    </div>
    );
}

export default BillingComponent;