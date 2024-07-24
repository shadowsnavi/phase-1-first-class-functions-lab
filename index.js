// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(driversNames){
    return driversNames.slice(0,2)

}
    console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(driversNames){
    return driversNames.slice(2,4)

}
    console.log(returnLastTwoDrivers(drivers));

    const selectingDrivers = [
        returnFirstTwoDrivers,
        returnLastTwoDrivers
    ]

    function createFareMultiplier(fare){
        return function(value){
            return fare * value;
        }
        
    }
    const fareDoubler = function(fare){
        let doubleFare = createFareMultiplier(2);
        return doubleFare(fare);
    }
    console.log(fareDoubler(10));

    const fareTripler = function(fare){
        let doubleFare = createFareMultiplier(3);
        return doubleFare(fare);
    }
    console.log(fareTripler(12));

    function selectDifferentDrivers(arrayOfDrivers, fn){
        if(fn === returnFirstTwoDrivers){
            return returnFirstTwoDrivers(arrayOfDrivers)
        }else{
            return returnLastTwoDrivers(arrayOfDrivers)
        }
    }