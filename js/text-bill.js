// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

// get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");

// get a reference to the call total, sms total and overall total elements
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const totalOne = document.querySelector(".totalOne");

// initialize call total and sms total to zero
let callTotal = 0;
let smsTotal = 0;

const red = document.querySelector(".red")

// add an event listener for when the add button is pressed
addToBillBtn.addEventListener("click", function() {
    const billType = billTypeText.value;
    if (billType === "sms") {
      smsTotal += 0.75;
    } else if (billType === "call") {
      callTotal += 2.75;
    }
    
    // update the displayed call total, sms total, and overall total
    callTotalOne.innerHTML = callTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalCost = callTotal + smsTotal;
    totalOne.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        red.classList.add("danger");
    }
    else if (totalCost>= 30){
        red.classList.add("warning")
    }
  });

  
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
