const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, func) {
  return func(drivers);
};

const drivers = ["John", "Jane", "Bob", "Alice"];

console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
console.log(fareDoubler(10));
console.log(fareTripler(10));
