// Me permite mostrar datos en la consola del navegador
console.log("Hello world!");
console.log("Hola comisión 38i")

// Me obliga a asignar el valor al momento de declararla
const myFirstConstVarible = "Hola Comisión desde CONST"
// Me permiten declararlas sin asignarles el valor o le puedo asignar un value y luego reasignarlo
// Esto veríamos/veremos siempre que no se reasigne su valor más adelante
let myFirstLetVariable = "Hola Comisión desde LET"
var myFirstVarVariable = "Hola Comisión desde VAR"

// myFirstConstVarible = "Other Value" // Esto no se puede hacer

// Acá reasignamos los valores de las variables
myFirstLetVariable = "Other Value desde LET"
myFirstVarVariable = "Other Value desde VAR"

// Además podemos inicializarlas sin declararles un valor en particular y más adelante realizar esa asignación

let mySecondLetVariable
var mySecondVarVariable

console.log("mySecondLetVariable: ", mySecondLetVariable);
console.log("mySecondVarVariable: ", mySecondVarVariable);

mySecondLetVariable = "Other Value for Second LET variable"
mySecondVarVariable = "Other Value for Second VAR variable"

console.log("mySecondLetVariable: ", mySecondLetVariable);
console.log("mySecondVarVariable: ", mySecondVarVariable);

// TODO: Ver diferencias entre VAR y LET


// myFirstLetVariable = "Other Value"
console.log("CONST: ", myFirstConstVarible);
console.log("LET: ", myFirstLetVariable);
console.log("VAR: ", myFirstVarVariable);

const myStringVariable = "Aguante la Comisión 38i"
const myNumberVariable = 38
const myNumberFloatVariable = 3.14
const myNullVariable = null
const myTrueBoolean = true
const myFalseBoolean = false
const myUndefinedVariable = undefined


console.log("myStringVariable: ", myStringVariable);
console.log("myNumberVariable: ", myNumberVariable);
console.log("myNumberFloatVariable: ", myNumberFloatVariable);
console.log("myNullVariable: ", myNullVariable);
console.log("myTrueBoolean: ", myTrueBoolean);
console.log("myFalseBoolean: ", myFalseBoolean);
console.log("myUndefinedVariable: ", myUndefinedVariable);

const numbersArray = [ 0, 1]
const stringsArray = ["Belu está en el grupo 4", "Leo", "Cari", "Luis", "Javascript is awesome ✔️"]
const mixedArray = [0, "Belu", true, null, undefined, [1, 2, 3, 4, 5], { key1: "Value1", key2: "Value2"} ];

console.log("numbersArray: ", numbersArray);
console.log("stringsArray: ", stringsArray);
console.log("mixedArray: ", mixedArray);

const myFirstObject = {
    key1: "Value 1",
    key2: "Value 2",
    key3: "Value 3",
}

const mentorInfo = {
    name: "Fabi",
    lastname: "Tureo",
    age: 28,
    isMentor: true,
    hasPets: true,
    hobbiesArray: ["Programar", "Catar vinos", "Jugar fútbol", "Tocar la guitarra"],
    hobbiesObject: {
        hobbieOne: "Programar", 
        hobbieTwo: "Catar vinos",
        hobbieThree: "Jugar fútbol",
        hobbieFour: "Tocar la guitarra"
    },
    hasFuture: undefined,
    // dog debería ser una clave. 
    // además, dog debería ser un objeto ya que dog.name nos indica que name debería ser una clave disponible dentro de dog, por ejemplo
    // dog: {
    //     name: "Perrito Malvado"
    // }
}

console.log("myFirstObject: ", myFirstObject);
console.log("mentorInfo: ", mentorInfo);


// typeof 
console.log(typeof myStringVariable) // Output: string
console.log(typeof myNumberVariable) // Output: number
console.log(typeof mentorInfo) //Output: object
console.log(typeof stringsArray)

console.log("es un array posta el array?", Array.isArray(stringsArray));
console.log("es un array posta el objeto?", Array.isArray(myFirstObject));
console.log("es un array este string?"), Array.isArray("Perrito salvaje") // Posta?


/* -------- Accediendo a elementos específicos en un array ------ */ 

