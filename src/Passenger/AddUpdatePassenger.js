import React, {Component} from 'react';
import PassengerObject from "./PassengerObject";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap"; 
import { Button } from "react-bootstrap";


class UpdatePassenger extends Component {
    
constructor(props) {
    super(props)
    this.state = new PassengerObject(); 
    this.loadPassengerDetails();
}


    loadPassengerDetails = event => {
        
        if(this.props.match.params.id !== undefined){
              
            fetch('https://myspacetravel.herokuapp.com/loadPassenger'+this.props.match.params.id)
            .then(response => response.json())
            .then(result =>  {
                console.log(result)
                this.setState(result)
            });

        }
    }

    
    handleChange = event => {
        const newValue = event.target.type === 'number'
                          ? parseInt(event.target.value)
                          : event.target.value;
        const fieldName = event.target.name; 
        const updatedState = { [fieldName]:newValue}; 
        this.setState( updatedState);
    }

    handleSubmit = event => {
        event.preventDefault();

        let URL
        let method
        if(this.props.match.params.id !== undefined){
            URL = "https://myspacetravel.herokuapp.com/updatePassenger";
            method = "PUT";
        }else{
            URL = "https://myspacetravel.herokuapp.com/savePassenger";
            method = "POST";
        }
         fetch(URL, {
            method: method,
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(response => {
                console.log("New passenger added do database");
                console.log(response);
            })

            this.props.history.push('/listOfPassengers');
    }
    
    
    render() {
        return (
            <div className="mainFormCenter">                        
                <Form className="myForm" onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">First name:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="firstName"
                            id="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            required />
                        </Col>
                    
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Last name:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="lastName"
                            id="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            required />
                        </Col>
                    
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Sex:</Form.Label>
                        <Col sm="8">
                        <Form.Control as="select" id="sex" name="sex"  value={this.state.sex} onChange={this.handleChange} required>
                            <option defaultValue value="none">Select</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Country:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="country"
                            id="country"
                            value={this.state.country}
                            onChange={this.handleChange}
                            required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Birth date:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                            name="birthDate"
                            id="birthDate"
                            value={this.state.birthDate}
                            onChange={this.handleChange}
                            required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Notes:</Form.Label>
                        <Col sm="8">
                        <Form.Control as="textarea" rows="3" type="text"
                            name="notes"
                            id="notes"
                            value={this.state.notes}
                            onChange={this.handleChange}
                                />
                        </Col>
                    </Form.Group>
                    <Button className="myLink" onClick={() => this.props.history.push('/listOfPassengers')} variant="primary" type="button"  size="sm">
                        Cancel
                    </Button>&nbsp;
                    <Button variant="primary" type="submit"  size="sm">
                        Save passenger
                    </Button>
                </Form>
            </div>
        );
       
    }
}

export default UpdatePassenger;
