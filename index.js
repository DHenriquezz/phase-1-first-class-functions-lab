// Code your solution in this file!
const returnFirstTwoDrivers = function(){
     const scubers = (['Antonia', 'Nuru', 'Amari', 'Mo']);
return scubers.splice(0,2)
}
const returnLastTwoDrivers = function(){
    const scubers = (['Antonia', 'Nuru', 'Amari', 'Mo']);
return scubers.splice(2,3)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(ride){
        return (fare * ride)
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const scubers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const  selectDifferentDrivers = (scubers, cb) =>{
  return cb(returnFirstTwoDrivers(scubers))

}