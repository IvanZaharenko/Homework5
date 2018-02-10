( function () {
'use strict';
function GetCar(weight,volume,power) {
    this.weight = weight;
    this.volume = volume;
    this.power = power;
    this.consumption = ((parseFloat(weight)/2) / parseFloat(power)).toFixed(2) + ' л. / 100 км.' ;
    this.acceleration = (parseFloat(weight)/parseFloat(power)).toFixed(2) + ' c.';
    this.maxSpeed =  (((0.74 * parseFloat(volume))+ 11 * parseFloat(weight)) / parseFloat(power)).toFixed(2) + 'км./ч.';

    this.race  = function (distance) {
       let secNum =  distance *3600 / (parseFloat(this.maxSpeed) );
        let hours = Math.floor(secNum / 3600); //5//0.55
        let minutes = Math.floor((secNum - (hours * 3600)) / 60);//33//33
        let seconds = Math.floor(secNum - (hours * 3600) - (minutes * 60));
        let miliSeconds = Math.floor(secNum - (hours * 3600) - (minutes * 60) - (seconds / 1000));
        if (hours < 10) {hours = "0"+hours;}
        if (minutes < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
        if (miliSeconds < 10) {miliSeconds = "0" + miliSeconds;}

        return 'В пути - ' + hours + ':' + minutes + ':' + seconds  + ':' + miliSeconds; } ;

    
}

let car = new GetCar('5000 кг.','40 л.','500 л.с.');

console.log(car);
console.log(car.race(200));


}());
