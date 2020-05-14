import React from 'react';
import { Redirect } from "react-router-dom";
import { routes } from 'routes';

const Home = () => {

    return <Redirect to={{ pathname: routes.flights }} />

};

export default Home;