const adviceBtn = document.getElementById("advice-btn");
const adviceId = document.getElementById("advice-id");
const adviceBody = document.getElementById("advice-body");

window.onload = () => {
  setAdvice();
}

adviceBtn.addEventListener("click", () => {
  setAdvice();
});

function setAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
      const advice = data.slip;
      console.log(advice);
      adviceId.innerText = `Advice # ${advice.id}`;
      adviceBody.innerText = `"${advice.advice}"`;
    })
}