const maxVolume=3//m^3
const maxWeight=100//kq
const maxSpeed=1//km/h


console.log(`Welcome to our project-s remout control. Here are the max voluems. Max volume is ${maxVolume}, max weight is${maxWeight}, max speed is ${maxSpeed} `);
if (maxVolume < 4 && maxSpeed < 2) {
    console.log("Debris captured");
}

else{console.log('It is too hard to capture it!')}


if(maxVolume < 4 && maxWeight < 110){
    console.log("Debris captured");
}
else{console.log('It is too hard to capture it!')}

if(maxSpeed< 2 && maxWeight < 110){
    console.log("Debris captured");
}
else{console.log('It is too hard to capture it!')} 