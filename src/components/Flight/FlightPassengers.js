import React, {Component} from 'react';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap"; 
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap"; 

class FlightPassenges extends Component {
    
constructor(props) {
    super(props)
    this.state = {passengerId: '', dataPassenger: [], dataFlight: [] };
    this.passID();
}
    
    //load passenger
    passID = event => {
        
        if(this.props.match.params.id !== undefined){
            
            fetch('http://localhost:8080/flightPassengers'+this.props.match.params.id)
            .then(response => response.json())
            .then(result =>  { 
                console.log(result)
                this.setState({ dataFlight: result })
            }).catch(error => console.log(error));
            
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/allPassengers')
        .then(response => response.json())
        .then(result =>  { 
            console.log(result)
            this.setState({ dataPassenger: result })
        })
        .catch(error => console.log(error));
      }

      deletePassengerFromFlight = (myId) => {

        const params = new URLSearchParams({
            passengerId: myId,
            flightId: this.props.match.params.id
        })

        const url = `http://localhost:8080/deleteFromFlight?${params.toString() }`

        if((window.confirm("Operation is irreversible. Are you sure that you want to continue?"))){

            fetch(url, {
                method: "DELETE" })
            .then(result =>  console.log(result))
            .catch(error => console.log(error));
            
            const items = this.state.dataFlight.filter(item => item.id !== myId);
            this.setState({ dataFlight: items });
        }
    }

    // aktualizacja stanu

    handleChange = (event) => {
        let passengerId = Object.assign({}, this.state.passengerId)
        passengerId = event.target.value;
        this.setState({passengerId});
        
    }

    // zapis do backendu ('bazy danych')
    handleSubmit = event => {
        event.preventDefault();
        const params = new URLSearchParams({
            passengerId: this.state.passengerId,
            flightId: this.props.match.params.id
        })
        const url = `http://localhost:8080/addPassengerToFlight?${params.toString() }`
       
        fetch(url, { method: "PUT" })
        .then(response => console.log(response))
        .catch(error => console.log(error));

        this.props.history.push('/listOfFlights');
    }
    
    render() {
        
        let arrayOfData = this.state.dataPassenger;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                 {data.id}&nbsp;{data.firstName}&nbsp;{data.lastName}&nbsp;{data.sex}&nbsp;{data.country}&nbsp;{data.birthDate}&nbsp;
                </option>
            );

        return (
            <div className="mainForm">
                <h2>List of passengers</h2>
                <Table id="mainTablePasssengerFlights" striped bordered hover size="sm" variant="light" responsive="sm" >

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Sex</th>
                            <th>Country</th>
                            <th>Notes</th>
                            <th>Birth date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.dataFlight.map(passenger => (
                        <tr>
                            <td>{passenger.id}</td>
                            <td>{passenger.firstName}</td>
                            <td>{passenger.lastName}</td>
                            <td>{passenger.sex}</td>
                            <td>{passenger.country}</td>
                            <td>{passenger.notes}</td>
                            <td>{passenger.birthDate}
                            <i onClick={() => this.deletePassengerFromFlight(passenger.id)} className="icon-trash-2" style={{ fontSize: "15px" }} /></td>                        
                        </tr>
                    ))}
                    
                    </tbody>
                </Table>              
                <Form id="selectFlightPassengerForm" onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Col sm="8">
                        <Form.Control as="select" name="flight" value={options.key} onChange={this.handleChange} required>
                        <option value="none">Select passenger</option>
                        {options}
                        </Form.Control>
                        </Col>
                    </Form.Group>

                    <Button className="myLink2" onClick={() => this.props.history.push('/listOfFlights')} variant="primary" type="button"  size="sm">
                        Cancel
                    </Button>&nbsp;
                    <Button variant="primary" type="submit"  size="sm">
                        Save passenger
                    </Button>
                </Form>
                
            </div>
        );
    }
}

export default FlightPassenges;
