let num1 = 10;
let num2 = 20;
document.getElementById("num1").innerText = num1;
document.getElementById("num2").innerText = num2;
function add()
{
  let add = num1 + num2
  document.getElementById("Result").innerText = "Result: " +  add;
}
function sub()
{
  let sub = num1 - num2
  document.getElementById("Result").innerText = "Result: " +  sub;
}
function mul()
{
  let mul = num1 * num2
  document.getElementById("Result").innerText = "Result: " +  mul;
}
function div()
{
  let div = num1 / num2
  document.getElementById("Result").innerText = "Result: " +  div;
}