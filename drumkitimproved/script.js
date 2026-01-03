function playSound(key) {
  const box = document.querySelector(`.soundBox[data-key='${key}']`);
  const audio = document.querySelector(`audio[data-key='${key}']`);

  if (!box || !audio) return;
  box.classList.add("active");
  setTimeout(() => {
    box.classList.remove("active");
  }, 150);
  audio.currentTime = 0;
  audio.play();
}

document.addEventListener("keydown", (e) => {
  playSound(e.key.toLowerCase());
});

document.querySelectorAll('.soundBox').forEach((box)=>{
box.addEventListener('click',()=>{
playSound(box.dataset.key);
})
});