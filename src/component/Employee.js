import React from "react";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
const Employee=()=>{

    return(
        <div>
           
          <Container>
            <Row>
                <Sidebar />
            </Row>
          </Container>
        </div>
    )
}

export default Employee;