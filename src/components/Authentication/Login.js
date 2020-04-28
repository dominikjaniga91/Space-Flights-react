import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyButton from '../Button/MyButton';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        username: '',
        password: '',
        isAuthenticated: false,
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
            console.log(token)
            if(token !== null){
                sessionStorage.setItem("jwt", token);
                this.setState({isAuthenticated: true});
            }
        })
        .catch(error => console.log(error));

    }
                  
    render(){

        if(this.state.isAuthenticated === true) {
            return <Redirect to={'/listOfFlights'} />
        } else {

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
}

export default Login;

