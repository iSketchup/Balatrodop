
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var thisElmnt = elmnt;
    elmnt.onmousedown = dragMouseDown;
  


  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set new position
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function build() {

}

function buildCard(elemnt) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = "<p>karte</p>";
    cards.add = card;
    elemnt.appendChild(card);
}

// dragElement(document.getElementById("GIBTS NICHT"));

let cards = {};
build();