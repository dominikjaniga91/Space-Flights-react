import React, {Component} from 'react';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap"; 
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap"; 
import MyButton from '../Button/MyButton';
import FlightTable from '../Flight/Table/FlightTable';

class PassengerFlights extends Component {
    
constructor(props) {
    super(props)
    this.state = {flightId: '', dataFlightPassenger: [], dataFlight: [] };
    this.passID();
}
    
    //load passenger
    passID = () => {
        
        if(this.props.match.params.id !== undefined){
            
            fetch('https://myspacetravel.herokuapp.com/passengerFlights'+this.props.match.params.id)
                .then(response => response.json())
                .then(result =>  { 
                    console.log(result)
                    this.setState({ dataFlightPassenger: result })
             }).catch(error => console.log(error));
            
        }
    }

    componentDidMount() {
        fetch('https://myspacetravel.herokuapp.com/allFlights')
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
        const url = `https://myspacetravel.herokuapp.com/deleteFromPassenger?${params.toString() }`
      
        if((window.confirm("Operation is irreversible. Are you sure that you want to continue?"))){
            fetch(url, {
                method: "DELETE" })
            .then(result => console.log(result))
            .catch(error => console.log(error));

            const items = this.state.dataFlightPassenger.filter(item => item.id !== myId);
            this.setState({ dataFlightPassenger: items });
        }
    }

    // aktualizacja stanu

    handleChange = (event) => {
        let flightId = Object.assign({}, this.state.flightId)
        flightId = event.target.value;
        this.setState({flightId});
        
    }

    // zapis do backendu ('bazy danych')
    handleSubmit = event => {
        event.preventDefault();

        const params = new URLSearchParams({
            passengerId: this.props.match.params.id,
            flightId: this.state.flightId
        })
        const url = `http://localhost:8080/addFlightToPassenger?${params.toString()}`

        fetch(url)
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));

        this.props.history.push('/passengers');
    }
    
    render() {
        
        let arrayOfData = this.state.dataFlight;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                 {data.id}&nbsp;{data.destination}&nbsp;{data.startDate}&nbsp;{data.finishDate}&nbsp;{data.numberOfSeats}&nbsp;{data.ticketPrice}&nbsp;
                </option>
            );

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
                        <tr>
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
                <FlightTable 
                    dataFlight={this.state.dataFlight}
                    deleteFlight={this.deleteFlight}
                />                
                <Form id="selectFlightPassengerForm" onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Col sm="8">
                        <Form.Control as="select" name="flight" value={options.key} onChange={this.handleChange} required>
                            <option value="none">Select flight</option>
                            {options}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                
                </Form>
                
            </div>
        );
    }
}

export default PassengerFlights;

