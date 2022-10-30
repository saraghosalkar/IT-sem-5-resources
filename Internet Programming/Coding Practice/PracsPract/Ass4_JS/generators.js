function* gen(){
    yield 100;
    yield;
    yield 200;
}
var mygen=gen();
console.log(mygen.next().value);
console.log(mygen.next().value);
console.log(mygen.next().value);
console.log(mygen.next().value);