function Prices() {
    function calculatedFinalPrice(basePrice, variationPassengerType, variationFlightType) {
        let finalPrice = basePrice;
        finalPrice *= (100 + variationPassengerType) / 100;
        finalPrice *= (100 + variationFlightType) / 100;

        return finalPrice.toFixed(2);
    }
    return {calculatedFinalPrice};
}

module.exports = Prices();
