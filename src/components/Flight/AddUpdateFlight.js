import React, {Component} from 'react';
import FlightObject from "./FlightObject";
import FlightForm from '../Form/FlightForm';
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
            }).catch(error => console.log(error));
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
        .then(response => {
            console.log(response);
        }).catch(error => console.log(error));
  
            this.props.history.push('/listOfFlights');
    }
    
    render() {
        return (
            <FlightForm 
                flight={this.state} 
                onSubmit={this.handleSubmit} 
                onChange={this.handleChange}
            />
        );
    }
}

export default UpdateFlight;
