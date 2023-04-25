// const perrito = "Fabi"
// console.log(perrito)

// console.log("working asynchronism")
// console.log(1)
// console.log(2)
// console.log(3)

// setTimeout(() => {
//     console.log("Este log está dentro del setTimeout")
//     // alert("Se cumplió el tiempo de espera")
// }, 5000)

// // 2000ms = 2s - ms: milisegundos - s: segundos

// // console.log("1")
// // console.log("2")
// // console.log("3")
// // console.log("user", user) // User nunca fue definido por lo cual no se puede mostrar por consola
// // console.log("4") // No se ejecuta - Se rompió el hilo de ejecución
// // console.log("5") // No se ejecuta - Se rompió el hilo de ejecución

// // Entonces, aparece el concepto de asincronismo
// // Asincronismo refiere a las operaciones que se ejecutan en segundo plano y que podemos controlar de alguna manera
// // Asincronismo es la capacidad de ejecutar código sin bloquear el hilo de ejecución

// setTimeout(function(){
//     console.log("Soy el primer timeout y también el primer callback llamado como tal")
// }, 5000) // El console.log() se ejecuta después de 5 segundos

// setTimeout(() => {
//     console.log("Soy el segundo timeout y también el segundo callback llamado como tal")
// }, 3000) // El console.log() se ejecuta después de 3 segundos

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 3000);
//     }, 7000);
// }, 1000);

// setTimeout(() => {
//     //Primera línea
//     // Segunda línea
// }, timer)

// Output: 1, 2, 3

console.log("1");
setTimeout(function () {
    console.log("2");
}, 5000);
console.log("3");
setTimeout(function () {
    console.log("4");
    setTimeout(() => {
        console.log("5");
    }, 4000);
}, 2000);

// 1 3 4 2 5

// Para resolver peticiones HTTP de tipo GET tenemos tiempos de demora que son inciertos entonces tenemos que encontrar un mecanismo que nos permita trabajar con ese tiempo sin romper el hilo de ejecución.

// HTTP: Hypertext Transfer Protocol
// GET: Obtener - HTTP Verb
// POST: Crear - HTTP Verb
// PUT: Actualizar Toda la representación- HTTP Verb
// PATCH: Actualizar Parte de la representación - HTTP Verb
// DELETE: Eliminar - HTTP Verb

// HTTP Status Code
// 200: Ok
// 201: Created
// 204: No Content
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 500: Internal Server Error

// API Request - Hacer un pedido a una API es decir un recurso externo.
// Ejemplos de API:
// - Google Maps
// - Mercado Libre
// - Meta
// - JSON PlaceHolder
// - The Movie DB
// - Spotify
// - FakeStoreApi - Products

// const API_URL = "https://fakestoreapi.com/products"

// Vamos a obtener los productos de la API FakeStoreAPI a través de los mecanismos que nos ofrece JS

// const getProducts = () => {
//     // Vamos a hacer la petición a través de fetch y como parámetro le pasamos la URL de la API que queremos consultar
//     // console.log(fetch(API_URL))
//         // El método fetch() nos devuelve una promesa
//         // Una promesa es un objeto que representa un valor que estará disponible en algún momento en el futuro
//         // El método then() nos permite ejecutar una función cuando la promesa se resuelve
//         fetch(API_URL)
//             .then(response => response.json()) // .json() también me devuelve una promesa entonces, vuelvo a utilizar .then()
//             .then(data => paintDOM(data)) // Lo muestro por consola o lo tomo como parametro para llamar a una función que pinte el DOM
// }
// getProducts()

// const paintDOM = (APIresponse) => {
//     // Creo elementos html
//     // Inserto variables
//     // Pinto el DOM
// }

const API_URL_PRODUCTS_FAKESTOREAPI = "https://fakestoreapi.com/products";
const API_URL_USERS_FAKESTOREAPI = "https://fakestoreapi.com/users";
const API_URL_USERS_JSONPLACEHOLDER =
    "https://jsonplaceholder.typicode.com/users";
const API_URL_POSTS_JSONPLACEHOLDER =
    "https://jsonplaceholder.typicode.com/posts";

/**
 * Functión genérica para obtener la respuesta de una API pasándole la URL en cuestión como parámetro
 * 
 * @param {String} API_URL 
 */
const getData = (API_URL) => {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

getData(API_URL_POSTS_JSONPLACEHOLDER)
getData(API_URL_USERS_JSONPLACEHOLDER)
getData(API_URL_USERS_FAKESTOREAPI)
getData(API_URL_PRODUCTS_FAKESTOREAPI)
