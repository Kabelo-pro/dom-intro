
function calculateBtnClicked(billType){
    // get the string entered in the textArea
    var billString = billType.toLowerCase();
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
    // billTotal.innerHTML = roundedBillTotal;

    return Number(roundedBillTotal)
}
