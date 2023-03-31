let valueDisplays = document.querySelectorAll(".counter");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let startValue = endValue / 2;
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});