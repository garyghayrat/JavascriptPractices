// condition ? statement-if-true : statement-if-false;

function checkEqual(a,b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}

function checkEqualBetter(a, b) {
    return a === b ? true : false;
    //Top is just an example
    //In reality you would just 
    // return a===b;
}

console.log(checkEqualBetter(2,2));