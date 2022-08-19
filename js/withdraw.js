/*
step-1: add event handler with the withdraw button
step-2: get the withdraw amount from the withdraw input field.
2.5: also make sure to convert the input into a number by using parseFloat
step-3: get previous withdraw total
4. calculate total withdraw amount
//4.5 set total withdraw amount
// stwp-5: get the previous balance total
//step-6: calculate new balance total
//step-6.5:set new balance total
step-7: clear the input field
*/
//step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithDrawAmountString = withdrawField.value;
  newWithDrawAmount = parseFloat(newWithDrawAmountString);
  console.log(newWithDrawAmount);

  //step-3:
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  //step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal; //step4.5:
  //step-5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  console.log(previousBalanceTotal);
  //step-6
  const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
  //step-7
  withdrawField.value = "";
});
