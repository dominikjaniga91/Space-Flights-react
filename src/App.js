import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import { Navbar} from "react-bootstrap";
import { Nav} from "react-bootstrap";
import { Route } from "react-router-dom";
import Home from "./Home";
import ListOfFlights from "./components/Flight/ListOfFlights";
import ListOfPassengers from "./components/Passenger/ListOfPassengers";
import AddUpdatePassenger from "./components/Passenger/AddUpdatePassenger";
import AddUpdateFlight from "./components/Flight/AddUpdateFlight";
import "./assets/fontello/css/fontello.css"
import PassengerFlights from "./components/Passenger/PassengerFlights";
import FlightPassengers from "./components/Flight/FlightPassengers";
import spaceLogo from './assets/images/space-logo.png'


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
