function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray) {
        let totalPassengers = passengersArray.reduce((a, b) => a + b);
        if (totalPassengers <= flightCapacity) {
            return totalPassengers;
        } else {
            throw new Error('Total passengers cannot exceed flight capacity');
        }
    }
    return {checkFlightCapacity};
}

module.exports = Passengers();