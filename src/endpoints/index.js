
const host = 'https://myspacetravel.herokuapp.com/api/';
export const endpoints ={

    passenger: host+'passenger/',
    passengers: host+'passengers',
    passengerFlights: host+'passenger/flights/',
    flight: host+'flight/',
    flights: host+'flights',
    flightPassengers: host+'flight/passengers/',
    searchFlight: host + 'search/flight',
    searchPassenger: host + 'search/passenger',
    login: 'https://myspacetravel.herokuapp.com/login',
    user: host+'user/',
    pdfFlights: host + 'pdf/flights',
    pdfPassengers: host + 'pdf/passengers',
    excelFlights: host + 'excel/flights',
    excelPassengers: host + 'excel/passengers'
}