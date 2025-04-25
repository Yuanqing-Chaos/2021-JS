let count = 0;
// return a JS representation of a html element
let countEl = document.getElementById("count-el");
function increment() {
    count++;
    countEl.textContent = count;
}

/*
 * DOM: Document Object Model, aka how to use JS to modify a website
 *      Document = HTML is a document
 *      Object   = JS treats HTML as a object named document
 *      Model    = All elements in HTML have models in JS
 */
let historyEl = document.getElementById("history-el");
let history = "History count: ";
let first = true;
function save() {
    // format correction
    if (first) {
        history += count;
        first = false;
    } else {
        history += ", " + count; 
    }
    
    // check on the MDN website to find out difference between .textContent and .innerText
    historyEl.textContent = history;

    // set content back to 0 after save
    count = 0;
    countEl.textContent = count;
}