// Quiero ver el array que está dentro del mixedArray, en la posición 5
// Quiero ver el objeto que está dentro del mixedArray, en la posición 6.
// Siguiendo la recomendación que nos brinda: https://keepcoding.io/blog/acceder-elementos-array-en-javascript/#:~:text=Entonces%2C%20para%20poder%20acceder%20a,elemento%20al%20que%20queremos%20acceder.

console.log("Posición 5", mixedArray[5]) // Output: ARRAY
console.log("Posición 6", mixedArray[6]) // Output: OBJECT
console.log("Mostramos el mensaje", stringsArray[4]) // Output: "Javascript is Awesome"

// Quiero acceder al número 3 dentro del mixedArray
console.log("Posición 5, posición 2 correspondiente al número 3: ", mixedArray[5][2]) // Output: 3

/* -------- Accediendo a elementos específicos en un objetos ------ */ 
// Quiero mostrar el nombre de mentorInfo
// Output: "Fabián"
console.log("Nombre del Mentor", mentorInfo.name)
// Quiero mostrar el apellido de mentorInfo
//Output: "Tureo"
console.log("Apellido del Mentor", mentorInfo.lastname);

// console.log("Perro del Mentor", mentorInfo.dog.name) // Output:  index.js:128 Uncaught TypeError: Cannot read properties of undefined (reading 'name')

console.log("Qué me devuelve 'dog'?", mentorInfo.dog) // Output: 

console.log("Este no se bloqueó")

// Quiero obtener:

// La info sobre si es mentor o no
console.log(mentorInfo.isMentor) // ✔️
// La edad
console.log(mentorInfo.age); // ✔️
// Jugar al futbol del objeto
console.log(mentorInfo.hobbiesObject.hobbieThree) // ✔️
// Programar del array
console.log(mentorInfo.hobbiesArray[0]) // ✔️

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
]

// Quiero mostrar por consola que la latitud es: -37.3159
console.log(users[0].address.geo.lat);
// Quiero mostrar por consola que la ciudad es: Gwenborough
console.log(users[0].address.city);
// Quiero obtener la frase de captura de la compañia: "Multi-layered client-server neural-net"
console.log(users[0].company.catchPhrase);

// Pegar la respuesta de countries. 

