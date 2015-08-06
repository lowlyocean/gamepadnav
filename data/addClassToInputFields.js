    var inputFields = document.getElementsByTagName("input");
    for (var ii = 0; ii < inputFields.length; ii++) {
        //if (!(inputFields[ii].hasAttribute("type") && inputFields[ii].getAttribute("type").indexOf("text") === -1 && inputFields[ii].getAttribute("type").indexOf("password") === -1)) {
            if (inputFields[ii].hasAttribute("class")) {
                inputFields[ii].setAttribute("class", inputFields[ii].getAttribute("class") + " daisywheel");
            } else {
                inputFields[ii].setAttribute("class", "daisywheel");
            }
        //}
    }
    

var textAreaFields = document.getElementsByTagName("textarea");
for (var jj = 0; jj < textAreaFields.length; jj++) {
    if (textAreaFields[jj].hasAttribute("class")) {
        textAreaFields[jj].setAttribute("class", textAreaFields[jj].getAttribute("class") + " daisywheel");
    } else {
        textAreaFields[jj].setAttribute("class", "daisywheel");
    }
}
