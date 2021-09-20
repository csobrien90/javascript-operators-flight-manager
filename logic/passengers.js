function Passengers() {
    function checkFlightCapactiy(flightCapacity, passengersArray) {
        let totalPassengers = passengersArray.reduce((a, b) => a + b);
        if (totalPassengers <= flightCapacity) {
            return totalPassengers;
        } else {
            throw new Error('Total passengers cannot exceed flight capacity');
        }
    }
    return {checkFlightCapactiy};
}

module.exports = Passengers();