//var myConcat = function(arr1, arr2) {
//    return arr1.myConcat(arr2);
//};

//can be written as

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3, 4, 5]));