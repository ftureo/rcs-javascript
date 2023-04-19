// *-------- Apertura de obtener elementos del DOM con JS --------*

console.log("DOM working");
console.log("a ver que muestra 'document'", document);

const firstH1 = document.getElementById("first-h1");
console.log("first element in DOM", firstH1);

// *-------- Cierre de obtener elementos del DOM con JS --------*

// *-------- Apertura de agregar una key y colocar texto con JS --------*

const secondH1 = document.getElementById("second-h1"); // Esto no sería una buena práctica ya que tenemos dos h1 adyacentes y consecutivos
console.log("second element in DOM", secondH1.textContent);

secondH1.textContent = "Primer texto insertado con Javascript";

console.log("other console for second element in DOM", secondH1.textContent);

// *-------- Cierre de agregar una key y colocar texto con JS --------*

// *-------- ¿Todo es un array? Apertura --------*

const paragraphs = document.getElementsByClassName("text");

console.log("paragraphs", paragraphs); // Output: HTMLCollection
console.log(Array.isArray(paragraphs));

// paragraphs.forEach(paragraph => console.log(paragraph)) // No se puede aplicar un forEach a una HTMLCollection

const paragraphsArray = Array.from(paragraphs);

paragraphsArray.forEach((paragraph) => console.log(paragraph));

const paragraphsQuery = document.querySelectorAll("text")

console.log("paragraphsQuery", paragraphsQuery); // Output: NodeList

paragraphsQuery.forEach((paragraph) => console.log("a ver que muestra si itero una NodeList", paragraph)); // Pareciera que la NodeList si permite que ejecutemos un forEach

console.log("¿Es un array?", Array.isArray(paragraphsQuery));

// *-------- Apertura getElementById y getElementsByClassName vs querySelector y querySelectorAll --------*

const elementByClassName = document.querySelector(".text"); // Se queda con la primera coincidencia
const elementById = document.querySelector("#second-h1");

console.log("usando querySelector", elementByClassName);
console.log("usando querySelector", elementById);

// *-------- Cierre getElementById y getElementsByClassName vs querySelector y querySelectorAll --------*



const cardsMessiByClassName = document.getElementsByClassName("card") // NO Permite usar un forEach
console.log({cardsMessiByClassName})
const cardsMessiByQuerySelectorAll = document.querySelectorAll(".card") // Permite usar un forEach
console.log({cardsMessiByQuerySelectorAll})

// *-------- Cierre ¿Todo es un array? Cierre --------*

// *-------- Apertura de agregar y quitar una clase de CSS a un elemento con JS --------*

cardsMessiByQuerySelectorAll.forEach(card => {
    card.classList.add("messi")
    card.classList.remove("perrito")
})

// *-------- Cierre de agregar y quitar una clase de CSS a un elemento con JS --------*


// *-------- Apertura de agregar estilos de CSS a un elemento con JS --------*

cardsMessiByQuerySelectorAll.forEach(card => {
    console.log("card", card);
    card.style.backgroundColor = "red";
    card.style.color = "white";
    card.style.borderRadius = "3rem";
})

// *-------- Cierre de agregar estilos de CSS a un elemento con JS --------*


// *-------- Apertura de agregar un elemento al DOM con JS --------*

console.log("*----- Empezamos a crear DOM dinámico -----*");


const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653",
            },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
        },
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990",
            },
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services",
        },
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342",
            },
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems",
        },
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
            geo: {
                lat: "-71.4197",
                lng: "71.7478",
            },
        },
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        company: {
            name: "Considine-Lockman",
            catchPhrase: "Synchronised bottom-line interface",
            bs: "e-enable innovative applications",
        },
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
            geo: {
                lat: "24.8918",
                lng: "21.8984",
            },
        },
        phone: "210.067.6132",
        website: "elvis.io",
        company: {
            name: "Johns Group",
            catchPhrase: "Configurable multimedia task-force",
            bs: "generate enterprise e-tailers",
        },
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
            street: "Ellsworth Summit",
            suite: "Suite 729",
            city: "Aliyaview",
            zipcode: "45169",
            geo: {
                lat: "-14.3990",
                lng: "-120.7677",
            },
        },
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
        company: {
            name: "Abernathy Group",
            catchPhrase: "Implemented secondary concept",
            bs: "e-enable extensible e-tailers",
        },
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
            street: "Dayna Park",
            suite: "Suite 449",
            city: "Bartholomebury",
            zipcode: "76495-3109",
            geo: {
                lat: "24.6463",
                lng: "-168.8889",
            },
        },
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
        company: {
            name: "Yost and Sons",
            catchPhrase: "Switchable contextually-based project",
            bs: "aggregate real-time technologies",
        },
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
                lat: "-38.2386",
                lng: "57.2232",
            },
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models",
        },
    },
];

