console.log("Events working");

const buttonIncrement = document.getElementById("button-counter");
const counterView = document.getElementById("counter-view");

let counter = 0;
console.log({ counter });

// le pasamos dos parámetros al listener: tipo y la función que debe ejecutar
buttonIncrement.addEventListener("click", (event) => {
    // console.log(event)
    // console.log("Click");
    counter++;
    console.log("A ver el contador: ", counter);
    console.log("Texto del contador", counterView.textContent);
    counterView.textContent = counter;
    console.log("Texto del contador", counterView.textContent);
});

// TODO: Desarrollar el botón de resta y que actualice lo que vemos en la pantalla
