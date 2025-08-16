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
    const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4);
    console.log(humanAges);
    const adults = humanAges.filter(age => age >= 18)
    console.log(adults);
    const avg = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
};

console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));