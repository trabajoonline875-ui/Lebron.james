
// Consejos y frase
const consejos = [
  'Practica tiros libres todos los días (50 por sesión).',
  'Trabaja ambos dribblings: derecho e izquierdo.',
  'Fortalece piernas con saltos pliométricos.',
  'Mejora la visión de juego con pases en movimiento.',
  'Céntrate en la defensa: la mejor ofensiva nace de una buena defensa.'
];

document.addEventListener('DOMContentLoaded', () => {
  // Botón consejo rápido (en index)
  const btnConsejoRapido = document.getElementById('btnConsejoRapido');
  if(btnConsejoRapido){
    btnConsejoRapido.addEventListener('click', ()=>{
      const p = document.getElementById('consejo-rapido');
      p.textContent = consejos[Math.floor(Math.random()*consejos.length)];
    });
  }

  // Botón en pagina de entrenamiento - descargar (simulado)
  const btnDownload = document.getElementById('downloadPlan');
  if(btnDownload){
    btnDownload.addEventListener('click', ()=>{
      const msg = document.getElementById('msgDownload');
      msg.textContent = 'Generando plan... listo para descargar (simulado). Revisa la carpeta assets para ver el PDF ejemplo.';
      msg.style.color = '#9ee493';
      // En un sitio real podríamos iniciar la descarga con window.location = 'assets/plan_entrenamiento.pdf'
    });
  }

  // Formulario de contacto (simulado)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const msg = document.getElementById('formMsg');
      if(name && email && message){
        msg.textContent = 'Gracias ' + name + '. Tu mensaje ha sido enviado (simulado).';
        msg.style.color = '#9ee493';
        form.reset();
      } else {
        msg.textContent = 'Por favor completa todos los campos.';
        msg.style.color = '#ffb3b3';
      }
    });
  }

  // Resaltar el link activo según URL
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(link => {
    if(window.location.pathname.endsWith(link.getAttribute('href')) || window.location.href.endsWith(link.getAttribute('href'))){
      link.classList.add('active');
    }
  });
});
