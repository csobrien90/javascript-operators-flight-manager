function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {throw new Error('The number of passengers must be a positive integer value')};
        if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {throw new Error('The capacity of the flight must be a positive integer value')};
        return Math.ceil(passengers/capacity);
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        let totalDistance = distancesArray.reduce((a, b) => a + b);
        if (totalDistance <= (distanceLimit / 2)) {
            return 'The revision needs to be done within the next 3 months';
        } else if ((totalDistance > distanceLimit / 2) && (totalDistance <= 3 * distanceLimit / 4)) {
            return 'The revision needs to be done within the next 2 months';
        } else if ((totalDistance > 3 * distanceLimit / 4) && (totalDistance <= distanceLimit)) {
            return 'The revision needs to be done within the next month';
        } else {
            throw new Error(`Flight maximum distance (${distanceLimit}) exceeded. No flight`);
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();