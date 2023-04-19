// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");

// get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

// get a reference to the call total, sms total and overall total elements
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo");

// initialize call total and sms total to zero
let callTotalRadio = 0;
let smsTotalRadio = 0;

const orange = document.querySelector(".orange")

// add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", function() {
  const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
    const billItemType = checkedRadioBtn.value
    if (billItemType === "sms") {
      smsTotalRadio += 0.75;
    } else if (billItemType === "call") {
      callTotalRadio += 2.75;
    }
    
    // update the displayed call total, sms total, and overall total
    callTotalTwo.innerHTML = callTotalRadio.toFixed(2);
    smsTotalTwo.innerHTML = smsTotalRadio.toFixed(2);
    const totalCost = callTotalRadio + smsTotalRadio;
    totalTwo.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        orange.classList.add("danger");
    }
    else if (totalCost >= 30){
        orange.classList.add("warning");
    }
  }
});
