import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import BasicExample from './component/BasicExample';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './component/Registration';
import {BrowserRouter as Router, Route, Routes, Switch, BrowserRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';

import AddTest from './component/AddTest';
import {Row, Col, Container } from 'reactstrap';
import Menu from './component/Menu';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import AddEmployeeComponent from './component/AddEmployeeComponent';
import Employee from './component/Employee';
import Sidebar from './component/Sidebar';
import InvoiceForm from './component/InvoiceForm';
import BillingComponent from './component/BillingComponent';
import ListTestComponent from './component/ListTestComponent';
function App() {

  return (
    <div>
        <BrowserRouter>
          <Container>
          <BasicExample/>
          <BillingComponent />
          <Row>
              <Col md={4}>
                  <Menu/>
                 
              </Col>
              
              <Col md={4}>
                  
              <Routes>
                <Route exact path="/" element={<Home />} />
                
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Registration />} />
                <Route exact path="/addtest" element={<AddTest />} />
                <Route exact path="/addemployee" element={<ListEmployeeComponent />} />
                <Route exact path="/add-employee" element={<AddEmployeeComponent />} />
                <Route exact path="/edit-employee/:id" element={<AddEmployeeComponent />} />
                <Route exact path="/emp" element={<Employee />} />
                <Route exact path="/test" element={<ListTestComponent />} />
                
      </Routes>
                  
              </Col>
          </Row>
         </Container>
      </BrowserRouter>
          
     </div>
  );
}

export default App;
