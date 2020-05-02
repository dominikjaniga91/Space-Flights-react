import React from 'react';
import 'App.css';
import { BrowserRouter, Switch} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "Home";
import ListOfFlights from "Views/Flight/ListOfFlights";
import ListOfPassengers from "Views/Passenger/ListOfPassengers";
import AddUpdatePassenger from "Views/Passenger/AddUpdatePassenger";
import AddUpdateFlight from "Views/Flight/AddUpdateFlight";
import PassengerFlights from "Views/Passenger/PassengerFlights";
import FlightPassengers from "Views/Flight/FlightPassengers";
import Login from 'Views/Login';
import { routes } from 'routes';
import SecuredRoute from 'security/SecuredRoute';
import Error from 'Views/Error';

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
              <SecuredRoute  path={routes.updateFlight} exact component={AddUpdateFlight} />
              <SecuredRoute  path={routes.passengerFlights} exact component={PassengerFlights} />
              <SecuredRoute  path={routes.flightPassengers} exact component={FlightPassengers} />
              <SecuredRoute  path={routes.passenger}  exact component={AddUpdatePassenger} />
              <SecuredRoute  path={routes.flight} exact  component={AddUpdateFlight} />
              <SecuredRoute  component={Error} />
            </Switch>
        </>
      </BrowserRouter>
      
  );
}

export default App;
