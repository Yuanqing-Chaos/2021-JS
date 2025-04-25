// we get the history record back every time when we reload the page 
const record = localStorage.getItem("record");
let myLeads = [];

// reasonable to make html elements object constant
const inputBtn = document.getElementById("input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");

// falsy value:
//      false
//      0
//      ""
//      null     -> how developer signalize emptiness
//      undefine -> how JS signalize emptiness
//      NaN
if (record) {
    // Local Storage can ONLY store string, so we need to stringfy / parse for array
    myLeads = JSON.parse(record);
    render(myLeads);
}

// a new way to generate listener: addEventListener()
// "click" = event type
// function = the function to execute after the event occur
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);  // return the text in the input field
    /* 
     * we store all the history records in Local Storage
     * so that we won't lose them when we refresh or close the webpage
     */
    localStorage.setItem("record", JSON.stringify(myLeads));
    inputEl.value = "";
    render(myLeads);
});

function render(arr) {
    // create a temp string to store the html elements,
    // because calling innerHTML has cost
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        // <li>: element in the list
        // <a>: anchor tag to put the hyperlink
        // target = "_blank": open the link on another tab
        temp += `<li>
                    <a target="_blank" href="${arr[i]}"> ${arr[i]} </a>
                 </li>`;
    }
    // innerHTML allow you to write HTML code in JS
    ulEl.innerHTML = temp;
    /* ANOTHER WAY: 
       // create element 
       const li = document.createElement("li");
       // set the element content
       li.textContent = temp;
       // append it back to HTML element
       ulEl.append(li);
    */
}

tabBtn.addEventListener("click", function() {
    // get the current tab from Chrome
    //      currentWindow: the window this extension is opened
    //      active: the web page that showed on the current window
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("record", JSON.stringify(myLeads));
        render(myLeads);
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})