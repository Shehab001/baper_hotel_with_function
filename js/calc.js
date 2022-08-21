document.getElementById("dbtn").addEventListener("click", function () {
  if (validation("dai") == true) {
    deposit("dai", "deposit");
  }
  clearField("dai");
});

document.getElementById("wbtn").addEventListener("click", function () {
  if (validation("daw") == true) {
    deposit("daw", "withdrawen");
  }
  clearField("daw");
});
