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