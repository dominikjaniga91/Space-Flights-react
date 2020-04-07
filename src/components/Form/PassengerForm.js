import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const FlightForm = ({ passenger, ...props }) => (

    <div className="mainFormCenter">
                <Form className="myForm" {...props}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">First name:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="firstName"
                            id="firstName"
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
                            id="lastName"
                            value={passenger.lastName}
                            {...props}
                            required />
                        </Col>
                    
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="3">Sex:</Form.Label>
                        <Col sm="8">
                        <Form.Control as="select" id="sex" name="sex"  value={passenger.sex} {...props} required>
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
                            id="birthDate"
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
                            id="notes"
                            value={passenger.notes}
                            {...props}
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

export default FlightForm;