const countries = [
    {
        name: {
            common: "Barbados",
            official: "Barbados",
            nativeName: { eng: { official: "Barbados", common: "Barbados" } },
        },
        tld: [".bb"],
        cca2: "BB",
        ccn3: "052",
        cca3: "BRB",
        cioc: "BAR",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: { BBD: { name: "Barbadian dollar", symbol: "$" } },
        idd: { root: "+1", suffixes: ["246"] },
        capital: ["Bridgetown"],
        altSpellings: ["BB"],
        region: "Americas",
        subregion: "Caribbean",
        languages: { eng: "English" },
        translations: {
            ara: { official: "باربادوس", common: "باربادوس" },
            bre: { official: "Barbados", common: "Barbados" },
            ces: { official: "Barbados", common: "Barbados" },
            cym: { official: "Barbados", common: "Barbados" },
            deu: { official: "Barbados", common: "Barbados" },
            est: { official: "Barbados", common: "Barbados" },
            fin: { official: "Barbados", common: "Barbados" },
            fra: { official: "Barbade", common: "Barbade" },
            hrv: { official: "Barbados", common: "Barbados" },
            hun: { official: "Barbados", common: "Barbados" },
            ita: { official: "Barbados", common: "Barbados" },
            jpn: { official: "バルバドス", common: "バルバドス" },
            kor: { official: "바베이도스", common: "바베이도스" },
            nld: { official: "Barbados", common: "Barbados" },
            per: { official: "باربادوس", common: "باربادوس" },
            pol: { official: "Barbados", common: "Barbados" },
            por: { official: "Barbados", common: "Barbados" },
            rus: { official: "Барбадос", common: "Барбадос" },
            slk: { official: "Barbados", common: "Barbados" },
            spa: { official: "Barbados", common: "Barbados" },
            swe: { official: "Barbados", common: "Barbados" },
            tur: { official: "Barbados", common: "Barbados" },
            urd: { official: "بارباڈوس", common: "بارباڈوس" },
            zho: { official: "巴巴多斯", common: "巴巴多斯" },
        },
        latlng: [13.16666666, -59.53333333],
        landlocked: false,
        area: 430.0,
        demonyms: {
            eng: { f: "Barbadian", m: "Barbadian" },
            fra: { f: "Barbadienne", m: "Barbadien" },
        },
        flag: "\uD83C\uDDE7\uD83C\uDDE7",
        maps: {
            googleMaps: "https://goo.gl/maps/2m36v8STvbGAWd9c7",
            openStreetMaps: "https://www.openstreetmap.org/relation/547511",
        },
        population: 287371,
        fifa: "BRB",
        car: { signs: ["BDS"], side: "left" },
        timezones: ["UTC-04:00"],
        continents: ["North America"],
        flags: {
            png: "https://flagcdn.com/w320/bb.png",
            svg: "https://flagcdn.com/bb.svg",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/bb.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/bb.svg",
        },
        startOfWeek: "monday",
        capitalInfo: { latlng: [13.1, -59.62] },
        postalCode: { format: "BB#####", regex: "^(?:BB)*(\\d{5})$" },
    },
    {
        name: {
            common: "British Indian Ocean Territory",
            official: "British Indian Ocean Territory",
            nativeName: {
                eng: {
                    official: "British Indian Ocean Territory",
                    common: "British Indian Ocean Territory",
                },
            },
        },
        tld: [".io"],
        cca2: "IO",
        ccn3: "086",
        cca3: "IOT",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: { USD: { name: "United States dollar", symbol: "$" } },
        idd: { root: "+2", suffixes: ["46"] },
        capital: ["Diego Garcia"],
        altSpellings: ["IO"],
        region: "Africa",
        subregion: "Eastern Africa",
        languages: { eng: "English" },
        translations: {
            ara: {
                official: "إقليم المحيط الهندي البريطاني",
                common: "إقليم المحيط الهندي البريطاني",
            },
            bre: {
                official: "Tiriad breizhveurat Meurvor Indez",
                common: "Tiriad breizhveurat Meurvor Indez",
            },
            ces: {
                official: "Britské indickooceánské území",
                common: "Britské indickooceánské území",
            },
            cym: {
                official: "Tiriogaeth Brydeinig Cefnfor India",
                common: "Tiriogaeth Brydeinig Cefnfor India",
            },
            deu: {
                official: "Britisches Territorium im Indischen Ozean",
                common: "Britisches Territorium im Indischen Ozean",
            },
            est: {
                official: "Briti India ookeani ala",
                common: "Briti India ookeani ala",
            },
            fin: {
                official: "Brittiläinen Intian valtameren alue",
                common: "Brittiläinen Intian valtameren alue",
            },
            fra: {
                official: "Territoire britannique de l' océan Indien",
                common: "Territoire britannique de l'océan Indien",
            },
            hrv: {
                official: "British Indian Ocean Territory",
                common: "Britanski Indijskooceanski teritorij",
            },
            hun: {
                official: "Brit Indiai-óceáni Terület",
                common: "Brit Indiai-óceáni Terület",
            },
            ita: {
                official: "Territorio britannico dell'Oceano Indiano",
                common: "Territorio britannico dell'oceano indiano",
            },
            jpn: {
                official: "イギリス領インド洋地域",
                common: "イギリス領インド洋地域",
            },
            kor: { official: "인도 공화국", common: "인도" },
            nld: {
                official: "Brits Indische Oceaan Territorium",
                common: "Britse Gebieden in de Indische Oceaan",
            },
            per: {
                official: "قلمرو بریتانیا در اقیانوس هند",
                common: "قلمرو بریتانیا در اقیانوس هند",
            },
            pol: {
                official: "Brytyjskie Terytorium Oceanu Indyjskiego",
                common: "Brytyjskie Terytorium Oceanu Indyjskiego",
            },
            por: {
                official: "British Indian Ocean Territory",
                common: "Território Britânico do Oceano Índico",
            },
            rus: {
                official: "Британская территория Индийского океана",
                common: "Британская территория в Индийском океане",
            },
            slk: {
                official: "Britské indickooceánske územie",
                common: "Britské indickooceánske územie",
            },
            spa: {
                official: "Territorio Británico del Océano Índico",
                common: "Territorio Británico del Océano Índico",
            },
            swe: {
                official: "Brittiska territoriet i Indiska Oceanen",
                common: "Brittiska territoriet i Indiska Oceanen",
            },
            tur: {
                official: "Britanya Hint Okyanusu Toprakları",
                common: "Britanya Hint Okyanusu Toprakları",
            },
            urd: {
                official: "برطانوی بحرہند خطہ",
                common: "برطانوی بحرہند خطہ",
            },
            zho: { official: "英属印度洋领地", common: "英属印度洋领地" },
        },
        latlng: [-6.0, 71.5],
        landlocked: false,
        area: 60.0,
        demonyms: { eng: { f: "Indian", m: "Indian" } },
        flag: "\uD83C\uDDEE\uD83C\uDDF4",
        maps: {
            googleMaps: "https://goo.gl/maps/bheNucgekVEYozoi6",
            openStreetMaps: "https://www.openstreetmap.org/relation/1993867",
        },
        population: 3000,
        car: { signs: ["GB"], side: "right" },
        timezones: ["UTC+06:00"],
        continents: ["Asia"],
        flags: {
            png: "https://flagcdn.com/w320/io.png",
            svg: "https://flagcdn.com/io.svg",
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: { latlng: [-7.3, 72.4] },
    },
    {
        name: {
            common: "Republic of the Congo",
            official: "Republic of the Congo",
            nativeName: {
                fra: {
                    official: "République du Congo",
                    common: "République du Congo",
                },
                kon: {
                    official: "Repubilika ya Kongo",
                    common: "Repubilika ya Kongo",
                },
                lin: {
                    official: "Republíki ya Kongó",
                    common: "Republíki ya Kongó",
                },
            },
        },
        tld: [".cg"],
        cca2: "CG",
        ccn3: "178",
        cca3: "COG",
        cioc: "CGO",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            XAF: { name: "Central African CFA franc", symbol: "Fr" },
        },
        idd: { root: "+2", suffixes: ["42"] },
        capital: ["Brazzaville"],
        altSpellings: ["CG", "Congo", "Congo-Brazzaville"],
        region: "Africa",
        subregion: "Middle Africa",
        languages: { fra: "French", kon: "Kikongo", lin: "Lingala" },
        translations: {
            ara: { official: "جمهورية الكونغو", common: "جمهورية الكونفو" },
            bre: { official: "Republik Kongo", common: "Kongo-Brazzaville" },
            ces: { official: "Konžská republika", common: "Kongo" },
            cym: {
                official: "Gweriniaeth y Congo",
                common: "Gweriniaeth y Congo",
            },
            deu: { official: "Republik Kongo", common: "Kongo" },
            est: { official: "Kongo Vabariik", common: "Kongo Vabariik" },
            fin: { official: "Kongon tasavalta", common: "Kongo-Brazzaville" },
            fra: { official: "République du Congo", common: "Congo" },
            hrv: { official: "Republika Kongo", common: "Kongo" },
            hun: {
                official: "Kongói Köztársaság",
                common: "Kongói Köztársaság",
            },
            ita: { official: "Repubblica del Congo", common: "Congo" },
            jpn: { official: "コンゴ共和国", common: "コンゴ共和国" },
            kor: { official: "콩고", common: "콩고" },
            nld: { official: "Republiek Congo", common: "Congo" },
            per: { official: "جمهوری برازاویل کُنگو", common: "جمهوری کُنگو" },
            pol: { official: "Republika Konga", common: "Kongo" },
            por: { official: "República do Congo", common: "Congo" },
            rus: { official: "Республика Конго", common: "Республика Конго" },
            slk: { official: "Konžská republika", common: "Kongo" },
            spa: { official: "República del Congo", common: "Congo" },
            swe: { official: "Republiken Kongo", common: "Kongo-Brazzaville" },
            tur: { official: "Kongo Cumhuriyeti", common: "Kongo Cumhuriyeti" },
            urd: { official: "جمہوریہ کانگو", common: "جمہوریہ کانگو" },
            zho: { official: "刚果共和国", common: "刚果" },
        },
        latlng: [-1.0, 15.0],
        landlocked: false,
        borders: ["AGO", "CMR", "CAF", "COD", "GAB"],
        area: 342000.0,
        demonyms: {
            eng: { f: "Congolese", m: "Congolese" },
            fra: { f: "Congolaise", m: "Congolais" },
        },
        flag: "\uD83C\uDDE8\uD83C\uDDEC",
        maps: {
            googleMaps: "https://goo.gl/maps/Phf5dDDKdfCtuBTb6",
            openStreetMaps: "https://www.openstreetmap.org/relation/192794",
        },
        population: 5657000,
        gini: { 2011: 48.9 },
        fifa: "CGO",
        car: { signs: ["RCB"], side: "right" },
        timezones: ["UTC+01:00"],
        continents: ["Africa"],
        flags: {
            png: "https://flagcdn.com/w320/cg.png",
            svg: "https://flagcdn.com/cg.svg",
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: { latlng: [-4.25, 15.28] },
    },
    {
        name: {
            common: "Brazil",
            official: "Federative Republic of Brazil",
            nativeName: {
                por: {
                    official: "República Federativa do Brasil",
                    common: "Brasil",
                },
            },
        },
        tld: [".br"],
        cca2: "BR",
        ccn3: "076",
        cca3: "BRA",
        cioc: "BRA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: { BRL: { name: "Brazilian real", symbol: "R$" } },
        idd: { root: "+5", suffixes: ["5"] },
        capital: ["Brasília"],
        altSpellings: [
            "BR",
            "Brasil",
            "Federative Republic of Brazil",
            "República Federativa do Brasil",
        ],
        region: "Americas",
        subregion: "South America",
        languages: { por: "Portuguese" },
        translations: {
            ara: { official: "جمهورية البرازيل الاتحادية", common: "البرازيل" },
            bre: { official: "Republik Kevreel Brazil", common: "Brazil" },
            ces: {
                official: "Brazilská federativní republika",
                common: "Brazílie",
            },
            cym: { official: "Gweriniaeth Ffederal Brasil", common: "Brasil" },
            deu: {
                official: "Föderative Republik Brasilien",
                common: "Brasilien",
            },
            est: { official: "Brasiilia Liitvabariik", common: "Brasiilia" },
            fin: { official: "Brasilian liittotasavalta", common: "Brasilia" },
            fra: {
                official: "République fédérative du Brésil",
                common: "Brésil",
            },
            hrv: { official: "Savezne Republike Brazil", common: "Brazil" },
            hun: {
                official: "Brazil Szövetségi Köztársaság",
                common: "Brazília",
            },
            ita: {
                official: "Repubblica federativa del Brasile",
                common: "Brasile",
            },
            jpn: { official: "ブラジル連邦共和国", common: "ブラジル" },
            kor: { official: "브라질 연방 공화국", common: "브라질" },
            nld: {
                official: "Federale Republiek Brazilië",
                common: "Brazilië",
            },
            per: { official: "جمهوری فدراتیو برزیل", common: "برزیل" },
            pol: {
                official: "Federacyjna Republika Brazylii",
                common: "Brazylia",
            },
            por: {
                official: "República Federativa do Brasil",
                common: "Brasil",
            },
            rus: {
                official: "Федеративная Республика Бразилия",
                common: "Бразилия",
            },
            slk: {
                official: "Brazílska federatívna republika",
                common: "Brazília",
            },
            spa: {
                official: "República Federativa del Brasil",
                common: "Brasil",
            },
            swe: {
                official: "Förbundsrepubliken Brasilien",
                common: "Brasilien",
            },
            tur: {
                official: "Brezilya Federal Cumhuriyeti",
                common: "Brezilya",
            },
            urd: { official: "وفاقی جمہوریہ برازیل", common: "برازیل" },
            zho: { official: "巴西联邦共和国", common: "巴西" },
        },
        latlng: [-10.0, -55.0],
        landlocked: false,
        borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
        ],
        area: 8515767.0,
        demonyms: {
            eng: { f: "Brazilian", m: "Brazilian" },
            fra: { f: "Brésilienne", m: "Brésilien" },
        },
        flag: "\uD83C\uDDE7\uD83C\uDDF7",
        maps: {
            googleMaps: "https://goo.gl/maps/waCKk21HeeqFzkNC9",
            openStreetMaps: "https://www.openstreetmap.org/relation/59470",
        },
        population: 212559409,
        gini: { 2019: 53.4 },
        fifa: "BRA",
        car: { signs: ["BR"], side: "right" },
        timezones: ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
        continents: ["South America"],
        flags: {
            png: "https://flagcdn.com/w320/br.png",
            svg: "https://flagcdn.com/br.svg",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/br.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/br.svg",
        },
        startOfWeek: "monday",
        capitalInfo: { latlng: [-15.79, -47.88] },
        postalCode: { format: "#####-###", regex: "^(\\d{8})$" },
    },
    {
        name: {
            common: "Luxembourg",
            official: "Grand Duchy of Luxembourg",
            nativeName: {
                deu: {
                    official: "Großherzogtum Luxemburg",
                    common: "Luxemburg",
                },
                fra: {
                    official: "Grand-Duché de Luxembourg",
                    common: "Luxembourg",
                },
                ltz: {
                    official: "Groussherzogtum Lëtzebuerg",
                    common: "Lëtzebuerg",
                },
            },
        },
        tld: [".lu"],
        cca2: "LU",
        ccn3: "442",
        cca3: "LUX",
        cioc: "LUX",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: { EUR: { name: "Euro", symbol: "€" } },
        idd: { root: "+3", suffixes: ["52"] },
        capital: ["Luxembourg"],
        altSpellings: [
            "LU",
            "Grand Duchy of Luxembourg",
            "Grand-Duché de Luxembourg",
            "Großherzogtum Luxemburg",
            "Groussherzogtum Lëtzebuerg",
        ],
        region: "Europe",
        subregion: "Western Europe",
        languages: { deu: "German", fra: "French", ltz: "Luxembourgish" },
        translations: {
            ara: { official: "دوقية لوكسمبورغ", common: "لوكسمبورغ" },
            bre: {
                official: "Dugelezh Veur Luksembourg",
                common: "Luksembourg",
            },
            ces: {
                official: "Lucemburské velkovévodství",
                common: "Lucembursko",
            },
            cym: {
                official: "Grand Duchy of Luxembourg",
                common: "Luxembourg",
            },
            deu: { official: "Großherzogtum Luxemburg,", common: "Luxemburg" },
            est: {
                official: "Luksemburgi Suurhertsogiriik",
                common: "Luksemburg",
            },
            fin: {
                official: "Luxemburgin suurherttuakunta",
                common: "Luxemburg",
            },
            fra: {
                official: "Grand-Duché de Luxembourg",
                common: "Luxembourg",
            },
            hrv: {
                official: "Veliko Vojvodstvo Luksemburg",
                common: "Luksemburg",
            },
            hun: { official: "Luxemburgi Nagyhercegség", common: "Luxemburg" },
            ita: {
                official: "Granducato di Lussemburgo",
                common: "Lussemburgo",
            },
            jpn: { official: "ルクセンブルク大公国", common: "ルクセンブルク" },
            kor: { official: "룩셈부르크 대공국", common: "룩셈부르크" },
            nld: { official: "Groothertogdom Luxemburg", common: "Luxemburg" },
            per: { official: "دوک‌نشین لوکزامبورگ", common: "لوکزامبورگ" },
            pol: {
                official: "Wielkie Księstwo Luksemburga",
                common: "Luksemburg",
            },
            por: {
                official: "Grão-Ducado do Luxemburgo",
                common: "Luxemburgo",
            },
            rus: {
                official: "Великое Герцогство Люксембург",
                common: "Люксембург",
            },
            slk: {
                official: "Luxemburské veľkovojvodstvo",
                common: "Luxembursko",
            },
            spa: {
                official: "Gran Ducado de Luxemburgo",
                common: "Luxemburgo",
            },
            swe: { official: "Storhertigdömet Luxemburg", common: "Luxemburg" },
            tur: {
                official: "Lüksemburg Büyük Dükalığı",
                common: "Lüksemburg",
            },
            urd: { official: "دوقیہ کبیرلکسمبرگ", common: "لکسمبرگ" },
            zho: { official: "卢森堡大公国", common: "卢森堡" },
        },
        latlng: [49.75, 6.16666666],
        landlocked: true,
        borders: ["BEL", "FRA", "DEU"],
        area: 2586.0,
        demonyms: {
            eng: { f: "Luxembourger", m: "Luxembourger" },
            fra: { f: "Luxembourgeoise", m: "Luxembourgeois" },
        },
        flag: "\uD83C\uDDF1\uD83C\uDDFA",
        maps: {
            googleMaps: "https://goo.gl/maps/L6b2AgndgHprt2Ko9",
            openStreetMaps:
                "https://www.openstreetmap.org/relation/2171347#map=10/49.8167/6.1335",
        },
        population: 632275,
        gini: { 2018: 35.4 },
        fifa: "LUX",
        car: { signs: ["L"], side: "right" },
        timezones: ["UTC+01:00"],
        continents: ["Europe"],
        flags: {
            png: "https://flagcdn.com/w320/lu.png",
            svg: "https://flagcdn.com/lu.svg",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/lu.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/lu.svg",
        },
        startOfWeek: "monday",
        capitalInfo: { latlng: [49.6, 6.12] },
        postalCode: { format: "####", regex: "^(\\d{4})$" },
    },
]

