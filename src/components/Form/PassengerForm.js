import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyButton from '../Button/MyButton';


const FlightForm = ({ passenger, historyBack, ...props }) => (

    <div className="mainFormCenter">
                <Form className="myForm" {...props}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">First name:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="firstName"
                            value={passenger.firstName}
                            {...props}
                            required />
                        </Col>
                    
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Last name:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="lastName"
                            value={passenger.lastName}
                            {...props}
                            required />
                        </Col>
                    
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Sex:</Form.Label>
                        <Col sm="8">
                        <Form.Control as="select" name="sex"  value={passenger.sex} {...props} required>
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
                            value={passenger.country}
                            {...props}
                            required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Birth date:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                            name="birthDate"
                            value={passenger.birthDate}
                            {...props}
                            required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Notes:</Form.Label>
                        <Col sm="8">
                        <Form.Control as="textarea" rows="3" type="text"
                            name="notes"
                            value={passenger.notes}
                            {...props}
                                />
                        </Col>
                    </Form.Group>
                    <MyButton onClick={historyBack} >Cancel</MyButton>
                    &nbsp;
                    <MyButton>Save</MyButton>
                </Form>
            </div>

);

export default FlightForm;
