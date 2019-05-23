function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openFilter() {
	document.getElementById("myFilter").style.display = "block";
}

function closeFilter() {
	document.getElementById("myFilter").style.display = "none";
}

function redirect() {
  var login = document.getElementById("login");
  location.href = "/home_user.html";
}
