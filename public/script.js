"use strict";

const billInput = document.querySelector(".bill_tip");
const tipButtons = document.querySelectorAll(".tip_percent");
const numPeopleInput = document.querySelector(".tip_person");
const totalTip = document.querySelector(".total_tip");
const tipAmount = document.querySelector(".tip_amount");
const resetButton = document.querySelector(".reset");

let calculateTip = function (tipPercentage) {
  const bill = Number(billInput.value);
  const numPeople = Number(numPeopleInput.value);

  //   const tipAmount = bill * tipPercentage;
  //   const totalPerPerson = (bill + Number(tipAmount)) / numPeople;
  //   const tipPerPerson = Number(tipAmount) / numPeople;
  let Amount = Number(bill * tipPercentage);
  let totalperson = Number((bill + Amount) / numPeople);

  let tipperson = Number(Amount / numPeople);
  tipAmount.textContent = `$${tipperson.toFixed(2)}`;
  totalTip.textContent = `$${totalperson.toFixed(2)}`;
};

for (let i = 0; i < tipButtons.length; i++) {
  tipButtons[i].addEventListener("click", () => {
    let tipPercentage = tipButtons[i].dataset.tip / 100;
    calculateTip(tipPercentage);
  });
}
// console.log((tipAmount.textContent = `$${10.1}`));

//Reset functionality
resetButton.addEventListener("click", () => {
  billInput.value = "";
  numPeopleInput.value = "";
  tipAmount.textContent = "$0.00";
  totalTip.textContent = "$0.00";
});
