const person = {
    name: 'Nikhil',
    age: 20,
    greet() {
        console.log("hi i am " + this.name);
    }
};

person.greet()

const array = [{}, 1, "Nikhil" , function(){}];
console.log(array.map(E => "e: " + E));

array.push("newVal");
console.log(array);


// objects destructuring
const {name, age} = person;
console.log(name, age);

//async code

// const fetchData = callback => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {console.log("early timer");}, 1000);
//     });

//     setTimeout(() => {
//         callback("Done!");
//     }, 5000);
// }

// fetchData(
//     (text) => {
//         console.log(text);
//     }
// );

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {    
        setTimeout(() => {
            resolve("Done!");
        }, 5000);
    });

  return promise;
}

setTimeout(() => {
    console.log("Timer is done");
    fetchData().then(text => {
        console.log(text);
    })
})

console.log("hello");
