function display(arr){
    let n = 0;
    return {
        next(){
            if (n < arr.length){
                return{
                    value : arr[n++]
                }
            }
            return { value : undefined}
        }
    }
}

const arr = ['s','a','r','a'];
const arrIterator = display(arr);
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());