i = 0;

function openRole() {
  i++
  var positions = document.getElementById('positions');
  var buttonPos = document.getElementById('addPosition');
  var newForm = document.createElement('div');
  newForm.innerHTML = "<input class='newPos' type='text' placeholder='Position name...' /> <input class=doneButton id=but"+ i + " type='button' value='Done' onClick='closeRole(this.id)'>";
  newForm.classList.add('posForm');
  positions.appendChild(newForm);
  buttonPos.style.display = "none";
}

function closeRole(id)
{
  var positions = document.getElementById('positions');
  var buttonPos = document.getElementById('addPosition');
  var thisButton = document.getElementById(id);
  buttonPos.style.display = "inherit";
  thisButton.style.display = "none";
}
