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