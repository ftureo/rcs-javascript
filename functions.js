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

const printInConsoleArrowFunction = () => console.log("Vamos a renderizar este mensaje")