const numbers = [0,1,2,3,4,5,6,7,8,9,10]
console.log("numbers antes del push", numbers)

// Quiero mostrar el número 0
console.log(numbers[0])
// Quiero mostrar el número 10
console.log(numbers[10]);

console.log(numbers[0], users, numbers[5]);

console.log(numbers[0], numbers[10])

// Necesito eliminar el último elemento del array

// Necesito eliminar el primer elemento del array

// Necesito agregar un elemento al final del array :heavy_check_mark:
// i.e.: Necesito agregar el número 11. 
// IDEA: Usar un push()
// Estructura: array.push(elementosAAgregar)
numbers.push(13,14,15)

numbers.push(11)
console.log("numbers despues del push", numbers)
numbers.push(12)
// console.log(0,1,2,3,4,5,6,7,8,9,10,13,14,15,11,12) 

console.log("numbers despues del push 12", numbers)
// Necesito recorrer todas las posiciones del array - PENDING

// Necesito quedarme con una determinada parte del array :heavy_check_mark:

// Necesito agregar un elemento al principio del array
// IDEA: Usar un unshift() :heavy_check_mark:
numbers.unshift(-1)
numbers.unshift(-4,-3,-2)

console.log("despues del unshift", numbers)
// Tengo dos arrays y necesito unificarlos en uno solo
// i.e.: array de numbers y const numbers2 = [11,12,13,14,15]
// IDEA: Usar un concat. 

