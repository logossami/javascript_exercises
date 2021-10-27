function generateKeyCode(min, max) {
    var codeNumber = Math.round((Math.random() * 9999) + 1);
    var codeString = codeNumber.toString();
    var stringLength = codeString.length; 
    while (stringLength < 4) {
        codeString = "0" + codeString;
        stringLength++;
    } 
    document.write(codeString + " ");
}
for (i=1; i<=100; i++) {
    generateKeyCode(0, 9999);
    if (i % 10 == 0) {
        document.write("<br>");
    }
}