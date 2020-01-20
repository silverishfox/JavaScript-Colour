var outputDiv = document.getElementById('colourMe'); //reference to the div element to be changed
var ulEv = document.getElementById('ulEv'); //reference of ul element
var uInput = document.getElementById('uInput'); // reference to the text input
var colourPicker = document.getElementById('colourPicker'); // reference to the colour picker input
var rangeInput1 = document.getElementById('rangeInput1');  //reference of rangeInput1 element
var rangeInput2 = document.getElementById('rangeInput2'); //reference of rangeInput2 element
var rangeInput3 = document.getElementById('rangeInput3'); //reference of rangeInput3 element

var r1 = document.getElementById('rangeInput1').value; // var to hold the value of the rangeInput1 input
var r2 = document.getElementById('rangeInput2').value; // var to hold the value of the rangeInput2 input
var r3 = document.getElementById('rangeInput3').value; // var to hold the value of the rangeInput3 input

ulEv.addEventListener('click', changeColour, false); //adds a click eventListener to the ul element
uInput.addEventListener('change', changeColour, false); //adds a change eventListener to the input element
colourPicker.addEventListener('change', changeColour, false); //adds a change eventListener to the colour picker input
rangeInput1.addEventListener('input', changeColour, false); //adds an input eventListener to the rangeInput1 element
rangeInput2.addEventListener('input', changeColour, false); //adds an input eventListener to the rangeInput2 element
rangeInput3.addEventListener('input', changeColour, false); //adds an input eventListener to the rangeInput3 element

function changeColour(e) { //function for click event on ul element
  console.log(e.target.value);
  if(e.target != ulEv){ //if not the ul element
    var elc = e.target.innerHTML; //gets the text content of clicked element
    var el = e.target; //var for the element thats clicked
    if((e.target == uInput) || (e.target == colourPicker)) // if its the text input OR colourPicker input
      {
        var elc = e.target.value; //gets the text content of clicked element
      }
    if(e.target.type == "range") // if range inputs is used
      {
        if(e.target == rangeInput1)
          {
            r1 = e.target.value; //sets the r1 var to the value in rangeInput1
          }
        if(e.target == rangeInput2)
          {
            r2 = e.target.value; //sets the r2 var to the value in rangeInput2
          }
        if(e.target == rangeInput3)
          {
            r3 = e.target.value; //sets the r3 var to the value in rangeInput3
          }
        var elc = "rgb("+r1+","+r2+","+r3+")"; // sets the value of the elc var
      }
    outputDiv.style.color = elc; //add a style to the colourMe div using the elc value
    outputDiv.style.border = "thick solid " +elc; //adds border
    var msg = '<em>"'+elc+'"</em><br> is your choice of colour'; // creates new text content
    outputDiv.innerHTML = msg; //replaces text content in outputDiv
  }
}
