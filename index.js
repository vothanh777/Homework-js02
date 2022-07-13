function salaryCal(){
    var salary1Day = document.getElementById("salary1Day").value;
    var workingDays = document.getElementById("workingDays").value;
    var salary = salary1Day * workingDays;
    var display = document.getElementById("display");
    display.innerHTML = salary;
}

function AverageCal(){
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var num3 = +document.getElementById("num3").value;
    var num4 = +document.getElementById("num4").value;
    var num5 = +document.getElementById("num5").value;
    var averageNumber = (num1 + num2 + num3 + num4 + num5) / 5;
    var result = document.getElementById("displayAverage");
    result.innerHTML = averageNumber;
}

function usdExchange(){
    var usdAmount = +document.getElementById("usdAmount").value;
    var result = usdAmount * 23500;
    var output = document.getElementById("displayVnd");
    output.innerHTML = result;
}

function perimeterSquareCal(){
    var length = +document.getElementById("length").value;
    var width = +document.getElementById("width").value;
    var perimeter = (length + width) * 2;
    var square = length * width;
    var outputPerimeter = document.getElementById("perimeter");
    var outputSquare = document.getElementById("square");
    outputPerimeter.innerHTML = perimeter;
    outputSquare.innerHTML = square;
}

function sum(){
    var number = +document.getElementById("numSum").value;
    var num1 = number % 10;
    var num2 = (number - num1) / 10;
    var sum = num1 + num2;
    var displaySum = document.getElementById("displaySum");
    displaySum.innerHTML = sum;
}