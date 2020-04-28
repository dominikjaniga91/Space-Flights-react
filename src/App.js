import React from 'react';
import './App.css';
import { BrowserRouter, Switch} from "react-router-dom";
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
import Login from './components/Authentication/Login';
import { routes } from './routes';

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
       <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.flights} exact component={ListOfFlights} />
          <Route path={routes.passengers} exact component={ListOfPassengers} />
          <Route path={routes.newPassenger} exact component={AddUpdatePassenger} />
          <Route path={routes.updatePassenger} exact component={AddUpdatePassenger} />
          <Route path={routes.newFlight} exact component={AddUpdateFlight} />
          <Route path={routes.updateFlight} component={AddUpdateFlight} />
          <Route path={routes.passengerFlights}  component={PassengerFlights} />
          <Route path={routes.flightPassengers}  component={FlightPassengers} />
        </Switch>
      </div>
  
 
    </BrowserRouter>
    
  );
}


export default App;
