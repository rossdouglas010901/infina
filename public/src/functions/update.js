const settings = require("../functions/settings");
const navBar = require("../functions/navBar");

module.exports.updateUI = function () { 
    /** 
    * Decsription.
    * Updates the entirity of the UI
    */

    settings.updateSettingsUI();
    navBar.updateNavbarUI();
}