const usersNames = users.map(user => user.name)
console.log({ usersNames })


function paintDom(){
    // Inicializo una variable de tipo reasignable que empieza en vacío (empty string) ✔️
    let bodyOfTheDiv = ``;
    console.log({ bodyOfTheDiv });

    // Obtener el elemento que quiero actualizar/crear ✔️
    const tagToUpdate = document.getElementById("root");
    console.log({ tagToUpdate });

    // Itero todos los elementos del array para insertarlos en el DOM 
    for(let i = 0; i < users.length; i++) {

        // Por cada iteración vamos a estar reasignando e incrementando la variable bodyOfTheDiv con un div container que tiene una clase container-name y que en su interior tiene un nodo hijo que es un h1 t ey tiene como text contenl nombre del usuario 
        bodyOfTheDiv += `
            <div class="container-name">
                <h1>${users[i].name}</h1>
            </div>
        `;
    }

    console.log({ bodyOfTheDiv })

    tagToUpdate.innerHTML = bodyOfTheDiv

    console.log("Por el amor de Dios que esto funcione así nos vamos a descansar    ")
}


paintDom()



const containerPrimary = document.getElementById("container-primary")
console.log(containerPrimary)

const containersSecondariesQuerySelectorAll = document.querySelectorAll(".container-secondary")
console.log(containersSecondariesQuerySelectorAll)

containersSecondariesQuerySelectorAll.forEach(containerSecondary => {
    containerSecondary.classList.add("banner")
})

console.log(containersSecondariesQuerySelectorAll)

const containerSecondaryGetElementsbyClassname =
    document.getElementsByClassName("container-secondary");

console.log(containerSecondaryGetElementsbyClassname)

const getElementsByClassnameToArray = Array.from(containerSecondaryGetElementsbyClassname)
console.log(getElementsByClassnameToArray)

// Escribiendo comentarios con JSDoc
/**
 * Esta función se encarga de capturar un elemento del DOM, iterar el array, reasigna el contenido en cada iteración y finaliza insertando el dom en el elemento capturado
 * 
 * Recomendado: Llamar ```tag``` a la variable del DOM que vamos a actualizar
 * 
 * TODO: Hacer que pueda recibir más parámetros para: 
 * 
 * TODO: Separar responsabilidad de iterar y pintar DOM
 * @param {[]} users 
 */
const paintTexts = (users) => {
    //1° - Están llegando los parámetros? 
    // console.log(users)

    //2° - Me aseguro que las variables tengan el valor que corresponde 
    let body = ``
    // console.log(body)

    //3° - Asegurarme que estoy capturando bien los elementos del DOM
    const tag = document.getElementById("paragraphs-texts");
    // console.log(tag)

    // 4° - Si itero para agregarles una propiedad, contenido o lo que sea, me aseguro de que las variables salgan del ciclo correctamente. 
    for(let i = 0; i < users.length; i++) {
        body += `
            <p>${users[i].email}</p>
        `
    }

    // console.log(body) - Acá tiene que salir actualizado

    // Estructura de cómo utilizar y entender el innerHTML
    // tagName.innerHTML = content    

    // 5° - Aseguro que estoy insertando el código HTML y CSS correctamente
    tag.innerHTML = body // Acá ya debería impactar en el DOM
    console.log("Qué capos que estamos en JS")
}

paintTexts(users)


