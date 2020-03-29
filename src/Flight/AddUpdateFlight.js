import React, {Component} from 'react';
import FlightObject from "./FlightObject";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap"; 
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../fontello/css/fontello.css"

class UpdateFlight extends Component {
    
constructor(props) {
    super(props)
    this.state = new FlightObject(); 
    this.loadFlightDetails();
}
    
    loadFlightDetails = event => {
        
        if(this.props.match.params.id !== undefined){
              
            fetch('http://localhost:8080/loadFlight'+this.props.match.params.id)
            .then(response => response.json())
            .then(result =>  {
                console.log(result)
                this.setState(result )
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
            URL = "https://myspacetravel.herokuapp.com/updateFlight";
            method = "PUT";
        }else{
            URL = "https://myspacetravel.herokuapp.com/saveFlight";
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
                console.log(response);
            })
  
            this.props.history.push('/listOfFlights');
    }
    
    render() {
        return (
            <div className="mainFormCenter">
                <Form className="myForm" onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Destination:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="destination"
                               id="destination"
                               value={this.state.destination}
                               onChange={this.handleChange}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Departure:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                               name="startDate"
                               id="startDate"
                               value={this.state.startDate}
                               onChange={this.handleChange}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Arrival:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                               name="finishDate"
                               id="finishDate"
                               value={this.state.finishDate}
                               onChange={this.handleChange}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Plane capacity:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="numberOfSeats"
                               id="numberOfSeats"
                               value={this.state.numberOfSeats}
                               onChange={this.handleChange}
                               required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Ticket price:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="ticketPrice"
                               id="ticketPrice"
                               value={this.state.ticketPrice}
                               onChange={this.handleChange}
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
    }
    
}

export default UpdateFlight;
