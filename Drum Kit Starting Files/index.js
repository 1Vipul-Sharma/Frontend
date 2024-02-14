var tot=document.querySelectorAll("button").length;
function makegreen(ele) {
    // var all = document.querySelectorAll(".drum");
    // all.forEach(function(el){
    //     el.classList.remove("pressed");
    //     el.classList.remove("green");
    // })
    ele.classList.add("pressed");
    ele.classList.add("green");
    setTimeout(function (){
        ele.classList.remove("pressed");
        ele.classList.remove("green");
    }, 100);

}
function makesound(val) {
    switch (val) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom = new Audio('./sounds/tom-1.mp3');
            tom.play();
            break;
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
                
        default:
            console.log(val);
            break;
    }
}
for(var i=0;i<tot;i++){
    var allButtons=document.querySelectorAll("button")
    allButtons[i].addEventListener("click",function (event){
        var key=this.innerText; 
        makesound(key);
        makegreen(this);
    });
}

document.addEventListener("keydown", function(event){
    // console.log(event);
    var val=event.key
    makesound(val);
    if(val=="w" || val=="a" || val=="s" | val=="d" || val=="j" || val=="k" || val=="l"){
        var ele=document.querySelector("."+val);
        makegreen(ele);
    }
    else {
        console.log(val + " key is pressed");
    }
});