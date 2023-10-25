const urlParams = new URLSearchParams(window.location.search);
const selectedCard = urlParams.get('selectedCard');
const selectedImage = urlParams.get('image');

if (selectedCard === 'cssCard') {
    document.querySelector('#htmlCard .card-header').textContent = 'Phyton';
    document.querySelector('#htmlCard .card-text').textContent = 'Python es un lenguaje de programación de alto nivel, conocido por su legibilidad y simplicidad de sintaxis.';
    document.querySelector('#htmlCard .card-img-top').src = selectedImage || '../img/cards/python.png';

    document.querySelector('#cssCard .card-header').textContent = 'Java';
    document.querySelector('#cssCard .card-text').textContent = 'Java es un lenguaje de programación de propósito general que se caracteriza por su portabilidad y capacidad de ejecutarse en múltiples plataformas. ';
    document.querySelector('#cssCard .card-img-top').src = selectedImage || '../img/cards/java.png'; 

    document.querySelector('#jsCard .card-header').textContent = 'C++';
    document.querySelector('#jsCard .card-text').textContent = 'C++ es un lenguaje de programación que extiende el lenguaje C con características de programación orientada a objetos.';
    document.querySelector('#jsCard .card-img-top').src = selectedImage || '../img/cards/c++.png';

} else if (selectedCard === 'jsCard') {
    document.querySelector('#htmlCard .card-header').textContent = 'Haskell';
    document.querySelector('#htmlCard .card-text').textContent = 'Haskell es un lenguaje de programación funcional conocido por su énfasis en la programación puramente funcional y su sistema de tipos avanzado.';
    document.querySelector('#htmlCard .card-img-top').src = selectedImage || '../img/cards/haskell.png'; 

    document.querySelector('#cssCard .card-header').textContent = 'Prolog';
    document.querySelector('#cssCard .card-text').textContent = 'Prolog es un lenguaje de programación lógica que se basa en reglas y consultas lógicas.';
    document.querySelector('#cssCard .card-img-top').src = selectedImage || '../img/cards/prolog.png'; 

    document.querySelector('#jsCard .card-header').textContent = 'Perl';
    document.querySelector('#jsCard .card-text').textContent = 'Perl es un lenguaje de programación versátil conocido por su capacidad para el procesamiento de texto y la manipulación de datos. ';
    document.querySelector('#jsCard .card-img-top').src = selectedImage || '../img/cards/perl.png'; 
}