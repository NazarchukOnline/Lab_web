let open_win = document.querySelector(".link-use");
let close_win = document.querySelector(".button-window");
let overlay = document.querySelector(".overlay");
let win = document.querySelector(".hidden-block");
let darg_obl = document.querySelector(".titel-block");

open_win.onclick = function(){
    overlay.style.display = "block";
    win.style.display = "flex";
};

close_win.onclick = ()=>{
    overlay.style.display = "none";
    win.style.display = "none";
};


darg_obl.onmousedown = function(event) {
    function moveAt(pageX, pageY) {
      win.style.left = pageX - shiftX + 'px';
      win.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    let shiftX = event.clientX - win.getBoundingClientRect().left;
    let shiftY = event.clientY - win.getBoundingClientRect().top;

    document.body.append(win);
    document.addEventListener('mousemove', onMouseMove);
    moveAt(event.pageX, event.pageY);
      
    darg_obl.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      darg_obl.onmouseup = null;
    };
  };
  
  darg_obl.ondragstart = function() {
    return false;
  };