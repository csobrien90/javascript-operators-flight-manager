function Prices() {
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType) {
        let finalPrice = basePrice;
        finalPrice *= (100 + variationPassengerType) / 100;
        finalPrice *= (100 + variationFlightType) / 100;

        return finalPrice.toFixed(2);
    }
    return {calculateFinalPrice};
}

module.exports = Prices();
