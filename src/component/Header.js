import { Card,CardBody } from "react-bootstrap";

const Header=()=>{
    return(
        <div>
            <Card className="my-2 bg=warning">
                <CardBody>
                <h1 className="text-center my-4">Welcome to Login Page</h1>
                </CardBody>
            </Card>
            
        </div>
    );


}

export default Header;