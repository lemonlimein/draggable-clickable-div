dragElement(document.getElementById("mydiv1"), "http://www.youtube.com");
dragElement(document.getElementById("mydiv2"), "https://google.com");

// Make the DIV element draggable:
function dragElement(elmnt, bookmark) {
  var dragging = false;
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

  }



  function elementDrag(e) {
    dragging = true;
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    if (!dragging) {
      window.open(bookmark, "_blank");
    };
    document.onmouseup = null;
    document.onmousemove = null;
    document.onclick = null;
    dragging = false;
    
  }
}

// THIS FUNCTION IS OPTIONAL
var count = 1;
var inc_zIndex = function(id){
  // optional function, changes zIndex when item is clicked
  // most recently clicked item will have a higher zIndex
  document.getElementById(id).style.zIndex = count++;
}