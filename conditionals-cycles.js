console.log("Cycles and conditionals working");

// // Conditionals

// // if - else if - else

// // // structure: if

// // if(condition){
// //     // Do something
// // }

// // // structure: if - else
// // if(condition){
// //     // Do something
// // } else {
// //     // Do something else
// // }

// // // structure: if - else if - else
// // if(condition){
// //     // Do something
// // } else if (condition) {
// //     // Do something else
// // } else {
// //     // Do something else
// // }

// // 1st example - if

// // let age = 18
// // let age = 15;
// // let age = 25

// // if (age < 18) {
// //     console.log("Eres menor de edad");
// // }

// // if (age >= 18) {
// //     console.log("Eres mayor de edad");
// // }

// // 2nd example - if - else
// if (age < 18) {
//     console.log("Eres menor de edad");
// } else {
//     console.log("Eres mayor de edad");
// }



// // 3rd example - if - else if - else


// const ageUserPrompt = prompt("¿Cuál es tu edad?");
// console.log("La edad del usuario es: ", ageUserPrompt);

// console.log(typeof ageUserPrompt);

// const ageUser = parseInt(ageUserPrompt);
// console.log("ageUser", ageUser);
// console.log(typeof ageUser);
// // if - // Si es menor de 18, es menor de edad
// // else if - // Si es mayor de 18 pero menor que 65, es mayor de edad
// // else - // Si es mayor de 65, es mayor de edad y además es jubilado

// // En el if tenemos una única condición // True or False
// if(ageUser < 18) {
//     console.log("Eres menor de edad");
//     // En el else if tenemos dos condiciones // Ahora tengo un universo de cuatro posibilidades //
//     // True and True // True and False // False and True // False and False
//     // AMPERSAND && // AND - La primera condición y la segunda condición tienen que ser verdaderas 
//     // PIPE || // OR - La primera condición o la segunda condición tienen que ser verdaderas - Si una de las dos es verdadera, la condición es verdadera - Si ambas son falsas, la condición es falsa - Si ambas son verdaderas, la condición es verdadera
//     // EXCLAMATION ! // NOT
//     // Puedo declarar varias cosas dentro del if/else if/ else
// } else if (ageUser >= 18 && ageUser < 65) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres mayor de edad y además eres jubilado");
// }


// // Ternary operator

// // condition ? true : false

// let ageTernary = 18;
// // Para una mejor sintaxis, ECMA6 incorporó los operadores ternarios. El "?" es el operador ternario para cuabndo la condición es true y el ":" es el operador ternario para cuando la condición es false 
// ageTernary < 18 
//     ? console.log("Eres menor de edad") 
//     : console.log("Eres mayor de edad");
// // One Line declaration

// Cycles

// for

// for(inicialización; condición; incremento) {
//     // Do something
// }
// condición en true - // Si la condición es true, se ejecuta el código dentro del for

// condicion en false - // Si la condición es false, se sale del for

// for(let iterator = 0; iterator < 10; iterator++) {
//     // console.log("iterator", iterator);
//     console.log("Comisión 38i")
// }

// 9 veces
// 10 veces ✔️
// Infinito

let perrito // Default: undefined

perrito = "Dogui" // String

console.log(perrito)


// iterator inicia en 0
// 0 < 10 // true
// 0++ // 1 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 1

// 1 < 10 // true
// 1++ // 2 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 2

// 2 < 10 // true
// 2++ // 3 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 3

// 3 < 10 // true
// 3++ // 4 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 4

// 4 < 10 // true
// 4++ // 5 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 5

// 5 < 10 // true
// 5++ // 6 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 6

// 6 < 10 // true
// 6++ // 7 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 7

// 7 < 10 // true
// 7++ // 8 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 8

// 8 < 10 // true
// 8++ // 9 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 9

// 9 < 10 // true
// 9++ // 10 y ejecuta el código dentro del for
// Cantidad de logs mostrados: 10

// 10 < 10 // false
// 10++ // 11 y sale del for
// Cantidad de logs mostrados: 10

// Acá se ejecutaría el resto del código

for(let iterator = 0; iterator <= 10; iterator++) {
    console.log("iterator", iterator);
    console.log("Comisión 38i")
}

// < =  jetBrains mono lo muestra como <=
// > =  jetBrains mono lo muestra como >=
// = > jetBrains mono lo muestra como =>
// = < jetBrains mono lo muestra como =<
// = = jetBrains mono lo muestra como == 
// = = = jetBrains mono lo muestra como ===

let dog = "Guti"
if (dog === "Guti") {
    console.log("Guti es un perrito con ===")
}

if (dog == "Guti") {
    console.log("Guti es un perrito con ==")
}

let number = 1
if (number === 1) {
    console.log(true)
}
// La igualdad estricta me muestra el console.log porque el valor es 1 y el tipo de dato coincide con el declarado en la variable


