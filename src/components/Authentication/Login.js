import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyButton from '../Button/MyButton';
import Cookie from 'js-cookie';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = event => {

        const newValue = event.target.value;
        const fieldName = event.target.name;

        this.setState({ [fieldName]:newValue  })

    };

    handleSubmit = event => {
        event.preventDefault();
        const user = {username: this.state.username, password: this.state.password };
        
        fetch('http://localhost:8080/login',{
            method: "POST",
            body: JSON.stringify(user)
        })
        .then(response => {
            const token = response.headers.get('Authorization');
            console.log(token);
            if(token !== null){
                Cookie.set("isAuthenticated", true);
                Cookie.set("jwt", token);
                // localStorage.setItem("isAuthenticated", true);
                // localStorage.setItem("jwt", token);
                
            }
        })
        .catch(error => console.log(error));

    }
                  
    render(){

        return(

            <div className="mainFormCenter">
                <Form className="myForm" onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Login:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="username"
                            onChange={this.handleChange}
                            required />
                        </Col>
                    
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Password:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="password"
                            name="password"
                            onChange={this.handleChange}
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

