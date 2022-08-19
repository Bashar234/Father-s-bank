//add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step-2:get the deposit amount from the deposit input field.
  //for input field use .value to the value inside the input field.
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //   console.log(newDepositAmount);
  //step-3:get the current deposit total amount
  //for non input(element other than input, use innerText to get the text)
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //step-4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;
  //step-5:get balance current total
    const balanceTotalElement = document.getElementById("balance-total");
    previousBalanceTotalString=
  //step-7: clear the deposit field
  depositField.value = "";
});
