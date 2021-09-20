function Util() {
    function calculateTotalDistributedPassengers(seatingObject) {
        let total = 0;

        for (item in seatingObject) {total += seatingObject[item]};

        return total;
    }

    function calculateTotalNumberOfPassengers(arr) {
        return arr.reduce((a, b) => a + b);
    }


    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();

