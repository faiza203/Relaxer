const main = document.getElementById("container");
const text = document.getElementById("text");
const time = 7500;
const breathe = (time / 5) * 2;
const hold = time / 5;
breatheAnimation();
function breatheAnimation() {
  text.innerText = "Breathe In!";
  main.className = "container grow"
  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breathe Out! ";
      main.className = "container shrink"
    }, hold);
  }, breathe);
}
setInterval(breatheAnimation, time );
