console.log("Functions Working");

// Una función es un bloque de código que realiza una tarea específica. Puede tomar entradas (argumentos-parámetros) y devolver salidas, y puede llamarse o invocarse en cualquier punto de un programa (¿Se puede?).

// En JavaScript, las funciones son ciudadanos de primera clase, lo que significa que pueden tratarse como cualquier otra variable. Pueden asignarse a variables, pasarse como argumentos a otras funciones y devolverse desde funciones.

// Las funciones en JavaScript se pueden definir usando la palabra clave function o como funciones de flecha. La palabra clave function define una función con un nombre, un conjunto de parámetros entre paréntesis y un bloque de código entre llaves. Las funciones de flecha son una sintaxis abreviada para definir funciones que no tienen nombre y pueden ser más concisas.

// Las funciones de JavaScript pueden tener parámetros opcionales, parámetros predeterminados y parámetros de descanso. Los parámetros opcionales le permiten definir parámetros que no tienen que pasarse cuando se llama a la función. Los parámetros predeterminados le permiten definir un valor predeterminado para un parámetro si no se proporciona ninguno. Los parámetros de descanso le permiten pasar un número arbitrario de argumentos como una matriz.

// Las funciones en Javascript no necesariamente necesitan parametros.

// Ejemplo utilizando la palabra function
// Defino qué va a hacer esa función: Imprimir un mensaje en consola que "Hello World from a function"

// Regular Function
// function nameFunction(parameter1, parameter2, ..., parameterN){
//     // Block of code to execute
// }

// Tiene que imprimir solamente "Hello World from a function"
// Necesita un parametro esta funcion? Por el momento, no

// function printHelloWorld(){
//     console.log("Hello World from a function");
// }

// // console.log("Está funcionando?")

// // Para que se ejecute la función y se ejecute su bloque de código, debemos invocarla a través de su nombre y colocando ()
// // Llamo a la función printHelloWorld
// printHelloWorld(); // Output: "Hello world from a function"

// Esto podría ser una opción pero estoy repitiendo mucho código. Eso justifica el uso de las funciones: Bloques de código que realizan una tarea
// function printByeWorld() {
//     console.log("Bye World from a function");
// }
// printByeWorld()

// Hacer el código de arriba no sería una buena práctica.
// Entonces hacemos una función que reciba por parámetro el texto a mostrar, de esta forma no tengo que escribir una para Hello y otra para Bye, simplemente invoco a la función pasándole por parámetro el mensaje que quiero

// Regular Function

function printInConsole(message) {
    console.log(message);
}

// Quiero ver el hello, entonces como parámetro le paso el mensaje que quiero
printInConsole("Hello World from a function");
// Quiero ver el bye, entonces como parámetro le paso el mensaje que quiero
printInConsole("Bye World from a function");
// Quiero ver el mensaje "Aguante la 38i"
printInConsole("Aguante la 38i");

// Arrow Function
// Definir el tipo de variable, recomendado como siempre: const
// Como a todas las variables de tipo const, la declaramos, le asignamos un nombre y la inicializamos.
// La flecha refiere al símbolo que se crea utilizando un "=" seguido de un bracket ">", conformando =>
// const nameFunction = (parameter1, parameter2, ..., parameterN) => {
//     // Block of code to execute
//     // Los paréntesis no siempre son necesarios en los parametros y las llaves no siempre son necesarias para el    bloque de código a ejecutar
// }
// Las funciones flecha tienen un retorno implicito para una ejecución de una línea - COntinuará...()

const printInConsoleArrowFunction = (message) => console.log(message);

printInConsoleArrowFunction("Vamos a renderizar este mensaje");
printInConsoleArrowFunction("Aguante la 38i desde Arrow Function");

const suma = 2 + 3;
console.log(suma);
const sum1 = 3 + 5;
console.log(sum1);
const sum2 = 4 + 6;
console.log(sum2);

