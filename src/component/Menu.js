import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Menu=()=>{
    return(
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/addtest">Add Test</Link>
          </li>
          <li>
            <Link to="/addemployee">Add Employee</Link>
          </li>
          <li>
            <Link to="/emp">Employee</Link>
          </li>
          <li>
            <Link to="/bill">Billing</Link>
          </li>
          <li>
            <Link to="/test">List of Tests</Link>
          </li>
        </ul>
      </nav>
  

            
    );
}

export default Menu;