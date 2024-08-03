// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const request = new XMLHttpRequest();
        request.open("POST", "send_email.php", true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                alert("Mensaje enviado exitosamente.");
                form.reset();
            } else if (request.readyState === 4) {
                alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
            }
        };
        request.send(`name=${name}&email=${email}&message=${message}`);
    });
});

document.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
