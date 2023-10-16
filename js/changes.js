// script.js
// Obtener el valor del parámetro de la URL (en este caso, el identificador de la tarjeta y la imagen)
const urlParams = new URLSearchParams(window.location.search);
const selectedCard = urlParams.get('selectedCard');
const selectedImage = urlParams.get('image');

if (selectedCard === 'cssCard') {
    document.querySelector('#htmlCard .card-header').textContent = 'Phyton';
    document.querySelector('#htmlCard .card-text').textContent = 'Python es un lenguaje de programación de alto nivel, conocido por su legibilidad y simplicidad de sintaxis.';
    document.querySelector('#htmlCard .card-img-top').src = selectedImage || './img/cards/python.png'; // Cambia la ruta de la imagen según la tarjeta

    document.querySelector('#cssCard .card-header').textContent = 'Java';
    document.querySelector('#cssCard .card-text').textContent = 'Java es un lenguaje de programación de propósito general que se caracteriza por su portabilidad y capacidad de ejecutarse en múltiples plataformas. ';
    document.querySelector('#cssCard .card-img-top').src = selectedImage || './img/cards/java.png'; // Cambia la ruta de la imagen según la tarjeta

    document.querySelector('#jsCard .card-header').textContent = 'C++';
    document.querySelector('#jsCard .card-text').textContent = 'C++ es un lenguaje de programación que extiende el lenguaje C con características de programación orientada a objetos.';
    document.querySelector('#jsCard .card-img-top').src = selectedImage || './img/cards/c++.png'; // Cambia la ruta de la imagen según la tarjeta


} else if (selectedCard === 'jsCard') {
    document.querySelector('#jsCard .card-header').textContent = 'JavaScript';
    document.querySelector('#jsCard .card-text').textContent = 'JavaScript es un lenguaje de programación que se utiliza para crear interactividad en las páginas web.';
    document.querySelector('#jsCard .card-img-top').src = selectedImage || './img/cards/3.jpg'; // Cambia la ruta de la imagen según la tarjeta
}
