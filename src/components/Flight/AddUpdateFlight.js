import React, {Component} from 'react';
import FlightObject from "./FlightObject";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap"; 
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import MyForm from '../Form/MyForm';
import "../../assets/fontello/css/fontello.css"

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
            URL = "http://localhost:8080/updateFlight";
            method = "PUT";
        }else{
            URL = "http://localhost:8080/saveFlight";
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
            <MyForm 
                flight={this.state} 
                onSubmit={this.handleSubmit} 
                onChange={this.handleChange}
            />
        );
    }
}

export default UpdateFlight;
