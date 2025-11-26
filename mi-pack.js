// Mostrar y cerrar ventana de contacto
document.getElementById('infoContactoBtn').onclick = function (e) {
  e.preventDefault();
  document.getElementById('infoContacto').style.display = 'block';
};
document.getElementById('cerrarInfo').onclick = function () {
  document.getElementById('infoContacto').style.display = 'none';
};

// Mensaje del formulario
document.getElementById('contactoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Gracias! Tu mensaje ha sido enviado exitosamente. 🏅');
  this.reset();
});

// Animación de entrada
window.addEventListener('load', () => {
  document.body.style.background = '#e3f2fd';
  setTimeout(() => {
    document.body.style.background = '#f3f4f6';
  }, 1000);
});
