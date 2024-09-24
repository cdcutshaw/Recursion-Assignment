function fibs(n) {
    let array = [0 , 1];
    if (n <= 0) return 'please enter a number greater than 0';
    if(n == 1) return [0];
    if (n == 2) return array;
    for (let i = 2; i < n; i++)
        array.push(array[array.length-2] + array[array.length-1])
    return array;
}
console.log(fibs(0))
console.log(fibs(1))
console.log(fibs(3))
console.log(fibs(6))
console.log(fibs(10))


function fibsRec(n) {
    console.log("This was printed recursively");
    if (n <= 0) return 'please enter a number greater than 0';
    if(n == 1) return [0];
    if (n == 2) return [0, 1];
    else {
        array = fibsRec(n-1)
        array.push(array[array.length - 1] + array[array.length - 2])
    }
    return array;
}
console.log(fibsRec(8))
