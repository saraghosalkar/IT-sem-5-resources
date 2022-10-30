let fetches=fetch(
    "http://jsonplaceholder.typicode.com/todos/1"
);
fetches.then(res=>
    res.json()).then(d=>{
        console.log(d)
    })