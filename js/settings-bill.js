// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelectorAll(".billItemTypeWithSettings");

// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var settings = BillWithSettings();

//get a reference to the add button
const addBtn = document.querySelector(".addBtn");

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");

// create variables that will keep track of all the settings


// create a variables that will keep track of all three totals.
let callTotalOneSettings = 0;
let smsTotalOneSettings = 0;
let totalSettingsOne = 0;

//get a reference to the totals
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", function () {
    // const previousCallCost = callCostSettingBill; // store previous call cost
    // const previousSmsCost = smsCostSettingBill; // store previous SMS cost

    settings.setCallCost(Number(callCostSetting.value));
    settings.setSmsCost(Number(smsCostSetting.value));
    settings.setWarningLevel(Number(warningLevelSetting.value));
    settings.setCriticalLevel(Number(criticalLevelSetting.value));

    console.log(settings.getCallCost());
    console.log(settings.getSmsCost());
    console.log(settings.getWarningLevel());
    console.log(settings.getCriticalLevel());

});


//add an event listener for when the add button is pressed
addBtn.addEventListener("click", function () {
    const checkedRadioBtnSetting = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtnSetting) {
        let settingsChecked = checkedRadioBtnSetting.nextElementSibling.innerHTML;
        if (settingsChecked === "Call") {
            settings.makeCall();
            callTotalSettings.innerHTML = settings.getTotalCallCost().toFixed(2);

        } else if (settingsChecked === "SMS") {
            settings.sendSms();
            smsTotalSettings.innerHTML = settings.getTotalSmsCost().toFixed(2);

        } else {
            return 'Invalid input';
        }
    };

    totalSettings.innerHTML = settings.getTotalCost().toFixed(2);
        totalSettings.classList.add(settings.totalClassName());

    // apply styling based on total cost and levels

});

