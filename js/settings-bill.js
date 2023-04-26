// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelectorAll(".billItemTypeWithSettings");

// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const addBtn = document.querySelector(".addBtn");

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");

// create variables that will keep track of all the settings
let callCostSettingBill = Number(callCostSetting.value);
let smsCostSettingBill = Number(smsCostSetting.value);
let warningLevel = Number(warningLevelSetting.value);
let criticalLevel = Number(criticalLevelSetting.value);

// create a variables that will keep track of all three totals.
let callTotalOneSettings = 0;
let smsTotalOneSettings = 0;
let totalSettingsOne = 0;

//get a reference to the totals
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", function(){
    callCostSettingBill = Number(callCostSetting.value);
    smsCostSettingBill = Number(smsCostSetting.value);
    warningLevel = Number(warningLevelSetting.value);
    criticalLevel = Number(criticalLevelSetting.value);

    // update totals with new settings
    callTotalOneSettings = 0;
    smsTotalOneSettings = 0;
    totalSettingsOne = 0;
    callTotalSettings.innerHTML = callTotalOneSettings.toFixed(2);
    smsTotalSettings.innerHTML = smsTotalOneSettings.toFixed(2);
    totalSettings.innerHTML = totalSettingsOne.toFixed(2);
});


//add an event listener for when the add button is pressed
addBtn.addEventListener("click", function(){
    const checkedRadioBtnSetting = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtnSetting){
        let settingsChecked = checkedRadioBtnSetting.nextElementSibling.innerHTML;
        if(settingsChecked === "Call"){
            callTotalOneSettings += callCostSettingBill;
            callTotalSettings.innerHTML = callTotalOneSettings.toFixed(2);
 
        }else if (settingsChecked === "SMS"){
            smsTotalOneSettings +=  smsCostSettingBill; 
            smsTotalSettings.innerHTML = smsTotalOneSettings.toFixed(2);

        }else {
            return 'Invalid input';
        }
    };    

    totalSettingsOne = callTotalOneSettings + smsTotalOneSettings; 
    totalSettings.innerHTML = totalSettingsOne.toFixed(2);

    // apply styling based on total cost and levels
   

    // Check if the total exceeds the warning or critical level and update the color
    if (totalSettingsOne >= criticalLevel) {
        totalSettings.classList.add("danger");
        addBtn.disabled = true;
    } else if (totalSettingsOne >= warningLevel){
        totalSettings.classList.add("warning");
    } else {
        totalSettings.classList.remove("warning", "danger");
        addBtn.disabled = false;
    }   
});
