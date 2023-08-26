import React, {Component} from 'react';
import { Form, Row, Col, Card} from 'react-bootstrap';
class InvoiceForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
            currency : '₹',
            currentDate : '',
            invoiceNumber : '',
            detailOfIssue : '',
            billNo : '',
            billToEmail : '',
            billFromEmail : '',
            notes : '',
            total : '0.00',
            subTotal : '0.00'
        }

        this.state.items =[
            {
                id : 0,
                name : '',
                description : '',
                price : '1.00',
                quantity : 1
            }
        ];
    }
    render(){
        return(
            <Form>
                <Row>
                    <Col md={8} lg={9}>
                        <Card className='p-4 p-xl-5 my-3 my-xl-4'>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default InvoiceForm;