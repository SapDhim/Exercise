function add()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = Number(num1)+Number(num2);
    document.getElementById("output").value=num3;
    
}
function multiply()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = [Number(num1)]*[Number(num2)];
    document.getElementById("output").value=num3;
    
}
function subtract()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = Number(num1)-Number(num2);
    document.getElementById("output").value=num3;
    
}
function divide()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = [Number(num1)]/[Number(num2)];
    document.getElementById("output").value=num3;
    
}
function mod()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = [Number(num1)]%[Number(num2)];
    document.getElementById("output").value=num3;
    
}

