const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((character) => {
    return character.name
})
console.log("Array of all names: \n");
console.log(allNames)
console.log("\n");

//2. Get array of all heights
const allHeights = characters.map((character) => {
    return character.height
})
console.log("Array of heights: \n");
console.log(allHeights)
console.log("\n");

//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((character) => {
    return ({
        name: character.name,
        height: character.height
    });
})
console.log("Array of object with name & heights: \n");
console.log(nameAndHeight)
console.log("\n");

//4. Get array of all first names
const firstName = characters.map((character) => {
    return character.name.split(' ')[0];
})
console.log("Array of first names: \n");
console.log(firstName);
console.log("\n");

/*
***************************
***************************
*/

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => {
    return acc + cur.mass;
}, 0)
console.log();
console.log(totalMass);
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names


/*
***************************
***************************
*/

//***FILTER***
//1. Get characters with mass greater than 100
console.log("Characters with mass greater than 100: \n")
const greater100Character = characters.filter((character)=> {
    return character.mass > 100;
})
console.log(greater100Character)
console.log("\n")

//2. Get characters with height less than 200
const less200CharHeight = characters.filter((character) => {
  return character.height < 200;  
});
console.log("Characters with height less than 200: \n")
console.log(less200CharHeight);
console.log("\n")

//3. Get all male characters
const allMaleCharacters = characters.filter((character)=>{
    return character.gender === "male";
})
console.log("All male characters: \n")
console.log(allMaleCharacters);
console.log("\n");

//4. Get all female characters
const allFemaleCharacters = characters.filter((character)=>{
    return character.gender === "female";
});
console.log("All female characters: \n")
console.log(allFemaleCharacters);
console.log("\n")


/*
***************************
***************************
*/


//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender


/*
***************************
***************************
*/


//***EVERY***
//1. Does every character have blue eyes?
const everyBlueEye = characters.every((character) => {
    return character.eye_color === "blue";
})
console.log("Does every character have blue eyes? \n")
console.log(everyBlueEye);
console.log("\n")

//2. Does every character have mass more than 40?
const everyMassMoreThanFourty = characters.every((character) => {
    return characters.mass > 40;
})
console.log("Does every character have mass more than 40? \n");
console.log(everyMassMoreThanFourty);
console.log("\n");

//3. Is every character shorter than 200?
const everyShorterThan200 = characters.every((character) => {
    return character.height < 200;
});
console.log("Is every character shorter than 200? \n");
console.log(everyShorterThan200);
console.log("\n");

//4. Is every character male?
const everyCharacterMale = characters.every((character) => {
    return character.gender === "male";
})
console.log("Is every character male? \n");
console.log(everyCharacterMale)
console.log("\n");


/*
***************************
***************************
*/


//***SOME***
//1. Is there at least one male character?
const hasOneMaleCharacter = characters.some((character) => {
    return character.gender === "male";
})
console.log("Is there at least one male character? \n")
console.log(hasOneMaleCharacter)
console.log("\n");

//2. Is there at least one character with blue eyes?
const hasOneBlueEye = characters.some((character) => {
    return character.eye_color === 'blue'
})
console.log("Is there at least one blue eye? \n")
console.log(hasOneBlueEye)
console.log("\n");

//3. Is there at least one character taller than 210?
const hasOneTallerChar = characters.some((character) => {
    return character.height > 210;
})
console.log("Is there at least one character taller than 210? \n")
console.log(hasOneTallerChar)
console.log("\n");

//4. Is there at least one character that has mass less than 50?
const hasLessMass = characters.some((character) => {
    return character.mass < 50;
})
console.log("Is there at least one character that has mass less than 50? \n")
console.log(hasLessMass)
console.log("\n");