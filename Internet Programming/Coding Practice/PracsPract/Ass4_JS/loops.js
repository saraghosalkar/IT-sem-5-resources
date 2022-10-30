let numbers = [25,4,9,16,45];
let txt = "";
let x;
//for in loop
for (x in numbers){
    txt=txt+numbers[x];
    console.log(txt);
}

//for
txt = "";
for (x=0; x < numbers.length; x++){
    txt=txt+numbers[x];
    console.log(txt);
}

//for of
txt = "";
for (x of numbers){
    txt=txt+x;
    console.log(txt);
}

//do while
txt="";
x=0;
do{
    txt=txt+numbers[x];
    console.log(txt);
    x++
}
while(x < numbers.length);

//while
txt="";
x=0;
while(x<numbers.length){
    txt=txt+numbers[x];
    console.log(txt);
    x++
}