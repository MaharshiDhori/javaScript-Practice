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
console.log("Get total mass of all characters:");
console.log(totalMass);
console.log("\n");

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => {
    return acc + cur.height;
}, 0)
console.log("Get total height of all characters:");
console.log(totalHeight);
console.log("\n");

//3. Get total number of characters by eye color
const characterByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if (acc[color]) {
        acc[color]++
    } else {
        acc[color] = 1
    }
    return acc;
}, {})
console.log("Get total number of characters by eye color:");
console.log(characterByEyeColor);
console.log("\n");

//4. Get total number of characters in all the character names
const totalName = characters.reduce((acc,cur) => {
    return acc + cur.name.length; 
}, 0)
console.log("Get total number of characters in all the character names:");
console.log(totalName);
console.log("\n");

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
const sortByMass = characters.some((a,b) => {
    return a.mass - b.mass
})
console.log("Sorted by mass: \n")
console.log(sortByMass)
console.log("\n")


//2. Sort by height
const sortByHeight = characters.sort((a,b) => {
    return a.height - b.height;
})
console.log("Sorted by height: \n");
console.log(sortByHeight);
console.log("\n")

//3. Sort by name
const sortByName = characters.sort((a,b) => {
    if (a.name < b.name) {
        return -1
    } else {
        return 1;
    }
})
console.log("Sorted by name: \n");
console.log(sortByName);
console.log("\n");

//4. Sort by gender
const sortByGender = characters.sort((a,b) => {
    if(a.gender === "female") return -1;
    return 1;
})
console.log("Sorted by gender: \n");
console.log(sortByGender)
console.log("\n");


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