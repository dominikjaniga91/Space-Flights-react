import React, {Component} from 'react';
import PassengerObject from "./PassengerObject";
import PassengerForm from "../Form/PassengerForm";
import { useHistory } from 'react-router';

class UpdatePassenger extends Component {

    state = new PassengerObject(); 

    componentDidMount(){
        
        if(this.props.match.params.id !== undefined){
              
            fetch('http://localhost:8080/loadPassenger'+this.props.match.params.id)
            .then(response => response.json())
            .then(result =>  {
                console.log(result)
                this.setState(result)
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
            URL = "http://localhost:8080/updatePassenger";
            method = "PUT";
        }else{
            URL = "http://localhost:8080/savePassenger";
            method = "POST";
        }
         fetch(URL, {
            method: method,
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
            }).catch(error => console.log(error));

            this.props.history.push('/listOfPassengers');
    }
    
    
    render() {
        return (
            <PassengerForm 
                passenger={this.state}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                historyBack={() => this.props.history.push('/listOfPassengers')}
            />                    

        ); 
    }
}

export default UpdatePassenger;
