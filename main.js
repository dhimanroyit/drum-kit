function playMusic(e) {
  let music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.drum__key[data-key="${e.keyCode}"]`);
  if (!music) return;
  music.currentTime = 0;
  music.play();
  key.classList.add('playing');
}

function removePlaying(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.drum__key');
keys.forEach(key => key.addEventListener('transitionend', removePlaying));
window.addEventListener('keydown', playMusic);