if (number == "1") {
    console.log(true)
}

// La igualdad no estricta me muestra el console.log porque el valor es 1 y el tipo de dato no coincide con el declarado en la variable - No me exige que el tipo de dato sea el mismo (INFERENCIA DE TIPO DE DATO)


// La igualdad estricta me exige que el tipo de dato y el valor sean iguales
// La igualdad no estricta me exige que el valor sea igual


// 1 === 1 // true
// 1 === "1" // false

// 1 == 1 // true
// 1 == "1" // true

// for generalmente lo vamos a ocupar para iterar arrays

const numbersArrayFor = [0, 1, 2, 3];
const stringsArrayFor = [
    "Belu está en el grupo 4",
    "Leo",
    "Cari",
    "Luis",
    "Javascript is awesome ✔️",
    "React is awesome ✔️",
    "Node is awesome ✔️"
];
const mixedArrayFor = [
    0,
    "Belu",
    true,
    null,
    undefined,
    [1, 2, 3, 4, 5],
    { key1: "Value1", key2: "Value2" },
];

console.log({numbersArrayFor})
console.log("numbersArrayFor", numbersArrayFor)

// for (let iterator = 0; numbersArrayFor.length < 10; iterator++) {
//     console.log(numbersArrayFor)
// }

// // Bucle infinito - OJJJJJJJJJJJOOO PORQUE SE TRABA LA COMPU

for (let iterator = 0; iterator < numbersArrayFor.length; iterator++) {
    console.log("ARRAY") // 4 veces
}

for (let iterator = 1; iterator < numbersArrayFor.length; iterator++) {
    console.log("ARRAY CON INICIALIZADOR EN 1"); // 3 veces 
}

for (let iterator = 5; iterator < numbersArrayFor.length; iterator++) {
    console.log("Soy un console.log que no se muestra nunca porque el valor inicial del iterador es mayor que la longitud del array")
}

for (let iterator = 0; iterator < numbersArrayFor.length; iterator++){
    console.log(numbersArrayFor)
}

// array[index]
console.log("0", numbersArrayFor[0])
console.log("1", numbersArrayFor[1])
console.log("2", numbersArrayFor[2])
console.log("3", numbersArrayFor[3])


for (let iterator = 0; iterator < numbersArrayFor.length; iterator++) {
    console.log("A ver qué pasa", numbersArrayFor[iterator]); 
    // Me conviene que el iterator arranque en 0 para que cuando haga array[iterator] el primer dato que muestre coincida con el índice 0 que corresponde al primer elemento del array
}

for (let iterator = 0; iterator < stringsArrayFor.length; iterator++) {
    console.log("A ver qué pasa", stringsArrayFor[iterator]); 
}

const usersArrayFor =[
    {
        name: "Belu",
        lastname: "Gómez",
        rol: "Student",
        residence: {
            country: "Argentina",
            city: "Tucumán",
        }
    },
    {
        name: "Cari",
        lastname: "Auteri",
        rol: "Tutor",
        residence: {
            country: "España",
            city: "Madrid",
        }
    },
    {
        name: "Fabi",
        lastname: "Tureo",
        rol: "Mentor",
        residence: {
            country: "Argentina",
            city: "Bariloche"
        }
    }
]

for (let iterator = 0; iterator < usersArrayFor.length; iterator++) {
    console.log("Inicia Bloque de ejecución")
    console.log("A ver los users", usersArrayFor[iterator]); 
    console.log("A ver los names", usersArrayFor[iterator].name);
    console.log("A ver los lastnames", usersArrayFor[iterator].lastname);
    console.log("Finaliza Bloque de ejecución");
}

const petsIndex = [
    {
        index: 0,
        type: "Dog",
    }, 
    {
        index: 1,
        type: "Cat",
    },
    {
        index: 2,
        type: "Fish",
    }
]

// Cómo hago para mostrar cada tipo de animal?
for(let iterator = 0; iterator < petsIndex.length; iterator++) {
    console.log(petsIndex[iterator].type)
}


// Utilizando template string (`se escribe entre backticks y se puede escribir variables entre ${}`) quiero mostrar el nombre, el apellido y el rol en una oración semánticamente correcta
// i.e.: "El nombre del usuario es Belu, su apellido es Gómez y su rol es Student"
// i.e.: "El nombre del usuario es Cari, su apellido es Auteri y su rol es Tutor"
// i.e.: "El nombre del usuario es Fabi, su apellido es Tureo y su rol es Mentor"

for (let iterator = 0; iterator < usersArrayFor.length; iterator++) {
    console.log(
        `El nombre del usuario es ${usersArrayFor[iterator].name}, su apellido es ${usersArrayFor[iterator].lastname}, su rol es ${usersArrayFor[iterator].rol} y está viviendo en ${usersArrayFor[iterator].residence.city}`
    );
}

