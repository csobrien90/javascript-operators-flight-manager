"use strict";

function Prices() {
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType) {
        let finalPrice = basePrice;
        finalPrice *= (100 + variationPassengerType) / 100;
        finalPrice *= (100 + variationFlightType) / 100;

        return finalPrice.toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        if (passengerType.toLowerCase() === 'vip' && flightType.toLowerCase() === 'business') {
            return calculateFinalPrice(basePrice, 5, 10);
        } else if (passengerType.toLowerCase() === 'vip' && flightType.toLowerCase() === 'economy') {
            return calculateFinalPrice(basePrice, 5, -3);
        } else if (passengerType.toLowerCase() === 'regular' && flightType.toLowerCase() === 'business') {
            return calculateFinalPrice(basePrice, -5, 10);
        } else if (passengerType.toLowerCase() === 'regular' && flightType.toLowerCase() === 'economy') {
            return calculateFinalPrice(basePrice, -5, -3);
        }
    }

    function calculateTotalFinalPrice(numberOfSeats, passengerType, flightType, basePrice) {
        return numberOfSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();
