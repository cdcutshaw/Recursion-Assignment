function mergeSort(array) {
    
    if (!Array.isArray(array) || array.some(item => isNaN(item))) {
        return "invalid entry, please enter an array of numbers";
    }

    if (array.length === 1) return array;

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left[0]);
            left.shift();
        } else {
            sortedArray.push(right[0]);
            right.shift();
        }
    }
    
    
    return sortedArray.concat(left, right);
}

const unsortedArray = [2, 53, 8, 104, 44, 808, 4546, 4, 99, 28, 33];
console.log(mergeSort(unsortedArray));