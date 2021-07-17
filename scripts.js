function Calc() {

  var h = document.getElementById("height").value;
  var w = document.getElementById("weight").value;
  var bmi = w/((h*h)/10000);
  var bmii = (bmi.toFixed(2))

    document.getElementById("output").innerHTML="Your BMI is " + bmii;
  
}
