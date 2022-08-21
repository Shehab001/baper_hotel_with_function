function validation(inputField) {
  if (
    document.getElementById(inputField).value == "" ||
    isNaN(document.getElementById(inputField).value) ||
    document.getElementById("balance").innerText <
      parseFloat(document.getElementById("daw").value)
  ) {
    alert("INPUT INVALID");
    return false;
  } else {
    return true;
  }
}

function deposit(givenAmount, pushAmount) {
  let fetchAmount = parseFloat(document.getElementById(givenAmount).value);
  let setField = document.getElementById(pushAmount);
  fetchAmount += parseFloat(setField.innerText);
  setField.innerText = fetchAmount;

  if (givenAmount === "dai") {
    let balanceAmount = parseFloat(
      document.getElementById("balance").innerText
    );
    balanceAmount += parseFloat(document.getElementById(givenAmount).value);
    balance.innerText = balanceAmount;
  } else {
    let balanceAmount = parseFloat(
      document.getElementById("balance").innerText
    );
    balanceAmount -= parseFloat(document.getElementById(givenAmount).value);
    balance.innerText = balanceAmount;
  }
}

function clearField(fieldName) {
  document.getElementById(fieldName).value = "";
}
