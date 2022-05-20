let trailingResult = 0;

let operationOptions = ['divide', 'multiply', 'subtract', 'add'];

let workingOperation = "";

function updateShow(input) {
  let show = document.getElementById("show");
  let secondShow = document.getElementById("secondShow");

  if (show.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
    if (input === "decimal") {
      show.innerHTML = "0.";
    } else if (input === "negative-value") {
      if (show.innerHTML.indexOf("-1") === -1) {
        show.innerHTML = "-" + show.innerHTML

      } else if (show.innerHTML.indexOf("-1" > -1)) {
        show.innerHTML = show.innerHTML.slice(1, show.innerHTML.length);
      }
    } else {
      show.innerHTML = input;
    }
  } else if (operationOptions.indexOf(input) >= 0) {
    

    if (trailingResult === show.innerHTML) {
  
      workingOperation = input;
    } else if (workingOperation === "") {
 
      workingOperation = input;
      trailingResult = show.innerHTML;
      secondShow.innerHTML = trailingResult;
      show.innerHTML = 0;
    } else {
   
      trailingResult = calculate(trailingResult, show.innerHTML, workingOperation);
      secondShow.innerHTML = trailingResult;
      show.innerHTML = 0;
      workingOperation = input;
    }
  } else if (input === "equals") {
    show.innerHTML = calculate(trailingResult, show.innerHTML, workingOperation);
    trailingResult = 0;
    workingOperation = "";
    secondShow.innerHTML = trailingResult;
  } else if (input === "decimal") {
   
    if (show.innerHTML.indexOf(".") === -1) {
      show.innerHTML += ".";
    }
 
  } else if (input === "negative-value") {
  
    if (show.innerHTML.indexOf("-1") === -1) {
      show.innerHTML = "-" + show.innerHTML
    } else if (show.innerHTML.indexOf("-1" > -1)) {
      show.innerHTML = show.innerHTML.slice(1, show.innerHTML.length);
    }
  } else {
    show.innerHTML += input;
  }
  
}

function clearShow() {
  let show = document.getElementById("show");
  let secondShow = document.getElementById("secondShow");
  trailingResult = 0;
  show.innerHTML = 0;
  secondShow.innerHTML = trailingResult;
}

function calculate(firstNumber, secondNumber, operation) {
  let result;
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  switch(operation) {
    case "add":

      result = firstNumber + secondNumber;
      break;
    case "subtract":

      result = firstNumber - secondNumber;
      break;
    case "multiply":
  
      result = firstNumber * secondNumber;
      break;
    case "divide":
   
      result = firstNumber / secondNumber;
      break;
    default:
      console.log("Calculate switch statement missed something");
  }
  return result.toString();
}
