// Obtén todas las tarjetas por su clase CSS
const cards = document.querySelectorAll('.card');

// Agrega un controlador de eventos de clic a cada tarjeta
cards.forEach((card) => {
    card.addEventListener('click', () => {
        const cardHeader = card.querySelector('.card-header').textContent;

        let url = '';

        if (cardHeader === 'HTML') {
            url = 'information-html.html'; 
        } else if (cardHeader === 'CSS') {
            url = 'information-css.html'; 
        } else if (cardHeader === 'JavaScript') {
            url = 'information-js.html'; 
        } else if (cardHeader === 'Prolog'){
            url = ''
        }

        if (url) {
            window.location.href = url; // Redirige a la nueva URL en la misma página
        }
    });
});
