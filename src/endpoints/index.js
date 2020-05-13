
const host = 'http://localhost:8080/api/';
export const endpoints ={

    passenger: host+'passenger/',
    passengers: host+'passengers',
    passengerFlights: host+'passenger/flights/',
    flight: host+'flight/',
    flights: host+'flights',
    flightPassengers: host+'flight/passengers/',
    searchFlight: 'http://localhost:8080/search/flight',
    searchPassenger: 'http://localhost:8080/search/passenger',
    login: 'http://localhost:8080/login',
    user: host+'user/',
    pdfFlights: host + 'pdf/flights',
    pdfPassengers: host + 'pdf/passengers',
    excelFlights: host + 'excel/flights',
    excelPassengers: host + 'excel/passengers'
}