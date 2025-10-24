const breeds = [
    {
        breed: 'German Shepherd',
        averageWeight: 32,
        activities: ['fetch', 'swimming'],
    },
    {
        breed: 'Dalmatian',
        averageWeight: 24,
        activities: ['running', 'fetch', 'agility'],
    },
    {
        breed: 'Labrador',
        averageWeight: 28,
        activities: ['swimming', 'fetch'],
    },
    {
        breed: 'Beagle',
        averageWeight: 12,
        activities: ['digging', 'fetch'],
    },
    {
        breed: 'Husky',
        averageWeight: 26,
        activities: ['running', 'agility', 'swimming'],
    },
    {
        breed: 'Bulldog',
        averageWeight: 36,
        activities: ['sleeping'],
    },
    {
        breed: 'Poodle',
        averageWeight: 18,
        activities: ['agility', 'fetch'],
    },
];

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
    { weight: 18, curFood: 244, owners: ['Joe'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// ch #1
const checkDogs = function (julia, kate) {

    const correctedJulia = julia.slice()
    correctedJulia.splice(0, 1);
    correctedJulia.splice(-2);
    const dogs = correctedJulia.concat(kate)
    dogs.forEach(function (dog, i) {
        console.log(`${i + 1} ${dog >= 3 ? 'adult' : 'puppy'}`);
    });

}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

// ch #2

const calcAvgHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter(age => age >= 18)
    console.log(adults);
    const avg = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
};

console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));

// ch #3
const calcAvgHumanAge2 = ages => ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter(age => age >= 18).reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
console.log(calcAvgHumanAge2([5, 2, 4, 1, 15, 8, 3]));

// ch #4
const huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight;
console.log(huskyWeight);

const dogBothActivities = breeds.find(dog => dog.activities.includes('fetch') && dog.activities.includes('running')).breed;
console.log(dogBothActivities);

const allActivities = [...new Set(breeds.flatMap(dog => dog.activities))];
console.log(allActivities);

const swimmingAdjacent = [... new Set(breeds.filter(breed => breed.activities.includes('swimming')).flatMap(dog => dog.activities).filter(activity => activity !== 'swimming'))];
console.log(swimmingAdjacent);

console.log(breeds.every(breed => breed.averageWeight >= 10));

console.log(breeds.some(breed => breed.activities.length >= 3));

const fetchBreeds = breeds.filter(breed => breed.activities.includes('fetch')).map(breed => breed.averageWeight);
const heaviest = Math.max(...fetchBreeds)
console.log(heaviest);

// ch #5

// #1
dogs.forEach(dog => {
    const recFood = Math.floor(dog.weight ** 0.75 * 28);
    dog['recFood'] = recFood;
})
console.log(dogs);

// #2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(Number(dogSarah.curFood) > Number(dogSarah.recFood) ? 'too much' : 'too little')

// #3
const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersTooMuch);
console.log(ownersTooLittle);

// #4
console.log(`${ownersTooMuch.join(' and ')}'s dogs are eating too much`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs are eating too little`);

// #5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// #6
const checkEatingOkay = dog => dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;
console.log(dogs.every(checkEatingOkay));

// #7
const dogsEatingOkay = dogs.filter(checkEatingOkay)
console.log(dogsEatingOkay);

// #8
const dogGroupbyFood = Object.groupBy(dogs, dog => {
    const cf = dog.curFood;
    const rf = dog.recFood;
    if (cf > rf) {
        return 'too-much'
    }
    if (rf > cf) {
        return 'too-little'
    }
    return 'exact'
});
console.log(dogGroupbyFood);

// #9
const dogGroupbyOwner = Object.groupBy(dogs, dog => dog.owners.length);
console.log(dogGroupbyOwner);

// #10
const sortedDogs = dogs.toSorted((dog1, dog2) => Number(dog1.recFood) - Number(dog2.recFood))
console.log(sortedDogs);