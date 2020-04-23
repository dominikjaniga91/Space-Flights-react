import React, {Component} from 'react';
import MyButton from '../Button/MyButton';
import AvailableFlightsTable from './Table/AvailableFlightsTable';
import PassengerFlightsTable from './Table/PassengerFlightsTable';
import styles from './PassengerFlights.module.scss'

const url = "http://localhost:8080/passenger/flights/";

class PassengerFlights extends Component {
    
constructor(props) {
    super(props)
    this.state = {flightsId: [], dataFlightPassenger: [], dataFlight: [] };
    this.passID();
}
    
    //load passenger's flights
    passID = () => {
        
        if(this.props.match.params.id !== undefined){
            
            fetch(url + this.props.match.params.id)
                .then(response => response.json())
                .then(result =>  { 
                    console.log(result)
                    this.setState({ dataFlightPassenger: result })
             }).catch(error => console.log(error));
            
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/flights')
            .then(response => response.json())
            .then(result =>  { 
                console.log(result)
                this.setState({ dataFlight: result })
            }).catch(error => console.log(error));
    }

    deleteFlightFromPassenger = (myId) => {

        if((window.confirm(" Are you sure ?"))){
            fetch(url + this.props.match.params.id + "/" + myId , {
                method: "DELETE" })
            .then(result => console.log(result))
            .catch(error => console.log(error));

            const items = this.state.dataFlightPassenger.filter(item => item.id !== myId);
            this.setState({ dataFlightPassenger: items });
        }
    }

    // zapis do backendu
    saveFlights = event => {
        event.preventDefault();
        fetch(url + this.props.match.params.id, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(this.state.flightsId)
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));

        this.props.history.push('/listOfPassengers');
    }

    addToFlight = (flightId) => {
        
        const newData = this.state.dataFlight.filter( flight => flight.id === flightId);

        this.setState(prevState => ({ 
            dataFlightPassenger: [...prevState.dataFlightPassenger, ...newData],
            flightsId: [...prevState.flightsId, newData[0].id],
        }));
    }
    
    render() {
        
        return (
            <>
                <div className={styles.table}>
                    <PassengerFlightsTable 
                        dataFlightPassenger={this.state.dataFlightPassenger}
                        deleteFlightFromPassenger ={this.deleteFlightFromPassenger}
                    />
                    <AvailableFlightsTable 
                        dataFlight={this.state.dataFlight}
                        addToFlight={this.addToFlight}
                    />               
                    
                </div>
                <div className={styles.buttons}>
                    <MyButton onClick={() => this.props.history.push('/listOfPassengers')}>Cancel</MyButton>
                        &nbsp;
                    <MyButton onClick={this.saveFlights}>Save</MyButton>
                </div>
            </>
        );
    }
}

export default PassengerFlights;

