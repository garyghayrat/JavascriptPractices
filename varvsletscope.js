//var is declared globally or within the function 
//let is limited within the block statement or expression.

function checkScope() {
    "use strict";

    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is : ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();