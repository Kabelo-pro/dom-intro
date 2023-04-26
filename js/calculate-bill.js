//get a reference to the calculate button

const calculateBtn = document.querySelector(".calculateBtn")

//get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal")

//get a reference to the billString

const billStringElement = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


 function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value.toLowerCase();
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var totalBill = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            totalBill += 2.75;
        }
        else if (billItem === "sms"){
            totalBill += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = totalBill.toFixed(2);
    billTotal.innerHTML = roundedBillTotal;

// remove existing classes from billTotal element
billTotal.classList.remove("warning");
billTotal.classList.remove("danger");

// add new classes to billTotal element
if (totalBill > 20){
    billTotal.classList.add("warning");
}
if (totalBill >= 30){
    billTotal.classList.add("danger");
}

// check if total bill has decreased and remove classes accordingly
if (totalBill <= previousTotalBill && previousTotalBill > 20){
    billTotal.classList.remove("danger");
}
if (totalBill <= previousTotalBill && previousTotalBill > 0 && previousTotalBill < 30){
    billTotal.classList.remove("warning");
}

// store the current total bill for the next iteration
previousTotalBill = totalBill;
};
    


calculateBtn.addEventListener('click', calculateBtnClicked)

// billTotal.addEventListener('click', function(){


// });

// billStringElement.addEventListener('click', function(){


// });