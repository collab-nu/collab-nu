function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	if (document.getElementById("myForm").style.display == "block") {
  		document.getElementById("myForm").style.display = "none";
  	}
}

function openFilter() {
	document.getElementById("myFilter").style.display = "block";
}

function closeFilter() {
	document.getElementById("myFilter").style.display = "none";
}

function openNotif() {
  document.getElementById("MyNotifs").style.display = "block";
  console.log("jesus");
}

function closeNotif() {
    document.getElementById("MyNotifs").style.display = "none";
}

function redirect() {
  var login = document.getElementById("login");
  location.href = "/home_user.html";
}