// Voy a intentar encontrar una forma más eficiente de resolver cualquier suma que me pidan
// Voy a usar una funcion

// Veamos el algoritmo para resolver una suma a través de una función

// 1. Definir la función en el formato regular function
// 1.1 Llamar a la palabra reservada Function ✔️
// 1.2 Definir un nombre apropiado - Preferentemente en inglés ✔️
// 1.3 Escribir los paréntesis característicos de la función ✔️
// 1.4 Escribir las llaves que definen el bloque de código a ejecutar ✔️

// 2. Definir los pasos para resolver una suma de dos números
// 2.1 Tener un primer número
// 2.2 Tener un segundo número
// 2.3 Asegurarme de que entre ellos dos exista el signo "+" para realizar la realizar la operación aritmética
// 2.4 Realizar la operación aritmética

// 3. ¿Cómo hace nuestra función para resolver la suma?
// 3.1 Nombrar "n1" al primer parámetro y deben ser de tipo numérico
// 3.2 Nombrar "n2" al segundo parámetro y deben ser de tipo numérico
// 3.3 Realizar la operación aritmética asegurándome de usar el signo "+" entre n1 y n2
// 3.4 Llamar a console.log y envolver n1+n2 // ¿Es el único camino?

// 4. ¿Cómo hago para que la función "sum" realice efectivamente una suma?
// 4.1 Invoco a la función llamándola por su nombre de referencia seguido de ()
// 4.2 Le paso DOS parámetros asegurándome de que sean números. Luego los validaremos en la función (MVP2)

// // Opción #1 - Escribiendo el console.log como parte del statement de la función.
// function sum(n1, n2){
//     console.log(n1 + n2)
// }
// sum(1, 3);

// // Opción #2 - Escribiendo el primer retorno
// // Pero si llamo a console.log(sum(n1, n2) me tira undefined)
// function sum(n1, n2){
//     console.log("Estoy en la suma")
//     // console.log("typeof n1", typeof n1)
//     // if(typeof n1 === "string" ){
//     //     alert("Me ingresaste un string")
//     // } WIP - Terminar de resolver el algorito
//     // n1 + n2 // Esto, en principio, genera un undefined
//     return n1 + n2 // Esto ahora me muestra el resultado correcto
// }

// console.log(sum(1, 3)); // Output expected: 4
// console.log(sum(2, 4)) // Output expected: 6
// console.log(sum(3, 5)) // Output expected: 8

// // Tarea: Validar que realice una aritmética
// console.log(sum(6, "perrito"))
// console.log(sum("perrito", 6))

// // Puedo utilizar un retorno implícito
// const sumArrowFunction = (a, b) => a + b

// console.log(sumArrowFunction(11, 33)); // Output expected: 44
// console.log(sumArrowFunction(45, 65)) // Output expected: 110

// // function substract(n1, n2) {
// //     return n1 - n2
// // }
// const substract = (a, b) => a - b

// console.log(substract(31, 12)) // Output: 19
// console.log(sum(31, 12)) // Output: 43

// const multiply = (a, b) => a * b

// console.log("Multiplicación: ", multiply(3, 4)) // Output: 12
// console.log("Suma: ", sum(3, 4)); // Output: 7
// console.log("Resta: ", substract(3, 4)); // Output: -1

// const divide = (a, b) => a / b // Recordar que b no puede ser 0 (En el caso de los números reales)

// console.log("División: ", divide(2, 4)) // Output: 1/2 - 0.5

// // Tarea Division 1: Limitar aquellos resultados con muchos decimales a 2, 3 y 4 decimales
// // Para el 2, vamos a usar el caso x.x.2
// // Para el 3, vamos a usar el caso x.x.3
// // Para el 4, vamos a usar el caso x.x.4

// // Tarea Division 1.1: Redondear hacia arriba
// // Tarea Division 1.2: Redondear hacia abajo
// // Tarea Division 1.3: Truncar en la cantidad solicitada

// console.log("División: ", divide(354, 547)) // Output: 0.6471663619744058

