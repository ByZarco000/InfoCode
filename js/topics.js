 // Obtén todas las tarjetas por su clase CSS
 const cards = document.querySelectorAll('.card');

 // Agrega un controlador de eventos de clic a cada tarjeta
 cards.forEach((card) => {
     card.addEventListener('click', () => {
         const cardHeader = card.querySelector('.card-header').textContent;

         let url = '';

         if (cardHeader === 'HTML') {
             url = 'Information.html'; 
         } else if (cardHeader === 'CSS') {
             url = 'pagina_css.html'; 
         } else if (cardHeader === 'JavaScript') {
             url = 'pagina_js.html'; 
         } else if (cardHeader === 'Prolog'){
            url = 'paginalogg.html'
         }

         if (url) {
             window.open(url, '_blank');
         }
     });
 });