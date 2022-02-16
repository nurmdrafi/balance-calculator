document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getInputIdValue("income");

  // get total expenses
  let totalExpenses = 0;
  const expenses = document.getElementsByClassName("expenses");
  for (const exp of expenses) {
    totalExpenses += parseFloat(exp.value);
  }

  // Condition Check
  if (totalExpenses > income) {
    error("Your expenses is higher than your income");
  } else {
    // update total expenses
    document.getElementById("total-exp").innerText = totalExpenses;

    // update balance
    balance = document.getElementById("balance").innerText =
      income - totalExpenses;
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
  const income = getInputIdValue("income");

  // get saving amount
  const savingInput = getInputIdValue("saving-input");
  const savingInputPercentage = savingInput / 100;
  const savingAmount = income * savingInputPercentage;

  // get total balance
  const currentBalance = document.getElementById("balance");
  const currentBalanceAmount = parseFloat(currentBalance.innerText);
  const remainingAmount = document.getElementById("remaining-amount");

  // Condition Check
  if (savingAmount > currentBalanceAmount) {
    error("Your savings amount is higher than your balance");
    savingInput.value = "";
    remainingAmount.innerText = currentBalanceAmount;
  } else {
    // update saving amount
    document.getElementById("saving-amount").innerText = savingAmount;

    // update remaining amount
    remainingAmount.innerText = currentBalanceAmount - savingAmount;
  }
});

// Function
function getInputIdValue(id) {
  let input = document.getElementById(id);
  return parseFloat(input.value);
}
function error(message) {
  document.getElementById("show-error").classList.add("show");
  document.getElementById("error-message").innerText = message;
}
