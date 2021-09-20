function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {throw new Error('The number of passengers must be a positive integer value')};
        if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {throw new Error('The capacity of the flight must be a positive integer value')};
        return Math.ceil(passengers/capacity);
    }
    return {calculateNumberOfFlights};
}

module.exports = Flights();