// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// I can use the localeCompare function to compare two strings (like driver and string), 
//it returns 0 if they are the same regardless of case or accents
// or I can convert both driver and string toLowerCase or toUpperCase
// so case doesn't matter anymore
function findMatching(arrayOfDrivers, string) {
    let matchingDrivers = [];
    matchingDrivers = arrayOfDrivers.filter(driver => driver.localeCompare(string, 'en', { sensitivity: 'base'}) === 0);
    // matchingDrivers = arrayOfDrivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
    if (matchingDrivers) {
        return matchingDrivers;
    }
    return matchingDrivers;
}

// to compare of the first two letters of driver and string match add [0, 1] after each of them
// in the comparison function; or .substring(0, 1) after each of them
function fuzzyMatch(arrayOfDrivers, string) {
    let matchingDrivers = [];
    matchingDrivers = arrayOfDrivers.filter(driver => driver[0, 1] === string[0, 1]);
    // matchingDrivers = arrayOfDrivers.filter(driver => driver.substring(0, 1) === string.substring(0, 1));
    if (matchingDrivers) {
        return matchingDrivers;
    }
    return matchingDrivers;
}

function matchName(arrayOfObjects, string) {
    let matchingName = [];
    matchingName = arrayOfObjects.filter(driverObject => driverObject.name === string);
    if (matchingName) {
        return matchingName;
    }
    return matchingName;
}
