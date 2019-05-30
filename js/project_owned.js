let count = 0;

function showNewApps(){
  var new_apps = document.getElementById('new_apps');
  var new_app_overlay = document.getElementById('new_app_overlay');
  new_app_overlay.style.display="block";
}

function hideNewAppOverlay(){
  var new_app_overlay = document.getElementById('new_app_overlay');
  new_app_overlay.style.display="none";
  if(count==2){
    var new_apps = document.getElementById('new_apps');
    new_apps.style.display="none";
  }
}

function acceptViolin(){
  var accept = document.getElementById('accept-violin');
  var decline = document.getElementById('decline-violin');
  var results = document.getElementById('app-accept-1');
  accept.style.display="none";
  decline.style.display="none";
  results.style.display="block";
  results.style.color="#22940D";
  count = count+1;
}

function declineViolin(){
  var accept = document.getElementById('accept-violin');
  var decline = document.getElementById('decline-violin');
  var results = document.getElementById('app-decline-1');
  accept.style.display="none";
  decline.style.display="none";
  results.style.display="block";
  results.style.color="#C80C0C";
  count = count+1;
}

function acceptHarp(){
  var accept = document.getElementById('accept-harp');
  var decline = document.getElementById('decline-harp');
  var results = document.getElementById('app-accept-2');
  accept.style.display="none";
  decline.style.display="none";
  results.style.display="block";
  results.style.color="#22940D";
  count = count+1;
}

function declineHarp(){
  var accept = document.getElementById('accept-harp');
  var decline = document.getElementById('decline-harp');
  var results = document.getElementById('app-decline-2');
  accept.style.display="none";
  decline.style.display="none";
  results.style.display="block";
  results.style.color="#C80C0C";
  count = count + 1;
}
