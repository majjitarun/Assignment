const car = {
    vehicleid: 1234,
    brand: 'Honda',
    model: '2021',
    varient: '2years',

specification: {

    firstGear: function () {
        console.log('vehicle is in the first gear');

    },
    secondGear: function() {
        console.log('vehicle is in the second gear');
    },
    maximumSpeed: 80,
        changeGear: function() {
            return (this.firstGear(), this.secondGear());

        },
}
}
const detailsOfCar=(car)=>{

console.log(`brand:${car.brand}`);
console.log(`model:${car.model}`);
console.log(`varient:${car.varient}`);
car.specification.changeGear();
console.log(car.specification.maximumSpeed);
}
detailsOfCar(car);
