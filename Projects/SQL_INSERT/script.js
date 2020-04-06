var mainContainer = document.getElementById("container");
var amount = 0;
var fieldAmount = document.getElementById("fieldamount");

function setAmount() {
  amount = parseInt(fieldAmount.value);
  makeField();
}

function generateInsert() {
  var tableName = document.getElementById("tablename").value;
  var fieldText = document.getElementsByClassName("fieldtext");
  var valueText = document.getElementsByClassName("valuetext");
  var a = [];
  var b = [];
  var line1 = "INSERT INTO " + tableName;
  var line2 = [];
  var line3 = [];
  for (var i = 0; i < fieldText.length; i++) {
    a.push(fieldText[i].value);
    b.push(valueText[i].value);
  }

  for (var i = 0; i < a.length; i++) {
    if (a[i] == "") {
    } else {
      line2.push(a[i]);
    }

    if (a[i] == "" && b[i] == "") {
    } else {
      line3.push('"' + b[i] + '"');
    }
  }
  var insert = document.getElementById("showinsert");
  insert.innerHTML =
    line1 +
    "<br/>" +
    "(" +
    line2 +
    ")" +
    "<br/>" +
    "VALUES" +
    "(" +
    line3 +
    ")" +
    ";";
  insert.style.visibility = "visible";
}

function makeField() {
  for (var i = 0; i < amount; i++) {}

  for (var i = 0; i < amount; i++) {
    //makes the div for the veld
    var fieldContainer = document.createElement("div");
    fieldContainer.id = "fieldContainer_" + i;
    fieldContainer.className = "fieldcontainer";

    var fieldName = document.createElement("label");
    fieldName.id = "fieldname_" + i;
    fieldName.innerHTML = "Field Name: ";

    var fieldText = document.createElement("input");
    fieldText.type = "text";
    fieldText.id = "fieldtext_" + i;
    fieldText.className = "fieldtext";

    var valueName = document.createElement("label");
    valueName.id = "valuename_" + i;
    valueName.innerHTML = "Value: ";

    var valueText = document.createElement("input");
    valueText.type = "text";
    valueText.id = "valuetext_" + i;
    valueText.className = "valuetext";

    mainContainer.appendChild(fieldContainer);
    fieldContainer.appendChild(fieldName);
    fieldContainer.appendChild(fieldText);
    fieldContainer.appendChild(valueName);
    fieldContainer.appendChild(valueText);
  }

  var submitButton = document.createElement("input");
  submitButton.type = "button";
  submitButton.value = "Submit";
  submitButton.onclick = generateInsert;
  submitButton.id = "insertbutton";

  var showInsert = document.createElement("div");
  showInsert.id = "showinsert";

  fieldContainer.appendChild(submitButton);
  fieldContainer.appendChild(showInsert);
}
