module.exports.importELemntsByID = function (elementIDs) { 
    /** 
    * Decsription.
    * This Function takes in an array of ID's and returns their DOM elements
    */

    // Setting up object
    let key;
    let elements = {};
    let currentElement;

    // loopiong through all passed ID's
    for(element of elementIDs){

        // Setting key & value
        key = element;
        value = document.getElementById(key);

        if(currentElement !==  null){
            // Applying hte above meantioned key and value
            elements[key] = value;
        }else{
            // If the browser cannot find the lelemt display an error
            console.warn("Cannot Find and DOM Elements with an ID of '" + value + "'");
        }
    }
    // returning the results
    return elements;
}