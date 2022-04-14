// Get the string from the page
// Controller function
function getValue(){

    // Adds "invisible" class to alert boxes to initially hide from user
    document.getElementById("alert").classList.add("invisible");
    document.getElementById("tooShortAlert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    // Check if string entered is too short in length
    if (userString.length > 1) {
        
        let revString = reverseString(userString);

        displayString(revString);

    }
    else {

        // Write short string alert message to the page
        document.getElementById("tooShortMsg").innerHTML = `Please enter a string at least two characters long.`;
        // Show short string alert box
        document.getElementById("tooShortAlert").classList.remove("invisible");
        
    }

    // Code without If...Else statement implemented, by removing lines 11 to 26

    // let revString = reverseString(userString);

    // displayString(revString);
    
}


// Reverse the string
// Logic function
function reverseString(userString) {

    let revString = [];

    // Reverse string using a for loop
    for(let index = userString.length - 1; index >= 0; index --) {
        revString += userString[index];
    }

    return revString;

}


// Display our reversed string to the user
// View function
function displayString(revString) {

    // Write message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    // Show the alert box
    document.getElementById("alert").classList.remove("invisible");

}