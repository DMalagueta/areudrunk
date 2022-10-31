document.addEventListener("DOMContentLoaded", init, false);
function init() {
  let btnResult = document.getElementById("btn-result");
  let mainResult = document.querySelector(".main-result p");
  let numberDrinks = document.getElementById("numberDrinks");

  btnResult.addEventListener(
    "click",
    function () {
      if (numberDrinks.value == 0) {
        mainResult.innerHTML = "Estás fraquinha 👶";
        mainResult.style.cssText = "animation: none;color:cyan;";
      } else {
        mainResult.innerHTML = "Catarina já chega de beber!!! 😬";
        mainResult.style.cssText = "animation: blinker 1s linear infinite;";
      }
    },
    false
  );
}