// // Output para 1.1.2: 0,65
// // Output para 1.2.2: 0.64
// // Output para 1.3.2: 0.64

// // Output para 1.1.3: 0.647
// // Output para 1.2.3: 0.646
// // Output para 1.3.3: 0.647

// console.log("División: ", divide(100, 0))

// // Tarea Division 2: Validar que el segundo parámetro sea distinto de 0

const sum = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b; // Recordar sobre el valor

function calculateOperation(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        // Pending: Validation for number zero
        case "^":
            return Math.pow(a, b);
        default:
            return "Invalid operation";
    }
}

// Repasar lo que es una "Potencia" en matemática
// 2^3 = 2 * 2 * 2 - 8 - En este caso el 2 representa a la base y el 3 representa a la potencia.
// 3^2 = 3 * 3 - 9
// 4^5 = 4 * 4 * 4 * 4 * 4 -

console.log("Suma en calculateOperation", calculateOperation(2, 3, "+"));
// a = 2
// b = 3
// operation = "+"

console.log("Resta en calculateOperation", calculateOperation(2, 3, "-"));
// a = 2
// b = 3
// operation = "-"

console.log(
    "Multiplicación en calculateOperation",
    calculateOperation(2, 3, "*")
);
// a = 2
// b = 3
// operation = "*"

console.log("División en calculateOperation", calculateOperation(2, 3, "/"));
// a = 2
// b = 3
// operation = "/"

console.log("Potencia en calculateOperation", calculateOperation(2, 3, "^"));
// a = 2
// b = 3
// operation = "^"

const calculate = (a, b, operation) => {
    console.log(a, b, operation);
    const operations = {
        "+": () => a + b,
        "-": () => a - b,
        "*": () => a * b,
        "/": () => a / b,
        "": () => Math.pow(a, b),
    };
    // operations[operation]; // output: +, -, *, /, ^
    const operacionFunc = operations[operation];

    // operations[operation] con operation = "+" // output: () => a + b
    // operations[operation] con operation = "-" // output: () => a - b
    // operations[operation] con operation = "*" // output: () => a * b
    // operations[operation] con operation = "/" // output: () => a / b
    // operations[operation] con operation = "^" // output: () => Math.pow(a, b)
    // operations[operation] con operation = "}" // output: undefined

    if (operacionFunc) {
        return operacionFunc(a, b);
    } else {
        return "Invalid operation";
    }
};

console.log("Suma en calculate", calculate(16, 3, "+"));
console.log("Resta en calculate", calculate(16, 3, "-"));
// Tarea: Probar con más ejemplos y si quieren, sumar más operaciones

// Template Strings: Se usa entre backticks y las variables se colocan entre ${}
const getLengthString = (string) => {
    return `El mensaje colocado posee una longitud de ${string.length} caracteres`;
};

console.log(getLengthString("gato"));
console.log(getLengthString("perro"));
console.log(getLengthString("gato y perro"));

function calculateAverage(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;
}

const numbersToAverage = [2, 4, 6, 8];
console.log(calculateAverage(numbersToAverage));

function capitalizeFirstLetter(string) {
    // return string.charAt(0).toUpperCase() + string.slice(1);
    // Selecciono la primera letra
    const firstLetter = string.charAt(0)
    console.log(firstLetter)
    // La convierto a mayúscula
    const firstLetterUpperCase = firstLetter.toUpperCase()
    console.log(firstLetterUpperCase)
    // Selecciono el resto de la palabra
    const restOfTheWord = string.slice(1)
    console.log(restOfTheWord)
    // Concateno la primera letra en mayúscula con el resto de la palabra
    return firstLetterUpperCase + restOfTheWord
}

// Example usage:
console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
console.log(capitalizeFirstLetter("aguante la 38i"));

const textToTransform = "    ¡Comisión 38i La Mejor!    ";
// Output: comision-38i-la-mejor

