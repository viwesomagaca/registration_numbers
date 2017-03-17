var ul = document.getElementById('enteredRegNumbers'); /**/
var plateNumbers = {};
var newL = {};



function display() {
    'use strict';
    var x = document.getElementById("reg").value; /*capture our input which is Registration Numbers*/
    if (x.length > 0 && x !== null) {
        var li = document.createElement('li'); /*a variable that stores our list of Registration Numbers*/
        li.textContent = x; /*Takes our registration numbers and display it in our list (li)*/
        ul.appendChild(li); /* adding our child(li) to our parent (il)*/
    }
    document.getElementById('reg').value = "";
}

function filter() {
    'use strict';
    //declare variables to store the innerHTML option list
 
    var opt = document.getElementById("option").value;
    var allRegNumbers = document.getElementById("all").innerHTML;
    var capetown = document.getElementById("capetown").innerHTML;
    var bellville = document.getElementById("bellville").innerHTML;
    var paarl = document.getElementById("paarl").innerHTML;
    var gauteng = document.getElementById("gauteng").innerHTML;
  //store the list items
    var list = document.getElementsByTagName("li");

    for (var i =0; i<list.length; i++){
  //store the looped items
  var curElem = list[i];
  var x = list[i].textContent.toUpperCase();
  //if the filter textbox is typed cape town and the looped list content startsWith "CA"
  if(opt === allRegNumbers){
    // display them
    curElem.style.display = "inline-block"
  } else if(opt === capetown && x.startsWith("CA")){
    curElem.style.display = "inline-block";
  }else if(opt === bellville && x.startsWith("CY")){
    curElem.style.display = "inline-block";
  } else if(opt === paarl && x.startsWith("CJ")){
    curElem.style.display = "inline-block";
  } else if(opt === gauteng && x.endsWith("GP")){
    curElem.style.display = "inline-block";
  } else {
    curElem.style.display = "none";
  }
}
}