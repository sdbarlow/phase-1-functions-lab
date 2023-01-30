function distanceFromHqInBlocks(stNo){
 return Math.abs(stNo - 42);
}

function distanceFromHqInFeet(stNo){
    let numberOfBlocks = distanceFromHqInBlocks(stNo);
    return numberOfBlocks*264;
}

function distanceTravelledInFeet(start, destination){
 let numberOfBlocks = Math.abs(destination - start);
 return numberOfBlocks*264;
}

function calculatesFarePrice(start, destination){
let numberOfFeet = distanceTravelledInFeet(start, destination);
if (numberOfFeet > 2500){
    return 'cannot travel that far';
} else if (numberOfFeet <= 400){
    return 0;
} else if (numberOfFeet > 400 && numberOfFeet < 2000){
    return (numberOfFeet-400)*0.02;
} else 
    return 25;

}