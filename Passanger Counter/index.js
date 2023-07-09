let count = 0;
let prev_pass = document.getElementById("total-passenger");
function increment()
{
   count = count + 1;
   document.getElementById("count_el").innerText = count;
}
function restart(){
    count = 0;
    document.getElementById("count_el").innerText = count;
    document.getElementById("counter-Restarted").innerText = "Counter Restarted!" ;
}
function save()
{
      prev_pass.innerText = prev_pass.textContent +  count + " - " ;
      document.getElementById("count_el").innerText = 0;
      count = 0;
}