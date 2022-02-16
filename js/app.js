document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = document.getElementById('income').value;
  const totalIncome = parseFloat(income);
  let totalExpenses = 0;
  const allExp = document.getElementsByClassName("exp");
  for (const exp of allExp) {
    totalExpenses += parseFloat(exp.value);
  }
  // update total expenses
  document.getElementById("total-exp").innerText = totalExpenses;

  // update balance
  balance = document.getElementById("balance").innerText =
    totalIncome - totalExpenses;
});



// Function
/* function getInputValue(param) {
  let value = document.getElementById(param).value;
  return parseInt(value);
} */
