var arr = [1, 2, 3];
//if you put var arr2 = arr1
//line 5 is going to add 4 to arr array
var arr2 = [...arr];
arr2.push(4);
console.log(arr, arr2);