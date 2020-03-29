import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import { Navbar} from "react-bootstrap";
import { Nav} from "react-bootstrap";
import { Route } from "react-router-dom";
import Home from "./Home";
import ListOfFlights from "./Flight/ListOfFlights";
import ListOfPassengers from "./Passenger/ListOfPassengers";
import AddUpdatePassenger from "./Passenger/AddUpdatePassenger";
import AddUpdateFlight from "./Flight/AddUpdateFlight";
import "./fontello/css/fontello.css"
import PassengerFlights from "./Passenger/PassengerFlights";
import FlightPassengers from "./Flight/FlightPassengers";
import spaceLogo from './space-logo.png'


function App() { // funkcyjny komponent bezstanowy
 
  return (
    
    <BrowserRouter>
          <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand id="mainSpace" href="/home"><img  src={spaceLogo} alt="space-logo" id="spaceLogoNav"/></Navbar.Brand>
            <Nav className="mainNavBar">
              <Nav.Link eventKey="/listOfFlights" href='/listOfFlights'>Flights</Nav.Link>
              <Nav.Link eventKey="/listOfPassengers" href='/listOfPassengers'> Passengers</Nav.Link>
            </Nav>
            
          </Navbar>
        
     <div id='tresc'>
          <Route path='/' exact component={Home} />
          <Route path='/listOfFlights' exact component={ListOfFlights} />
          <Route path='/listOfPassengers' exact component={ListOfPassengers} />
          <Route path='/addPassenger' exact component={AddUpdatePassenger} />
          <Route path='/updatePassenger/:id' exact component={AddUpdatePassenger} />
          <Route path='/updateFlight/:id' exact component={AddUpdateFlight} />
          <Route path='/addFlight' exact component={AddUpdateFlight} />
          <Route path='/passengerFlights/:id' exact component={PassengerFlights} />
          <Route path='/flightPassengers/:id' exact component={FlightPassengers} />
      </div>
  
 
    </BrowserRouter>
    
  );
}


export default App;
