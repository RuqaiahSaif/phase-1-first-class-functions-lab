// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (firstdrivers) => drivers.slice(0,2);

console.log(returnFirstTwoDrivers(drivers))
const returnLastTwoDrivers = (lastdrivers) => drivers.slice(drivers.length - 2, drivers.length);
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers[0])
console.log(selectingDrivers[0](drivers)) 
const createFareMultiplier= (num) => num * num
const fareMultiplier = createFareMultiplier
console.log(fareMultiplier);
const fareQuintupler = createFareMultiplier;
console.log(fareQuintupler(5));
const fareDoubler = (num) => num + num ;
console.log(fareDoubler);
console.log(fareDoubler(10));
const fareTripler = (num) => num + num + num;
console.log(fareTripler);
console.log(fareTripler(12));
const selectDifferentDrivers = (drivers, fun) => fun();
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))
