import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const MyForm = ({
        flight,
    ...props }) => (

    <div className="mainFormCenter">
                <Form className="myForm" {...props}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Destination:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="destination"
                               value={flight.destination}
                               {...props}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Departure:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                               name="startDate"
                               value={flight.startDate}
                               {...props}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Arrival:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                               name="finishDate"
                               value={flight.finishDate}
                               {...props}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Plane capacity:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="numberOfSeats"
                               value={flight.numberOfSeats}
                               {...props}
                               required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Ticket price:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="ticketPrice"
                               id="ticketPrice"
                               value={flight.ticketPrice}
                               {...props}
                               required />
                        </Col>
                    </Form.Group>
                    <Button className="myLink" onClick={() => this.props.history.push('/listOfFlights')} variant="primary" type="button"  size="sm">
                        Cancel
                    </Button>&nbsp;
                    <Button className="myLink" variant="primary"  type="submit"  size="sm">
                        Save flight
                    </Button>
                </Form>
            </div>

);

export default MyForm;
