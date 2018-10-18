$(document).ready(function() {
  var side1 = parseInt(prompt("Please enter the length of the first side of your triangle"));
  var side2 = parseInt(prompt("Please enter the length of the second side of your triangle"));
  var side3 = parseInt(prompt("Please enter the length of the thired side of your triangle"));
  if (side1 && side2 && side3) {
    $("story").show();
    if ((side1 >=side2+side3) || (side2 >=side1+side3) || (side3 >= side2+side1)) {
      $(".result").text("NOT a triangle");
    } else if ((side1 ==side2) && (side2 == side3) && (side1 == side3)){
      $(".result").text("Equilateral");
    } else if ((side1 ==side2) || (side2 == side3) || (side1 == side3)){
      $(".result").text("Isosceles");
    } else {
      $(".result").text("Scalene");
    }
  } else {
    alert("Please enter a number for each side")
  }

});
