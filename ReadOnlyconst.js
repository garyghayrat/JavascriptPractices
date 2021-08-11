function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";
// can't change const, read only
//    SENTENCE = str + " is amazing!"
//try to use const or let
    for(let i = 0; i < str.length; i +=2) {
        console.log(SENTENCE);
    }
}

printManyTimes("coding");