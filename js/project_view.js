function showOverlay(id) {
  console.log(id + 'apply')
  var overlay = document.getElementById(id + '-apply');
  overlay.style.display = "block";
  console.log(overlay);
}

function hideOverlay(id) {
  var overlay = document.getElementById(id + '-apply');
  overlay.style.display = "none";
  var button = document.getElementById(id + '-button');
  button.innerHTML = "Applied";
  button.disabled = "true";
}

function closeOverlay(id) {
	var overlay = document.getElementById(id + '-apply');
  	overlay.style.display = "none";
}
