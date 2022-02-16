document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getInputIdValue("income");

  // get total expenses
  let totalExpenses = 0;
  const expenses = document.getElementsByClassName("expenses");
  for (const exp of expenses) {
    totalExpenses += parseFloat(exp.value);
  }
  // update total expenses
  document.getElementById("total-exp").innerText = totalExpenses;

  // update balance
  balance = document.getElementById("balance").innerText =
    income - totalExpenses;
});

document.getElementById("save-btn").addEventListener("click", function () {
  const income = getInputIdValue("income");

  // get saving amount
  const savingInput = getInputIdValue("saving-input");
  const savingInputPercentage = savingInput / 100;
  const savingAmount = income * savingInputPercentage;

  // update saving amount
  document.getElementById("saving-amount").innerText = savingAmount;

  // get total balance
  const balance = document.getElementById("balance");
  const balanceAmount = parseFloat(balance.innerText);

  // update remaining amount
  document.getElementById("remaining-amount").innerText =
    balanceAmount - savingAmount;
});

// Function
function getInputIdValue(id) {
  let input = document.getElementById(id);
  return parseFloat(input.value);
}
