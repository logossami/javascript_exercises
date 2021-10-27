var sunday;
var price;
var minutes;

function modifyTitle() {
    var text = document.getElementById("title").value;
    var trimmed = allCapsTitleTrimmed(text);
    document.getElementById("title").innerHTML = trimmed;
}

function allCapsTitleTrimmed(text) {
    var trimmed = text.trim();
    var upper = trimmed.toUpperCase();
    return upper;
}

function calculate() {
    document.getElementById("title").innerHTML="modifyTitle()";
    
    var start = document.getElementById("startTime").value;
    var end = document.getElementById("endTime").value;
    var startHour = parseInt(start.substr(0, 2));
    var startMin = parseInt(start.substr(3, 2));
    var endHour = parseInt(end.substr(0, 2));
    var endMin = parseInt(end.substr(3, 2));
    
    if (endHour - 1 == startHour) {
        minutes = endMin + (60 - startMin); 
    } else if (endHour == startHour) {
        minutes = endMin - startMin;
    } else if (endHour > (startHour + 1)) {
        minutes = endMin + ((endHour - startHour) * 60 + (60 - startMin));
    }

    sunday = isSunday();
    if (sunday != true) {
        price = minutes * 48 / 60;
        document.getElementById("answer").innerHTML="Length of the work was " + minutes + " minutes. <br> The hourly price is during the workdays 48.00 euros. <br>The price of this repair work is " + price.toFixed(2) + " euros.";
         
    } else {
        price = minutes * 72 / 60;
        document.getElementById("answer").innerHTML="Length of the work was " + minutes + " minutes. <br> The hourly price is during the Sundays 72.00 euros. <br>The price of this repair work is " + price.toFixed(2) + " euros.";
    }
}

function isSunday(dateText) {

	var date = document.getElementById("date").value;
    date = date.toString();
    var day = parseInt(date.substr(0, 2));
    var month = parseInt(date.substr(3, 2) - 1);
    var year = parseInt(date.substr(6, 4));

	var asDate = new Date();
    day = asDate.setDate(day);
    month = asDate.setMonth(month);
    year = asDate.setFullYear(year);

	var dayOfWeek = asDate.getDay(day);

	if (dayOfWeek == 0) {
        return true;
    } else {
        return false;
    }
}