"use strict";

function Util() {
    function calculateTotalDistributedPassengers(seatingObject) {
        let total = 0;

        for (item in seatingObject) {total += seatingObject[item]};

        return total;
    }

    function calculateTotalNumberOfPassengers(arr) {
        return arr.reduce((a, b) => a + b);
    }

    function checkInput(input) {
        if(!input || isNaN(input)) {throw new Error('input must be a number and non empty')}
    }

    function calculateTotalDistance(arr) {
        let totalDistance = 0;
        arr.forEach(dist => {
            if(dist > 0) {totalDistance += dist};
        })
        return totalDistance;
    }

    function calculateBonusPoints(businessDistancesArray, economyDistancesArray, businessBonus, economyBonus) {
        let businessPoints = calculateTotalDistance(businessDistancesArray) * (businessBonus / 100);
        let economyPoints = calculateTotalDistance(economyDistancesArray) * (economyBonus / 100);
        return businessPoints + economyPoints;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();

