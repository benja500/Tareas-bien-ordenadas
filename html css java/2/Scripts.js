var count = 1;
var count2 = 1;
var count3 = 1;
var countElement = document.querySelector("#count")
var countElement2 = document.querySelector("#count2")
var countElement3 = document.querySelector("#count3")

function add()
{
    count++
    countElement.innerText = "la cuenta es " + count;
}

function add2()
{
    count2++
    countElement2.innerText = "la cuenta es " + count2;
}
function add3()
{
    count3++
    countElement3.innerText = "la cuenta es " + count3;
}