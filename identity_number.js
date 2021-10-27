// function shows details about Identity Number
function show() {
    // Read value of identity number from the input field
    var input = document.getElementById("identityNumber").value;
    var gender = "";
    //Check gender
    // Get the second last character with charAt() method 
    // Convert digit text to number with parseInt() function
    // Check gender with modulo (%) operation (even number-> female, odd number-> male)
    var genderCharStr = input.charAt(input.length-2);
    var genderInt = parseInt(genderCharStr);
    if (genderInt % 2 == 0) {
        gender = "Female";
    } else {
        gender = "Male";
    }
    // Parse birth day information
    // Take certain characters (dd, mm, yy and separator character)) from the string with subString() method 
    // Calculate the year with four digits
    // Concatenate birth day text
    var days = input.substr(0, 2);
    var months = input.substr(2, 2);
    var year = input.substr(4, 2);
    var sep = input.charAt(input.length-5);
    if (sep == "+") {
            year = "18" + year;
        } else if (sep == "-") {
            year = "19" + year;
        } else if (sep == "A") {
            year = "20" + year;
        }
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML= "<p>" + gender + ", born " + days + "." + months + "." + year + ".</p>"; 
}