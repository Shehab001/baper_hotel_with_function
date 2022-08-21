document.getElementById("btn").addEventListener("click", function () {
  getEmail = document.getElementById("email");
  getEmail = getEmail.value;

  getPassword = document.getElementById("password");
  getPassword = getPassword.value;
  console.log(getEmail, getPassword);
  if (getEmail == "mdshehab00@gmail.com" && getPassword == "0000060000") {
    window.location.href = "home.html";
  } else {
    alert("Invalid Email/Password");
  }
});

// let depositAmount = 0;
// let withdrawenAmount = 0;
// let balanceAmount = 0;
// let deposit = 0;
// let withdrawen = 0;
// let balance = 0;

// //deposit button works
// document.getElementById("dbtn").addEventListener("click", function () {
//   if (
//     document.getElementById("dai").value == "" ||
//     isNaN(document.getElementById("dai").value)
//   ) {
//     alert("INPUT INVALID");
//   } else {
//     depositAmount += parseFloat(document.getElementById("dai").value);
//     //console.log(depositAmount);
//     deposit = document.getElementById("deposit");
//     deposit.innerText = depositAmount;

//     //set balance
//     balanceAmount += parseFloat(document.getElementById("dai").value);
//     balance = document.getElementById("balance");
//     balance.innerText = balanceAmount;
//   }
//   // clearing the input field
//   document.getElementById("dai").value = "";
// });
// //withdrawen button works

// document.getElementById("wbtn").addEventListener("click", function () {
//   if (
//     document.getElementById("daw").value == "" ||
//     isNaN(document.getElementById("daw").value)
//   ) {
//     alert("INPUT INVALID");
//   } else {
//     if (parseInt(document.getElementById("daw").value) > balanceAmount) {
//       alert("Can not Withdraw");
//     } else {
//       withdrawenAmount += parseFloat(document.getElementById("daw").value);
//       balanceAmount -= parseFloat(document.getElementById("daw").value);

//       //set withdrawen value
//       withdrawen = document.getElementById("withdrawen");
//       withdrawen.innerText = withdrawenAmount;

//       //set balance
//       balance = document.getElementById("balance");
//       balance.innerText = balanceAmount;
//       // console.log(withdrawenAmount);
//     }
//   }
//   // clearing the input field
//   document.getElementById("daw").value = "";
// });
