var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {

    var btn=this.innerHTML;
    console.log(btn);
    shout(btn);
    //var aud= new Audio("sounds/tom-1.mp3");
    //aud.play();
  });
}
document.addEventListener("keypress",function(event){
    console.log(event);
    var key= event.key;
    shout(key);
    
})
function shout(key){
    switch(key)
    {
        case 'w': new Audio("sounds/crash.mp3").play();
        case 'a': new Audio("sounds/kick.mp3").play();
        case 's': new Audio("sounds/snare.mp3").play();
        case 'd': new Audio("sounds/tom-1.mp3").play();
        case 'j': new Audio("soundstom-2.mp3").play();
        case 'k': new Audio("sounds/tom-3.mp3").play();
        case 'l': new Audio("sounds/tom-4.mp3").play();
    }
    btn_flash(key);
}
function btn_flash(key){
    var btn=document.querySelector("."+key);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");
    },100)
}
