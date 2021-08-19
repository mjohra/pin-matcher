//step-1:generate 4  random number
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + ""; //pin ta 4 digit kina check korar jonno number er sathe ekta empty string add kora hoyeche
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

//generate pin button click korle pin generate hobe r display te show korbe

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

//getting keypad value

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText; //event.target use korle kon key te click kora hoyeche seta paoa jabe
  const calcInput = document.getElementById("typed-numbers");
  //check the value is number or not
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousCalc = calcInput.value;
    const newCalc = previousCalc + number;
    calcInput.value = newCalc;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const successMessage = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  if (pin == typedNumbers) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    successMessage.style.display = "none";
    failError.style.display = "block";
  }
}