// Tengo una cadena de texto y necesito recortarla

// Tengo una fecha en un formato y la necesito en otro

const nameMentor = "Fabian"
console.log(nameMentor)
// Tengo una cadena de texto y necesito pasarla a minusculas
// INPUT: Fabian
// OUTPUT: fabian
console.log(nameMentor.toLowerCase())


const email = "fabianestebantureo@gmail.com"
const emailCAPSLOCK = "FABIANESTEBANTUREO@GMAIL.COM"
const password = "FabiEstebanTUreo"

// Tengo una cadena de texto y necesito pasarla a mayúsculas
// INPUT: fabian
// OUTPUT: FABIAN
console.log(nameMentor.toUpperCase());

// alert("ESCRIBI EL MAIL EN MINUSCULAS")

// Necesito sacar los espacios extras
// Tomando el correo electrónico, necesito obtener la info antes del "@"

const alias = "Alpaca.Otorrino.Messi"
const aliasLowerCase = "alpaca.otorrino.messi"
const aliasUpperCase = "ALPACA.OTORRINO.MESSI"

console.log("alias", alias.toLowerCase())
console.log("input en upper case", aliasUpperCase.toLowerCase())


// Necesito sacar los puntos del alias
// SEPARADOR: "."
// Input: alias --> "Alpaca.Otorrino.Messi"
// Necesito que esté en minúsculas
const splitString = alias.split(".")
console.log("splitString", splitString)

const joinString = splitString.join("")
console.log("joinString", joinString)

const toLowerCaseString = joinString.toLowerCase()
console.log("toLowerCaseString", toLowerCaseString)

// Este podría ser un posible refactor
const aliasTransformed = alias.split(".").join("").toLowerCase()
console.log("aliasTransformed", aliasTransformed)

// console.log(splitString, joinString, toLowerCaseString)

