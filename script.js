let currentPage = 0;

document.querySelector('.book').addEventListener('click', function () {
  const book = this;
  currentPage++;

  if (currentPage === 1) {
    book.classList.add('open1');
  } else if (currentPage === 2) {
    book.classList.add('open2');
  } else if (currentPage === 3) {
    book.classList.add('open3');
  }

  playSound();
});

function playSound() {
  const sound = document.getElementById("sound");
  sound.play();
}

const fecha = new Date();
const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('fecha').textContent = fecha.toLocaleDateString('es-ES', opciones);