const transformTextToSlug = (text) => {
    // text: ¡Comisión 38i La Mejor!
    return (
        text
            .normalize("NFD")
            //    ¡Comisio´n 38i La Mejor!
            .toLowerCase()
            //    ¡comisio´n 38i la mejor!
            .trim()
            // ¡comisio´n 38i la mejor!
            .replace(/\s+/g, " ") // Esta RegEx se encarga de reemplazar los espacios intermedios entre palabra y palabra por lo que pasemos en el segundo parámetro, en este caso lo reemplaza con un espacio
            // ¡comisio´n 38i la mejor!
            .replace(/[^\w ]+/g, "")
            // quita los caracteres especiales
            .replace(/\s+/g, "-")
            // reemplaaza los espacios con un guion medio
    );
};

console.log(transformTextToSlug(textToTransform));


// Resolviendo los snippets de Slack
// Ejercicio #1
// Nombre de la función: isPalindrome
// ¿El nombre nos aporta algo de información? Sí,y encima, al utilizar el "is" por delante, nos indica que la función nos va a devolver un valor booleano, es decir, un true o un false
// ¿Qué parámetros recibe? Recibe un string - Ejemplo: "anita lava la tina" - Por lo tanto, cuando invoque a la función, debo pasar una cadena de texto (string) como parámetro. 

// function isPalindrome(string){
//     return string === string.split("").reverse().join("")
// }

// console.log(isPalindrome("anita lava la tina")) // Output: True
// console.log(isPalindrome("hello")) // Output: False


function isPalindrome(string) {
    const stringSpliteada = string.split("")
    console.log({stringSpliteada}) // Output: ARRAY con todos los caracteres. 
    const stringRevertida = stringSpliteada.reverse()
    console.log({stringRevertida})
    const stringJoineadaParaRetornar = stringRevertida.join("")
    console.log({stringJoineadaParaRetornar})

    return string === stringJoineadaParaRetornar // Con palabras únicas esto funciona pero no con frases... A MENOS QUEEEEEE...

    // 1. Tratar el string de entrada para quitar los espacios. "esta frase" queda como "estafrase"
    // 2. Tratar el string de entrada para que todos los caracteres sean minúsculas o mayúsculas. "ESTAfrase" queda como "estafrase" o "ESTAFRASE"
    // 3. Antes de retornar me aseguro que el resultado final tampoco tenga esos espacios

    // return string === string.split("").reverse().join("");
}


// console.log(isPalindrome("anita lava la tina")) // Output: True
console.log(isPalindrome("neuquen"))

// Tarea: Hacer una explicación similar con el Ejercicio #2 de Slack

// Funciones de Orden Superior. 

const stringsArray = [
    "Belu está en el grupo 4",
    "Leo",
    "Cari",
    "Luis",
    "Javascript is awesome ✔️",
    "React is awesome ✔️",
    "Node is awesome ✔️",
];

console.log({stringsArray})

// Ejemplo de un for
for (let i = 0; i < stringsArray.length; i++) {
    console.log(stringsArray[i]);
}

// Ejemplo de un forEach
stringsArray.forEach((string) => console.log("forEach", string))

const animals = [
    "dog",
    "Cat",
    "fish",
    "bird",
    "snake",
    "bear"
]

animals.forEach(animal => console.log(animal))

// Cuatro funciones de orden superior SUPER SUPER SUUUUUUUUPER UTILES: Map, Filter, Reduce, Find
// Ejemplo con map - Itera cada elemento de un iterable y me brinda la posibilidad de retornar un nuevo array lo cual es útil porque es NO DESTRUCTIVO

const animalsWithStar = animals.map((animal) => {
    return `${animal} 🌟`
})
console.log({animalsWithStar})

const animalsObjects = animals.map((animal, index) => {
    console.log("animal", animal)
    console.log("index", index)

    return {
        id: index,
        name: animal
    }
})

console.log({animalsObjects})


