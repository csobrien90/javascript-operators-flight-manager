function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {throw new Error('The number of passengers must be a positive integer value')};
        if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {throw new Error('The capacity of the flight must be a positive integer value')};
        return Math.ceil(passengers/capacity);
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        let totalDistance = distancesArray.reduce((a, b) => a + b);
        if (totalDistance <= distanceLimit / 2) {
            return 'The revision needs to be done within the next 3 months';
        } else if (totalDistance > distanceLimit / 2 && totalDistance <= distanceLimit * .75) {
            'The revision needs to be done within the next 2 months';
        } else if (totalDistance > distanceLimit * .75 && totalDistance <= distanceLimit) {
            'The revision needs to be done within the next month';
        } else {
            throw new Error('Total distance cannot exceed distance limit');
        }
    }


    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();