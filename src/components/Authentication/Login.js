import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyButton from '../Button/MyButton';

class Login extends Component {

    state = {
        username: '',
        password: '',
        isAuthenticated: false,
    }

    render(){
        return(

            <div className="mainFormCenter">
                <Form className="myForm" >
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Login:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="destination"
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Password:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="password"
                               name="password"
                               required />
                        </Col>
                    </Form.Group>
                    <MyButton>Login</MyButton>
                </Form>
            </div>

        );
    }
}

export default Login;

