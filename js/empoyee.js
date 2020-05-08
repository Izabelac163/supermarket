var employee = document.querySelector(".cashier");
console.log("Employee::", employee);

employee.addEventListener("click", function () {
  var employeeMsgBox = document.querySelector(".employeeMsgBox");
  employeeMsgBox.innerText = "That will be $3.99";
  employeeMsgBox.classList.add("employeeMsgBoxShow");
});

var icon = document.querySelector(".employeeIcon");

icon.addEventListener("click", function () {
  var msgBox = document.querySelector(".employeeMsgBox");
  msgBox.classList.toggle("employeeMsgBoxShow");
});
