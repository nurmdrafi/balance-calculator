document.getElementById("calculate-btn").addEventListener("click", function () {
  // get income
  const income = getInputIdValue("income");

  // calculate total expenses
  const food = getInputIdValue("food");
  const rent = getInputIdValue("rent");
  const clothes = getInputIdValue("clothes");
  const totalExpenses = food + rent + clothes;
  const totalExpensesField = document.getElementById("total-exp-field");
  const totalExpensesText = document.getElementById("total-exp");

  // Condition Check
  if (isNaN(income)) {
    error("You did not enter your income amount");
  } else if (isNaN(totalExpenses)) {
    error("Please do not blank any expenses input");
  } else if (totalExpenses > income) {
    error("Your expenses is higher than your income");
    totalExpensesText.innerText = totalExpenses;
    totalExpensesField.style.color = "red";
  } else {
    // update total expenses
    totalExpensesText.innerText = totalExpenses;
    totalExpensesField.style.color = "black";

    // update balance
    document.getElementById("balance").innerText = income - totalExpenses;
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
  const income = getInputIdValue("income");

  // get and calculate saving amount
  const savingsInputField = document.getElementById("saving-input");
  const savingInputValue = getInputIdValue("saving-input");
  const savingInputPercentage = savingInputValue / 100;
  const savingAmount = income * savingInputPercentage;
  const savingsTextField = document.getElementById("saving-amount");

  // get current and remaining balance
  const currentBalance = document.getElementById("balance");
  const currentBalanceAmount = parseFloat(currentBalance.innerText);
  const remainingAmount = document.getElementById("remaining-amount");

  // Condition Check
  if (isNaN(savingInputValue)) {
    error("Your savings amount is empty");
  } else if (currentBalanceAmount == 00) {
    error("Your balance is empty");
    savingsInputField.value = "";
  } else if (savingAmount > currentBalanceAmount) {
    error("Your savings amount is higher than your balance");
    remainingAmount.innerText = currentBalanceAmount;
    savingsInputField.value = "";
    savingsTextField.innerText = "00";
  } else {

    // update saving amount
    savingsTextField.innerText = savingAmount;

    // update remaining amount
    remainingAmount.innerText = currentBalanceAmount - savingAmount;
  }
});

// Error handling for string input
inputError("income", "income-error-field");
inputError("food", "food-error-field");
inputError("rent", "rent-error-field");
inputError("clothes", "clothes-error-field");
inputError("saving-input", "savings-error-field");

// Notification close button
document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("show-error").classList.remove("show");
  document.getElementById("show-error").classList.add("hide");
});


// Functions //==>
function getInputIdValue(id) {
  let input = document.getElementById(id);
  return parseFloat(input.value);
}

function error(message) {
  document.getElementById("show-error").classList.add("show");
  document.getElementById("show-error").classList.remove("hide");
  document.getElementById("error-message").innerText = message;
}

function inputError(inputId, errorFieldId) {
  document.getElementById(inputId).addEventListener("keyup", function (e) {
    const value = e.target.value;
    const errorField = document.getElementById(errorFieldId);

    if (isNaN(value)) {
      errorField.style.color = "red";
    } else if (value == "") {
      errorField.style.color = "transparent";
    } else if (!isNaN(value)) {
      errorField.style.color = "transparent";
    }
  });
}


