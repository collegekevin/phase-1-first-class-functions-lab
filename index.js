// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const fare = 10

//const returnFirstTwoDrivers = () => drivers.slice(0, 2);
 //   returnFirstTwoDrivers();

const returnFirstTwoDrivers = function(allDrivers){
   return allDrivers.slice(0, 2);
}

const returnLastTwoDrivers = (allDrivers) => allDrivers.slice(-2);


    returnLastTwoDrivers(drivers);

//const returnLastTwoDrivers = function(){
//    allDrivers.slice(0, 2);
//    returnLastTwoDrivers;
//}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function multiplyFares (fare, fareMultiplier){
    totalFare = fare * fareMultiplier;
    return totalFare;
}


function createFareMultiplier(fareMultiplier) {
    // if (fareMultiplier === 2) {
    //     const fareDoubler = (fare) => fare * 2;
        return  multiplyFares(fare, fareMultiplier)
}

    // else if (fareMultiplier === 3) {
    //     const fareTripler = (fare) => fare * 3;
    //     return fareTripler;
    // }
    // else if (fareQuintupler === 4) {
    //     const fareQuintupler = (fare) => fare * 4;
    //     return fareQuintupler;
    // }



function selectDifferentDrivers(drivers, whichDrivers){
    // if (whichDrivers === returnFirstTwoDrivers) {
    //     returnFirstTwoDrivers(drivers);
    // }
    // else if (whichDrivers === returnLastTwoDrivers) {
    //     returnLastTwoDrivers(drivers);
    // }
    whichDrivers(drivers)

}

selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console