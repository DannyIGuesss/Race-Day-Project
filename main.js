let numberRace = Math.floor(Math.random() * 1000);

let registeredRunnerEarly = false;

let runnersAge = 17;

// Giving the adult runners who registered early a number over 1000
if(runnersAge > 18 && registeredRunnerEarly === true) {
    var earlyRunnerNumber = numberRace + 1000;
}

// letting adults who registered early that the race starts at 9:30 am 
if(runnersAge > 18 && registeredRunnerEarly === true) {
    console.log(`Hello runner ${earlyRunnerNumber} your race starts at 9:30 am!`);
} else if(runnersAge > 18 && registeredRunnerEarly === false) {
    console.log(`Hello runner ${numberRace} you will race at 11:00 am!`)
}else if(runnersAge < 18){
    console.log(`Hello runner ${numberRace} you will race at 12:30 pm!`)
}
