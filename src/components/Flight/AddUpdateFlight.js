import React, {Component} from 'react';
import FlightObject from "./FlightObject";
import FlightForm from '../Form/FlightForm';
import "../../Assets/fontello/css/fontello.css"
import { endpoints } from '../../endpoints';
import { routes } from '../../routes';
import Cookie from 'js-cookie';

const token = Cookie.get("jwt");

class UpdateFlight extends Component {
    
constructor(props) {
    super(props)
    this.state = new FlightObject(); 
};
    
    componentDidMount() {
       
        if(this.props.match.params.id !== undefined){
              
            fetch(endpoints.flight + this.props.match.params.id,
            {
                headers: {'Authorization': token}
            })
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
    
         fetch(endpoints.flight, {
            method: this.props.match.params.id !== undefined ? "PUT" : "POST",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': token
            },
            body: JSON.stringify(this.state)
        })
        .then(response => {
            console.log(response);
        }).catch(error => console.log(error));
  
            this.props.history.push(routes.flights);
    }
    
    render() {
        return (
            <FlightForm 
                flight={this.state} 
                onSubmit={this.handleSubmit} 
                onChange={this.handleChange}
                historyBack={() => this.props.history.push(routes.flights)}
            />
        );
    }
}

export default UpdateFlight;
