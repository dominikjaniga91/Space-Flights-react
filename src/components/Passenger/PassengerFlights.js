import React, {Component} from 'react';
import { Table } from "react-bootstrap"; 
import MyButton from '../Button/MyButton';
import PassengerFlightsTable from './Table/PassengerFlightsTable';

class PassengerFlights extends Component {
    
constructor(props) {
    super(props)
    this.state = {flightsId: [], dataFlightPassenger: [], dataFlight: [] };
    this.passID();
}
    
    //load passenger's flights
    passID = () => {
        
        if(this.props.match.params.id !== undefined){
            
            fetch('http://localhost:8080/passengerFlights'+this.props.match.params.id)
                .then(response => response.json())
                .then(result =>  { 
                    console.log(result)
                    this.setState({ dataFlightPassenger: result })
             }).catch(error => console.log(error));
            
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/allFlights')
            .then(response => response.json())
            .then(result =>  { 
                console.log(result)
                this.setState({ dataFlight: result })
            }).catch(error => console.log(error));
    }

    deletePassengerFromFlight = (myId) => {

        const params = new URLSearchParams({
            passengerId: this.props.match.params.id,
            flightId: myId
        })
        const url = `http://localhost:8080/deleteFromPassenger?${params.toString() }`
      
        if((window.confirm("Operation is irreversible. Are you sure that you want to continue?"))){
            fetch(url, {
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

        const params = new URLSearchParams({
            passengerId: this.props.match.params.id
        })
        const url = `http://localhost:8080/addFlightToPassenger?${params.toString()}`

        fetch(url, {
            method: 'POST',
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
            <div className="mainForm">
                <h2>List of passenger's flights</h2>
                <Table id="mainTablePasssengerFlights" striped bordered hover size="sm" variant="light" responsive="sm" >
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Destination</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Plane capacity</th>
                        <th>Ticket price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.dataFlightPassenger.map(flight => (
                        <tr key={flight.id}>
                            <td>{flight.id}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.startDate}</td>
                            <td>{flight.finishDate}</td>
                            <td>{flight.numberOfSeats}</td>
                            <td>{flight.ticketPrice}
                            <i onClick={() => this.deletePassengerFromFlight(flight.id)} className="icon-trash-2" style={{ fontSize: "15px" }} /></td>                        
                        </tr>
                    ))}
                    
                    </tbody>
                </Table>
                <PassengerFlightsTable 
                    dataFlight={this.state.dataFlight}
                    addToFlight={this.addToFlight}
                />               
                <MyButton onClick={() => this.props.history.push('/listOfPassengers')}>Cancel</MyButton>
                    &nbsp;
                <MyButton onClick={this.saveFlights}>Save</MyButton>
            </div>
        );
    }
}

export default PassengerFlights;

