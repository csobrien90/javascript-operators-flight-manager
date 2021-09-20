function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray) {
        let totalPassengers = passengersArray.reduce((a, b) => a + b);
        if (totalPassengers <= flightCapacity) {
            return totalPassengers;
        } else {
            throw new Error('Total passengers cannot exceed flight capacity');
        }
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, flights, businessSeatsPerFlight, economySeatsPerFlight) {
        var seatingObject = {
            businessVips: 0,
            economyVips: 0,
            businessRegs: 0,
            economyRegs: 0
        }

        let totalBusinessSeats = flights * businessSeatsPerFlight;
        let totalEconomySeats = flights * economySeatsPerFlight;
        
        if (totalBusinessSeats >= vipPassengers) { //there are exactly enough or more than enough business seats for VIPs
            seatingObject.businessVips = vipPassengers;
            totalBusinessSeats -= vipPassengers;
            if (totalBusinessSeats >= regularPassengers) { //enough or more than enough business seats for regs
                seatingObject.businessRegs = regularPassengers;
            } else { //not enough business seats for regs
                seatingObject.businessRegs = totalBusinessSeats;
                regularPassengers -= totalBusinessSeats;
                seatingObject.economyRegs = Math.min(totalEconomySeats, regularPassengers);
            }
        } else { //not enough business seats for VIPs
            seatingObject.businessVips = totalBusinessSeats;
            vipPassengers -= totalBusinessSeats;
            if (vipPassengers >= totalEconomySeats) { //more VIPs than economy seats or exactly the amount
                seatingObject.economyVips = totalEconomySeats;
            } else { //more economy seats than VIPs
                seatingObject.economyVips = vipPassengers;
                totalEconomySeats -= vipPassengers;
                seatingObject.economyRegs = Math.min(totalEconomySeats, regularPassengers);
            }
         }

        return seatingObject;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();