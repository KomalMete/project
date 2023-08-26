import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Registration.css'

const Registration=()=>{
    return(
        <div className='register1'>
             <h1 className='text-center my-6'>Registration Form</h1>
            <Form className='card col-md-8 offset-md-2 offset-md-2'>
      
                <Form.Group  className="mb-3" controlId="formGridFirstName">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter firstname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="Enter lastname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select placeholder="Select gender">
                <option>Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                </Form.Select>
                </Form.Group>
      
                <Form.Group  className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formGridMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile number" />
                </Form.Group>

                <Form.Group  className="mb-3" controlId="formGridBirthDate">
                <Form.Label>BirthDate</Form.Label>
                <Form.Control type="date" placeholder="Enter birthdate" />
                </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
    </Form>
    </div>
  );
}

export default Registration;