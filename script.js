var  charater =
document.getElementById("character");
var block = document.getElementById("block");
function jump (){
      if(charater.classList != "animate"){
        charater.classList.add("animate");
      }
        setTimeout(function(){
            charater.classList.remove("Animate");    
        },500);
}

var checkDead = setInterval(function(){
    var charcterTop =
    parseInt(window.getComputedStyle(charater).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 %% characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Loser!");
    }
},10);