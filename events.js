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


const inputName = document.getElementById("input-text")
console.log(inputName);
const form = document.getElementById("form")
const inputContent = document.getElementById("input-content")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Estamos en el evento del form")
})

inputName.addEventListener("change", (event => {
    console.log(event)
    console.log("change")

    console.log(event.target.value)
    inputContent.textContent = event.target.value
}))

