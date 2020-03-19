// JavaScript File

// change background color to lightblue:
function changeBodyBg(){
  document.body.style.backgroundColor = "lightblue";
}

// addEventListener
document.getElementById("button").addEventListener("click", function(){
  alert ("Hello!");
});

// change value of text field
function myFunction(text) {
  document.getElementById("text").value = "Shawn";
}