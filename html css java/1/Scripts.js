function remove(element){
    element.className = "disapir"
}
function change(element){
    if (element.innerText == "login")
    {
        element.innerText = "Logout"
    }
    else
    {
        element.innerText = "login"
    } 
}
function alerta()
{
    alert("Ninja was liked")
}