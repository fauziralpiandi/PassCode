// Auth //
var passcode = "123456";
(function passcodeprotect() {
  var input = prompt("Enter PassCode!");
  while (input !== passcode) {
    alert("Try Again!");
    return passcodeprotect();
  }
	alert("Welldone!");
})();
