const removeTransition = event => event.target.classList.remove('playing');


const playSound = event =>  {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing'); 
    audio.currentTime = 0;
    audio.play();
      
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keyup', playSound);
