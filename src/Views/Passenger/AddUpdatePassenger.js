import React, {Component} from 'react';
import PassengerObject from 'components/Atoms/Objects/PassengerObject';
import PassengerForm from 'components/Molecules/Form/PassengerForm';
import { endpoints } from 'endpoints';
import { routes } from 'routes';
import Cookie from 'js-cookie';
import Header from 'components/Orgamisms/Header/Header';
import { Redirect } from "react-router-dom";

const token = Cookie.get("jwt");

class AddUpdatePassenger extends Component {
    
    state = new PassengerObject(); 
    state = {
        error:'',
        isVisible: false,
        status: false
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        if(this.props.match.params.id !== undefined){
              
            fetch(endpoints.passenger +this.props.match.params.id,
            {
                headers: {'Authorization': token}
            })
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

         fetch( endpoints.passenger , {
            method: this.props.match.params.id !== undefined ? "PUT" : "POST",
            headers: {
                'Content-Type':'application/json',
                'Authorization': token
            },
            body: JSON.stringify(this.state)
        })
        .then(response => {
            if(response.status !== 201){
                response.json().then(data => { 
                    this.setState(
                        {error: data.detail, isVisible: true })
                    
                    });
            }else {
                    this.setState({ status: true})
            };  
        }).catch(error => console.log(error));
    }
    
    render() {
        if(this.state.status){
            return <Redirect to={{ pathname: routes.passengers }} />
        }else {
            return (

                <>
                    <Header />
                    <PassengerForm 
                        error={this.state.error}
                        isVisible={this.state.isVisible} 
                        passenger={this.state}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        historyBack={() => this.props.history.goBack()}
                    />     
                </>               

            ); 
        }
    }
}

export default AddUpdatePassenger;
