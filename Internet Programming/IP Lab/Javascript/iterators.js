function displayElements(arr) {
    // to update the iteration
    let n = 0;
    return {
        next() {
            if(n < arr.length) {
                return {
                    value: arr[n++]
                }
            }
            return {
                value: undefined
            }
        }
    }
}
const arr = ['s', 'a', 'r', 'a'];
const arrIterator = displayElements(arr);
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());