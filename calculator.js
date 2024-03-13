window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// GOAL IS TO MAKE LOAN CALCULATOR FUNCTIONAL. CALC TAKES AN AMOUNT TO LOAN (PRINCIPLE), A TERM IN YEARS, AND A YEARLY RATE.
// THE OUTPUT SHOULD BE THE MONTHLY PAYMENT OF THE LOAN.
// CALCULATE USING FORMULA:  MONTHLY PAYMENT = P * i1 - (1 + i)-n
// P = AMOUNT OF PRINCIPLE i = PERIODIC INTEREST RATE (YEARLY RATE / 12) n = TOTAL NUMBER OF PAYMENTS (YEARS * 12)
// GOAL IS TO WRITE TESTS FOR CALCULATE MONTHLY PAYMENT FUNCTION IN calculator-test.js

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
