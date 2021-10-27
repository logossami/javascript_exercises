// Define the array variable and index variable inside the script element, but NOT inside the function. 
	// Then they will be global and thus available for all functions to read from or write to.
	var names = [];
	var index = 0;

	function addName() {
		// Assign name from the input field to the array
		var name = document.getElementById("name").value;
        names.push(name);
		// Increase the index by one
        index += 1;
		
		// Go through the array in a for loop adding each name at the end of the namesText
		for (var i=0; i<names.length; i++) {
            continue;
        }
		// Write the names on the page, to the names div, as content of the div
		document.getElementById("nameList").innerHTML= "Inserted names: " + names.join(" ");

		// Empty the input field of name as that name was just put in the array
        document.getElementById("name").value = "";

		// Empty the answer text
        document.getElementById("answer").value = "";
	}

	function makeDraw() {

		// Randomize the index of the winner
		var winningIndex = Math.floor(Math.random() * names.length);
		
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = "<br>Winner is " + names[winningIndex];

	}