// Ejemplo con filter - Itera cada elemento de un iterable y me brinda la posibilidad de retornar un nuevo array con los elementos que cumplan con la condición que le pase como parámetro.

const animalsFiltered = animals.filter(animal => animal.toLowerCase() === "cat")
// "dog" === "cat" // False
// "cat" === "cat" // True
// "fish" === "cat" // False
// "bird" === "cat" // False
// "snake" === "cat" // False
console.log({animalsFiltered})

const numbersToFilter = [
    1,
    2,
    3,
    4,
    5,
    6,
]

// 2/2 = 1 - Resto: 0
// 3/2 = 1 - Resto: 1
// 4/2 = 2 - Resto: 0
// 5/2 = 2 - Resto: 1
// 6/2 = 3 - Resto: 0

const evenNumbers = numbersToFilter.filter(number => number % 2 === 0)
console.log({evenNumbers})

const notEvenNumbers = numbersToFilter.filter(number => number % 2 !== 0)
console.log({notEvenNumbers})

// Tarea: Buscar cómo funciona Find y Some.


const developers = [
    {
        name: "Juan",
        profileLinkedIn: "url Linkedin",
        profileGithub: "url github",
        photoProfile: "...url de foto",
    },
    {
        name: "Marge",
        profileLinkedIn: "url Linkedin",
        profileGithub: "url github",
        photoProfile: "...url de foto",
    },
    {
        name: "Bart",
        profileLinkedIn: "url Linkedin",
        profileGithub: "url github",
        photoProfile: "...url de foto",
    },
];

developers.forEach((developer) => console.log(developer));
// acá devolvemos el DOM de manera dinámica

const products = [
    {
        name: "Coca Cola",
        price: 100,
        description: "Bebida gaseosa",
        image: "https://www.coca-cola.com/content/dam/journey/us/en/private/2020/01/2020-01-08-coca-cola-zero-sugar-1.jpg",
    },
];

// Agregar el número de ID a los developers de manera dinámica utilizando un .map()

const developersWithIndex = developers.map((developer, index) => {
    return {
        // name: developer.name,
        // profileLinkedIn: developer.profileLinkedIn,
        // profileGithub: developer.profileGithub,
        // photoProfile: developer.photoProfile,
        // Con esto copiamos todas las propiedades que habían en developer
        ...developer,
        // id: Math.random() * 1000, // Asignamos un ID de manera Random por cada usuario.
        id: index + 1,
    };
});

console.log({ developersWithIndex });

const arrayAnimals1 = ["dog", "cat"];
const arrayAnimals2 = ["fish", "bear"];
const arrayAnimals3 = ["mouse"];

// const resultArrays = arrayAnimals1.concat(arrayAnimals2, arrayAnimals3)

// const total = resultArrays.concat(arrayAnimals3)

// console.log(total) // Atención a "mouse" - ver grabación
// console.log(resultArrays)

// Método de propagación o Spread Operator

const arraySpreadOperator = [
    ...arrayAnimals1,
    ...arrayAnimals2,
    ...arrayAnimals3,
];
// const arraySpreadOperator = ["dog", "cat"]; // 1° Luego de ...arrayAnimals1
// const arraySpreadOperator = ["dog", "cat", "fish", "bear"]; // 2° Luego de ...arrayAnimals2
// const arraySpreadOperator = ["dog", "cat", "fish", "bear", "mouse"]; // 3° Luego de ...arrayAnimal3

console.log({ arraySpreadOperator });

const objectUser = {
    name: "Juan",
    profileLinkedIn: "url Linkedin",
    profileGithub: "url github",
    photoProfile: "...url de foto",
};

console.log({ objectUser });

// // Cuando yo quiera agregar una clave, debería hacer object.newKey = newValue

// objectUser.id = 1

// console.log({objectUser})

// Cómo puedo hacer para agregar una nueva clave a un objeto con el Spread Operator?

const objectUserWithID = {
    ...objectUser,
    id: 1,
};
console.log({ objectUserWithID });