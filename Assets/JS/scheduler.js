var now = moment();
$("#currentDay").text(now.format("MMM Do, YYYY HH:MM"));
var blockContainer = document.getElementById("container");
var startTime = 9;
var endTime = 5;
var currentHour = now.format("HH");
var hourColor = "";

// Creates text blocks for each hour
for (var i = startTime; i < endTime + 1; i++) {
    if (i < currentHour) {
        //css selector for past, current, and future hours
        hourColor = "past";
    } else if (i == currentHour) {
        hourColor = "current";
    } else {
        hourColor = "future";
    }
    var block = document.createElement("section");
    var hourLabel = document.createElement("div");
    var textEntryEl = document.createElement("form");
    var textEntryBox = document.createElement("div");
    var saveBtn = document.createElement("button");
    var textArea = document.createElement("textarea");

    block.setAttribute("class", "block");
    block.setAttribute("id", "hour-" + i);

    hourLabel.setAttribute("class", "hour-label");
    hourLabel.textContent = i + ":00";
  
    textEntryBox.setAttribute("class", "form-group");
    const textAreaId = ("textArea-" + i);
    textArea.setAttribute("id", textAreaId);
    textArea.setAttribute("class", hourColor);
  
    if (localStorage.getItem(textAreaId) !== null){
        const local = localStorage.getItem(textAreaId);
        textArea.value = local;
    } 
    textArea.setAttribute("rows", "3");
    saveBtn.textContent = "Save";
    saveBtn.setAttribute("class", "save-btn");
    saveBtn.setAttribute("id", "save-button-" + i);
    saveBtn.setAttribute("onclick", "saveData(this)");

    blockContainer.append(block);
    block.append(hourLabel);
    block.append(textEntryEl);
    textEntryEl.append(textEntryBox);
    textEntryBox.append(textArea);
    block.append(saveBtn);
}

// Save button function
function saveData(button){
    const textBox = button.previousElementSibling.firstChild.firstChild;
    var data = document.getElementById(textBox.id).value;
    localStorage.setItem(textBox.id, data);
}
