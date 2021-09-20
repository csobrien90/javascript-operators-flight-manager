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


    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput};
}

module.exports = Util();

