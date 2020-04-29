import React from 'react';
import './App.css';
import { BrowserRouter, Switch} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import ListOfFlights from "./components/Flight/ListOfFlights";
import ListOfPassengers from "./components/Passenger/ListOfPassengers";
import AddUpdatePassenger from "./components/Passenger/AddUpdatePassenger";
import AddUpdateFlight from "./components/Flight/AddUpdateFlight";
import PassengerFlights from "./components/Passenger/PassengerFlights";
import FlightPassengers from "./components/Flight/FlightPassengers";
import Login from './Views/Login';
import { routes } from './routes';
import SecuredRoute from './security/SecuredRoute';


function App() {

  return (   
      <BrowserRouter>
        <>
            <Switch>
              <Route path={routes.login} component={Login} />
              <SecuredRoute  path={routes.home} exact component={Home} />
              <SecuredRoute  path={routes.flights} exact component={ListOfFlights} />
              <SecuredRoute  path={routes.passengers} exact component={ListOfPassengers} />
              <SecuredRoute  path={routes.newPassenger} exact component={AddUpdatePassenger} />
              <SecuredRoute  path={routes.updatePassenger} exact component={AddUpdatePassenger} />
              <SecuredRoute  path={routes.newFlight} exact component={AddUpdateFlight} />
              <SecuredRoute  path={routes.updateFlight} component={AddUpdateFlight} />
              <SecuredRoute  path={routes.passengerFlights}  component={PassengerFlights} />
              <SecuredRoute  path={routes.flightPassengers}  component={FlightPassengers} />
            </Switch>
        </>
      </BrowserRouter>
      
  );
}

export default App;
