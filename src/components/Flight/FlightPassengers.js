import React, {Component} from 'react';
import FlightPassengersTable from './Table/FlightPassengersTable';
import AvailablePassengersTable from './Table/AvailablePassengersTable';
import styles from './FlightPassengers.module.scss';
import MyButton from '../Button/MyButton';
import { endpoints } from '../../endpoints';
import { routes } from '../../routes';
import Cookie from 'js-cookie';
import Header from '../Orgamisms/Header/Header';

const token = Cookie.get("jwt");

class FlightPassenges extends Component {
    
constructor(props) {
    super(props)
    this.state = {passengers: [], dataPassenger: [], dataFlight: [] };
    this.loadFlightsPassengers();
}
    
    //load flights passengers
    loadFlightsPassengers = () => {
        
        if(this.props.match.params.id !== undefined){
            
            fetch(endpoints.flightPassengers + this.props.match.params.id,
            {
                headers: {'Authorization': token}
            })
            .then(response => response.json())
            .then(result =>  { 
                console.log(result)
                this.setState({ dataFlight: result })
            }).catch(error => console.log(error));
            
        }
    }

    componentDidMount() {
        
        fetch(endpoints.passengers,
        {
            headers: {'Authorization': token}
        })
        .then(response => response.json())
        .then(result =>  { 
            console.log(result)
            this.setState({ dataPassenger: result })
        })
        .catch(error => console.log(error));
      }

    deletePassengerFromFlight = (myId) => {
        
        if((window.confirm("Are you sure  ?"))){

            fetch(endpoints.flightPassengers + this.props.match.params.id + "/" + myId, {
                method: "DELETE",
                headers: {'Authorization': token} 
            })
            .then(result =>  console.log(result))
            .catch(error => console.log(error));
            
            const items = this.state.dataFlight.filter(item => item.id !== myId);
            this.setState({ dataFlight: items });
        }
    }

    addToFlight = (passengerId) => {
        
        const newData = this.state.dataPassenger.filter( passenger => passenger.id === passengerId);

        this.setState(prevState => ({ 
            dataFlight: [...prevState.dataFlight, ...newData],
            passengers: [...prevState.passengers, newData[0].id],
        }));
    }

    // zapis do backendu ('bazy danych')
    savePassengers = event => {
        event.preventDefault();
        
        fetch(endpoints.flightPassengers + this.props.match.params.id, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization': token
            },
            body: JSON.stringify(this.state.passengers)
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));

        this.props.history.push(routes.flights);
    }
    
    render() {
    
        return (
            <>
            <Header />
                <div className={styles.table}>
                    <FlightPassengersTable 
                        dataFlight ={this.state.dataFlight}
                        deletePassengerFromFlight = {this.deletePassengerFromFlight}
                    /> 
                     <AvailablePassengersTable 
                        dataPassenger={this.state.dataPassenger}
                        addToFlight={this.addToFlight}
                    />   
                </div>
                <div className={styles.buttons}>
                    <MyButton onClick={() => this.props.history.push(routes.flights)}>Cancel</MyButton>
                        &nbsp;
                    <MyButton onClick={this.savePassengers}>Save</MyButton>
                </div>
            </>
        );
    }
}

export default FlightPassenges;
