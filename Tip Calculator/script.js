const billAmount = document.querySelector(".bill input");
const buttons = document.querySelectorAll(".tip-percent button");
const peopleCount = document.querySelector(".total-people input");
const tipPerPerson = document.querySelector(".perPerson");
let totalTip = document.querySelector(".allPerson");
let resetbtn = document.querySelector(".reset");
const custom = document.querySelector(".customPercent");

let bill = 0;
let tip = 0;
let customTip = 0;
let people = 1;
let errorMessage = "";

billAmount.addEventListener("input", () => {
  bill = billAmount.value;
  calculateTip();
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".existingColor").forEach((button) => {
      button.style.backgroundColor = "";
      button.style.color = "";
      button.classList.remove("existingColor");
    });

    button.style.backgroundColor = "hsl(172, 67%, 45%)";
    button.style.color = "hsl(183, 100%, 15%)";
    button.classList.add("existingColor");
    tip = button.value;
    calculateTip();
  });
});

custom.addEventListener("input", () => {
  customTip = custom.value;
  if (tip === 0) {
    calculateTip();
  }
});

peopleCount.addEventListener("input", () => {
  const existingError = document.querySelector(".error-message");
  let inputValue = peopleCount.value.trim();

  if (inputValue === "" || Number(inputValue) === 0) {
    if (!existingError) {
      errorMessage = document.createElement("div");
      errorMessage.classList.add("error-message");
      errorMessage.innerText = "Can't be zero";
      errorMessage.style.color = "red";
      const ppl = document.querySelector(".total-people1 p");
      ppl.insertAdjacentElement("afterend", errorMessage);
      let customCSS = document.querySelector(".total-people1");
      customCSS.style.display = "flex";
      customCSS.style.justifyContent = "space-between";
      console.log("Can't be zero");
    }
  } else {
    if (existingError) {
      existingError.remove();
    }
    people = Number(inputValue);
    calculateTip();
  }
});

function calculateTip() {
    let billValue = parseFloat(bill) || 0;
    let tipPercentage = customTip > 0 ? customTip : tip; 
    let peopleValue = parseInt(people) || 1;
    
    let tipAmount = (billValue * tipPercentage) / 100;
    totalTip.textContent = "$" + tipAmount.toFixed(2);
    tipPerPerson.textContent = "$" + (tipAmount / peopleValue).toFixed(2);
  }
  

resetbtn.addEventListener("click", () => {
  bill = 0;
  tip = 0;
  people = 1;
  customTip = 0;
  billAmount.value = "";
  peopleCount.value = "";
  custom.value="";
  totalTip.textContent = "$0.00";
  tipPerPerson.textContent = "$0.00";
  errorMessage = "";

  document.querySelectorAll(".existingColor").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
    button.classList.remove("existingColor");
  });
});
