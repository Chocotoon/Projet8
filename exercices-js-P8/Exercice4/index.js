const button = document.getElementById("myButton")
const body = document.querySelector("body")
button.addEventListener("click", () => {
    const message = document.createElement("p")
    message.innerText = "Bonjour, vous avez cliqué sur le bouton !";
    body.appendChild(message)
})