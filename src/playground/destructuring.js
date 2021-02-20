//OBJECT DESTRUCTURING


// const person = {
//     firstName: 'Steph',
//     age: 33,
//     location: {
//         city: 'Harare',
//         temp: 26
//     }
// };

// const {firstName: firstN = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstN} is ${age}`);

// const {city, temp: temperature} = person.location;

// if (city &&  temperature) {
//     console.log(`It's ${ temperature} in ${city}`);
// }

// console.log(`It's ${person.location.temp} in ${person.location.city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

//     console.log(publisherName);

//ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, , state = 'New York'] = address;

// console.log(`Your are in ${state} `)

const item = ['Coffee (hot)', '$2.00', '$2.90', '$2.75'];

const [drink, , price] = item;

//grab first and third items using array destructuring
console.log(`A medium ${drink} costs ${price}`);
