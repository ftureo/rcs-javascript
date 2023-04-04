console.log("Functions Working")

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
    console.log(message)
}

// Quiero ver el hello, entonces como parámetro le paso el mensaje que quiero
printInConsole("Hello World from a function")
// Quiero ver el bye, entonces como parámetro le paso el mensaje que quiero
printInConsole("Bye World from a function")
// Quiero ver el mensaje "Aguante la 38i"
printInConsole("Aguante la 38i")


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

printInConsoleArrowFunction("Vamos a renderizar este mensaje")
printInConsoleArrowFunction("Aguante la 38i desde Arrow Function")

const suma = 2 + 3 
console.log(suma)
const sum1 = 3 + 5
console.log(sum1)
const sum2 = 4 + 6
console.log(sum2)


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

const sum = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b // Recordar sobre el valor 


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

console.log("Suma en calculateOperation", calculateOperation(2, 3, "+"))
// a = 2
// b = 3
// operation = "+"

console.log("Resta en calculateOperation", calculateOperation(2, 3, "-"));
// a = 2
// b = 3
// operation = "-"

console.log("Multiplicación en calculateOperation", calculateOperation(2, 3, "*"));
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
