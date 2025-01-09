var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var done = document.getElementsByClassName("done");
var j;
for (j = 0; j < done.length; j++) {
  done[j].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Escriba la descripción de una tarea");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("  ✓  ");
    span.className = "done";
    span.appendChild(txt);
    li.appendChild(span);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("  ×  ");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    for (j = 0; j < done.length; j++) {
    done[j].onclick = function() {
        var div = this.parentElement;
        div.style.background = "red";
        div.style.color = "white";
    }
}
}
var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("crear").click();
    }
});