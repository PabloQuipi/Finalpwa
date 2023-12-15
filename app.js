
    const inputText = document.querySelector('#textIngre');
    const inputDate = document.querySelector('#inputIngre');
    const btnGuardar = document.querySelector('#btnGuardar');
    const textos = document.querySelector('#textos');


    if( navigator.serviceWorker){
      navigator.serviceWorker.register('sw.js');
  } else {
      alert.innerText = 'El navegador no soporta está tecnología';
  }
    
    btnGuardar.addEventListener('click', () => {
      const texto = inputText.value;
      const date = inputDate.value;
    if (texto !== '' && date !== '') {
      const newCard = document.createElement('div');
      newCard.className = 'cardText';
      newCard.innerHTML = `
        <p>Fecha: ${date}</p>
        <p contenteditable="true">${texto}</p>
        <button class="btnModificar">Modificar</button>
        <button class="btnEliminar">Eliminar</button>
      `;

      textos.appendChild(newCard);

      // Limpia los campos después de guardar
      inputText.value = '';
      inputDate.value = '';
    }
  });

  textos.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('btnEliminar')) {
      // Elimina 
      const cardToRemove = target.parentElement;
      textos.removeChild(cardToRemove);
    } else if (target.classList.contains('btnModificar')) {
      // modificar 
      const textElement = target.parentElement.querySelector('p[contenteditable="true"]');
      textElement.focus();
    }
  });


/*
caches.open('cache-v1').then((cache)=>{
  cache.addAll([
    'index.html'
  ])
})





self.addEventListener('install', ()=>{
    console.log('SW: Instalado.');
})

self.addEventListener('activate', ()=>{
    console.log('SW: Activado');
})

self.addEventListener('fetch', evento => {
    const request = evento.request;
    const url = request.url;
})*/