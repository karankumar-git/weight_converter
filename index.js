document.getElementById("output").style.visibility="hidden";
document.getElementById("inputkg").addEventListener("input",function(e){
    let kg = e.target.value;

    document.getElementById("gramsOutput").innerHTML =kg*1000 + " gm";
    document.getElementById("poundsOutput").innerHTML= kg*2.204622;
    document.getElementById("ouncesOutput").innerHTML= kg*35.27396;
    document.getElementById("output").style.visibility="visible";
});
if(kg==0){
    document.getElementById("output").style.visibility="hidden";
}
