// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelectorAll(".billItemTypeWithSettings");

// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var settings = BillWithSettings();
settings.getCallCost
settings.getCriticalLevel
settings.getSmsCost
settings.getTotalCallCost
settings.getTotalCost
settings.getWarningLevel
settings.getTotalSmsCost
settings.getWarningLevel
settings.makeCall
settings.sendSms
settings.setCallCost
settings.setCriticalLevel
settings.setSmsCost
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



    // update settings with new values
    // callCostSetting.value = callCostSettingBill.toFixed(2);
    // smsCostSetting.value = smsCostSettingBill.toFixed(2);
    // warningLevelSetting.value = warningLevel.toFixed(2);
    // criticalLevelSetting.value = criticalLevel.toFixed(2);

    // update totals with new settings if they have been calculated before
    // if (totalSettingsOne !== 0) {
    //     const callTotalDiff = callCostSettingBill - previousCallCost; // calculate difference in call cost
    //     const smsTotalDiff = smsCostSettingBill - previousSmsCost; // calculate difference in SMS cost
    //     callTotalOneSettings += callTotalDiff;
    //     smsTotalOneSettings += smsTotalDiff;
    //     totalSettingsOne = callTotalOneSettings + smsTotalOneSettings;

    //     // display the updated totals
    //     callTotalSettings.innerHTML = callTotalOneSettings.toFixed(2);
    //     smsTotalSettings.innerHTML = smsTotalOneSettings.toFixed(2);
    //     totalSettings.innerHTML = totalSettingsOne.toFixed(2);

    //     // Check if the total exceeds the warning or critical level and update the color
    //     if (totalSettingsOne >= criticalLevel) {
    //         totalSettings.classList.add("danger");
    //         addBtn.disabled = true;
    //     } else if (totalSettingsOne >= warningLevel) {
    //         totalSettings.classList.add("warning");
    //         addBtn.disabled = false;
    //     } else {
    //         totalSettings.classList.remove("warning", "danger");
    //         addBtn.disabled = false;
    //     }
    // }


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


    // Check if the total exceeds the warning or critical level and update the color
    // if (totalSettingsOne >= criticalLevelSetting.value) {
    //     totalSettings.classList.add("danger");
    //     addBtn.disabled = true;
    // } else if (totalSettingsOne >= warningLevelSetting.value) {
    //     totalSettings.classList.add("warning");
    // } else {
    //     totalSettings.classList.remove("warning", "danger");
    //     addBtn.disabled = false;
    // }
});

