// Code your solution here


function findMatching(array, name){
    const findNames = array.filter(function(element){return element.toLowerCase() === name.toLowerCase()})
    console.log(findNames);
    return findNames;
}



function fuzzyMatch(array, name){
    const findLetters = array.filter(function(element){return element[0] === name[0]})
    console.log(findLetters);
    return findLetters;
}

function matchName(driver, string){
    const findMatches = driver.filter(function(element){return element.name === string})
    console.log(findMatches);
    return findMatches;
}