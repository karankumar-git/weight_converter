document.getElementById("output").style.visibility="hidden";
document.getElementById("inputkg").addEventListener("input",function(e){
    let kg = e.target.value;

    document.getElementById("gramsOutput").innerHTML =kg*1000 + " gm";
    document.getElementById("poundsOutput").innerHTML= kg*2.204622 + " lb";
    document.getElementById("ouncesOutput").innerHTML= kg*35.27396 + " oz";
    document.getElementById("output").style.visibility="visible";
    let elem = document.getElementsByClassName("card-block")[0];
    elem.classList.add('animate__animated', 'animate__rotateInUpLeft');
    let elem1 = document.getElementsByClassName("card-block")[1];
    elem1.classList.add('animate__animated', 'animate__rotateInUpRight');
    let elem2 = document.getElementsByClassName("card-block")[2];
    elem2.classList.add('animate__animated', 'animate__rotateInUpLeft');
    
});


// let main = document.getElementsByTagName("h4");
// let  createEle = docume nt.createElement("p");
// createEle.innerText="this is a created line.";
// main[0].appendChild(createEle);
